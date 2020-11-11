package gw.sbt.loader.report

uses gw.api.locale.DisplayKey
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.report.node.ReportListNode
uses gw.sbt.loader.report.node.ReportNode
uses gw.sbt.loader.report.node.ReportNodeHelper
uses gw.sbt.loader.report.node.ReportTableNode
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.reporter.ReportContent
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.CovTermOption
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.pca.view.presenter.rating.RateTablePresenter
uses gw.sbt.util.LoadHelper
uses gw.sbt.util.ProductCodeToAbbreviationMapper

class ConfigurationReport extends Report {
  final static var MODIFIED_AVAILABILITY_SCRIPT = "Modified Availability Script\n"
  final static var MODIFIED_EXISTENCE_SCRIPT = "Modified Existence Script\n"
  final static var MODIFIED_INITIALIZE_SCRIPT = "Modified Initialize Script\n"
  final static var NEW_AVAILABILITY_SCRIPT = "New Availability Script\n"
  final static var NEW_EXISTENCE_SCRIPT = "New Existence Script\n"
  final static var NEW_INITIALIZE_SCRIPT = "New Initialize Script\n"
  final static var REMOVED_AVAILABILITY_SCRIPT = "Removed Availability Script\n"
  final static var REMOVED_EXISTENCE_SCRIPT = "Removed Existence Script\n"
  final static var REMOVED_INITIALIZE_SCRIPT = "Removed Initialize Script\n"
  final static var MODIFIED_ATTRIBUTES = "Modified Attributes:\n"
  final static var ADDED_ATTRIBUTES = "New Attributes:\n"
  final static var REMOVED_ATTRIBUTES = "Removed Attributes:\n"
  final static var MODIFIED_COVTERM_DEFAULTS = "Modified or un-mergable CovTermDefault(s)\n"
  final static var MODIFIED_COVTERM_LIMITS = "Modified or un-mergable CovTermLimit(s)\n"
  final static var ADDED_COVTERM_DEFAULTS = "Added CovTermDefault(s)\n"
  final static var ADDED_COVTERM_LIMITS = "Added CovTermLimit(s)\n"
  final static var REMOVED_COVTERM_DEFAULTS = "Removed CovTermDefault(s)\n"
  final static var REMOVED_COVTERM_LIMITS = "Removed CovTermLimit(s)\n"

  construct(sbtUpdate : SBTUpdate, loadResult : LoadResult, messageReporter : MessageReporter, latestAdoptedMetadata : SBTUpdateMetaData = null) {
    super(loadResult, sbtUpdate, latestAdoptedMetadata, messageReporter)
    buildConfigurationReport()
  }

  private function buildConfigurationReport() {
    RootNode = new ReportListNode("Configuration Report", RootAttributes)
    RootNode.addChildren(ReportBody)
    ReportNodeHelper.removeEmptyNodes(RootNode)
  }

  override property get RootAttributes() : List<String> {
    var rootReportAttributes = super.RootAttributes
    var manualInstructions = SBTUpdate.DecisionAndInstructions.ManualConfigInstructions?:""
    if (manualInstructions.HasContent) {
      rootReportAttributes.add("Manual Configuration Instructions: ${manualInstructions}")
    }
    rootReportAttributes.add(ReferenceToConflictFilesZip)
    return rootReportAttributes
  }

  private property get ReferenceToConflictFilesZip() : String {
    var file = ConfigurationFile.conflictFilesZipFile(
        SBTUpdate.MetaData.Jurisdiction,
        SBTUpdate.MetaData.Line.Code,
        SBTUpdate.ProcessedDate)
    return DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Download.FilesWithConflicts") + ": " + file.Path
  }

  private property get ReportBody() : List<ReportNode> {
    var bodyNodes : List<ReportNode> = {
        ClauseNode,
        FormsNode,
        RatingNode,
        BureauCodesNode,
        RiskAttributesNode,
        BackgroundArtifactsNode
    }

    if (MessageReporter.ConflictReporter.HasWarningsForIndependentState) {
      bodyNodes.add(InDependentStateNode)
    }

    if (MessageReporter.ConflictReporter.HasAddedForSbtCommonContents
        || MessageReporter.ConflictReporter.HasRemovedForSbtCommonContents
        || MessageReporter.ConflictReporter.HasConflictForSbtCommonContents) {
      bodyNodes.add(SbtCommonNode)
    }
    return bodyNodes
  }

