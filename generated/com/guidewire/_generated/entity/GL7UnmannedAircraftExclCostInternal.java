package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraftExclCost.eti;GL7UnmannedAircraftExclCost.eix;GL7UnmannedAircraftExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UnmannedAircraftExclCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the UnmannedAircraftExcl field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraftExcl getUnmannedAircraftExcl();
  
  
  public gw.pl.persistence.core.Key getUnmannedAircraftExclID();
  
  
  /**
   * Sets the value of the UnmannedAircraftExcl field.
   */
  public void setUnmannedAircraftExcl(entity.GL7UnmannedAircraftExcl value);
  
  
  public void setUnmannedAircraftExclID(gw.pl.persistence.core.Key value);
  
  
  
}