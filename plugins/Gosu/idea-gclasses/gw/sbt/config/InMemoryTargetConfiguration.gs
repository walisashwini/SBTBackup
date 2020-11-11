package gw.sbt.config

uses gw.xml.IXMLNodeFormat
uses gw.xml.XMLNode

uses java.io.File
uses java.io.FileOutputStream

class InMemoryTargetConfiguration extends AbstractTargetConfiguration {
  var _files = new HashMap<String, byte[]>()

  override function exists(configFile: ConfigurationFile): boolean {
    return _files.containsKey(configFile.Path)
  }

  override function contents(configFile: ConfigurationFile): byte[] {
    return _files.get(configFile.Path)  ?: {}
  }

  // if modifying this, also might want to modify FileTargetConfiguration
  override function write(configFile: ConfigurationFile, content: byte[]) {

    var tempFile = File.createTempFile("xmlNode-temp", "")
    tempFile.deleteOnExit()

    if ((isClausePatternXml(configFile.Folder, configFile.Name) or isEntityFile(configFile.Folder, configFile.Name))
        and content.length > 0) {
      var newXmlNode = XMLNode.parse(content)
      newXmlNode.writeTo(tempFile, IXMLNodeFormat.DIFF_FRIENDLY)
      _files.put(configFile.Path, tempFile.readBytes())
    } else {
      _files.put(configFile.Path, content)
    }
  }

  override function delete(configFile: ConfigurationFile) {
    _files.remove(configFile.Path)
  }

  override function listFileNames(configFile : ConfigurationFile) : List<String> {
    var fileNames = new ArrayList<String>()
    var pathsInFolder = _files.keySet().where(\path -> path.startsWith(configFile.Folder))
    if (pathsInFolder != null) {
      pathsInFolder.each(\path -> fileNames.add(path.substring(path.lastIndexOf("/") + 1)))
    }
    return fileNames
  }

  override function listFilePaths(configFile : ConfigurationFile) : List<String> {
    var filePaths = new ArrayList<String>()
    var pathsInFolder = _files.keySet().where(\path -> path.startsWith(configFile.Folder))
    if (pathsInFolder != null) {
      pathsInFolder.each(\path -> filePaths.add(path.substring(configFile.Folder.length())))
    }
    return filePaths
  }

  function copyConfigFromFolder(configFolder : File){
    copyConfigFromFolder(configFolder, "")
  }

  private function copyConfigFromFolder(configFolder : File, directory : String){
    configFolder.listFiles().each(\file -> {
      var path = directory + file.Name
      if (file.Directory) {
        copyConfigFromFolder(file, path + "/")
        _files.put(path, null)
      } else {
        _files.put(path, file.readBytes())
      }
    })
  }
}