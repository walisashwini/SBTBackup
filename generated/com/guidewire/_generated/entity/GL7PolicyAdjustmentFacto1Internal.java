package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7PolicyAdjustmentFacto1.eti;GL7PolicyAdjustmentFacto1.eix;GL7PolicyAdjustmentFacto1.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7PolicyAdjustmentFacto1Internal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the Coverage field.
   * Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverage();
  
  
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
   * Gets the value of the YIP field.
   * YIP
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYIP();
  
  
  /**
   * Sets the value of the Coverage field.
   */
  public void setCoverage(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the YIP field.
   */
  public void setYIP(java.lang.Integer value);
  
  
  
}