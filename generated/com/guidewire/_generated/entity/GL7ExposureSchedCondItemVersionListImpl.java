package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureSchedCondItem.eti;GL7ExposureSchedCondItem.eix;GL7ExposureSchedCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureSchedCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureSchedCondItemVersionList {
  public GL7ExposureSchedCondItemVersionListImpl(entity.GL7ExposureSchedCondItem base)  {
    super(base);
  }
  
  public GL7ExposureSchedCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureSchedCondItem AsOf(java.util.Date date) {
    return (entity.GL7ExposureSchedCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCondCost> ConditionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCondItem.CONDITIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCondItem.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCovCost> CoverageCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCondItem.COVERAGECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCondItem.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemExclCost> ExclusionCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCondItem.EXCLUSIONCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCondItem.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCost> ScheduleItemCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureSchedCondItem.SCHEDULEITEMCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditionCosts(entity.GL7ExpSchedCondItemCondCost bean) {
    addToArray(entity.GL7ExposureSchedCondItem.CONDITIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7ExpSchedCondItemCond bean) {
    addToArray(entity.GL7ExposureSchedCondItem.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverageCosts(entity.GL7ExpSchedCondItemCovCost bean) {
    addToArray(entity.GL7ExposureSchedCondItem.COVERAGECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7ExpSchedCondItemCov bean) {
    addToArray(entity.GL7ExposureSchedCondItem.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusionCosts(entity.GL7ExpSchedCondItemExclCost bean) {
    addToArray(entity.GL7ExposureSchedCondItem.EXCLUSIONCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7ExpSchedCondItemExcl bean) {
    addToArray(entity.GL7ExposureSchedCondItem.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToScheduleItemCosts(entity.GL7ExpSchedCondItemCost bean) {
    addToArray(entity.GL7ExposureSchedCondItem.SCHEDULEITEMCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureSchedCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCondCostVersionList> getConditionCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCondItem.CONDITIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCondItem.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCovCostVersionList> getCoverageCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCondItem.COVERAGECOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCondItem.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemExclCostVersionList> getExclusionCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCondItem.EXCLUSIONCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCondItem.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCostVersionList> getScheduleItemCosts() {
    return (java.util.List)getArray(entity.GL7ExposureSchedCondItem.SCHEDULEITEMCOSTS_PROP.get());
  }
  
  
}