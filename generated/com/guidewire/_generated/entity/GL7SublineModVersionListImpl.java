package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineMod.eti;GL7SublineMod.eix;GL7SublineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineModVersionList {
  public GL7SublineModVersionListImpl(entity.GL7SublineMod base)  {
    super(base);
  }
  
  public GL7SublineModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineMod AsOf(java.util.Date date) {
    return (entity.GL7SublineMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineRF> GL7SublineRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineMod.GL7SUBLINERATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToGL7SublineRateFactors(entity.GL7SublineRF bean) {
    addToArray(entity.GL7SublineMod.GL7SUBLINERATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineRFVersionList> getGL7SublineRateFactors() {
    return (java.util.List)getArray(entity.GL7SublineMod.GL7SUBLINERATEFACTORS_PROP.get());
  }
  
  
}