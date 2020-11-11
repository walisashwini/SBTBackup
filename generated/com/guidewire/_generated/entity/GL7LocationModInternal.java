package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationMod.eti;GL7LocationMod.eix;GL7LocationMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocationModInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter {
  /**
   * Adds the given element to the GL7LocationRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7LocationRateFactors(entity.GL7LocationRF element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationMod getBasedOnValue();
  
  
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
  public entity.GL7LocationMod getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Location getGL7Location();
  
  
  public gw.pl.persistence.core.Key getGL7LocationID();
  
  
  /**
   * Gets the value of the GL7LocationRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationRF[] getGL7LocationRateFactors();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7LocationMod getSubtype();
  
  
  /**
   * Removes the given element from the GL7LocationRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7LocationRateFactors(entity.GL7LocationRF element);
  
  
  /**
   * Removes the given element from the GL7LocationRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7LocationRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7LocationMod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7LocationMod value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7Location field.
   */
  public void setGL7Location(entity.GL7Location value);
  
  
  public void setGL7LocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7LocationRateFactors field.
   */
  public void setGL7LocationRateFactors(entity.GL7LocationRF[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7LocationMod value);
  
  
  
}