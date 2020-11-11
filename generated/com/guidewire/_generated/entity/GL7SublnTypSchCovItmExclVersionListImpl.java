package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItmExcl.eti;GL7SublnTypSchCovItmExcl.eix;GL7SublnTypSchCovItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnTypSchCovItmExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnTypSchCovItmExclVersionList {
  public GL7SublnTypSchCovItmExclVersionListImpl(entity.GL7SublnTypSchCovItmExcl base)  {
    super(base);
  }
  
  public GL7SublnTypSchCovItmExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnTypSchCovItmExcl AsOf(java.util.Date date) {
    return (entity.GL7SublnTypSchCovItmExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItemExclCost> SublnTypSchCovItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnTypSchCovItmExcl.SUBLNTYPSCHCOVITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnTypSchCovItemExclCosts(entity.GL7SublnTypSchCovItemExclCost bean) {
    addToArray(entity.GL7SublnTypSchCovItmExcl.SUBLNTYPSCHCOVITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnTypSchCovItmExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnTypSchCovItemExclCostVersionList> getSublnTypSchCovItemExclCosts() {
    return (java.util.List)getArray(entity.GL7SublnTypSchCovItmExcl.SUBLNTYPSCHCOVITEMEXCLCOSTS_PROP.get());
  }
  
  
}