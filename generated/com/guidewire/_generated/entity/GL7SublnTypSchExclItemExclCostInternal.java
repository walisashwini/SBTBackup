package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItemExclCost.eti;GL7SublnTypSchExclItemExclCost.eix;GL7SublnTypSchExclItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchExclItemExclCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchExclItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchExclItmExcl getSublnTypSchExclItemExcl();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchExclItemExclID();
  
  
  /**
   * Sets the value of the SublnTypSchExclItemExcl field.
   */
  public void setSublnTypSchExclItemExcl(entity.GL7SublnTypSchExclItmExcl value);
  
  
  public void setSublnTypSchExclItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}