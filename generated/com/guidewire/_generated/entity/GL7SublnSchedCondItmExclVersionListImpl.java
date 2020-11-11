package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItmExcl.eti;GL7SublnSchedCondItmExcl.eix;GL7SublnSchedCondItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedCondItmExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedCondItmExclVersionList {
  public GL7SublnSchedCondItmExclVersionListImpl(entity.GL7SublnSchedCondItmExcl base)  {
    super(base);
  }
  
  public GL7SublnSchedCondItmExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedCondItmExcl AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedCondItmExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItemExclCost> SublnSchedCondItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedCondItmExcl.SUBLNSCHEDCONDITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedCondItemExclCosts(entity.GL7SublnSchedCondItemExclCost bean) {
    addToArray(entity.GL7SublnSchedCondItmExcl.SUBLNSCHEDCONDITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItmExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItemExclCostVersionList> getSublnSchedCondItemExclCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedCondItmExcl.SUBLNSCHEDCONDITEMEXCLCOSTS_PROP.get());
  }
  
  
}