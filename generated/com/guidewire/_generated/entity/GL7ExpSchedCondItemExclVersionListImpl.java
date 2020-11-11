package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemExcl.eti;GL7ExpSchedCondItemExcl.eix;GL7ExpSchedCondItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedCondItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedCondItemExclVersionList {
  public GL7ExpSchedCondItemExclVersionListImpl(entity.GL7ExpSchedCondItemExcl base)  {
    super(base);
  }
  
  public GL7ExpSchedCondItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedCondItemExcl AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedCondItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemExclCost> ExpSchedCondItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedCondItemExcl.EXPSCHEDCONDITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedCondItemExclCosts(entity.GL7ExpSchedCondItemExclCost bean) {
    addToArray(entity.GL7ExpSchedCondItemExcl.EXPSCHEDCONDITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemExclCostVersionList> getExpSchedCondItemExclCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedCondItemExcl.EXPSCHEDCONDITEMEXCLCOSTS_PROP.get());
  }
  
  
}