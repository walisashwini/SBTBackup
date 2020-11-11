package gw.sbt.util

uses gw.xml.XmlElement
uses org.apache.commons.lang.StringEscapeUtils

uses java.lang.Double
uses java.lang.NumberFormatException
uses java.lang.StringBuffer
uses java.util.Collection
uses java.util.Date
uses java.text.SimpleDateFormat
uses java.util.regex.Pattern

class Formatter {
  static function prefix(all: Collection<Object>, with: String): String {
    if (all == null or all.Empty) return ""
    return all.map(\o -> prefix(o, with)).join("")
  }

  static function prefix(o: Object, with: String): String {
    var s = (o != null) ? o.toString() : "N/A"
    return s.split("\\n").map(\line -> with + line).join("\n") + "\n"
  }

  static function prefixAfterFirstLine(o: Object, with: String): String {
    var s = (o != null) ? o.toString() : "N/A"
    var lines = s.split("\\n").toList()
    var prefixed = new StringBuffer()
    for (i in 0..|lines.Count) {
      var line = lines[i]
      prefixed.append(i == 0 ? line : with + line)
      prefixed.append("\n")
    }
    return prefixed.toString()
  }

  /**
   * An implementation of formatting rate factor values (including parameters and rate values)
   * 1. null to ""
   * 2. trimming leading and trailing spaces
   * 3. removing trailing zeros for String representing numerical values.
   * Regex is used instead of using DecimalFormat in combination with parsing/valueOf for a slightly better
   * performance.
   */
  static function formatRateFactorValue(input:String): String {
    if (not input.HasContent) {
      return ""
    }
    input = input.trim()
    var numericValue: Double = null
    try {
      numericValue = Double.valueOf(input)
    } catch (e: NumberFormatException) {
      return input
    }

    if (input.toUpperCase().contains("E")) {
      input = String.valueOf(numericValue)
    }

    if (input.contains(".")) {
      var removed = input.replaceAll("\\.0*$", "")
      if (input.equals(removed)) {
        removed = input.replaceAll("0*$", "")
      }
      return removed
    }

    return input
  }

  static function dateToString(date: Date, format: String = "MM/dd/yyyy"): String {
    return date == null ? "" : new SimpleDateFormat(format).format(date)
  }

  static function stringToDate(dateInStr: String, format: String = "yyyy-MM-dd"): Date {
    var date : Date = null
    var supportedFormats = {format, "MM/dd/yyyy", "yyyy-MM-dd HH:mm:ss.SSS", "MM/dd/yyyy HH:mm:ss.SSS"}
    for(supportedFormat in supportedFormats) {
      try {
        date = dateInStr.HasContent ? new SimpleDateFormat(supportedFormat).parse(dateInStr) : null
        break
      } catch (e : Exception) {}
    }

    return date
  }

  static function extractDate(dateXml: XmlElement, format: String = "yyyy-MM-dd")  : Date {
    return (dateXml == null or dateXml.$Text.Empty)
        ? null
        : Formatter.stringToDate(dateXml.$Text, format)
  }

  private static var CDATA_SCRIPT_TAGS = {
      "AvailabilityScript",
      "ExistenceScript",
      "InitializeScript"
  }

  //unescape and wrap with CDATA
  static function cdataScript(content : String) : String {
    CDATA_SCRIPT_TAGS.each(\tag -> {
      if (content.indexOf(tag) != -1) {
        content = unescapeAndWrapIntoCDataSection(content, tag)
      }
    })
    return content
  }

  private static function unescapeAndWrapIntoCDataSection(content : String, tag : String) : String {
    var output = new StringBuffer()
    var pattern = Pattern.compile("<" + tag + ">(.*?)</" + tag + ">", Pattern.DOTALL) //DOTALL Mode: match even in multiple lines
    var matcher = pattern.matcher(content)
    while (matcher.find()) {
      var unescapedScript = StringEscapeUtils.unescapeXml(matcher.group(1))  //unescape
      // escape '\' and '$', because Matcher.appendReplacement will remove the '\' and '$'  (note: a literal "\" in regex is "\\\\")
      unescapedScript = unescapedScript.replaceAll("\\\\", "\\\\\\\\" ).replaceAll("\\$", "\\\\\\$")
      matcher.appendReplacement(output, "<" + tag + "><![CDATA[" + unescapedScript + "]]></" + tag + ">") // wrap into CDATA section
    }
    matcher.appendTail(output)
    return output.toString()
  }
}