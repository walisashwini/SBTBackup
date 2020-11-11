package gw.sbt.artifacts.policyline

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class ModifierMinMaxLookup extends XmlContent {
  construct(content : byte[]) {
    super(content)
  }

  construct(content: XmlElement) {
    super(content)
  }

  property get ModifierPatternCode() : String {
    return getAttributeValue("modifierPatternCode")
  }

  property get Maximum() : String {
    return getChild("Maximum")?.$Text
  }

  property get Minimum() : String {
    return getChild("Minimum")?.$Text
  }

  property get State() : String {
    return getChild("State")?.$Text
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis ModifierMinMaxLookup and
        ModifierPatternCode == other.ModifierPatternCode and
        Maximum == other.Maximum and
        Minimum == other.Minimum and
        State == other.State
  }

  override function hashCode() : int {
    return Objects.hash({ModifierPatternCode, Maximum, Minimum, State})
  }

}