package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItemCost.eti;GL7SublnSchedExclItemCost.eix;GL7SublnSchedExclItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedExclItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedExclItem getSublnSchedExclItem();
  
  
  public gw.pl.persistence.core.Key getSublnSchedExclItemID();
  
  
  /**
   * Sets the value of the SublnSchedExclItem field.
   */
  public void setSublnSchedExclItem(entity.GL7SublineSchedExclItem value);
  
  
  public void setSublnSchedExclItemID(gw.pl.persistence.core.Key value);
  
  
  
}