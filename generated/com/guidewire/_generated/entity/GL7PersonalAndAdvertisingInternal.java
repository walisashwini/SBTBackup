package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7PersonalAndAdvertising.eti;GL7PersonalAndAdvertising.eix;GL7PersonalAndAdvertising.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7PersonalAndAdvertisingInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the EachOccurrenceLim field.
   * EachOccurrenceLimit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEachOccurrenceLim();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the PersonalAdvertisingInjuryExcl field.
   * PersonalAndAdvertisingInjuryExcl
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPersonalAdvertisingInjuryExcl();
  
  
  /**
   * Gets the value of the Value field.
   * Value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValue();
  
  
  /**
   * Sets the value of the EachOccurrenceLim field.
   */
  public void setEachOccurrenceLim(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the PersonalAdvertisingInjuryExcl field.
   */
  public void setPersonalAdvertisingInjuryExcl(java.lang.String value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}