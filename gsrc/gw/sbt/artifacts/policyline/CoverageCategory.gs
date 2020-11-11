package gw.sbt.artifacts.policyline

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.xml.XmlElement

class CoverageCategory extends XmlContent implements HasPublicId {

  construct(content: XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
  }

  property get Priority() : String {
    return Xml.getAttributeValue("priority")
  }

  override property get PublicId() : String {
    return _content.getAttributeValue("public-id")
  }

  property get CodeIdentifier() : String {
    return Xml.getAttributeValue("codeIdentifier")
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis CoverageCategory and
        PublicId == other.PublicId and
        CodeIdentifier == other.CodeIdentifier and
        Priority == other.Priority
  }

  override function hashCode() : int {
    return Objects.hash({PublicId, CodeIdentifier, Priority})
  }

}