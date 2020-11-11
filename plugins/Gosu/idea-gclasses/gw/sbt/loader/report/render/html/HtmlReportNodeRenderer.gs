package gw.sbt.loader.report.render.html

uses gw.sbt.loader.report.node.ReportNode

class HtmlReportNodeRenderer {
  function render(basicNode: ReportNode): String {
    if(not basicNode.TextContent.HasContent){
      return ""
    }

    var tag = "h" + (basicNode.Depth + 1)
    if (basicNode.Depth >= 4){
      tag = "div"
    }

    return "<${tag}>" + HtmlRendererUtil.sanitize(basicNode.TextContent) + "</${tag}>"
  }
}