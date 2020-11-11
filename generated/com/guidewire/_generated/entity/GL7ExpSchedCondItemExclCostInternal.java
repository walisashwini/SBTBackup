package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemExclCost.eti;GL7ExpSchedCondItemExclCost.eix;GL7ExpSchedCondItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCondItemExclCostInternal extends com.guidewire._generated.entity.GL7ExpSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedCondItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCondItemExcl getExpSchedCondItemExcl();
  
  
  public gw.pl.persistence.core.Key getExpSchedCondItemExclID();
  
  
  /**
   * Sets the value of the ExpSchedCondItemExcl field.
   */
  public void setExpSchedCondItemExcl(entity.GL7ExpSchedCondItemExcl value);
  
  
  public void setExpSchedCondItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}