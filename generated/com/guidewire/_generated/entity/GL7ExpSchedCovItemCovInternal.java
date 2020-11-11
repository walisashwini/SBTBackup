package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedCovItemCov.eti;GL7ExpSchedCovItemCov.eix;GL7ExpSchedCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedCovItemCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the ExpSchedCovItemCovCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExpSchedCovItemCovCosts(entity.GL7ExpSchedCovItemCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCovItemCov getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ExpSchedCovItemCovCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCovItemCovCost[] getExpSchedCovItemCovCosts();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedCovItemCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7ExposureSchedCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureSchedCovItem getGL7ExposureSchedCovItem();
  
  
  public gw.pl.persistence.core.Key getGL7ExposureSchedCovItemID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7ExpSchedCovItemCov getSubtype();
  
  
  /**
   * Removes the given element from the ExpSchedCovItemCovCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromExpSchedCovItemCovCosts(entity.GL7ExpSchedCovItemCovCost element);
  
  
  /**
   * Removes the given element from the ExpSchedCovItemCovCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExpSchedCovItemCovCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7ExpSchedCovItemCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ExpSchedCovItemCovCosts field.
   */
  public void setExpSchedCovItemCovCosts(entity.GL7ExpSchedCovItemCovCost[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7ExpSchedCovItemCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7ExposureSchedCovItem field.
   */
  public void setGL7ExposureSchedCovItem(entity.GL7ExposureSchedCovItem value);
  
  
  public void setGL7ExposureSchedCovItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7ExpSchedCovItemCov value);
  
  
  
}