package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCondItemCost.eti;GL7ExpSchedCondItemCost.eix;GL7ExpSchedCondItemCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCondItemCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ExpSchedCondItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureSchedCondItem getExpSchedCondItem();
  
  
  public gw.pl.persistence.core.Key getExpSchedCondItemID();
  
  
  /**
   * Sets the value of the ExpSchedCondItem field.
   */
  public void setExpSchedCondItem(entity.GL7ExposureSchedCondItem value);
  
  
  public void setExpSchedCondItemID(gw.pl.persistence.core.Key value);
  
  
  
}