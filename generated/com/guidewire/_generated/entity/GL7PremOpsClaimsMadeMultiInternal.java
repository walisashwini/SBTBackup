package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7PremOpsClaimsMadeMulti.eti;GL7PremOpsClaimsMadeMulti.eix;GL7PremOpsClaimsMadeMulti.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7PremOpsClaimsMadeMultiInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the ClassCodeCGLProds field.
   * ClassCodeCGLProds
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassCodeCGLProds();
  
  
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
   * Gets the value of the YearInClaimsMade field.
   * YearInClaimsMade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearInClaimsMade();
  
  
  /**
   * Sets the value of the ClassCodeCGLProds field.
   */
  public void setClassCodeCGLProds(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the YearInClaimsMade field.
   */
  public void setYearInClaimsMade(java.lang.Integer value);
  
  
  
}