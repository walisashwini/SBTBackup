package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCovCost.eti;GL7ExpSchedExclItemCovCost.eix;GL7ExpSchedExclItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedExclItemCovCostInternal extends com.guidewire._generated.entity.GL7ExpSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedExclItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedExclItemCov getExpSchedExclItemCov();
  
  
  public gw.pl.persistence.core.Key getExpSchedExclItemCovID();
  
  
  /**
   * Sets the value of the ExpSchedExclItemCov field.
   */
  public void setExpSchedExclItemCov(entity.GL7ExpSchedExclItemCov value);
  
  
  public void setExpSchedExclItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}