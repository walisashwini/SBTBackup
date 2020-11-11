package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItemCovCost.eti;GL7SublnSchedCovItemCovCost.eix;GL7SublnSchedCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCovItemCovCostInternal extends com.guidewire._generated.entity.GL7SublnSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedCovItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItmCov getSublnSchedCovItemCov();
  
  
  public gw.pl.persistence.core.Key getSublnSchedCovItemCovID();
  
  
  /**
   * Sets the value of the SublnSchedCovItemCov field.
   */
  public void setSublnSchedCovItemCov(entity.GL7SublnSchedCovItmCov value);
  
  
  public void setSublnSchedCovItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}