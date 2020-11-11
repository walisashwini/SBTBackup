package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7PercentageConversionRT.eti;GL7PercentageConversionRT.eix;GL7PercentageConversionRT.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7PercentageConversionRTInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the PercentageText field.
   * PercentageText
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPercentageText();
  
  
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
   * Sets the value of the PercentageText field.
   */
  public void setPercentageText(java.lang.String value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  
}