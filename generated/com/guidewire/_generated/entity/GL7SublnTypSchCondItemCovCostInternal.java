package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItemCovCost.eti;GL7SublnTypSchCondItemCovCost.eix;GL7SublnTypSchCondItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCondItemCovCostInternal extends com.guidewire._generated.entity.GL7SublnTypSchCondItemCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublnTypSchCondItemCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCondItmCov getSublnTypSchCondItemCov();
  
  
  public gw.pl.persistence.core.Key getSublnTypSchCondItemCovID();
  
  
  /**
   * Sets the value of the SublnTypSchCondItemCov field.
   */
  public void setSublnTypSchCondItemCov(entity.GL7SublnTypSchCondItmCov value);
  
  
  public void setSublnTypSchCondItemCovID(gw.pl.persistence.core.Key value);
  
  
  
}