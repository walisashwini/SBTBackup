package gw.sbt.loader.report

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses gw.sbt.loader.report.render.html.HtmlRendererProvider
uses gw.sbt.loader.report.render.html.HtmlReportRenderer
uses gw.sbt.model.DownloadContent
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData
uses gw.sbt.model.rating.RateBookContent

class StateUpdateRatingReportWriter {
  var _writer : SBTUpdateLoaderWriter
  var _sbtUpdate : SBTUpdate
  var _latestAdoptedRateBook : RateBookContent
  var _latestAdoptedMetadata : SBTUpdateMetaData as LatestAdoptedMetadata
  var _stateUpdateRatingReportAdapter : StateUpdateRatingReportAdapter

  construct(writer : SBTUpdateLoaderWriter, stateUpdateRatingReportAdapter : StateUpdateRatingReportAdapter,
            sbtUpdate : SBTUpdate, latestAdoptedRateBook : RateBookContent,
            latestAdoptedMetadata : SBTUpdateMetaData = null) {
    _writer = writer
    _stateUpdateRatingReportAdapter = stateUpdateRatingReportAdapter
    _sbtUpdate = sbtUpdate
    _latestAdoptedRateBook = latestAdoptedRateBook
    _latestAdoptedMetadata = latestAdoptedMetadata
  }

  function write() {
    var ratingReport = new StateUpdateRatingReport(_sbtUpdate, _latestAdoptedRateBook, _latestAdoptedMetadata)
    _stateUpdateRatingReportAdapter.initializeReport(ratingReport)
    ratingReport.buildRatingReport()

    var html = new HtmlReportRenderer(new HtmlRendererProvider()).createHtml(ratingReport.RootNode)
    var reportFile = ConfigurationFile.ratingReportFile(_sbtUpdate.MetaData.Jurisdiction, _sbtUpdate.MetaData.Line.Code, _sbtUpdate.ProcessedDate)
    _writer.writeFile(reportFile, html.Bytes)

    _sbtUpdate.StateUpdateRatingReportContent = new DownloadContent() {
      :Content = html.Bytes,
      :FileName = reportFile.Name
    }
  }
}