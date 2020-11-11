package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7CredibilityFactorRT.eti;GL7CredibilityFactorRT.eix;GL7CredibilityFactorRT.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7CredibilityFactorRTInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the TotalBasicLmtsCoSubjectLossCos field.
   * TotalBasicLimitsCoSubjectLossCost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getTotalBasicLmtsCoSubjectLossCos();
  
  
  /**
   * Gets the value of the Value field.
   * Value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getValue();
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the TotalBasicLmtsCoSubjectLossCos field.
   */
  public void setTotalBasicLmtsCoSubjectLossCos(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  
}