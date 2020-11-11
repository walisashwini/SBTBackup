package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItemCondCost.eti;GL7SublnSchedExclItemCondCost.eix;GL7SublnSchedExclItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedExclItemCondCostInternal extends com.guidewire._generated.entity.GL7SublnSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedExclItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedExclItmCond getSublnSchedExclItemCond();
  
  
  public gw.pl.persistence.core.Key getSublnSchedExclItemCondID();
  
  
  /**
   * Sets the value of the SublnSchedExclItemCond field.
   */
  public void setSublnSchedExclItemCond(entity.GL7SublnSchedExclItmCond value);
  
  
  public void setSublnSchedExclItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}