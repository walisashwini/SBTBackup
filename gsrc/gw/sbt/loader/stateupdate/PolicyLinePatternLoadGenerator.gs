package gw.sbt.loader.stateupdate

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.ArtifactId
uses gw.sbt.artifacts.ArtifactType
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.artifacts.lookups.PolicyLinePatternLookups
uses gw.sbt.artifacts.policyline.ModifierMinMax
uses gw.sbt.artifacts.policyline.PolicyLinePattern
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.Load
uses gw.sbt.loader.goal.AvailabilityGoal
uses gw.sbt.loader.io.ModifierMinMaxAddition
uses gw.sbt.loader.io.PolicyLinePatternLookupAddition
uses gw.sbt.loader.io.PolicyLinePatternAddition
uses gw.sbt.loader.merger.LookupsMerger
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.util.XmlUtil
uses gw.util.Pair
uses org.slf4j.LoggerFactory

//This generator is intented to create a 'MERGED' policyLinePattern,
//bring in new CoverageCategory, new CoverageCurrency, new ModifierPattern and updated ModifierPattern with new RateFactors.
//Log and report all conflicts as well.
class PolicyLinePatternLoadGenerator extends StateUpdateLoadGenerator {

  var _hasConflict = false
  var _policyLinePatternChanged = false

  construct(
      currentContents : CurrentConfigContents,
      updateContents : SBTUpdateContents,
      jurisdiction : String,
      adoptionDate : Date,
      messageReporter : MessageReporter
  ) {
    super(currentContents, updateContents, null)
    _jurisdiction = jurisdiction
    _adoptionDate = adoptionDate
    _messageReporter = messageReporter
  }

  function generateLoads() : List<Load> {
    var resultLoads : List<Load> = {}
    var updatePolicyLinePattern = _updateContents.getPolicyLinePattern(PolicyLinePatternCode)
    var currentPolicyLinePattern = _currentContents.getPolicyLinePattern(PolicyLinePatternCode)

    if (updatePolicyLinePattern == null) {
      return resultLoads
    } else if(currentPolicyLinePattern == null) {
      _messageReporter.ConflictReporter.reportMissingPolicyLinePattern(PolicyLinePatternCode)
      return resultLoads
    }

    // create a copy from current policy line pattern as base.
    var targetPolicyLinePattern = currentPolicyLinePattern.copy()
    // CoverageCategory
    processCoverageCategory(updatePolicyLinePattern, currentPolicyLinePattern, targetPolicyLinePattern)
    // AvailableCoverageCurrency
    processAvailableCoverageCurrency(updatePolicyLinePattern, currentPolicyLinePattern, targetPolicyLinePattern)
    // ModifierPattern and RateFactorPattern
    processModifierPattern(updatePolicyLinePattern, currentPolicyLinePattern, targetPolicyLinePattern)

    if (_hasConflict) {
      _messageReporter.ConflictReporter.reportPolicyLinePattern(PolicyLinePatternCode)
    }

    if (_policyLinePatternChanged) {
      var load = new Load<PolicyLinePattern>(targetPolicyLinePattern)
      load.add(new PolicyLinePatternAddition(PolicyLinePatternCode, targetPolicyLinePattern))
      resultLoads.add(load)
    }
    return resultLoads
  }

  function generateLookupLoads() : List<Load> {
    var resultLoads : List<Load> = {}
    var updateLookups = _updateContents.getPolicyLinePatternLookupsForStateAndCW(PolicyLinePatternCode, Jurisdiction)
    var currentLookups = _currentContents.getPolicyLinePatternLookupsForStateAndCW(PolicyLinePatternCode, Jurisdiction)
    var listOfLookups : List<PolicyLinePatternLookups> = {}
    if (updateLookups != null) {
      listOfLookups.add(updateLookups)
    }
    if (currentLookups != null) {
      listOfLookups.add(currentLookups)
    }
    var artifactIds = artifactIdsFrom(listOfLookups)
    var availabilityGoals = artifactIds
        .map(\artifactId -> availabilityGoalFor(currentLookups, updateLookups, artifactId))
        .where(\goal -> goal.HasChanges)
    if (availabilityGoals.HasElements) {
      var mergedLookups = LookupsMerger.forPolicyLine(MessageReporter).mergeAll(
          :availabilityGoals = availabilityGoals,
          :currentConfigLookups = currentLookups,
          :updateLookups = updateLookups,
          :adoptionDate = AdoptionDate,
          :state = Jurisdiction)

      //the audit raw info has been collected in the LookupsMerger, however, re-orgnazation is needed for Modifier/RateFactor for reporting rendener.
      generateAuditReport()

      var newStateLookups = mergedLookups.filteredByJurisdiction(Jurisdiction)
      var load = new Load<PolicyLinePatternLookups>(newStateLookups)
      load.add(new PolicyLinePatternLookupAddition(PolicyLinePatternCode, Jurisdiction, newStateLookups))
      resultLoads.add(load)
    }
    return resultLoads
  }

