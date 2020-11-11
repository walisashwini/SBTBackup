package gw.sbt.loader.merger

uses gw.sbt.artifacts.ArtifactId
uses gw.sbt.artifacts.lookups.ClausePatternLookups
uses gw.sbt.artifacts.lookups.Lookups
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.artifacts.lookups.PolicyLinePatternLookups
uses gw.sbt.loader.goal.AvailabilityGoal
uses gw.sbt.loader.goal.AvailabilityGoal.Outcome
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.pca.view.presenter.PresenterUtil
uses gw.sbt.util.LoaderUtil
uses org.slf4j.LoggerFactory
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.CovTermOpt
uses gw.api.productmodel.CovTermPattern

class LookupsMerger<T extends Lookups> {

  /*
  Overall workflow:
    Based on the availability goal
    Return if no change
    Get the type (coverage/covterm/option) and id
    Get the applicable lookup (from the type/id)
    If the applicable lookup is a state lookup, end-date it
    Add a new state lookup

    Note that in PD, lookup rows with same set of field values cannot overlap in time,
    and the fields are state, UWCompanyCode, JobType and PolicyType.
    Hence, having overlapping CW and state lookups with the same availability is ok.
   */

  var _messageReporter : MessageReporter
  var _cwEdition : String as CwEdition
  var _updateRequired : boolean as UpdateRequired

  construct(messageReporter : MessageReporter) {
    _messageReporter = messageReporter
  }

  static function forClause(messageReporter : MessageReporter) : LookupsMerger<ClausePatternLookups> {
    return new LookupsMerger<ClausePatternLookups>(messageReporter)
  }

  static function forPolicyLine(messageReporter : MessageReporter) : LookupsMerger<PolicyLinePatternLookups> {
    return new LookupsMerger<PolicyLinePatternLookups>(messageReporter)
  }

  function mergeAll(
      availabilityGoals : List<AvailabilityGoal>,
      currentConfigLookups : T,
      updateLookups : T,
      adoptionDate : Date,
      state : String
  ) : T {
    var resultConfigLookups = (currentConfigLookups.EmptyElement
        ? updateLookups.newEmpty()
        : currentConfigLookups.copy()) as T
    availabilityGoals.each(\ availabilityGoal ->
        mergeRecursively(
            availabilityGoal,
            currentConfigLookups,
            updateLookups,
            resultConfigLookups,
            adoptionDate,
            state))

    if(not _updateRequired) {
      return resultConfigLookups.newEmpty() as T
    }
    _updateRequired = false

    return resultConfigLookups
  }

  function merge(
      availabilityGoal : AvailabilityGoal,
      currentConfigLookups : T,
      updateLookups : T,
      adoptionDate : Date,
      state : String,
      cwEdition : String
  ) : T {
    _cwEdition = cwEdition
    return mergeAll({ availabilityGoal }, currentConfigLookups, updateLookups, adoptionDate, state)
  }

  private function mergeRecursively(
      availabilityGoal : AvailabilityGoal,
      currentConfigLookups : T,
      updateLookups : T,
      resultConfigLookups : T,
      adoptionDate : Date,
      state : String) {

    mergeCurrentLevel(availabilityGoal, currentConfigLookups, updateLookups, resultConfigLookups, adoptionDate, state)

    availabilityGoal.Children.each(\ childGoal ->
        mergeRecursively(childGoal, currentConfigLookups, updateLookups, resultConfigLookups, adoptionDate, state))
  }

