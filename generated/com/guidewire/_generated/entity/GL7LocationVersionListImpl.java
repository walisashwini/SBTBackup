package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Location.eti;GL7Location.eix;GL7Location.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7LocationVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7LocationVersionList {
  public GL7LocationVersionListImpl(entity.GL7Location base)  {
    super(base);
  }
  
  public GL7LocationVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7Location AsOf(java.util.Date date) {
    return (entity.GL7Location)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Location.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Location.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Location.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Exposure> GL7ExposuresAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Location.GL7EXPOSURES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7LocationMod> GL7LocationModsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Location.GL7LOCATIONMODS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7LocationCond bean) {
    addToArray(entity.GL7Location.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7LocationCov bean) {
    addToArray(entity.GL7Location.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7LocationExcl bean) {
    addToArray(entity.GL7Location.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7Exposures(entity.GL7Exposure bean) {
    addToArray(entity.GL7Location.GL7EXPOSURES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7LocationMods(entity.GL7LocationMod bean) {
    addToArray(entity.GL7Location.GL7LOCATIONMODS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Location> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7Location.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7Location.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7Location.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureVersionList> getGL7Exposures() {
    return (java.util.List)getArray(entity.GL7Location.GL7EXPOSURES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationModVersionList> getGL7LocationMods() {
    return (java.util.List)getArray(entity.GL7Location.GL7LOCATIONMODS_PROP.get());
  }
  
  
}