  private property get ClauseNode() : ReportNode {
    var tableEntries : List<List<String>> = {}
    tableEntries.add({"Coverage, Condition or Exclusion", "Configuration Instructions"})

    var clausesCategoryInstructions = SBTUpdate.DecisionAndInstructionsForClauses.ManualConfigInstructions
    if (clausesCategoryInstructions.HasContent)
      tableEntries.add({"All Coverages, Conditions or Exclusions", clausesCategoryInstructions?:""})

    SBTUpdate.Clauses.where(\clause -> clause.DecisionAndInstructions.ManualConfigInstructions.HasContent)
        .orderBy(\clause -> clause.Description)
        .each(\clause -> tableEntries.add({clause.Description + " (" + clause.ParentRisk.Name + ")", clause.DecisionAndInstructions.ManualConfigInstructions?:""}))

    var messageEntries = LoadResult.getAllMessagesForArtifact<Clause>()

    var clauseNode = new ReportNode("Coverages, Conditions & Exclusions")
    clauseNode.addChild(new ReportTableNode("Artifacts containing configuration instructions", tableEntries))

    var conflictsNode = ClausePatternConflictsModificationsNode
    if (not ReportNodeHelper.isEmpty(conflictsNode)) {
      clauseNode.addChild(conflictsNode)
      messageEntries.add(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Existence.Attribute.Conflict"))
      messageEntries.add(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.ConflictsRemoved"))
      messageEntries.add(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Clause.Added"))
    }
    clauseNode.addChild(new ReportListNode(messageEntries))
    return clauseNode
  }

  private property get ClausePatternConflictsModificationsNode() : ReportNode {
    var tableContents : List<List<String>> = {}
    tableContents.add({"Coverage, Condition or Exclusion", "Conflicts Detected", "Added", "Removed", "File Name"})

    var conflicts = MessageReporter.ConflictReporter.ConflictsProductModel.where(\conflict -> conflict.IsProductModel)
    var addedModifications = MessageReporter.ModificationReporter.AddedArtifactsProductModel.where(\conflict -> conflict.IsProductModel)
    var removedModifications = MessageReporter.ModificationReporter.RemovedArtifactsProductModel.where(\conflict -> conflict.IsProductModel)

    var clausePids = conflicts*.InitialID.union(addedModifications*.InitialID).union(removedModifications*.InitialID.toSet())
    var clausesToReport : List<Clause> = {}
    clausePids.each(\pid -> {
      var matchedClause = SBTUpdate.Clauses.firstWhere(\clause -> clause.PublicId == pid)
      if (matchedClause != null) {
        clausesToReport.add(matchedClause)
      }
    })

    clausesToReport.orderBy(\clause -> clause.Description)
        .each(\clause -> addClauseConflictsModifications(clause, conflicts, addedModifications, removedModifications, tableContents))

    return new ReportTableNode("Artifacts containing conflicts or modifications that could impact existing configuration", tableContents)
  }

  private function addClauseConflictsModifications(clause : Clause, conflicts : List<ReportContent>, adds : List<ReportContent>,
                                                   removes : List<ReportContent>, tableContents : List<List<String>>) {
    var conflictsDetectedBuilder = new StringBuilder()
    var addedClauses = new StringBuilder()
    var removedClauses = new StringBuilder()

    // Clause level changes - Conflicts detected
    if (conflicts.firstWhere(\conflict -> conflict.SourceType == SCRIPT and conflict.Path == {clause.PublicId, "AvailabilityScript"}) != null) {
      conflictsDetectedBuilder.append(MODIFIED_AVAILABILITY_SCRIPT)
    }
    if (conflicts.firstWhere(\conflict -> conflict.SourceType == SCRIPT and conflict.Path == {clause.PublicId, "ExistenceScript"}) != null) {
      conflictsDetectedBuilder.append(MODIFIED_EXISTENCE_SCRIPT)
    }
    if (conflicts.firstWhere(\conflict -> conflict.SourceType == SCRIPT and conflict.Path == {clause.PublicId, "InitializeScript"}) != null) {
      conflictsDetectedBuilder.append(MODIFIED_INITIALIZE_SCRIPT)
    }
    var attributeChanges = conflicts.where(\conflict ->
        conflict.SourceType == ATTRIBUTE and
            conflict.InitialID == clause.PublicId and
            conflict.IsPMClauseLevel)
    if (attributeChanges.HasElements) {
      conflictsDetectedBuilder.append(MODIFIED_ATTRIBUTES)
    }
    attributeChanges.each(\attributeConflict -> conflictsDetectedBuilder.append(attributeConflict.Path.last() + "\n"))

    // Clause level changes - Added/Removed
    if (adds.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, "AvailabilityScript"}) != null) {
      addedClauses.append(NEW_AVAILABILITY_SCRIPT)
    } else if (removes.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, "AvailabilityScript"}) != null) {
      removedClauses.append(REMOVED_AVAILABILITY_SCRIPT)
    }

