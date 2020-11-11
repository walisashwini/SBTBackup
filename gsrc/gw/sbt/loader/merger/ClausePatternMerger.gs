package gw.sbt.loader.merger

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.artifacts.clauses.CovTermDefaultPattern
uses gw.sbt.artifacts.clauses.CovTermLimitsPattern
uses gw.sbt.artifacts.clauses.PackageTermPattern
uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.clauses.PolicyCovTermOptionPattern
uses gw.sbt.artifacts.clauses.PolicyCovTermPackPattern
uses gw.sbt.artifacts.clauses.PolicyCovTermPattern
uses gw.sbt.artifacts.clauses.PolicyPackageCovTermPattern
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.loader.EntityColumnHelper
uses gw.sbt.loader.ExistenceConfigCache
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.clause.ClauseExistenceType
uses gw.sbt.util.LoaderUtil
uses gw.xml.XmlElement
uses org.slf4j.LoggerFactory

class ClausePatternMerger {

  var _messageReporter : MessageReporter
  var _patternModified : boolean as readonly PatternModified
  var _policyLineCode : String
  var _updateJurisdiction : String

  static var PRIORITY_ATTRITUBE_NAME : String = "priority"
  static var EXISTENCE_ATTRIBUTE_NAME : String = "existence"
  static var EXISTENCE_CLAUSE_CONTAINER_TYPE : String = "Clause"
  static var EXISTENCE_DEFAULT_DATE : String = "2000-01-01"

  construct() {
    _patternModified = false
  }

  construct(messageReporter : MessageReporter) {
    this()
    _messageReporter = messageReporter
    _updateJurisdiction = ""
  }

  construct(messageReporter : MessageReporter, jurisdiction : String) {
    this()
    _messageReporter = messageReporter
    _updateJurisdiction = jurisdiction
  }

  function merge(currentClausePattern : PolicyClausePattern, newClausePattern : PolicyClausePattern,
                 adoptedClausePattern : PolicyClausePattern) : PolicyClausePattern {
    var clausePublicId = newClausePattern.PublicId?:currentClausePattern.PublicId
    LoggerFactory.getLogger("PCA").info("[Clause loading] - merging clause pattern " + clausePublicId)
    var resultClausePattern = currentClausePattern?.copy()
    var modifiableCurrentClausePattern = currentClausePattern?.copy()

    // if Current does not exists, Current= New
    if (currentClausePattern == null and newClausePattern != null) {
      resultClausePattern = newClausePattern.copy()
      _patternModified = true
      return resultClausePattern
    } else if (currentClausePattern != null and newClausePattern == null) {
      return resultClausePattern
    } else if (currentClausePattern == null and newClausePattern == null) {
      return null
    }

    _policyLineCode = currentClausePattern.PolicyLinePattern

    var originalExistenceAttribute = currentClausePattern.Existence
    var originalExistenceScript = currentClausePattern.ExistenceScript

    // Merge and report clause scripts

    mergeScripts(currentClausePattern.AvailabilityScript, newClausePattern.AvailabilityScript, adoptedClausePattern?.AvailabilityScript, {clausePublicId, "AvailabilityScript"}, \availableScript -> {
      resultClausePattern.AvailabilityScript = availableScript
    })

    mergeScripts(currentClausePattern.ExistenceScript, newClausePattern.ExistenceScript, adoptedClausePattern?.ExistenceScript, {clausePublicId, "ExistenceScript"}, \existenceScript -> {
      resultClausePattern.ExistenceScript = existenceScript
    })

    mergeScripts(currentClausePattern.InitializeScript, newClausePattern.InitializeScript, adoptedClausePattern?.InitializeScript, {clausePublicId, "InitializeScript"}, \initializeScript -> {
      resultClausePattern.InitializeScript = initializeScript
    })

    // Merge and report clause attributes
    mergeAttributes(PolicyClausePattern.ComparableAttributes,
        {clausePublicId},
        newClausePattern, currentClausePattern, adoptedClausePattern, resultClausePattern)

    // Merge and report children (CovTerms)
    var newCovTerms = newClausePattern.CovTerms
    var currentCovTerms = currentClausePattern.CovTerms
    var allCovTermPublicIds = LoaderUtil.unionIdsInRelativeOrder(currentCovTerms*.PublicId, newCovTerms*.PublicId)

    resultClausePattern.removeCovTerms()
    allCovTermPublicIds.each(\covTermPublicId -> {
      var newCovTerm = newCovTerms.firstWhere(\covTerm -> covTerm.PublicId == covTermPublicId)
      var currentCovTerm = currentCovTerms.firstWhere(\covTerm -> covTerm.PublicId == covTermPublicId)

      if (currentCovTerm == null and newCovTerm != null) {
        updateCovTermPatternColumnToSuitClause(newCovTerm, modifiableCurrentClausePattern?:resultClausePattern)
        if (modifiableCurrentClausePattern != null) {
          modifiableCurrentClausePattern.addCovTerm(newCovTerm)
        }
        resultClausePattern.addCovTerm(newCovTerm)
        _patternModified = true
      } else if (currentCovTerm != null and newCovTerm == null) {
        resultClausePattern.addCovTerm(currentCovTerm)
      } else {
        var adoptedCovTerms : List<PolicyCovTermPattern> = adoptedClausePattern != null ? adoptedClausePattern.CovTerms : {}
        var adoptedCovTerm = adoptedCovTerms.firstWhere(\covTerm -> covTerm.PublicId == covTermPublicId)
        resultClausePattern.addCovTerm(
            merge(currentCovTerm, newCovTerm, adoptedCovTerm, clausePublicId))
      }
    })

    revertExistenceIfConflicted(resultClausePattern, originalExistenceAttribute, originalExistenceScript)

    return resultClausePattern
  }

