package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCovItemCondCost.eti;GL7LocSchedCovItemCondCost.eix;GL7LocSchedCovItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCovItemCondCostInternal extends com.guidewire._generated.entity.GL7LocSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LocSchedCovItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedCovItemCond getLocSchedCovItemCond();
  
  
  public gw.pl.persistence.core.Key getLocSchedCovItemCondID();
  
  
  /**
   * Sets the value of the LocSchedCovItemCond field.
   */
  public void setLocSchedCovItemCond(entity.GL7LocSchedCovItemCond value);
  
  
  public void setLocSchedCovItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}