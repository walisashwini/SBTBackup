package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItemCondCost.eti;GL7SublnTypSchCondItemCondCost.eix;GL7SublnTypSchCondItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCondItemCondCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchCondItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCondItmCond getSublnTypSchCondItemCond();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchCondItemCondID();
  
  
  /**
   * Sets the value of the SublnTypSchCondItemCond field.
   */
  public void setSublnTypSchCondItemCond(entity.GL7SublnTypSchCondItmCond value);
  
  
  public void setSublnTypSchCondItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}