package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItmCond.eti;GL7SublnSchedExclItmCond.eix;GL7SublnSchedExclItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedExclItmCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedExclItmCondVersionList {
  public GL7SublnSchedExclItmCondVersionListImpl(entity.GL7SublnSchedExclItmCond base)  {
    super(base);
  }
  
  public GL7SublnSchedExclItmCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedExclItmCond AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedExclItmCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItemCondCost> SublnSchedExclItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedExclItmCond.SUBLNSCHEDEXCLITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedExclItemCondCosts(entity.GL7SublnSchedExclItemCondCost bean) {
    addToArray(entity.GL7SublnSchedExclItmCond.SUBLNSCHEDEXCLITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedExclItmCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedExclItemCondCostVersionList> getSublnSchedExclItemCondCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedExclItmCond.SUBLNSCHEDEXCLITEMCONDCOSTS_PROP.get());
  }
  
  
}