package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationRF.eti;GL7LocationRF.eix;GL7LocationRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationRFVersionList {
  public GL7LocationRFVersionListImpl(entity.GL7LocationRF base)  {
    super(base);
  }
  
  public GL7LocationRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationRF AsOf(java.util.Date date) {
    return (entity.GL7LocationRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}