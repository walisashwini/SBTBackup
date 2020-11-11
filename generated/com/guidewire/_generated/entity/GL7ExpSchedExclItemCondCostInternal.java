package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCondCost.eti;GL7ExpSchedExclItemCondCost.eix;GL7ExpSchedExclItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedExclItemCondCostInternal extends com.guidewire._generated.entity.GL7ExpSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedExclItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedExclItemCond getExpSchedExclItemCond();
  
  
  public gw.pl.persistence.core.Key getExpSchedExclItemCondID();
  
  
  /**
   * Sets the value of the ExpSchedExclItemCond field.
   */
  public void setExpSchedExclItemCond(entity.GL7ExpSchedExclItemCond value);
  
  
  public void setExpSchedExclItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}