package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItemCondCost.eti;GL7SublnTypSchExclItemCondCost.eix;GL7SublnTypSchExclItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchExclItemCondCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchExclItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchExclItmCond getSublnTypSchExclItemCond();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchExclItemCondID();
  
  
  /**
   * Sets the value of the SublnTypSchExclItemCond field.
   */
  public void setSublnTypSchExclItemCond(entity.GL7SublnTypSchExclItmCond value);
  
  
  public void setSublnTypSchExclItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}