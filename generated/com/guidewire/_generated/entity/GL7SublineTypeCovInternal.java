package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeCov.eti;GL7SublineTypeCov.eix;GL7SublineTypeCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.GL7SublineTypeCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCov getBasedOnValue();
  
  
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
   * Gets the value of the ChoiceTerm10 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm10();
  
  
  /**
   * Gets the value of the ChoiceTerm11 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm11();
  
  
  /**
   * Gets the value of the ChoiceTerm12 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm12();
  
  
  /**
   * Gets the value of the ChoiceTerm13 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm13();
  
  
  /**
   * Gets the value of the ChoiceTerm14 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm14();
  
  
  /**
   * Gets the value of the ChoiceTerm15 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm15();
  
  
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
   * Gets the value of the ChoiceTerm6 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm6();
  
  
  /**
   * Gets the value of the ChoiceTerm7 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm7();
  
  
  /**
   * Gets the value of the ChoiceTerm8 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm8();
  
  
  /**
   * Gets the value of the ChoiceTerm9 field.
   * choice cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm9();
  
  
  /**
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCovCost[] getCosts();
  
  
  /**
   * Gets the value of the DateTerm1 field.
   * date cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTerm1();
  
  
  /**
   * Gets the value of the DateTerm2 field.
   * date cov term field
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
   * Gets the value of the DirectTerm4 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm4();
  
  
  /**
   * Gets the value of the DirectTerm5 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm5();
  
  
  /**
   * Gets the value of the DirectTerm6 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm6();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7SublineType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineType getGL7SublineType();
  
  
  public gw.pl.persistence.core.Key getGL7SublineTypeID();
  
  
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
   * Gets the value of the StringTerm2 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm2();
  
  
  /**
   * Gets the value of the StringTerm3 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm3();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublineTypeCov getSubtype();
  
  
  /**
   * Gets the value of the ChoiceTerm10Avl field.
   * whether or not the ChoiceTerm10 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm10Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm11Avl field.
   * whether or not the ChoiceTerm11 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm11Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm12Avl field.
   * whether or not the ChoiceTerm12 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm12Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm13Avl field.
   * whether or not the ChoiceTerm13 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm13Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm14Avl field.
   * whether or not the ChoiceTerm14 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm14Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm15Avl field.
   * whether or not the ChoiceTerm15 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm15Avl();
  
  
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
   * Gets the value of the ChoiceTerm6Avl field.
   * whether or not the ChoiceTerm6 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm6Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm7Avl field.
   * whether or not the ChoiceTerm7 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm7Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm8Avl field.
   * whether or not the ChoiceTerm8 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm8Avl();
  
  
  /**
   * Gets the value of the ChoiceTerm9Avl field.
   * whether or not the ChoiceTerm9 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm9Avl();
  
  
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
   * Gets the value of the DirectTerm4Avl field.
   * whether or not the DirectTerm4 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm4Avl();
  
  
  /**
   * Gets the value of the DirectTerm5Avl field.
   * whether or not the DirectTerm5 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm5Avl();
  
  
  /**
   * Gets the value of the DirectTerm6Avl field.
   * whether or not the DirectTerm6 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm6Avl();
  
  
  /**
   * Gets the value of the StringTerm1Avl field.
   * whether or not the StringTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm1Avl();
  
  
  /**
   * Gets the value of the StringTerm2Avl field.
   * whether or not the StringTerm2 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm2Avl();
  
  
  /**
   * Gets the value of the StringTerm3Avl field.
   * whether or not the StringTerm3 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm3Avl();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.GL7SublineTypeCovCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublineTypeCov value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
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
   * Sets the value of the ChoiceTerm10 field.
   */
  public void setChoiceTerm10(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm10Avl field.
   */
  public void setChoiceTerm10Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm11 field.
   */
  public void setChoiceTerm11(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm11Avl field.
   */
  public void setChoiceTerm11Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm12 field.
   */
  public void setChoiceTerm12(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm12Avl field.
   */
  public void setChoiceTerm12Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm13 field.
   */
  public void setChoiceTerm13(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm13Avl field.
   */
  public void setChoiceTerm13Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm14 field.
   */
  public void setChoiceTerm14(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm14Avl field.
   */
  public void setChoiceTerm14Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm15 field.
   */
  public void setChoiceTerm15(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm15Avl field.
   */
  public void setChoiceTerm15Avl(java.lang.Boolean value);
  
  
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
   * Sets the value of the ChoiceTerm6 field.
   */
  public void setChoiceTerm6(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm6Avl field.
   */
  public void setChoiceTerm6Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm7 field.
   */
  public void setChoiceTerm7(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm7Avl field.
   */
  public void setChoiceTerm7Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm8 field.
   */
  public void setChoiceTerm8(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm8Avl field.
   */
  public void setChoiceTerm8Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ChoiceTerm9 field.
   */
  public void setChoiceTerm9(java.lang.String value);
  
  
  /**
   * Sets the value of the ChoiceTerm9Avl field.
   */
  public void setChoiceTerm9Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.GL7SublineTypeCovCost[] value);
  
  
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
   * Sets the value of the DirectTerm4 field.
   */
  public void setDirectTerm4(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm4Avl field.
   */
  public void setDirectTerm4Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DirectTerm5 field.
   */
  public void setDirectTerm5(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm5Avl field.
   */
  public void setDirectTerm5Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DirectTerm6 field.
   */
  public void setDirectTerm6(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm6Avl field.
   */
  public void setDirectTerm6Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublineTypeCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7SublineType field.
   */
  public void setGL7SublineType(entity.GL7SublineType value);
  
  
  public void setGL7SublineTypeID(gw.pl.persistence.core.Key value);
  
  
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
   * Sets the value of the StringTerm2 field.
   */
  public void setStringTerm2(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm2Avl field.
   */
  public void setStringTerm2Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the StringTerm3 field.
   */
  public void setStringTerm3(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm3Avl field.
   */
  public void setStringTerm3Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublineTypeCov value);
  
  
  
}