package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItemCondCost.eti;GL7SublnSchedCondItemCondCost.eix;GL7SublnSchedCondItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCondItemCondCostInternal extends com.guidewire._generated.entity.GL7SublnSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedCondItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCondItmCond getSublnSchedCondItemCond();
  
  
  public gw.pl.persistence.core.Key getSublnSchedCondItemCondID();
  
  
  /**
   * Sets the value of the SublnSchedCondItemCond field.
   */
  public void setSublnSchedCondItemCond(entity.GL7SublnSchedCondItmCond value);
  
  
  public void setSublnSchedCondItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}