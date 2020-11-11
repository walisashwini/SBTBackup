package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedCovItem.eti;GL7SublineSchedCovItem.eix;GL7SublineSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineSchedCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineSchedCovItemVersionList {
  public GL7SublineSchedCovItemVersionListImpl(entity.GL7SublineSchedCovItem base)  {
    super(base);
  }
  
  public GL7SublineSchedCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineSchedCovItem AsOf(java.util.Date date) {
    return (entity.GL7SublineSchedCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCovItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItmCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCovItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCovItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItmCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCovItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCovItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItmExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCovItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCovItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7SublnSchedCovItemCondCost bean) {
    addToArray(entity.GL7SublineSchedCovItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7SublnSchedCovItmCond bean) {
    addToArray(entity.GL7SublineSchedCovItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7SublnSchedCovItemCovCost bean) {
    addToArray(entity.GL7SublineSchedCovItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7SublnSchedCovItmCov bean) {
    addToArray(entity.GL7SublineSchedCovItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7SublnSchedCovItemExclCost bean) {
    addToArray(entity.GL7SublineSchedCovItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7SublnSchedCovItmExcl bean) {
    addToArray(entity.GL7SublineSchedCovItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7SublnSchedCovItemCost bean) {
    addToArray(entity.GL7SublineSchedCovItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineSchedCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCovItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItmCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7SublineSchedCovItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCovItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItmCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7SublineSchedCovItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCovItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItmExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7SublineSchedCovItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCovItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}