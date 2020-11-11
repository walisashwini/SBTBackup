package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCond.eti;GL7ExpSchedCondItemCond.eix;GL7ExpSchedCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedCondItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedCondItemCondVersionList {
  public GL7ExpSchedCondItemCondVersionListImpl(entity.GL7ExpSchedCondItemCond base)  {
    super(base);
  }
  
  public GL7ExpSchedCondItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedCondItemCond AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedCondItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCondCost> ExpSchedCondItemCondCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedCondItemCond.EXPSCHEDCONDITEMCONDCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedCondItemCondCosts(entity.GL7ExpSchedCondItemCondCost bean) {
    addToArray(entity.GL7ExpSchedCondItemCond.EXPSCHEDCONDITEMCONDCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCondCostVersionList> getExpSchedCondItemCondCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedCondItemCond.EXPSCHEDCONDITEMCONDCOSTS_PROP.get());
  }
  
  
}