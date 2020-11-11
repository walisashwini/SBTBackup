package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchCovItem.eti;GL7LineSchCovItem.eix;GL7LineSchCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineSchCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineSchCovItemVersionList {
  public GL7LineSchCovItemVersionListImpl(entity.GL7LineSchCovItem base)  {
    super(base);
  }
  
  public GL7LineSchCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineSchCovItem AsOf(java.util.Date date) {
    return (entity.GL7LineSchCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}