  function generateModifierMinMaxLoad(): Load<ModifierMinMax> {
    var updateModifierMinMax = _updateContents.getModifierMinMax(PolicyLinePatternCode, _jurisdiction)
    var currentModifierMinMax = _currentContents.getModifierMinMax(PolicyLinePatternCode, _jurisdiction)
    if (updateModifierMinMax == null) {
      if (currentModifierMinMax != null) {
        currentModifierMinMax.MinMaxLookups.each(\lookup -> {
          _messageReporter.reportRemoved(lookup.ModifierPatternCode, MODIFIER_MIN_MAX_LOOKUP)
        })
      }
      return null
    }

    var load = new Load<ModifierMinMax>(updateModifierMinMax)
    if (currentModifierMinMax == null) {
      load.add(new ModifierMinMaxAddition(PolicyLinePatternCode, _jurisdiction, updateModifierMinMax))
      updateModifierMinMax.MinMaxLookups.each(\lookup -> {
        _messageReporter.reportAdded(lookup.ModifierPatternCode, MODIFIER_MIN_MAX_LOOKUP)
      })
    } else {
      var addedModifierMinMaxLookup : List<String>= {}
      var allModifierPatternCodes = updateModifierMinMax.MinMaxLookups*.ModifierPatternCode.union(currentModifierMinMax.MinMaxLookups*.ModifierPatternCode)
      allModifierPatternCodes.each(\modifierPatternCode -> {
        var lookupInCurrent = currentModifierMinMax.MinMaxLookups
            .firstWhere(\lookup -> lookup.ModifierPatternCode == modifierPatternCode)
        var lookupInUpdate = updateModifierMinMax.MinMaxLookups
            .firstWhere(\lookup -> lookup.ModifierPatternCode == modifierPatternCode)
        if (lookupInCurrent != lookupInUpdate) {
          if (lookupInCurrent == null) { // new lookup, add into current
            currentModifierMinMax.addMinMaxLookup(lookupInUpdate)
            addedModifierMinMaxLookup.add(modifierPatternCode)
            _messageReporter.reportAdded(modifierPatternCode, MODIFIER_MIN_MAX_LOOKUP)
          } else if (lookupInUpdate == null) { //remove lookup, don't do anything.
            _messageReporter.reportRemoved(modifierPatternCode, MODIFIER_MIN_MAX_LOOKUP)
          } else { //updated lookup, report as conflict.
            _messageReporter.ConflictReporter.reportModifierMinMaxLookup(modifierPatternCode, PolicyLinePatternCode)
          }
        }
      })

      if (not addedModifierMinMaxLookup.Empty) {
        load.add(new ModifierMinMaxAddition(PolicyLinePatternCode, _jurisdiction, currentModifierMinMax))
      }
    }
    return load
  }

