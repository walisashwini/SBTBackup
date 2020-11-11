package gw.sbt.artifacts.typelists

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class TypeFilterInclude extends XmlContent implements Comparable<TypeFilterInclude>{
  construct(content: XmlElement) {
    super(content)
  }

  property get Code(): String {
    return getAttributeValue("code")
  }


  override function compareTo(other : TypeFilterInclude) : int {
    return this.Code.compareTo(other.Code)
  }

  override function equals(other : Object) : boolean {
    return other typeis TypeFilterInclude and Code == other.Code
  }

  override function hashCode() : int {
    return Objects.hash({Code})
  }

}