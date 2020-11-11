package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemExcl.eti;GL7LocSchedCovItemExcl.eix;GL7LocSchedCovItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedCovItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedCovItemExclVersionList {
  public GL7LocSchedCovItemExclVersionListImpl(entity.GL7LocSchedCovItemExcl base)  {
    super(base);
  }
  
  public GL7LocSchedCovItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedCovItemExcl AsOf(java.util.Date date) {
    return (entity.GL7LocSchedCovItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemExclCost> LocSchedCovItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedCovItemExcl.LOCSCHEDCOVITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedCovItemExclCosts(entity.GL7LocSchedCovItemExclCost bean) {
    addToArray(entity.GL7LocSchedCovItemExcl.LOCSCHEDCOVITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemExclCostVersionList> getLocSchedCovItemExclCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedCovItemExcl.LOCSCHEDCOVITEMEXCLCOSTS_PROP.get());
  }
  
  
}