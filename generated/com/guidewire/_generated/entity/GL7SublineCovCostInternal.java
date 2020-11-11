package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineCovCost.eti;GL7SublineCovCost.eix;GL7SublineCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineCovCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublineCoverage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineCov getSublineCoverage();
  
  
  public gw.pl.persistence.core.Key getSublineCoverageID();
  
  
  /**
   * Sets the value of the SublineCoverage field.
   */
  public void setSublineCoverage(entity.GL7SublineCov value);
  
  
  public void setSublineCoverageID(gw.pl.persistence.core.Key value);
  
  
  
}