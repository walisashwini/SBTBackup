package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeCov.eti;GL7SublineTypeCov.eix;GL7SublineTypeCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeCovVersionList {
  public GL7SublineTypeCovVersionListImpl(entity.GL7SublineTypeCov base)  {
    super(base);
  }
  
  public GL7SublineTypeCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeCov AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7SublineTypeCovCost bean) {
    addToArray(entity.GL7SublineTypeCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7SublineTypeCov.COSTS_PROP.get());
  }
  
  
}