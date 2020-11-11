package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemCovCost.eti;GL7LocSchedCondItemCovCost.eix;GL7LocSchedCondItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCondItemCovCostInternal extends com.guidewire._generated.entity.GL7LocSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedCondItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedCondItemCov getLocSchedCondItemCov();
  
  
  public gw.pl.persistence.core.Key getLocSchedCondItemCovID();
  
  
  /**
   * Sets the value of the LocSchedCondItemCov field.
   */
  public void setLocSchedCondItemCov(entity.GL7LocSchedCondItemCov value);
  
  
  public void setLocSchedCondItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}