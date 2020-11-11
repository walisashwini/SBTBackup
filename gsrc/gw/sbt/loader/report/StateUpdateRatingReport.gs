package gw.sbt.loader.report

uses gw.sbt.loader.report.node.ReportListNode
uses gw.sbt.loader.report.node.ReportNode
uses gw.sbt.loader.report.node.ReportNodeHelper
uses gw.sbt.loader.report.node.ReportTableNode
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.util.Formatter
uses gw.sbt.util.PcaVersionUtil
uses gw.util.Pair

class StateUpdateRatingReport extends Report {
  var _latestAdoptedRateBook : RateBookContent
  var _newRateTables : List<Pair<String, UpdateDecision>> = {}
  var _removedRateTables : List<Pair<String, UpdateDecision>> = {}
  var _ISOModifiedRateTables : List<StateUpdateRatingReportAdapter.AdaptedReportRateTableDiff> = {}
  var _carrierModifiedRateTables : List<StateUpdateRatingReportAdapter.AdaptedReportRateTableDiff> = {}
  var _newAlgorithms : List<Pair<String, UpdateDecision>> = {}
  var _removedAlgorithms : List<Pair<String, UpdateDecision>> = {}
  var _modifiedAlgorithms : List<Pair<String, UpdateDecision>> = {}

  construct(sbtUpdate : SBTUpdate, latestAdoptedRateBook : RateBookContent,
            latestAdoptedMetadata : SBTUpdateMetaData = null) {
    super(null, sbtUpdate, latestAdoptedMetadata)
    _latestAdoptedRateBook = latestAdoptedRateBook
  }

  function withNewRateTables(newRateTables : List<Pair<String, UpdateDecision>>) {
    _newRateTables = newRateTables
  }

  function withRemovedRateTables(removedRateTables : List<Pair<String, UpdateDecision>>) {
    _removedRateTables = removedRateTables
  }

  function withISOModifiedRateTables(isoModifiedRateTables : List<StateUpdateRatingReportAdapter.AdaptedReportRateTableDiff>) {
    _ISOModifiedRateTables = isoModifiedRateTables
  }

  function withCarrierModifiedRateTables(carrierModifiedRateTables : List<StateUpdateRatingReportAdapter.AdaptedReportRateTableDiff>) {
    _carrierModifiedRateTables = carrierModifiedRateTables
  }

  function withNewAlgorithms(newAlgorithms : List<Pair<String, UpdateDecision>>) {
    _newAlgorithms = newAlgorithms
  }

  function withRemovedAlgorithms(removedAlgorithms : List<Pair<String, UpdateDecision>>) {
    _removedAlgorithms = removedAlgorithms
  }

  function withModifiedAlgorithms(modifiedAlgorithms : List<Pair<String, UpdateDecision>>) {
    _modifiedAlgorithms = modifiedAlgorithms
  }

  function buildRatingReport() {
    RootNode = new ReportListNode("Rating Report", RootAttributes)
    RootNode.addChildren(ReportBody)
    ReportNodeHelper.removeEmptyNodes(RootNode)
  }

  override property get RootAttributes() : List<String> {
    var updateDate = Formatter.dateToString(Date.Today)
    var lob = NewSBTUpdateMetaData.Line.Name
    var state = Jurisdiction.get(NewSBTUpdateMetaData.Jurisdiction).DisplayName
    var newRateBookEffDate = Formatter.dateToString(SBTUpdate.RateBook.EffectiveDate)
    var newRateBookEdition = SBTUpdate.RateBook.Edition
    var laRateBookEffDate = Formatter.dateToString(_latestAdoptedRateBook.EffectiveDate)
    var laRateBookEdition = _latestAdoptedRateBook.Edition
    var adoptionDate = Formatter.dateToString(AdoptionDate)
    var pcaVersion = PcaVersionUtil.PcaVersion

    var rootReportAttributes : List<String> = {}
    rootReportAttributes.add("Update Processed on: ${updateDate}")
    rootReportAttributes.add("Product Content Analyzer Version: ${pcaVersion}")
    rootReportAttributes.add("Line of Business: ${lob}")
    rootReportAttributes.add("State: ${state}")
    rootReportAttributes.add("New Ratebook Effective Date and Edition: ${newRateBookEffDate} ${newRateBookEdition}")
    rootReportAttributes.add("Adopted Ratebook Effective Date and Edition: ${laRateBookEffDate} ${laRateBookEdition}")
    rootReportAttributes.add("Adoption Date: ${adoptionDate}")

    return rootReportAttributes
  }

