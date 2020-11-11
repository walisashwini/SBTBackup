package gw.sbt.zip

uses com.google.common.io.ByteStreams
uses gw.sbt.content.Content
uses org.apache.commons.io.Charsets
uses java.io.InputStream
uses java.util.ArrayList
uses java.util.zip.ZipEntry
uses java.util.zip.ZipInputStream
uses java.util.List

class ZipExtractor {

  function extractInMemory(from : InputStream) : List<Content> {
    return extractInMemory(from, \e -> true)
  }

  function extractInMemory(from : InputStream, what : block(entry : ZipEntry) : boolean) : List<Content> {
    try {
      var list = new ArrayList<Content>()
      var zipInputStream = new ZipInputStream(from, Charsets.UTF_8)

      var entry = zipInputStream.NextEntry
      while (entry != null) {
        if (what(entry)) {
          list.add(new Content(entry.Name, ByteStreams.toByteArray(zipInputStream)))
        }

        entry = zipInputStream.NextEntry
      }

      return list
    } finally {
      if (from != null) {
        from.close()
      }
    }
  }

}