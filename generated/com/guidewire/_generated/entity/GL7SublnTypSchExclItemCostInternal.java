package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItemCost.eti;GL7SublnTypSchExclItemCost.eix;GL7SublnTypSchExclItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchExclItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeSchExclItem getSublnTypSchExclItem();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchExclItemID();
  
  
  /**
   * Sets the value of the SublnTypSchExclItem field.
   */
  public void setSublnTypSchExclItem(entity.GL7SublineTypeSchExclItem value);
  
  
  public void setSublnTypSchExclItemID(gw.pl.persistence.core.Key value);
  
  
  
}