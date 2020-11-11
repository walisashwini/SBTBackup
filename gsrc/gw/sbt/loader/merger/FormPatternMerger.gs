package gw.sbt.loader.merger

uses gw.sbt.artifacts.ArtifactId
uses gw.sbt.artifacts.forms.FormPatternModel
uses gw.sbt.artifacts.forms.PolicyFormPattern
uses gw.sbt.artifacts.lookups.FormLookup
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.loader.goal.AvailabilityGoal
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.SBTUpdate
uses gw.sbt.util.LoaderUtil
uses org.apache.commons.lang3.time.DateUtils
uses org.slf4j.LoggerFactory

//form pattern and lookup merger
class FormPatternMerger {

  var _messageReporter: MessageReporter
  var _policyLine: String

  construct(messageReporter: MessageReporter, policyLine: String) {
    _messageReporter = messageReporter
    _policyLine = policyLine
  }

  function merge(availabilityGoal : AvailabilityGoal,
                 currentFormPatternModel : FormPatternModel,
                 newFormPatternModel : FormPatternModel,
                 jurisdiction : String,
                 adoptionDate : Date,
                 entityReader : LoaderEntityReader,
                 isIndependentState : boolean,
                 availabilityGoalsMapForMissingForms : Map<String, AvailabilityGoal>,
                 sbtUpdate : SBTUpdate) : PolicyFormPattern {
    var currentFormPattern = currentFormPatternModel.FormPattern
    var newFormPattern = newFormPatternModel.FormPattern
    var resultFormPattern : PolicyFormPattern = null

    var mergingMode = getMergingMode(currentFormPattern, newFormPattern, entityReader)

    switch (mergingMode) {
      case NEW_PATTERN: {  // add the new pattern, and create jurisdiction lookup if needed.
        resultFormPattern = checkIfFormPatternExistsInDB(entityReader, newFormPattern)
        // NO_CHANGE: user rejects the new edition, only create the pattern and ignore lookups
        // UNAVAILABLE: Policy Center doesn't require Forms to have lookups (tested) - it can import a form pattern with no lookups at all
        if (availabilityGoal.Outcome == AVAILABLE) {
          var applicableLookupInNewConfig = getApplicableLookup(newFormPattern.Lookups, jurisdiction, adoptionDate)
          adaptLookup(resultFormPattern, applicableLookupInNewConfig, Lookup.AVAILABLE, jurisdiction, adoptionDate)
          resultFormPattern.addLookup(applicableLookupInNewConfig)
        }

        break
      }
      case NEW_EDITION_WITH_STATE_REPLACEMENT: { // special case:  state replacement on a new countrywide edition, and the new countrywide edition is not merged in yet.
        //1). need to bring in new edition as state version: add the missing cw form into map, will be processed later.
        var form = sbtUpdate.Forms.firstWhere(\form -> form.Code == newFormPattern.UseInsteadOfCode)
        var availabilityGoalForMissingForm = AvailabilityGoal.make(ArtifactId.forArtifact(form), AvailabilityGoal.Outcome.AVAILABLE)
        availabilityGoalsMapForMissingForms.put(newFormPattern.FormNumber, availabilityGoalForMissingForm)
        //2). for state-replacement form, no need to check the availability goal, bring in as is.
        resultFormPattern = checkIfFormPatternExistsInDB(entityReader, newFormPattern)
        var applicableLookupInNewConfig = getApplicableLookup(newFormPattern.Lookups, jurisdiction, adoptionDate)
        adaptLookup(resultFormPattern, applicableLookupInNewConfig, applicableLookupInNewConfig.IsAvailable ? Lookup.AVAILABLE : Lookup.UNAVAILABLE, jurisdiction, adoptionDate)
        resultFormPattern.addLookup(applicableLookupInNewConfig)
        break
      }
      case NEW_EDITION: { // add the new edition, and create jurisdiction lookup if needed (note: unavailable lookup is not needed)
        resultFormPattern = checkIfFormPatternExistsInDB(entityReader, newFormPattern)
        // NO_CHANGE: user rejects the new edition, only create the pattern and ignore lookups
        // UNAVAILABLE: it is not necessary to create the lookup
        if (availabilityGoal.Outcome != NO_CHANGE) {
          if (availabilityGoal.Outcome == AVAILABLE) { // it is not necessary to create the unavailable lookup
            var applicableLookupInNewConfig = getApplicableLookup(newFormPattern.Lookups, jurisdiction, adoptionDate)
            adaptLookup(resultFormPattern, applicableLookupInNewConfig, Lookup.AVAILABLE, jurisdiction, adoptionDate)
            resultFormPattern.addLookup(applicableLookupInNewConfig)
          }
          // no matter available or unavailable, the existing pattern needs to be end-dated
          if(currentFormPattern.Code != newFormPattern.UseInsteadOfCode) {
            currentFormPattern = checkIfFormPatternExistsInDB(entityReader, currentFormPattern, true)
            endDateApplicableLookup(currentFormPattern, jurisdiction, adoptionDate, true, true)
            currentFormPatternModel.IsChanged = true
            currentFormPatternModel.FormPattern = currentFormPattern

            // USPCA-786:  needing an entry in the configration report
            if(isIndependentState) {
              _messageReporter.ConflictReporter.reportExpiredPolicyFormForIndependentState(currentFormPattern.FormNumber, currentFormPattern.Edition, currentFormPattern.Description)
            }
          }
        }
        break
      }
      case REMOVED_PATTERN: { // remove the pattern
        if (availabilityGoal.Outcome == NO_CHANGE) {  // pattern removed, but user rejects
          return null // no need to continue, return null
        } else {
          //end-date the existing lookup, otherwise PC will complain the time overlap.
          resultFormPattern = checkIfFormPatternExistsInDB(entityReader, currentFormPattern)
          var applicableLookupInCurrentConfig = getApplicableLookup(currentFormPattern.Lookups, jurisdiction, adoptionDate)
          endDateApplicableLookup(resultFormPattern, jurisdiction, adoptionDate, false)
          //create an unavailable jurisdiction lookup
          var unAvailableLookupToBeAdded = applicableLookupInCurrentConfig.copy()
          adaptLookup(resultFormPattern, unAvailableLookupToBeAdded, Lookup.UNAVAILABLE, jurisdiction, adoptionDate) // should not keep the PID.
          resultFormPattern.addLookup(unAvailableLookupToBeAdded)
        }
        break
      }
      case SAME_PATTERN: { // same pattern, but availability might be changed.
        var internalGroupCodeUpdatedRequired = currentFormPattern.InternalGroupCode.Empty and newFormPattern.InternalGroupCode.HasContent
        if (availabilityGoal.Outcome == NO_CHANGE) { // same pattern, same availability goal, or different availability goal, but user rejects
          if (internalGroupCodeUpdatedRequired) {
            resultFormPattern = checkIfFormPatternExistsInDB(entityReader, newFormPattern)
            resultFormPattern.InternalGroupCode = newFormPattern.InternalGroupCode
          } else {
            return null
          }
        } else {// same pattern, different availability goal
          var applicableLookupInCurrentConfig = getApplicableLookup(currentFormPattern.Lookups, jurisdiction, adoptionDate)
          var availabilityInResultForm = lookupAvailabilityForOutcome(availabilityGoal.Outcome)
          if (availabilityInResultForm == applicableLookupInCurrentConfig.Availability) { // if there is a lookup already satisfying the target outcome, it is not necessary to create a new lookup.
            return null
          }

          resultFormPattern = checkIfFormPatternExistsInDB(entityReader, newFormPattern)
          // Remove all future lookups for this state if there is any
          removeFutureLookups(resultFormPattern.Lookups, jurisdiction, adoptionDate)
          endDateApplicableLookup(resultFormPattern, jurisdiction, adoptionDate, false)

          var cwActiveLookup = countrywideActiveLookupFor(resultFormPattern.Lookups, adoptionDate)

          if (cwActiveLookup.Availability == availabilityInResultForm)
            break

          // Find a sample lookup to copy from the incoming package first, then in current configuration
          var newLookup = sampleLookupForSubjectUseStateIfAvailable(newFormPattern.Lookups)
          if (newLookup == null) {
            newLookup = sampleLookupForSubjectUseStateIfAvailable(currentFormPattern.Lookups)
          }
          newLookup = newLookup.copy()
          adaptLookup(resultFormPattern, newLookup, availabilityInResultForm, jurisdiction, adoptionDate)
          resultFormPattern.addLookup(newLookup)
          if (internalGroupCodeUpdatedRequired) {
            resultFormPattern.InternalGroupCode = newFormPattern.InternalGroupCode
          }
        }
        break
      }
      default:  // should not happen
        return null
    }
    return resultFormPattern
  }


