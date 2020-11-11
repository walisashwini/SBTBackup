package gw.sbt.artifacts.lookups

uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.artifacts.lookups.ModifierLookup
uses gw.sbt.artifacts.lookups.RateFactorLookup

class PolicyLinePatternLookups extends Lookups<PolicyLinePatternLookups> {

  construct(content : XmlElement, xmlDeclarations : String = null) {
    super(content, xmlDeclarations ?: XmlUtil.NULL_XML_DECLARATIONS)
  }

  static function fromBytes(content : byte[]) : PolicyLinePatternLookups {
    return new PolicyLinePatternLookups(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  static function fromLookupList(lookups : List<Lookup>) : PolicyLinePatternLookups {
    var xmlDeclarations = lookups.firstWhere(\ lookup -> lookup.XmlDeclarations != null).XmlDeclarations
    var result = createEmptyWith(xmlDeclarations)
    result.addAll(lookups)
    return result
  }

  private static function createEmptyWith(xmlDeclarations : String) : PolicyLinePatternLookups {
    return new PolicyLinePatternLookups(new XmlElement("import"), xmlDeclarations)
  }

  property get RateFactorLookupList() : List<RateFactorLookup> {
    return XmlLookups.getChildren("RateFactorLookup").map(\ lookupXml ->
        new RateFactorLookup(lookupXml, XmlDeclarations))
  }

  property get ModifierLookupList() : List<ModifierLookup> {
    return XmlLookups.getChildren("ModifierLookup").map(\ lookupXml ->
        new ModifierLookup(lookupXml, XmlDeclarations))
  }

  override property get AllLookups() : List<Lookup> {
    var results = new ArrayList<Lookup>()
    results.addAll(ModifierLookupList)
    results.addAll(RateFactorLookupList)
    return results
  }

  override function newEmpty() : PolicyLinePatternLookups {
    return createEmptyWith(XmlDeclarations)
  }

  override function copy() : PolicyLinePatternLookups {
    return PolicyLinePatternLookups.fromBytes(Bytes)
  }
}