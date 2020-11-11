package gw.sbt.artifacts.metadata

uses gw.sbt.artifacts.XmlContent
uses java.util.List

class Statescope extends XmlContent {

  construct(content : byte[]) {
    super(content)
  }

  property get Line() : StatescopeLineMetadata {
    return new StatescopeLineMetadata (getChild("body").getChildren("div")
        .firstWhere( \ div -> div.getAttributeValue("class") == "Line"), XmlDeclarations)
  }

  property get AllJurisdictions() : List< StatescopeJurisdictionMetadata > {
    return getChild("body").getChildren("div")
        .where( \ div -> div.getAttributeValue("class") == "Jurisdiction")
        .map( \ div -> new StatescopeJurisdictionMetadata (div, XmlDeclarations))
  }

  property get SBTVersion() : StatescopeSBTVersionMetadata {
    return new StatescopeSBTVersionMetadata(getChild("body").getChildren("div")
        .firstWhere(\div -> div.getAttributeValue("class") == "SBTVersion"), XmlDeclarations)
  }
}