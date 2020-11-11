package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineExclCost.eti;GL7SublineExclCost.eix;GL7SublineExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineExclCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the SublineExclusion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineExcl getSublineExclusion();
  
  
  public gw.pl.persistence.core.Key getSublineExclusionID();
  
  
  /**
   * Sets the value of the SublineExclusion field.
   */
  public void setSublineExclusion(entity.GL7SublineExcl value);
  
  
  public void setSublineExclusionID(gw.pl.persistence.core.Key value);
  
  
  
}