  //if both existence attribute and script exists, reset to original, and report as conflict.
  private function revertExistenceIfConflicted(resultClausePattern : PolicyClausePattern, originalExistenceAttribute : ClauseExistenceType, originalExistenceScript : XmlElement) {
    //if both existence attribute and script exists, reset to original, and report as conflict.
    if (resultClausePattern.Existence != ClauseExistenceType.SCRIPT and resultClausePattern.ExistenceScript != null) {
      var clausePublicId = resultClausePattern.PublicId

      resultClausePattern.Existence = originalExistenceAttribute
      if (originalExistenceScript != null) {
        resultClausePattern.ExistenceScript = originalExistenceScript
      }
      //report as conflicted items
      var attributePath = {clausePublicId, "existence"}
      reportConflict(attributePath, ATTRIBUTE)
      var scriptPath = {clausePublicId, "ExistenceScript"}
      reportConflict({clausePublicId, "ExistenceScript"}, SCRIPT)

      //remove 'Added' items from load report
      _messageReporter.ModificationReporter.AddedArtifactsProductModel.removeWhere(\attr -> attr.Path == attributePath)
      _messageReporter.ModificationReporter.AddedArtifactsProductModel.removeWhere(\script -> script.Path == scriptPath)

      //remove 'Removed' items from load report
      _messageReporter.ModificationReporter.RemovedArtifactsProductModel.removeWhere(\attr -> attr.Path == attributePath)
      _messageReporter.ModificationReporter.RemovedArtifactsProductModel.removeWhere(\script -> script.Path == scriptPath)
    }
  }

