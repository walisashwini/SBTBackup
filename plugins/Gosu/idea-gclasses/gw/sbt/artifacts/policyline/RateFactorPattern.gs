package gw.sbt.artifacts.policyline

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.xml.XmlElement

class RateFactorPattern extends XmlContent implements HasPublicId {
  private static final var RATE_FACTOR_TYPE_ATTRIBUTE = "rateFactorType"

  construct(content: XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
  }

  property get RateFactorType() : String {
    return Xml.getAttributeValue(RATE_FACTOR_TYPE_ATTRIBUTE)
  }

  property get DefaultMinimum() : String {
    return Xml.getAttributeValue("defaultMinimum")
  }

  property get DefaultMaximum() : String {
    return Xml.getAttributeValue("defaultMaximum")
  }

  property get Priority() : String {
    return Xml.getAttributeValue("priority")
  }

  property get LookupTableName() : String {
    return Xml.getAttributeValue("lookupTableName")
  }

  property get RefCode() : String {
    return Xml.getAttributeValue("refCode")
  }

  override property get PublicId() : String {
    return _content.getAttributeValue("public-id")
  }

  property get CodeIdentifier() : String {
    return Xml.getAttributeValue("codeIdentifier")
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis RateFactorPattern and
        PublicId == other.PublicId and
        CodeIdentifier == other.CodeIdentifier and
        Priority == other.Priority and
        DefaultMinimum == other.DefaultMinimum and
        DefaultMaximum == other.DefaultMaximum and
        LookupTableName == other.LookupTableName and
        RefCode == other.RefCode
  }

  override function hashCode() : int {
    return Objects.hash({PublicId, CodeIdentifier, Priority, DefaultMinimum, DefaultMaximum, LookupTableName, RefCode})
  }

}