package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItemExclCost.eti;GL7SublnSchedCovItemExclCost.eix;GL7SublnSchedCovItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCovItemExclCostInternal extends com.guidewire._generated.entity.GL7SublnSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedCovItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItmExcl getSublnSchedCovItemExcl();
  
  
  public gw.pl.persistence.core.Key getSublnSchedCovItemExclID();
  
  
  /**
   * Sets the value of the SublnSchedCovItemExcl field.
   */
  public void setSublnSchedCovItemExcl(entity.GL7SublnSchedCovItmExcl value);
  
  
  public void setSublnSchedCovItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}