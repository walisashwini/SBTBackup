package gw.sbt.loader.report

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses gw.sbt.loader.report.render.html.HtmlRendererProvider
uses gw.sbt.loader.report.render.html.HtmlReportRenderer
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.DownloadContent
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData

class LoadReportWriter {

  var _writer : SBTUpdateLoaderWriter
  var _loadResult : LoadResult
  var _sbtUpdate : SBTUpdate
  var _latestAdoptedMetadata : SBTUpdateMetaData as LatestAdoptedMetadata
  var _messageReporter : MessageReporter as MessageReporter
  var _loadReport : LoadReport as LoadReport

  construct(writer : SBTUpdateLoaderWriter, sbtUpdate : SBTUpdate, loadResult : LoadResult, latestAdoptedMetadata : SBTUpdateMetaData = null,
    messageReporter : MessageReporter= null
   ) {
    _writer = writer
    _sbtUpdate = sbtUpdate
    _loadResult = loadResult
    _latestAdoptedMetadata = latestAdoptedMetadata
    _messageReporter = messageReporter
  }

  function write() {
    _loadReport= new LoadReport (_loadResult, _latestAdoptedMetadata, _sbtUpdate, _messageReporter)
    var reportNode = _loadReport.RootNode
    var html = new HtmlReportRenderer (new HtmlRendererProvider ()).createHtml(reportNode)
    var loadReportFile = ConfigurationFile.loadReportFile(_loadResult.MetaData.Jurisdiction, _loadResult.MetaData.Line.Code, _sbtUpdate.ProcessedDate)
    _writer.writeFile(loadReportFile, html.Bytes)

    _sbtUpdate.LoadReportContent = new DownloadContent() {
      :Content = html.Bytes,
      :FileName = loadReportFile.Name
    }
  }
}