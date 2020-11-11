package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedExclItem.eti;GL7ExposureSchedExclItem.eix;GL7ExposureSchedExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureSchedExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureSchedExclItemVersionList {
  public GL7ExposureSchedExclItemVersionListImpl(entity.GL7ExposureSchedExclItem base)  {
    super(base);
  }
  
  public GL7ExposureSchedExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureSchedExclItem AsOf(java.util.Date date) {
    return (entity.GL7ExposureSchedExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExclItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExclItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExclItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExclItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExclItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExclItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedExclItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7ExpSchedExclItemCondCost bean) {
    addToArray(entity.GL7ExposureSchedExclItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7ExpSchedExclItemCond bean) {
    addToArray(entity.GL7ExposureSchedExclItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7ExpSchedExclItemCovCost bean) {
    addToArray(entity.GL7ExposureSchedExclItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7ExpSchedExclItemCov bean) {
    addToArray(entity.GL7ExposureSchedExclItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7ExpSchedExclItemExclCost bean) {
    addToArray(entity.GL7ExposureSchedExclItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7ExpSchedExclItemExcl bean) {
    addToArray(entity.GL7ExposureSchedExclItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7ExpSchedExclItemCost bean) {
    addToArray(entity.GL7ExposureSchedExclItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureSchedExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExclItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExclItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExclItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExclItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExclItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExclItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedExclItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}