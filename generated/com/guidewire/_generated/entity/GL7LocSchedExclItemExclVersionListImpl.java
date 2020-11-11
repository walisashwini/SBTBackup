package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemExcl.eti;GL7LocSchedExclItemExcl.eix;GL7LocSchedExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedExclItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedExclItemExclVersionList {
  public GL7LocSchedExclItemExclVersionListImpl(entity.GL7LocSchedExclItemExcl base)  {
    super(base);
  }
  
  public GL7LocSchedExclItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedExclItemExcl AsOf(java.util.Date date) {
    return (entity.GL7LocSchedExclItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemExclCost> LocSchedExclItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedExclItemExcl.LOCSCHEDEXCLITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedExclItemExclCosts(entity.GL7LocSchedExclItemExclCost bean) {
    addToArray(entity.GL7LocSchedExclItemExcl.LOCSCHEDEXCLITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedExclItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedExclItemExclCostVersionList> getLocSchedExclItemExclCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedExclItemExcl.LOCSCHEDEXCLITEMEXCLCOSTS_PROP.get());
  }
  
  
}