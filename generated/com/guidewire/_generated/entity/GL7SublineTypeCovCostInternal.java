package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeCovCost.eti;GL7SublineTypeCovCost.eix;GL7SublineTypeCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeCovCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublineTypeCoverage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCov getSublineTypeCoverage();
  
  
  public gw.pl.persistence.core.Key getSublineTypeCoverageID();
  
  
  /**
   * Sets the value of the SublineTypeCoverage field.
   */
  public void setSublineTypeCoverage(entity.GL7SublineTypeCov value);
  
  
  public void setSublineTypeCoverageID(gw.pl.persistence.core.Key value);
  
  
  
}