  private function generateAuditReport() {
    var rateFactorMap : Map<String, Pair<String, String>> = {}  // rateFactorPId -> Pair<ModifierPattern.codeIdentifier, RateFactorPattern.rateFactorType>
    var updatePolicyLinePattern = _updateContents.getPolicyLinePattern(PolicyLinePatternCode)
    var currentPolicyLinePattern = _currentContents.getPolicyLinePattern(PolicyLinePatternCode)
    var allModifierPatterns = updatePolicyLinePattern.ModifierPatterns.union(currentPolicyLinePattern.ModifierPatterns)
    allModifierPatterns.each(\modifierPattern -> {
      modifierPattern.RateFactorPatternList.each(\rateFactorPattern -> {
        rateFactorMap.put(rateFactorPattern.PublicId, new Pair(modifierPattern.PublicId, rateFactorPattern.RateFactorType))
      })
    })

    var reportedRateFactorLookup = MessageReporter.AuditReporter.ReportedRateFactors
    if (reportedRateFactorLookup.HasElements) {
      reportedRateFactorLookup.each(\rateFactorLookup -> {
        var pid = rateFactorLookup.Path.get(0)
        var pair = rateFactorMap.get(pid)  // First: ModifierPattern's codeIdentifier, Second: RateFactorPattern's rateFactorType
        _messageReporter.reportForAudit({pair.First, pair.Second}, POLICY_LINE_PATTERN)
      })
    } else { // only happen when there is ModifierLookup but no RateFactorLookup (should not happen)
      var reportedModifierLookup = MessageReporter.AuditReporter.ReportedModifiers
      if (reportedModifierLookup.HasElements) {
        reportedModifierLookup.each(\modifierLookup -> {
          _messageReporter.reportForAudit({modifierLookup.Path.get(0), "None"}, POLICY_LINE_PATTERN)
        })
      }
    }
  }

  private function artifactIdsFrom(listOfLookups : List<PolicyLinePatternLookups>) : Set<ArtifactId> {
    var results : Set<ArtifactId> = {}
    results.addAll(artifactIdsOfType(MODIFIER, listOfLookups.map(\ lookups -> lookups.ModifierLookupList)))
    results.addAll(artifactIdsOfType(RATE_FACTOR, listOfLookups.map(\ lookups -> lookups.RateFactorLookupList)))
    return results
  }

  private function artifactIdsOfType(artifactType : ArtifactType, lookupLists : List<List<Lookup>>) : Set<ArtifactId> {
    var publicIds = lookupLists.flatMap(\ lookupList -> lookupList.map(\ lookup ->  lookup.SubjectPublicId)).toSet()
    return publicIds.map(\ publicId -> ArtifactId.make(artifactType, publicId)).toSet()
  }

  private function availabilityGoalFor(
      currentLookups : PolicyLinePatternLookups,
      updateLookups : PolicyLinePatternLookups,
      subject : ArtifactId
  ) : AvailabilityGoal {
    var currentAvailability = currentLookups == null ? Lookup.UNAVAILABLE : currentLookups.availabilityDeterminingLookupFor(subject, AdoptionDate).Availability
    var updateAvailability = updateLookups == null ? Lookup.UNAVAILABLE : updateLookups.availabilityDeterminingLookupFor(subject, AdoptionDate).Availability
    return AvailabilityGoal.make(subject, outcomeFor(currentAvailability, updateAvailability, (currentLookups != null and updateLookups == null)))
  }

  private function outcomeFor(currentAvailability : String, updateAvailability : String, customModifier : boolean) : AvailabilityGoal.Outcome {
    var isUnavailable = \ availability : String -> availability == null or availability == Lookup.UNAVAILABLE

    // Determine if the lookup belongs to a custom modifier pattern. If so, the outcome should be NO_CHANGE.
    customModifier = customModifier or (currentAvailability != null and updateAvailability == null)
    if(customModifier) {
      return NO_CHANGE
    }

    if (currentAvailability == updateAvailability or
        isUnavailable(currentAvailability) and isUnavailable(updateAvailability))
      return NO_CHANGE
    else if (isUnavailable(currentAvailability) and updateAvailability == Lookup.AVAILABLE)
      return AVAILABLE
    else if (currentAvailability == Lookup.AVAILABLE and isUnavailable(updateAvailability)) {
      return UNAVAILABLE
    }

    else
      throw "Inconceivable! Outcome cannot be determined for current availability of '${currentAvailability}' and " +
          "SBT update availability of '${updateAvailability}'."
  }

