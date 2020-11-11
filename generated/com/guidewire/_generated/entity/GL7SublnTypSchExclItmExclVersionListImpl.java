package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItmExcl.eti;GL7SublnTypSchExclItmExcl.eix;GL7SublnTypSchExclItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchExclItmExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchExclItmExclVersionList {
  public GL7SublnTypSchExclItmExclVersionListImpl(entity.GL7SublnTypSchExclItmExcl base)  {
    super(base);
  }
  
  public GL7SublnTypSchExclItmExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchExclItmExcl AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchExclItmExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItemExclCost> SublnTypSchExclItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchExclItmExcl.SUBLNTYPSCHEXCLITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchExclItemExclCosts(entity.GL7SublnTypSchExclItemExclCost bean) {
    addToArray(entity.GL7SublnTypSchExclItmExcl.SUBLNTYPSCHEXCLITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItmExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemExclCostVersionList> getSublnTypSchExclItemExclCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchExclItmExcl.SUBLNTYPSCHEXCLITEMEXCLCOSTS_PROP.get());
  }
  
  
}