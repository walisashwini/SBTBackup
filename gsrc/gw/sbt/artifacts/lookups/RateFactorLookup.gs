package gw.sbt.artifacts.lookups

uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement
uses gw.sbt.artifacts.lookups.Lookup

class RateFactorLookup extends Lookup {

  construct(lookup : XmlElement, xmlDeclarations: String) {
    super(lookup, xmlDeclarations)
  }

  override function copy() : Lookup {
    return new gw.sbt.artifacts.lookups.RateFactorLookup(XmlUtil.copyElement(_lookup), XmlDeclarations)
  }

  override property get SubjectPublicId() : String {
    return getConditionValue("RateFactorPatternCode")
  }
}