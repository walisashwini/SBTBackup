package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublnSchedCovItmCond.eti;GL7SublnSchedCovItmCond.eix;GL7SublnSchedCovItmCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublnSchedCovItmCondInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.PolicyConditionInternal, com.guidewire._generated.entity.GL7ClauseInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.PolicyConditionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the SublnSchedCovItemCondCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSublnSchedCovItemCondCosts(entity.GL7SublnSchedCovItemCondCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItmCond getBasedOnValue();
  
  
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
  public entity.GL7SublnSchedCovItmCond getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7SublnSchedCovItem field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineSchedCovItem getGL7SublnSchedCovItem();
  
  
  public gw.pl.persistence.core.Key getGL7SublnSchedCovItemID();
  
  
  /**
   * Gets the value of the SublnSchedCovItemCondCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublnSchedCovItemCondCost[] getSublnSchedCovItemCondCosts();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublnSchedCovItmCond getSubtype();
  
  
  /**
   * Removes the given element from the SublnSchedCovItemCondCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromSublnSchedCovItemCondCosts(entity.GL7SublnSchedCovItemCondCost element);
  
  
  /**
   * Removes the given element from the SublnSchedCovItemCondCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSublnSchedCovItemCondCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublnSchedCovItmCond value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublnSchedCovItmCond value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublnSchedCovItem field.
   */
  public void setGL7SublnSchedCovItem(entity.GL7SublineSchedCovItem value);
  
  
  public void setGL7SublnSchedCovItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SublnSchedCovItemCondCosts field.
   */
  public void setSublnSchedCovItemCondCosts(entity.GL7SublnSchedCovItemCondCost[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublnSchedCovItmCond value);
  
  
  
}