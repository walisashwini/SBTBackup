package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCov.eti;CPBuildingCov.eix;CPBuildingCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPBuildingCovInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverageInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverageAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Costs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCosts(entity.CPBuildingCovCost element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuildingCov getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CPBlanket field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBlanket getCPBlanket();
  
  
  public gw.pl.persistence.core.Key getCPBlanketID();
  
  
  /**
   * Gets the value of the CPBuilding field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuilding getCPBuilding();
  
  
  public gw.pl.persistence.core.Key getCPBuildingID();
  
  
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
   * Gets the value of the Costs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPBuildingCovCost[] getCosts();
  
  
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
  public entity.CPBuildingCov getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CPBuildingCov getSubtype();
  
  
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
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   */
  public void removeFromCosts(entity.CPBuildingCovCost element);
  
  
  /**
   * Removes the given element from the Costs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.CPBuildingCov value);
  
  
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
   * Sets the value of the CPBlanket field.
   */
  public void setCPBlanket(entity.CPBlanket value);
  
  
  public void setCPBlanketID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CPBuilding field.
   */
  public void setCPBuilding(entity.CPBuilding value);
  
  
  public void setCPBuildingID(gw.pl.persistence.core.Key value);
  
  
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
   * Sets the value of the Costs field.
   */
  public void setCosts(entity.CPBuildingCovCost[] value);
  
  
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
  public void setFixed(entity.CPBuildingCov value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.CPBuildingCov value);
  
  
  
}