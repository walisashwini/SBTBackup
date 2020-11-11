package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeMod.eti;GL7SublineTypeMod.eix;GL7SublineTypeMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeModVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeModVersionList {
  public GL7SublineTypeModVersionListImpl(entity.GL7SublineTypeMod base)  {
    super(base);
  }
  
  public GL7SublineTypeModVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineTypeMod AsOf(java.util.Date date) {
    return (entity.GL7SublineTypeMod)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeRF> GL7SublineTypeRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineTypeMod.GL7SUBLINETYPERATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToGL7SublineTypeRateFactors(entity.GL7SublineTypeRF bean) {
    addToArray(entity.GL7SublineTypeMod.GL7SUBLINETYPERATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeMod> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeRFVersionList> getGL7SublineTypeRateFactors() {
    return (java.util.List)getArray(entity.GL7SublineTypeMod.GL7SUBLINETYPERATEFACTORS_PROP.get());
  }
  
  
}