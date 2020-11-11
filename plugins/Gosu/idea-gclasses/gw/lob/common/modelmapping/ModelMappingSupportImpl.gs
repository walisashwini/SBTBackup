package gw.lob.common.modelmapping

uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.util.concurrent.LockingLazyVar

class ModelMappingSupportImpl implements ModelMappingSupport {
  static var _instance = LockingLazyVar.make(\-> new ModelMappingSupportImpl())
  var _modelMappingConfig : ModelMappingConfigurationImpl

  static property get Instance() : ModelMappingSupportImpl {
    return _instance.get()
  }

  construct() {
    _modelMappingConfig = new ModelMappingConfigurationImpl()
  }

  construct(configPath : String) {
    _modelMappingConfig = new ModelMappingConfigurationImpl(configPath)
  }

  function isCoverableAvailable(coverableName : String, criteria : EffectiveJurisdictionCriteria) : boolean {
    return _modelMappingConfig.findContainerModelPath(COVERABLE, coverableName, criteria) != null
  }

  function isPropertyAvailable(coverableName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : boolean {
    return _modelMappingConfig.findPropertyModelPath(COVERABLE, coverableName, propertyName, criteria) != null
  }

  function isClauseAvailable(clauseName : String, criteria : EffectiveJurisdictionCriteria) : boolean {
    return _modelMappingConfig.findContainerModelPath(CLAUSE, clauseName, criteria) != null
  }

  function isCovTermAvailable(clauseName : String, covTermName : String, criteria : EffectiveJurisdictionCriteria) : boolean {
    return _modelMappingConfig.findPropertyModelPath(CLAUSE, clauseName, covTermName, criteria) != null
  }

  function isScheduleAvailable(scheduleName : String, criteria : EffectiveJurisdictionCriteria) : boolean {
    return _modelMappingConfig.findContainerModelPath(SCHEDULE, scheduleName, criteria) != null
  }

  function isScheduleItemAvailable(scheduleName : String, scheduleItemName : String, criteria : EffectiveJurisdictionCriteria) : boolean {
    return _modelMappingConfig.findPropertyModelPath(SCHEDULE, scheduleName, scheduleItemName, criteria) != null
  }

  function getCoverablePath(coverableName : String, criteria : EffectiveJurisdictionCriteria) : String {
    return _modelMappingConfig.findContainerModelPath(COVERABLE, coverableName, criteria)
  }

  function getPropertyPath(coverableName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : String {
    return _modelMappingConfig.findPropertyModelPath(COVERABLE, coverableName, propertyName, criteria)
  }

  function getClausePath(clauseName : String, criteria : EffectiveJurisdictionCriteria) : String {
    return _modelMappingConfig.findContainerModelPath(CLAUSE, clauseName, criteria)
  }

  function getCovTermPath(clauseName : String, covTermName : String, criteria : EffectiveJurisdictionCriteria) : String {
    return _modelMappingConfig.findPropertyModelPath(CLAUSE, clauseName, covTermName, criteria)
  }

  function getSchedulePath(scheduleName : String, criteria : EffectiveJurisdictionCriteria) : String {
    return _modelMappingConfig.findContainerModelPath(SCHEDULE, scheduleName, criteria)
  }

  function getScheduleItemPath(scheduleName : String, scheduleItemName : String, criteria : EffectiveJurisdictionCriteria) : String {
    return _modelMappingConfig.findPropertyModelPath(SCHEDULE, scheduleName, scheduleItemName, criteria)
  }
}