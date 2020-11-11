package gw.sbt.loader.report.render.html

uses gw.sbt.loader.report.node.ReportTableNode
uses org.slf4j.LoggerFactory

uses java.lang.IllegalStateException
uses java.util.List

class HtmlReportTableNodeRenderer {
  function render(tableNode: ReportTableNode): String {
    var headingNodeRender = new HtmlReportNodeRenderer ()
    var headingHtml = headingNodeRender.render(tableNode)
    var tableHtml = ""
    var entries = tableNode.TableContent?:{} as List<List<String>>
    if (entries.HasElements) {
      tableHtml = buildTableHtml(entries)
    }
    return headingHtml + tableHtml
  }

  private function buildTableHtml(tableEntries: List<List<String>>): String {
    var tableHtml = "<table>"
    var headings = tableEntries.first()

    var numberOfHeadings = headings.Count
    tableHtml += buildHeading(headings)
    if (tableEntries.Count == 1) {
      tableHtml += "<tr><td colspan = \"${numberOfHeadings}\">None</td></tr>"
    } else {
      tableEntries.eachWithIndex(\rowEntries, index -> {
        if (index > 0) {
          tableHtml += buildRow(rowEntries, numberOfHeadings)
        }
      })
    }
    tableHtml += "</table>"
    return tableHtml
  }

  private function buildHeading(headings: List<String>): String {
    return buildTableRowHtml(headings, "th")
  }

  private function buildRow(rowEntries: List<String>, numberOfHeadings: int): String {
    var columnsToBeFilled = numberOfHeadings - rowEntries.Count
    if (columnsToBeFilled < 0) {
      LoggerFactory.getLogger("PCA").error("Error processing report row entries: " + rowEntries)
      return ""
    }
    if (columnsToBeFilled > 0) {
      for (1..columnsToBeFilled) {
        rowEntries.add(" ")
      }
    }
    return buildTableRowHtml(rowEntries, "td")
  }

  private function buildTableRowHtml(entries: List<String>, columnTag: String): String {
    return "<tr>" + entries.map(\entry -> "<${columnTag}>" + sanitizeAndFormat(entry) + "</${columnTag}>").join("\n") + "</tr>"
  }

  private function sanitizeAndFormat(entry: String): String {
    var cleanedEntry = HtmlRendererUtil.sanitize(entry)
    if(cleanedEntry == null) {
      return ""
    } else if (cleanedEntry.startsWith(" ")) {
      var regexMatch = cleanedEntry.match("(\\s+)(.*)")
      if (regexMatch != null) {
        var leadingSpaces = regexMatch.get(0).replaceAll(" ", "&nbsp;")
        return leadingSpaces + regexMatch.get(1)
      }
    }
    return cleanedEntry
  }
}