package gw.sbt.zip

uses java.io.BufferedInputStream
uses java.io.BufferedOutputStream
uses java.io.ByteArrayInputStream
uses java.io.ByteArrayOutputStream
uses java.io.File
uses java.io.FileInputStream
uses java.io.FileOutputStream
uses java.io.InputStream
uses java.util.zip.ZipEntry
uses java.util.zip.ZipOutputStream

class ZipArchive {

  var _entries : Map<String, byte[] > = {}

  function add(name : String, content : String) : ZipArchive {
    _entries.put(name, content.Bytes)
    return this
  }

  function add(name : String, content : byte[]) : ZipArchive {
    _entries.put(name, content)
    return this
  }

  function create() : InputStream {
    return new ByteArrayInputStream(createByteArray())
  }

  function createByteArray() : byte[] {
    return createZipByteStream(_entries)
  }

  function createZipFile (dirName : String, fileName : String) {
    final var DEFAULT_BUFFER_SIZE= 2048
    var data = new byte[DEFAULT_BUFFER_SIZE];

    var filePath= (dirName!= null? dirName : "")+ File.separator+ (fileName!= null? fileName : "")

    var fouts= new FileOutputStream(filePath)
    var zipouts= new ZipOutputStream(new BufferedOutputStream(fouts))

    _entries.eachKeyAndValue(\ key, value -> {
      var fins = new FileInputStream(dirName + File.separator + key);
      var bufferedIns= new BufferedInputStream(fins, DEFAULT_BUFFER_SIZE);
      var zipEntry = new ZipEntry(key);
      zipouts.putNextEntry(zipEntry);
      var count = bufferedIns.read(data, 0, DEFAULT_BUFFER_SIZE);
      while (count != -1) {
        zipouts.write(data, 0, count);

        count = bufferedIns.read(data, 0, DEFAULT_BUFFER_SIZE);
      }

      bufferedIns.close();
      zipouts.closeEntry()

    })
    zipouts.close()
    fouts.close()
  }

  protected function createZipByteStream(entries : Map<String, byte[]>) : byte[] {
    var output = new ByteArrayOutputStream()
    var zipOut = new ZipOutputStream(output)
    entries.eachKeyAndValue( \ key, value -> {
      var zipEntry = new ZipEntry(key)
      zipOut.putNextEntry(zipEntry)
      zipOut.write(value)
      zipOut.closeEntry()
    })
    zipOut.close()
    output.close()
    return output.toByteArray()
  }

}