package gw.lob.common.util

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.lob.common.exception.LobConfigException
uses gw.xml.XmlElement

uses java.io.File
uses java.lang.Exception
uses java.util.HashMap

/**
 * Utility to translate XML tree into Map
 */
class XmlConfigUtil {

  static function getConfigFile(configPath: String): File {
    var configFile: File

    try {
      configFile = APIConfigFileAccess.INSTANCE.getConfigFile(configPath)
    } catch (e: Exception) {
      throw new LobConfigException(configPath, e.Message)
    }

    if (configFile == null or not configFile.exists()) {
      throw new LobConfigException(configPath, "Config file does not exist")
    }

    return configFile
  }

  static function mapXmlElement(node: XmlElement, getKey(elt: XmlElement): String, getLeaf(elt: XmlElement): Object): Object {
    var leaf = getLeaf(node)
    if (leaf != null) {
      return leaf
    }

    // simple element is a leaf node
    if (isSimpleType(node)) {
      return node
    }

    var result = new HashMap<String, Object>()
    node.$Children.each(\child -> {
      var key = getKey(child)
      var value = mapXmlElement(child, getKey, getLeaf)
      if (key != null && value != null) {
        result.put(key, value)
      }
    })

    return result
  }

  static private function isSimpleType(node: XmlElement): boolean {
    return node.$SimpleValue != null
  }
}