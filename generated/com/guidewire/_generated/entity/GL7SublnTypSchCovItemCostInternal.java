package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItemCost.eti;GL7SublnTypSchCovItemCost.eix;GL7SublnTypSchCovItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCovItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeSchCovItem getSublnTypSchCovItem();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchCovItemID();
  
  
  /**
   * Sets the value of the SublnTypSchCovItem field.
   */
  public void setSublnTypSchCovItem(entity.GL7SublineTypeSchCovItem value);
  
  
  public void setSublnTypSchCovItemID(gw.pl.persistence.core.Key value);
  
  
  
}