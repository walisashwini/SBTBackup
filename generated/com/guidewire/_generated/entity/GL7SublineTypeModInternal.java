package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeMod.eti;GL7SublineTypeMod.eix;GL7SublineTypeMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeModInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the GL7SublineTypeRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7SublineTypeRateFactors(entity.GL7SublineTypeRF element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeMod getBasedOnValue();
  
  
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
  public entity.GL7SublineTypeMod getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7SublineType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineType getGL7SublineType();
  
  
  public gw.pl.persistence.core.Key getGL7SublineTypeID();
  
  
  /**
   * Gets the value of the GL7SublineTypeRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeRF[] getGL7SublineTypeRateFactors();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublineTypeMod getSubtype();
  
  
  /**
   * Removes the given element from the GL7SublineTypeRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7SublineTypeRateFactors(entity.GL7SublineTypeRF element);
  
  
  /**
   * Removes the given element from the GL7SublineTypeRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7SublineTypeRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublineTypeMod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublineTypeMod value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublineType field.
   */
  public void setGL7SublineType(entity.GL7SublineType value);
  
  
  public void setGL7SublineTypeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublineTypeRateFactors field.
   */
  public void setGL7SublineTypeRateFactors(entity.GL7SublineTypeRF[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublineTypeMod value);
  
  
  
}