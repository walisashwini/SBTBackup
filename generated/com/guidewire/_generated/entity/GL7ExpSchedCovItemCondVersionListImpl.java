package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemCond.eti;GL7ExpSchedCovItemCond.eix;GL7ExpSchedCovItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedCovItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedCovItemCondVersionList {
  public GL7ExpSchedCovItemCondVersionListImpl(entity.GL7ExpSchedCovItemCond base)  {
    super(base);
  }
  
  public GL7ExpSchedCovItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedCovItemCond AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedCovItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCovItemCondCost> ExpSchedCovItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedCovItemCond.EXPSCHEDCOVITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedCovItemCondCosts(entity.GL7ExpSchedCovItemCondCost bean) {
    addToArray(entity.GL7ExpSchedCovItemCond.EXPSCHEDCOVITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCovItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCondCostVersionList> getExpSchedCovItemCondCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedCovItemCond.EXPSCHEDCOVITEMCONDCOSTS_PROP.get());
  }
  
  
}