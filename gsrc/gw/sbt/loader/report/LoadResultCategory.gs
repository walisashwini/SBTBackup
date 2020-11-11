package gw.sbt.loader.report

uses gw.sbt.artifacts.bureaus.BureauCodeFileDefinition
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.LobFieldMeta
uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.artifacts.lookups.PolicyLinePatternLookups
uses gw.sbt.artifacts.lookuptables.LookupTables
uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.artifacts.plugin.PluginFile
uses gw.sbt.artifacts.policyline.ModifierMinMax
uses gw.sbt.artifacts.policyline.ModifierPattern
uses gw.sbt.artifacts.policyline.PolicyLinePattern
uses gw.sbt.artifacts.schedules.Schedule
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRegistryFileDefinition
uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.artifacts.valuedependency.ValueDependencyConfig
uses gw.sbt.artifacts.versioned.ContainerKey
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.artifacts.xsd.XsdFile
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.EmptyLoad
uses gw.sbt.loader.Load
uses gw.sbt.loader.io.CustomFormInferenceAddition
uses gw.sbt.loader.io.FormPatternAddition
uses gw.sbt.loader.io.SystemTableRegistryAddition
uses gw.sbt.model.IntentAndDecision
uses gw.sbt.model.Risk
uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.model.rating.RatingAlgorithm
uses gw.util.IOrderedList

abstract class LoadResultCategory {
  protected var _loads : List<Load> as readonly Loads
  protected var _sbtUpdate : SBTUpdate as readonly SBTUpdate

  static function forStateAdd(loads : List<Load>, sbtUpdate : SBTUpdate) : LoadResultCategory {
    return new StateAddLoadResultCategory(loads, sbtUpdate)
  }

  static function forStateUpdate(loads : List<Load>, sbtUpdate : SBTUpdate) : LoadResultCategory {
    return new StateUpdateLoadResultCategory(loads, sbtUpdate)
  }

  protected construct(loads : List<Load>, sbtUpdate : SBTUpdate) {
    _loads = loads
    _sbtUpdate = sbtUpdate
  }

  abstract property get Clauses(): List<Clause>

  abstract function findModifiedBureauCodesWithFilename(filename : String) : BureauCodes

  property get Schedules(): List<Schedule> {
    return subjectsOfType(Schedule).orderBy(\schedule -> schedule.ClausePattern)
  }

  // returns all the entities in the load, organized by their load types
  property get Entities() : Map<String, Entity> {
    var entities : Map<String, Entity> = {}

    loadsOfSubjectType(Entity).each(\ load -> load.LoadOps.Ops.each(\ ops ->
        entities.put(ops.TargetFile.Name, ops.Content as Entity)))

    return entities
  }

  abstract property get Forms() : List<PolicyForm>

  property get RateBooks(): List<RateBookContent> {
    return subjectsOfType(RateBookContent).orderBy(\rateBook -> rateBook.Description)
  }

  property get RateTables(): List<RateTableContent> {
    return subjectsOfType(RateBookContent)
        .where(\subj -> subj != null)
        .flatMap(\rateBook -> rateBook.RateTables)
        .orderBy(\rateTable -> rateTable.TableName)
  }

  property get RatingAlgorithms(): List<RatingAlgorithm> {
    return subjectsOfType(RateBookContent)
        .where(\subj -> subj != null)
        .flatMap(\rateBook -> rateBook.Algorithms)
        .orderBy(\ratingAlgorithm -> ratingAlgorithm.Name)
  }

  abstract property get BureauCodes() : List<BureauCodes>

  property get XsdFiles(): List<XsdFile> {
    return subjectsOfType(XsdFile).orderBy(\xsdFile -> xsdFile.FullPathName)
  }

  property get PluginFiles(): List<PluginFile> {
    return subjectsOfType(PluginFile).orderBy(\pluginFile -> pluginFile.FullPathName)
  }

  property get GosuClasses(): List<GosuFile> {
    return subjectsOfType(GosuFile).orderBy(\gosuFile -> gosuFile.FullName)
  }

  property get PcfFiles(): List<PcfFile> {
    return subjectsOfType(PcfFile).orderBy(\pcfFile -> pcfFile.FileName)
  }

  property get TypeLists(): List<TypeList> {
    return subjectsOfType(TypeList).orderBy(\typeList -> typeList.Name)
  }

  property get SystemTables(): List<SystemTable> {
    return subjectsOfType(SystemTable).orderBy(\sysTable -> sysTable.FileName)
  }

  property get SystemTableRegistryEntries(): IOrderedList<SystemTableRegistryFileDefinition> {
    return _loads*.LoadOps*.Ops.toList().flatten()
        .whereTypeIs<SystemTableRegistryAddition>(SystemTableRegistryAddition)
        .map(\registryAdditionOp -> registryAdditionOp.Content)
        .orderBy(\fileDefinitionEntry -> fileDefinitionEntry.FileName)
  }

  property get hasFormPatternFileAddition(): Boolean {
    return loadsOfSubjectType(PolicyForm)
        .where(\load -> load.LoadOps.Ops.hasMatch(\op -> op typeis FormPatternAddition))
        .map(\load -> load.Subject)
        .HasElements
  }

