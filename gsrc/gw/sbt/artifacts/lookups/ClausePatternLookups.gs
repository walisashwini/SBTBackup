package gw.sbt.artifacts.lookups

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class ClausePatternLookups extends Lookups<ClausePatternLookups> {

  construct(content : XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  static function fromBytes(content : byte[]) : ClausePatternLookups {
    return new ClausePatternLookups(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  static function fromLookupList(lookups : List<Lookup>) : ClausePatternLookups {
    var xmlDeclaration = lookups.firstWhere(\ lookup -> lookup.XmlDeclarations != null).XmlDeclarations
    var result = createEmptyWith(xmlDeclaration)
    result.addAll(lookups)
    return result
  }

  static function withAllFrom(lookupsList : List<ClausePatternLookups>) : ClausePatternLookups {
    var xmlDeclaration = lookupsList.firstWhere(\ lookup -> lookup.XmlDeclarations != null).XmlDeclarations
    return lookupsList.reduce(createEmptyWith(xmlDeclaration), \ allLookups, lookups -> {
      allLookups.addAll(lookups.AllLookups)
      return allLookups
    })
  }

  static property get Empty() : ClausePatternLookups {
    return createEmptyWith(XmlUtil.NULL_XML_DECLARATIONS)
  }

  private static function createEmptyWith(xmlDeclarations : String) : ClausePatternLookups {
    return new ClausePatternLookups(new XmlElement("import"), xmlDeclarations)
  }

  function getClauseLookups(publicId : String) : List<ClauseLookup> {
    var lookupXmls = searchLookupElements(XmlLookups, publicId)
    return lookupXmls.map(\ lookupXml -> new ClauseLookup(lookupXml, XmlDeclarations))
  }

  property get ClauseLookups() : List<ClauseLookup> {
    return XmlLookups.$Children
        .where(\ child -> child.$Children.hasMatch(\ grandchild ->
            ClauseLookup.ClausePatternCodeTags.contains(grandchild.$QName.LocalPart)))
        .map(\ clauseLookupXml -> new ClauseLookup(clauseLookupXml, XmlDeclarations))
  }

  private function searchLookupElements(lookupXml: XmlElement, publicId: String, artifactElement : String = null): List<XmlElement> {
    var children = (artifactElement == null ? lookupXml.$Children : lookupXml.getChildren(artifactElement))
    return children.where(\child ->
        child.$Children.hasMatch(\grandchild -> grandchild.$Text == publicId))
  }

  property get CovTermLookups() : List<TermLookup> {
    return XmlLookups.getChildren("CovTermLookup").map(\ covTermLookupXml -> new TermLookup(covTermLookupXml, XmlDeclarations))
  }

  property get CovTermOptLookups() : List<TermOptionLookup> {
    return XmlLookups.getChildren("CovTermOptLookup").map(\covTermOptLookupXml -> new TermOptionLookup(covTermOptLookupXml, XmlDeclarations))
  }

  property get CovTermPackLookups() : List<TermOptionLookup> {
    return XmlLookups.getChildren("CovTermPackLookup").map(\covTermPackLookupXml -> new TermOptionLookup(covTermPackLookupXml, XmlDeclarations))
  }

  override property get AllLookups() : List<Lookup> {
    var results = new ArrayList<Lookup>()
    results.addAll(ClauseLookups)
    results.addAll(CovTermLookups)
    results.addAll(CovTermOptLookups)
    return results
  }

  function getCovTermLookups(covTermPublicId : String) : List<TermLookup> {
    return CovTermLookups.where( \ termLookup -> termLookup.SubjectPublicId == covTermPublicId )
  }

  function getCovTermOptLookups(covTermOptPublicId : String) : List<TermOptionLookup> {
    return CovTermOptLookups.where( \ termOptLookup -> termOptLookup.SubjectPublicId == covTermOptPublicId )
  }

  override function newEmpty() : ClausePatternLookups {
    return createEmptyWith(XmlDeclarations)
  }

  override function copy() : ClausePatternLookups {
    return ClausePatternLookups.fromBytes(Bytes)
  }
}