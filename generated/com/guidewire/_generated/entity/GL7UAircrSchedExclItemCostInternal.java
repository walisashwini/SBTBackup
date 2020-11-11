package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedExclItemCost.eti;GL7UAircrSchedExclItemCost.eix;GL7UAircrSchedExclItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedExclItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UAircrSchedExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedExclItem getUAircrSchedExclItem();
  
  
  public gw.pl.persistence.core.Key getUAircrSchedExclItemID();
  
  
  /**
   * Sets the value of the UAircrSchedExclItem field.
   */
  public void setUAircrSchedExclItem(entity.GL7UAircrSchedExclItem value);
  
  
  public void setUAircrSchedExclItemID(gw.pl.persistence.core.Key value);
  
  
  
}