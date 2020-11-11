package gw.sbt.config

uses com.guidewire.pc.domain.productmodel.ProductModelNodeLoaderImpl
uses gw.xml.IXMLNodeFormat
uses gw.xml.XMLNode
uses org.apache.commons.io.FileUtils
uses org.apache.commons.io.FilenameUtils

uses java.io.BufferedWriter
uses java.io.File
uses java.io.FileOutputStream
uses java.io.FileWriter
uses java.io.OutputStreamWriter
uses java.nio.charset.StandardCharsets

class FileTargetConfiguration extends AbstractTargetConfiguration {

  var _config : File
  var _devModeBasePcConfig: File

  construct(config : File = null) {
    _config = config ?: new File(ProductModelNodeLoaderImpl.getProductModelConfigDir(), "../../../")

    if(config == null and not _config.AbsolutePath.contains("module")) {
      _devModeBasePcConfig = new File(ProductModelNodeLoaderImpl.getProductModelConfigDir(), "../../../../pc")
    }
  }

  property get FileName () : String {
    return _config.CanonicalFile.Name
  }

  override function exists(configFile : ConfigurationFile) : boolean {
    return absolutePath(configFile) != null
  }

  function folderExists(configFile : ConfigurationFile) : boolean {
    return folderPath(configFile) != null
  }

  function mkdirs(configFile : ConfigurationFile) {
    new File(_config, configFile.Folder).mkdirs()
  }

  override function contents(configFile: ConfigurationFile) : byte[] {
    final var file = absolutePath(configFile)
    return file == null ? {} : file.readBytes()
  }

  function append(configFile : ConfigurationFile, content : byte[]) {
    using (var output = new FileWriter(new File(folderPath(configFile), configFile.Name), true)) {
      output.append(new String(content))
    }
  }

  override function listFileNames(configFile : ConfigurationFile) : List<String> {
    final var file = absolutePath(configFile)
    var files = file.listFiles()
    return files == null ? {} : files*.getName().toList()
  }

  override function listFilePaths(configFile : ConfigurationFile) : List<String> {
    var folder = absolutePath(configFile)
    var filesList = FileUtils.listFiles(folder, null, true).toList()
    var files : List<String> = {}
    filesList.each(\file -> {
      var fileName = FilenameUtils.separatorsToUnix(file.getPath())
      var lastIndex = fileName.lastIndexOf(configFile.Folder)
      fileName = fileName.substring(lastIndex + configFile.Folder.length)
      files.add(fileName)
    } )
    return files
  }

  // if modifying this, also might want to modify InMemoryTargetConfiguration
  override function write(configFile : ConfigurationFile, content : byte[]) {
    if (!folderExists(configFile)) {
      mkdirs(configFile)
    }

    var outputFile = new File(folderPath(configFile), configFile.Name)
    var outputStream = new FileOutputStream(outputFile)

    if (isClausePatternXml(outputFile.Path, configFile.Name) or isEntityFile(outputFile.Path, configFile.Name)) {
      var newXmlNode = XMLNode.parse(content)
      newXmlNode.writeTo(outputStream, IXMLNodeFormat.DIFF_FRIENDLY)
    } else {
      outputStream.write(content)
    }
  }

  override function writeUnicode(configFile : ConfigurationFile, content : byte[]) {
    if (!folderExists(configFile)) {
      mkdirs(configFile)
    }

    using (var output = new OutputStreamWriter(new FileOutputStream(new File(folderPath(configFile), configFile.Name)), StandardCharsets.UTF_8)) {
      output.write(new String (content))
      output.close()
    }
  }

  override function delete(configFile : ConfigurationFile) {
    new File(folderPath(configFile), configFile.Name).delete()
  }

  function absolutePath(configFile: ConfigurationFile) : File {
    return path(configFile.Path)
  }

  function folderPath(configFile: ConfigurationFile) : File {
    return path(configFile.Folder)
  }

  private function path(pathOrFolder : String) : File {
    var f = new File(_config, pathOrFolder)

    if(not f.exists() and _devModeBasePcConfig != null) {
      f = new File(_devModeBasePcConfig, pathOrFolder)
    }

    return f.exists() ? f : null
  }
}