package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCondCost.eti;GL7LocSchedExclItemCondCost.eix;GL7LocSchedExclItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedExclItemCondCostInternal extends com.guidewire._generated.entity.GL7LocSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedExclItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedExclItemCond getLocSchedExclItemCond();
  
  
  public gw.pl.persistence.core.Key getLocSchedExclItemCondID();
  
  
  /**
   * Sets the value of the LocSchedExclItemCond field.
   */
  public void setLocSchedExclItemCond(entity.GL7LocSchedExclItemCond value);
  
  
  public void setLocSchedExclItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}