package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItmCond.eti;GL7SublnSchedCondItmCond.eix;GL7SublnSchedCondItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedCondItmCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedCondItmCondVersionList {
  public GL7SublnSchedCondItmCondVersionListImpl(entity.GL7SublnSchedCondItmCond base)  {
    super(base);
  }
  
  public GL7SublnSchedCondItmCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedCondItmCond AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedCondItmCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItemCondCost> SublnSchedCondItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedCondItmCond.SUBLNSCHEDCONDITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedCondItemCondCosts(entity.GL7SublnSchedCondItemCondCost bean) {
    addToArray(entity.GL7SublnSchedCondItmCond.SUBLNSCHEDCONDITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCondItmCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCondItemCondCostVersionList> getSublnSchedCondItemCondCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedCondItmCond.SUBLNSCHEDCONDITEMCONDCOSTS_PROP.get());
  }
  
  
}