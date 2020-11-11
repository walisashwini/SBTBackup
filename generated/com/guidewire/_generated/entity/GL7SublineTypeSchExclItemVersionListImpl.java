package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeSchExclItem.eti;GL7SublineTypeSchExclItem.eix;GL7SublineTypeSchExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeSchExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeSchExclItemVersionList {
  public GL7SublineTypeSchExclItemVersionListImpl(entity.GL7SublineTypeSchExclItem base)  {
    super(base);
  }
  
  public GL7SublineTypeSchExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeSchExclItem AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeSchExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchExclItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItmCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchExclItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchExclItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItmCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchExclItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchExclItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItmExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchExclItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeSchExclItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7SublnTypSchExclItemCondCost bean) {
    addToArray(entity.GL7SublineTypeSchExclItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7SublnTypSchExclItmCond bean) {
    addToArray(entity.GL7SublineTypeSchExclItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7SublnTypSchExclItemCovCost bean) {
    addToArray(entity.GL7SublineTypeSchExclItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7SublnTypSchExclItmCov bean) {
    addToArray(entity.GL7SublineTypeSchExclItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7SublnTypSchExclItemExclCost bean) {
    addToArray(entity.GL7SublineTypeSchExclItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7SublnTypSchExclItmExcl bean) {
    addToArray(entity.GL7SublineTypeSchExclItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7SublnTypSchExclItemCost bean) {
    addToArray(entity.GL7SublineTypeSchExclItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeSchExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchExclItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItmCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchExclItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchExclItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItmCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchExclItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchExclItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItmExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchExclItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeSchExclItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}