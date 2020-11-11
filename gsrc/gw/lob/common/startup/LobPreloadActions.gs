package gw.lob.common.startup

uses com.guidewire.bizrules.system.dependency.BizRulesDependencies
uses com.guidewire.pc.system.dependency.PCDependencies
uses com.guidewire.pl.domain.community.impl.GroupCacheImpl
uses com.guidewire.pl.system.dependency.PLDependencies
uses gw.api.system.PCDependenciesGateway
uses gw.lob.common.LobPropertyService
uses gw.lob.common.costdata.CostDataMappingConfiguration
uses gw.lob.common.dependency.AvailabilitySupport
uses gw.lob.common.dependency.ExistenceSupport
uses gw.lob.common.dependency.v2.ValueDependencySupport
uses gw.lob.common.displayable.LobFieldMetaSupport
uses gw.lob.common.productmodel.ClauseTermMetaSupport
uses gw.lob.common.sbt.schedules.ScheduleConfigSource
uses gw.lob.common.service.sbt.ServiceLocator
uses gw.lob.common.validation.ValidationSupport
uses com.guidewire.pl.system.gosu.entity.impl.ScriptParameterCacheImpl

class LobPreloadActions {

  static function loadLobConfigurations() {
    LobFieldMetaSupport.Instance.getClass()
    ExistenceSupport.Instance.getClass()
    ValueDependencySupport.Instance.getClass()
    LobPropertyService.Instance.getClass()
    AvailabilitySupport.Instance.getClass()
    ValidationSupport.Instance.getClass()
    CostDataMappingConfiguration.Instance.getClass()
    ClauseTermMetaSupport.Instance.getClass()
    ServiceLocator.get(ScheduleConfigSource)
  }

  static function loadPCCaches() {
    PCDependenciesGateway.getRateBookCache().getAllRateBooks()
    PCDependenciesGateway.getFormPatternCache().getAllFormPatterns()
    BizRulesDependencies.getBizRulesCache().getEvaluatedVersions(null)
    PCDependencies.getCustomFormInferenceCache().getCustomFormInferenceClass(null)
    var scriptParameterCache = PLDependencies.getScriptParameterCache()
    if (scriptParameterCache typeis ScriptParameterCacheImpl) {
      scriptParameterCache.getCachedValue(null)
    }
    GroupCacheImpl.getInstance().getRootGroup()
  }
}