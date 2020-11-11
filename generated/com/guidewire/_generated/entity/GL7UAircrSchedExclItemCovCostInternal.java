package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExclItemCovCost.eti;GL7UAircrSchedExclItemCovCost.eix;GL7UAircrSchedExclItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedExclItemCovCostInternal extends com.guidewire._generated.entity.GL7UAircrSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UAircrSchedExclItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedExclItemCov getUAircrSchedExclItemCov();
  
  
  public gw.pl.persistence.core.Key getUAircrSchedExclItemCovID();
  
  
  /**
   * Sets the value of the UAircrSchedExclItemCov field.
   */
  public void setUAircrSchedExclItemCov(entity.GL7UAircrSchedExclItemCov value);
  
  
  public void setUAircrSchedExclItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}