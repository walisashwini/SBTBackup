package gw.sbt.artifacts.valuedependency

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.xml.XmlElement
uses java.util.Date
uses gw.sbt.util.LoaderUtil
uses java.util.List

class ValueDependency extends XmlContent {
  var _property: String as Property
  var _container: String as Container
  var _systemTables: List<ValueDependencySystemTable> as SystemTables

  construct(content: byte[]) {
    super(content)
    init()
  }

  construct(xml: XmlElement) {
    super(xml)
    init()
  }

  private function init() {
    _property = super.getAttributeValue("property")
    _container = super.getAttributeValue("container")
    _systemTables = getChildren().map(\child -> new ValueDependencySystemTable(child))
  }

  function addSystemTable(systemTable: ValueDependencySystemTable) {
    _content.addChild(systemTable.Xml)
    _systemTables.add(systemTable)
  }

  function useAdoptionDate(adoptionDate: Date) {
    _systemTables
        .where( \ systemTable -> not LoaderUtil.isJurisdictionCW(systemTable.Jurisdiction) )
        .each( \ systemTable -> systemTable.useAdoptionDate(adoptionDate) )
  }

  property get ValueDependencyKey() : String {
    return Container + Property
  }

  function getEffectiveSystemTable(jurisdiction : String, adoptionDate : Date) : ValueDependencySystemTable {
    return VersionedConfig.getEffectiveVersionFor(SystemTables, adoptionDate, jurisdiction) as ValueDependencySystemTable
  }

  static function createEmptyValueDependency(prop: String, container: String) : ValueDependency{
    return new ValueDependency("<ValueDependency property=\"${prop}\" container=\"${container}\"/>".Bytes)
  }
}