package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemCond.eti;GL7LocSchedCondItemCond.eix;GL7LocSchedCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedCondItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedCondItemCondVersionList {
  public GL7LocSchedCondItemCondVersionListImpl(entity.GL7LocSchedCondItemCond base)  {
    super(base);
  }
  
  public GL7LocSchedCondItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedCondItemCond AsOf(java.util.Date date) {
    return (entity.GL7LocSchedCondItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCondCost> LocSchedCondItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedCondItemCond.LOCSCHEDCONDITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedCondItemCondCosts(entity.GL7LocSchedCondItemCondCost bean) {
    addToArray(entity.GL7LocSchedCondItemCond.LOCSCHEDCONDITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCondItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCondItemCondCostVersionList> getLocSchedCondItemCondCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedCondItemCond.LOCSCHEDCONDITEMCONDCOSTS_PROP.get());
  }
  
  
}