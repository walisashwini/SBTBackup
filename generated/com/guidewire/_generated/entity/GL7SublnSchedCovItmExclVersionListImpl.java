package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItmExcl.eti;GL7SublnSchedCovItmExcl.eix;GL7SublnSchedCovItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7SublnSchedCovItmExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7SublnSchedCovItmExclVersionList {
  public GL7SublnSchedCovItmExclVersionListImpl(entity.GL7SublnSchedCovItmExcl base)  {
    super(base);
  }
  
  public GL7SublnSchedCovItmExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7SublnSchedCovItmExcl AsOf(java.util.Date date) {
    return (entity.GL7SublnSchedCovItmExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItemExclCost> SublnSchedCovItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7SublnSchedCovItmExcl.SUBLNSCHEDCOVITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToSublnSchedCovItemExclCosts(entity.GL7SublnSchedCovItemExclCost bean) {
    addToArray(entity.GL7SublnSchedCovItmExcl.SUBLNSCHEDCOVITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7SublnSchedCovItmExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7SublnSchedCovItemExclCostVersionList> getSublnSchedCovItemExclCosts() {
    return (java.util.List)getArray(entity.GL7SublnSchedCovItmExcl.SUBLNSCHEDCOVITEMEXCLCOSTS_PROP.get());
  }
  
  
}