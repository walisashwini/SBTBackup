package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyContactDetail.eti;PolicyContactDetail.eix;PolicyContactDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyContactDetailVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyContactDetailVersionList {
  public PolicyContactDetailVersionListImpl(entity.PolicyContactDetail base)  {
    super(base);
  }
  
  public PolicyContactDetailVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyContactDetail AsOf(java.util.Date date) {
    return (entity.PolicyContactDetail)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyContactDetail> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}