package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemExclCost.eti;GL7ExpSchedExclItemExclCost.eix;GL7ExpSchedExclItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedExclItemExclCostInternal extends com.guidewire._generated.entity.GL7ExpSchedExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedExclItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedExclItemExcl getExpSchedExclItemExcl();
  
  
  public gw.pl.persistence.core.Key getExpSchedExclItemExclID();
  
  
  /**
   * Sets the value of the ExpSchedExclItemExcl field.
   */
  public void setExpSchedExclItemExcl(entity.GL7ExpSchedExclItemExcl value);
  
  
  public void setExpSchedExclItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}