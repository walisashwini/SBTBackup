package gw.sbt.artifacts.lookups

uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class TermLookup extends gw.sbt.artifacts.lookups.Lookup {

  construct(covTermLookup : byte[]) {
    super(covTermLookup)
  }

  construct(covTermLookup : XmlElement) {
    super(covTermLookup)
  }

  construct(covTermLookup : XmlElement, xmlDeclarations : String) {
    super(covTermLookup, xmlDeclarations)
  }

  override property get SubjectPublicId() : String {
    return _lookup.getChild("CovTermPatternCode").$Text
  }

  override function copy() : TermLookup {
    return new TermLookup(XmlUtil.copyElement(XmlLookup), XmlDeclarations)
  }
}