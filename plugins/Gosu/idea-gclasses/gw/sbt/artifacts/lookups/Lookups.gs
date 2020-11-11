package gw.sbt.artifacts.lookups

uses gw.sbt.artifacts.ArtifactId
uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.util.LoaderUtil
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

abstract class Lookups<T extends Lookups> implements ContentWrapper {

  var _lookupsXml : XmlElement as XmlLookups
  var _xmlDeclarations : String as XmlDeclarations

  construct(content : XmlElement, xmlDeclarations : String = null) {
    _lookupsXml = content
    _xmlDeclarations = xmlDeclarations ?: XmlUtil.NULL_XML_DECLARATIONS
  }

  property get EmptyElement() : boolean {
    return (_lookupsXml == null) or (not _lookupsXml.$Children.HasElements)
  }

  function addAll(otherLookups : Lookups) {
    _lookupsXml.$Children.addAll(otherLookups._lookupsXml.$Children)
  }

  function addAll(otherLookups : List<Lookup>) {
    otherLookups.each(\ lookup -> add(lookup))
  }

  function add(lookup : Lookup) {
    _lookupsXml.$Children.add(lookup._lookup)
  }

  function remove(lookup : Lookup) {
    _lookupsXml.$Children.remove(lookup._lookup)
  }

  function removeAll(lookups : List<Lookup>) {
    lookups.each(\ lookup -> remove(lookup))
  }

  function filteredByJurisdiction(jurisdiction : String) : T {
    var results = newEmpty()
    results.addAll(AllLookups.where(\ lookup -> lookup.State == jurisdiction))
    return results
  }

  override property get Bytes() : byte[] {
    return XmlUtil.getBytesWithXmlDeclarations(_lookupsXml, _xmlDeclarations, true)
  }

  function getLookups(subjectPublicId : String) : List<Lookup> {
    return AllLookups.where(\ lookup -> lookup.SubjectPublicId == subjectPublicId)
  }

  function availabilityDeterminingLookupFor(artifact : ArtifactId, adoptionDate : Date) : Lookup {
    var activeLookups = activeLookupsFor(artifact, adoptionDate)
    return activeLookups.firstWhere(\ lookup -> lookup.IsState) ?: activeLookups.first()
  }

  function cwActiveLookupFor(artifact : ArtifactId, adoptionDate : Date) : Lookup {
    return activeLookupsFor(artifact, adoptionDate).firstWhere(\ lookup -> not lookup.IsState)
  }

  private function activeLookupsFor(artifact : ArtifactId, adoptionDate : Date) : List<Lookup> {
    return getLookups(artifact.PublicId).where(\ lookup ->
        LoaderUtil.isDateWithinRange(adoptionDate, lookup.StartEffectiveDate, lookup.EndEffectiveDate))
  }

  abstract property get AllLookups() : List<Lookup>

  abstract function newEmpty() : T

  abstract function copy() : T

  override function toString() : String {
    return new String(Bytes)
  }
}