  // CoverageCategory
  private function processCoverageCategory(updatePolicyLinePattern : PolicyLinePattern, currentPolicyLinePattern : PolicyLinePattern, targetPolicyLinePattern : PolicyLinePattern) {
    updatePolicyLinePattern.CoverageCategories.each(\coverageCategoryInUpdate -> {
      var publicId = coverageCategoryInUpdate.PublicId
      var coverageCategoryInCurrent = currentPolicyLinePattern.getCoverageCategory(publicId)
      if (coverageCategoryInCurrent == null) {
        targetPolicyLinePattern.addCoverageCategory(coverageCategoryInUpdate)
        _policyLinePatternChanged = true
      } else if (coverageCategoryInUpdate != coverageCategoryInCurrent) {
        LoggerFactory.getLogger("PCA").warn(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.PolicyLinePatternCoverageCategoryAlreadyExistsButNotIdentical", coverageCategoryInUpdate.PublicId))
        _hasConflict = true
      }
    })
  }

  // AvailableCoverageCurrency
  private function processAvailableCoverageCurrency(updatePolicyLinePattern : PolicyLinePattern, currentPolicyLinePattern : PolicyLinePattern, targetPolicyLinePattern : PolicyLinePattern) {
    updatePolicyLinePattern.AvailableCoverageCurrencies.each(\currencyInUpdate -> {
      var publicId = currencyInUpdate.PublicId
      var currencyInCurrent = currentPolicyLinePattern.getAvailableCoverageCurrency(publicId)
      if (currencyInCurrent == null) {
        targetPolicyLinePattern.addAvailableCoverageCurrency(currencyInUpdate)
        _policyLinePatternChanged = true
      } else if (currencyInUpdate != currencyInCurrent) {
        LoggerFactory.getLogger("PCA").warn(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.PolicyLinePatternAvailableCoverageCurrencyAlreadyExistsButNotIdentical", currencyInUpdate.PublicId))
        _hasConflict = true
      }
    })
  }

  // ModifierPattern and RateFactorPattern
  private function processModifierPattern(updatePolicyLinePattern : PolicyLinePattern, currentPolicyLinePattern : PolicyLinePattern, targetPolicyLinePattern : PolicyLinePattern) {
    updatePolicyLinePattern.ModifierPatterns.each(\updateModifierPattern -> {
      var currentModifierPattern = currentPolicyLinePattern.getModifierPattern(updateModifierPattern.PublicId)
      if (currentModifierPattern == null) {  // add new modfier pattern
        targetPolicyLinePattern.addModifierPattern(updateModifierPattern)
        _policyLinePatternChanged = true
      } else {
        //compare all attributes for the modifierpattern.
        if (not XmlUtil.compareXmlElements(currentModifierPattern.Xml, updateModifierPattern.Xml, {"RateFactorPatterns"})) {
          LoggerFactory.getLogger("PCA").warn(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.PolicyLinePatternModifierPatternAlreadyExistsButNotIdentical", updateModifierPattern.PublicId))
          _hasConflict = true
        }
        var targetModifierPattern = targetPolicyLinePattern.getModifierPattern(updateModifierPattern.PublicId)
        var currentRateFactorPatternRateFactorTypes = currentModifierPattern.RateFactorPatternList*.RateFactorType
        updateModifierPattern.RateFactorPatternList.each(\updateRateFactorPattern -> {
          if (not currentRateFactorPatternRateFactorTypes.contains(updateRateFactorPattern.RateFactorType)) { // add new ratefactor patterns.
            targetModifierPattern.addRateFactorPattern(updateRateFactorPattern)
            _policyLinePatternChanged = true
          } else {
            var currentRateFactorPattern = currentModifierPattern.RateFactorPatternList.firstWhere(\rateFactorPattern -> rateFactorPattern.RateFactorType == updateRateFactorPattern.RateFactorType)
            if (updateRateFactorPattern != currentRateFactorPattern) {
              LoggerFactory.getLogger("PCA").warn(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.PolicyLinePatternRateFactorPatternAlreadyExistsButNotIdentical", updateRateFactorPattern.RateFactorType, updateModifierPattern.PublicId))
              _hasConflict = true
            }
          }
        })
      }
    }
    )
  }

  private property get PolicyLinePatternCode() : String {
    return _currentContents.PolicyLinePatternCode
  }
}