package gw.sbt.loader.report

uses gw.sbt.artifacts.properties.ProductModelDisplayProperties
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.current.CurrentConfigContents
uses gw.sbt.loader.io.SBTUpdateLoaderWriter
uses gw.sbt.loader.report.render.html.HtmlRendererProvider
uses gw.sbt.loader.report.render.html.HtmlReportRenderer
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.DownloadContent
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.SBTUpdateMetaData

class AuditReportWriter {
  var _writer : SBTUpdateLoaderWriter
  var _sbtUpdate : SBTUpdate
  var _loadResult : LoadResult
  var _latestAdoptedMetadata : SBTUpdateMetaData as LatestAdoptedMetadata
  var _messageReporter : MessageReporter as MessageReporter
  var _currentPmDisplayProperties: ProductModelDisplayProperties as CurrentPmDisplayProperties

  construct(writer : SBTUpdateLoaderWriter, sbtUpdate : SBTUpdate, loadResult : LoadResult, latestAdoptedMetadata : SBTUpdateMetaData = null,
      messageReporter : MessageReporter = null) {
    _writer = writer
    _sbtUpdate = sbtUpdate
    _loadResult = loadResult
    _latestAdoptedMetadata = latestAdoptedMetadata
    _messageReporter = messageReporter
  }

  function write() {
    var auditReportNode = new AuditReport(_sbtUpdate, _loadResult, _messageReporter, _currentPmDisplayProperties, _latestAdoptedMetadata).RootNode
    var html = new HtmlReportRenderer(new HtmlRendererProvider()).createHtml(auditReportNode)
    var reportFile = ConfigurationFile.auditReportFile(_sbtUpdate.MetaData.Jurisdiction, _sbtUpdate.MetaData.Line.Code, _sbtUpdate.ProcessedDate)
    _writer.writeFile(reportFile, html.Bytes)

    _sbtUpdate.AuditReportContent = new DownloadContent() {
      :Content = html.Bytes,
      :FileName = reportFile.Name
    }
  }

}