package gw.sbt.loader.report

uses gw.api.locale.DisplayKey
uses gw.sbt.artifacts.valuedependency.ValueDependencyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.util.LoadHelper
uses gw.sbt.loader.report.node.ReportListNode
uses gw.sbt.loader.report.node.ReportNode
uses gw.sbt.loader.report.node.ReportTableNode
uses gw.sbt.loader.reporter.ConfigurationFileReportContent
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.Intent
uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.BureauCodesComparison
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.rating.RateBookContent

class LoadReport extends Report {
  private final var ADDED_ENTRY_TAG= " (New)"
  private final var MODIFIED_ENTRY_TAG= " (Updated)"
  private final var DELETED_ENTRY_TAG= " (Expired)"

  construct(loadResult: LoadResult, latestAdoptedMetadata: SBTUpdateMetaData = null, sbtUpdate: SBTUpdate = null, messageReporter : MessageReporter = null) {
    super(loadResult, sbtUpdate, latestAdoptedMetadata, messageReporter)
    buildLoadReport()
  }

  override property get RootAttributes(): List<String> {
    var rootAttributes = super.RootAttributes
    rootAttributes.add(ReferenceToMergedFilesZip)
    return rootAttributes
  }

  private property get ReferenceToMergedFilesZip() : String {
    var file = ConfigurationFile.mergedFilesZipFile(
        SBTUpdate.MetaData.Jurisdiction,
        SBTUpdate.MetaData.Line.Code,
        SBTUpdate.ProcessedDate)
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Download.MergedFiles") + ": " + file.Path
  }

  private function buildLoadReport() {
    RootNode = new ReportListNode("Product Content Analyzer Loader Results Report", RootAttributes)
    RootNode.addChildren(ReportBody)
  }

  private property get ReportBody(): List<ReportNode> {
    return { Summary, Details, BackgroundArtifacts }
  }

  private property get Summary(): ReportTableNode {
    var summaryContent = {
        {"Artifact", "Processed"},
        summaryLine("Coverages, Conditions & Exclusions", \category -> category.Clauses),
        summaryLine("Forms", \category -> category.Forms),
        summaryLine("Rate Tables", \category -> category.RateTables),
        summaryLine("Algorithms", \category -> category.RatingAlgorithms)
    }

    summaryContent.addAll(BureauCodesSummary)
    summaryContent.add(summaryLine("Risk Attributes", \ category ->
        category.Risks
            .where(\subj -> subj != null)
            .flatMap(\ risk -> category.updatedAttributesForRisk(risk))))

    return new ReportTableNode("Summary", summaryContent)
  }

  private function summaryLine(label: String, getEntities(category: LoadResultCategory ): List<Object>)
      : List<String> {
    var successes = getEntities(LoadResult.SuccessfulLoads).where(\artifact -> artifact != null).Count
    return {label, successes as String}
  }

  private property get BureauCodesSummary(): List<List<String>> {
    var loadedBureauCodesList = LoadResult.SuccessfulLoads.BureauCodes
    var bureauCodesSummary: List<List<String>> = {}

    SBTUpdate.BureauCodeFileDefinitions.each(\fileDefinition -> {
      var readBureauCodes = findBureauCodes(fileDefinition.FileName)
      if(readBureauCodes != null) {
        var loadedBureauCodes = loadedBureauCodesList.firstWhere(\code -> code.FileName == fileDefinition.FileName)

        var numSuccessfulBureauCodesProcessed = 0
        // State-update processing - only count those codes that are loaded
        if (IsStateUpdateReport and loadedBureauCodes != null) {
          var comparison = SBTUpdate.comparisonFor(loadedBureauCodes)
          if (comparison typeis BureauCodesComparison) {
            var rowComparisons = comparison.BureauCodeRowComparisons

            // Only accepted rows adds, removes, or changes translate to load counts
            numSuccessfulBureauCodesProcessed = rowComparisons
                .where(\rowComparison -> rowComparison.Decision == ACCEPT).Count
          }
        }
        // State-add processing - only count those codes that are loaded
        else if (loadedBureauCodes != null) {
          numSuccessfulBureauCodesProcessed = loadedBureauCodes.Codes.Count
        }

        var title = fileDefinition.Label
        bureauCodesSummary.add({"${title}", "${numSuccessfulBureauCodesProcessed}"})
      }
    })

    return bureauCodesSummary
  }

