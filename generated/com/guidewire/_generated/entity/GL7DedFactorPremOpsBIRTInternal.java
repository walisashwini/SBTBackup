package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7DedFactorPremOpsBIRT.eti;GL7DedFactorPremOpsBIRT.eix;GL7DedFactorPremOpsBIRT.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7DedFactorPremOpsBIRTInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the IncreasedLmtsTableAssignmentPr field.
   * IncreasedLimitsTableAssignmentPremOpsFinal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIncreasedLmtsTableAssignmentPr();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the PremOpsDed field.
   * PremOpsDed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsDed();
  
  
  /**
   * Gets the value of the Value field.
   * Value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getValue();
  
  
  /**
   * Sets the value of the IncreasedLmtsTableAssignmentPr field.
   */
  public void setIncreasedLmtsTableAssignmentPr(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the PremOpsDed field.
   */
  public void setPremOpsDed(java.lang.String value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  
}