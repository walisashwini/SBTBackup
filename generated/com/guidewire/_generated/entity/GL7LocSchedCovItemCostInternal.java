package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemCost.eti;GL7LocSchedCovItemCost.eix;GL7LocSchedCovItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCovItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationSchedCovItem getLocSchedCovItem();
  
  
  public gw.pl.persistence.core.Key getLocSchedCovItemID();
  
  
  /**
   * Sets the value of the LocSchedCovItem field.
   */
  public void setLocSchedCovItem(entity.GL7LocationSchedCovItem value);
  
  
  public void setLocSchedCovItemID(gw.pl.persistence.core.Key value);
  
  
  
}