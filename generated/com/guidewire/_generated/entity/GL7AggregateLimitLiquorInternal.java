package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7AggregateLimitLiquor.eti;GL7AggregateLimitLiquor.eix;GL7AggregateLimitLiquor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7AggregateLimitLiquorInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the EachCommonCauseLim field.
   * EachCommonCauseLimit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEachCommonCauseLim();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the Value field.
   * Value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValue();
  
  
  /**
   * Sets the value of the EachCommonCauseLim field.
   */
  public void setEachCommonCauseLim(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}