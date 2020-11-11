package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationCovCost.eti;GL7LocationCovCost.eix;GL7LocationCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocationCovCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocationCoverage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationCov getLocationCoverage();
  
  
  public gw.pl.persistence.core.Key getLocationCoverageID();
  
  
  /**
   * Sets the value of the LocationCoverage field.
   */
  public void setLocationCoverage(entity.GL7LocationCov value);
  
  
  public void setLocationCoverageID(gw.pl.persistence.core.Key value);
  
  
  
}