  property get CustomFormInferenceRegistryEntries() : List<PolicyForm> {
    return loadsOfSubjectType(PolicyForm)
        .where(\load -> load.LoadOps.Ops.hasMatch(\op -> op typeis CustomFormInferenceAddition))
        .map(\load -> load.Subject)
  }

  property get ModifierPatterns(): List<ModifierPattern> {
    return subjectsOfType(ModifierPattern)
  }

  property get PolicyLinePatternFile(): PolicyLinePattern {
    return subjectsOfType(PolicyLinePattern)?.first()
  }

  property get PolicyLinePatternLookupFile(): PolicyLinePatternLookups {
    return subjectsOfType(PolicyLinePatternLookups)?.first()
  }

  property get ModifierMinMaxFile(): ModifierMinMax {
    return subjectsOfType(ModifierMinMax)?.first()
  }

  property get LookupTablesFile(): LookupTables {
    return subjectsOfType(LookupTables)?.first()
  }

  property get Risks() : List<Risk> {
    return SBTUpdate.comparisonsOfType(Risk)
        .where(\riskComparison -> riskComparison.Decision != null or
            riskComparison.Children.hasMatch(\ attributeComparison -> attributeComparison.Decision != null))
        .map(\ riskComparison -> riskComparison.CanonicalVersion)
        .where(\ risk -> lobFieldMetaContainsEntity(risk.Entity))
  }

  function updatedAttributesForRisk(risk : Risk) : List<RiskAttribute> {
    return comparisonFor(risk).Children
        .where(\ attributeComparison -> attributeComparison.Decision != null)
        .map(\ attributeComparison -> {
          var result = attributeComparison.CanonicalVersion as RiskAttribute
          result.DecisionAndInstructions.Decision = attributeComparison.Decision // Ensure decision is set if current version is used (which is required in the case of deletion)
          return result
        })
        .where(\ attribute -> lobFieldMetaContainsProperty(risk.Entity, attribute.Code))
  }

  private function lobFieldMetaContainsEntity(entityName : String) : boolean {
    return MergedLobFieldMeta.map(\ lobFieldMeta -> lobFieldMeta.ContainerNames.contains(entityName)).orElse(false)
  }

  private function lobFieldMetaContainsProperty(entityName : String, propertyName : String) : boolean {
    return MergedLobFieldMeta.map(\ lobFieldMeta ->
        lobFieldMeta.getProperty(ContainerKey.create(entityName), propertyName) != null).orElse(false)
  }

  private property get MergedLobFieldMeta() : Optional<LobFieldMeta> {
    // #subjectsOfType can't be used because the load's type isn't Load<LobFieldMeta>
    var results = Loads
        .map(\ load -> load.Subject)
        .where(\ subject -> subject typeis LobFieldMeta)
        .cast(LobFieldMeta)
    if (results.Count > 1)
      throw "There should be at most one load for lob-field-meta.xml."
    return Optional.ofNullable(results.first())
  }

  abstract property get ModifiedRiskEntityFiles() : ConfigurationFile[]

  property get SystemTableLoads(): List<Load<SystemTable>> {
    return loadsOfSubjectType(SystemTable)
        .where(\load -> (not (load typeis EmptyLoad) and load.Subject != null and load.Subject.FileName != null))
        .orderBy(\sys -> sys.Subject.FileName)
  }

  property get BureauCodesLoads(): List<Load<BureauCodeFileDefinition>> {
    return loadsOfSubjectType(BureauCodeFileDefinition)
  }

  property get ValueDepConfig(): ValueDependencyConfig {
    return subjectsOfType(ValueDependencyConfig).first()
  }

  property get LobFieldMetaConfig(): LobFieldMeta {
    return subjectsOfType(LobFieldMeta).first()
  }

  function getContainerConfigurationFile(type: ContainerPropertyConfigType): ContainerPropertyConfig {
    var configFileIdSuffix = ConfigurationFile.getContainerPropertyConfig(type, "").Name
    return subjectsOfType(ContainerPropertyConfig)
        .where(\containerPropertyConfig -> not (containerPropertyConfig typeis LobFieldMeta) and
            containerPropertyConfig.ConfigFileId.endsWith(configFileIdSuffix))
        .first()
  }

  // returns the contents (i.e. "subject" of type T) in all Load objects of type Load<T>
  // filter out EmptyLoad and and Load with Subject as null
  protected reified function subjectsOfType<T>(type : Type<T>) : List<T> {
    return loadsOfSubjectType(T)
        .where(\load -> (not(load typeis EmptyLoad<T>) and (load.Subject != null)))
        .map(\load -> load.Subject)
  }

  protected reified function loadsOfSubjectType<T>(type: Type<T>): List<Load<T>> {
    return _loads.whereTypeIs(Load<T>)
  }

  protected property get LoadSubjectsWithDecision() : List<IntentAndDecision> {
    return _loads.map(\ load -> load.Subject).whereTypeIs(IntentAndDecision)
  }

  reified protected function comparisonFor<T extends IntentAndDecision>(subject : T) : Comparison<T> {
    return _sbtUpdate.comparisonFor(subject)
  }
}