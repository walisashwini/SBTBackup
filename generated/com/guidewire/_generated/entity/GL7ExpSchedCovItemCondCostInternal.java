package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemCondCost.eti;GL7ExpSchedCovItemCondCost.eix;GL7ExpSchedCovItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCovItemCondCostInternal extends com.guidewire._generated.entity.GL7ExpSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedCovItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCovItemCond getExpSchedCovItemCond();
  
  
  public gw.pl.persistence.core.Key getExpSchedCovItemCondID();
  
  
  /**
   * Sets the value of the ExpSchedCovItemCond field.
   */
  public void setExpSchedCovItemCond(entity.GL7ExpSchedCovItemCond value);
  
  
  public void setExpSchedCovItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}