  /**
   * Merge all "conflict-free" content within the given CovTermPatterns including attributes and options
   *
   * @param currentCovTermPattern
   * @param newCovTermPattern
   * @return merged CovTerm, return the same copy of the pattern if nothing is different
   */
  private function merge(currentCovTermPattern : PolicyCovTermPattern, newCovTermPattern : PolicyCovTermPattern, adoptedCovTermPattern : PolicyCovTermPattern,
                         clausePublicId : String) : PolicyCovTermPattern {
    var resultCovTermPattern = currentCovTermPattern?.copy()

    // Merge and report CovTerm scripts
    mergeScripts(currentCovTermPattern.AvailabilityScript, newCovTermPattern.AvailabilityScript, adoptedCovTermPattern?.AvailabilityScript, {clausePublicId, newCovTermPattern.PublicId, "AvailabilityScript"}, \availabilityScript -> {
      resultCovTermPattern.AvailabilityScript = availabilityScript
    })

    // Merge and report CovTerm attributes
    mergeAttributes(PolicyCovTermPattern.ComparableAttributes,
        {clausePublicId, newCovTermPattern.PublicId},
        newCovTermPattern, currentCovTermPattern, adoptedCovTermPattern, resultCovTermPattern)

    // Merge and report children (LimitsSet)
    var newCovTermLimits = newCovTermPattern.CovTermLimits
    var currentCovTermLimits = currentCovTermPattern.CovTermLimits
    var allCovTermLimitsPublicIds = LoaderUtil.unionIdsInRelativeOrder(currentCovTermLimits*.PublicId, newCovTermLimits*.PublicId)
    resultCovTermPattern.removeCovTermLimits()
    allCovTermLimitsPublicIds.each(\covTermLimitsPublicId -> {
      var newCovTermLimitsPattern = newCovTermLimits.firstWhere(\pattern -> pattern.PublicId == covTermLimitsPublicId)
      var currentCovTermLimitsPattern = currentCovTermLimits.firstWhere(\pattern -> pattern.PublicId == covTermLimitsPublicId)

      if (newCovTermLimitsPattern != null and currentCovTermLimitsPattern == null) {
        if (not currentCovTermLimits.HasElements) {
          resultCovTermPattern.addCovTermLimits(newCovTermLimitsPattern)
          _patternModified = true
          _messageReporter.reportAdded({clausePublicId, newCovTermPattern.PublicId, covTermLimitsPublicId}, COVTERM_LIMITS)
        } else {
          reportConflict({clausePublicId, newCovTermPattern.PublicId, covTermLimitsPublicId}, COVTERM_LIMITS)
        }
      } else if (newCovTermLimitsPattern == null and currentCovTermLimitsPattern != null) {
        resultCovTermPattern.addCovTermLimits(currentCovTermLimitsPattern)
        _messageReporter.reportRemoved({clausePublicId, newCovTermPattern.PublicId, covTermLimitsPublicId}, COVTERM_LIMITS)
      } else if (newCovTermLimitsPattern != null and currentCovTermLimitsPattern != null) {
        var resultCovTermLimitsPattern = currentCovTermLimitsPattern.copy()

        var adoptedCovTermLimits : List<CovTermLimitsPattern> = adoptedCovTermPattern != null ? adoptedCovTermPattern.CovTermLimits : {}
        var adoptedCovTermLimitsPattern = adoptedCovTermLimits.firstWhere(\pattern -> pattern.PublicId == covTermLimitsPublicId)

        mergeAttributes(CovTermLimitsPattern.ComparableAttributes,
            {clausePublicId, newCovTermPattern.PublicId, covTermLimitsPublicId},
            newCovTermLimitsPattern, currentCovTermLimitsPattern, adoptedCovTermLimitsPattern, resultCovTermLimitsPattern, COVTERM_LIMITS)
        resultCovTermPattern.addCovTermLimits(resultCovTermLimitsPattern)
      }
    })

    // Merge and report children (DefaultsSet)
    var newCovTermDefaults = newCovTermPattern.CovTermDefaults
    var currentCovTermDefaults = currentCovTermPattern.CovTermDefaults
    var allCovTermDefaultsPublicIds = LoaderUtil.unionIdsInRelativeOrder(currentCovTermDefaults*.PublicId, newCovTermDefaults*.PublicId)
    resultCovTermPattern.removeCovTermDefaults()
    allCovTermDefaultsPublicIds.each(\covTermDefaultsPublicId -> {
      var newCovTermDefaultsPattern = newCovTermDefaults.firstWhere(\pattern -> pattern.PublicId == covTermDefaultsPublicId)
      var currentCovTermDefaultsPattern = currentCovTermDefaults.firstWhere(\pattern -> pattern.PublicId == covTermDefaultsPublicId)

      if (newCovTermDefaultsPattern != null and currentCovTermDefaultsPattern == null) {
        if (not currentCovTermDefaults.HasElements) {
          resultCovTermPattern.addCovTermDefaults(newCovTermDefaultsPattern.copy())
          _patternModified = true
          _messageReporter.reportAdded({clausePublicId, newCovTermPattern.PublicId, covTermDefaultsPublicId}, COVTERM_DEFAULT)
        } else {
          reportConflict({clausePublicId, newCovTermPattern.PublicId, covTermDefaultsPublicId}, COVTERM_DEFAULT)
        }
      } else if (newCovTermDefaultsPattern == null and currentCovTermDefaultsPattern != null) {
        resultCovTermPattern.addCovTermDefaults(currentCovTermDefaultsPattern.copy())
        _messageReporter.reportRemoved({clausePublicId, newCovTermPattern.PublicId, covTermDefaultsPublicId}, COVTERM_DEFAULT)
      } else if (newCovTermDefaultsPattern != null and currentCovTermDefaultsPattern != null) {
        var resultCovTermDefaultsPattern = currentCovTermDefaultsPattern.copy()

        var adoptedCovTermDefaults : List<CovTermDefaultPattern> = adoptedCovTermPattern != null ? adoptedCovTermPattern.CovTermDefaults : {}
        var adoptedCovTermDefaultsPattern = adoptedCovTermDefaults.firstWhere(\pattern -> pattern.PublicId == covTermDefaultsPublicId)

        mergeAttributes(CovTermDefaultPattern.ComparableAttributes,
            {clausePublicId, newCovTermPattern.PublicId, covTermDefaultsPublicId},
            newCovTermDefaultsPattern, currentCovTermDefaultsPattern, adoptedCovTermDefaultsPattern, resultCovTermDefaultsPattern, COVTERM_DEFAULT)
        resultCovTermPattern.addCovTermDefaults(resultCovTermDefaultsPattern)
      }
    })

    // Merge and report children (Options)
    var newOptions = newCovTermPattern.Options
    var currentOptions = currentCovTermPattern.Options
    var allOptionCodes = LoaderUtil.unionIdsInRelativeOrder(currentOptions*.OptionCode, newOptions*.OptionCode)
    resultCovTermPattern.removeOptions()
    allOptionCodes.each(\optionCode -> {
      var newOptionPattern = newOptions.firstWhere(\pattern -> pattern.OptionCode == optionCode)
      var currentOptionPattern = currentOptions.firstWhere(\pattern -> pattern.OptionCode == optionCode)

      var adoptedOptions : List<PolicyCovTermOptionPattern> = adoptedCovTermPattern != null ? adoptedCovTermPattern.Options : {}
      var adoptedOptionPattern = adoptedOptions.firstWhere(\pattern -> pattern.OptionCode == optionCode)

      resultCovTermPattern.addOption(
          merge(currentOptionPattern, newOptionPattern, adoptedOptionPattern, {clausePublicId, newCovTermPattern.PublicId, optionCode}))

    })

    // Merge and report children (Packages)
    if (resultCovTermPattern typeis PolicyPackageCovTermPattern and
        adoptedCovTermPattern typeis PolicyPackageCovTermPattern and
        currentCovTermPattern typeis PolicyPackageCovTermPattern and
        newCovTermPattern typeis PolicyPackageCovTermPattern) {
      var newCovTermPacks = newCovTermPattern.CovTermPacks
      var currentCovTermPacks = currentCovTermPattern.CovTermPacks
      var adoptedCovTermPacks = adoptedCovTermPattern.CovTermPacks
      var allPackageCodes = LoaderUtil.unionIdsInRelativeOrder(currentCovTermPacks*.PackageCode, newCovTermPacks*.PackageCode)
      resultCovTermPattern.removeCovTermPacks()
      allPackageCodes.each(\packageCode -> {
        var newCovTermPack = newCovTermPacks.firstWhere(\pack -> pack.PackageCode == packageCode)
        var currentCovTermPack = currentCovTermPacks.firstWhere(\pack -> pack.PackageCode == packageCode)

        var adoptedCovTermPack = adoptedCovTermPacks?.firstWhere(\pack -> pack.PackageCode == packageCode)

        resultCovTermPattern.addCovTermPack(
            merge(currentCovTermPack, newCovTermPack, adoptedCovTermPack, {clausePublicId, newCovTermPattern.PublicId, packageCode}))
      })
    }


    return resultCovTermPattern
  }

