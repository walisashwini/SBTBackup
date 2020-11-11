package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineType.eti;GL7SublineType.eix;GL7SublineType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineTypeVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineTypeVersionList {
  public GL7SublineTypeVersionListImpl(entity.GL7SublineType base)  {
    super(base);
  }
  
  public GL7SublineTypeVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublineType AsOf(java.util.Date date) {
    return (entity.GL7SublineType)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineType.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineType.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineType.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Location> LocationsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineType.LOCATIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineTypeMod> ModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineType.MODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Subline> SublinesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublineType.SUBLINES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7SublineTypeCond bean) {
    addToArray(entity.GL7SublineType.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7SublineTypeCov bean) {
    addToArray(entity.GL7SublineType.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7SublineTypeExcl bean) {
    addToArray(entity.GL7SublineType.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLocations(entity.GL7Location bean) {
    addToArray(entity.GL7SublineType.LOCATIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToModifiers(entity.GL7SublineTypeMod bean) {
    addToArray(entity.GL7SublineType.MODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToSublines(entity.GL7Subline bean) {
    addToArray(entity.GL7SublineType.SUBLINES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineType> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7SublineType.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7SublineType.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7SublineType.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7LocationVersionList> getLocations() {
    return (java.util.List)getArray(entity.GL7SublineType.LOCATIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineTypeModVersionList> getModifiers() {
    return (java.util.List)getArray(entity.GL7SublineType.MODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineVersionList> getSublines() {
    return (java.util.List)getArray(entity.GL7SublineType.SUBLINES_PROP.get());
  }
  
  
}