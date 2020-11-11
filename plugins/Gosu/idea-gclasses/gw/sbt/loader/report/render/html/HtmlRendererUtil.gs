package gw.sbt.loader.report.render.html

uses org.apache.commons.lang.StringEscapeUtils

class HtmlRendererUtil {
  static function sanitize(rawContent: String): String {
    return StringEscapeUtils.escapeHtml(rawContent)?.replaceAll("\\n", "<br/>")
  }
}