package gw.sbt.loader.report.node

uses java.util.List

/**
 * This node in the report corresponds to a title text followed by a table of text items.
 */
class ReportTableNode extends ReportNode {
  // A List of List is used to simplifying the logic for displaying the table content, even though
  // checking to see if a particular item or row with certain column values exist may not be as simple.
  // Using dsl should solve the latter issue in unit tests while keeping the test cases clean.
  var _table : List<List<String>> as readonly TableContent

  construct(tableContent : List<List<String>>) {
    super(null)
    _table = tableContent
  }

  construct(textContent : String, tableContent : List<List<String>>) {
    super(textContent)
    _table = tableContent
  }
}