  private property get ReportBody() : List<ReportNode> {
    var bodyNodes : List<ReportNode> = {
        Summary,
        NewRateTables,
        RemovedRateTables,
        ISOModifiedRateTables,
        CarrierModifiedRateTables,
        NewAlgorithms,
        RemovedAlgorithms,
        ModifiedAlgorithms
    }

    return bodyNodes
  }

  private property get Summary() : ReportTableNode {
    var summaryContent : List<List<String>> = {}
    summaryContent.add({"Artifact Type", "Total"})
    summaryContent.add({"New Rate Tables", String.valueOf(_newRateTables.size())})
    summaryContent.add({"Removed Rate Tables", String.valueOf(_removedRateTables.size())})
    summaryContent.add({"Rate Tables Modified by ISO", String.valueOf(_ISOModifiedRateTables.size())})
    summaryContent.add({"Rate Tables Modified by Carrier", String.valueOf(_carrierModifiedRateTables.size())})
    summaryContent.add({"New Algorithms", String.valueOf(_newAlgorithms.size())})
    summaryContent.add({"Removed Algorithms", String.valueOf(_removedAlgorithms.size())})
    summaryContent.add({"Modified Algorithms", String.valueOf(_modifiedAlgorithms.size())})

    return new ReportTableNode("Summary", summaryContent)
  }

  private property get NewRateTables() : ReportTableNode {
    return generateNewRemovedRateTablesNode(_newRateTables, "New Rate Tables")
  }

  private property get RemovedRateTables() : ReportTableNode {
    return generateNewRemovedRateTablesNode(_removedRateTables, "Removed Rate Tables")
  }

  private property get ISOModifiedRateTables() : ReportNode {
    return generateModifiedRateTablesNode(_ISOModifiedRateTables, "Rate Tables Modified by ISO")
  }

  private property get CarrierModifiedRateTables() : ReportNode {
    return generateModifiedRateTablesNode(_carrierModifiedRateTables, "Rate Tables Modified by Carrier")
  }

  private property get NewAlgorithms() : ReportTableNode {
    return generateAlgorithmsTableNode(_newAlgorithms, "New Algorithms")
  }

  private property get RemovedAlgorithms() : ReportTableNode {
    return generateAlgorithmsTableNode(_removedAlgorithms, "Removed Algorithms")
  }

  private property get ModifiedAlgorithms() : ReportTableNode {
    return generateAlgorithmsTableNode(_modifiedAlgorithms, "Modified Algorithms")
  }

  private function generateAlgorithmsTableNode(algorithmsContent : List<Pair<String, UpdateDecision>>, title : String) : ReportTableNode {
    var tableNodeContent : List<List<String>> = {}
    tableNodeContent.add({"Algorithm Name", "Decision"})
    algorithmsContent.each(\content -> tableNodeContent.add({content.First, getUpdateDecisionDescription(content.Second)}))

    return new ReportTableNode(title, tableNodeContent)
  }

  private function generateNewRemovedRateTablesNode(tableContent : List<Pair<String, UpdateDecision>>, title : String) : ReportTableNode {
    var tableNodeContent : List<List<String>> = {}
    tableNodeContent.add({"Table Name", "Decision"})
    tableContent.each(\content -> tableNodeContent.add({content.First, getUpdateDecisionDescription(content.Second)}))

    return new ReportTableNode(title, tableNodeContent)
  }

  private function generateModifiedRateTablesNode(tables : List<StateUpdateRatingReportAdapter.AdaptedReportRateTableDiff>,
                                          title : String) : ReportNode {
    var rateTablesNode = new ReportNode(title)
    tables.each(\table -> {
      var tableContent : List<List<String>> = {}
      var tableFirstRow : List<String> = {}
      tableFirstRow.addAll(table.ParameterList)
      tableFirstRow.add(table.CurrentTitle)
      tableFirstRow.add(table.NewTitle)
      tableFirstRow.add(table.DiffTitle)
      tableFirstRow.add("Decision")
      tableFirstRow.add(table.AdoptedTitle)
      tableContent.add(tableFirstRow)

      table.Rows.each(\row -> {
        var tableNthRow : List<String> = {}
        tableNthRow.addAll(row.ParameterValueList)
        tableNthRow.add(row.CurrentValue)
        tableNthRow.add(row.NewValue)
        tableNthRow.add(row.DiffValue)
        tableNthRow.add(getUpdateDecisionDescription (row.DecisionValue))
        tableNthRow.add(row.AdoptedValue)
        tableContent.add(tableNthRow)
      })

      rateTablesNode.addChild(new ReportTableNode(table.TableName, tableContent))
    })

    return rateTablesNode
  }
}