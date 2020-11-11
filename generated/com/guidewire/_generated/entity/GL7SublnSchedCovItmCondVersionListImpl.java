package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItmCond.eti;GL7SublnSchedCovItmCond.eix;GL7SublnSchedCovItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedCovItmCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedCovItmCondVersionList {
  public GL7SublnSchedCovItmCondVersionListImpl(entity.GL7SublnSchedCovItmCond base)  {
    super(base);
  }
  
  public GL7SublnSchedCovItmCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedCovItmCond AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedCovItmCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItemCondCost> SublnSchedCovItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedCovItmCond.SUBLNSCHEDCOVITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedCovItemCondCosts(entity.GL7SublnSchedCovItemCondCost bean) {
    addToArray(entity.GL7SublnSchedCovItmCond.SUBLNSCHEDCOVITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItmCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItemCondCostVersionList> getSublnSchedCovItemCondCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedCovItmCond.SUBLNSCHEDCOVITEMCONDCOSTS_PROP.get());
  }
  
  
}