  private function merge(currentCovTermPack : PolicyCovTermPackPattern, newCovTermPack : PolicyCovTermPackPattern, adoptedCovTermPack : PolicyCovTermPackPattern,
                         covTermPackPath : List<String>) : PolicyCovTermPackPattern {
    if (newCovTermPack != null and currentCovTermPack == null) {
      _messageReporter.reportAdded(covTermPackPath, COVTERMPACK)
      _patternModified = true
      return newCovTermPack.copy()
    } else if (newCovTermPack == null and currentCovTermPack != null) {
      _messageReporter.reportRemoved(covTermPackPath, COVTERMPACK)
      return currentCovTermPack.copy()
    } else if (newCovTermPack != null and currentCovTermPack != null) {
      var resultCovTermPack = currentCovTermPack.copy()

      mergeAttributes(PolicyCovTermPackPattern.ComparableAttributes, covTermPackPath,
          newCovTermPack, currentCovTermPack, adoptedCovTermPack, resultCovTermPack)

      // Merge PackageTerms
      var newPackageTerms = newCovTermPack.PackageTerms
      var currentPackageTerms = currentCovTermPack.PackageTerms
      var allPackageTermValues = LoaderUtil.unionIdsInRelativeOrder(currentPackageTerms*.Value, newPackageTerms*.Value)
      resultCovTermPack.removePackageTerm()
      allPackageTermValues.each(\packageTermValue -> {
        var newPackageTerm = newPackageTerms.firstWhere(\packageTerm -> packageTerm.Value == packageTermValue)
        var currentPackageTerm = currentPackageTerms.firstWhere(\packageTerm -> packageTerm.Value == packageTermValue)
        var adoptedPackageTerms : List<PackageTermPattern> = adoptedCovTermPack != null ? adoptedCovTermPack.PackageTerms : {}
        var adoptedPackageTerm = adoptedPackageTerms.firstWhere(\packageTerm -> packageTerm.Value == packageTermValue)
        var packageTermPath = covTermPackPath.copy()
        packageTermPath.add(packageTermValue)
        resultCovTermPack.addPackageTerm(
            merge(currentPackageTerm, newPackageTerm, adoptedPackageTerm, packageTermPath))
      })

      return resultCovTermPack
    } else {
      LoggerFactory.getLogger("PCA").error("[Clause loading] - unreachable condition occurred when " + covTermPackPath +
          " does correspond to any CovTermPack")

      return null
    }
  }

