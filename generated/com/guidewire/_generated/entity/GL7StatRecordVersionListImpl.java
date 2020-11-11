package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7StatRecord.eti;GL7StatRecord.eix;GL7StatRecord.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GL7StatRecordVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GL7StatRecordVersionList {
  public GL7StatRecordVersionListImpl(entity.GL7StatRecord base)  {
    super(base);
  }
  
  public GL7StatRecordVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GL7StatRecord AsOf(java.util.Date date) {
    return (entity.GL7StatRecord)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GL7StatRecord> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}