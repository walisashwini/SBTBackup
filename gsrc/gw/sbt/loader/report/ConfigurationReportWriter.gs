package gw.sbt.loader.report

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses gw.sbt.loader.report.render.html.HtmlRendererProvider
uses gw.sbt.loader.report.render.html.HtmlReportRenderer
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.DownloadContent
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData

class ConfigurationReportWriter {
  var _writer : SBTUpdateLoaderWriter
  var _sbtUpdate : SBTUpdate
  var _loadResult : LoadResult
  var _latestAdoptedMetadata : SBTUpdateMetaData as LatestAdoptedMetadata
  var _messageReporter : MessageReporter as MessageReporter
  var _configurationReport : ConfigurationReport as ConfigurationReport

  construct(writer : SBTUpdateLoaderWriter, sbtUpdate : SBTUpdate, loadResult : LoadResult, latestAdoptedMetadata : SBTUpdateMetaData = null,
      messageReporter : MessageReporter = null) {
    _writer = writer
    _sbtUpdate = sbtUpdate
    _loadResult = loadResult
    _latestAdoptedMetadata = latestAdoptedMetadata
    _messageReporter = messageReporter
  }

  function write() {
    _configurationReport = new ConfigurationReport(_sbtUpdate, _loadResult, _messageReporter, _latestAdoptedMetadata)
    var configurationReportNode = _configurationReport.RootNode
    var html = new HtmlReportRenderer (new HtmlRendererProvider()).createHtml(configurationReportNode)
    var reportFile = ConfigurationFile.configurationReportFile(_sbtUpdate.MetaData.Jurisdiction, _sbtUpdate.MetaData.Line.Code, _sbtUpdate.ProcessedDate)
    _writer.writeFile(reportFile, html.Bytes)

    _sbtUpdate.ConfigurationReportContent = new DownloadContent() {
      :Content = html.Bytes,
      :FileName = reportFile.Name
    }
  }

}