package gw.sbt.config.incoming

uses gw.sbt.artifacts.products.Product
uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.content.Content
uses gw.sbt.content.XmlSpecificContent
uses gw.sbt.index.SBTUpdateIndex
uses gw.xml.XmlElement
uses org.json.simple.JSONObject
uses org.json.simple.parser.JSONParser
uses java.util.Map
uses java.util.ArrayList
uses java.util.List

abstract class SBTUpdateContentsBase {

  var _cachedProduct : Product

  protected var _content: Map<String, byte[]> = {}
  protected var _xmlContent: Map<String, XmlElement> = {}

  construct(updateContents : List<Content>) {
    updateContents.each(\c -> {
      var entryName = c.Name.replaceAll("\\\\", "/")
      if (typeof c == XmlSpecificContent) {
        _xmlContent.put(entryName, (c as XmlSpecificContent ).XML)
      } else {
        _content.put(entryName, c.Bytes)
      }
    })
  }

  construct(content : Map<String, byte[]>, xmlContent: Map<String, XmlElement>) {
    _content = content
    _xmlContent = xmlContent
  }

  property get ProductAbbreviation() : String {
    if (_cachedProduct == null) {
      var productCode = ProductCode
      _cachedProduct = new Product(getContent(ConfigurationFile.productPattern(productCode)))
    }
    return _cachedProduct.Abbreviation
  }

  property get ProductCode(): String {
    var productPath = ConfigurationFile.productsFolder().Path
    var found = _content.keySet().firstWhere(\key -> key.startsWith(productPath))
    if (found == null) {
      throw "could not find product name"
    }
    return found.split("/")[4]
  }

  function getContent(configFile : ConfigurationFile) : byte[] {
    return getContent(configFile.Path)
  }

  protected function getSystemTable(filenameWithExtension: String): SystemTable {
    var content = getContent(ConfigurationFile.systable(filenameWithExtension))
    return (content == null) ? null : new SystemTable(content)
  }

  property get Index(): SBTUpdateIndex {
    var updateIndexJson = getContent("index.json")
    return new SBTUpdateIndex (new JSONParser().parse(new String(updateIndexJson)) as JSONObject)
  }

  protected function getFirstContentMatching(path: String, filePattern: String): byte[] {
    var matchedKey = _content.Keys.firstWhere(\key -> key.startsWith(path) and key.matches(filePattern))
    return matchedKey == null ? null : _content.get(matchedKey)
  }

  protected function getContentPathsOnPath(path : String) : List<String> {
    var matchedContentPaths = new ArrayList<String>()
    matchedContentPaths.addAll(_content.Keys.where( \ filePath -> filePath.toLowerCase().startsWith(path.toLowerCase())))
    matchedContentPaths.addAll(_xmlContent.Keys.where( \ filePath -> filePath.toLowerCase().startsWith(path.toLowerCase())))
    return matchedContentPaths
  }

  protected function getContent(path: String): byte[] {
    return _content.get(path)
  }

  function contentExist(path: String): boolean {
    return _content.containsKey(path) or _xmlContent.containsKey(path)
  }

  protected function getXmlContent(path: String): XmlElement {
    return _xmlContent.get(path)
  }

}
