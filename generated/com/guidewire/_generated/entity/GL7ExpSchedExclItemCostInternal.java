package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCost.eti;GL7ExpSchedExclItemCost.eix;GL7ExpSchedExclItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedExclItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureSchedExclItem getExpSchedExclItem();
  
  
  public gw.pl.persistence.core.Key getExpSchedExclItemID();
  
  
  /**
   * Sets the value of the ExpSchedExclItem field.
   */
  public void setExpSchedExclItem(entity.GL7ExposureSchedExclItem value);
  
  
  public void setExpSchedExclItemID(gw.pl.persistence.core.Key value);
  
  
  
}