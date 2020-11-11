package gw.sbt.loader.goal

uses gw.sbt.artifacts.ArtifactId
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.loader.goal.AvailabilityGoal.Outcome
uses gw.sbt.model.Intent
uses gw.sbt.model.ProductModelObject
uses gw.sbt.model.UpdateDecision
uses java.lang.IllegalArgumentException
uses java.util.List
uses gw.sbt.model.HasPublicId
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.CovTermOption
uses gw.sbt.model.comparisons.ClauseComparison
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.comparisons.CovTermComparison
uses gw.sbt.model.form.PolicyForm

class AvailabilityGoalGenerator<K> {

  enum LoadDecision { ACCEPT, REJECT }

  var _getChangeType(k : K) : Intent
  var _getChildren(k : K) : List<K>
  var _getUserDecision (k : K) : UpdateDecision
  var _getCanonicalVersion(k : K) : HasPublicId
  var _isStateUpdate : boolean as IsStateUpdate
  var _isIndependentStateAdd: boolean as IsIndependentStateAdd

  construct() {
  }

  protected construct(getChangeType(k : K) : Intent,
                      getChildren(k : K) : List<K>,
                      getUserDecision(k : K) : UpdateDecision,
                      getCanonicalVersion(k : K) : HasPublicId,
                      isStateUpdate : boolean,
                      isIndependentStateAdd: boolean) {
    _getChangeType = getChangeType
    _getChildren = getChildren
    _getUserDecision = getUserDecision
    _getCanonicalVersion = getCanonicalVersion
    _isStateUpdate = isStateUpdate
    _isIndependentStateAdd = isIndependentStateAdd
  }

  private function loadStateUpdateDecisionFor(userDecision : UpdateDecision, changeType : Intent) : LoadDecision {
    if (userDecision == null or userDecision == NOT_REQUIRED or
        (changeType == STATE_REMOVE and userDecision == PARTIAL_ACCEPT))
      return null
    else if (userDecision == ACCEPT or userDecision == PARTIAL_ACCEPT)
      return ACCEPT
    else if (userDecision == REJECT)
      return REJECT
    throw new IllegalArgumentException("Cannot determine the load decision for user decision '${userDecision}'")
  }

  function loadDecisionFor(userDecision : UpdateDecision, changeType : Intent) : LoadDecision {
    if (userDecision == null or
        userDecision == NOT_REQUIRED or
        changeType == STATE_MODIFIED or
          (changeType == STATE_REMOVE and userDecision == PARTIAL_ACCEPT))
      return null
    else if (userDecision == ACCEPT or userDecision == PARTIAL_ACCEPT)
      return ACCEPT
    else if (userDecision == REJECT)
      return REJECT
    throw new IllegalArgumentException(
        "Cannot determine the load decision for user decision '${userDecision}' and change type '${changeType}'")
  }

  function outcomeForStateAdd(loadDecision : LoadDecision, changeType : Intent, unavailableAncestorExists : boolean = false, k : K = null) : Outcome {
    if (loadDecision == ACCEPT and changeType == STATE_ADD) {
      return AVAILABLE
    } else if ((loadDecision == REJECT and changeType == STATE_ADD)) {
      return UNAVAILABLE
    } else if (loadDecision == ACCEPT and changeType == STATE_REMOVE) {
      if (unavailableAncestorExists) {
        // There is no need to create redundant lookups for children if there is an ancestor has unavailable lookup
        // unavailability of the children is implicit.
        return NO_CHANGE
      } else {
        return UNAVAILABLE
      }
    }
    else {
      if ((changeType == null or changeType == STATE_MODIFIED) and k typeis ProductModelObject) {
        // only happens when a new clause added in state-add case (but there is no jurisdiction lookup for this clause), its intent would be null (no changeType)
        // get the availability from its EffectiveAvailability
        if (k.EffectiveAvailability.Availability == Lookup.AVAILABLE) {
          return AVAILABLE
        } else if(k.EffectiveAvailability.Availability == Lookup.UNAVAILABLE) {
          return UNAVAILABLE
        }
      }
      return NO_CHANGE
    }
  }