  private function mergeCurrentLevel(
      availabilityGoal : AvailabilityGoal,
      currentConfigLookups : T,
      updateLookups : T,
      resultConfigLookups : T,
      adoptionDate : Date,
      state : String) {


    // Need this because new Unavailable artifacts don't receive lookups which puts PC in bad state
    var isNewPatternAndLookupArtifact = isNewPatternAndLookup(availabilityGoal, updateLookups, currentConfigLookups)
    if (availabilityGoal.Outcome == NO_CHANGE) {
      if (isNewPatternAndLookupArtifact) { // assumption here is that  we won't get into this function unless
        // it was a new UNAVAILABLE artifact that didn't exist in current/adopted
        availabilityGoal = new AvailabilityGoal(
            :subject = availabilityGoal.Subject,
            :outcome = Outcome.UNAVAILABLE
        )
      } else {
        return
      }
    }

   // Check to see if a matching lookup can be already found in the resulting configuration
    var applicableLookupInCurrentConfig = resultConfigLookups.availabilityDeterminingLookupFor(availabilityGoal.Subject, adoptionDate)

    // Remove all future lookups if there is any (necessary for state-update, won't have any impact for state-add)
    removeFutureLookups(availabilityGoal.Subject, resultConfigLookups, adoptionDate)

    var newLookupRequired = true

    var targetLookupAvailability = lookupAvailabilityForOutcome(availabilityGoal.Outcome)
    var applicableLookupSatisfiesAvailabilityGoal = applicableLookupInCurrentConfig.Availability == targetLookupAvailability
    if (applicableLookupSatisfiesAvailabilityGoal) { // if the lookup satisfies the availability goal, no need to create a new lookup
      if (applicableLookupInCurrentConfig.IsState and applicableLookupInCurrentConfig.EndEffectiveDate !=null) { // if it is a jurisdiction lookup, the end-date should be removed if any.
        applicableLookupInCurrentConfig.EndEffectiveDate = null
        _updateRequired = true
      }
      newLookupRequired = false
    } else {
      if (applicableLookupInCurrentConfig.IsState) { // if the applicable lookup is jurisdiction lookup
        // If the jurisdiction lookup doesn't satisfy the availability goal, end-date it; also, note the need for a
        // new jurisdiction lookup unless the goal is satisfied by a CW lookup.
        applicableLookupInCurrentConfig.EndEffectiveDate = adoptionDate
        _updateRequired = true
        var activeCWLookup = resultConfigLookups.cwActiveLookupFor(availabilityGoal.Subject, adoptionDate)
        if ((activeCWLookup == null and targetLookupAvailability == Lookup.UNAVAILABLE)  // if CW Lookup doesn't exist and new Lookup availability is Unavailable
            or (activeCWLookup.Availability == targetLookupAvailability)) {              // or CW Lookup's availability is same as new Lookup's availability
          newLookupRequired = false
          if (activeCWLookup.EndEffectiveDate != null) {
            activeCWLookup.EndEffectiveDate = null
            _updateRequired = true
          }
        }
      }
    }

    if (newLookupRequired) { // if no satisfied lookup found in current config, a new jurisdiction lookup is required.
      // Find a sample lookup to copy from the incoming package first, then in current configuration
      var newLookup = sampleLookupForSubjectUseStateIfAvailable(updateLookups, availabilityGoal.Subject)
      var newLookupFromUpdate = true
      if (newLookup == null) {
        newLookup = sampleLookupForSubjectUseStateIfAvailable(currentConfigLookups, availabilityGoal.Subject, true)
        newLookupFromUpdate = false
      }
      newLookup = newLookup.copy()
      var reportForAudit = (not newLookup.IsState)
      var keepUpdateLookupPublicId = newLookupFromUpdate and newLookup.IsState and
          (applicableLookupInCurrentConfig == null or not applicableLookupInCurrentConfig.IsState)
      adaptLookup(newLookup, availabilityGoal, state, adoptionDate, keepUpdateLookupPublicId)

      if (reportForAudit) {
        var path = getPathRecursivelly(availabilityGoal)
        _messageReporter.reportForAudit(path, MessageReporter.getReportSourceType(availabilityGoal.Subject.Type), CwEdition)
        LoggerFactory.getLogger("PCA").warn("${availabilityGoal.Subject.Type} Lookup ${path} has been converted from CW to State.")
      }
      resultConfigLookups.add(newLookup)
    }
  }


