package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItmExcl.eti;GL7SublnTypSchCondItmExcl.eix;GL7SublnTypSchCondItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchCondItmExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchCondItmExclVersionList {
  public GL7SublnTypSchCondItmExclVersionListImpl(entity.GL7SublnTypSchCondItmExcl base)  {
    super(base);
  }
  
  public GL7SublnTypSchCondItmExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchCondItmExcl AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchCondItmExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCondItemExclCost> SublnTypSchCondItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchCondItmExcl.SUBLNTYPSCHCONDITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchCondItemExclCosts(entity.GL7SublnTypSchCondItemExclCost bean) {
    addToArray(entity.GL7SublnTypSchCondItmExcl.SUBLNTYPSCHCONDITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCondItmExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemExclCostVersionList> getSublnTypSchCondItemExclCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchCondItmExcl.SUBLNTYPSCHCONDITEMEXCLCOSTS_PROP.get());
  }
  
  
}