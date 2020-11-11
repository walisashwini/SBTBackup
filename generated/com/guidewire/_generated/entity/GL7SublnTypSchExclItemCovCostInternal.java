package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchExclItemCovCost.eti;GL7SublnTypSchExclItemCovCost.eix;GL7SublnTypSchExclItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchExclItemCovCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchExclItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchExclItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchExclItmCov getSublnTypSchExclItemCov();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchExclItemCovID();
  
  
  /**
   * Sets the value of the SublnTypSchExclItemCov field.
   */
  public void setSublnTypSchExclItemCov(entity.GL7SublnTypSchExclItmCov value);
  
  
  public void setSublnTypSchExclItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}