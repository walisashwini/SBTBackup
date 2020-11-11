package gw.sbt.loader.report

uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.loader.report.node.ReportListNode
uses gw.sbt.loader.report.node.ReportNode
uses gw.sbt.loader.report.node.ReportNodeHelper
uses gw.sbt.loader.report.node.ReportTableNode
uses gw.sbt.loader.reporter.AuditReporter
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.reporter.ReportContent
uses gw.sbt.loader.reporter.MessageReporterUtil
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.util.Formatter
uses gw.sbt.util.PcaVersionUtil

class AuditReport extends Report {
  var _auditReporter : AuditReporter as AuditReporter
  var _nameIdCache : Map<String, String> as NameIdCache = {}
  var _currentPmDisplayProperties : ProductModelDisplayProperties

  construct(sbtUpdate : SBTUpdate, loadResult : LoadResult, messageReporter : MessageReporter, pmDisplayProperties : ProductModelDisplayProperties, latestAdoptedMetadata : SBTUpdateMetaData = null) {
    super(loadResult, sbtUpdate, latestAdoptedMetadata, messageReporter)
    _auditReporter = messageReporter.AuditReporter
    _currentPmDisplayProperties = pmDisplayProperties
    buildAuditReport()
  }

  private function buildAuditReport() {
    RootNode = new ReportListNode("CW Audit Report", RootAttributes)
    RootNode.addChildren(ReportBody)
    ReportNodeHelper.removeEmptyNodes(RootNode)
  }

  override property get RootAttributes(): List<String> {
    var updateDate = Formatter.dateToString(Date.Today)
    var lob = NewSBTUpdateMetaData.Line.Name
    var state = Jurisdiction.get(NewSBTUpdateMetaData.Jurisdiction).DisplayName
    var effDate = Formatter.dateToString(NewSBTUpdateMetaData.EffectiveDate)
    var version = NewSBTUpdateMetaData.PackageVersion
    var adoptionDate = Formatter.dateToString(AdoptionDate)
    var newCwDate = Formatter.dateToString(NewSBTUpdateMetaData.CWEffectiveDate)
    var newCwVersion = NewSBTUpdateMetaData.CWVersion
    var newCwEdition = newCwDate + " " + newCwVersion
    var pcaVersion = PcaVersionUtil.PcaVersion

    var rootReportAttributes : List<String> = {}
    rootReportAttributes.add("Update Processed on: ${updateDate}")
    rootReportAttributes.add("Product Content Analyzer Version: ${pcaVersion}")
    rootReportAttributes.add("Line of Business: ${lob}")
    rootReportAttributes.add("State: ${state}")

    if(LatestAdoptedMetadata == null){
      rootReportAttributes.add("ERC Effective Date and Version: ${effDate} ${version}")
    } else {
      var latestAdoptedCWEffDate = Formatter.dateToString(LatestAdoptedMetadata.CWEffectiveDate)
      var latestAdoptedCWVersion = LatestAdoptedMetadata.CWVersion
      rootReportAttributes.add("State Effective Date and Version: ${effDate} ${version}")
      rootReportAttributes.add("Adopted CW Effective Date and Version: ${latestAdoptedCWEffDate} ${latestAdoptedCWVersion}")
      rootReportAttributes.add("New CW Effective Date and Version: ${newCwEdition}")
    }

    rootReportAttributes.add("Adoption Date: ${adoptionDate}")

    return rootReportAttributes
  }

  private property get ReportBody() : List<ReportNode> {
    var bodyNodes : List<ReportNode> = {
        ClauseNode,
        FormNode,
        getSystemTableNode(BUREAU_CODE),
        BackgroundArtifactsNode
    }
    return bodyNodes
  }

  private property get ClauseNode() : ReportTableNode {
    var tableEntries : List<List<String>> = {}
    tableEntries.add({"Coverage, Condition or Exclusion", "CW Version"})
    tableEntries.addAll(ClauseReportRows)
    return new ReportTableNode("Coverages, Conditions & Exclusions", tableEntries)
  }

  private property get FormNode() : ReportListNode {
    var listContent : List<String> = {}
    AuditReporter.ReportedFormPatterns.each(\reportContent ->
      listContent.add(reportContent.Path.get(0) +" "+ reportContent.Path.get(1))
    )
    return new ReportListNode("Forms", listContent)
  }