  private property get Details(): ReportNode {
    return reportNode("Details",
        {artifactsFor(LoadResult.SuccessfulLoads, "Successfully Processed")})
  }

  private function artifactsFor(category: LoadResultCategory, title: String): ReportNode {
    var processedClauses = category.Clauses.map(\clause -> clause.Description + " (" + clause.ParentRisk.Name + ") " + getClauseDecisionStr(clause))
    var processedForms = getFormDescriptions(category.Forms)
    var riskAttributesNode = getRiskAttributesDetails(category)

    var node = new ReportNode(title)
    node.addChild(new ReportListNode("Coverages, Conditions & Exclusions", processedClauses))
    node.addChild(new ReportListNode("Forms", processedForms))
    node.addChild(getRateBooksNode(category.RateBooks))
    node.addChildren(BureauCodesNodes)
    node.addChild(riskAttributesNode)

    return node
  }
  
  private function getClauseDecisionStr(clause : Clause) : String {
    var decision = clause.Decision
    if (decision == null and IsStateUpdateReport)
      decision = SBTUpdate.comparisonFor(clause).Decision

    return decision == null
        ? ""
        : "(" + getUpdateDecisionDescription(decision) + ")"
  }
  
  private function getFormDescriptions(forms: List<PolicyForm>): List<String> {
    return forms.map(\form -> getReportFormPrefix(form) + " " + form.Description + getReportFormPostfix(form)).sort()
  }

  private function getReportFormPostfix(form : PolicyForm) : String {
    var decision = form.Decision
    if (decision == null and IsStateUpdateReport)
      decision = SBTUpdate.comparisonFor(form).Decision
    return decision == null ? " (CW)" : " (" + getUpdateDecisionDescription(decision) + ")"
  }

  private function getRateBooksNode(rateBooks : List<RateBookContent>) : ReportListNode {
    var processedRateBooks = rateBooks.map(\rateBook -> rateBook.Description +
        (rateBook.Decision != null ?
            " (" + getUpdateDecisionDescription(rateBook.Decision) + ")" : ""))
    if (IsStateUpdateReport) {
      processedRateBooks.add("See PCA Rating Report for details")
    }

    return new ReportListNode("Rate Books", processedRateBooks)
  }

  private property get BureauCodesNodes(): List<ReportListNode> {
    var nodes: List<ReportListNode> = {}

    SBTUpdate.BureauCodeFileDefinitions.each(\ fileDefinition -> {
      var bureauCodes = findBureauCodes(fileDefinition.FileName)
      if (bureauCodes != null) {
        var decision = bureauCodes.Decision ?: SBTUpdate.comparisonFor(bureauCodes).Decision
        var bureauCodesDecisionLabel = decision != null ? " (" + getUpdateDecisionDescription(decision) + ")" : ""
        var tableNameWithDecision = bureauCodes.TableName + bureauCodesDecisionLabel

        // for a REJECT'ed group of Bureau Codes, the Decision is REJECT but bureauCodes will be null
        var title = fileDefinition.Label
        nodes.add(new ReportListNode(title, (tableNameWithDecision == null ? {} : {tableNameWithDecision})))
      }
    })
    return nodes
  }

  private function getRiskAttributesDetails(category : LoadResultCategory) : ReportListNode {
    var details: List<String> = {}

    category.Risks.each(\ risk -> {
      var attributeList = category.updatedAttributesForRisk(risk)
          .orderBy(\attr -> attr.Description)
          .map(\attr -> getRiskAttributeDescription(attr))
          .join(", ")
      details.add("${risk.Name}: ${attributeList}")
    })
    return new ReportListNode("Risk Attributes", details)
  }

  private function getRiskAttributeDescription(attribute: RiskAttribute): String {
    var attributePath = attribute.AttributePath
    var leafAttribute = attribute.DefiningLeafAttribute
    return attributePath*.Description.join(" - ") + " (" +
        getUpdateDecisionDescription(leafAttribute.Decision) + ")"
  }

