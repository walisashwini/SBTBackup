package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedExclItmExcl.eti;GL7SublnSchedExclItmExcl.eix;GL7SublnSchedExclItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedExclItmExclInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ExclusionInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ExclusionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the SublnSchedExclItemExclCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSublnSchedExclItemExclCosts(entity.GL7SublnSchedExclItemExclCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedExclItmExcl getBasedOnValue();
  
  
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
  public entity.GL7SublnSchedExclItmExcl getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7SublnSchedExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedExclItem getGL7SublnSchedExclItem();
  
  
  public gw.pl.persistence.core.Key getGL7SublnSchedExclItemID();
  
  
  /**
   * Gets the value of the SublnSchedExclItemExclCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedExclItemExclCost[] getSublnSchedExclItemExclCosts();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublnSchedExclItmExcl getSubtype();
  
  
  /**
   * Removes the given element from the SublnSchedExclItemExclCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromSublnSchedExclItemExclCosts(entity.GL7SublnSchedExclItemExclCost element);
  
  
  /**
   * Removes the given element from the SublnSchedExclItemExclCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSublnSchedExclItemExclCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublnSchedExclItmExcl value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublnSchedExclItmExcl value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublnSchedExclItem field.
   */
  public void setGL7SublnSchedExclItem(entity.GL7SublineSchedExclItem value);
  
  
  public void setGL7SublnSchedExclItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SublnSchedExclItemExclCosts field.
   */
  public void setSublnSchedExclItemExclCosts(entity.GL7SublnSchedExclItemExclCost[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublnSchedExclItmExcl value);
  
  
  
}