    if (adds.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, "ExistenceScript"}) != null) {
      addedClauses.append(NEW_EXISTENCE_SCRIPT)
    } else if (removes.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, "ExistenceScript"}) != null) {
      removedClauses.append(REMOVED_EXISTENCE_SCRIPT)
    }

    if (adds.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, "InitializeScript"}) != null) {
      addedClauses.append(NEW_INITIALIZE_SCRIPT)
    } else if (removes.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, "InitializeScript"}) != null) {
      removedClauses.append(REMOVED_INITIALIZE_SCRIPT)
    }

    // Clause attribute adds
    attributeChanges = adds.where(\add ->
        add.SourceType == ATTRIBUTE and
            add.InitialID == clause.PublicId and
            add.IsPMClauseLevel)
    if (attributeChanges.HasElements) {
      addedClauses.append(ADDED_ATTRIBUTES)
    }
    attributeChanges.each(\addedAttribute -> addedClauses.append(addedAttribute.Path.last() + "\n"))

    // Clause attribute removes
    attributeChanges = removes.where(\add ->
        add.SourceType == ATTRIBUTE and
            add.Path.first() == clause.PublicId and
            add.IsPMClauseLevel)
    if (attributeChanges.HasElements) {
      removedClauses.append(REMOVED_ATTRIBUTES)
    }
    attributeChanges.each(\removedAttribute -> removedClauses.append(removedAttribute.Path.last() + "\n"))

    // Add clause row to the table
    tableContents.add({clause.Description + " (" + clause.ParentRisk.Name + ")",
        conflictsDetectedBuilder.toString(), addedClauses.toString(), removedClauses.toString(), clause.FileName})

    // Process cov terms of the clause
    var covTermPids = conflicts.where(\conflict -> conflict.IsPMCovTermLevel and conflict.InitialID == clause.PublicId)*.CovTermID
        .union(adds.where(\conflict -> conflict.IsPMCovTermLevel and conflict.InitialID == clause.PublicId)*.CovTermID)
        .union(removes.where(\conflict -> conflict.IsPMCovTermLevel and conflict.InitialID == clause.PublicId)*.CovTermID.toSet())
    var covTermsToReport : List<CovTerm> = {}
    covTermPids.each(\pid -> {
      var matchedCovTerm = clause.CovTerms.firstWhere(\covTerm -> covTerm.PublicId == pid)
      if (matchedCovTerm != null) {
        covTermsToReport.add(matchedCovTerm)
      }
    })
    covTermsToReport.orderBy(\covTerm -> covTerm.Description)
        .each(\covTerm -> addCovTermConflictsModifications(clause, covTerm, conflicts, adds, removes, tableContents))
  }

  private function addCovTermConflictsModifications(clause : Clause, covTerm : CovTerm, conflicts : List<ReportContent>,
                                                    adds : List<ReportContent>, removes : List<ReportContent>,
                                                    tableContents : List<List<String>>) {
    var conflictsDetectedBuilder = new StringBuilder()
    var addedClauses = new StringBuilder()
    var removedClauses = new StringBuilder()

    // CovTerm level changes - conflicts detected
    if (conflicts.firstWhere(\conflict ->
        conflict.SourceType == SCRIPT and conflict.Path == {clause.PublicId, covTerm.PublicId, "AvailabilityScript"}) != null) {
      conflictsDetectedBuilder.append(MODIFIED_AVAILABILITY_SCRIPT)
    }
    if (conflicts.firstWhere(\conflict ->
        conflict.SourceType == SCRIPT and conflict.Path == {clause.PublicId, covTerm.PublicId, "ExistenceScript"}) != null) {
      conflictsDetectedBuilder.append(MODIFIED_EXISTENCE_SCRIPT)
    }
    if (conflicts.firstWhere(\conflict ->
        conflict.SourceType == SCRIPT and conflict.Path == {clause.PublicId, covTerm.PublicId, "InitializeScript"}) != null) {
      conflictsDetectedBuilder.append(MODIFIED_INITIALIZE_SCRIPT)
    }
    var attributeChanges = conflicts.where(\conflict ->
        conflict.SourceType == ATTRIBUTE and
            conflict.InitialID == clause.PublicId and conflict.CovTermID == covTerm.PublicId and
            conflict.IsPMCovTermLevel)
    if (attributeChanges.HasElements) {
      conflictsDetectedBuilder.append(MODIFIED_ATTRIBUTES)
    }
    attributeChanges.each(\attributeConflict -> conflictsDetectedBuilder.append(attributeConflict.Path.last() + "\n"))

    // CovTerm modified limits/defaults
    if (conflicts.hasMatch(\conflict ->
        conflict.SourceType == COVTERM_LIMITS and
            conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId)) {
      conflictsDetectedBuilder.append(MODIFIED_COVTERM_LIMITS)
    }
    if (conflicts.hasMatch(\conflict ->
        conflict.SourceType == COVTERM_DEFAULT and
            conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId)) {
      conflictsDetectedBuilder.append(MODIFIED_COVTERM_DEFAULTS)
    }

    // CovTerm level changes - Added/Removed
    if (adds.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, covTerm.PublicId, "AvailabilityScript"}) != null) {
      addedClauses.append(NEW_AVAILABILITY_SCRIPT)
    } else if (removes.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, covTerm.PublicId, "AvailabilityScript"}) != null) {
      removedClauses.append(REMOVED_AVAILABILITY_SCRIPT)
    }
    if (adds.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, covTerm.PublicId, "ExistenceScript"}) != null) {
      addedClauses.append(NEW_EXISTENCE_SCRIPT)
    } else if (removes.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, covTerm.PublicId, "ExistenceScript"}) != null) {
      removedClauses.append(REMOVED_EXISTENCE_SCRIPT)
    }
    if (adds.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, covTerm.PublicId, "InitializeScript"}) != null) {
      addedClauses.append(NEW_INITIALIZE_SCRIPT)
    } else if (removes.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, covTerm.PublicId, "InitializeScript"}) != null) {
      removedClauses.append(REMOVED_INITIALIZE_SCRIPT)
    }

    // CovTerm attribute adds
    attributeChanges = adds.where(\add ->
        add.SourceType == ATTRIBUTE and
            add.InitialID == clause.PublicId and
            add.CovTermID == covTerm.PublicId and
            add.IsPMCovTermLevel)
    if (attributeChanges.HasElements) {
      addedClauses.append(ADDED_ATTRIBUTES)
    }
    attributeChanges.each(\addedAttribute -> addedClauses.append(addedAttribute.Path.last() + "\n"))

    // CovTerm attribute removes
    attributeChanges = removes.where(\add ->
        add.SourceType == ATTRIBUTE and
            add.InitialID == clause.PublicId and
            add.CovTermID == covTerm.PublicId and
            add.IsPMCovTermLevel)
    if (attributeChanges.HasElements) {
      removedClauses.append(REMOVED_ATTRIBUTES)
    }
    attributeChanges.each(\removedAttribute -> removedClauses.append(removedAttribute.Path.last() + "\n"))

    // CovTerm added limits/defaults
    if (adds.hasMatch(\conflict ->
        conflict.SourceType == COVTERM_LIMITS and
            conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId)) {
      addedClauses.append(ADDED_COVTERM_LIMITS)
    }
    if (adds.hasMatch(\conflict ->
        conflict.SourceType == COVTERM_DEFAULT and
            conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId)) {
      addedClauses.append(ADDED_COVTERM_DEFAULTS)
    }

    // CovTerm removed limits/defaults
    if (removes.hasMatch(\conflict ->
        conflict.SourceType == COVTERM_LIMITS and
            conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId)) {
      removedClauses.append(REMOVED_COVTERM_LIMITS)
    }
    if (removes.hasMatch(\conflict ->
        conflict.SourceType == COVTERM_DEFAULT and
            conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId)) {
      removedClauses.append(REMOVED_COVTERM_DEFAULTS)
    }

    // Add covTerm row to the report table
    tableContents.add({getIndent(1) + covTerm.Description, conflictsDetectedBuilder.toString(), addedClauses.toString(), removedClauses.toString(), clause.FileName})

    // Process options of the term
    var optionCodes = conflicts.where(\conflict -> conflict.IsPMCovTermOptionLevel and
        conflict.InitialID == clause.PublicId and
        conflict.CovTermID == covTerm.PublicId)*.CovTermOptionCode
        .union(adds.where(\conflict -> conflict.IsPMCovTermOptionLevel and
            conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId)*.CovTermOptionCode)
        .union(removes.where(\conflict -> conflict.IsPMCovTermOptionLevel and
            conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId)*.CovTermOptionCode.toSet())
    var optionsToReport : List<CovTermOption> = {}
    optionCodes.each(\optionCode -> {
      var matchedOption = covTerm.CovTermOptions.firstWhere(\option -> option.OptionCode == optionCode)
      if (matchedOption != null) {
        optionsToReport.add(matchedOption)
      }
    })
    optionsToReport.orderBy(\option -> option.Priority)
        .each(\option -> addCovTermOptionConflictsModifications(clause, covTerm, option, conflicts, adds, removes, tableContents))
  }

  private function addCovTermOptionConflictsModifications(clause : Clause, covTerm : CovTerm, option : CovTermOption,
                                                          conflicts : List<ReportContent>,
                                                          adds : List<ReportContent>, removes : List<ReportContent>,
                                                          tableContents : List<List<String>>) {
    var conflictsDetectedBuilder = new StringBuilder()
    var addedClauses = new StringBuilder()
    var removedClauses = new StringBuilder()

    // Option level changes - conflicts detected
    if (conflicts.firstWhere(\conflict ->
        conflict.SourceType == SCRIPT and conflict.Path == {clause.PublicId, covTerm.PublicId, option.OptionCode, "AvailabilityScript"}) != null) {
      conflictsDetectedBuilder.append(MODIFIED_AVAILABILITY_SCRIPT)
    }

    // option attribute conflicts
    var attributeChanges = conflicts.where(\conflict ->
        conflict.SourceType == ATTRIBUTE and conflict.InitialID == clause.PublicId and
            conflict.CovTermID == covTerm.PublicId and conflict.CovTermOptionCode == option.OptionCode and
            conflict.IsPMCovTermOptionLevel)

    if (attributeChanges.HasElements) {
      conflictsDetectedBuilder.append(MODIFIED_ATTRIBUTES)
    }
    attributeChanges.each(\attributeConflict -> conflictsDetectedBuilder.append(attributeConflict.Path.last() + "\n"))

    // option level changes - Added/Removed
    if (adds.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, covTerm.PublicId, option.OptionCode, "AvailabilityScript"}) != null) {
      addedClauses.append(NEW_AVAILABILITY_SCRIPT)
    } else if (removes.firstWhere(\add -> add.SourceType == SCRIPT and add.Path == {clause.PublicId, covTerm.PublicId, option.OptionCode, "AvailabilityScript"}) != null) {
      removedClauses.append(REMOVED_AVAILABILITY_SCRIPT)
    }

    // option attribute adds
    attributeChanges = adds.where(\add ->
        add.SourceType == ATTRIBUTE and
            add.InitialID == clause.PublicId and
            add.CovTermID == covTerm.PublicId and
            add.CovTermOptionCode == option.OptionCode and
            add.IsPMCovTermOptionLevel)
    if (attributeChanges.HasElements) {
      addedClauses.append(ADDED_ATTRIBUTES)
    }
    attributeChanges.each(\addedAttribute -> addedClauses.append(addedAttribute.Path.last() + "\n"))

    // option attribute removes
    attributeChanges = removes.where(\add ->
        add.SourceType == ATTRIBUTE and
            add.InitialID == clause.PublicId and
            add.CovTermID == covTerm.PublicId and
            add.CovTermOptionCode == option.OptionCode and
            add.IsPMCovTermOptionLevel)
    if (attributeChanges.HasElements) {
      removedClauses.append(REMOVED_ATTRIBUTES)
    }
    attributeChanges.each(\removedAttribute -> removedClauses.append(removedAttribute.Path.last() + "\n"))

    // Add covTerm row to the report table
    tableContents.add({getIndent(2) + option.Description, conflictsDetectedBuilder.toString(), addedClauses.toString(), removedClauses.toString(), clause.FileName})
  }

  private property get FormsNode() : ReportNode {
    var messageEntries = LoadResult.getAllMessagesForArtifact<PolicyForm>().toSet().toList()
    if (SBTUpdate.Forms.HasElements) {
      var lineCode = SBTUpdate.MetaData.Line.Code
      var productAbbrev = ProductCodeToAbbreviationMapper.getProductAbbreviation(lineCode)
      var jurisdiction = SBTUpdate.MetaData.Jurisdiction
      var generatedDirectoryName = ConfigurationFile.getGeneratedDirectoryName(lineCode, jurisdiction, SBTUpdate.ProcessedDate)
      if (this.LoadResult.SuccessfulLoads.hasFormPatternFileAddition) { // Form Pattern File was created
        messageEntries.add("File is named ${productAbbrev}FormPatterns.xml and is located in the content directory " +
            "(...modules\\configuration\\config\\content\\" + generatedDirectoryName + "). " +
            "Server must be restarted prior to loading Forms.")
      }
    }

    var tableEntries : List<List<String>> = {}
    tableEntries.add({"Form", "Configuration Instructions"})
    var formsCategoryInstructions = SBTUpdate.DecisionAndInstructionsForForms.ManualConfigInstructions
    if (formsCategoryInstructions != null) {
      tableEntries.add({"All " + DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.FormsTitle"), formsCategoryInstructions})
    }
    SBTUpdate.Forms.orderBy(\form -> form.Number).each(\form -> {
      var formInstructions = form.DecisionAndInstructions.ManualConfigInstructions
      if (formInstructions != null) {
        tableEntries.add({getReportFormPrefix(form) + " " + form.Description, formInstructions})
      }
    })

    var formConflictsNode = new ReportListNode(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.FormsConflictMessage"),
        MessageReporter.ConflictReporter.ConflictsForm?:{})

    var formNode = new ReportNode("Forms")
    formNode.addChild(new ReportListNode(messageEntries))
    formNode.addChild(new ReportTableNode(tableEntries))
    formNode.addChild(formConflictsNode)
    return formNode
  }

  private property get RatingNode() : ReportNode {
    var tableEntries : List<List<String>> = {}
    tableEntries.add({"Rating", "Configuration Instructions"})

    var rateBook = SBTUpdate.RateBook
    if (rateBook == null) {
      return new ReportTableNode("Rating", tableEntries)
    }
    var rateTableEntries = getRateTableEntries(rateBook)
    var algorithmEntries = getRatingAlgorithmEntries(rateBook)

    var rateBookInstructions = SBTUpdate.RateBook.DecisionAndInstructions.ManualConfigInstructions
    if (algorithmEntries.HasElements or rateTableEntries.HasElements or rateBookInstructions.HasContent) {
      tableEntries.add({DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingTitle", rateBook.Description, rateBook.Edition),
          rateBookInstructions?:""})
    }
    tableEntries.addAll(rateTableEntries)
    tableEntries.addAll(algorithmEntries)

    var messageEntries = LoadResult.getAllMessagesForArtifact<RateBookContent>()
    var ratingNode = new ReportNode("Rating")
    ratingNode.addChild(new ReportTableNode(tableEntries))
    ratingNode.addChild(new ReportListNode(messageEntries))
    return ratingNode
  }

  private function getRateTableEntries(rateBook : RateBookContent) : List<List<String>> {
    var rateTableEntries : List<List<String>> = {}

    if (rateBook.RateTables != null) {
      rateBook.RateTables.where(\rateTable -> rateTable.DecisionAndInstructions.ManualConfigInstructions.HasContent)
          .orderBy(\rateTable -> new RateTablePresenter(rateTable).Description)
          .each(\rateTable ->
              rateTableEntries.add({getIndent(2) + new RateTablePresenter(rateTable).Description, rateTable.DecisionAndInstructions.ManualConfigInstructions}))
    }

    var rateTablesCategoryInstructions = SBTUpdate.RateBook.DecisionAndInstructionsForRateTables.ManualConfigInstructions
    if (rateTablesCategoryInstructions.HasContent or rateTableEntries.HasElements) {
      rateTableEntries.add(0, {getIndent(1) + DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTablesTitle"), rateTablesCategoryInstructions?:""})
    }
    return rateTableEntries
  }

  private function getRatingAlgorithmEntries(rateBook : RateBookContent) : List<List<String>> {
    var algorithmEntries : List<List<String>> = {}
    if (rateBook.Algorithms != null) {
      rateBook.Algorithms.where(\algorithm -> algorithm.DecisionAndInstructions.ManualConfigInstructions.HasContent)
          .orderBy(\algorithm -> algorithm.Name)
          .each(\algorithm ->
              algorithmEntries.add({getIndent(2) + algorithm.Name, algorithm.DecisionAndInstructions.ManualConfigInstructions}))
    }

    var algorithmsCategoryInstructions = SBTUpdate.RateBook.DecisionAndInstructionsForAlgorithms.ManualConfigInstructions
    if (algorithmsCategoryInstructions.HasContent or algorithmEntries.HasElements) {
      algorithmEntries.add(0, {getIndent(1) + DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingAlgorithmsTitle"), algorithmsCategoryInstructions?:""})
    }
    return algorithmEntries
  }

  private property get BureauCodesNode() : ReportNode {
    var bureauCodesNode = new ReportNode("Bureau Codes")
    var tableEntries = BureauCodesManualInstructionsRows
    var bureauCodesTableNode = new ReportTableNode("Bureau Codes with Configuration Instructions", tableEntries)
    bureauCodesNode.addChild(bureauCodesTableNode)

    if (MessageReporter.ConflictReporter.ConflictsBureauCode.HasElements) {
      // use a toSet () to get unique file paths
      var bureauCodeConflictMessages : List<String> = MessageReporter.ConflictReporter.ConflictsBureauCode.toSet().orderBy(\conflict -> conflict)
      var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.BureauCodeConflictMessage"), bureauCodeConflictMessages)
      bureauCodesNode.addChild(conflictsNode)
    }
    return bureauCodesNode
  }

  private property get BureauCodesManualInstructionsRows() : List<List<String>> {
    var tableEntries : List<List<String>> = {}
    tableEntries.add({"Bureau Codes", "Configuration Instructions"})
    if (not IsStateUpdateReport) {
      SBTUpdate.BureauCodes
          .where(\bureauCodes -> bureauCodes.DecisionAndInstructions.ManualConfigInstructions.HasContent)
          .each(\bureauCodes ->
              tableEntries.add({bureauCodes.Label, bureauCodes.DecisionAndInstructions.ManualConfigInstructions}))
    } else {
      SBTUpdate.comparisonsOfType(gw.sbt.model.bureau.BureauCodes)
          .map(\bureauCodesComparison -> bureauCodesComparison.CanonicalVersion)
          .where(\bureauCodes -> SBTUpdate.comparisonFor(bureauCodes).DecisionAndInstructions.ManualConfigInstructions != null)
          .each(\bureauCodes -> {
            tableEntries.add({bureauCodes.Label, SBTUpdate.comparisonFor(bureauCodes).DecisionAndInstructions.ManualConfigInstructions})
          })
    }
    return tableEntries
  }

  private property get RiskAttributesNode() : ReportNode {
    var tableEntries : List<List<String>> = {}
    tableEntries.add({"Risk Attribute", "Configuration Instructions"})
    var indentLevel = 0
    var riskAttributesCategoryInstructions = SBTUpdate.DecisionAndInstructionsForRiskAttributes.ManualConfigInstructions
    if (riskAttributesCategoryInstructions != null) {
      tableEntries.add({"All Risk Attributes", riskAttributesCategoryInstructions?:""})
      indentLevel = 1
    }

    SBTUpdate.Risks.orderBy(\risk -> risk.Name).each(\risk -> {
      var riskIndentLevel = indentLevel
      if (risk.DecisionAndInstructions.ManualConfigInstructions.HasContent) {
        tableEntries.add({getIndent(riskIndentLevel) + "${risk.Name}", risk.DecisionAndInstructions.ManualConfigInstructions})
        riskIndentLevel++
      }

      risk.RiskAttributes.orderBy(\firstAttribute -> firstAttribute.Description).each(\attribute -> {
        var attributePath = new StringBuilder()
        var attributeIndentLevel = riskIndentLevel
        while (attribute != null) {
          attributePath.append(" - " + attribute.Description)
          if (attribute.DecisionAndInstructions.ManualConfigInstructions.HasContent) {
            tableEntries.add({getIndent(attributeIndentLevel) + "${risk.Name}${attributePath}", attribute.DecisionAndInstructions.ManualConfigInstructions})
          }
          attribute = attribute.Child
          attributeIndentLevel++
        }
      })
    })
    var riskAttributesNode = new ReportNode("Risk Attributes")
    riskAttributesNode.addChild(new ReportTableNode(tableEntries))
    return riskAttributesNode
  }

  private property get BackgroundArtifactsNode() : ReportNode {
    var backgroundSection = new ReportNode("Background Artifacts")
    backgroundSection.addChild(SystemTablesNode)
    backgroundSection.addChild(PcfFilesNode)
    backgroundSection.addChild(GosuFilesNode)
    backgroundSection.addChild(EntityNode)
    backgroundSection.addChild(TypelistNode)
    if (MessageReporter.ConflictReporter.ConflictsProductPattern.HasContent) {
      backgroundSection.addChild(ProductPatternNode)
    }
    backgroundSection.addChild(DisplayPropertiesNode)
    backgroundSection.addChild(ProductModelDisplayPropertiesNode)
    if (MessageReporter.ConflictReporter.HasMissingCurrentPolicyLinePattern or
        MessageReporter.ConflictReporter.ConflictsPolicyLinePattern.HasContent) {
      backgroundSection.addChild(PolicyLinePatternNode)
    }
    if (MessageReporter.ConflictReporter.ConflictsScheduleConfig.HasElements) {
      backgroundSection.addChild(ScheduleConfigNode)
    }
    if (MessageReporter.ConflictReporter.ConflictsModifierMinMaxLookup.HasElements) {
      backgroundSection.addChild(ModifierMinMaxNode)
    }
    if (MessageReporter.ConflictReporter.ConflictsLookupTables.HasElements) {
      backgroundSection.addChild(LookupTablesFileNode)
    }
    if (MessageReporter.ConflictReporter.ConflictsXSD.HasElements) {
      backgroundSection.addChild(XsdFileNode)
    }
    if (MessageReporter.ConflictReporter.ConflictsPlugin.HasElements) {
      backgroundSection.addChild(PluginFileNode)
    }
    if (MessageReporter.ConflictReporter.ConflictsDiffTree.HasElements) {
      backgroundSection.addChild(DiffTreeFileNode)
    }

    return backgroundSection
  }

  private property get EntityNode() : ReportNode {
    var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.EntityMergeConflictMessage"), MessageReporter.ConflictReporter.ConflictsEntity)
    var reportNode = new ReportNode("Entities")
    reportNode.addChild(conflictsNode)
    var warningsNode = new ReportListNode(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.EntityMergeWarningsMessage"),
        MessageReporter.ConflictReporter.WarningsEntity.toSet().toList().sort())
    reportNode.addChild(warningsNode)
    return reportNode
  }

  private property get GosuFilesNode() : ReportNode {
    var conflictsNode = new ReportListNode(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.ConflictsDetectedMightRequireManualMerging"),
        MessageReporter.ConflictReporter.ConflictsGosu.sort())
    var deletionsNode = new ReportListNode(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.GosuDeletionsDetectedMessage"),
        MessageReporter.ModificationReporter.RemovedGosuClasses.sort())
    var customizationManualMergeNode = new ReportListNode(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.GosuCustomizationDetectedManualMerging"),
        MessageReporter.ModificationReporter.CustomizationDetectedManualMergeGosu.sort())
    var customizationAutoMergeNode = new ReportListNode(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.GosuCustomizationDetectedAutoMerging"),
        MessageReporter.ModificationReporter.CustomizationDetectedAutoMergeGosu.sort())
    var reportNode = new ReportNode("Gosu Files")
    reportNode.addChild(conflictsNode)
    reportNode.addChild(deletionsNode)
    reportNode.addChild(customizationManualMergeNode)
    reportNode.addChild(customizationAutoMergeNode)

    if (not ReportNodeHelper.isEmpty(deletionsNode)) {
      var notesList = new ArrayList<String>();
      notesList.add(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.GosuDeletionNotes"))
      reportNode.addChild(new ReportListNode(notesList))
    }

    return reportNode
  }

  private property get PcfFilesNode() : ReportNode {
    var conflictsNode = new ReportListNode(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.ConflictsDetectedMightRequireManualMerging"),
        MessageReporter.ConflictReporter.ConflictsPCF.sort())
    var reportNode = new ReportNode("Pcf Files")
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get TypelistNode() : ReportNode {
    var conflictsNode = new ReportListNode(
        DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.ConflictsDetectedMightRequireManualMerging"),
        MessageReporter.ConflictReporter.ConflictsTypeList)
    var reportNode = new ReportNode("Typelists")
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get DisplayPropertiesNode() : ReportNode {
    var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.DisplayPropertiesConflictMessage"), MessageReporter.ConflictReporter.ConflictsDisplayProperty)
    var reportNode = new ReportNode("display.properties")
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get ProductModelDisplayPropertiesNode() : ReportNode {
    var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.DisplayPropertiesConflictMessage"), MessageReporter.ConflictReporter.ConflictsProductModelDisplayProperty)
    var reportNode = new ReportNode("productmodel.display.properties")
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get SystemTablesNode() : ReportNode {
    var reportNode = new ReportNode("System Tables")
    if (MessageReporter.ConflictReporter.ConflictsSystemTable.HasElements) {
      // use a toSet () to get unique file paths
      var systemTableConflictMessages : List<String> = MessageReporter.ConflictReporter.ConflictsSystemTable.toSet().orderBy(\conflict -> conflict)
      var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.SystemTableConflictMessage"), systemTableConflictMessages)
      reportNode.addChild(conflictsNode)
    }

    if (MessageReporter.ModificationReporter.ExpiredSystemTableRows.HasElements) {
      var expirationsNode = new ReportListNode(
          DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.SystemTableRowExpirationsMessage"),
          MessageReporter.ModificationReporter.ExpiredSystemTableRows.sort()
      )

      reportNode.addChild(expirationsNode)
    }

    if (MessageReporter.ModificationReporter.PotentialCustomizationDetectedSysTable.HasElements) {
      var protentialCustomizationNode = new ReportListNode(
          DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.SystemTableRowEPotentialCustomizationDetected"),
          MessageReporter.ModificationReporter.PotentialCustomizationDetectedSysTable.sort()
      )

      reportNode.addChild(protentialCustomizationNode)
    }


    return reportNode
  }

  private property get ProductPatternNode() : ReportNode {
    var tableNode = new ReportNode(MessageReporter.ConflictReporter.ConflictsProductPattern)
    tableNode.addChild(new ReportListNode({DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.PolicyLinePatternConflictMessage")}))
    return tableNode
  }

  private property get PolicyLinePatternNode() : ReportNode {
    if (MessageReporter.ConflictReporter.HasMissingCurrentPolicyLinePattern) {
      var tableNode = new ReportNode(MessageReporter.ConflictReporter.MissingCurrentPolicyLinePattern)
      tableNode.addChild(new ReportListNode({DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.MissingCurrentPolicyLinePatternConflictMessage")}))
      return tableNode
    } else {
      var tableNode = new ReportNode(MessageReporter.ConflictReporter.ConflictsPolicyLinePattern)
      tableNode.addChild(new ReportListNode({DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.PolicyLinePatternConflictMessage")}))
      return tableNode
    }
  }

  private property get ScheduleConfigNode() : ReportNode {
    var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.ConflictsDetectedMightRequireManualMerging"), MessageReporter.ConflictReporter.ConflictsScheduleConfig)
    var reportNode = new ReportNode("schedule-config.xml")
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get ModifierMinMaxNode() : ReportNode {
    var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.ConflictsDetectedMightRequireManualMerging"), MessageReporter.ConflictReporter.ConflictsModifierMinMaxLookup)
    var reportNode = new ReportNode("modifierminmax.xml")
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get LookupTablesFileNode() : ReportNode {
    var reportNode = new ReportNode("lookuptables.xml")
    var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.LookupTablesConflictMessage"), MessageReporter.ConflictReporter.ConflictsLookupTables)
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get XsdFileNode() : ReportNode {
    var reportNode = new ReportNode("XML Schema Definition (XSD)")
    var conflictMessages : List<String> = MessageReporter.ConflictReporter.ConflictsXSD.toSet().orderBy(\conflict -> conflict)
    var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.XsdConflictMessage"), conflictMessages)
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get PluginFileNode() : ReportNode {
    var reportNode = new ReportNode("Plugin Registry (.gwp)")
    var conflictMessages : List<String> = MessageReporter.ConflictReporter.ConflictsPlugin.toSet().orderBy(\conflict -> conflict)
    var conflictsNode = new ReportListNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.PluginConflictMessage"), conflictMessages)
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get DiffTreeFileNode() : ReportNode {
    var reportNode = new ReportNode("DiffTree.xml")
    var conflictMessages = MessageReporter.ConflictReporter.ConflictsDiffTree
    var conflictsNode = new ReportListNode(conflictMessages.HasElements ? {DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.DiffTreeMissingMessage",
        conflictMessages.first())} : {})
    reportNode.addChild(conflictsNode)
    return reportNode
  }

  private property get InDependentStateNode() : ReportNode {
    var independentStateSection = new ReportNode(NewSBTUpdateMetaData.Line.Name + " Independent State Expired Artifacts")
    independentStateSection.addChild(ClauseNodeForIndependentState)
    independentStateSection.addChild(PolicyFormNodeForIndependentState)
    return independentStateSection
  }

  private property get ClauseNodeForIndependentState() : ReportNode {
    var reportNode = new ReportNode("Coverages, Conditions & Exclusions")
    var warningMessages : List<String> = MessageReporter.ConflictReporter.getWarningsForIndependentState(gw.sbt.loader.reporter.MessageReporter.ReportMessageSourceType.CLAUSE).orderBy(\msg -> msg)
    var clauseNode = new ReportListNode(warningMessages)
    reportNode.addChild(clauseNode)
    return reportNode
  }

  private property get PolicyFormNodeForIndependentState() : ReportNode {
    var reportNode = new ReportNode("Forms")
    var warningMessages : List<String> = MessageReporter.ConflictReporter.getWarningsForIndependentState(gw.sbt.loader.reporter.MessageReporter.ReportMessageSourceType.POLICY_FORM).orderBy(\msg -> msg)
    var formNode = new ReportListNode(warningMessages)
    reportNode.addChild(formNode)
    return reportNode
  }

  private property get SbtCommonNode() : ReportNode {
    var sbtCommonSection = new ReportNode(DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Message.SbtCommonMessage"))
    if (MessageReporter.ConflictReporter.HasConflictForSbtCommonContents) {
      sbtCommonSection.addChild(ConflictedNodeForSbtCommon)
    }
    if (MessageReporter.ConflictReporter.HasAddedForSbtCommonContents) {
      sbtCommonSection.addChild(AddedNodeForSbtCommon)
    }
    if (MessageReporter.ConflictReporter.HasRemovedForSbtCommonContents) {
      sbtCommonSection.addChild(RemovedNodeForSbtCommon)
    }
    return sbtCommonSection
  }

  private property get ConflictedNodeForSbtCommon() : ReportNode {
    var reportNode = new ReportNode("Modified: (PCA has kept the current version)")
    var gosuList = MessageReporter.ConflictReporter.getConflictForSbtCommonContents(gw.sbt.loader.reporter.MessageReporter.ReportMessageSourceType.GOSU).orderBy(\msg -> msg)
    var pcfList = MessageReporter.ConflictReporter.getConflictForSbtCommonContents(gw.sbt.loader.reporter.MessageReporter.ReportMessageSourceType.PCF).orderBy(\msg -> msg)
    var conflictNode = new ReportListNode(LoadHelper.createUnion({gosuList, pcfList}))
    reportNode.addChild(conflictNode)
    return reportNode
  }

  private property get AddedNodeForSbtCommon() : ReportNode {
    var reportNode = new ReportNode("Added files: (PCA has not copied over the older version into current)")
    var gosuList = MessageReporter.ConflictReporter.getAddedForSbtCommonContents(gw.sbt.loader.reporter.MessageReporter.ReportMessageSourceType.GOSU).orderBy(\msg -> msg)
    var pcfList = MessageReporter.ConflictReporter.getAddedForSbtCommonContents(gw.sbt.loader.reporter.MessageReporter.ReportMessageSourceType.PCF).orderBy(\msg -> msg)
    var addedNode = new ReportListNode(LoadHelper.createUnion({gosuList, pcfList}))
    reportNode.addChild(addedNode)
    return reportNode
  }

  private property get RemovedNodeForSbtCommon() : ReportNode {
    var reportNode = new ReportNode("Removed files: (PCA has not deleted the current version)")
    var gosuList = MessageReporter.ConflictReporter.getRemovedForSbtCommonContents(gw.sbt.loader.reporter.MessageReporter.ReportMessageSourceType.GOSU).orderBy(\msg -> msg)
    var pcfList = MessageReporter.ConflictReporter.getRemovedForSbtCommonContents(gw.sbt.loader.reporter.MessageReporter.ReportMessageSourceType.PCF).orderBy(\msg -> msg)
    var removedNode = new ReportListNode(LoadHelper.createUnion({gosuList, pcfList}))
    reportNode.addChild(removedNode)
    return reportNode
  }

}