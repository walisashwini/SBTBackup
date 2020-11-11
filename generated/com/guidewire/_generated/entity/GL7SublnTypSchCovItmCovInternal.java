package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCovItmCov.eti;GL7SublnTypSchCovItmCov.eix;GL7SublnTypSchCovItmCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCovItmCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the SublnTypSchCovItemCovCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSublnTypSchCovItemCovCosts(entity.GL7SublnTypSchCovItemCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCovItmCov getBasedOnValue();
  
  
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
  public entity.GL7SublnTypSchCovItmCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7SublineTypeSchCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeSchCovItem getGL7SublineTypeSchCovItem();
  
  
  public gw.pl.persistence.core.Key getGL7SublineTypeSchCovItemID();
  
  
  /**
   * Gets the value of the SublnTypSchCovItemCovCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCovItemCovCost[] getSublnTypSchCovItemCovCosts();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublnTypSchCovItmCov getSubtype();
  
  
  /**
   * Removes the given element from the SublnTypSchCovItemCovCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromSublnTypSchCovItemCovCosts(entity.GL7SublnTypSchCovItemCovCost element);
  
  
  /**
   * Removes the given element from the SublnTypSchCovItemCovCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSublnTypSchCovItemCovCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublnTypSchCovItmCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublnTypSchCovItmCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublineTypeSchCovItem field.
   */
  public void setGL7SublineTypeSchCovItem(entity.GL7SublineTypeSchCovItem value);
  
  
  public void setGL7SublineTypeSchCovItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SublnTypSchCovItemCovCosts field.
   */
  public void setSublnTypSchCovItemCovCosts(entity.GL7SublnTypSchCovItemCovCost[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublnTypSchCovItmCov value);
  
  
  
}