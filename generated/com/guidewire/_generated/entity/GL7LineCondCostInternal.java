package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineCondCost.eti;GL7LineCondCost.eix;GL7LineCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LineCondCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LineCondition field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineCond getLineCondition();
  
  
  public gw.pl.persistence.core.Key getLineConditionID();
  
  
  /**
   * Sets the value of the LineCondition field.
   */
  public void setLineCondition(entity.GL7LineCond value);
  
  
  public void setLineConditionID(gw.pl.persistence.core.Key value);
  
  
  
}