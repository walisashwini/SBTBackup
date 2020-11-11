package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemCost.eti;GL7LocSchedCondItemCost.eix;GL7LocSchedCondItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCondItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedCondItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationSchedCondItem getLocSchedCondItem();
  
  
  public gw.pl.persistence.core.Key getLocSchedCondItemID();
  
  
  /**
   * Sets the value of the LocSchedCondItem field.
   */
  public void setLocSchedCondItem(entity.GL7LocationSchedCondItem value);
  
  
  public void setLocSchedCondItemID(gw.pl.persistence.core.Key value);
  
  
  
}