package gw.sbt.loader

uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.loader.report.AuditReportWriter
uses gw.sbt.loader.report.ConfigurationReportWriter
uses gw.sbt.loader.report.DeviationsReportWriter
uses gw.sbt.loader.report.LoadReportWriter
uses gw.sbt.loader.report.LoadResult
uses gw.sbt.loader.reporter.ConflictReporter
uses gw.sbt.loader.stateadd.ProductLoadGenerator
uses gw.sbt.loader.stateadd.RateBookLoadGenerator
uses gw.sbt.loader.stateadd.SystemTablesLoadGenerator
uses gw.sbt.loader.stateupdate.PolicyLinePatternLoadGenerator
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.builder.CurrentSBTUpdateBuilder
uses gw.sbt.model.comparisons.Comparison
uses org.slf4j.LoggerFactory

class SBTUpdateStateAddLoader extends SBTUpdateLoader {

  var _currentUpdate: SBTUpdate as CurrentUpdate

  construct(config: TargetConfiguration, entityReader: LoaderEntityReader) {
    super(config, entityReader)

  }

  override function firstPassLoad(
      sbtUpdate: SBTUpdate,
      updateContents: SBTUpdateContents,
      currentContents: CurrentConfigContents,
      adoptedContents: SBTUpdateContents,
      currentEntityConfig : CurrentEntityConfig
  ) {

    var policyLine = sbtUpdate.MetaData.Line.Code
    var jurisdiction = sbtUpdate.MetaData.Jurisdiction
    var currentConfigMetaData = sbtUpdate.MetaData.getCombinedMetaDataBasedOn(sbtUpdate.MetaData)
    _currentUpdate = CurrentSBTUpdateBuilder.getSBTUpdateInBuilder(currentConfigMetaData)

    sbtUpdate.ProcessedDate = Date.Today

    addClauseLoads(currentContents, updateContents, adoptedContents, sbtUpdate, null)

    addFormLoads(currentContents, updateContents, null, sbtUpdate, null)

    // Only needs to be done for state-add
    addProductLoad(currentContents, updateContents, jurisdiction, sbtUpdate.AdoptionDate)

    addRateBookLoad(sbtUpdate, updateContents, jurisdiction)

    addConfigurationFiles(currentContents, sbtUpdate, updateContents, adoptedContents, jurisdiction, policyLine)

    addTypeListLoads(currentContents, updateContents)

    addGosuFileLoads(currentContents, updateContents, adoptedContents)

    addPcfFileLoads(currentContents, updateContents, adoptedContents)

    // Only needs to be done for state-add as state-update contains uniform handling for all system tables
    addSystemTablesLoads(currentContents, sbtUpdate, updateContents, jurisdiction, policyLine)

    addEntityLoads(currentContents, updateContents, currentEntityConfig)

    addDisplayProperties(currentContents, updateContents)

    addScheduleConfigLoads(currentContents, updateContents, adoptedContents, sbtUpdate, jurisdiction)

    addDiffTreeDeltas(currentContents, updateContents)

    addLookupTablesDeltas(currentContents, updateContents)

    addPolicyLinePatternLoad(currentContents, sbtUpdate, updateContents, policyLine, jurisdiction)

    addPluginFileLoads(currentContents, updateContents, adoptedContents)

    addXsdFileLoads(currentContents, updateContents, adoptedContents)

    ExistenceConfigCache.getInstance().clear()
  }

  override function secondPassLoad(sbtUpdate: SBTUpdate, updateContents: SBTUpdateContents, currentContents: CurrentConfigContents, adoptedContents: SBTUpdateContents) {
    var policyLine = sbtUpdate.MetaData.Line.Code
    var jurisdiction = sbtUpdate.MetaData.Jurisdiction
    resolveSchedulePropertyEntityColConflicts(currentContents, jurisdiction)
    addUnprocessedContent(currentContents, updateContents, policyLine, sbtUpdate.AdoptionDate, jurisdiction)
  }

  override function generateReports(sbtUpdate: SBTUpdate, currentPmDisplayProperties: ProductModelDisplayProperties) {
    var loadResult = LoadResult.forStateAdd(_loadsForReport, sbtUpdate)
    var loadReportWriter = new LoadReportWriter(_writer, sbtUpdate, loadResult, null, :messageReporter = MessageReporter)
    loadReportWriter.write()
    this.LoadReport = loadReportWriter.LoadReport
    new DeviationsReportWriter(_writer, sbtUpdate, null, :messageReporter = MessageReporter).write()
    var configReportWriter = new ConfigurationReportWriter(_writer, sbtUpdate, loadResult, :messageReporter = MessageReporter)
    configReportWriter.write()
    this.ConfigurationReport = configReportWriter.ConfigurationReport

    new AuditReportWriter(_writer, sbtUpdate, loadResult, null, MessageReporter){:CurrentPmDisplayProperties = currentPmDisplayProperties}.write()
  }

