package gw.sbt.loader.report

uses gw.sbt.loader.report.node.ReportListNode
uses gw.sbt.loader.report.node.ReportNode
uses gw.sbt.loader.report.node.ReportNodeHelper
uses gw.sbt.loader.report.node.ReportTableNode
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.loader.reporter.MessageReporterUtil
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.Risk
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.comparisons.BureauCodesComparison
uses gw.sbt.model.comparisons.ClauseComparison
uses gw.sbt.model.comparisons.RateTableComparison
uses gw.sbt.model.comparisons.RiskComparison
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.model.rating.RatingAlgorithm
uses gw.sbt.pca.view.presenter.FormRowPresenter
uses gw.sbt.pca.view.presenter.rating.RateTablePresenter
uses java.lang.StringBuilder
uses java.util.List
uses gw.api.locale.DisplayKey

class DeviationsReport extends Report {
  construct(sbtUpdate : SBTUpdate, latestAdoptedMetadata : SBTUpdateMetaData = null, messageReporter : MessageReporter = null) {
    super(null, sbtUpdate, latestAdoptedMetadata, messageReporter)
    buildDeviationReport()
  }

  private function buildDeviationReport() {
    RootNode = new ReportListNode("ISO Deviations Report", RootAttributes)
    RootNode.addChildren(ReportBody)
    ReportNodeHelper.removeEmptyNodes(RootNode)
  }

  override property get RootAttributes() : List<String> {
    var rootReportAttributes = super.RootAttributes
    var filingNotes = SBTUpdate.DecisionAndInstructions.FilingInstructions

    if (filingNotes != null) {
      rootReportAttributes.add("Update Filing Notes: ${filingNotes}")
    }

    return rootReportAttributes
  }

  private property get ReportBody() : List<ReportNode> {
    var bodyNodes : List<ReportNode> = {IsStateUpdateReport ? DeviationsSummaryForStateUpdate : DeviationsSummaryForStateAdd}
    var details = DeviationsDetail
    if (details.Children.HasElements) {
      bodyNodes.add(details)
    }
    return bodyNodes
  }