  private function getSystemTableNode(sourceType : MessageReporter.ReportMessageSourceType) : ReportNode {
    var reportNode = new ReportNode(sourceType == BUREAU_CODE ? "Bureau Codes" : "System Table")
    var reportedSystemTables = MessageReporterUtil.getReportedSystemTables(AuditReporter.ReportedSystemTables, sourceType)
    if (not reportedSystemTables.Empty) {
      reportedSystemTables.keySet().each(\name -> {
        var contents = reportedSystemTables.get(name)
        if(not contents.Empty){
          var tableEntries : List<List<String>> = {}
          tableEntries.add(contents.get(0).Titles)
          contents.each(\content-> {
            var tableEntryContent : List<String>= new ArrayList<String> ()
            tableEntryContent.addAll (content.Path)
            tableEntryContent.add (getUpdateDecisionDescription(content.Decision))
            tableEntries.add(tableEntryContent)
          })

          reportNode.addChild(new ReportTableNode(name, tableEntries))
        }
      })
    }
    return reportNode
  }

  private property get BackgroundArtifactsNode() : ReportNode {
    var backgroundSection = new ReportNode("Background Artifacts")
    //System Table
    backgroundSection.addChild(getSystemTableNode(SYSTEM_TABLE))
    //configuration files
    backgroundSection.addChild(getConfigurationFileNode("schedule-config.xml", _auditReporter.getReportedConfigurationFile(SCHEDULE_CONFIG), "Clause", "PropertyInfo"))
    backgroundSection.addChild(getConfigurationFileNode("lob-field-meta.xml", _auditReporter.getReportedConfigurationFile(LOB_FIELD_META), "Entity", "Column"))
    backgroundSection.addChild(getConfigurationFileNode("availability-config.xml", _auditReporter.getReportedConfigurationFile(AVAILABILITY_CONFIG), "Container", "Property"))
    backgroundSection.addChild(getConfigurationFileNode("validation-config.xml", _auditReporter.getReportedConfigurationFile(VALIDATION_CONFIG), "Container", "Property"))
    backgroundSection.addChild(getConfigurationFileNode("existence-config.xml", _auditReporter.getReportedConfigurationFile(EXISTENCE_CONFIG), "Container", "Property"))
    backgroundSection.addChild(getConfigurationFileNode("value-dependency-config.xml", _auditReporter.getReportedConfigurationFile(VALUE_DEPENDENCY_CONFIG), "Container", "System Table"))
    backgroundSection.addChild(getConfigurationFileNode("sync-property-meta.xml", _auditReporter.getReportedConfigurationFile(SYNC_PROPERTY_META), "Container", "Property"))
    backgroundSection.addChild(getConfigurationFileNode("stat-code-config.xml", _auditReporter.getReportedConfigurationFile(STAT_CODE_CONFIG), "Container", "StatCode"))
    backgroundSection.addChild(getConfigurationFileNode("productmodel-extension.xml", _auditReporter.getReportedConfigurationFile(PRODUCTMODEL_EXTENSION), "Clause", "Term"))
    backgroundSection.addChild(getConfigurationFileNode("form-inference-config.xml", _auditReporter.getReportedConfigurationFile(FORM_INFERENCE_CONFIG), "FormInference", "Version"))
    //PolicyLinePattern (Modifier and RateFactor)
    backgroundSection.addChild(getConfigurationFileNode("${NewSBTUpdateMetaData.Line.Code}.xml (Rate Factor Modifier Patterns)", _auditReporter.ReportedPolicyLinePattern, "Modifier", "RateFactor"))
    return backgroundSection
  }

  private function getConfigurationFileNode(artifactTitle : String, reportContentList : List<ReportContent>,
                                            keyPrefix : String, valuePrefix : String) : ReportNode {
    var reportNode = new ReportNode(artifactTitle)
    MessageReporterUtil.getContainerPropertyContentToReport(reportContentList).eachKeyAndValue(\container, propertyList -> {
      var containerTitle = "(" + keyPrefix + ") " + container
      propertyList.removeWhere(\value -> value == null or value == "null" or value == "") //remove empty and null
      if (propertyList.Empty) {// if no property for this container, display the container name only, 'None' for property
        var listNode = new ReportListNode(containerTitle, {"(" + valuePrefix + ") None"})
        reportNode.addChild(listNode)
      } else {
        var valuesList = propertyList.map(\e -> "(" + valuePrefix + ") " + e).order()
        var listNode = new ReportListNode(containerTitle, valuesList)
        reportNode.addChild(listNode)
      }
    })
    return reportNode
  }

