package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemExclCost.eti;GL7LocSchedCovItemExclCost.eix;GL7LocSchedCovItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCovItemExclCostInternal extends com.guidewire._generated.entity.GL7LocSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedCovItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedCovItemExcl getLocSchedCovItemExcl();
  
  
  public gw.pl.persistence.core.Key getLocSchedCovItemExclID();
  
  
  /**
   * Sets the value of the LocSchedCovItemExcl field.
   */
  public void setLocSchedCovItemExcl(entity.GL7LocSchedCovItemExcl value);
  
  
  public void setLocSchedCovItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}