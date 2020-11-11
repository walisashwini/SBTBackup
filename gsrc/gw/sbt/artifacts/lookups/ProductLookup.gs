package gw.sbt.artifacts.lookups

uses gw.xml.XmlElement

class ProductLookup extends gw.sbt.artifacts.lookups.Lookup {

  construct(productLookup : byte[]) {
    super(productLookup)
  }

  construct(productLookup : XmlElement, xmlDeclarations : String) {
    super(productLookup, xmlDeclarations)
  }

  override property get SubjectPublicId() : String {
    return _lookup.getChild("ProductCode").$Text
  }

  override function copy() : gw.sbt.artifacts.lookups.ProductLookup {
    return new gw.sbt.artifacts.lookups.ProductLookup(Bytes)
  }
}
