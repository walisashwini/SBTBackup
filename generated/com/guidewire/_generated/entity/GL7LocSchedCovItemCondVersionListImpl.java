package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemCond.eti;GL7LocSchedCovItemCond.eix;GL7LocSchedCovItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocSchedCovItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocSchedCovItemCondVersionList {
  public GL7LocSchedCovItemCondVersionListImpl(entity.GL7LocSchedCovItemCond base)  {
    super(base);
  }
  
  public GL7LocSchedCovItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocSchedCovItemCond AsOf(java.util.Date date) {
    return (entity.GL7LocSchedCovItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCondCost> LocSchedCovItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocSchedCovItemCond.LOCSCHEDCOVITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocSchedCovItemCondCosts(entity.GL7LocSchedCovItemCondCost bean) {
    addToArray(entity.GL7LocSchedCovItemCond.LOCSCHEDCOVITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocSchedCovItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocSchedCovItemCondCostVersionList> getLocSchedCovItemCondCosts() {
    return (java.util.List)getArray(entity.GL7LocSchedCovItemCond.LOCSCHEDCOVITEMCONDCOSTS_PROP.get());
  }
  
  
}