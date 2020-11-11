package gw.sbt.loader

uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.io.ClausePatternFileAddition
uses gw.sbt.loader.io.ClausePatternLookupsFileAddition

class SpecialCasesClauseLoadGenerator {
  /**
   * In WCM, these clauses do not contain CovTermPacks.
   */
  static final var WC_PM_WITH_COVTERMPACK = {
      "WC7WorkersCompEmpLiabInsurancePolicyACov",
      "WC7ForeignVoluntaryCompAndEmployersLiabilityCond",
      "WC7BenefitsDedCov"
  }

  var _currentContents : CurrentConfigContents

  construct(config : CurrentConfigContents) {
    _currentContents = config
  }

  function generateLoad(updateConfig : SBTUpdateContents, policyLine : String,
                        adoptionDate : Date, jurisdiction : String) : Load {
    var load = new Load<String>()

    if (policyLine == "WC7Line") {
      WC_PM_WITH_COVTERMPACK.each(\covPatternCode -> {
        var newClausePattern = updateConfig.getClausePattern(policyLine, covPatternCode)

        if (newClausePattern != null) {
          var resultClausePattern = _currentContents.getClausePattern(policyLine, covPatternCode)?.copy()

          // Deal with the case where no current clause pattern even exists
          if (resultClausePattern == null) {
            resultClausePattern = newClausePattern.copy()
            resultClausePattern.removeCovTerms()
          }

          var currentPackageCovTerms = resultClausePattern.PackageCovTerms
          var currentPackageCovTermPublicIds = currentPackageCovTerms*.PublicId.toSet()
          var patternUpdateRequired = false

          // Copy over any missing PackageCovTerm or the CovTermPack within the term
          newClausePattern.PackageCovTerms.each(\newPackageCovTermPattern -> {
            var newPackageCovTermPublicId = newPackageCovTermPattern.PublicId

            if (not currentPackageCovTermPublicIds.contains(newPackageCovTermPublicId)) {
              resultClausePattern.addCovTerm(newPackageCovTermPattern)
              patternUpdateRequired = true
            } else {
              var currentPackageCovTerm = currentPackageCovTerms.firstWhere(\currentTerm -> currentTerm.PublicId == newPackageCovTermPublicId)
              var currentPackageCodes = currentPackageCovTerm.CovTermPacks*.PackageCode.toSet()

              newPackageCovTermPattern.CovTermPacks.each(\newCovTermPack -> {
                if (not currentPackageCodes.contains(newCovTermPack.PackageCode)) {
                  currentPackageCovTerm.addCovTermPack(newCovTermPack)
                  patternUpdateRequired = true
                }
              })
            }
          })

          if(patternUpdateRequired) {
            load.add(new ClausePatternFileAddition(policyLine, covPatternCode, resultClausePattern))
          }

          // Process lookups
          currentPackageCovTermPublicIds.addAll(newClausePattern.PackageCovTerms*.PublicId.toSet())
          var newStateLookups = updateConfig.getClausePatternLookups(policyLine, jurisdiction, covPatternCode)
          var currentStateLookups = _currentContents.getClausePatternLookups(policyLine, jurisdiction, covPatternCode)
          var currentCovTermLookupsPublicIds =  currentStateLookups.CovTermLookups*.PublicId
          var currentCovTermPackLookupsPublicIds = currentStateLookups.CovTermPackLookups*.PublicId

          // Load any state lookup for the entire package cov term whose pattern was copied
          var packageCovTermLookupsToAdd = newStateLookups.CovTermLookups
              .where(\covTermLookup -> covTermLookup.IsState and
                  currentPackageCovTermPublicIds.contains(covTermLookup.SubjectPublicId) and
                  not currentCovTermLookupsPublicIds.contains(covTermLookup.PublicId))
          packageCovTermLookupsToAdd.each(\lookup -> {
            lookup.StartEffectiveDate = adoptionDate
          })
          currentStateLookups.addAll(packageCovTermLookupsToAdd)

          // Load any state lookup for each CovTermPack (option level)
          var stateCovTermPackLookups = newStateLookups.CovTermPackLookups
              .where(\lookup -> lookup.IsState and
                  not currentCovTermPackLookupsPublicIds.contains(lookup.PublicId))
          stateCovTermPackLookups.each(\lookup -> {
            lookup.StartEffectiveDate = adoptionDate
          })
          currentStateLookups.addAll(stateCovTermPackLookups)

          if(packageCovTermLookupsToAdd.HasElements or stateCovTermPackLookups.HasElements) {
            load.add(new ClausePatternLookupsFileAddition(policyLine, jurisdiction, covPatternCode, currentStateLookups))
          }
        }
      })
    }
    else {
      // Detecting any missing lookups and add them as unavailable lookups
      _currentContents.getAllClausePatterns(policyLine).each(\mergedPattern -> {
        var clausePid = mergedPattern.PublicId
        var newPattern = updateConfig.getClausePattern(policyLine, clausePid)
        var loadRequired = false

        // Only process non-custom / SBT clause patterns
        if (newPattern != null) {
          var allLookupsForClauseMerged = _currentContents.getClausePatternLookups(policyLine, "CW", clausePid)
          var allLookupsForClauseNew = updateConfig.getClausePatternLookups(policyLine, "CW", clausePid)
          var mergedStateLookups = _currentContents.getClausePatternLookups(policyLine, jurisdiction, clausePid)
          var newStateLookups = updateConfig.getClausePatternLookups(policyLine, jurisdiction, clausePid)

          allLookupsForClauseMerged.addAll(mergedStateLookups)
          allLookupsForClauseNew.addAll(newStateLookups)

          // Is there any cov term or option without any lookups?
          mergedPattern.CovTerms.each(\mergedCovTerm -> {
            var foundTermLookups = allLookupsForClauseMerged.getCovTermLookups(mergedCovTerm.PublicId)
            if (foundTermLookups == null or foundTermLookups.Empty) {
              var foundTermLookupsFromNew = allLookupsForClauseNew.getCovTermLookups(mergedCovTerm.PublicId)
              if (foundTermLookupsFromNew != null and not foundTermLookupsFromNew.Empty) {
                var termLookupToAdd = foundTermLookupsFromNew.first()
                termLookupToAdd.StartEffectiveDate = adoptionDate
                termLookupToAdd.Availability = "Unavailable"
                termLookupToAdd.State = jurisdiction

                mergedStateLookups.add(termLookupToAdd)
                loadRequired = true
              }
            }

            mergedCovTerm.Options.each(\mergedOption -> {
              var foundOptionLookups = allLookupsForClauseMerged.getCovTermOptLookups(mergedOption.PublicId)
              if (foundOptionLookups == null or foundOptionLookups.Empty) {
                var foundOptionLookupsFromNew = allLookupsForClauseNew.getCovTermOptLookups(mergedOption.PublicId)
                if (foundOptionLookupsFromNew != null and not foundOptionLookupsFromNew.Empty) {
                  var optionLookupToAdd = foundOptionLookupsFromNew.first()
                  optionLookupToAdd.StartEffectiveDate = adoptionDate
                  optionLookupToAdd.Availability = "Unavailable"
                  optionLookupToAdd.State = jurisdiction

                  mergedStateLookups.add(optionLookupToAdd)
                  loadRequired = true
                }
              }
            })
          })

          load.add(new ClausePatternLookupsFileAddition(policyLine, jurisdiction, clausePid, mergedStateLookups))
        }
      })
    }
    return load.LoadOps.HasOps ? load : null
  }
}