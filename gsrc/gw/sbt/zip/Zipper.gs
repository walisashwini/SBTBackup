package gw.sbt.zip

uses gw.sbt.content.Content

uses java.io.ByteArrayOutputStream
uses java.util.zip.ZipEntry
uses java.util.zip.ZipOutputStream

class Zipper {

  function zip(contents : List< Content >) : byte[] {
    var output = new ByteArrayOutputStream()
    var result = new ZipOutputStream(output)
    contents.each( \ content -> {
      result.putNextEntry(new ZipEntry(content.Name))
      result.write(content.Bytes)
      result.closeEntry()
    })
    result.close()

    return output.toByteArray()
  }
}