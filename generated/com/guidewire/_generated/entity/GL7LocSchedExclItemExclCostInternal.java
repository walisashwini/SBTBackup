package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemExclCost.eti;GL7LocSchedExclItemExclCost.eix;GL7LocSchedExclItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedExclItemExclCostInternal extends com.guidewire._generated.entity.GL7LocSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedExclItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedExclItemExcl getLocSchedExclItemExcl();
  
  
  public gw.pl.persistence.core.Key getLocSchedExclItemExclID();
  
  
  /**
   * Sets the value of the LocSchedExclItemExcl field.
   */
  public void setLocSchedExclItemExcl(entity.GL7LocSchedExclItemExcl value);
  
  
  public void setLocSchedExclItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}