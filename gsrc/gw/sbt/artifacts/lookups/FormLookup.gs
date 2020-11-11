package gw.sbt.artifacts.lookups

uses gw.sbt.util.LoaderUtil
uses gw.xml.XmlElement

uses javax.xml.namespace.QName

class FormLookup extends gw.sbt.artifacts.lookups.Lookup {

  construct(namespace : String, lookup : byte[]) {
    super(namespace, lookup)
  }

  construct(namespace : String, lookup : XmlElement, xmlDeclarations: String) {
    super(namespace, lookup, xmlDeclarations)
  }

  property get Jurisdiction() : String {
    return _lookup.getChild(new QName(_namespace, "Jurisdiction"))?.$Text
  }

  property set Jurisdiction(jurisdiction : String) {
    setElementValue("Jurisdiction", jurisdiction)
  }

  property get FormPatternPublicId() : String {
    return _lookup.getChild(new QName(_namespace, "FormPattern"))?.getAttributeValue("public-id")
  }

  override property get SubjectPublicId() : String {
    throw "unimplemented"
  }

  override function copy() : FormLookup {
    return new FormLookup(_namespace, Bytes)
  }

  //form pattern lookup has 'jurisdiction' instead of 'state' attribute
  override property get IsState() : boolean {
    return not LoaderUtil.isJurisdictionCW(getConditionValue("Jurisdiction"))
  }

}