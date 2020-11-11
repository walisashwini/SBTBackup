package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemCov.eti;GL7ExpSchedCovItemCov.eix;GL7ExpSchedCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedCovItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedCovItemCovVersionList {
  public GL7ExpSchedCovItemCovVersionListImpl(entity.GL7ExpSchedCovItemCov base)  {
    super(base);
  }
  
  public GL7ExpSchedCovItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedCovItemCov AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedCovItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCovItemCovCost> ExpSchedCovItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedCovItemCov.EXPSCHEDCOVITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedCovItemCovCosts(entity.GL7ExpSchedCovItemCovCost bean) {
    addToArray(entity.GL7ExpSchedCovItemCov.EXPSCHEDCOVITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCovItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCovItemCovCostVersionList> getExpSchedCovItemCovCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedCovItemCov.EXPSCHEDCOVITEMCOVCOSTS_PROP.get());
  }
  
  
}