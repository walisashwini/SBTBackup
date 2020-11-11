package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureCondCost.eti;GL7ExposureCondCost.eix;GL7ExposureCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExposureCondCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExposureCondition field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureCond getExposureCondition();
  
  
  public gw.pl.persistence.core.Key getExposureConditionID();
  
  
  /**
   * Sets the value of the ExposureCondition field.
   */
  public void setExposureCondition(entity.GL7ExposureCond value);
  
  
  public void setExposureConditionID(gw.pl.persistence.core.Key value);
  
  
  
}