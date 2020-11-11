package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftCovCost.eti;GL7UnmannedAircraftCovCost.eix;GL7UnmannedAircraftCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UnmannedAircraftCovCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UnmannedAircraftCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraftCov getUnmannedAircraftCov();
  
  
  public gw.pl.persistence.core.Key getUnmannedAircraftCovID();
  
  
  /**
   * Sets the value of the UnmannedAircraftCov field.
   */
  public void setUnmannedAircraftCov(entity.GL7UnmannedAircraftCov value);
  
  
  public void setUnmannedAircraftCovID(gw.pl.persistence.core.Key value);
  
  
  
}