package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationMod.eti;GL7LocationMod.eix;GL7LocationMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationModVersionList {
  public GL7LocationModVersionListImpl(entity.GL7LocationMod base)  {
    super(base);
  }
  
  public GL7LocationModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LocationMod AsOf(java.util.Date date) {
    return (entity.GL7LocationMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationRF> GL7LocationRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LocationMod.GL7LOCATIONRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToGL7LocationRateFactors(entity.GL7LocationRF bean) {
    addToArray(entity.GL7LocationMod.GL7LOCATIONRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationRFVersionList> getGL7LocationRateFactors() {
    return (java.util.List)getArray(entity.GL7LocationMod.GL7LOCATIONRATEFACTORS_PROP.get());
  }
  
  
}