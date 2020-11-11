package gw.sbt.loader.report.render.html

uses gw.sbt.loader.report.node.ReportListNode
uses java.util.List

class HtmlReportListNodeRenderer {
  function render(listNode: ReportListNode): String {
    var headingNodeRender = new HtmlReportNodeRenderer ()
    var headingHtml = headingNodeRender.render(listNode)

    var items = listNode.ListContent ?: {} as List<String>

    if (items.Empty){
      items.add("None")
    }

    var listItemsHtml = ""
    if(listNode.Depth==0){
      listItemsHtml = items.map(\listItem -> "<div>"+ HtmlRendererUtil.sanitize(listItem)+"</div>").join("\n")

    }
    else {
       listItemsHtml = "<ul>" + items.map(\listItem -> "<li>"+ HtmlRendererUtil.sanitize(listItem)+"</li>").join("\n") + "</ul>"
    }

    return headingHtml +  listItemsHtml
  }
}