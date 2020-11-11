package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCondItemCost.eti;GL7UAircrSchedCondItemCost.eix;GL7UAircrSchedCondItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedCondItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UAircrSchedCondItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCondItem getUAircrSchedCondItem();
  
  
  public gw.pl.persistence.core.Key getUAircrSchedCondItemID();
  
  
  /**
   * Sets the value of the UAircrSchedCondItem field.
   */
  public void setUAircrSchedCondItem(entity.GL7UAircrSchedCondItem value);
  
  
  public void setUAircrSchedCondItemID(gw.pl.persistence.core.Key value);
  
  
  
}