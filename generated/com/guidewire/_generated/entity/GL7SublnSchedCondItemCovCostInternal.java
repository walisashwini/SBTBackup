package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItemCovCost.eti;GL7SublnSchedCondItemCovCost.eix;GL7SublnSchedCondItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCondItemCovCostInternal extends com.guidewire._generated.entity.GL7SublnSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedCondItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCondItmCov getSublnSchedCondItemCov();
  
  
  public gw.pl.persistence.core.Key getSublnSchedCondItemCovID();
  
  
  /**
   * Sets the value of the SublnSchedCondItemCov field.
   */
  public void setSublnSchedCondItemCov(entity.GL7SublnSchedCondItmCov value);
  
  
  public void setSublnSchedCondItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}