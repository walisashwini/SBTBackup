package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCondItemCov.eti;GL7UAircrSchedCondItemCov.eix;GL7UAircrSchedCondItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UAircrSchedCondItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UAircrSchedCondItemCovVersionList {
  public GL7UAircrSchedCondItemCovVersionListImpl(entity.GL7UAircrSchedCondItemCov base)  {
    super(base);
  }
  
  public GL7UAircrSchedCondItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UAircrSchedCondItemCov AsOf(java.util.Date date) {
    return (entity.GL7UAircrSchedCondItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCondItemCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UAircrSchedCondItemCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7UAircrSchedCondItemCovCost bean) {
    addToArray(entity.GL7UAircrSchedCondItemCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UAircrSchedCondItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UAircrSchedCondItemCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7UAircrSchedCondItemCov.COSTS_PROP.get());
  }
  
  
}