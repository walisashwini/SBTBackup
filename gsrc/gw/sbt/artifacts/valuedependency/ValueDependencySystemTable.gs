package gw.sbt.artifacts.valuedependency

uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class ValueDependencySystemTable extends VersionedConfig {
  var _name : String as Name
  var _keyColumns : List<ValueDependencySystemTableKeyColumn> as KeyColumns
  var _valueColumn : String as ValueColumn

  construct(content : byte[]) {
    super(content, ContainerPropertyConfigType.VALUE_DEPENDENCY_CONFIG)
    init()
  }

  construct(xml : XmlElement) {
    super(xml, ContainerPropertyConfigType.VALUE_DEPENDENCY_CONFIG)
    init()
  }

  private function init() {
    _name = super.getAttributeValue("name")
    _keyColumns = getChildren("KeyColumn").map(\keyColumnChild -> {
      var keyColumn = new ValueDependencySystemTableKeyColumn() {
        :Name = keyColumnChild.getAttributeValue("name")
      }
      var paths = keyColumnChild.getChildren("Path")
      if (not paths.Empty) { // KeyColumn has at most only one PATH.
        keyColumn.Path = paths[0].$Text
      }
      return keyColumn
    })
    _valueColumn = getChild("ValueColumn")?.$Text
  }

  function useAdoptionDate(adoptionDate : Date) {
    if(ExpiryDate != null) {
      // Let the setter in VersionedConfig take care of validation on expiry/effective dates
      ExpiryDate = adoptionDate
    } else {
      EffectiveDate = adoptionDate
    }
  }

  override function copy() : ValueDependencySystemTable {
    return new ValueDependencySystemTable(XmlUtil.copyElement(_content))
  }

  override property get ElementNames() : List<String> {
    return ContainerPropertyConfigType.VALUE_DEPENDENCY_CONFIG.VersionElements
  }

}