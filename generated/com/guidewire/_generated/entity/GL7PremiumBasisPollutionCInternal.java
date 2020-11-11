package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7PremiumBasisPollutionC.eti;GL7PremiumBasisPollutionC.eix;GL7PremiumBasisPollutionC.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7PremiumBasisPollutionCInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the PollutionClassCode field.
   * PollutionClassCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionClassCode();
  
  
  /**
   * Gets the value of the Value field.
   * Value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValue();
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the PollutionClassCode field.
   */
  public void setPollutionClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}