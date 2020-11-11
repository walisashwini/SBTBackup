package gw.sbt.loader.report

uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses gw.sbt.loader.report.render.html.HtmlRendererProvider
uses gw.sbt.loader.report.render.html.HtmlReportRenderer
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.DownloadContent
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData

class DeviationsReportWriter {
  var _writer : SBTUpdateLoaderWriter
  var _sbtUpdate : SBTUpdate
  var _latestAdoptedMetadata : SBTUpdateMetaData as LatestAdoptedMetadata
  var _messageReporter : MessageReporter as MessageReporter

  construct(writer : SBTUpdateLoaderWriter, sbtUpdate : SBTUpdate, latestAdoptedMetadata : SBTUpdateMetaData = null, messageReporter : MessageReporter = null) {
    _writer = writer
    _sbtUpdate = sbtUpdate
    _latestAdoptedMetadata = latestAdoptedMetadata
    _messageReporter = messageReporter
  }

  function write() {
    var deviationsReportNode = new DeviationsReport(_sbtUpdate, _latestAdoptedMetadata, _messageReporter).RootNode
    var html = new HtmlReportRenderer (new HtmlRendererProvider ()).createHtml(deviationsReportNode)
    var reportFile = ConfigurationFile.deviationsReportFile(_sbtUpdate.MetaData.Jurisdiction, _sbtUpdate.MetaData.Line.Code, _sbtUpdate.ProcessedDate)
    _writer.writeFile(reportFile, html.Bytes)

    _sbtUpdate.DeviationsReportContent = new DownloadContent() {
      :Content = html.Bytes,
      :FileName = reportFile.Name
    }
  }

}