  private function isNewPatternAndLookup(availabilityGoal :  AvailabilityGoal, updateLookups : Lookups, currentLookups : Lookups) : boolean {
    if (availabilityGoal.Subject.Type != CLAUSE
        and availabilityGoal.Subject.Type != COV_TERM
        and availabilityGoal.Subject.Type != COV_TERM_OPTION) {
      return false
    }

    var optionId : String = null
    var termId : String = null
    var clauseId : String

    if (availabilityGoal.Subject.Type == COV_TERM_OPTION) {
      optionId = availabilityGoal.Subject.PublicId
      termId = availabilityGoal.Parent.Subject.PublicId
      clauseId = availabilityGoal.Parent.Parent.Subject.PublicId
    } else if (availabilityGoal.Subject.Type == COV_TERM) {
      termId = availabilityGoal.Subject.PublicId
      clauseId = availabilityGoal.Parent.Subject.PublicId
    } else if (availabilityGoal.Subject.Type == CLAUSE){
      clauseId = availabilityGoal.Subject.PublicId
    }

    if (clauseId == null) {
      LoggerFactory.getLogger("PCA").error("Could not find clauseId attached to this AvailabilityGoal")
    }


    var patternExists = PresenterUtil.checkPatternExistence(clauseId, termId, optionId) or
        currentLookups.getLookups(availabilityGoal.Subject.PublicId).HasElements
    var lookupExistsInUpdate = updateLookups.getLookups(availabilityGoal.Subject.PublicId).HasElements

    return not patternExists and lookupExistsInUpdate
  }

  private function getPathRecursivelly(availabilityGoal : AvailabilityGoal) : List<String> {
    var path : List<String>
    if (availabilityGoal.Parent == null) {
      return {availabilityGoal.Subject.PublicId}
    } else {
      path = getPathRecursivelly(availabilityGoal.Parent)
      path.add(availabilityGoal.Subject.PublicId)
      return path
    }
  }

  //////////////Helper methods///////////////
  //Create a new lookup with effective date, state, availability, etc.
  private function adaptLookup(lookup : Lookup, goal : AvailabilityGoal, state : String, adoptionDate : Date, keepUpdateLookupPublicId : boolean) {
    if (not keepUpdateLookupPublicId) {
      lookup.PublicId = LoaderUtil.generatePublicId()
    }
    lookup.EndEffectiveDate = null
    lookup.StartEffectiveDate = adoptionDate
    lookup.State = state   // Always a state-specific lookup
    lookup.Availability = lookupAvailabilityForOutcome(goal.Outcome)
    _updateRequired = true
  }

  //Transform availability goal to lookup availability
  private function lookupAvailabilityForOutcome(outcome : Outcome) : String {
    if (outcome == AVAILABLE) {
      return Lookup.AVAILABLE
    } else if (outcome == UNAVAILABLE) {
      return Lookup.UNAVAILABLE
    } else {
      throw new IllegalArgumentException("Unexpected outcome: " + outcome)
    }
  }

  //get a lookup prototype for creating a new lookup
  private function sampleLookupForSubjectUseStateIfAvailable(lookups : T, subject : ArtifactId, sampleRequired : boolean = false) : Lookup {
    if (lookups == null) {
      return null
    }
    var prototypes = lookups.getLookups(subject.PublicId)
    if (prototypes.Empty and sampleRequired) {
      throw new IllegalArgumentException("No lookup was found for a subject with public ID '${subject.PublicId}'.")
    } else if(prototypes.Empty and not sampleRequired) {
      return null
    }

    _updateRequired = true

    // Here finding a lookup with empty jurisdiction/state might be OK
    return prototypes.firstWhere(\ prototype -> prototype.IsState) ?: prototypes.first()
  }

  //remove future state lookups - if lookup effective date is on or after the adoption date
  private function removeFutureLookups(artifact : ArtifactId, lookups : T, adoptionDate : Date) {
    var futureStateLookups = lookups.getLookups(artifact.PublicId)
        .where(\ lookup -> lookup.IsState and lookup.StartEffectiveDate?.afterOrEqual(adoptionDate))

    if(not futureStateLookups.Empty) {
      _updateRequired = true
    }
    lookups.removeAll(futureStateLookups)
  }
}