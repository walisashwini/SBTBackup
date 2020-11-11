package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItemExclCost.eti;GL7SublnSchedCondItemExclCost.eix;GL7SublnSchedCondItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCondItemExclCostInternal extends com.guidewire._generated.entity.GL7SublnSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedCondItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCondItmExcl getSublnSchedCondItemExcl();
  
  
  public gw.pl.persistence.core.Key getSublnSchedCondItemExclID();
  
  
  /**
   * Sets the value of the SublnSchedCondItemExcl field.
   */
  public void setSublnSchedCondItemExcl(entity.GL7SublnSchedCondItmExcl value);
  
  
  public void setSublnSchedCondItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}