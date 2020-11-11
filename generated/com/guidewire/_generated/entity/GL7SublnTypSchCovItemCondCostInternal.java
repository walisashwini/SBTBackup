package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItemCondCost.eti;GL7SublnTypSchCovItemCondCost.eix;GL7SublnTypSchCovItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCovItemCondCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchCovItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCovItmCond getSublnTypSchCovItemCond();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchCovItemCondID();
  
  
  /**
   * Sets the value of the SublnTypSchCovItemCond field.
   */
  public void setSublnTypSchCovItemCond(entity.GL7SublnTypSchCovItmCond value);
  
  
  public void setSublnTypSchCovItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}