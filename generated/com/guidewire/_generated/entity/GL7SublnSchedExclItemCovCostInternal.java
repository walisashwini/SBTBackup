package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItemCovCost.eti;GL7SublnSchedExclItemCovCost.eix;GL7SublnSchedExclItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedExclItemCovCostInternal extends com.guidewire._generated.entity.GL7SublnSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedExclItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedExclItmCov getSublnSchedExclItemCov();
  
  
  public gw.pl.persistence.core.Key getSublnSchedExclItemCovID();
  
  
  /**
   * Sets the value of the SublnSchedExclItemCov field.
   */
  public void setSublnSchedExclItemCov(entity.GL7SublnSchedExclItmCov value);
  
  
  public void setSublnSchedExclItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}