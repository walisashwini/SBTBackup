package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemExcl.eti;GL7LocSchedCondItemExcl.eix;GL7LocSchedCondItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedCondItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedCondItemExclVersionList {
  public GL7LocSchedCondItemExclVersionListImpl(entity.GL7LocSchedCondItemExcl base)  {
    super(base);
  }
  
  public GL7LocSchedCondItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedCondItemExcl AsOf(java.util.Date date) {
    return (entity.GL7LocSchedCondItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemExclCost> LocSchedCondItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedCondItemExcl.LOCSCHEDCONDITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedCondItemExclCosts(entity.GL7LocSchedCondItemExclCost bean) {
    addToArray(entity.GL7LocSchedCondItemExcl.LOCSCHEDCONDITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemExclCostVersionList> getLocSchedCondItemExclCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedCondItemExcl.LOCSCHEDCONDITEMEXCLCOSTS_PROP.get());
  }
  
  
}