  property get ClauseReportRows() : List<List<String>> {
    var rows : List<List<String>> = {}
    var reportContentClauses : Map<String, String> = {}
    var reportContentTerms : Map<List<String>, String> = {}
    var reportContentOptions : Map<List<String>, String> = {}
    var reported = _auditReporter.ReportedArtifactsProductModel
    var clauseStruc : Map<String, Map<String, Set<String>>> = {}

    reported.each(\reportContent -> {
      var clauseName = getClauseName(reportContent.Path.first())
      if (reportContent.Path.Count == 1) {
        reportContentClauses.put(clauseName, reportContent.Message)
        buildClauseStruc(clauseStruc, {clauseName})
      } else {
        var termName = getCovTermName(reportContent.Path.first(), reportContent.Path.get(1))
        if (reportContent.Path.Count == 2) {
          reportContentTerms.put({clauseName, termName}, reportContent.Message)
          buildClauseStruc(clauseStruc, {clauseName, termName})
        } else if (reportContent.Path.Count == 3) {
          var optName = getOptionName(reportContent.Path.first(), reportContent.Path.get(1), reportContent.Path.get(2))
          reportContentOptions.put({clauseName, termName, optName}, reportContent.Message)
          buildClauseStruc(clauseStruc, {clauseName, termName, optName})
        }
      }
    })

    clauseStruc.Keys.toList().order().each(\clauseName -> {
      var messageClause = reportContentClauses.get(clauseName)?:""
      rows.add({clauseName, messageClause})
      clauseStruc.get(clauseName).Keys.toList().order().each(\termName -> {
        // CovTerms
        var messageTerm = reportContentTerms.get({clauseName, termName})?:""
        rows.add({getIndent(1) + termName, messageTerm})
        clauseStruc.get(clauseName).get(termName).toList().order().each(\optName -> {
          // CovTerm Opts
          var messageOpt = reportContentOptions.get({clauseName, termName, optName})
          rows.add({getIndent(2) + optName, messageOpt})
        })
      })
      rows.add({"", ""})
    })
    if (rows.last() != null) {
      rows.remove(rows.Count - 1)
    }
    return rows
  }

  private function buildClauseStruc(clauseStruc : Map<String, Map<String, Set<String>>>, reportedPath : List<String>) {
    var clauseName = reportedPath.first()
    var termName = reportedPath.Count > 1 ? reportedPath.get(1) : null
    var optName = reportedPath.Count > 2 ? reportedPath.get(2) : null

    if (not clauseStruc.containsKey(clauseName)) {
      var value : Map<String, Set<String>> = {}
      clauseStruc.put(clauseName, value)
    }
    if (termName == null) return

    var termStruc = clauseStruc.get(clauseName)
    if (not termStruc.containsKey(termName)) {
      var value : Set<String> = {}
      termStruc.put(termName, value)
    }
    if (optName == null) return

    var optStruc = termStruc.get(termName)
    if (not optStruc.contains(optName)) {
      optStruc.add(optName)
    }
  }

  private function addReportedTermIds(reportedTermIds : Map<String, Set<String>>, path : List<String>) {
    var clauseId = path.first()
    var termId = path.get(1)
    if (not reportedTermIds.containsKey(clauseId)) {
      reportedTermIds.put(clauseId, {termId})
    } else {
      reportedTermIds.get(clauseId).add(termId)
    }
  }

  private function getClauseName(clauseId : String) : String {
    var name : String
    if (_nameIdCache.containsKey(clauseId)) {
      name = _nameIdCache.get(clauseId)
    } else {
      // Get description from SBTUpdate.Clauses
      var clause = SBTUpdate.Clauses.firstWhere(\clause -> clause.PublicId == clauseId)
      if (clause == null) {
        //Get description from CurrentDisplayProperties
        name = _currentPmDisplayProperties.getClauseNameFor(clauseId)
      } else {
        name = clause.Description
      }
      _nameIdCache.put(clauseId, name)
    }
    return name
  }

  private function getCovTermName(clauseId : String, termId : String) : String {
    var name : String
    if (_nameIdCache.containsKey(termId)) {
      name = _nameIdCache.get(termId)
    } else {
      // Get description from SBTUpdate.Clauses
      var clause = SBTUpdate.Clauses.firstWhere(\clause -> clause.PublicId == clauseId)
      var term = clause?.CovTerms?.firstWhere(\ct -> ct.PublicId == termId)
      if (term == null) {
        //Get description from CurrentDisplayProperties
        name = _currentPmDisplayProperties.getCovTermNameFor(termId)
      } else {
        name = term.Description
      }
      _nameIdCache.put(termId, name)
    }
    return name
  }

  private function getOptionName(clauseId : String, termId : String, optionId : String) : String {
    var name : String
    if (_nameIdCache.containsKey(optionId)) {
      name = _nameIdCache.get(optionId)
    } else {
      // Get description from SBTUpdate.Clauses
      var clause = SBTUpdate.Clauses.firstWhere(\clause -> clause.PublicId == clauseId)
      var term = clause?.CovTerms?.firstWhere(\ct -> ct.PublicId == termId)
      var option = term?.CovTermOptions?.firstWhere(\o -> o.PublicId == optionId)
      if (option == null) {
        //Get description from CurrentDisplayProperties
        name = _currentPmDisplayProperties.getOptionDescriptionFor(optionId)
      } else {
        name = option.Description
      }
      _nameIdCache.put(optionId, name)
    }
    return name
  }
}