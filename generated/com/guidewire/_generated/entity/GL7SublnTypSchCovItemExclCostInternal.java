package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItemExclCost.eti;GL7SublnTypSchCovItemExclCost.eix;GL7SublnTypSchCovItemExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCovItemExclCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchCovItemExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCovItmExcl getSublnTypSchCovItemExcl();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchCovItemExclID();
  
  
  /**
   * Sets the value of the SublnTypSchCovItemExcl field.
   */
  public void setSublnTypSchCovItemExcl(entity.GL7SublnTypSchCovItmExcl value);
  
  
  public void setSublnTypSchCovItemExclID(gw.pl.persistence.core.Key value);
  
  
  
}