  private property get BackgroundArtifacts(): ReportNode {
    return reportNode("Background artifacts copied or modified",
        {backgroundArtifactsFor(LoadResult.SuccessfulLoads, "Successfully Processed")})
  }

  private function backgroundArtifactsFor(category: LoadResultCategory, title: String): ReportNode {
    var scheduleConfigurationNode = buildScheduleConfigNode(category)
    var gosuClasses = category.GosuClasses.map(\gosuClass -> gosuClass.FullName)
    var pcfFiles = category.PcfFiles.map(\pcfFile -> pcfFile.FileName)
    var typeLists = category.TypeLists.map(\typeList -> typeList.FileNameWithExtension)
    // US47533 add entry to use messageReporter
    var systemTableNode = buildSystemTableNode(category)
    var entityFileNames = entityFileNames(category)
    var systemTableRegistryEntries = category.SystemTableRegistryEntries.map(\sysTableFileDef -> sysTableFileDef.FileName)
    var customFormInferenceRegistryEntries = getFormDescriptions(category.CustomFormInferenceRegistryEntries)

    var lobFieldMetaNode = buildLobFieldMetaNode(category)
    var valueDepConfigNode = buildValueDependencyConfigNode(category.ValueDepConfig)

    var availabilityConfigNode = buildContainerPropertyConfigNode(AVAILABILITY_CONFIG, category.getContainerConfigurationFile(AVAILABILITY_CONFIG), "Container", "Property")
    var existenceConfigNode = buildContainerPropertyConfigNode(EXISTENCE_CONFIG, category.getContainerConfigurationFile(EXISTENCE_CONFIG), "Container", "Property")
    var validationConfigNode = buildContainerPropertyConfigNode(VALIDATION_CONFIG, category.getContainerConfigurationFile(VALIDATION_CONFIG), "Container", "Property")
    var syncPropertyMetaConfigNode = buildContainerPropertyConfigNode(SYNC_PROPERTY_META, category.getContainerConfigurationFile(SYNC_PROPERTY_META), "Container", "Property")
    var statCodeConfigNode = buildContainerPropertyConfigNode(STAT_CODE_CONFIG, category.getContainerConfigurationFile(STAT_CODE_CONFIG), "Container", "StatCode")
    var formInferenceConfigNode = buildContainerPropertyConfigNode(FORM_INFERENCE_CONFIG, category.getContainerConfigurationFile(FORM_INFERENCE_CONFIG), "FormInference", "Version")
    var productModelExtensionConfigNode = buildContainerPropertyConfigNode(PRODUCTMODEL_EXTENSION, category.getContainerConfigurationFile(PRODUCTMODEL_EXTENSION), "Clause", "Term")
    var modifierminmaxNode = buildModifierMinMaxNode(category)
    var lookuptablesNode = buildLookupTablesNode(category)
    var policyLinePatternNode = buildPolicyLinePatternNode(category)
    var xsdFileNode = buildXsdFileNode(category)
    var pluginFileNode = buildPluginFileNode(category)

    var node = new ReportNode(title)
    node.addChild(scheduleConfigurationNode)
    node.addChild(new ReportListNode("Gosu Classes", gosuClasses))
    node.addChild(new ReportListNode("Pcf Files", pcfFiles))
    node.addChild(new ReportListNode("Typelists", typeLists))
    node.addChild(systemTableNode)
    node.addChild(new ReportListNode("Entities", entityFileNames.toList().sort()))
    node.addChild(new ReportListNode("systables.xml", systemTableRegistryEntries))
    node.addChild(lobFieldMetaNode)
    node.addChild(valueDepConfigNode)
    node.addChild(availabilityConfigNode)
    node.addChild(existenceConfigNode)
    node.addChild(formInferenceConfigNode)
    node.addChild(validationConfigNode)
    node.addChild(syncPropertyMetaConfigNode)
    node.addChild(statCodeConfigNode)
    node.addChild(productModelExtensionConfigNode)
    node.addChild(new ReportListNode("custom_form_inference.xml", customFormInferenceRegistryEntries))
    node.addChild(modifierminmaxNode)
    node.addChild(lookuptablesNode)
    node.addChild(policyLinePatternNode)
    node.addChild(xsdFileNode)
    node.addChild(pluginFileNode)
    return node
  }

