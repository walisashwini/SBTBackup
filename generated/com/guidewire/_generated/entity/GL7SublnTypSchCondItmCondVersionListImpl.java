package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItmCond.eti;GL7SublnTypSchCondItmCond.eix;GL7SublnTypSchCondItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchCondItmCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchCondItmCondVersionList {
  public GL7SublnTypSchCondItmCondVersionListImpl(entity.GL7SublnTypSchCondItmCond base)  {
    super(base);
  }
  
  public GL7SublnTypSchCondItmCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchCondItmCond AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchCondItmCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCondItemCondCost> SublnTypSchCondItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchCondItmCond.SUBLNTYPSCHCONDITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchCondItemCondCosts(entity.GL7SublnTypSchCondItemCondCost bean) {
    addToArray(entity.GL7SublnTypSchCondItmCond.SUBLNTYPSCHCONDITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCondItmCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCondItemCondCostVersionList> getSublnTypSchCondItemCondCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchCondItmCond.SUBLNTYPSCHCONDITEMCONDCOSTS_PROP.get());
  }
  
  
}