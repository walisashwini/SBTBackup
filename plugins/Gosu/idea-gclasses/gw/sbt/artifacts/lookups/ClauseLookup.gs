package gw.sbt.artifacts.lookups

uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class ClauseLookup extends gw.sbt.artifacts.lookups.Lookup {

  construct(clauseLookup : byte[]) {
    super(clauseLookup)
  }

  construct(clauseLookup : XmlElement) {
    super(clauseLookup)
  }

  construct(clauseLookup : XmlElement, xmlDeclarations: String) {
    super(clauseLookup, xmlDeclarations)
  }

  private construct(backingEntity : String) {
    super("<${backingEntity}></${backingEntity}>".Bytes)
  }

  static property get ClausePatternCodeTags() : List<String> {
    return {"CoveragePatternCode", "ConditionPatternCode", "ExclusionPatternCode"}
  }

  override property get SubjectPublicId() : String {
    return ClausePatternCodeTags
        .map(\ subjectCodeCandidate -> _lookup.getChild(subjectCodeCandidate).$Text)
        .singleWhere(\ value -> value != null)
  }

  property get PolicyLinePatternCode() : String {
    return _lookup.getChild("PolicyLinePatternCode").$Text
  }

  property set PolicyLinePatternCode(code : String) {
    setElementValue("PolicyLinePatternCode", code)
  }

  override function copy() : ClauseLookup {
    return new ClauseLookup(XmlUtil.copyElement(XmlLookup), XmlDeclarations)
  }
}