  private function merge(currentPackageTerm : PackageTermPattern, newPackageTerm : PackageTermPattern, adoptedPackageTerm : PackageTermPattern,
                         packageTermPath : List<String>) : PackageTermPattern {
    if (newPackageTerm != null and currentPackageTerm == null) {
      _messageReporter.reportAdded(packageTermPath, PACKAGETERM)
      _patternModified = true
      return newPackageTerm.copy()
    } else if (newPackageTerm == null and currentPackageTerm != null) {
      _messageReporter.reportRemoved(packageTermPath, PACKAGETERM)
      return currentPackageTerm.copy()
    } else if (newPackageTerm != null and currentPackageTerm != null) {
      var resultPackageTerm = currentPackageTerm.copy()

      mergeAttributes(PackageTermPattern.ComparableAttributes, packageTermPath,
          newPackageTerm, currentPackageTerm, adoptedPackageTerm, resultPackageTerm)

      return resultPackageTerm
    } else {
      LoggerFactory.getLogger("PCA").error("[Clause loading] - unreachable condition occurred when " + packageTermPath +
          " does correspond to any PackageTerm")

      return null
    }
  }

  private function merge(currentOptionPattern : PolicyCovTermOptionPattern, newOptionPattern : PolicyCovTermOptionPattern, adoptedOptionPattern : PolicyCovTermOptionPattern,
                         optionPath : List<String>) : PolicyCovTermOptionPattern {

    if (newOptionPattern != null and currentOptionPattern == null) {
      _patternModified = true
      return newOptionPattern.copy()
    } else if (newOptionPattern == null and currentOptionPattern != null) {
      return currentOptionPattern.copy()
    } else if (newOptionPattern != null and currentOptionPattern != null) {
      var resultOptionPattern = currentOptionPattern.copy()

      // Merge and report Option scripts
      var scriptPath = new ArrayList<String>(optionPath)
      scriptPath.add("AvailabilityScript")

      mergeScripts(currentOptionPattern.AvailabilityScript, newOptionPattern.AvailabilityScript, adoptedOptionPattern?.AvailabilityScript, scriptPath, \availabilityScript -> {
        resultOptionPattern.AvailabilityScript = availabilityScript
      })

      mergeAttributes(PolicyCovTermOptionPattern.ComparableAttributes, optionPath,
          newOptionPattern, currentOptionPattern, adoptedOptionPattern, resultOptionPattern)

      return resultOptionPattern
    } else {
      LoggerFactory.getLogger("PCA").error("[Clause loading] - unreachable condition occurred when " + optionPath +
          " does correspond to any option")

      return null
    }
  }