  private function buildLookupTablesNode (category : LoadResultCategory) : ReportNode {
    var lookuptablesNode = new ReportNode("lookuptables.xml")
    if (MessageReporter == null or category.LookupTablesFile == null) {
      lookuptablesNode.addChild(new ReportListNode({"None"}))
    }else {
      var added = MessageReporter.ModificationReporter.AddedLookupTables?.map(\lookupTableCode -> lookupTableCode + ADDED_ENTRY_TAG)
      var modified = MessageReporter.ModificationReporter.ModifiedLookupTables?.map(\lookupTableCode -> lookupTableCode + MODIFIED_ENTRY_TAG)
      lookuptablesNode = new ReportListNode("lookuptables.xml", LoadHelper.createUnion({added, modified}))
    }
    return lookuptablesNode
  }


  private function buildModifierMinMaxNode(category : LoadResultCategory) : ReportNode {
    var modifierMinMaxNode = new ReportNode("modifierminmax.xml")
    if (MessageReporter == null or category.ModifierMinMaxFile == null) {
      modifierMinMaxNode.addChild(new ReportListNode({"None"}))
    } else {
      var added = MessageReporter.ModificationReporter.AddedModifierMinMaxLookups?.map(\modifierPatternCode -> modifierPatternCode + ADDED_ENTRY_TAG)
      var removed = MessageReporter.ModificationReporter.RemovedModifierMinMaxLookups?.map(\modifierPatternCode -> modifierPatternCode + DELETED_ENTRY_TAG)
      modifierMinMaxNode = new ReportListNode("modifierminmax.xml", LoadHelper.createUnion({added, removed}))
    }
    return modifierMinMaxNode
  }

  private function buildPolicyLinePatternNode(category : LoadResultCategory): ReportListNode {
    var lineCode = SBTUpdate.MetaData.Line.Code
    if (IsStateUpdateReport) {
      var contents : List<String> = {}
      if (category.PolicyLinePatternFile != null) {
        contents.add("${lineCode}.xml")
      }
      if (category.PolicyLinePatternLookupFile != null) {
        contents.add("${lineCode}-lookups.xml (" + NewSBTUpdateMetaData.Jurisdiction + ")")
      }
      if(contents.Empty){
        contents.add("None")
      }
      var policyLinePatternNode = new ReportListNode("Policy Line Pattern (Modifiers, Rate Factors, other)", contents)
      return policyLinePatternNode
    } else {
      var modifierPatterns = category.ModifierPatterns
      var listOfRateFactorTypes : List<String> = {}
      var rateFactorNode = new ReportListNode("Rate Factors (${lineCode}.xml)", listOfRateFactorTypes)
      if (modifierPatterns == null or modifierPatterns.Empty) {
        listOfRateFactorTypes.add("None")
      } else {
        modifierPatterns.each(\pattern ->
            listOfRateFactorTypes.addAll(pattern.RateFactorPatternList.map(\rateFactor -> rateFactor.RateFactorType)))
      }
      return rateFactorNode
    }
  }

  private function buildLobFieldMetaNode(category : LoadResultCategory): ReportNode {
    var lobFieldMetaNode = new ReportNode("lob-field-meta.xml")
    if (MessageReporter != null) {
      addReportChildNodesForContainerConfig(lobFieldMetaNode, LOB_FIELD_META, "Entity", "Column")
    } else {
      if (category.Risks.Empty) {
        lobFieldMetaNode.addChild(new ReportListNode({"None"}))
      } else {
        lobFieldMetaNode.addChildren(getRiskDetails(category))
      }
    }
    return lobFieldMetaNode
  }

