package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchCondItem.eti;GL7LineSchCondItem.eix;GL7LineSchCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineSchCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineSchCondItemVersionList {
  public GL7LineSchCondItemVersionListImpl(entity.GL7LineSchCondItem base)  {
    super(base);
  }
  
  public GL7LineSchCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineSchCondItem AsOf(java.util.Date date) {
    return (entity.GL7LineSchCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}