  private property get DeviationsSummaryForStateAdd() : ReportTableNode {
    var numClauseAccepted = SBTUpdate.Clauses.countWhere( \ clause -> clause.DecisionAndInstructions.Decision == UpdateDecision.ACCEPT )
    var numClauseRejected = SBTUpdate.Clauses.countWhere( \ clause -> isDecisionAndInstructionsDeviated(clause.DecisionAndInstructions))
    var numFormAccepted = SBTUpdate.Forms.countWhere( \ form -> form.DecisionAndInstructions.Decision == UpdateDecision.ACCEPT )
    var numFormRejected = SBTUpdate.Forms.countWhere( \ form -> isDecisionAndInstructionsDeviated(form.DecisionAndInstructions))

    var numRateTablesAccepted = 0
    var numRateTablesRejected = 0
    var numAlgorithmsAccepted = 0
    var numAlgorithmsRejected = 0
    if(SBTUpdate.RateBook != null and SBTUpdate.RateBook.RateTables != null) {
      numRateTablesAccepted = SBTUpdate.RateBook.DecisionAndInstructions.Decision == UpdateDecision.ACCEPT ?
      SBTUpdate.RateBook.RateTables.size() : 0
      numRateTablesRejected = isDecisionAndInstructionsDeviated(SBTUpdate.RateBook.DecisionAndInstructions) ?
      SBTUpdate.RateBook.RateTables.size() : 0
    }
    if(SBTUpdate.RateBook != null and SBTUpdate.RateBook.Algorithms != null) {
      numAlgorithmsAccepted = SBTUpdate.RateBook.DecisionAndInstructions.Decision == UpdateDecision.ACCEPT ?
          SBTUpdate.RateBook.Algorithms.size() : 0
      numAlgorithmsRejected = isDecisionAndInstructionsDeviated(SBTUpdate.RateBook.DecisionAndInstructions) ?
          SBTUpdate.RateBook.Algorithms.size() : 0
    }

    var summaryContent : List<List<String>> = {}
    summaryContent.add({"Artifact", "Accepted ISO Change", "Deviation From ISO"})
    summaryContent.add({"Coverages, Conditions & Exclusions", "${numClauseAccepted}", "${numClauseRejected}"})
    summaryContent.add({"Forms", "${numFormAccepted}", "${numFormRejected}"})
    summaryContent.add({"Rate Tables", "${numRateTablesAccepted}", "${numRateTablesRejected}"})
    summaryContent.add({"Rating Algorithms", "${numAlgorithmsAccepted}", "${numAlgorithmsRejected}"})

    SBTUpdate.BureauCodeFileDefinitions.each(\fileDefinition -> {
      var bureauCodes = SBTUpdate.getBureauCodes(fileDefinition.FileName)
      if (bureauCodes != null) {
        var numBureauCodesAccepted = (bureauCodes.DecisionAndInstructions.Decision != UpdateDecision.REJECT and bureauCodes.DecisionAndInstructions.Decision != null) ?
            bureauCodes.Codes.size() : 0
        var numBureauCodesRejected = bureauCodes.DecisionAndInstructions.Decision == UpdateDecision.REJECT ? bureauCodes.Codes.size() : 0
        summaryContent.add({fileDefinition.Label, "${numBureauCodesAccepted}", "${numBureauCodesRejected}"})
      }
    })

    var numRiskAttributesAccepted = SBTUpdate.Risks.flatMap( \ risk -> risk.RiskAttributes)
        .where( \ attr -> (attr.DecisionAndInstructions.Decision != UpdateDecision.REJECT and attr.DecisionAndInstructions.Decision != null))
        .size()
    var numRiskAttributesRejected = SBTUpdate.Risks.flatMap( \ risk -> risk.RiskAttributes)
        .where( \ attr -> attr.DecisionAndInstructions.Decision == UpdateDecision.REJECT)
        .size()
    summaryContent.add({DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RisksTitle"), "${numRiskAttributesAccepted}", "${numRiskAttributesRejected}"})
    return new ReportTableNode("Deviations Summary", summaryContent)
  }

  private property get DeviationsSummaryForStateUpdate() : ReportTableNode {
    var clauseComparisons = SBTUpdate.comparisonsOfType(Clause)
    var numClauseAccepted = clauseComparisons.countWhere(\comparison -> comparison.DecisionAndInstructions.Decision == UpdateDecision.ACCEPT)
    var numClauseRejected = clauseComparisons.countWhere(\comparison -> isDecisionAndInstructionsDeviated(comparison.DecisionAndInstructions))

    var formComparisons = SBTUpdate.comparisonsOfType(PolicyForm)
    var numFormAccepted = formComparisons.countWhere(\comparison -> comparison.DecisionAndInstructions.Decision == UpdateDecision.ACCEPT)
    var numFormRejected = formComparisons.countWhere(\comparison -> isDecisionAndInstructionsDeviated(comparison.DecisionAndInstructions))

    var numRateTablesAccepted = 0
    var numRateTablesRejected = 0
    var numAlgorithmsAccepted = 0
    var numAlgorithmsRejected = 0
    if (SBTUpdate.RateBook != null) {
      var rateTableComparisons = SBTUpdate.comparisonsOfType(RateTableContent)
      numRateTablesAccepted = rateTableComparisons.countWhere(\comparison -> comparison.Decision == UpdateDecision.ACCEPT)
      numRateTablesRejected = rateTableComparisons.countWhere(\comparison -> isDecisionAndInstructionsDeviated(comparison.DecisionAndInstructions))
      var algorithmComparisons = SBTUpdate.comparisonsOfType(RatingAlgorithm)
      numAlgorithmsAccepted = algorithmComparisons.countWhere(\comparison -> comparison.Decision == UpdateDecision.ACCEPT)
      numAlgorithmsRejected = algorithmComparisons.countWhere(\comparison -> isDecisionAndInstructionsDeviated(comparison.DecisionAndInstructions))
    }
    var summaryContent : List<List<String>> = {}
    summaryContent.add({"Artifact", "Accepted ISO Change", "Deviation From ISO"})
    summaryContent.add({"Coverages, Conditions & Exclusions", "${numClauseAccepted}", "${numClauseRejected}"})
    summaryContent.add({"Forms", "${numFormAccepted}", "${numFormRejected}"})
    summaryContent.add({"Rate Tables", "${numRateTablesAccepted}", "${numRateTablesRejected}"})
    summaryContent.add({"Rating Algorithms", "${numAlgorithmsAccepted}", "${numAlgorithmsRejected}"})

    var bureauCodecomparisons = SBTUpdate.comparisonsOfType(BureauCodes) as List<BureauCodesComparison>
    bureauCodecomparisons.each(\bureauCodeComparison -> {
      var bureauCodeRowComparisons = bureauCodeComparison.BureauCodeRowComparisons
      var numBureauCodesAccepted = bureauCodeRowComparisons.countWhere(\comparison -> comparison.Decision == UpdateDecision.ACCEPT)
      var numBureauCodesRejected = bureauCodeRowComparisons.countWhere(\comparison -> comparison.Decision == UpdateDecision.REJECT)
      if (numBureauCodesAccepted != 0 or numBureauCodesRejected != 0) {
        summaryContent.add({getBureauCodeLabel(bureauCodeComparison.CanonicalVersion.FileName), "${numBureauCodesAccepted}", "${numBureauCodesRejected}"})
      }
    })

    var riskComparisons = SBTUpdate.comparisonsOfType(Risk) as List<RiskComparison>
    var riskAttributesComparisons = riskComparisons.flatMap( \ riskComparison -> riskComparison.Children)
    var numRiskAttributesAccepted = riskAttributesComparisons.countWhere(\comparison -> comparison.Decision == UpdateDecision.ACCEPT)
    var numRiskAttributesRejected = riskAttributesComparisons.countWhere(\comparison -> comparison.Decision == UpdateDecision.REJECT)

    summaryContent.add({DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RisksTitle"), "${numRiskAttributesAccepted}", "${numRiskAttributesRejected}"})
    return new ReportTableNode("Deviations Summary", summaryContent)
  }

  private property get DeviationsDetail() : ReportNode {
    var detailsNode = new ReportNode("Deviations Detail")

    detailsNode.addChildren({
      ClauseDeviations,
      FormDeviations,
      RatingDeviations,
      BureauCodesDeviations,
      RiskAttributesDeviations
    })

    return detailsNode
  }

  private property get ClauseDeviations() : ReportTableNode {
    var tableContents : List<List<String>> = {}
    tableContents.add({"Coverage, Condition or Exclusion", "Decision", "Filing Instructions"})

    if(includeInDeviationsDetail(SBTUpdate.DecisionAndInstructionsForClauses)) {
      tableContents.add({"All Coverages, Conditions or Exclusions",
          getUpdateDecisionDescription(SBTUpdate.DecisionAndInstructionsForClauses.Decision),
          SBTUpdate.DecisionAndInstructionsForClauses.FilingInstructions ?: ""})
    }

    if (IsStateUpdateReport) { //state-update
      var clauseComparisons = SBTUpdate.comparisonsOfType(Clause) as List<ClauseComparison>
      clauseComparisons = clauseComparisons.where(\clauseComparison -> includeInDeviationsDetail(clauseComparison.DecisionAndInstructions))
          .orderBy(\clauseComparison -> clauseComparison.CanonicalVersion.Description)
      clauseComparisons.eachWithIndex( \ clauseComparison, i -> {
            addClauseDeviationDetailsForStateUpdate(clauseComparison, tableContents)
            //Add two empty rows after each Clause for readability
            if(i < clauseComparisons.size() - 1){
              tableContents.add({})
              tableContents.add({})
            }
          })
    } else { // state-add
      var deviatedClauses = SBTUpdate.Clauses.where( \ clause -> includeInDeviationsDetail(clause.DecisionAndInstructions))
      deviatedClauses.orderBy( \ clause -> clause.Description)
          .eachWithIndex( \ clause, i -> {
            addClauseDeviationDetailsForStateAdd(clause, tableContents)
            //Add two empty rows after each Clause for readability
            if(i < deviatedClauses.size() - 1){
              tableContents.add({})
              tableContents.add({})
            }
          })
    }

    return new ReportTableNode("Coverages, Conditions & Exclusions", tableContents)
  }

  private function addClauseDeviationDetailsForStateAdd(clause : Clause, tableContents : List<List<String>>) {
    // Clause heading
    tableContents.add({getIndent(1) + clause.Description + " (" + clause.ParentRisk.Name + ")",
        getUpdateDecisionDescription(clause.DecisionAndInstructions.Decision),
        clause.DecisionAndInstructions.FilingInstructions ?: ""})
    // Only display the entire structure of a clause if something has been rejected, or one of them has filing notes
    if(clause.CovTerms.HasElements and (clause.DecisionAndInstructions.Decision != UpdateDecision.ACCEPT or
        clause.CovTerms.where( \ covTerm -> covTerm.DecisionAndInstructions.FilingInstructions.HasContent).HasElements)) {
      // CovTerms heading
      tableContents.add({getIndent(2) + "Coverage Terms and Options", "", ""})
      clause.CovTerms.orderBy( \ covTerm -> covTerm.Description ).each( \ covTerm -> {
        tableContents.add({getIndent(3) + covTerm.Description, getUpdateDecisionDescription(covTerm.DecisionAndInstructions.Decision), ""})
        if(covTerm.CovTermOptions.HasElements) {
          covTerm.CovTermOptions.orderBy( \ covTermOption -> covTermOption.Priority ).each( \ covTermOption -> {
            tableContents.add({getIndent(4) + covTermOption.Description,
                getUpdateDecisionDescription(covTermOption.DecisionAndInstructions.Decision), ""})
          })
        }
      })
    }
  }

  private function addClauseDeviationDetailsForStateUpdate(clauseComparison : ClauseComparison, tableContents : List<List<String>>) {
    var clause = clauseComparison.CanonicalVersion
    // Clause heading
    tableContents.add({getIndent(1) + clause.Description + " (" + clause.ParentRisk.Name + ")",
        getUpdateDecisionDescription(clauseComparison.DecisionAndInstructions.Decision),
        clauseComparison.DecisionAndInstructions.FilingInstructions ?: ""})

    // For State Update, all attributes should show regardless of whether a decision is required
    tableContents.add({getIndent(2) + "Attributes", "", ""})
    if(clause.DescriptionAttribute != null)
      tableContents.add({getIndent(3) + "Description: " + clause.Description, "", ""})
    if(clause.CategoryAttribute != null)
      tableContents.add({getIndent(3) + "Category: " + clause.Category, "", ""})
    if(clause.ExistenceAttribute != null)
      tableContents.add({getIndent(3) + "Existence: " + displayValueOf(clause.ExistenceAttribute), "", ""})

    // Only display the entire structure of a clause if something has been rejected (partial accept or reject)
    var covTermComparisons = clauseComparison.CovTerms
    if(covTermComparisons.HasElements and (clauseComparison.DecisionAndInstructions.Decision != UpdateDecision.ACCEPT)) {
      // CovTerms heading
      tableContents.add({getIndent(2) + "Coverage Terms and Options", "", ""})
      covTermComparisons.orderBy( \ covTermComparison -> covTermComparison.CanonicalVersion.Description ).each( \ covTermComparison -> {
        var covTerm = covTermComparison.CanonicalVersion
        tableContents.add({getIndent(3) + covTerm.Description, getUpdateDecisionDescription(covTermComparison.DecisionAndInstructions.Decision), ""})

        //For State Update, all attributes should show regardless of whether a decision is required
        tableContents.add({getIndent(4) + "Attributes", "", ""})
        tableContents.add({getIndent(5) + "Description: " + covTerm.Description, "", ""})

        if(covTerm.RequiredAttribute != null)
          tableContents.add({getIndent(5) + "Required: " + displayValueOf(covTerm.RequiredAttribute), "", ""})
        if(covTerm.ValueTypeAttribute != null)
          tableContents.add({getIndent(5) + "Value Type: " + covTerm.ValueType, "", ""})
        if(covTerm.DefaultValueAttribute != null)
          tableContents.add({getIndent(5) + "Default Value: " + covTerm.DefaultValue, "", ""})
        if(covTerm.MinValueAttribute != null)
          tableContents.add({getIndent(5) + "Min Value: " + covTerm.MinValue, "", ""})
        if(covTerm.MaxValueAttribute != null)
          tableContents.add({getIndent(5) + "Max Value: " + covTerm.MaxValue, "", ""})
        if(covTerm.PriorityAttribute != null)
          tableContents.add({getIndent(5) + "Priority: " + covTerm.Priority, "", ""})

        if(covTermComparison.Options.HasElements) {
          tableContents.add({getIndent(4) + "Options", "", ""})
          covTermComparison.Options.orderBy( \ covTermOptionComparison -> covTermOptionComparison.CanonicalVersion.Priority ).each( \ covTermOptionComparison -> {
            tableContents.add({getIndent(5) + covTermOptionComparison.CanonicalVersion.Description,
                getUpdateDecisionDescription(covTermOptionComparison.DecisionAndInstructions.Decision), ""})
          })
        }
      })
    }
  }

  private property get FormDeviations() : ReportTableNode {
    var tableContents : List<List<String>> = {}
    tableContents.add({"Form", "Decision", "Filing Instructions"})

    if(includeInDeviationsDetail(SBTUpdate.DecisionAndInstructionsForForms)) {
      tableContents.add({"All Forms",
          getUpdateDecisionDescription(SBTUpdate.DecisionAndInstructionsForForms.Decision),
          SBTUpdate.DecisionAndInstructionsForForms.FilingInstructions ?: ""})
    }

    if (IsStateUpdateReport) { //state-update
      SBTUpdate.comparisonsOfType(PolicyForm).where(\formComparison -> includeInDeviationsDetail(formComparison.DecisionAndInstructions))
          .orderBy(\formComparison -> formComparison.CanonicalVersion.Description)
          .each(\formComparison -> {
            tableContents.add({getReportFormPrefix(formComparison.CanonicalVersion) + " ${formComparison.CanonicalVersion.Description}",
                getUpdateDecisionDescription(formComparison.DecisionAndInstructions.Decision),
                formComparison.DecisionAndInstructions.FilingInstructions?:""})
          })
    } else { // state-add
      SBTUpdate.Forms.where(\form -> includeInDeviationsDetail(form.DecisionAndInstructions))
          .orderBy(\form -> new FormRowPresenter(form).Description)
          .each(\form -> {
            tableContents.add({getReportFormPrefix(form) + " ${form.Description}",
                getUpdateDecisionDescription(form.DecisionAndInstructions.Decision),
                form.DecisionAndInstructions.FilingInstructions?:""})
          })
    }
    return new ReportTableNode("Forms", tableContents)
  }

  private property get RatingDeviations() : ReportNode {
    var tableContents : List<List<String>> = {}
    tableContents.add({"Rating", "Decision", "Filing Instructions"})

    var rateBook = SBTUpdate.RateBook
    if (rateBook == null) {
      return new ReportTableNode("Rating", tableContents)
    }

    var rateBookDecision = getUpdateDecisionDescription(rateBook.DecisionAndInstructions.Decision)
    var rateTableEntries = getRateTableEntries(rateBook, rateBookDecision)
    var algorithmEntries = getRatingAlgorithmEntries(rateBook, rateBookDecision)

    if(includeInDeviationsDetail(rateBook.DecisionAndInstructions) or algorithmEntries.HasElements or rateTableEntries.HasElements ) {
      tableContents.add({DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingTitle", rateBook.Description, rateBook.Edition),
          rateBookDecision ?: "",
          rateBook.DecisionAndInstructions.FilingInstructions ?: ""})
    }

    tableContents.addAll(rateTableEntries)
    tableContents.addAll(algorithmEntries)

    var ratingNode = new ReportNode("Rating")
    ratingNode.addChild(new ReportTableNode(tableContents))
    if (rateTableEntries.HasElements or algorithmEntries.HasElements) {
      ratingNode.addChild(new ReportListNode("Notes:", {DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Report.DeviationsReport.Rating.Notes")}))
    }
    return ratingNode
  }

  function getRateTableEntries(rateBook : RateBookContent, rateBookDecision : String) : List<List<String>> {
    var rateTableEntries: List<List<String>> = {}
    if (IsStateUpdateReport) { // for state-update
      var ratetableComparisons = SBTUpdate.comparisonsOfType(RateTableContent) as List<RateTableComparison>
      ratetableComparisons.where(\ratetableComparison -> includeInDeviationsDetail(ratetableComparison.DecisionAndInstructions))
          .orderBy(\ratetableComparison -> ratetableComparison.CanonicalVersion.TableName)
          .each(\ratetableComparison -> {
            rateTableEntries.add({getIndent(2) + ratetableComparison.CanonicalVersion.TableName,
                getUpdateDecisionDescription(ratetableComparison.DecisionAndInstructions.Decision),
                ratetableComparison.DecisionAndInstructions.FilingInstructions?:""
            })
          })
      var rateTablesCategoryInstructions = rateBook.DecisionAndInstructionsForRateTables.FilingInstructions
      if (rateTablesCategoryInstructions.HasContent or rateTableEntries.HasElements) {
        rateTableEntries.add(0, {getIndent(1) + DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTablesTitle"),
            getUpdateDecisionDescription(rateBook.DecisionAndInstructionsForRateTables.Decision)?:"",
            rateTablesCategoryInstructions?:""})
      }
    } else { // for state-add:  no decision on individual rate table
      var rateTablesCategory = SBTUpdate.RateBook.DecisionAndInstructionsForRateTables
      // Display a rate table only if it contains a specific instruction, regardless of its ratebook's decision
      rateBook.RateTables.where(\rateTable -> rateTable.DecisionAndInstructions.FilingInstructions.HasContent)
          .orderBy(\rateTable -> new RateTablePresenter(rateTable).Description)
          .each(\rateTable -> {
            rateTableEntries.add({getIndent(2) + new RateTablePresenter(rateTable).Description, rateBookDecision,
                rateTable.DecisionAndInstructions.FilingInstructions?:""
            })
          })
      if (rateTablesCategory.FilingInstructions.HasContent or rateTableEntries.HasElements) {
        rateTableEntries.add(0, {getIndent(1) + DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RateTablesTitle"),
            rateBookDecision?:"",
            rateTablesCategory.FilingInstructions?:""})
      }
    }
    return rateTableEntries
  }

  function getRatingAlgorithmEntries(rateBook: RateBookContent, rateBookDecision: String) : List<List<String>> {
    var algorithmEntries: List<List<String>> = {}
    if (IsStateUpdateReport) {// for state-update
      var algorithmComparisons = SBTUpdate.comparisonsOfType(RatingAlgorithm)
      algorithmComparisons.where(\algorithmComparison -> includeInDeviationsDetail(algorithmComparison.DecisionAndInstructions))
          .orderBy(\algorithmComparison -> algorithmComparison.CanonicalVersion.Name)
          .each(\algorithmComparison -> {
            algorithmEntries.add({getIndent(2) + algorithmComparison.CanonicalVersion.Name,
                getUpdateDecisionDescription(algorithmComparison.DecisionAndInstructions.Decision),
                algorithmComparison.DecisionAndInstructions.FilingInstructions?:""
            })
          })
      var algorithmsCategoryInstructions = rateBook.DecisionAndInstructionsForAlgorithms.FilingInstructions
      if (algorithmsCategoryInstructions.HasContent or algorithmEntries.HasElements) {
        algorithmEntries.add(0, {getIndent(1) + DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingAlgorithmsTitle"),
            getUpdateDecisionDescription(rateBook.DecisionAndInstructionsForAlgorithms.Decision)?:"",
            algorithmsCategoryInstructions?:""})
      }
    } else { // for state-add:  no decision on individual algorithm
      // Display an algorithm only if it contains a specific instruction, regardless of its ratebook's decision
      if (rateBook.Algorithms != null) {
        rateBook.Algorithms.where(\algorithm -> algorithm.DecisionAndInstructions.FilingInstructions.HasContent)
            .orderBy(\algorithm -> algorithm.Name)
            .each(\algorithm -> {
              algorithmEntries.add({getIndent(2) + algorithm.Name, rateBookDecision, algorithm.DecisionAndInstructions.FilingInstructions?:""
              })
            })
      }
      var algorithmsCategory = SBTUpdate.RateBook.DecisionAndInstructionsForAlgorithms
      if (algorithmsCategory.FilingInstructions.HasContent or algorithmEntries.HasElements) {
        algorithmEntries.add(0, {getIndent(1) + DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.RatingAlgorithmsTitle"),
            rateBookDecision?:"",
            algorithmsCategory.FilingInstructions?:""})
      }
    }
    return algorithmEntries
  }

  private property get BureauCodesDeviations() : ReportNode {
    var tableContents : List<List<String>> = {}
    if (IsStateUpdateReport) { //state-update
      var reportNode = new ReportNode("Bureau Codes")
      var filingInstructionsForAllBureauCodes = SBTUpdate.DIForStateUpdateBureauCodes.FilingInstructions
      var reportedBureauCodes = MessageReporterUtil.getReportedSystemTables(MessageReporter.DeviationsRepoter.ReportedBureauCodes, BUREAU_CODE)
      if (not reportedBureauCodes.Empty) {
        reportedBureauCodes.keySet().each(\key -> {
          var contents = reportedBureauCodes.get(key)
          if(not contents.Empty){
            var keyColumnTitle = contents.get(0).Titles
            var tableFileName = contents.get(0).FileName
            var decisionOnTable = getUpdateDecisionDescription(contents.get(0).TableDecision)
            var filingInstructionsForThisBureauCode = contents.get(0).FilingInstructions
            var tableEntries : List<List<String>> = {}
            tableEntries.add(keyColumnTitle)
            contents.each(\content -> {
              var tableEntryContent : List<String>= new ArrayList<String> ()
              tableEntryContent.addAll (content.Path)
              tableEntryContent.add (getUpdateDecisionDescription(content.Decision))
              tableEntries.add(tableEntryContent)
            })
            reportNode.addChild(new ReportTableNode(getBureauCodeLabel(tableFileName) + " (" + decisionOnTable + ")", tableEntries))
            //add filing instructions, instructions for all bureau codes first, then instructions for this bureau code
            var filingInstructionsList : List<String> = {}
            if (filingInstructionsForAllBureauCodes != null) {
              filingInstructionsList.add(filingInstructionsForAllBureauCodes)
            }
            if (filingInstructionsForThisBureauCode != null) {
              filingInstructionsList.add(filingInstructionsForThisBureauCode)
            }

            if (filingInstructionsList.HasElements) {
              reportNode.addChild(new ReportListNode("Filing Instructions:", filingInstructionsList))
            }
          }
        })
      }
      return reportNode
    } else { // state-add
      tableContents.add({"Bureau Code", "Filing Instructions"})
      SBTUpdate.BureauCodes
          .where(\bureauCodes -> bureauCodes.DecisionAndInstructions.FilingInstructions.HasContent)
          .each(\bureauCodes -> {
            tableContents.add({bureauCodes.Label, bureauCodes.DecisionAndInstructions.FilingInstructions})
          })

      return new ReportTableNode("Bureau Codes", tableContents)
    }
  }

  private property get RiskAttributesDeviations() : ReportTableNode {
    var tableContents : List<List<String>> = {}
    tableContents.add({"Risk Attribute", "Decision", "Filing Instructions"})

    var indent = 1
    if (IsStateUpdateReport) { // state-update
      var riskComparisons = SBTUpdate.comparisonsOfType(Risk) as List<RiskComparison>
      riskComparisons.orderBy(\riskComparison -> riskComparison.CanonicalVersion.Name).each(\riskComparison -> {
        if (includeInDeviationsDetail(riskComparison.DecisionAndInstructions)
            or riskComparison.RiskAttributeComparisons.hasMatch(\riskAttributeComparison -> includeInDeviationsDetail(riskAttributeComparison.DecisionAndInstructions))) {
          tableContents.add({getIndent(indent) + "${riskComparison.CanonicalVersion.Name}",
              getUpdateDecisionDescription(riskComparison.DecisionAndInstructions.Decision),
              riskComparison.DecisionAndInstructions.FilingInstructions
          })
        }
        riskComparison.RiskAttributeComparisons.orderBy(\riskAttributeComparison -> riskAttributeComparison.CanonicalVersion.Description).each(\riskAttributeComparison -> {
          if (includeInDeviationsDetail(riskAttributeComparison.DecisionAndInstructions)) {
            tableContents.add({getIndent(indent + 1) + "${riskAttributeComparison.CanonicalVersion.Description}",
                getUpdateDecisionDescription(riskAttributeComparison.DecisionAndInstructions.Decision),
                riskAttributeComparison.DecisionAndInstructions.FilingInstructions})
          }
        })
      })
    } else { // state-add
      SBTUpdate.Risks.orderBy(\risk -> risk.Name).each(\risk -> {
        if (includeInDeviationsDetail(risk.DecisionAndInstructions)) {
          tableContents.add({"${risk.Name}",
              getUpdateDecisionDescription(risk.DecisionAndInstructions.Decision),
              risk.DecisionAndInstructions.FilingInstructions
          })
        }
        risk.RiskAttributes.orderBy(\attr -> attr.Description).each(\attribute -> {
          var attributePath = new StringBuilder()
          while (attribute != null) {
            attributePath.append(" - " + attribute.Description)
            if (includeInDeviationsDetail(attribute.DecisionAndInstructions)) {
              tableContents.add({"${risk.Name}${attributePath}",
                  getUpdateDecisionDescription(attribute.DecisionAndInstructions.Decision),
                  attribute.DecisionAndInstructions.FilingInstructions})
            }
            attribute = attribute.Child
          }
        })
      })
    }
    //only insert 'All Risk Attributes' if there is any risk/attributes
    if (tableContents.Count > 1) {
      var instructionsForCategory = SBTUpdate.DecisionAndInstructionsForRiskAttributes.FilingInstructions
      var decisionForCategory = getUpdateDecisionDescription(SBTUpdate.DecisionAndInstructionsForRiskAttributes.Decision)
      tableContents.add(1, {"All Risk Attributes",
          decisionForCategory,
          instructionsForCategory})
    }

    return new ReportTableNode("Risk Attributes", tableContents)
  }

  private function isDecisionAndInstructionsDeviated(decisionAndInstructions: DecisionAndInstructions) : boolean {
    if(decisionAndInstructions == null or decisionAndInstructions.Decision == null) {
      return false
    }

    return (decisionAndInstructions.Decision != UpdateDecision.ACCEPT and decisionAndInstructions.Decision != UpdateDecision.NOT_REQUIRED)
  }

  private function includeInDeviationsDetail(decisionAndInstructions: DecisionAndInstructions) : boolean {
    return isDecisionAndInstructionsDeviated(decisionAndInstructions) or decisionAndInstructions.FilingInstructions.HasContent
  }

  private function getBureauCodeLabel(fileName : String) : String {
    var definedBureauCode = SBTUpdate.BureauCodeFileDefinitions.firstWhere(\fileDefinition -> fileDefinition.FileName == fileName)
    return definedBureauCode.Label?:fileName
  }
}