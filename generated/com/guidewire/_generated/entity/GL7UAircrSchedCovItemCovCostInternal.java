package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCovItemCovCost.eti;GL7UAircrSchedCovItemCovCost.eix;GL7UAircrSchedCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedCovItemCovCostInternal extends com.guidewire._generated.entity.GL7UAircrSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UAircrSchedCovItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItemCov getUAircrSchedCovItemCov();
  
  
  public gw.pl.persistence.core.Key getUAircrSchedCovItemCovID();
  
  
  /**
   * Sets the value of the UAircrSchedCovItemCov field.
   */
  public void setUAircrSchedCovItemCov(entity.GL7UAircrSchedCovItemCov value);
  
  
  public void setUAircrSchedCovItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}