package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnTypSchCondItmExcl.eti;GL7SublnTypSchCondItmExcl.eix;GL7SublnTypSchCondItmExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnTypSchCondItmExclInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ExclusionInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ExclusionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the SublnTypSchCondItemExclCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSublnTypSchCondItemExclCosts(entity.GL7SublnTypSchCondItemExclCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCondItmExcl getBasedOnValue();
  
  
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
  public entity.GL7SublnTypSchCondItmExcl getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7SublineTypeSchCondItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeSchCondItem getGL7SublineTypeSchCondItem();
  
  
  public gw.pl.persistence.core.Key getGL7SublineTypeSchCondItemID();
  
  
  /**
   * Gets the value of the SublnTypSchCondItemExclCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnTypSchCondItemExclCost[] getSublnTypSchCondItemExclCosts();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublnTypSchCondItmExcl getSubtype();
  
  
  /**
   * Removes the given element from the SublnTypSchCondItemExclCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromSublnTypSchCondItemExclCosts(entity.GL7SublnTypSchCondItemExclCost element);
  
  
  /**
   * Removes the given element from the SublnTypSchCondItemExclCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSublnTypSchCondItemExclCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublnTypSchCondItmExcl value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublnTypSchCondItmExcl value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublineTypeSchCondItem field.
   */
  public void setGL7SublineTypeSchCondItem(entity.GL7SublineTypeSchCondItem value);
  
  
  public void setGL7SublineTypeSchCondItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SublnTypSchCondItemExclCosts field.
   */
  public void setSublnTypSchCondItemExclCosts(entity.GL7SublnTypSchCondItemExclCost[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublnTypSchCondItmExcl value);
  
  
  
}