package gw.sbt.loader.report.node

uses java.util.List

class ReportNodeHelper {

  static function removeEmptyNodes(node : ReportNode) {
    var emptyNodes : List<ReportNode> = {}

    node.Children.each(\ childNode -> {
      removeEmptyNodes(childNode)
      if (isEmpty(childNode))
        emptyNodes.add(childNode)
    })

    node.Children.removeAll(emptyNodes)
  }

  static function isEmpty(node : ReportNode) : boolean {
    if (node.Children.HasElements)
      return false

    if (node typeis ReportTableNode)
      return node.TableContent.size() <= 1
    else if (node typeis ReportListNode)
      return node.ListContent.Empty
    else
      return true
  }
}