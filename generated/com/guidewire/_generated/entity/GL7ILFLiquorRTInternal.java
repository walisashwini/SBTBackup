package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ILFLiquorRT.eti;GL7ILFLiquorRT.eix;GL7ILFLiquorRT.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ILFLiquorRTInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the AggLimLiquor field.
   * AggregateLimitLiquor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAggLimLiquor();
  
  
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
  public java.math.BigDecimal getValue();
  
  
  /**
   * Sets the value of the AggLimLiquor field.
   */
  public void setAggLimLiquor(java.lang.String value);
  
  
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
  public void setValue(java.math.BigDecimal value);
  
  
  
}