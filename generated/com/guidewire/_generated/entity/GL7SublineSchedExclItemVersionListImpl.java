package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedExclItem.eti;GL7SublineSchedExclItem.eix;GL7SublineSchedExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineSchedExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineSchedExclItemVersionList {
  public GL7SublineSchedExclItemVersionListImpl(entity.GL7SublineSchedExclItem base)  {
    super(base);
  }
  
  public GL7SublineSchedExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineSchedExclItem AsOf(java.util.Date date) {
    return (entity.GL7SublineSchedExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedExclItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItmCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedExclItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedExclItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItmCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedExclItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedExclItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItmExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedExclItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedExclItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7SublnSchedExclItemCondCost bean) {
    addToArray(entity.GL7SublineSchedExclItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7SublnSchedExclItmCond bean) {
    addToArray(entity.GL7SublineSchedExclItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7SublnSchedExclItemCovCost bean) {
    addToArray(entity.GL7SublineSchedExclItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7SublnSchedExclItmCov bean) {
    addToArray(entity.GL7SublineSchedExclItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7SublnSchedExclItemExclCost bean) {
    addToArray(entity.GL7SublineSchedExclItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7SublnSchedExclItmExcl bean) {
    addToArray(entity.GL7SublineSchedExclItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7SublnSchedExclItemCost bean) {
    addToArray(entity.GL7SublineSchedExclItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineSchedExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedExclItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItmCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7SublineSchedExclItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedExclItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItmCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7SublineSchedExclItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedExclItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItmExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7SublineSchedExclItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedExclItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}