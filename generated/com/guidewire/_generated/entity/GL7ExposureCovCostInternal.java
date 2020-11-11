package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureCovCost.eti;GL7ExposureCovCost.eix;GL7ExposureCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExposureCovCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExposureCoverage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureCov getExposureCoverage();
  
  
  public gw.pl.persistence.core.Key getExposureCoverageID();
  
  
  /**
   * Sets the value of the ExposureCoverage field.
   */
  public void setExposureCoverage(entity.GL7ExposureCov value);
  
  
  public void setExposureCoverageID(gw.pl.persistence.core.Key value);
  
  
  
}