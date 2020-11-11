package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7PremOpsLossCost004RT.eti;GL7PremOpsLossCost004RT.eix;GL7PremOpsLossCost004RT.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7PremOpsLossCost004RTInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
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
   * Gets the value of the PremOpsTerr field.
   * PremOpsTerr
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsTerr();
  
  
  /**
   * Gets the value of the Value field.
   * Value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getValue();
  
  
  /**
   * Sets the value of the ClassCodeCGLProds field.
   */
  public void setClassCodeCGLProds(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the PremOpsTerr field.
   */
  public void setPremOpsTerr(java.lang.String value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  
}