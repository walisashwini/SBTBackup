package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeRF.eti;GL7SublineTypeRF.eix;GL7SublineTypeRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeRFInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.RateFactorInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.RateFactorAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeRF getBasedOnValue();
  
  
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
  public entity.GL7SublineTypeRF getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7SublineTypeModifier field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeMod getGL7SublineTypeModifier();
  
  
  public gw.pl.persistence.core.Key getGL7SublineTypeModifierID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublineTypeRF value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublineTypeRF value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublineTypeModifier field.
   */
  public void setGL7SublineTypeModifier(entity.GL7SublineTypeMod value);
  
  
  public void setGL7SublineTypeModifierID(gw.pl.persistence.core.Key value);
  
  
  
}