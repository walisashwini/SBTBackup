package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7GovernmentalUnitsPremi.eti;GL7GovernmentalUnitsPremi.eix;GL7GovernmentalUnitsPremi.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7GovernmentalUnitsPremiInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the EachOccurrenceLimGovSubdivisio field.
   * EachOccurrenceLimitGovernmentalSubdivision
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEachOccurrenceLimGovSubdivisio();
  
  
  /**
   * Gets the value of the GeneralAggLimGovSubdivision field.
   * GeneralAggregateLimitGovernmentalSubdivision
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGeneralAggLimGovSubdivision();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the PerPersonLim field.
   * PerPersonLimit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPerPersonLim();
  
  
  /**
   * Gets the value of the Value field.
   * Value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getValue();
  
  
  /**
   * Sets the value of the EachOccurrenceLimGovSubdivisio field.
   */
  public void setEachOccurrenceLimGovSubdivisio(java.lang.String value);
  
  
  /**
   * Sets the value of the GeneralAggLimGovSubdivision field.
   */
  public void setGeneralAggLimGovSubdivision(java.lang.String value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the PerPersonLim field.
   */
  public void setPerPersonLim(java.lang.String value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.math.BigDecimal value);
  
  
  
}