package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineTypeCond.eti;GL7SublineTypeCond.eix;GL7SublineTypeCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeCondInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.PolicyConditionInternal, gw.api.domain.PolicyConditionAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.GL7SublineTypeCondCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCond getBasedOnValue();
  
  
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
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCondCost[] getCosts();
  
  
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
   * Gets the value of the DirectTerm7 field.
   * direct cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm7();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCond getFixed();
  
  
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
   * Gets the value of the StringTerm4 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm4();
  
  
  /**
   * Gets the value of the StringTerm5 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm5();
  
  
  /**
   * Gets the value of the StringTerm6 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm6();
  
  
  /**
   * Gets the value of the StringTerm7 field.
   * string cov term field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm7();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7SublineTypeCond getSubtype();
  
  
  /**
   * Gets the value of the ChoiceTerm1Avl field.
   * whether or not the ChoiceTerm1 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm1Avl();
  
  
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
   * Gets the value of the DirectTerm7Avl field.
   * whether or not the DirectTerm7 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm7Avl();
  
  
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
   * Gets the value of the StringTerm5Avl field.
   * whether or not the StringTerm5 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm5Avl();
  
  
  /**
   * Gets the value of the StringTerm6Avl field.
   * whether or not the StringTerm6 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm6Avl();
  
  
  /**
   * Gets the value of the StringTerm7Avl field.
   * whether or not the StringTerm7 field was available the last time availability was checked
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm7Avl();
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.GL7SublineTypeCondCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublineTypeCond value);
  
  
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
   * Sets the value of the ChoiceTerm1Avl field.
   */
  public void setChoiceTerm1Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.GL7SublineTypeCondCost[] value);
  
  
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
   * Sets the value of the DirectTerm7 field.
   */
  public void setDirectTerm7(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectTerm7Avl field.
   */
  public void setDirectTerm7Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublineTypeCond value);
  
  
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
   * Sets the value of the StringTerm4 field.
   */
  public void setStringTerm4(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm4Avl field.
   */
  public void setStringTerm4Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the StringTerm5 field.
   */
  public void setStringTerm5(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm5Avl field.
   */
  public void setStringTerm5Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the StringTerm6 field.
   */
  public void setStringTerm6(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm6Avl field.
   */
  public void setStringTerm6Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the StringTerm7 field.
   */
  public void setStringTerm7(java.lang.String value);
  
  
  /**
   * Sets the value of the StringTerm7Avl field.
   */
  public void setStringTerm7Avl(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GL7SublineTypeCond value);
  
  
  
}