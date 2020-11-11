package gw.sbt.loader.report

uses gw.sbt.loader.report.node.ReportListNode
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.clause.ClauseAttribute
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.util.DisplayDescriptionHelper
uses gw.sbt.util.Formatter
uses gw.sbt.util.PcaVersionUtil

abstract class Report<T> {
  var _rootNode : ReportListNode as RootNode
  var _loadResult : LoadResult as LoadResult
  var _latestAdoptedMetadata : SBTUpdateMetaData as LatestAdoptedMetadata
  var _sbtUpdate : SBTUpdate as SBTUpdate
  var _messageReporter : MessageReporter as MessageReporter

  construct(loadResult : LoadResult, sbtUpdate : SBTUpdate, latestAdoptedMetadata : SBTUpdateMetaData = null, messageReporter : MessageReporter = null) {
    _loadResult = loadResult
    _sbtUpdate = sbtUpdate
    _latestAdoptedMetadata = latestAdoptedMetadata
    _messageReporter = messageReporter
  }

  property get IsStateUpdateReport() : boolean {
    return LatestAdoptedMetadata != null
  }

  function getUpdateDecisionDescription(updateDecision : UpdateDecision) : String {
    if(LatestAdoptedMetadata != null) {
      return DisplayDescriptionHelper.getComparisonUpdateDecisionDescription(updateDecision)
    } else {
      return DisplayDescriptionHelper.getUpdateDecisionDescription(updateDecision)
    }
  }

  protected function displayValueOf(attribute : ClauseAttribute<T>) : String {
    var value = attribute.Value
    if (value typeis Boolean){
      return value.booleanValue() ? "Yes" : "No"
    } else {
      return value.toString()
    }
  }

  property get RootAttributes() : List<String> {
    var updateDate = Formatter.dateToString(Date.Today)
    var lob = NewSBTUpdateMetaData.Line.Name
    var state = Jurisdiction.get(NewSBTUpdateMetaData.Jurisdiction).DisplayName
    var effDate = Formatter.dateToString(NewSBTUpdateMetaData.EffectiveDate)
    var version = NewSBTUpdateMetaData.PackageVersion
    var adoptionDate = Formatter.dateToString(AdoptionDate)
    var pcaVersion = PcaVersionUtil.PcaVersion

    var rootReportAttributes : List<String> = {}
    rootReportAttributes.add("Update Processed on: ${updateDate}")
    rootReportAttributes.add("Product Content Analyzer Version: ${pcaVersion}")
    rootReportAttributes.add("Line of Business: ${lob}")
    rootReportAttributes.add("State: ${state}")

    if(LatestAdoptedMetadata == null) {
      rootReportAttributes.add("ERC Effective Date and Version: ${effDate} ${version}")
    } else {
      var latestAdoptedEffDate = Formatter.dateToString(LatestAdoptedMetadata.EffectiveDate)
      var latestAdoptedVersion = LatestAdoptedMetadata.PackageVersion

      rootReportAttributes.add("New Update Effective Date and Version: ${effDate} ${version}")
      rootReportAttributes.add("Latest Adopted Effective Date and Version: ${latestAdoptedEffDate} ${latestAdoptedVersion}")
    }
    rootReportAttributes.add("Adoption Date: ${adoptionDate}")
    return rootReportAttributes
  }

  property get NewSBTUpdateMetaData() : SBTUpdateMetaData {
    if(SBTUpdate != null) {
      return SBTUpdate.MetaData
    } else {
      return LoadResult.MetaData
    }
  }

  property get AdoptionDate() : Date {
    if(SBTUpdate != null) {
      return SBTUpdate.AdoptionDate
    } else {
      return LoadResult.AdoptionDate
    }
  }

  protected function getReportFormPrefix(form : PolicyForm) : String {
    return LatestAdoptedMetadata != null ? "${form.Number}" : "${form.Number} ${form.Edition}"
  }

  static function getIndent(level : int) : String {
    if (level <= 0) {
      return ""
    }
    var buff = new StringBuffer()
    for(1 .. level) {
      buff.append("    ")
    }
    return buff.toString()
  }
}