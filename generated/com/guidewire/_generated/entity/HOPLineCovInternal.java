package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineCov.eti;HOPLineCov.eix;HOPLineCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPLineCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the HOPLineCovCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineCovCosts(entity.HOPLineCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineCov getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ChoiceTerm1 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm1();
  
  
  /**
   * Gets the value of the ChoiceTerm2 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm2();
  
  
  /**
   * Gets the value of the ChoiceTerm3 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm3();
  
  
  /**
   * Gets the value of the ChoiceTerm4 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm4();
  
  
  /**
   * Gets the value of the ChoiceTerm5 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm5();
  
  
  /**
   * Gets the value of the DateTerm1 field.
   * datetime cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTerm1();
  
  
  /**
   * Gets the value of the DateTerm2 field.
   * datetime cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTerm2();
  
  
  /**
   * Gets the value of the DirectTerm1 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm1();
  
  
  /**
   * Gets the value of the DirectTerm2 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm2();
  
  
  /**
   * Gets the value of the DirectTerm3 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm3();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLine getHOPLine();
  
  
  /**
   * Gets the value of the HOPLineCovCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineCovCost[] getHOPLineCovCosts();
  
  
  public gw.pl.persistence.core.Key getHOPLineID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPLineCov getSubtype();
  
  
  /**
   * Gets the value of the BooleanTerm1 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm1();
  
  
  /**
   * Gets the value of the BooleanTerm1Avl field.
   * whether or not the BooleanTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm1Avl();
  
  
  /**
   * Gets the value of the BooleanTerm2 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm2();
  
  
  /**
   * Gets the value of the BooleanTerm2Avl field.
   * whether or not the BooleanTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm2Avl();
  
  
  /**
   * Gets the value of the BooleanTerm3 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm3();
  
  
  /**
   * Gets the value of the BooleanTerm3Avl field.
   * whether or not the BooleanTerm3 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm3Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm1Avl field.
   * whether or not the ChoiceTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm1Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm2Avl field.
   * whether or not the ChoiceTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm2Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm3Avl field.
   * whether or not the ChoiceTerm3 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm3Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm4Avl field.
   * whether or not the ChoiceTerm4 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm4Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm5Avl field.
   * whether or not the ChoiceTerm5 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm5Avl();
  
  
  /**
   * Gets the value of the DateTerm1Avl field.
   * whether or not the DateTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDateTerm1Avl();
  
  
  /**
   * Gets the value of the DateTerm2Avl field.
   * whether or not the DateTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDateTerm2Avl();
  
  
  /**
   * Gets the value of the DirectTerm1Avl field.
   * whether or not the DirectTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm1Avl();
  
  
  /**
   * Gets the value of the DirectTerm2Avl field.
   * whether or not the DirectTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm2Avl();
  
  
  /**
   * Gets the value of the DirectTerm3Avl field.
   * whether or not the DirectTerm3 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm3Avl();
  
  
  /**
   * Removes the given element from the HOPLineCovCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineCovCosts(entity.HOPLineCovCost element);
  
  
  /**
   * Removes the given element from the HOPLineCovCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineCovCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPLineCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BooleanTerm1 field.
   */
  public void setBooleanTerm1(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm1Avl field.
   */
  public void setBooleanTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm2 field.
   */
  public void setBooleanTerm2(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm2Avl field.
   */
  public void setBooleanTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm3 field.
   */
  public void setBooleanTerm3(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm3Avl field.
   */
  public void setBooleanTerm3Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ChoiceTerm1 field.
   */
  public void setChoiceTerm1(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm1Avl field.
   */
  public void setChoiceTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm2 field.
   */
  public void setChoiceTerm2(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm2Avl field.
   */
  public void setChoiceTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm3 field.
   */
  public void setChoiceTerm3(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm3Avl field.
   */
  public void setChoiceTerm3Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm4 field.
   */
  public void setChoiceTerm4(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm4Avl field.
   */
  public void setChoiceTerm4Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm5 field.
   */
  public void setChoiceTerm5(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm5Avl field.
   */
  public void setChoiceTerm5Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DateTerm1 field.
   */
  public void setDateTerm1(java.util.Date value);
  
  
  /**
   * Sets the value of the DateTerm1Avl field.
   */
  public void setDateTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DateTerm2 field.
   */
  public void setDateTerm2(java.util.Date value);
  
  
  /**
   * Sets the value of the DateTerm2Avl field.
   */
  public void setDateTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DirectTerm1 field.
   */
  public void setDirectTerm1(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm1Avl field.
   */
  public void setDirectTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DirectTerm2 field.
   */
  public void setDirectTerm2(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm2Avl field.
   */
  public void setDirectTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DirectTerm3 field.
   */
  public void setDirectTerm3(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm3Avl field.
   */
  public void setDirectTerm3Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPLineCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPLine field.
   */
  public void setHOPLine(entity.HOPLine value);
  
  
  /**
   * Sets the value of the HOPLineCovCosts field.
   */
  public void setHOPLineCovCosts(entity.HOPLineCovCost[] value);
  
  
  public void setHOPLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPLineCov value);
  
  
  
}