package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7ExpSchedExclItemCond.eti;GL7ExpSchedExclItemCond.eix;GL7ExpSchedExclItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExpSchedExclItemCondInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.PolicyConditionInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.PolicyConditionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the ExpSchedExclItemCondCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExpSchedExclItemCondCosts(entity.GL7ExpSchedExclItemCondCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedExclItemCond getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ExpSchedExclItemCondCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedExclItemCondCost[] getExpSchedExclItemCondCosts();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExpSchedExclItemCond getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7ExposureSchedExclItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureSchedExclItem getGL7ExposureSchedExclItem();
  
  
  public gw.pl.persistence.core.Key getGL7ExposureSchedExclItemID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7ExpSchedExclItemCond getSubtype();
  
  
  /**
   * Removes the given element from the ExpSchedExclItemCondCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromExpSchedExclItemCondCosts(entity.GL7ExpSchedExclItemCondCost element);
  
  
  /**
   * Removes the given element from the ExpSchedExclItemCondCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExpSchedExclItemCondCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7ExpSchedExclItemCond value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ExpSchedExclItemCondCosts field.
   */
  public void setExpSchedExclItemCondCosts(entity.GL7ExpSchedExclItemCondCost[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7ExpSchedExclItemCond value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7ExposureSchedExclItem field.
   */
  public void setGL7ExposureSchedExclItem(entity.GL7ExposureSchedExclItem value);
  
  
  public void setGL7ExposureSchedExclItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7ExpSchedExclItemCond value);
  
  
  
}