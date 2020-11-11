package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCovCost.eti;GL7LocSchedExclItemCovCost.eix;GL7LocSchedExclItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedExclItemCovCostInternal extends com.guidewire._generated.entity.GL7LocSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedExclItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedExclItemCov getLocSchedExclItemCov();
  
  
  public gw.pl.persistence.core.Key getLocSchedExclItemCovID();
  
  
  /**
   * Sets the value of the LocSchedExclItemCov field.
   */
  public void setLocSchedExclItemCov(entity.GL7LocSchedExclItemCov value);
  
  
  public void setLocSchedExclItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}