  private function mergeAttributes(comparableAttributes : List<String>, prefixPath : List<String>,
                                   newXmlContent : XmlContent, currentXmlContent : XmlContent, adoptedXmlContent : XmlContent,
                                   resultXmlContent : XmlContent, replacementReportType : MessageReporter.ReportMessageSourceType = null) {
    comparableAttributes.each(\comparableAttributeName -> {
      var fullPath = new ArrayList<String>(prefixPath)
      fullPath.add(comparableAttributeName)

      var newAttributeValue = newXmlContent.getAttributeValueNoEmpty(comparableAttributeName)
      var currentAttributeValue = currentXmlContent.getAttributeValueNoEmpty(comparableAttributeName)

      if (isAdded(newAttributeValue, currentAttributeValue)) {
        if (comparableAttributeName == EXISTENCE_ATTRIBUTE_NAME) {
          resultXmlContent.setAttributeValue(comparableAttributeName, null)
          var clausePublicId = newXmlContent.getAttributeValue("public-id")

          ExistenceConfigCache.getInstance().addVersion(_updateJurisdiction, newXmlContent.getAttributeValue("existence"), EXISTENCE_DEFAULT_DATE,
              clausePublicId, EXISTENCE_CLAUSE_CONTAINER_TYPE)

        } else {
          resultXmlContent.setAttributeValue(comparableAttributeName, newAttributeValue)
        }
        _patternModified = true
        _messageReporter.reportAdded(fullPath, replacementReportType?:ATTRIBUTE)
      } else if (isRemoved(newAttributeValue, currentAttributeValue)) {
        if (comparableAttributeName == EXISTENCE_ATTRIBUTE_NAME) {
          resultXmlContent.setAttributeValue(comparableAttributeName, null)
          var clausePublicId = currentXmlContent.getAttributeValue("public-id")

          ExistenceConfigCache.getInstance().addVersion(null, currentXmlContent.getAttributeValue("existence"), EXISTENCE_DEFAULT_DATE,
              clausePublicId, EXISTENCE_CLAUSE_CONTAINER_TYPE)
        }
        _messageReporter.reportRemoved(fullPath, replacementReportType?:ATTRIBUTE)
      } else if (newAttributeValue != currentAttributeValue) {

        var adoptedAttributeValue = adoptedXmlContent?.getAttributeValueNoEmpty(comparableAttributeName)
        // Only overwrite any attribute in STATE-ADD if it's existence attributer
        if (currentAttributeValue == adoptedAttributeValue or
            (adoptedXmlContent == null and comparableAttributeName == EXISTENCE_ATTRIBUTE_NAME)) {
          if (comparableAttributeName == EXISTENCE_ATTRIBUTE_NAME) { // handle existence-related merge conflicts
            // create jursidictional version in existence-config for new existence value
            resultXmlContent.setAttributeValue(comparableAttributeName, null)

            var owningEntity = currentXmlContent.getAttributeValue("owningEntityType")
            var clausePublicId = currentXmlContent.getAttributeValue("public-id")

            resultXmlContent.setElementValue("ExistenceScript", existenceScriptString(owningEntity, clausePublicId))

            var newContainerName = newXmlContent.getAttributeValue("public-id")

            if (newAttributeValue != null and currentAttributeValue != null) {
              // store a CW entry into the cache for the current pattern with effective date earliest as possible
              ExistenceConfigCache.getInstance().addVersion(null, currentXmlContent.getAttributeValue("existence"), EXISTENCE_DEFAULT_DATE,
                  clausePublicId, EXISTENCE_CLAUSE_CONTAINER_TYPE)

              ExistenceConfigCache.getInstance().addVersion(_updateJurisdiction, newXmlContent.getAttributeValue("existence"), EXISTENCE_DEFAULT_DATE,
                  newContainerName, EXISTENCE_CLAUSE_CONTAINER_TYPE)
            }
          } else {
            resultXmlContent.setAttributeValue(comparableAttributeName, newAttributeValue)
          }
          _patternModified = true
          _messageReporter.reportAdded(fullPath, replacementReportType?:ATTRIBUTE)
        } else {
          if (newAttributeValue != adoptedAttributeValue) {
            if (comparableAttributeName != PRIORITY_ATTRITUBE_NAME) { // skip reporting of priority attributes
              reportConflict(fullPath, replacementReportType?:ATTRIBUTE)
            }
          }
        }
      }
    })
  }

