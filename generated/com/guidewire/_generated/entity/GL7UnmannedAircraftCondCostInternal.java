package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftCondCost.eti;GL7UnmannedAircraftCondCost.eix;GL7UnmannedAircraftCondCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UnmannedAircraftCondCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UnmannedAircraftCond field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraftCond getUnmannedAircraftCond();
  
  
  public gw.pl.persistence.core.Key getUnmannedAircraftCondID();
  
  
  /**
   * Sets the value of the UnmannedAircraftCond field.
   */
  public void setUnmannedAircraftCond(entity.GL7UnmannedAircraftCond value);
  
  
  public void setUnmannedAircraftCondID(gw.pl.persistence.core.Key value);
  
  
  
}