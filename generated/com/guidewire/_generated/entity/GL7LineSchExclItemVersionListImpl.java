package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineSchExclItem.eti;GL7LineSchExclItem.eix;GL7LineSchExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineSchExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineSchExclItemVersionList {
  public GL7LineSchExclItemVersionListImpl(entity.GL7LineSchExclItem base)  {
    super(base);
  }
  
  public GL7LineSchExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineSchExclItem AsOf(java.util.Date date) {
    return (entity.GL7LineSchExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineSchExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}