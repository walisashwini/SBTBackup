package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeCondCost.eti;GL7SublineTypeCondCost.eix;GL7SublineTypeCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeCondCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublineTypeCondition field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCond getSublineTypeCondition();
  
  
  public gw.pl.persistence.core.Key getSublineTypeConditionID();
  
  
  /**
   * Sets the value of the SublineTypeCondition field.
   */
  public void setSublineTypeCondition(entity.GL7SublineTypeCond value);
  
  
  public void setSublineTypeConditionID(gw.pl.persistence.core.Key value);
  
  
  
}