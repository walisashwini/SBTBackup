package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationExcl.eti;GL7LocationExcl.eix;GL7LocationExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationExclVersionList {
  public GL7LocationExclVersionListImpl(entity.GL7LocationExcl base)  {
    super(base);
  }
  
  public GL7LocationExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationExcl AsOf(java.util.Date date) {
    return (entity.GL7LocationExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationExclCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationExcl.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GL7LocationExclCost bean) {
    addToArray(entity.GL7LocationExcl.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationExclCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GL7LocationExcl.COSTS_PROP.get());
  }
  
  
}