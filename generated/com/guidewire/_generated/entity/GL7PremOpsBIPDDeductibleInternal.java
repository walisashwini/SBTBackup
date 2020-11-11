package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7PremOpsBIPDDeductible.eti;GL7PremOpsBIPDDeductible.eix;GL7PremOpsBIPDDeductible.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7PremOpsBIPDDeductibleInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the PremOpsBIDed field.
   * PremOpsBIDeductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsBIDed();
  
  
  /**
   * Gets the value of the PremOpsPDDed field.
   * PremOpsPDDeductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsPDDed();
  
  
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
   * Sets the value of the PremOpsBIDed field.
   */
  public void setPremOpsBIDed(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsPDDed field.
   */
  public void setPremOpsPDDed(java.lang.String value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}