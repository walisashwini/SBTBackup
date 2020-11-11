package gw.sbt.loader.report.render.html

uses gw.sbt.loader.report.render.IHtmlRendererProvider

class HtmlRendererProvider implements IHtmlRendererProvider {

  override function NodeRender(): HtmlReportNodeRenderer {
    return new HtmlReportNodeRenderer ()
  }

  override function ListNodeRender(): HtmlReportListNodeRenderer {
    return new HtmlReportListNodeRenderer ()
  }

  override function TableNodeRender(): HtmlReportTableNodeRenderer {
    return new HtmlReportTableNodeRenderer ()
    }

  override function Resources(): HtmlResources {
    return new HtmlResources()
  }
}