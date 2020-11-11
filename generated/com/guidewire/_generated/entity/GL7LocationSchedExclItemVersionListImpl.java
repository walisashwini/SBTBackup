package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedExclItem.eti;GL7LocationSchedExclItem.eix;GL7LocationSchedExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationSchedExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationSchedExclItemVersionList {
  public GL7LocationSchedExclItemVersionListImpl(entity.GL7LocationSchedExclItem base)  {
    super(base);
  }
  
  public GL7LocationSchedExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationSchedExclItem AsOf(java.util.Date date) {
    return (entity.GL7LocationSchedExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExclItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExclItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExclItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExclItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExclItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExclItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedExclItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7LocSchedExclItemCondCost bean) {
    addToArray(entity.GL7LocationSchedExclItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7LocSchedExclItemCond bean) {
    addToArray(entity.GL7LocationSchedExclItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7LocSchedExclItemCovCost bean) {
    addToArray(entity.GL7LocationSchedExclItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7LocSchedExclItemCov bean) {
    addToArray(entity.GL7LocationSchedExclItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7LocSchedExclItemExclCost bean) {
    addToArray(entity.GL7LocationSchedExclItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7LocSchedExclItemExcl bean) {
    addToArray(entity.GL7LocationSchedExclItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7LocSchedExclItemCost bean) {
    addToArray(entity.GL7LocationSchedExclItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedExclItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7LocationSchedExclItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedExclItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7LocationSchedExclItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedExclItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7LocationSchedExclItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedExclItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}