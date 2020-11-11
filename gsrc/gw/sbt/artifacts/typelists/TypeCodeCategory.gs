package gw.sbt.artifacts.typelists

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class TypeCodeCategory extends XmlContent implements Comparable<TypeCodeCategory> {
  construct(content : XmlElement) {
    super(content)
  }

  property get Code() : String {
    return getAttributeValue("code")
  }

  property get TypeList() : String {
    return getAttributeValue("typelist")
  }

  override function compareTo(other : TypeCodeCategory) : int {
    return this.Code.compareTo(other.Code)
  }

  override function equals(other : Object) : boolean {
    return other typeis TypeCodeCategory
        and Code == other.Code
        and TypeList == other.TypeList
  }

  override function hashCode() : int {
    return Objects.hash({Code, TypeList})
  }
}