package gw.sbt.loader

uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.config.BackingUpTargetConfiguration
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.InMemoryTargetConfiguration
uses gw.sbt.config.TargetConfiguration
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.config.incoming.SBTUpdateContents
uses gw.sbt.loader.io.ContainerPropertyConfigFileAddition
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.loader.persistence.LoaderEntityReader
uses gw.sbt.loader.report.ConfigurationReport
uses gw.sbt.loader.report.LoadReport
uses gw.sbt.loader.report.StateUpdateRatingReportAdapter
uses gw.sbt.loader.reporter.ConfigurationFileZipper
uses gw.sbt.loader.reporter.ConflictReporter
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.stateadd.DiffTreeLoadGenerator
uses gw.sbt.loader.stateadd.LookupTablesLoadGenerator
uses gw.sbt.loader.stateadd.SchedulePropertyColumnConflictResolver
uses gw.sbt.loader.stateupdate.DisplayPropertiesLoadGenerator
uses gw.sbt.loader.stateupdate.EntityLoadGenerator
uses gw.sbt.loader.stateupdate.TypeListLoadGenerator
uses gw.sbt.loader.stateupdate.XsdFilesLoadGenerator
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.rating.RateBookContent
uses org.slf4j.LoggerFactory

abstract class SBTUpdateLoader {

  protected var _config : BackingUpTargetConfiguration
  protected var _loads : Loads as Loads
  protected var _loadsForReport : Loads as LoadsForReport

  protected var _writer : SBTUpdateLoaderWriter
  protected var _entityReader : LoaderEntityReader
  protected var _stateUpdateRatingReportAdapter : StateUpdateRatingReportAdapter = null
  protected var _messageReporter : MessageReporter as MessageReporter
  protected var _configurationReport : ConfigurationReport as ConfigurationReport = null
  protected var _loadReport : LoadReport as LoadReport = null
  protected var _currentRateBook : RateBookContent

  var _writtenConfigurationFiles : Set<ConfigurationFile> = {}
  var _disableReport : boolean as DisableReport = false

  // A bit of hack here to allow retrieval of TargetConfiguration from any loader component.
  // Since we don't support concurrency and loader contains all sequential ops, this should be safe, for now.
  protected static var _loaderWideConfig : TargetConfiguration as LoaderWideConfig

  //For State-Add
  static function newStateAddInstance(config : TargetConfiguration, entityReader : LoaderEntityReader) : SBTUpdateStateAddLoader {
    return new SBTUpdateStateAddLoader(config, entityReader)
  }

  //For State-Update
  static function newStateUpdateInstance(config : TargetConfiguration, entityReader : LoaderEntityReader, lastAdoptedSBTUpdate : SBTUpdate, stateUpdateRatingReportAdapter : StateUpdateRatingReportAdapter) : SBTUpdateStateUpdateLoader {
    return new SBTUpdateStateUpdateLoader(config, entityReader, lastAdoptedSBTUpdate, stateUpdateRatingReportAdapter)
  }

  //Current RateBook, only used by integration test for now.
  //But might be used later to read current ratebook from file system - if customer exports the current ratebook from DB.
  function withCurrentRateBook(currentRateBook : RateBookContent) {
    _currentRateBook = currentRateBook
  }

  protected construct(config : TargetConfiguration, entityReader : LoaderEntityReader) {
    _config = new BackingUpTargetConfiguration(config, new InMemoryTargetConfiguration())
    _entityReader = entityReader
    _loaderWideConfig = config
    _messageReporter = new MessageReporter()
    resetLoadsWriter()
    _loadsForReport = new Loads()
  }

  abstract function firstPassLoad(
      sbtUpdate : SBTUpdate,
      updateContents : SBTUpdateContents,
      currentContents : CurrentConfigContents,
      adoptedContents : SBTUpdateContents,
      currentEntityConfig : CurrentEntityConfig)

  abstract function secondPassLoad(sbtUpdate : SBTUpdate, updateContents : SBTUpdateContents, currentContents : CurrentConfigContents, adoptedContents : SBTUpdateContents)

