package gw.lob.common.displayable

uses gw.api.domain.Clause
uses gw.lob.common.LobPropertyReference
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.util.StateProperty
uses gw.util.concurrent.LockingLazyVar

/**
 * External API for lob field meta service
 */
class LobFieldMetaSupport {
  static final var COUNTRY_WIDE = "CW"

  static var _instance = LockingLazyVar.make(\ -> new LobFieldMetaSupport())

  var _fieldMetaConfig: LobFieldMetaConfig

  construct() {
    _fieldMetaConfig = new LobFieldMetaConfig()
  }

  construct(configPath: String) {
    _fieldMetaConfig = new LobFieldMetaConfig(configPath)
  }

  static property get Instance(): LobFieldMetaSupport {
    return _instance.get()
  }

  function findFieldMeta(propRef : LobPropertyReference) : LobFieldMeta {
    var propInstInfo = propRef.PropertyInstanceInfo
    return _fieldMetaConfig.findFieldMeta(propInstInfo.TypeInfo.ContextType.RelativeName, propInstInfo.TypeInfo.Name, propInstInfo.EffectiveJurisdictionCriteria)
  }

  function findFieldMeta(propInstInfo : PropertyInstanceInfo) : LobFieldMeta {
    return _fieldMetaConfig.findFieldMeta(propInstInfo.TypeInfo.ContextType.RelativeName, propInstInfo.TypeInfo.Name, propInstInfo.EffectiveJurisdictionCriteria)
  }

  function findFieldMeta(entity : KeyableBean, propertyName : String) : LobFieldMeta {
    var stateProperty = _fieldMetaConfig.findFieldMeta(entity.IntrinsicType.RelativeName, propertyName, new EffectiveJurisdictionCriteria (getJurisdictionCode(entity), getReferenceDate(entity)))
    return stateProperty
  }

  function findWidgetTypesByEntityProperty(entity : KeyableBean): Map<String, String> {
    var criteria = new EffectiveJurisdictionCriteria (getJurisdictionCode(entity), getReferenceDate(entity))
    return getAllEntityProperties(entity, criteria)
        .entrySet().mapToKeyAndValue<String, String>(
        \ column -> column.Key,
            \ column -> column.Value.getStateOrCWValue(criteria).WidgetType.Code
    ) ?: {}
  }

  private function getAllEntityProperties(entity : KeyableBean, criteria: EffectiveJurisdictionCriteria) : Map<String, StateProperty<LobFieldMeta>> {
    var entityName = entity.IntrinsicType.RelativeName
    var columns = _fieldMetaConfig.findEntityProperties(entity.IntrinsicType.RelativeName)
    return columns.filterByValues(\ val -> val.isPropertyDefined(criteria))
  }

  function findEntityProperties(entity : KeyableBean): Set<String> {
    return findWidgetTypesByEntityProperty(entity).Keys
  }

  /**
   * Find reference date for non-coverable entity
   */
  function getDefaultPropertyReferenceDate(entity: KeyableBean): Date {
      return entity typeis EffDated ? entity.EffectiveDate : null
  }

  // FIXME Overlaps with DependencyUtil#getJurisdiction
  private function getJurisdictionCode(entity : KeyableBean) : String {
    var coverable : Coverable
    if (entity typeis Clause) {
      coverable = entity.OwningCoverable
    } else if (entity typeis Coverable) {
      coverable = entity
    }
    return DependencyUtil.getJurisdiction(coverable)
  }

  private function getReferenceDate(entity: KeyableBean) : Date {
    if (entity typeis Coverable) {
      return DependencyUtil.getCoverableReferenceDate(entity)
    } else {
      return getDefaultPropertyReferenceDate(entity)
    }
  }
}