  function outcomeForStateUpdate(loadDecision : LoadDecision, changeType : Intent, unavailableAncestorExists : boolean = false, k: K = null) : Outcome {
    if (loadDecision == REJECT) { // reject means to keep current, no change required.
      if (changeType == STATE_ADD) {
        return UNAVAILABLE
      }
      return NO_CHANGE
    } else if (loadDecision == ACCEPT) { // accept means to take the new value
      if (changeType == STATE_ADD) {
        return AVAILABLE
      } else if (changeType == STATE_REMOVE) {
        if (unavailableAncestorExists) {
          // There is no need to create redundant lookups for children if there is an ancestor has unavailable lookup
          // unavailability of the children is implicit.
          return NO_CHANGE
        } else {
          return UNAVAILABLE
        }
      } else if(changeType == STATE_MODIFIED) {
        //Note: The changeType for different Form Pattern editions would be 'STATE_MODIFIED'
        //      which is determined by PolicyFormTwoWayCompareStrategy.isChange
        //      We have to get the availability from the new edition.
        if (k typeis Comparison and k.New typeis PolicyForm) {
          if (k.New.EffectiveAvailability.Availability == Lookup.AVAILABLE) {
            return AVAILABLE
          } else {
            return UNAVAILABLE
          }
        } else {
          return NO_CHANGE
        }
      }
    } else if (loadDecision == null) { // null and new implies that the presenter didn't display this arifact because it's Unavailable
      if (isPMWithUnavailableNewVersion(k)) {
        return UNAVAILABLE
      }
      if (IsIndependentStateAdd and onlyExistsInCurrent(k)) {
        if (unavailableAncestorExists) {
          return NO_CHANGE
        } else {
          return UNAVAILABLE
        }
      }
    }
    return NO_CHANGE
  }

  private function onlyExistsInCurrent(k : K) : boolean {
    if (k typeis Comparison and k.Current != null and k.New == null) {
      if (k.Current typeis ProductModelObject) {
        return k.Current.EffectiveAvailability.Availability == Lookup.AVAILABLE
      } else if (k.Current typeis PolicyForm) {
        return k.Current.EffectiveAvailability.Availability == Lookup.AVAILABLE
      }
    }
    return false
  }

  private function isPMWithUnavailableNewVersion(k : K) : boolean {
    if (k typeis Comparison and k.Adopted == null and k.Current == null and k.New != null) {
      return (k.New typeis ProductModelObject and k.New.EffectiveAvailability.Availability == Lookup.UNAVAILABLE)
    }
    return false
  }

  function goalFor(k : K, unavailableAncestorExists : boolean = false) : AvailabilityGoal {
    var changeType = _getChangeType(k)
    var children = _getChildren(k)
    var outcome : Outcome = null
    if (IsStateUpdate) {
      outcome = outcomeForStateUpdate(loadStateUpdateDecisionFor(_getUserDecision(k), changeType), changeType, unavailableAncestorExists, k)
    } else {
      outcome = outcomeForStateAdd(loadDecisionFor(_getUserDecision(k), changeType), changeType, unavailableAncestorExists, k)
    }
    if (outcome == Outcome.UNAVAILABLE) {
      unavailableAncestorExists = true
    }
    if (children == null) {
      return new AvailabilityGoal(
          :subject = artifactIdFor(k),
          :outcome = outcome,
          :children = null)
    } else {
      return new AvailabilityGoal(
          :subject = artifactIdFor(k),
          :outcome = outcome,
          :children = children.map(\child -> goalFor(child, unavailableAncestorExists)).where(\child -> child.HasChanges))
    }
  }

  private function artifactIdFor(k : K) : ArtifactId {
    return ArtifactId.forArtifact(_getCanonicalVersion(k))
  }
}