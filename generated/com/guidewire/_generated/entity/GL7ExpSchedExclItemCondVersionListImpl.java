package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCond.eti;GL7ExpSchedExclItemCond.eix;GL7ExpSchedExclItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedExclItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedExclItemCondVersionList {
  public GL7ExpSchedExclItemCondVersionListImpl(entity.GL7ExpSchedExclItemCond base)  {
    super(base);
  }
  
  public GL7ExpSchedExclItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedExclItemCond AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedExclItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCondCost> ExpSchedExclItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedExclItemCond.EXPSCHEDEXCLITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedExclItemCondCosts(entity.GL7ExpSchedExclItemCondCost bean) {
    addToArray(entity.GL7ExpSchedExclItemCond.EXPSCHEDEXCLITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCondCostVersionList> getExpSchedExclItemCondCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedExclItemCond.EXPSCHEDEXCLITEMCONDCOSTS_PROP.get());
  }
  
  
}