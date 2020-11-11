package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureExcl.eti;GL7ExposureExcl.eix;GL7ExposureExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureExclVersionList {
  public GL7ExposureExclVersionListImpl(entity.GL7ExposureExcl base)  {
    super(base);
  }
  
  public GL7ExposureExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExposureExcl AsOf(java.util.Date date) {
    return (entity.GL7ExposureExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureExclCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExposureExcl.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7ExposureExclCost bean) {
    addToArray(entity.GL7ExposureExcl.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureExclCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7ExposureExcl.COSTS_PROP.get());
  }
  
  
}