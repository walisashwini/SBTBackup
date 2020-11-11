package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItmCond.eti;GL7SublnTypSchExclItmCond.eix;GL7SublnTypSchExclItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchExclItmCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchExclItmCondVersionList {
  public GL7SublnTypSchExclItmCondVersionListImpl(entity.GL7SublnTypSchExclItmCond base)  {
    super(base);
  }
  
  public GL7SublnTypSchExclItmCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchExclItmCond AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchExclItmCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItemCondCost> SublnTypSchExclItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchExclItmCond.SUBLNTYPSCHEXCLITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchExclItemCondCosts(entity.GL7SublnTypSchExclItemCondCost bean) {
    addToArray(entity.GL7SublnTypSchExclItmCond.SUBLNTYPSCHEXCLITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchExclItmCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchExclItemCondCostVersionList> getSublnTypSchExclItemCondCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchExclItmCond.SUBLNTYPSCHEXCLITEMCONDCOSTS_PROP.get());
  }
  
  
}