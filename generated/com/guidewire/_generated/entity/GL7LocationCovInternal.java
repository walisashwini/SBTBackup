package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7LocationCov.eti;GL7LocationCov.eix;GL7LocationCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocationCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.GL7LocationCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationCov getBasedOnValue();
  
  
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
  public entity.GL7LocationCovCost[] getCosts();
  
  
  /**
   * Gets the value of the DirectTerm1 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm1();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Location getGL7Location();
  
  
  public gw.pl.persistence.core.Key getGL7LocationID();
  
  
  /**
   * Gets the value of the StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getStatRecord();
  
  
  public gw.pl.persistence.core.Key getStatRecordID();
  
  
  /**
   * Gets the value of the StringTerm1 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm1();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7LocationCov getSubtype();
  
  
  /**
   * Gets the value of the DirectTerm1Avl field.
   * whether or not the DirectTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm1Avl();
  
  
  /**
   * Gets the value of the StringTerm1Avl field.
   * whether or not the StringTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm1Avl();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.GL7LocationCovCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7LocationCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.GL7LocationCovCost[] value);
  
  
  /**
   * Sets the value of the DirectTerm1 field.
   */
  public void setDirectTerm1(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm1Avl field.
   */
  public void setDirectTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7LocationCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7Location field.
   */
  public void setGL7Location(entity.GL7Location value);
  
  
  public void setGL7LocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value);
  
  
  public void setStatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StringTerm1 field.
   */
  public void setStringTerm1(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm1Avl field.
   */
  public void setStringTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7LocationCov value);
  
  
  
}