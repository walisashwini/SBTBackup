package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItemCost.eti;GL7SublnTypSchCondItemCost.eix;GL7SublnTypSchCondItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCondItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchCondItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeSchCondItem getSublnTypSchCondItem();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchCondItemID();
  
  
  /**
   * Sets the value of the SublnTypSchCondItem field.
   */
  public void setSublnTypSchCondItem(entity.GL7SublineTypeSchCondItem value);
  
  
  public void setSublnTypSchCondItemID(gw.pl.persistence.core.Key value);
  
  
  
}