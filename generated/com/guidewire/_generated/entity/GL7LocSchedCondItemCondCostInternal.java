package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemCondCost.eti;GL7LocSchedCondItemCondCost.eix;GL7LocSchedCondItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCondItemCondCostInternal extends com.guidewire._generated.entity.GL7LocSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedCondItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedCondItemCond getLocSchedCondItemCond();
  
  
  public gw.pl.persistence.core.Key getLocSchedCondItemCondID();
  
  
  /**
   * Sets the value of the LocSchedCondItemCond field.
   */
  public void setLocSchedCondItemCond(entity.GL7LocSchedCondItemCond value);
  
  
  public void setLocSchedCondItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}