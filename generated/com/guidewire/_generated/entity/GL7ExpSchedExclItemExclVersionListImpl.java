package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemExcl.eti;GL7ExpSchedExclItemExcl.eix;GL7ExpSchedExclItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7ExpSchedExclItemExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7ExpSchedExclItemExclVersionList {
  public GL7ExpSchedExclItemExclVersionListImpl(entity.GL7ExpSchedExclItemExcl base)  {
    super(base);
  }
  
  public GL7ExpSchedExclItemExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7ExpSchedExclItemExcl AsOf(java.util.Date date) {
    return (entity.GL7ExpSchedExclItemExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemExclCost> ExpSchedExclItemExclCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GL7ExpSchedExclItemExcl.EXPSCHEDEXCLITEMEXCLCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToExpSchedExclItemExclCosts(entity.GL7ExpSchedExclItemExclCost bean) {
    addToArray(entity.GL7ExpSchedExclItemExcl.EXPSCHEDEXCLITEMEXCLCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7ExpSchedExclItemExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GL7ExpSchedExclItemExclCostVersionList> getExpSchedExclItemExclCosts() {
    return (java.util.List)getArray(entity.GL7ExpSchedExclItemExcl.EXPSCHEDEXCLITEMEXCLCOSTS_PROP.get());
  }
  
  
}