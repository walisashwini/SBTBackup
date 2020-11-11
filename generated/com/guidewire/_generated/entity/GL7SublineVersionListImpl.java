package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Subline.eti;GL7Subline.eix;GL7Subline.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublineVersionList {
  public GL7SublineVersionListImpl(entity.GL7Subline base)  {
    super(base);
  }
  
  public GL7SublineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7Subline AsOf(java.util.Date date) {
    return (entity.GL7Subline)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Subline.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Subline.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Subline.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublineMod> ModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7Subline.MODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditions(entity.GL7SublineCond bean) {
    addToArray(entity.GL7Subline.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.GL7SublineCov bean) {
    addToArray(entity.GL7Subline.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.GL7SublineExcl bean) {
    addToArray(entity.GL7Subline.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToModifiers(entity.GL7SublineMod bean) {
    addToArray(entity.GL7Subline.MODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7Subline> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.GL7Subline.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.GL7Subline.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.GL7Subline.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublineModVersionList> getModifiers() {
    return (java.util.List)getArray(entity.GL7Subline.MODIFIERS_PROP.get());
  }
  
  
}