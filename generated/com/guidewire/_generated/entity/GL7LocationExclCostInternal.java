package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationExclCost.eti;GL7LocationExclCost.eix;GL7LocationExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocationExclCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocationExclusion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationExcl getLocationExclusion();
  
  
  public gw.pl.persistence.core.Key getLocationExclusionID();
  
  
  /**
   * Sets the value of the LocationExclusion field.
   */
  public void setLocationExclusion(entity.GL7LocationExcl value);
  
  
  public void setLocationExclusionID(gw.pl.persistence.core.Key value);
  
  
  
}