package gw.sbt.config

abstract class AbstractTargetConfiguration implements TargetConfiguration {
  override function writeUnicode(configFile : ConfigurationFile, content : byte[]) {
    write (configFile, content)
  }
  override function deleteUnicode(configFile : ConfigurationFile) {
    delete (configFile)
  }

  function isClausePatternXml(folderPath : String, fileName : String) : boolean {
    return folderPath.matches(".*resources/productmodel/policylinepatterns/.*/coveragepatterns/.*") and
        not fileName.endsWith("-lookups.xml") and
        fileName.endsWith(".xml")
  }

  function isEntityFile(folderPath : String, fileName : String) : boolean {
    return folderPath.matches(".*extensions/entity/.*") and
        (fileName.endsWith(".eti") or fileName.endsWith(".etx"))
  }

}