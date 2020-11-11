package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCovCost.eti;GL7ExpSchedCondItemCovCost.eix;GL7ExpSchedCondItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCondItemCovCostInternal extends com.guidewire._generated.entity.GL7ExpSchedCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedCondItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCondItemCov getExpSchedCondItemCov();
  
  
  public gw.pl.persistence.core.Key getExpSchedCondItemCovID();
  
  
  /**
   * Sets the value of the ExpSchedCondItemCov field.
   */
  public void setExpSchedCondItemCov(entity.GL7ExpSchedCondItemCov value);
  
  
  public void setExpSchedCondItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}