  protected override function conflictFilesFrom(conflictReporter : ConflictReporter, loads : Loads)
      : List<ConfigurationFile> {
    return conflictReporter.FilesWithConflicts
  }

  override function addLobFieldMetaConfig(currentContents: CurrentConfigContents, updateContents: SBTUpdateContents, adoptedContents: SBTUpdateContents,
                                          newUpdate : SBTUpdate, jurisdiction: String, adoptionDate: Date) {
    LoggerFactory.getLogger("PCA").info("Loading lob-field-meta.xml")

    var newRisks = newUpdate.Risks
    var riskNames = newRisks*.Name.toSet()
    var isIndependentState = newUpdate.MetaData.isIndependentState
    CurrentSBTUpdateBuilder.buildRisks(riskNames, CurrentUpdate, adoptionDate, _config)

    var riskComparisons = riskNames.map(\riskName -> {
      var newRisk = newRisks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))
      var currentRisk = CurrentUpdate.Risks.firstWhere(\risk -> (risk.Name == riskName or risk.Entity == riskName))
      var riskComparison = Comparison.forRisk(currentRisk, newRisk, null, ComparisonDecisionSource.create(newUpdate), isIndependentState)
      newUpdate.registerComparison(riskComparison)
      return riskComparison
    })

    if (not riskComparisons.Empty) {
      var decisionsMap = new HashMap<String, UpdateDecision>()
      riskComparisons.each(\comparison -> createDecisionsMapForLobFieldMeta(comparison, decisionsMap))

      //toggle the 'available' of riskattribute by decision.
      var lobFieldMetaInNewUpdate = updateContents.LobFieldMetaConfig
      if (lobFieldMetaInNewUpdate != null) {
        newRisks.each(\risk ->
            risk.RiskAttributes
                .where(\riskAttribute -> {
                  var decisionKey = ComparisonDecisionSource.deriveDecisionAndInstructionsKey(riskAttribute)
                  if (decisionKey != null) {
                    return decisionsMap.get(decisionKey) == UpdateDecision.REJECT
                  } else {
                    return false
                  }
                })
                .each(\riskAttribute -> lobFieldMetaInNewUpdate.toggleEntityColumnVisibility(risk.Entity, riskAttribute.Code, jurisdiction)))
      }

      addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, isIndependentState,
          newUpdate.AdoptionDate, ContainerPropertyConfigType.LOB_FIELD_META,lobFieldMetaInNewUpdate, decisionsMap)
    }
  }

  private function createDecisionsMapForLobFieldMeta(comparison : Comparison, decisionsMap : Map<String, UpdateDecision>) {
    var decisionKey = ComparisonDecisionSource.deriveDecisionAndInstructionsKey(comparison.CanonicalVersion)
    if (decisionKey != null) {
      // Convert decision to Accept only if new version is missing and current version exists during the state-add flow
      // and at the same time, the decision was missing as it was not shown in the UI
      if (comparison.Decision == null and comparison.New == null and comparison.Current != null) {
        comparison.Decision = UpdateDecision.ACCEPT
      }
      decisionsMap.put(decisionKey, comparison.Decision)
      if (not comparison.Children.Empty) {
        comparison.Children.each(\childComparison -> createDecisionsMapForLobFieldMeta(childComparison, decisionsMap))
      }
    }
  }

  private function addProductLoad(currentContents: CurrentConfigContents, updateContents: SBTUpdateContents,
                                  jurisdiction: String, adoptionDate: Date) {
    var productLoad = new ProductLoadGenerator(currentContents, MessageReporter).generateLoad(updateContents, jurisdiction, adoptionDate)
    _loads.add(productLoad)
  }

  private function addPolicyLinePatternLoad(currentContents : CurrentConfigContents, sbtUpdate : SBTUpdate, updateContents : SBTUpdateContents,
                                            policyLine : String, jurisdiction : String) {
    var updatePolicyLinePattern = updateContents.getPolicyLinePattern(policyLine)
    if (updatePolicyLinePattern != null) {
      LoggerFactory.getLogger("PCA").info("Loading Policy Line Pattern")
      var policyLinePatternLoad = new PolicyLinePatternLoadGenerator(currentContents, updateContents,
          jurisdiction, sbtUpdate.AdoptionDate, MessageReporter)

      var loads = policyLinePatternLoad.generateLoads()
      _loads.addAll(loads)

      _loads.addAll(policyLinePatternLoad.generateLookupLoads())

      var minMaxLoad= policyLinePatternLoad.generateModifierMinMaxLoad()
      if (minMaxLoad!= null) {
        _loads.add(minMaxLoad)
      }
    }
  }

  private function addSystemTablesLoads(
      currentContents : CurrentConfigContents,
      sbtUpdate : SBTUpdate,
      updateContents : SBTUpdateContents,
      jurisdiction : String,
      policyLine : String) {
    var sysTableLoadGenerator = new SystemTablesLoadGenerator(currentContents, MessageReporter)

    //bureau codes
    LoggerFactory.getLogger("PCA").info("Loading Bureau Codes")
    var bureauCodesSystemTables = updateContents.getBureauCodeSystemTables(sbtUpdate)
    bureauCodesSystemTables.each(\bureauCodesSystemTable -> {
      var load = sysTableLoadGenerator.generateLoad(bureauCodesSystemTable, sbtUpdate.AdoptionDate, updateContents, jurisdiction, policyLine, true)
      _loads.add(load)
    })
    //system tables
    LoggerFactory.getLogger("PCA").info("Loading System Tables")
    var systemTables = updateContents.getRemainingSystemTables(sbtUpdate)
    systemTables.each(\systemTable -> {
      var load = sysTableLoadGenerator.generateLoad(systemTable, sbtUpdate.AdoptionDate, updateContents, jurisdiction, policyLine, false)
      _loads.add(load)
    })

    // When entire system table is missing in update package we will expire the applicable rows
    if (policyLine == "WCMLine" and sbtUpdate.MetaData.isIndependentState) {
      // generate loads for deleted system tables
      var allCurrentSysTableFileNames = currentContents.getAllSystemTableFileNames()
      var allUpdateSysTables = bureauCodesSystemTables*.FileNameWithExtension.toSet()
      allUpdateSysTables.addAll(systemTables*.FileNameWithExtension.toSet())


      allCurrentSysTableFileNames.where(\fileName -> not allUpdateSysTables.contains(fileName)).each(\systableFileName -> {
        var systemTable = currentContents.getSystemTable(systableFileName)
        if (systemTable != null) {
          var load = sysTableLoadGenerator.generateLoadForDeletedSystemTables(systemTable, sbtUpdate.AdoptionDate, updateContents, jurisdiction, policyLine)
          _loads.add(load)
        }
      })
    }
  }

  private function addScheduleConfigLoads(currentContents: CurrentConfigContents, sbtUpdateContents: SBTUpdateContents,adoptedContents: SBTUpdateContents, sbtUpdate : SBTUpdate, jurisdiction : String) : void {
    LoggerFactory.getLogger("PCA").info("Loading Schedules")
    var loads = new ScheduleLoadGenerator(currentContents, sbtUpdateContents, adoptedContents, jurisdiction, sbtUpdate.AdoptionDate, MessageReporter, sbtUpdate.MetaData.isIndependentState).generateLoads()
    _loads.addAll(loads)
  }

   /**
   * Load any unprocessed content due to lack of support from other components in PCA, mainly to help with certain LOB releases.
   *
   * TODO This method and any load generators utilized should be removed eventually, as we expand PCA's ability to handle
   * those content.
   *
   * @param currentContents
   * @param updateContents
   */
  private function addUnprocessedContent(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents,
                                         policyLine : String, adoptionDate : Date, jurisdiction : String) {
    LoggerFactory.getLogger("PCA").info("[Loader 2nd pass] - merge unprocessed clause patterns and lookups")

    var load = new SpecialCasesClauseLoadGenerator(currentContents)
        .generateLoad(updateContents, policyLine, adoptionDate, jurisdiction)

    if(load != null) {
      _loads.add(load)
    }
  }

  private function addRateBookLoad(sbtUpdate: SBTUpdate, updateContents: SBTUpdateContents,jurisdiction: String) {
    if (sbtUpdate.RateBook != null) {
      LoggerFactory.getLogger("PCA").info("Loading ratebook")
      var rateBookLoad = new RateBookLoadGenerator().generateLoad(sbtUpdate.RateBook,
          updateContents, sbtUpdate.MetaData.Line.Code, jurisdiction, sbtUpdate.AdoptionDate, sbtUpdate.ProcessedDate)
      _loads.add(rateBookLoad)
    }
  }
}