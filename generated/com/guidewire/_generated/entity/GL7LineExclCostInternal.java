package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LineExclCost.eti;GL7LineExclCost.eix;GL7LineExclCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LineExclCostInternal extends com.guidewire._generated.entity.GL7CostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the LineExclusion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LineExcl getLineExclusion();
  
  
  public gw.pl.persistence.core.Key getLineExclusionID();
  
  
  /**
   * Sets the value of the LineExclusion field.
   */
  public void setLineExclusion(entity.GL7LineExcl value);
  
  
  public void setLineExclusionID(gw.pl.persistence.core.Key value);
  
  
  
}