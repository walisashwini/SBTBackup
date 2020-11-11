package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7PremiumBasisEDLClassCo.eti;GL7PremiumBasisEDLClassCo.eix;GL7PremiumBasisEDLClassCo.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7PremiumBasisEDLClassCoInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the EDLClassCode field.
   * EDLClassCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEDLClassCode();
  
  
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
   * Sets the value of the EDLClassCode field.
   */
  public void setEDLClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}