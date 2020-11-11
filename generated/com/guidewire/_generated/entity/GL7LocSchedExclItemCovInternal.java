package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCov.eti;GL7LocSchedExclItemCov.eix;GL7LocSchedExclItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedExclItemCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the LocSchedExclItemCovCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocSchedExclItemCovCosts(entity.GL7LocSchedExclItemCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedExclItemCov getBasedOnValue();
  
  
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
  public entity.GL7LocSchedExclItemCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7LocationSchedExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationSchedExclItem getGL7LocationSchedExclItem();
  
  
  public gw.pl.persistence.core.Key getGL7LocationSchedExclItemID();
  
  
  /**
   * Gets the value of the LocSchedExclItemCovCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedExclItemCovCost[] getLocSchedExclItemCovCosts();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7LocSchedExclItemCov getSubtype();
  
  
  /**
   * Removes the given element from the LocSchedExclItemCovCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromLocSchedExclItemCovCosts(entity.GL7LocSchedExclItemCovCost element);
  
  
  /**
   * Removes the given element from the LocSchedExclItemCovCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocSchedExclItemCovCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7LocSchedExclItemCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7LocSchedExclItemCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7LocationSchedExclItem field.
   */
  public void setGL7LocationSchedExclItem(entity.GL7LocationSchedExclItem value);
  
  
  public void setGL7LocationSchedExclItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LocSchedExclItemCovCosts field.
   */
  public void setLocSchedExclItemCovCosts(entity.GL7LocSchedExclItemCovCost[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7LocSchedExclItemCov value);
  
  
  
}