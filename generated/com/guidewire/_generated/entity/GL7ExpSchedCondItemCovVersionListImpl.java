package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCov.eti;GL7ExpSchedCondItemCov.eix;GL7ExpSchedCondItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedCondItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedCondItemCovVersionList {
  public GL7ExpSchedCondItemCovVersionListImpl(entity.GL7ExpSchedCondItemCov base)  {
    super(base);
  }
  
  public GL7ExpSchedCondItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedCondItemCov AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedCondItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCovCost> ExpSchedCondItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedCondItemCov.EXPSCHEDCONDITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedCondItemCovCosts(entity.GL7ExpSchedCondItemCovCost bean) {
    addToArray(entity.GL7ExpSchedCondItemCov.EXPSCHEDCONDITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedCondItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedCondItemCovCostVersionList> getExpSchedCondItemCovCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedCondItemCov.EXPSCHEDCONDITEMCOVCOSTS_PROP.get());
  }
  
  
}