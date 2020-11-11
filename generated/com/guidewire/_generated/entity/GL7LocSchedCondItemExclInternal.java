package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedCondItemExcl.eti;GL7LocSchedCondItemExcl.eix;GL7LocSchedCondItemExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedCondItemExclInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ExclusionInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ExclusionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the LocSchedCondItemExclCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocSchedCondItemExclCosts(entity.GL7LocSchedCondItemExclCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedCondItemExcl getBasedOnValue();
  
  
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
  public entity.GL7LocSchedCondItemExcl getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7LocationSchedCondItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationSchedCondItem getGL7LocationSchedCondItem();
  
  
  public gw.pl.persistence.core.Key getGL7LocationSchedCondItemID();
  
  
  /**
   * Gets the value of the LocSchedCondItemExclCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedCondItemExclCost[] getLocSchedCondItemExclCosts();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7LocSchedCondItemExcl getSubtype();
  
  
  /**
   * Removes the given element from the LocSchedCondItemExclCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromLocSchedCondItemExclCosts(entity.GL7LocSchedCondItemExclCost element);
  
  
  /**
   * Removes the given element from the LocSchedCondItemExclCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocSchedCondItemExclCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7LocSchedCondItemExcl value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7LocSchedCondItemExcl value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7LocationSchedCondItem field.
   */
  public void setGL7LocationSchedCondItem(entity.GL7LocationSchedCondItem value);
  
  
  public void setGL7LocationSchedCondItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LocSchedCondItemExclCosts field.
   */
  public void setLocSchedCondItemExclCosts(entity.GL7LocSchedCondItemExclCost[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7LocSchedCondItemExcl value);
  
  
  
}