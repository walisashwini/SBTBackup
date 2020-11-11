package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedCovItem.eti;GL7LocationSchedCovItem.eix;GL7LocationSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationSchedCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationSchedCovItemVersionList {
  public GL7LocationSchedCovItemVersionListImpl(entity.GL7LocationSchedCovItem base)  {
    super(base);
  }
  
  public GL7LocationSchedCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationSchedCovItem AsOf(java.util.Date date) {
    return (entity.GL7LocationSchedCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCovItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCovItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCovItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCovItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCovItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCovItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCovItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7LocSchedCovItemCondCost bean) {
    addToArray(entity.GL7LocationSchedCovItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7LocSchedCovItemCond bean) {
    addToArray(entity.GL7LocationSchedCovItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7LocSchedCovItemCovCost bean) {
    addToArray(entity.GL7LocationSchedCovItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7LocSchedCovItemCov bean) {
    addToArray(entity.GL7LocationSchedCovItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7LocSchedCovItemExclCost bean) {
    addToArray(entity.GL7LocationSchedCovItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7LocSchedCovItemExcl bean) {
    addToArray(entity.GL7LocationSchedCovItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7LocSchedCovItemCost bean) {
    addToArray(entity.GL7LocationSchedCovItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCovItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7LocationSchedCovItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCovItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7LocationSchedCovItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCovItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7LocationSchedCovItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCovItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}