package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Exposure.eti;GL7Exposure.eix;GL7Exposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExposureVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExposureVersionList {
  public GL7ExposureVersionListImpl(entity.GL7Exposure base)  {
    super(base);
  }
  
  public GL7ExposureVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7Exposure AsOf(java.util.Date date) {
    return (entity.GL7Exposure)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Exposure.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Exposure.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Exposure.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExposureMod> GL7ExposureModsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Exposure.GL7EXPOSUREMODS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7UnmannedAircraft> UnmannedAircraftsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Exposure.UNMANNEDAIRCRAFTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7ExposureCond bean) {
    addToArray(entity.GL7Exposure.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7ExposureCov bean) {
    addToArray(entity.GL7Exposure.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7ExposureExcl bean) {
    addToArray(entity.GL7Exposure.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGL7ExposureMods(entity.GL7ExposureMod bean) {
    addToArray(entity.GL7Exposure.GL7EXPOSUREMODS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToUnmannedAircrafts(entity.GL7UnmannedAircraft bean) {
    addToArray(entity.GL7Exposure.UNMANNEDAIRCRAFTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Exposure> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7Exposure.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7Exposure.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7Exposure.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExposureModVersionList> getGL7ExposureMods() {
    return (java.util.List)getArray(entity.GL7Exposure.GL7EXPOSUREMODS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7UnmannedAircraftVersionList> getUnmannedAircrafts() {
    return (java.util.List)getArray(entity.GL7Exposure.UNMANNEDAIRCRAFTS_PROP.get());
  }
  
  
}