package gw.sbt.loader.report.render

uses gw.sbt.loader.report.render.html.HtmlReportTableNodeRenderer
uses gw.sbt.loader.report.render.html.HtmlReportNodeRenderer
uses gw.sbt.loader.report.render.html.HtmlReportListNodeRenderer
uses gw.sbt.loader.report.render.html.HtmlResources

interface IHtmlRendererProvider {

  function NodeRender() : HtmlReportNodeRenderer
  function ListNodeRender() : HtmlReportListNodeRenderer
  function TableNodeRender() : HtmlReportTableNodeRenderer
  function Resources() : HtmlResources
}