package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemExclCost.eti;GL7LocSchedCondItemExclCost.eix;GL7LocSchedCondItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCondItemExclCostInternal extends com.guidewire._generated.entity.GL7LocSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedCondItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedCondItemExcl getLocSchedCondItemExcl();
  
  
  public gw.pl.persistence.core.Key getLocSchedCondItemExclID();
  
  
  /**
   * Sets the value of the LocSchedCondItemExcl field.
   */
  public void setLocSchedCondItemExcl(entity.GL7LocSchedCondItemExcl value);
  
  
  public void setLocSchedCondItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}