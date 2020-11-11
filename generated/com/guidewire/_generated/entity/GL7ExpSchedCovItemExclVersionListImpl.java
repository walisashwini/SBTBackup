package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemExcl.eti;GL7ExpSchedCovItemExcl.eix;GL7ExpSchedCovItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedCovItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedCovItemExclVersionList {
  public GL7ExpSchedCovItemExclVersionListImpl(entity.GL7ExpSchedCovItemExcl base)  {
    super(base);
  }
  
  public GL7ExpSchedCovItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedCovItemExcl AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedCovItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCovItemExclCost> ExpSchedCovItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedCovItemExcl.EXPSCHEDCOVITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedCovItemExclCosts(entity.GL7ExpSchedCovItemExclCost bean) {
    addToArray(entity.GL7ExpSchedCovItemExcl.EXPSCHEDCOVITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCovItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCovItemExclCostVersionList> getExpSchedCovItemExclCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedCovItemExcl.EXPSCHEDCOVITEMEXCLCOSTS_PROP.get());
  }
  
  
}