  private enum FORM_MERGE_MODE {
    NEW_PATTERN,   // new form pattern is added
    REMOVED_PATTERN,  // a form pattern is removed
    NEW_EDITION,       // new edition for an existing form pattern
    NEW_EDITION_WITH_STATE_REPLACEMENT, // new edition with state replacement
    SAME_PATTERN  // same form pattern, availability might be changed

  }

  private function formPatternExistsInDB(entityReader : LoaderEntityReader, formCode : String) : boolean {
    var formPatternInDB = entityReader?.findFormPattern(formCode)
    return formPatternInDB != null
  }

  private function isStateReplacementForm(formPattern : PolicyFormPattern) : boolean {
    return formPattern.UseInsteadOfCode.HasContent
  }

  private function checkIfFormPatternExistsInDB(entityReader : LoaderEntityReader, formPattern : PolicyFormPattern,
                                                forceCopyProvidedPatternLookups : boolean = false) : PolicyFormPattern {
    var formPatternInDB = entityReader?.findFormPattern(formPattern.Code)
    if (formPatternInDB != null) {
      return createFormPattern(formPatternInDB, true)
    } else {
      //try with form number (the formcode might be changed in current DB, ie, prefix with line code)
      var formPatternsInDB = entityReader?.findFormPatterns(formPattern.FormNumber, _policyLine)
      formPatternInDB = formPatternsInDB?.firstWhere(\dbFormPattern -> hasSameFormCode(dbFormPattern, formPattern))
      if (formPatternInDB != null) {
        return createFormPattern(formPatternInDB, true)
      }
      return createFormPattern(formPattern, forceCopyProvidedPatternLookups)
    }
  }

