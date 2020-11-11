package gw.sbt.loader.report.node

uses java.util.List

/**
 * This node in the report corresponds to a generic item that can have a description
 * and a list of children. More specific items should extend this class to provide additional
 * reporting details if needed.
 */
class ReportNode {
  var _text : String as readonly TextContent
  var _children : List<ReportNode> as Children
  var _parent : ReportNode

  construct(textContent : String) {
    _text = textContent
    _children = {}
    _parent = null
  }

  function addChild(node : ReportNode) {
    _children.add(node)
    node._parent = this
  }

  function addChildren(nodes : List<ReportNode>) {
    _children.addAll(nodes)
    nodes.each( \ node -> { node._parent = this } )
  }

  function getChildWithContent(content : String) : ReportNode {
    return _children.firstWhere( \ childNode -> childNode.TextContent == content )
  }

  property get Depth() : int {
    return getReportNodeDepth()
  }

  private function getReportNodeDepth() : int {
    if(_parent == null) {
      return 0
    } else {
      return _parent.getReportNodeDepth() + 1
    }
  }
}