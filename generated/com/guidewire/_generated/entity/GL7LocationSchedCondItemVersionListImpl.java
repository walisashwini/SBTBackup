package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationSchedCondItem.eti;GL7LocationSchedCondItem.eix;GL7LocationSchedCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationSchedCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationSchedCondItemVersionList {
  public GL7LocationSchedCondItemVersionListImpl(entity.GL7LocationSchedCondItem base)  {
    super(base);
  }
  
  public GL7LocationSchedCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationSchedCondItem AsOf(java.util.Date date) {
    return (entity.GL7LocationSchedCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCondItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCondItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCondItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCondItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCondItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCondItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationSchedCondItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7LocSchedCondItemCondCost bean) {
    addToArray(entity.GL7LocationSchedCondItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7LocSchedCondItemCond bean) {
    addToArray(entity.GL7LocationSchedCondItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7LocSchedCondItemCovCost bean) {
    addToArray(entity.GL7LocationSchedCondItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7LocSchedCondItemCov bean) {
    addToArray(entity.GL7LocationSchedCondItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7LocSchedCondItemExclCost bean) {
    addToArray(entity.GL7LocationSchedCondItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7LocSchedCondItemExcl bean) {
    addToArray(entity.GL7LocationSchedCondItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7LocSchedCondItemCost bean) {
    addToArray(entity.GL7LocationSchedCondItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationSchedCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCondItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7LocationSchedCondItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCondItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7LocationSchedCondItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCondItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7LocationSchedCondItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7LocationSchedCondItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}