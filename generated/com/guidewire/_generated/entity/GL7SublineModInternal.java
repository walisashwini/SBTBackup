package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineMod.eti;GL7SublineMod.eix;GL7SublineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineModInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the GL7SublineRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7SublineRateFactors(entity.GL7SublineRF element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineMod getBasedOnValue();
  
  
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
  public entity.GL7SublineMod getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7Subline field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Subline getGL7Subline();
  
  
  public gw.pl.persistence.core.Key getGL7SublineID();
  
  
  /**
   * Gets the value of the GL7SublineRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineRF[] getGL7SublineRateFactors();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublineMod getSubtype();
  
  
  /**
   * Removes the given element from the GL7SublineRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7SublineRateFactors(entity.GL7SublineRF element);
  
  
  /**
   * Removes the given element from the GL7SublineRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7SublineRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublineMod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublineMod value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7Subline field.
   */
  public void setGL7Subline(entity.GL7Subline value);
  
  
  public void setGL7SublineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublineRateFactors field.
   */
  public void setGL7SublineRateFactors(entity.GL7SublineRF[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublineMod value);
  
  
  
}