package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7DedFactorProdsCSLRT.eti;GL7DedFactorProdsCSLRT.eix;GL7DedFactorProdsCSLRT.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7DedFactorProdsCSLRTInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the IncreasedLmtsTableAssignmentPr field.
   * IncreasedLimitsTableAssignmentProdsCompldOpsFinal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIncreasedLmtsTableAssignmentPr();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the ProdsCompldOpsDed field.
   * ProdsCompldOpsDed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsDed();
  
  
  /**
   * Gets the value of the Value field.
   * Value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getValue();
  
  
  /**
   * Sets the value of the IncreasedLmtsTableAssignmentPr field.
   */
  public void setIncreasedLmtsTableAssignmentPr(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsDed field.
   */
  public void setProdsCompldOpsDed(java.lang.String value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  
}