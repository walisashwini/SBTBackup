package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemExclCost.eti;GL7ExpSchedCovItemExclCost.eix;GL7ExpSchedCovItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCovItemExclCostInternal extends com.guidewire._generated.entity.GL7ExpSchedCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedCovItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCovItemExcl getExpSchedCovItemExcl();
  
  
  public gw.pl.persistence.core.Key getExpSchedCovItemExclID();
  
  
  /**
   * Sets the value of the ExpSchedCovItemExcl field.
   */
  public void setExpSchedCovItemExcl(entity.GL7ExpSchedCovItemExcl value);
  
  
  public void setExpSchedCovItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}