  abstract function generateReports(sbtUpdate : SBTUpdate, currentPmDisplayProperties : ProductModelDisplayProperties)

  function load(
      sbtUpdate : SBTUpdate,
      updateContents : SBTUpdateContents,
      adoptedContents : SBTUpdateContents = null,
      currentEntityConfig : CurrentEntityConfig = null
  ) {
    var policyLine = sbtUpdate.MetaData.Line.Code
    var productAbbrev = updateContents.ProductAbbreviation
    var currentContents = new CurrentConfigContents(policyLine, productAbbrev, _config)

    // 1st pass
    firstPassLoad(sbtUpdate, updateContents, currentContents, adoptedContents,
        currentEntityConfig?:new TypeSystemCurrentEntityConfig())
    commitLoads()
    _writtenConfigurationFiles.addAll(_writer.WrittenConfigurationFiles)

    if (not DisableReport) {
      saveLoadsForReport()
    }
    // 2nd pass
    resetLoadsWriter()
    secondPassLoad(sbtUpdate, updateContents, currentContents, adoptedContents)
    commitLoads()
    _writtenConfigurationFiles.addAll(_writer.WrittenConfigurationFiles)

    // report
    if (not DisableReport) {
      saveLoadsForReport()
      generateReports(sbtUpdate, currentContents.ProductModelDisplayProperties)
      generateConfigurationFileZips(sbtUpdate, updateContents)
    }

    _config.saveBackup()

    LoggerFactory.getLogger("PCA").info("Done loading")
  }

  protected function addEntityLoads(
      currentContents : CurrentConfigContents,
      sbtUpdateContents : SBTUpdateContents,
      currentEntityConfig : CurrentEntityConfig
  ) {
    LoggerFactory.getLogger("PCA").info("Loading Entities")
    var load = new EntityLoadGenerator(currentContents, sbtUpdateContents, MessageReporter, currentEntityConfig)
        .generateLoad()
    _loads.add(load)
  }

  protected function addTypeListLoads(currentContents : CurrentConfigContents, sbtUpdateContents : SBTUpdateContents) {
    LoggerFactory.getLogger("PCA").info("Loading TypeLists")
    var loads = new TypeListLoadGenerator(currentContents, sbtUpdateContents, MessageReporter).generateLoads()
    _loads.addAll(loads)
  }

  protected function addDisplayProperties(
      currentContents : CurrentConfigContents,
      updateContents : SBTUpdateContents,
      adoptedContents : SBTUpdateContents = null
  ) {
    LoggerFactory.getLogger("PCA").info("Load display properties and productmodel display properties")
    var loadGenerator = new DisplayPropertiesLoadGenerator(currentContents, updateContents, adoptedContents,
        MessageReporter)
    _loads.addAll(loadGenerator.generateLoads())
  }

  private function generateConfigurationFileZips(sbtUpdate : SBTUpdate, updateContents : SBTUpdateContents) {
    var zipper = new ConfigurationFileZipper()
    zipper.writeConflictFilesZip(
        conflictFilesFrom(MessageReporter.ConflictReporter, _loadsForReport),
        sbtUpdate,
        updateContents,
        _writer)
    zipper.writeMergedFilesZip(sbtUpdate, _writtenConfigurationFiles.toList(), _loaderWideConfig, _writer)
  }

  function undo() {
    _loads.undo(_writer)
  }

  property get FailedLoads() : List<FailedLoad> {
    return new ArrayList<FailedLoad>(_loads.FailedLoads)
  }

  final protected function resetLoadsWriter() {
    _loads = new Loads()
    _writer = new SBTUpdateLoaderWriter(_config)
  }

  final protected function saveLoadsForReport() {
    _loadsForReport.AllLoads.addAll(_loads.AllLoads)
    _loadsForReport.FailedLoads.addAll(_loads.FailedLoads)
    _loadsForReport.SuccessfulLoads.addAll(_loads.SuccessfulLoads)
  }

  private function commitLoads() {
    _loads.commit(_writer)
  }