  private function buildValueDependencyConfigNode(valueDepConfig: ValueDependencyConfig): ReportNode {
    var valueDepConfigsNode = new ReportNode("value-dependency-config.xml")
    var valueDeps = valueDepConfig.ValueDependencies

    if (MessageReporter != null) {
      addReportChildNodesForContainerConfig(valueDepConfigsNode, VALUE_DEPENDENCY_CONFIG, "Container", "System Table")
    } else {
      // this is equlivalent to checking valueDeps is null or Empty
      if (not valueDeps.HasElements) {
        valueDepConfigsNode.addChild(new ReportListNode({"None"}))
      }
      else {
        var valueDepsByContainer = valueDeps.partition(\valueDep -> valueDep.Container)

        valueDepsByContainer.eachKeyAndValue(\containerName, valueDepsSameContainer ->
            valueDepConfigsNode.addChild(new ReportListNode("(Container) " + containerName, valueDepsSameContainer*.Property.toList().map(\p -> "(System Table) " + p))))
      }
    }
    return valueDepConfigsNode
  }

  private function buildScheduleConfigNode(category : LoadResultCategory): ReportNode {
    var scheduleConfigNode = new ReportNode("schedule-config.xml")

    if (category.Clauses == null) {
      scheduleConfigNode.addChild(new ReportListNode({"None"}))
    } else {
      if (MessageReporter != null) {
        addReportChildNodesForContainerConfig(scheduleConfigNode, SCHEDULE_CONFIG, "Clause", "PropertyInfo")
      } else{
        var scheduleConfigurations = category.Clauses
            .where(\clause -> clause.IsSchedule and clause.Intent == Intent.STATE_ADD)
            .map(\clause -> clause.PublicId)
        scheduleConfigurations.addAll(category.Schedules.map(\schedule -> schedule.ClausePattern))

        scheduleConfigNode = new ReportListNode("schedule-config.xml was updated with the following Clause Pattern entries", scheduleConfigurations)
      }
    }
    return scheduleConfigNode
  }

  private function buildContainerPropertyConfigNode(type : ContainerPropertyConfigType, containerPropertyConfig : ContainerPropertyConfig,
                                                    containerPrefix : String, propertyPrefix : String) : ReportNode {
    var configNode = new ReportNode(type.ConfigFile)
    // for all build[CONFIG_TYPE]ConfigNode functions, if the MessageReporter is being passed in, its content will be used for reporting
    // different flows (StateAdd, StateUpdate) can therefore control what is in the report
    // currently the StateAdd flow does not use the MessageReporter, so it will fall back to the original implmentation reporting the full contents of the Config object
    if (MessageReporter != null) {
      var messageSourceType = MessageReporter.getReportSourceType(type)
      addReportChildNodesForContainerConfig(configNode, messageSourceType, containerPrefix, propertyPrefix)
    } else {
      if (containerPropertyConfig == null) {
        configNode.addChild(new ReportListNode({"None"}))
      } else {
        addReportChildNodesForContainerConfig(configNode, containerPropertyConfig, containerPrefix, propertyPrefix)
      }
    }
    return configNode
  }

  private function addReportChildNodesForContainerConfig(node: ReportNode, config: ContainerPropertyConfig,
                                                         containerPrefix : String, propertyPrefix : String) {
    config.ContainerKeys.each(\containerKey -> {
      var propertyNames = config.getPropertiesForContainer(containerKey, false)

      node.addChild(new ReportListNode(
          "(" + containerPrefix + ") " + containerKey.Name,
          propertyNames.Empty ? { "All" } : propertyNames.map(\e -> "(" + propertyPrefix + ") " + e)))
    })
  }

