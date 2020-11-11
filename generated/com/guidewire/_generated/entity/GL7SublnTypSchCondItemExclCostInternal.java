package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItemExclCost.eti;GL7SublnTypSchCondItemExclCost.eix;GL7SublnTypSchCondItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCondItemExclCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchCondItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCondItmExcl getSublnTypSchCondItemExcl();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchCondItemExclID();
  
  
  /**
   * Sets the value of the SublnTypSchCondItemExcl field.
   */
  public void setSublnTypSchCondItemExcl(entity.GL7SublnTypSchCondItmExcl value);
  
  
  public void setSublnTypSchCondItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}