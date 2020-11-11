package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UAircrSchedCovItem.eti;GL7UAircrSchedCovItem.eix;GL7UAircrSchedCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UAircrSchedCovItemInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, com.guidewire._generated.entity.ScheduledItemInternal, com.guidewire._generated.entity.GL7ScheduledItemInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.productmodel.ScheduledItemAdapter {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.GL7UAircrSchedCovItemCost element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7UAircrSchedCovItemCov element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItem getBasedOnValue();
  
  
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
  public entity.GL7UAircrSchedCovItemCost[] getCosts();
  
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to the UAircrSchedCovItem
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItemCov[] getCoverages();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCovItem getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Schedule field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UAircrSchedCov getSchedule();
  
  
  public gw.pl.persistence.core.Key getScheduleID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7UAircrSchedCovItem getSubtype();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.GL7UAircrSchedCovItemCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7UAircrSchedCovItemCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7UAircrSchedCovItem value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.GL7UAircrSchedCovItemCost[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7UAircrSchedCovItemCov[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7UAircrSchedCovItem value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Schedule field.
   */
  public void setSchedule(entity.GL7UAircrSchedCov value);
  
  
  public void setScheduleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7UAircrSchedCovItem value);
  
  
  
}