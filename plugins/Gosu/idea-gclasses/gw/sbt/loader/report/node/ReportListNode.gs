package gw.sbt.loader.report.node

uses java.util.List

/**
 * This node in the report corresponds to a title text followed by a list of text items.
 */
class ReportListNode extends ReportNode {
  var _list : List<String> as readonly ListContent

  construct(listContent : List<String>) {
    super(null)
    _list = listContent
  }

  construct(textContent : String, listContent : List<String>) {
    super(textContent)
    _list = listContent
  }
}