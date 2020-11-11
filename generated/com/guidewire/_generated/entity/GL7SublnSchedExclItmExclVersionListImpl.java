package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItmExcl.eti;GL7SublnSchedExclItmExcl.eix;GL7SublnSchedExclItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedExclItmExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedExclItmExclVersionList {
  public GL7SublnSchedExclItmExclVersionListImpl(entity.GL7SublnSchedExclItmExcl base)  {
    super(base);
  }
  
  public GL7SublnSchedExclItmExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedExclItmExcl AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedExclItmExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItemExclCost> SublnSchedExclItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedExclItmExcl.SUBLNSCHEDEXCLITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedExclItemExclCosts(entity.GL7SublnSchedExclItemExclCost bean) {
    addToArray(entity.GL7SublnSchedExclItmExcl.SUBLNSCHEDEXCLITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItmExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItemExclCostVersionList> getSublnSchedExclItemExclCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedExclItmExcl.SUBLNSCHEDEXCLITEMEXCLCOSTS_PROP.get());
  }
  
  
}