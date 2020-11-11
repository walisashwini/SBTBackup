package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCovItemCov.eti;GL7UAircrSchedCovItemCov.eix;GL7UAircrSchedCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedCovItemCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.GL7UAircrSchedCovItemCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItemCov getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItemCovCost[] getCosts();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItemCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7UAircrSchedCovItemCov getSubtype();
  
  
  /**
   * Gets the value of the UAircrSchedCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItem getUAircrSchedCovItem();
  
  
  public gw.pl.persistence.core.Key getUAircrSchedCovItemID();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.GL7UAircrSchedCovItemCovCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7UAircrSchedCovItemCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.GL7UAircrSchedCovItemCovCost[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7UAircrSchedCovItemCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7UAircrSchedCovItemCov value);
  
  
  /**
   * Sets the value of the UAircrSchedCovItem field.
   */
  public void setUAircrSchedCovItem(entity.GL7UAircrSchedCovItem value);
  
  
  public void setUAircrSchedCovItemID(gw.pl.persistence.core.Key value);
  
  
  
}