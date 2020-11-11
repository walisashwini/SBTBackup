package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineMod.eti;GL7LineMod.eix;GL7LineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LineModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LineModVersionList {
  public GL7LineModVersionListImpl(entity.GL7LineMod base)  {
    super(base);
  }
  
  public GL7LineModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7LineMod AsOf(java.util.Date date) {
    return (entity.GL7LineMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineRF> GL7LineRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7LineMod.GL7LINERATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToGL7LineRateFactors(entity.GL7LineRF bean) {
    addToArray(entity.GL7LineMod.GL7LINERATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LineMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LineRFVersionList> getGL7LineRateFactors() {
    return (java.util.List)getArray(entity.GL7LineMod.GL7LINERATEFACTORS_PROP.get());
  }
  
  
}