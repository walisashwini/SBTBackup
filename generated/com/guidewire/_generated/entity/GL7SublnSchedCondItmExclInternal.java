package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCondItmExcl.eti;GL7SublnSchedCondItmExcl.eix;GL7SublnSchedCondItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCondItmExclInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ExclusionInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ExclusionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the SublnSchedCondItemExclCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSublnSchedCondItemExclCosts(entity.GL7SublnSchedCondItemExclCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCondItmExcl getBasedOnValue();
  
  
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
  public entity.GL7SublnSchedCondItmExcl getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7SublnSchedCondItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedCondItem getGL7SublnSchedCondItem();
  
  
  public gw.pl.persistence.core.Key getGL7SublnSchedCondItemID();
  
  
  /**
   * Gets the value of the SublnSchedCondItemExclCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCondItemExclCost[] getSublnSchedCondItemExclCosts();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublnSchedCondItmExcl getSubtype();
  
  
  /**
   * Removes the given element from the SublnSchedCondItemExclCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromSublnSchedCondItemExclCosts(entity.GL7SublnSchedCondItemExclCost element);
  
  
  /**
   * Removes the given element from the SublnSchedCondItemExclCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSublnSchedCondItemExclCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublnSchedCondItmExcl value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublnSchedCondItmExcl value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublnSchedCondItem field.
   */
  public void setGL7SublnSchedCondItem(entity.GL7SublineSchedCondItem value);
  
  
  public void setGL7SublnSchedCondItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SublnSchedCondItemExclCosts field.
   */
  public void setSublnSchedCondItemExclCosts(entity.GL7SublnSchedCondItemExclCost[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublnSchedCondItmExcl value);
  
  
  
}