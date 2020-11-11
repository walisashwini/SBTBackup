package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationRF.eti;GL7LocationRF.eix;GL7LocationRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocationRFInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.RateFactorInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.RateFactorAdapter {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationRF getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationRF getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7LocationModifier field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationMod getGL7LocationModifier();
  
  
  public gw.pl.persistence.core.Key getGL7LocationModifierID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7LocationRF value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7LocationRF value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7LocationModifier field.
   */
  public void setGL7LocationModifier(entity.GL7LocationMod value);
  
  
  public void setGL7LocationModifierID(gw.pl.persistence.core.Key value);
  
  
  
}