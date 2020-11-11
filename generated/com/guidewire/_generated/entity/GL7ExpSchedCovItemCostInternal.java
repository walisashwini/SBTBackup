package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemCost.eti;GL7ExpSchedCovItemCost.eix;GL7ExpSchedCovItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCovItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureSchedCovItem getExpSchedCovItem();
  
  
  public gw.pl.persistence.core.Key getExpSchedCovItemID();
  
  
  /**
   * Sets the value of the ExpSchedCovItem field.
   */
  public void setExpSchedCovItem(entity.GL7ExposureSchedCovItem value);
  
  
  public void setExpSchedCovItemID(gw.pl.persistence.core.Key value);
  
  
  
}