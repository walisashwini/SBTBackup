package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItemCondCost.eti;GL7SublnSchedCovItemCondCost.eix;GL7SublnSchedCovItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCovItemCondCostInternal extends com.guidewire._generated.entity.GL7SublnSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedCovItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItmCond getSublnSchedCovItemCond();
  
  
  public gw.pl.persistence.core.Key getSublnSchedCovItemCondID();
  
  
  /**
   * Sets the value of the SublnSchedCovItemCond field.
   */
  public void setSublnSchedCovItemCond(entity.GL7SublnSchedCovItmCond value);
  
  
  public void setSublnSchedCovItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}