package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraft.eti;GL7UnmannedAircraft.eix;GL7UnmannedAircraft.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7UnmannedAircraftVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7UnmannedAircraftVersionList {
  public GL7UnmannedAircraftVersionListImpl(entity.GL7UnmannedAircraft base)  {
    super(base);
  }
  
  public GL7UnmannedAircraftVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7UnmannedAircraft AsOf(java.util.Date date) {
    return (entity.GL7UnmannedAircraft)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UnmannedAircraft.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UnmannedAircraft.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraftExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7UnmannedAircraft.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7UnmannedAircraftCond bean) {
    addToArray(entity.GL7UnmannedAircraft.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7UnmannedAircraftCov bean) {
    addToArray(entity.GL7UnmannedAircraft.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7UnmannedAircraftExcl bean) {
    addToArray(entity.GL7UnmannedAircraft.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraft> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7UnmannedAircraft.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7UnmannedAircraft.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7UnmannedAircraft.EXCLUSIONS_PROP.get());
  }
  
  
}