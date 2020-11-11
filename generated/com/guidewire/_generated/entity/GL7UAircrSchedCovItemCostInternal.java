package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCovItemCost.eti;GL7UAircrSchedCovItemCost.eix;GL7UAircrSchedCovItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedCovItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UAircrSchedCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItem getUAircrSchedCovItem();
  
  
  public gw.pl.persistence.core.Key getUAircrSchedCovItemID();
  
  
  /**
   * Sets the value of the UAircrSchedCovItem field.
   */
  public void setUAircrSchedCovItem(entity.GL7UAircrSchedCovItem value);
  
  
  public void setUAircrSchedCovItemID(gw.pl.persistence.core.Key value);
  
  
  
}