  private function hasSameFormCode(formPattern1 : PolicyFormPattern, formPattern2 : PolicyFormPattern) : boolean {
    if (formPattern1.Code == formPattern2.Code) {
      return true
    } else {
      // To support IL forms on which customers add a LOB prefix, ie: GL, CP etc)
      var formCode1 = formPattern1.Code
      var formCode2 = formPattern2.Code
      var isStateReplacementForm1 = isStateReplacementForm(formPattern1)
      var isStateReplacementForm2 = isStateReplacementForm(formPattern2)
      if((isStateReplacementForm1 and not isStateReplacementForm2) or (not isStateReplacementForm1 and isStateReplacementForm2)){
        // only one is state-repalcement form, ie: BP05240116_BP05240115 and BP05240115 have different form code.
        return false
      } else if (formCode1.endsWith(formCode2) or formCode2.endsWith(formCode1)) { // prefixed formCode is treated as same formCode
        // examples:
        // GLIL09520115 has same form code as IL09520115
        // GLIL09520115_IL09201112  has same form code as IL09520115_IL09201112
        return true
      }
    }
    return false
  }

  private function getMergingMode(currentFormPattern : PolicyFormPattern,
                                  newFormPattern : PolicyFormPattern,
                                  entityReader : LoaderEntityReader) : FORM_MERGE_MODE {
    if (currentFormPattern == null and newFormPattern != null) {
      return FORM_MERGE_MODE.NEW_PATTERN
    } else if (currentFormPattern != null and newFormPattern == null) {
      return FORM_MERGE_MODE.REMOVED_PATTERN
    } else if (hasSameFormCode(currentFormPattern, newFormPattern)) {
      return SAME_PATTERN
    } else { // different codes mean editions are different
      if (isStateReplacementForm(newFormPattern)) { // need to check the CW Form existence.
        var formExists = formPatternExistsInDB(entityReader, newFormPattern.UseInsteadOfCode)
        if (not formExists) {
          return NEW_EDITION_WITH_STATE_REPLACEMENT
        }
      }
      return NEW_EDITION
    }
  }

  private function createFormPattern(formPattern : PolicyFormPattern, keepLookups: boolean) : PolicyFormPattern{
    var copiedFormPattern = formPattern.copy()
    if(not keepLookups) {
      copiedFormPattern.removeLookups()
    }
    return copiedFormPattern
  }

