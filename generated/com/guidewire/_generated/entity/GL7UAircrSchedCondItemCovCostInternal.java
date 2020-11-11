package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCondItemCovCost.eti;GL7UAircrSchedCondItemCovCost.eix;GL7UAircrSchedCondItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedCondItemCovCostInternal extends com.guidewire._generated.entity.GL7UAircrSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UAircrSchedCondItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCondItemCov getUAircrSchedCondItemCov();
  
  
  public gw.pl.persistence.core.Key getUAircrSchedCondItemCovID();
  
  
  /**
   * Sets the value of the UAircrSchedCondItemCov field.
   */
  public void setUAircrSchedCondItemCov(entity.GL7UAircrSchedCondItemCov value);
  
  
  public void setUAircrSchedCondItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}