package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskPricing.eti;APDRiskPricing.eix;APDRiskPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskPricingVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskPricingVersionList {
  public APDRiskPricingVersionListImpl(entity.APDRiskPricing base)  {
    super(base);
  }
  
  public APDRiskPricingVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskPricing AsOf(java.util.Date date) {
    return (entity.APDRiskPricing)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskPricing> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}