  private function addReportChildNodesForContainerConfig(node: ReportNode, sourceType : MessageReporter.ReportMessageSourceType,
                                                         containerPrefix : String, propertyPrefix : String) {
    if (MessageReporter == null) {
      return
    }
    var containerReportEntries : List<ConfigurationFileReportContent> = {}

    // there is an implicit assumption that a container block
    if (MessageReporter.ModificationReporter.AddedConfigurations.containsKey(sourceType)) {
      MessageReporter.ModificationReporter.AddedConfigurations.get(sourceType).each(\container -> {
        // if the whole container is newly added (containing a null, which seems to be the current implementation), label it as (New), otherwise label individual items
        // callers of this logic have the opportunity to pass in { container, { list_of_properties } } or { container, { null }} (aa
        if (container.ContainerProperties.where(\prop -> prop == null).HasElements) {
          containerReportEntries.add(new ConfigurationFileReportContent(container.ContainerName + ADDED_ENTRY_TAG, container.ContainerProperties.toSet().toList()))
        } else {
          var containerPropertiesWithChangeTag = container.ContainerProperties.toSet().where(\prop -> prop != null).map(\prop -> prop + ADDED_ENTRY_TAG)
          containerReportEntries.add(new ConfigurationFileReportContent(container.ContainerName, containerPropertiesWithChangeTag))
        }
      })
    }
    if (MessageReporter.ModificationReporter.ModifiedConfigurations.containsKey(sourceType)) {
      // For modifiations, label individual items
      MessageReporter.ModificationReporter.ModifiedConfigurations.get(sourceType).toSet().each (\ container -> {
        var containerNameWithChangeTag= container.ContainerProperties.where (\ prop -> prop == null).HasElements? container.ContainerName+ MODIFIED_ENTRY_TAG :  container.ContainerName
        var containerPropertiesWithChangeTag= container.ContainerProperties.toSet ().where (\ prop -> prop != null).map (\ prop -> prop + MODIFIED_ENTRY_TAG)
        containerReportEntries.add (new ConfigurationFileReportContent(containerNameWithChangeTag, containerPropertiesWithChangeTag))
      })
    }
    if (MessageReporter.ModificationReporter.RemovedConfigurations.containsKey(sourceType)) {
      MessageReporter.ModificationReporter.RemovedConfigurations.get(sourceType).toSet().each (\ container -> {
        // if the whole container is expired, label it as (Expired), otherwise label individual items
        if (container.ContainerProperties.where(\prop -> prop == null).HasElements) {
          containerReportEntries.add(new ConfigurationFileReportContent(container.ContainerName+ DELETED_ENTRY_TAG, container.ContainerProperties.toSet ().toList ()))
        } else {
          var containerPropertiesWithChangeTag = container.ContainerProperties.toSet ().where(\prop -> prop != null).map(\prop -> prop + DELETED_ENTRY_TAG)
          containerReportEntries.add(new ConfigurationFileReportContent(container.ContainerName, containerPropertiesWithChangeTag))
        }
      })
    }

    containerReportEntries.sortBy(\reportBlock -> reportBlock.ContainerName)

    if (containerReportEntries.Empty) {
      node.addChild(new ReportListNode({"None"}))
    } else {
      containerReportEntries.each(\containerReportEntry -> {
        // if container property contains notthing but "null"'s; that means the changes is on the container level, and we only have to report the container name
        var nonEmptyContainerProperties = containerReportEntry.ContainerProperties.where(\prop -> prop != null).sortBy (\prop -> prop)
        if (nonEmptyContainerProperties.Empty) {
          node.addChild(new ReportNode("(" + containerPrefix + ") " + containerReportEntry.ContainerName))
        } else {
          node.addChild(new ReportListNode("(" + containerPrefix + ") " + containerReportEntry.ContainerName,
              nonEmptyContainerProperties.map(\p -> "(" + propertyPrefix + ") " + p)))
        }
      })
    }
  }

  private function addReportChildNodesForSystemTables(node : ReportNode) {
    var systemTableReportEntries : List<String> = {}
    if (MessageReporter != null) {
      if (MessageReporter.ModificationReporter.AddedSystemTables.HasElements) {
        MessageReporter.ModificationReporter.AddedSystemTables*.Path.each (\sysTables -> sysTables.each (\sysTable -> systemTableReportEntries.add (sysTable+ ADDED_ENTRY_TAG)))
      }
      if (MessageReporter.ModificationReporter.ModifiedSystemTables.HasElements) {
        MessageReporter.ModificationReporter.ModifiedSystemTables*.Path.each (\sysTables -> sysTables.each (\sysTable -> systemTableReportEntries.add (sysTable+ MODIFIED_ENTRY_TAG)))
      }
      if (MessageReporter.ModificationReporter.RemovedSystemTables.HasElements) {
        MessageReporter.ModificationReporter.RemovedSystemTables*.Path.each (\sysTables -> sysTables.each (\sysTable -> systemTableReportEntries.add (sysTable+ DELETED_ENTRY_TAG)))
      }
      if (systemTableReportEntries.HasElements) {
        node.addChild(new ReportListNode(systemTableReportEntries.orderBy(\sysTableReportEntry -> sysTableReportEntry)))
      } else {
        node.addChild(new ReportListNode ({ "None" }))
      }
    } else {
      node.addChild(new ReportListNode ({ "None" }))
    }
  }

