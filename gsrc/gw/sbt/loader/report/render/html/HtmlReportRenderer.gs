package gw.sbt.loader.report.render.html

uses gw.sbt.loader.report.node.ReportListNode
uses gw.sbt.loader.report.node.ReportNode
uses gw.sbt.loader.report.node.ReportTableNode
uses gw.sbt.loader.report.render.IHtmlRendererProvider

class HtmlReportRenderer {
  var _renderProvider: IHtmlRendererProvider
  construct(renderProvider: IHtmlRendererProvider) {
    _renderProvider = renderProvider
  }

  function createHtml(node: ReportNode): String {
    var reportHtml = "<html><head>"+_renderProvider.Resources().Css+"</head><body>"
    reportHtml += renderNode(node)
    return reportHtml + "</body></html>"
  }

  private function renderNode(node: ReportNode): String {
    var htmlBuffer = ""
    if (node == null){
      return ""
    }

    if (node typeis ReportListNode) {
      htmlBuffer += render(node)
    }

    else if (node typeis ReportTableNode) {
      htmlBuffer += render(node)
    }

    else if (node typeis ReportNode){
        htmlBuffer += render(node)
    }

    return htmlBuffer + "\n" + node.Children.map(\elt -> renderNode(elt)).join("\n")
  }

  private function render(listNode: ReportListNode): String {
    return _renderProvider.ListNodeRender().render(listNode)
  }

  private function render(tableNode: ReportTableNode): String {
    return _renderProvider.TableNodeRender().render(tableNode)
  }

  private function render(node: ReportNode): String {
    return _renderProvider.NodeRender().render(node)
  }
}