  //for now, only Lob-Field-Metada needs the decisionMap, others would be 'Accept' automatically.
  //Recursively abstract the decisions from the comparisons into decisionsMap, for quick lookup
  static function createDecisionsMap(comparison : Comparison, decisionsMap : Map<String, UpdateDecision>) {
    var decisionKey = ComparisonDecisionSource.deriveDecisionAndInstructionsKey(comparison.CanonicalVersion)
    if (decisionKey != null and comparison.Decision != null) {
      decisionsMap.put(decisionKey, comparison.Decision)
      if (not comparison.Children.Empty) {
        comparison.Children.each(\childComparison -> createDecisionsMap(childComparison, decisionsMap))
      }
    }
  }

  //Get the decision by key.
  static function getDecision(key : String, decisionMap : Map<String, UpdateDecision>) : UpdateDecision {
    if (decisionMap == null or decisionMap.Empty) { // for most of configuration files, there is no decision required, means ACCEPT automatically.
      return UpdateDecision.ACCEPT
    }
    return decisionMap.get(key)
  }

  protected function addClauseLoads(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents,
                                    sbtUpdate : SBTUpdate, adoptedUpdate : SBTUpdate) {
    LoggerFactory.getLogger("PCA").info("Loading " + sbtUpdate.Clauses.Count + " clause(s)")
    _loads.addAll(new SBTUpdateToClauseLoadsGenerator(MessageReporter)
        .createLoads(sbtUpdate, adoptedUpdate, updateContents, currentContents, adoptedContents))
  }

  protected function addFormLoads(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents,
                                  sbtUpdate : SBTUpdate, adoptedUpdate : SBTUpdate) {
    LoggerFactory.getLogger("Loading " + sbtUpdate.Forms.Count + " form(s)")
    _loads.addAll(new SBTUpdateToFormLoadsGenerator(MessageReporter)
        .createLoads(sbtUpdate, adoptedUpdate, updateContents, currentContents, adoptedContents, _entityReader))
  }

