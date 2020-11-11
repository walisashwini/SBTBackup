package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureExclCost.eti;GL7ExposureExclCost.eix;GL7ExposureExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExposureExclCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExposureExclusion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureExcl getExposureExclusion();
  
  
  public gw.pl.persistence.core.Key getExposureExclusionID();
  
  
  /**
   * Sets the value of the ExposureExclusion field.
   */
  public void setExposureExclusion(entity.GL7ExposureExcl value);
  
  
  public void setExposureExclusionID(gw.pl.persistence.core.Key value);
  
  
  
}