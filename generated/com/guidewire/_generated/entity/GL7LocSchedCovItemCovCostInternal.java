package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemCovCost.eti;GL7LocSchedCovItemCovCost.eix;GL7LocSchedCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCovItemCovCostInternal extends com.guidewire._generated.entity.GL7LocSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedCovItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedCovItemCov getLocSchedCovItemCov();
  
  
  public gw.pl.persistence.core.Key getLocSchedCovItemCovID();
  
  
  /**
   * Sets the value of the LocSchedCovItemCov field.
   */
  public void setLocSchedCovItemCov(entity.GL7LocSchedCovItemCov value);
  
  
  public void setLocSchedCovItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}