  protected function addConfigurationFiles(currentContents : CurrentConfigContents, sbtUpdate : SBTUpdate,
                                           updateContents : SBTUpdateContents,
                                           adoptedContents : SBTUpdateContents,
                                           jurisdiction : String, policyLine : String) {
    if (policyLine == "WC7Line") {
      return
    }
    addValueDependencyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.AdoptionDate, sbtUpdate.MetaData.isIndependentState)
    addLobFieldMetaConfig(currentContents, updateContents, adoptedContents, sbtUpdate, jurisdiction, sbtUpdate.AdoptionDate)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.AVAILABILITY_CONFIG)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.EXISTENCE_CONFIG)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.FORM_INFERENCE_CONFIG)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.VALIDATION_CONFIG)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.PRODUCTMODEL_EXTENSION)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.STAT_CODE_CONFIG)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.SYNC_PROPERTY_META)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.MODEL_MAPPING_CONFIG)
    addContainerPropertyConfig(currentContents, updateContents, adoptedContents, jurisdiction, sbtUpdate.MetaData.isIndependentState, sbtUpdate.AdoptionDate, ContainerPropertyConfigType.SUSPENSION_CONFIG)
  }

  protected function addContainerPropertyConfig(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents,
                                      jurisdiction : String, isIndependentState : boolean, adoptionDate : Date, configType : ContainerPropertyConfigType,
                                      updateConfigFile : ContainerPropertyConfig = null,
                                      decisionsMap : Map<String, UpdateDecision> = null) {
    LoggerFactory.getLogger("PCA").info("Loading " + configType.ConfigFile)
    updateConfigFile = updateConfigFile?:updateContents.getContainerPropertyConfig(configType)
    if (updateConfigFile != null) {
      var load = new ContainerPropertyLoadGenerator(adoptionDate, jurisdiction, isIndependentState, MessageReporter, configType).withDecisionsMap(decisionsMap).generateLoad(
          currentContents.getContainerPropertyConfig(configType),
          updateConfigFile,
          adoptedContents?.getContainerPropertyConfig(configType),
          \containerPropertyConfig ->
              new ContainerPropertyConfigFileAddition(
                  ConfigurationFile.getContainerPropertyConfig(configType, currentContents.ProductAbbreviation),
                  containerPropertyConfig))
      _loads.add(load)
    }
  }

  protected function resolveSchedulePropertyEntityColConflicts(currentContents : CurrentConfigContents, jurisdiction : String) {
    LoggerFactory.getLogger("PCA").info("[Loader 2nd pass] - resolve schedule properties' entity column conflicts")

    var conflictResolver = new SchedulePropertyColumnConflictResolver(currentContents)
    _loads.addAll(conflictResolver.generateLoads(jurisdiction))
  }

  protected function addDiffTreeDeltas(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents) {
    LoggerFactory.getLogger("PCA").info("Loading DiffTree.xml")

    var load = new DiffTreeLoadGenerator(currentContents, MessageReporter).generateLoad(updateContents)
    if (load != null) {
      _loads.add(load)
    }
  }

  protected function addLookupTablesDeltas(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents) {
    LoggerFactory.getLogger("PCA").info("Loading LookupTables.xml")

    var load = new LookupTablesLoadGenerator(currentContents, MessageReporter).generateLoad(updateContents)
    if (load != null) {
      _loads.add(load)
    }
  }

  function addValueDependencyConfig(currentContents: CurrentConfigContents, sbtUpdateContents: SBTUpdateContents, adoptedContents: SBTUpdateContents,
                                    jurisdiction : String, adoptionDate : Date, isIndependentState : boolean) {
    LoggerFactory.getLogger("PCA").info("Loading value-dependency-config.xml")

    var valueDepConfigInUpdate = sbtUpdateContents.ValueDependencyConfig
    if (valueDepConfigInUpdate != null) {
      var valueDepConfigInCurrent = currentContents.ValueDependencyConfig
      var valueDepConfigInAdopted = adoptedContents.ValueDependencyConfig
      var load = new ValueDependenciesLoadGenerator(currentContents, sbtUpdateContents, adoptedContents, jurisdiction, adoptionDate, _messageReporter, isIndependentState)
          .generateLoad(valueDepConfigInCurrent, valueDepConfigInUpdate, valueDepConfigInAdopted)
      _loads.add(load)
    }
  }

  abstract function addLobFieldMetaConfig(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents,
                                          newUpdate : SBTUpdate, jurisdiction : String, adoptionDate : Date)

  protected abstract function conflictFilesFrom(conflictReporter : ConflictReporter, loads : Loads)
      : List<ConfigurationFile>


  protected function addGosuFileLoads(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents) {
    LoggerFactory.getLogger("PCA").info("Loading Gosu classes")
    var loads = new GosuFilesLoadGenerator(currentContents, updateContents, adoptedContents, MessageReporter).generateLoads()
    _loads.addAll(loads)
  }

  protected function addPcfFileLoads(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents) {
    LoggerFactory.getLogger("PCA").info("Loading PCF files")
    var loads = new PcfFilesLoadGenerator(currentContents, updateContents, adoptedContents, MessageReporter).generateLoads()
    _loads.addAll(loads)
  }

  protected function addPluginFileLoads(currentContents : CurrentConfigContents, updateContents : SBTUpdateContents, adoptedContents : SBTUpdateContents) {
    LoggerFactory.getLogger("PCA").info("Loading Plugin files")
    var loads = new PluginFilesLoadGenerator(currentContents, updateContents, adoptedContents, MessageReporter).generateLoads()
    _loads.addAll(loads)
  }

  protected function addXsdFileLoads(currentContents: CurrentConfigContents, updateContents: SBTUpdateContents, adoptedContents : SBTUpdateContents) {
    LoggerFactory.getLogger("PCA").info("Loading XSD files")
    var loads = new XsdFilesLoadGenerator(currentContents, updateContents, adoptedContents, MessageReporter).generateLoads()
    _loads.addAll(loads)
  }
}