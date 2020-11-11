package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationCondCost.eti;GL7LocationCondCost.eix;GL7LocationCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocationCondCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocationCondition field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationCond getLocationCondition();
  
  
  public gw.pl.persistence.core.Key getLocationConditionID();
  
  
  /**
   * Sets the value of the LocationCondition field.
   */
  public void setLocationCondition(entity.GL7LocationCond value);
  
  
  public void setLocationConditionID(gw.pl.persistence.core.Key value);
  
  
  
}