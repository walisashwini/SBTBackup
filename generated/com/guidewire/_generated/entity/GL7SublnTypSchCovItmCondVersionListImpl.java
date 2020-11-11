package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItmCond.eti;GL7SublnTypSchCovItmCond.eix;GL7SublnTypSchCovItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchCovItmCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchCovItmCondVersionList {
  public GL7SublnTypSchCovItmCondVersionListImpl(entity.GL7SublnTypSchCovItmCond base)  {
    super(base);
  }
  
  public GL7SublnTypSchCovItmCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchCovItmCond AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchCovItmCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItemCondCost> SublnTypSchCovItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchCovItmCond.SUBLNTYPSCHCOVITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchCovItemCondCosts(entity.GL7SublnTypSchCovItemCondCost bean) {
    addToArray(entity.GL7SublnTypSchCovItmCond.SUBLNTYPSCHCOVITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItmCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemCondCostVersionList> getSublnTypSchCovItemCondCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchCovItmCond.SUBLNTYPSCHCOVITEMCONDCOSTS_PROP.get());
  }
  
  
}