package gw.sbt.artifacts.lookups

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.artifacts.lookups.ProductLookup
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class ProductLookups extends Lookups<ProductLookups> {

  construct(content : XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  static function fromBytes(content : byte[]) : ProductLookups {
    return new ProductLookups(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  function getProductLookup(state : String) : ProductLookup {
    return AllLookups.firstWhere(\ productLookup -> productLookup.State == state)
  }

  override property get AllLookups() : List<ProductLookup> {
    return XmlLookups.getChildren("ProductLookup")
        .map(\ productLookupXml -> new gw.sbt.artifacts.lookups.ProductLookup(productLookupXml, XmlDeclarations))
  }

  override function newEmpty() : ProductLookups {
    return new ProductLookups(new XmlElement("import"), XmlDeclarations)
  }

  override function copy() : ProductLookups {
    return ProductLookups.fromBytes(Bytes)
  }
}