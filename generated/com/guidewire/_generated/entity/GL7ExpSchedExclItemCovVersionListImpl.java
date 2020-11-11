package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCov.eti;GL7ExpSchedExclItemCov.eix;GL7ExpSchedExclItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedExclItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedExclItemCovVersionList {
  public GL7ExpSchedExclItemCovVersionListImpl(entity.GL7ExpSchedExclItemCov base)  {
    super(base);
  }
  
  public GL7ExpSchedExclItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedExclItemCov AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedExclItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCovCost> ExpSchedExclItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedExclItemCov.EXPSCHEDEXCLITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedExclItemCovCosts(entity.GL7ExpSchedExclItemCovCost bean) {
    addToArray(entity.GL7ExpSchedExclItemCov.EXPSCHEDEXCLITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemCovCostVersionList> getExpSchedExclItemCovCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedExclItemCov.EXPSCHEDEXCLITEMCOVCOSTS_PROP.get());
  }
  
  
}