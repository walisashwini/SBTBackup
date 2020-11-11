package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineCondCost.eti;GL7SublineCondCost.eix;GL7SublineCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineCondCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublineCondition field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineCond getSublineCondition();
  
  
  public gw.pl.persistence.core.Key getSublineConditionID();
  
  
  /**
   * Sets the value of the SublineCondition field.
   */
  public void setSublineCondition(entity.GL7SublineCond value);
  
  
  public void setSublineConditionID(gw.pl.persistence.core.Key value);
  
  
  
}