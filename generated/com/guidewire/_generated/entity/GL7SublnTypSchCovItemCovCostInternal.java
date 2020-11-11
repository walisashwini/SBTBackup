package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItemCovCost.eti;GL7SublnTypSchCovItemCovCost.eix;GL7SublnTypSchCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCovItemCovCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchCovItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchCovItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCovItmCov getSublnTypSchCovItemCov();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchCovItemCovID();
  
  
  /**
   * Sets the value of the SublnTypSchCovItemCov field.
   */
  public void setSublnTypSchCovItemCov(entity.GL7SublnTypSchCovItmCov value);
  
  
  public void setSublnTypSchCovItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}