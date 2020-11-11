package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineCovCost.eti;GL7LineCovCost.eix;GL7LineCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LineCovCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LineCoverage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineCov getLineCoverage();
  
  
  public gw.pl.persistence.core.Key getLineCoverageID();
  
  
  /**
   * Sets the value of the LineCoverage field.
   */
  public void setLineCoverage(entity.GL7LineCov value);
  
  
  public void setLineCoverageID(gw.pl.persistence.core.Key value);
  
  
  
}