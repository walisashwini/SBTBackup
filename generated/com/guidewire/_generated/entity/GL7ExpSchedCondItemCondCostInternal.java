package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCondCost.eti;GL7ExpSchedCondItemCondCost.eix;GL7ExpSchedCondItemCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCondItemCondCostInternal extends com.guidewire._generated.entity.GL7ExpSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedCondItemCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCondItemCond getExpSchedCondItemCond();
  
  
  public gw.pl.persistence.core.Key getExpSchedCondItemCondID();
  
  
  /**
   * Sets the value of the ExpSchedCondItemCond field.
   */
  public void setExpSchedCondItemCond(entity.GL7ExpSchedCondItemCond value);
  
  
  public void setExpSchedCondItemCondID(gw.pl.persistence.core.Key value);
  
  
  
}