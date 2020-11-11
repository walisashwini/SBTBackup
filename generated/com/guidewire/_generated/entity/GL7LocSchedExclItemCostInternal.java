package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCost.eti;GL7LocSchedExclItemCost.eix;GL7LocSchedExclItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedExclItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationSchedExclItem getLocSchedExclItem();
  
  
  public gw.pl.persistence.core.Key getLocSchedExclItemID();
  
  
  /**
   * Sets the value of the LocSchedExclItem field.
   */
  public void setLocSchedExclItem(entity.GL7LocationSchedExclItem value);
  
  
  public void setLocSchedExclItemID(gw.pl.persistence.core.Key value);
  
  
  
}