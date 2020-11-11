package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItemCost.eti;GL7SublnSchedCovItemCost.eix;GL7SublnSchedCovItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCovItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedCovItem getSublnSchedCovItem();
  
  
  public gw.pl.persistence.core.Key getSublnSchedCovItemID();
  
  
  /**
   * Sets the value of the SublnSchedCovItem field.
   */
  public void setSublnSchedCovItem(entity.GL7SublineSchedCovItem value);
  
  
  public void setSublnSchedCovItemID(gw.pl.persistence.core.Key value);
  
  
  
}