  private function existenceScriptString(owningEntity : String, clausePublicId : String) : String {
    var existenceString = "return " + owningEntity + ".getClauseExistence(\"" + clausePublicId + "\");"
    return existenceString
  }

  private function reportConflict(
      owningArtifactIdPath : List<String>,
      sourceType : MessageReporter.ReportMessageSourceType
  ) {
    _messageReporter.ConflictReporter.reportProductModel(owningArtifactIdPath, sourceType, _policyLineCode)
  }

  private function isAdded(newVersion : Object, currentVersion : Object) : boolean {
    return newVersion != null and currentVersion == null
  }

  private function isRemoved(newVersion : Object, currentVersion : Object) : boolean {
    return newVersion == null and currentVersion != null
  }

  private function isDifferentScripts(scriptOne : String, scriptTwo : String) : boolean {
    if (scriptOne == null) {
      scriptOne = ""
    }
    if (scriptTwo == null) {
      scriptTwo = ""
    }
    return scriptOne.trim() != scriptTwo.trim()
  }


  private function mergeScripts(scriptInCurrent : XmlElement, scriptInNew : XmlElement, scriptInAdopted : XmlElement,
                                fullPath : List<String>, assignScript(attr : XmlElement)) {
    if (isAdded(scriptInNew, scriptInCurrent)) {
      assignScript(scriptInNew)
      _patternModified = true
      _messageReporter.reportAdded(fullPath, SCRIPT)
    } else if (isRemoved(scriptInNew, scriptInCurrent)) {
      _messageReporter.reportRemoved(fullPath, SCRIPT)
    } else if (isDifferentScripts(scriptInNew?.$Text, scriptInCurrent?.$Text)) {
      // Current= Adopted, i.e. no customer modification then take New
      if (not isDifferentScripts(scriptInCurrent?.$Text, scriptInAdopted?.$Text)) {
        assignScript(scriptInNew)
        _patternModified = true
        _messageReporter.reportAdded(fullPath, SCRIPT)
      } else {
        if (isDifferentScripts(scriptInNew?.$Text, scriptInAdopted?.$Text)) {
          reportConflict(fullPath, SCRIPT)
        }
      }
    }
  }

  private function updateCovTermPatternColumnToSuitClause(covTermPattern : PolicyCovTermPattern, clausePattern : PolicyClausePattern) {
    if (covTermPattern.CoverageColumn.HasContent) {
      LoggerFactory.getLogger("PCA").info("[Clause loading][Merging covTerm ${covTermPattern.PublicId}] - finding available entity column")
      var availableColumnResult = EntityColumnHelper.nextAvailableColumn(covTermPattern.CoverageColumn, clausePattern)
      covTermPattern.CoverageColumn = availableColumnResult.Name
    }
  }

}