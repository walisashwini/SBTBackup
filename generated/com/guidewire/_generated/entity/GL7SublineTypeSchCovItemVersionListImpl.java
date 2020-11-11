package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchCovItem.eti;GL7SublineTypeSchCovItem.eix;GL7SublineTypeSchCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeSchCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeSchCovItemVersionList {
  public GL7SublineTypeSchCovItemVersionListImpl(entity.GL7SublineTypeSchCovItem base)  {
    super(base);
  }
  
  public GL7SublineTypeSchCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeSchCovItem AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeSchCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchCovItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItmCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchCovItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchCovItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItmCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchCovItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchCovItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItmExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchCovItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchCovItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7SublnTypSchCovItemCondCost bean) {
    addToArray(entity.GL7SublineTypeSchCovItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7SublnTypSchCovItmCond bean) {
    addToArray(entity.GL7SublineTypeSchCovItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7SublnTypSchCovItemCovCost bean) {
    addToArray(entity.GL7SublineTypeSchCovItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7SublnTypSchCovItmCov bean) {
    addToArray(entity.GL7SublineTypeSchCovItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7SublnTypSchCovItemExclCost bean) {
    addToArray(entity.GL7SublineTypeSchCovItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7SublnTypSchCovItmExcl bean) {
    addToArray(entity.GL7SublineTypeSchCovItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7SublnTypSchCovItemCost bean) {
    addToArray(entity.GL7SublineTypeSchCovItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeSchCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchCovItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItmCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchCovItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchCovItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItmCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchCovItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchCovItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItmExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchCovItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchCovItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}