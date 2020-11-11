package gw.lob.common

uses gw.lob.common.dependency.ConditionalClause
uses gw.lob.common.dependency.ContainerType
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.lob.common.util.StateProperty
uses gw.api.productmodel.ClausePattern
uses gw.util.AutoMap

abstract class AbstractDependencyConfiguration extends ConfigResource {
  protected var _dependentProperties : Map<PropertyTypeInfo, StateProperty<Set<PropertyTypeInfo>>> = new AutoMap<PropertyTypeInfo, StateProperty<Set<PropertyTypeInfo>>>(\_ -> new StateProperty<HashSet<PropertyTypeInfo>>())

  protected construct (configPath : String) {
    super (configPath)
  }

  protected final function createClauseTypeInfo(clauseID : String) : PropertyTypeInfo {
    var coverableName = com.guidewire.pc.system.dependency.PCDependencies.ProductModel.getPatternByCodeIdentifier(clauseID, ClausePattern).OwningEntityType
    return new PropertyTypeInfo(clauseID, coverableName)
  }

  protected final function createCoverableTypeInfo(coverableName : String) : PropertyTypeInfo {
    return new PropertyTypeInfo(null, coverableName)
  }

  protected final function getTypedContainerName(type: String, name: String): String {
    return ContainerType.getContainerType(type).Code + "_" + name
  }

  protected final function makeConditionalClauseValueHolder(typeInfo : String) : ConditionalClause {
    return (new ConditionalClause(null, typeInfo, null, null, null))
  }
}