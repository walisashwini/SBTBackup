package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocSchedExclItemCond.eti;GL7LocSchedExclItemCond.eix;GL7LocSchedExclItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocSchedExclItemCondInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.PolicyConditionInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.PolicyConditionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the LocSchedExclItemCondCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocSchedExclItemCondCosts(entity.GL7LocSchedExclItemCondCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedExclItemCond getBasedOnValue();
  
  
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
  public entity.GL7LocSchedExclItemCond getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7LocationSchedExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationSchedExclItem getGL7LocationSchedExclItem();
  
  
  public gw.pl.persistence.core.Key getGL7LocationSchedExclItemID();
  
  
  /**
   * Gets the value of the LocSchedExclItemCondCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocSchedExclItemCondCost[] getLocSchedExclItemCondCosts();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7LocSchedExclItemCond getSubtype();
  
  
  /**
   * Removes the given element from the LocSchedExclItemCondCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromLocSchedExclItemCondCosts(entity.GL7LocSchedExclItemCondCost element);
  
  
  /**
   * Removes the given element from the LocSchedExclItemCondCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocSchedExclItemCondCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7LocSchedExclItemCond value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7LocSchedExclItemCond value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7LocationSchedExclItem field.
   */
  public void setGL7LocationSchedExclItem(entity.GL7LocationSchedExclItem value);
  
  
  public void setGL7LocationSchedExclItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LocSchedExclItemCondCosts field.
   */
  public void setLocSchedExclItemCondCosts(entity.GL7LocSchedExclItemCondCost[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7LocSchedExclItemCond value);
  
  
  
}