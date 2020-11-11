package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineSchedCondItem.eti;GL7SublineSchedCondItem.eix;GL7SublineSchedCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineSchedCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineSchedCondItemVersionList {
  public GL7SublineSchedCondItemVersionListImpl(entity.GL7SublineSchedCondItem base)  {
    super(base);
  }
  
  public GL7SublineSchedCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineSchedCondItem AsOf(java.util.Date date) {
    return (entity.GL7SublineSchedCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCondItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItmCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCondItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCondItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItmCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCondItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCondItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItmExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCondItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineSchedCondItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7SublnSchedCondItemCondCost bean) {
    addToArray(entity.GL7SublineSchedCondItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7SublnSchedCondItmCond bean) {
    addToArray(entity.GL7SublineSchedCondItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7SublnSchedCondItemCovCost bean) {
    addToArray(entity.GL7SublineSchedCondItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7SublnSchedCondItmCov bean) {
    addToArray(entity.GL7SublineSchedCondItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7SublnSchedCondItemExclCost bean) {
    addToArray(entity.GL7SublineSchedCondItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7SublnSchedCondItmExcl bean) {
    addToArray(entity.GL7SublineSchedCondItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7SublnSchedCondItemCost bean) {
    addToArray(entity.GL7SublineSchedCondItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineSchedCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCondItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItmCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7SublineSchedCondItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCondItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItmCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7SublineSchedCondItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCondItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItmExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7SublineSchedCondItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7SublineSchedCondItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}