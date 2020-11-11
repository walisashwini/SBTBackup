package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItemCost.eti;GL7SublnSchedCondItemCost.eix;GL7SublnSchedCondItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCondItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnSchedCondItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedCondItem getSublnSchedCondItem();
  
  
  public gw.pl.persistence.core.Key getSublnSchedCondItemID();
  
  
  /**
   * Sets the value of the SublnSchedCondItem field.
   */
  public void setSublnSchedCondItem(entity.GL7SublineSchedCondItem value);
  
  
  public void setSublnSchedCondItemID(gw.pl.persistence.core.Key value);
  
  
  
}