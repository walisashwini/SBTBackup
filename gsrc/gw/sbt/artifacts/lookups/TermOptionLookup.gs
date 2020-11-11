package gw.sbt.artifacts.lookups

uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class TermOptionLookup extends gw.sbt.artifacts.lookups.Lookup {

  construct(covTermOptLookup : byte[]) {
    super(covTermOptLookup)
  }

  construct(covTermOptLookup : XmlElement) {
    super(covTermOptLookup)
  }

  construct(covTermOptLookup : XmlElement, xmlDeclarations : String) {
    super(covTermOptLookup, xmlDeclarations)
  }

  override property get SubjectPublicId() : String {
    return _lookup.getChild("CovTermOptCode").$Text
  }

  property get TermPatternCode() : String {
    return _lookup.getChild("CovTermPatternCode").$Text
  }

  property get TermPackCode() : String {
      return _lookup.getChild("CovTermPackCode").$Text
  }

  override function copy() : TermOptionLookup {
    return new TermOptionLookup(XmlUtil.copyElement(XmlLookup), XmlDeclarations)
  }
}