  private function buildSystemTableNode(category : LoadResultCategory) : ReportNode {
    var systemTableNode = new ReportNode("System Tables")
    if (IsStateUpdateReport) {
      addReportChildNodesForSystemTables(systemTableNode)
    } else {
      if (category.SystemTables == null) {
        systemTableNode.addChild(new ReportListNode({"None"}))
      } else {
        var systemTables = category.SystemTables.map(\sysTable -> sysTable.FileName)
        systemTableNode = new ReportListNode("System Tables", systemTables)
      }
    }
    return systemTableNode
  }

  private function getRiskDetails(category : LoadResultCategory): List<ReportListNode> {
    return category.Risks.map(\ risk ->
      new ReportListNode("(Entity) " + "${risk.Entity}", getListContent(category.updatedAttributesForRisk(risk))))
  }

  private function getListContent(riskAttributes : List<RiskAttribute>): List<String> {
    return riskAttributes.map(\ attribute -> "(Column) " + attribute.AttributePath*.Code.join(" - "))
  }

  private function reportNode(textContent: String, children: List<ReportNode>): ReportNode {
    var node = new ReportNode(textContent)
    node.addChildren(children)
    return node
  }

  private function entityFileNames(category: LoadResultCategory) : Set<String> {
    var riskEtx = category.ModifiedRiskEntityFiles.where(\ file -> file.Name.endsWith(".state.etx"))*.Name.toList()
    var systemTableEntities = category.SystemTableLoads*.ModifiedFiles.where(\ file ->
        file.Name.endsWith(".eti") or file.Name.endsWith(".state.etx"))*.Name.toList()
    var entityFileNames = category.Entities.keySet().copy()
    var bureauCodesLoadsEntityFiles = category.BureauCodesLoads*.ModifiedFiles.where(\file -> file.Name.endsWith(".eti"))*.Name.toList()
    var entityFileNamesBcStateEtx = category.BureauCodesLoads*.ModifiedFiles.where(\file -> file.Name.endsWith(".state.etx"))*.Name.toSet()

    entityFileNames.addAll(bureauCodesLoadsEntityFiles)
    entityFileNames.addAll(entityFileNamesBcStateEtx)
    entityFileNames.addAll(riskEtx)
    entityFileNames.addAll(systemTableEntities)
    return entityFileNames
  }

  private function findBureauCodes(filename : String) : BureauCodes {
    return LoadResult.SuccessfulLoads.findModifiedBureauCodesWithFilename(filename)
  }

  private function buildXsdFileNode(category : LoadResultCategory) : ReportNode {
    if (MessageReporter != null and category.XsdFiles.HasElements) {
      var addedXsds = MessageReporter.ModificationReporter.AddedXsdFiles?.map(\newXsd -> newXsd + ADDED_ENTRY_TAG)
      var modifiedXsds = MessageReporter.ModificationReporter.ModifiedXsdFiles?.map(\modifiedXsd -> modifiedXsd + MODIFIED_ENTRY_TAG)
      return new ReportListNode("XML Schema Definition (XSD)", LoadHelper.createUnion({addedXsds, modifiedXsds}))
    } else {
      return new ReportListNode("XML Schema Definition (XSD)", {"None"})
    }
  }

  private function buildPluginFileNode(category : LoadResultCategory) : ReportNode {
    if (MessageReporter != null and category.PluginFiles.HasElements) {
      var addedXsds = MessageReporter.ModificationReporter.AddedPluginFiles?.map(\newPlugin -> newPlugin + ADDED_ENTRY_TAG)
      return new ReportListNode("Plugin Registry (.gwp)", addedXsds)
    } else {
      return new ReportListNode("Plugin Registry (.gwp)", {"None"})
    }
  }
}