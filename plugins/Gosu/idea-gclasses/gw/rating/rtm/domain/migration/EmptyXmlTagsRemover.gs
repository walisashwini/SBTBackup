package gw.rating.rtm.domain.migration

uses java.io.ByteArrayInputStream
uses java.lang.StringBuilder
uses java.util.Scanner
uses com.google.common.base.Joiner
uses java.util.ArrayList
uses org.apache.commons.lang3.StringUtils
uses com.google.common.base.Strings

class EmptyXmlTagsRemover {
  static function removeTagsFrom(xmlBytes: byte[]): byte[] {
    var sc = new Scanner(new ByteArrayInputStream(xmlBytes), "UTF-8")
    var clearedLines = new ArrayList<String>()

    while (sc.hasNextLine()) {
      var line = sc.nextLine()
      var clearedLine = Strings.emptyToNull(removeEmptyTags(line))
      clearedLines.add(clearedLine)
    }

    return Joiner.on("\n").skipNulls().join(clearedLines).getBytes()
  }

  private static function removeEmptyTags(line: String): String {
    return line.replaceAll("\\s*<[A-Za-z0-9\\s]*\\/>\\s*", "").replaceAll("\n", "")
  }
}