package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeExclCost.eti;GL7SublineTypeExclCost.eix;GL7SublineTypeExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeExclCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublineTypeExclusion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeExcl getSublineTypeExclusion();
  
  
  public gw.pl.persistence.core.Key getSublineTypeExclusionID();
  
  
  /**
   * Sets the value of the SublineTypeExclusion field.
   */
  public void setSublineTypeExclusion(entity.GL7SublineTypeExcl value);
  
  
  public void setSublineTypeExclusionID(gw.pl.persistence.core.Key value);
  
  
  
}