  private function endDateApplicableLookup(formPattern : PolicyFormPattern, jurisdiction : String, adoptionDate : Date, createJurisdictionLookup : boolean, dateCheckRequired : boolean = false) {
    var applicableLookupInCurrentConfig = getApplicableLookup(formPattern.Lookups, jurisdiction, adoptionDate)
    if (applicableLookupInCurrentConfig != null) {
      if (applicableLookupInCurrentConfig.Jurisdiction == jurisdiction) {
        // PC validation fails if EndEffectiveDate is same as the form's StartEffectiveDate,
        // thus in this case PCA adds 1ms to adoptionDate.
        var expirationDate = adoptionDate
        if (dateCheckRequired and adoptionDate.equals(applicableLookupInCurrentConfig.StartEffectiveDate)) {
          expirationDate = DateUtils.addMilliseconds(adoptionDate, 1)
        }
        applicableLookupInCurrentConfig.EndEffectiveDate = expirationDate
      } else if (createJurisdictionLookup) {
        //copy from countrywide, make it jurisdiction specific unavailable.
        var endEffectiveDateLookupInCurrentConfig = applicableLookupInCurrentConfig.copy()
        endEffectiveDateLookupInCurrentConfig.PublicId = LoaderUtil.generatePublicId() // can't re-use the same PID as CountryWide version
        endEffectiveDateLookupInCurrentConfig.Jurisdiction = jurisdiction
        endEffectiveDateLookupInCurrentConfig.StartEffectiveDate = adoptionDate
        endEffectiveDateLookupInCurrentConfig.Availability = Lookup.UNAVAILABLE
        formPattern.addLookup(endEffectiveDateLookupInCurrentConfig)
      }
    }
  }

  //###########Following Helper/Utility functions are same or similiar as in LookupsMerger##############//
  //###########Will refactor later##############//
  //get a lookup prototype for creating a new lookup
  private function sampleLookupForSubjectUseStateIfAvailable(lookups : List<FormLookup>) : FormLookup {
    return lookups.firstWhere(\prototype -> prototype.IsState)?:lookups.first()
  }

  //return this jursidiction's lookup or countrywide lookup
  private function getApplicableLookup(lookups : List<FormLookup>, jurisdiction : String, adoptionDate : Date) : FormLookup {
    var activeLookups = activeLookupsFor(lookups, adoptionDate)
    return activeLookups.firstWhere(\ lookup -> lookup.Jurisdiction == jurisdiction) ?: activeLookups.firstWhere(\lookup -> LoaderUtil.isJurisdictionCW(lookup.Jurisdiction))
  }

  private function countrywideActiveLookupFor(lookups : List<FormLookup>, adoptionDate : Date) : FormLookup {
    return activeLookupsFor(lookups, adoptionDate).firstWhere(\ lookup -> not lookup.IsState)
  }

  private function activeLookupsFor(lookups : List<FormLookup>, adoptionDate : Date) : List<FormLookup> {
    return lookups.where(\ lookup ->
        LoaderUtil.isDateWithinRange(adoptionDate, lookup.StartEffectiveDate, lookup.EndEffectiveDate))
  }

  //remove future state lookups - if lookup effective date is on or after the adoption date
  private function removeFutureLookups(lookups : List<FormLookup>, jurisdiction : String, adoptionDate : Date) {
    var futureStateLookups = lookups.where(\lookup -> lookup.Jurisdiction == jurisdiction
        and lookup.StartEffectiveDate?.afterOrEqual(adoptionDate))
    lookups.removeAll(futureStateLookups)
  }

  //Create a new lookup with effective date, state, availability, etc.
  private function adaptLookup(formPattern: PolicyFormPattern, lookup : FormLookup, availability : String, state : String, adoptionDate : Date) {
    lookup.PublicId = LoaderUtil.generatePublicId()
    lookup.EndEffectiveDate = null
    lookup.StartEffectiveDate = adoptionDate
    if (LoaderUtil.isJurisdictionCW(lookup.Jurisdiction)) {
      LoggerFactory.getLogger("PCA").warn("FormPattern ${{formPattern.Code, formPattern.Description}} has been converted from CW to State.")
      _messageReporter.reportForAudit({formPattern.Code, formPattern.Description}, POLICY_FORM)
    }
    lookup.Jurisdiction = state   // Always a state-specific lookup
    lookup.Availability = availability
  }

  //Transform availability goal to lookup availability
  private function lookupAvailabilityForOutcome(outcome : AvailabilityGoal.Outcome) : String {
    if (outcome == AVAILABLE) {
      return Lookup.AVAILABLE
    } else if (outcome == UNAVAILABLE) {
      return Lookup.UNAVAILABLE
    } else {
      throw new IllegalArgumentException("Unexpected outcome: " + outcome)
    }
  }
}