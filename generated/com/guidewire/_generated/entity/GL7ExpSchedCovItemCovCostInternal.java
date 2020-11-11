package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemCovCost.eti;GL7ExpSchedCovItemCovCost.eix;GL7ExpSchedCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCovItemCovCostInternal extends com.guidewire._generated.entity.GL7ExpSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedCovItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCovItemCov getExpSchedCovItemCov();
  
  
  public gw.pl.persistence.core.Key getExpSchedCovItemCovID();
  
  
  /**
   * Sets the value of the ExpSchedCovItemCov field.
   */
  public void setExpSchedCovItemCov(entity.GL7ExpSchedCovItemCov value);
  
  
  public void setExpSchedCovItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}