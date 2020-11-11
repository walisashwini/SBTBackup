package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItemExclCost.eti;GL7SublnSchedExclItemExclCost.eix;GL7SublnSchedExclItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedExclItemExclCostInternal extends com.guidewire._generated.entity.GL7SublnSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedExclItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedExclItmExcl getSublnSchedExclItemExcl();
  
  
  public gw.pl.persistence.core.Key getSublnSchedExclItemExclID();
  
  
  /**
   * Sets the value of the SublnSchedExclItemExcl field.
   */
  public void setSublnSchedExclItemExcl(entity.GL7SublnSchedExclItmExcl value);
  
  
  public void setSublnSchedExclItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}