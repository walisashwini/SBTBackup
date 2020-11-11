package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExposureMod.eti;GL7ExposureMod.eix;GL7ExposureMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExposureModInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter {
  /**
   * Adds the given element to the GL7ExposureRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7ExposureRateFactors(entity.GL7ExposureRF element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureMod getBasedOnValue();
  
  
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
  public entity.GL7ExposureMod getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7Exposure field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Exposure getGL7Exposure();
  
  
  public gw.pl.persistence.core.Key getGL7ExposureID();
  
  
  /**
   * Gets the value of the GL7ExposureRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureRF[] getGL7ExposureRateFactors();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7ExposureMod getSubtype();
  
  
  /**
   * Removes the given element from the GL7ExposureRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7ExposureRateFactors(entity.GL7ExposureRF element);
  
  
  /**
   * Removes the given element from the GL7ExposureRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7ExposureRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7ExposureMod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7ExposureMod value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7Exposure field.
   */
  public void setGL7Exposure(entity.GL7Exposure value);
  
  
  public void setGL7ExposureID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7ExposureRateFactors field.
   */
  public void setGL7ExposureRateFactors(entity.GL7ExposureRF[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7ExposureMod value);
  
  
  
}