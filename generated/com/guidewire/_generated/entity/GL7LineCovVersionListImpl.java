package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineCov.eti;GL7LineCov.eix;GL7LineCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineCovVersionList {
  public GL7LineCovVersionListImpl(entity.GL7LineCov base)  {
    super(base);
  }
  
  public GL7LineCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineCov AsOf(java.util.Date date) {
    return (entity.GL7LineCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LineCovCost bean) {
    addToArray(entity.GL7LineCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LineCov.COSTS_PROP.get());
  }
  
  
}