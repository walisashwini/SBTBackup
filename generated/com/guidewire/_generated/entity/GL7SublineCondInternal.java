package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineCond.eti;GL7SublineCond.eix;GL7SublineCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineCondInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.PolicyConditionInternal, gw.api.domain.PolicyConditionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.GL7SublineCondCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineCond getBasedOnValue();
  
  
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
  public entity.GL7SublineCondCost[] getCosts();
  
  
  /**
   * Gets the value of the DateTerm1 field.
   * date cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTerm1();
  
  
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
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineCond getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7Subline field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Subline getGL7Subline();
  
  
  public gw.pl.persistence.core.Key getGL7SublineID();
  
  
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
   * Gets the value of the StringTerm4 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm4();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublineCond getSubtype();
  
  
  /**
   * Gets the value of the BooleanTerm1 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm1();
  
  
  /**
   * Gets the value of the BooleanTerm10 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm10();
  
  
  /**
   * Gets the value of the BooleanTerm10Avl field.
   * whether or not the BooleanTerm10 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm10Avl();
  
  
  /**
   * Gets the value of the BooleanTerm11 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm11();
  
  
  /**
   * Gets the value of the BooleanTerm11Avl field.
   * whether or not the BooleanTerm11 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm11Avl();
  
  
  /**
   * Gets the value of the BooleanTerm12 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm12();
  
  
  /**
   * Gets the value of the BooleanTerm12Avl field.
   * whether or not the BooleanTerm12 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm12Avl();
  
  
  /**
   * Gets the value of the BooleanTerm13 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm13();
  
  
  /**
   * Gets the value of the BooleanTerm13Avl field.
   * whether or not the BooleanTerm13 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm13Avl();
  
  
  /**
   * Gets the value of the BooleanTerm14 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm14();
  
  
  /**
   * Gets the value of the BooleanTerm14Avl field.
   * whether or not the BooleanTerm14 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm14Avl();
  
  
  /**
   * Gets the value of the BooleanTerm15 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm15();
  
  
  /**
   * Gets the value of the BooleanTerm15Avl field.
   * whether or not the BooleanTerm15 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm15Avl();
  
  
  /**
   * Gets the value of the BooleanTerm16 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm16();
  
  
  /**
   * Gets the value of the BooleanTerm16Avl field.
   * whether or not the BooleanTerm16 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm16Avl();
  
  
  /**
   * Gets the value of the BooleanTerm17 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm17();
  
  
  /**
   * Gets the value of the BooleanTerm17Avl field.
   * whether or not the BooleanTerm17 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm17Avl();
  
  
  /**
   * Gets the value of the BooleanTerm18 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm18();
  
  
  /**
   * Gets the value of the BooleanTerm18Avl field.
   * whether or not the BooleanTerm18 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm18Avl();
  
  
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
   * Gets the value of the BooleanTerm4 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm4();
  
  
  /**
   * Gets the value of the BooleanTerm4Avl field.
   * whether or not the BooleanTerm4 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm4Avl();
  
  
  /**
   * Gets the value of the BooleanTerm5 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm5();
  
  
  /**
   * Gets the value of the BooleanTerm5Avl field.
   * whether or not the BooleanTerm5 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm5Avl();
  
  
  /**
   * Gets the value of the BooleanTerm6 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm6();
  
  
  /**
   * Gets the value of the BooleanTerm6Avl field.
   * whether or not the BooleanTerm6 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm6Avl();
  
  
  /**
   * Gets the value of the BooleanTerm7 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm7();
  
  
  /**
   * Gets the value of the BooleanTerm7Avl field.
   * whether or not the BooleanTerm7 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm7Avl();
  
  
  /**
   * Gets the value of the BooleanTerm8 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm8();
  
  
  /**
   * Gets the value of the BooleanTerm8Avl field.
   * whether or not the BooleanTerm8 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm8Avl();
  
  
  /**
   * Gets the value of the BooleanTerm9 field.
   * boolean cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm9();
  
  
  /**
   * Gets the value of the BooleanTerm9Avl field.
   * whether or not the BooleanTerm9 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm9Avl();
  
  
  /**
   * Gets the value of the DateTerm1Avl field.
   * whether or not the DateTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDateTerm1Avl();
  
  
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
   * Gets the value of the StringTerm4Avl field.
   * whether or not the StringTerm4 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm4Avl();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.GL7SublineCondCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublineCond value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BooleanTerm1 field.
   */
  public void setBooleanTerm1(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm10 field.
   */
  public void setBooleanTerm10(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm10Avl field.
   */
  public void setBooleanTerm10Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm11 field.
   */
  public void setBooleanTerm11(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm11Avl field.
   */
  public void setBooleanTerm11Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm12 field.
   */
  public void setBooleanTerm12(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm12Avl field.
   */
  public void setBooleanTerm12Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm13 field.
   */
  public void setBooleanTerm13(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm13Avl field.
   */
  public void setBooleanTerm13Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm14 field.
   */
  public void setBooleanTerm14(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm14Avl field.
   */
  public void setBooleanTerm14Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm15 field.
   */
  public void setBooleanTerm15(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm15Avl field.
   */
  public void setBooleanTerm15Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm16 field.
   */
  public void setBooleanTerm16(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm16Avl field.
   */
  public void setBooleanTerm16Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm17 field.
   */
  public void setBooleanTerm17(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm17Avl field.
   */
  public void setBooleanTerm17Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm18 field.
   */
  public void setBooleanTerm18(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm18Avl field.
   */
  public void setBooleanTerm18Avl(java.lang.Boolean value);
  
  
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
   * Sets the value of the BooleanTerm4 field.
   */
  public void setBooleanTerm4(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm4Avl field.
   */
  public void setBooleanTerm4Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm5 field.
   */
  public void setBooleanTerm5(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm5Avl field.
   */
  public void setBooleanTerm5Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm6 field.
   */
  public void setBooleanTerm6(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm6Avl field.
   */
  public void setBooleanTerm6Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm7 field.
   */
  public void setBooleanTerm7(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm7Avl field.
   */
  public void setBooleanTerm7Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm8 field.
   */
  public void setBooleanTerm8(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm8Avl field.
   */
  public void setBooleanTerm8Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm9 field.
   */
  public void setBooleanTerm9(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BooleanTerm9Avl field.
   */
  public void setBooleanTerm9Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.GL7SublineCondCost[] value);
  
  
  /**
   * Sets the value of the DateTerm1 field.
   */
  public void setDateTerm1(java.util.Date value);
  
  
  /**
   * Sets the value of the DateTerm1Avl field.
   */
  public void setDateTerm1Avl(java.lang.Boolean value);
  
  
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
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublineCond value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7Subline field.
   */
  public void setGL7Subline(entity.GL7Subline value);
  
  
  public void setGL7SublineID(gw.pl.persistence.core.Key value);
  
  
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
   * Sets the value of the StringTerm4 field.
   */
  public void setStringTerm4(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm4Avl field.
   */
  public void setStringTerm4Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublineCond value);
  
  
  
}