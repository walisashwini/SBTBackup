package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Location.eti;GL7Location.eix;GL7Location.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7LocationInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.LineSpecificLocation, gw.api.domain.ModifiableAdapter {
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.GL7LocationCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7LocationCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.GL7LocationExcl element);
  
  
  /**
   * Adds the given element to the GL7Exposures array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7Exposures(entity.GL7Exposure element);
  
  
  /**
   * Adds the given element to the GL7LocationMods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7LocationMods(entity.GL7LocationMod element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Location getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Conditions field.
   * Conditions directly attached to the GL7 Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationCond[] getConditions();
  
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to the GL7 Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationCov[] getCoverages();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Exclusions directly attached to the GL7 Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationExcl[] getExclusions();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Location getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7Exposures field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Exposure[] getGL7Exposures();
  
  
  /**
   * Gets the value of the GL7LocationMods field.
   * Modifiers directly attached to the GL7 Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7LocationMod[] getGL7LocationMods();
  
  
  /**
   * Gets the value of the LiquorDeductible field.
   * Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorDeductible();
  
  
  /**
   * Gets the value of the LiquorLiabTerr field.
   * Liquor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorLiabTerr();
  
  
  /**
   * Gets the value of the LiquorLiabTerritory field.
   * Liquor Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorLiabTerritory();
  
  
  /**
   * Gets the value of the Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the LocationNumber field.
   * Location Number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLocationNumber();
  
  
  /**
   * Gets the value of the OwnersContractorsTerritory field.
   * Owners and Contractors Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnersContractorsTerritory();
  
  
  /**
   * Gets the value of the PollutionTerritory field.
   * Pollution Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionTerritory();
  
  
  /**
   * Gets the value of the PremOpsBIDeductible field.
   * BI Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsBIDeductible();
  
  
  /**
   * Gets the value of the PremOpsBIPDDeductible field.
   * BI and PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsBIPDDeductible();
  
  
  /**
   * Gets the value of the PremOpsPDDeductible field.
   * PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsPDDeductible();
  
  
  /**
   * Gets the value of the PremisesOperationsTerr field.
   * Premises/Operations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremisesOperationsTerr();
  
  
  /**
   * Gets the value of the PremisesOperationsTerritory field.
   * Premises/Operations Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremisesOperationsTerritory();
  
  
  /**
   * Gets the value of the ProdsCompldOpsBIDeductible field.
   * BI Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsBIDeductible();
  
  
  /**
   * Gets the value of the ProdsCompldOpsBIPDDeductible field.
   * BI and PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsBIPDDeductible();
  
  
  /**
   * Gets the value of the ProdsCompldOpsPDDeductible field.
   * PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsPDDeductible();
  
  
  /**
   * Gets the value of the ProdsCompldOpsTerritory field.
   * Products/Completed Operations Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsTerritory();
  
  
  /**
   * Gets the value of the ProductWithdrawalDeductible field.
   * Product Withdrawal Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalDeductible();
  
  
  /**
   * Gets the value of the RailroadTerritory field.
   * Railroad Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRailroadTerritory();
  
  
  /**
   * Gets the value of the StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getStatRecord();
  
  
  public gw.pl.persistence.core.Key getStatRecordID();
  
  
  /**
   * Gets the value of the SublineType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineType getSublineType();
  
  
  public gw.pl.persistence.core.Key getSublineTypeID();
  
  
  /**
   * Gets the value of the TerrorismTerritory field.
   * Terrorism Territory Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrorismTerritory();
  
  
  /**
   * Gets the value of the ZipCode field.
   * Zip Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getZipCode();
  
  
  /**
   * Gets the value of the ZipCodeOverride field.
   * Zip Code Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getZipCodeOverride();
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.GL7LocationCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7LocationCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.GL7LocationExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GL7Exposures array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7Exposures(entity.GL7Exposure element);
  
  
  /**
   * Removes the given element from the GL7Exposures array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7Exposures(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GL7LocationMods array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7LocationMods(entity.GL7LocationMod element);
  
  
  /**
   * Removes the given element from the GL7LocationMods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7LocationMods(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7Location value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.GL7LocationCond[] value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7LocationCov[] value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.GL7LocationExcl[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7Location value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7Exposures field.
   */
  public void setGL7Exposures(entity.GL7Exposure[] value);
  
  
  /**
   * Sets the value of the GL7LocationMods field.
   */
  public void setGL7LocationMods(entity.GL7LocationMod[] value);
  
  
  /**
   * Sets the value of the LiquorDeductible field.
   */
  public void setLiquorDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the LiquorLiabTerr field.
   */
  public void setLiquorLiabTerr(java.lang.String value);
  
  
  /**
   * Sets the value of the LiquorLiabTerritory field.
   */
  public void setLiquorLiabTerritory(java.lang.String value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LocationNumber field.
   */
  public void setLocationNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OwnersContractorsTerritory field.
   */
  public void setOwnersContractorsTerritory(java.lang.String value);
  
  
  /**
   * Sets the value of the PollutionTerritory field.
   */
  public void setPollutionTerritory(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsBIDeductible field.
   */
  public void setPremOpsBIDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsBIPDDeductible field.
   */
  public void setPremOpsBIPDDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsPDDeductible field.
   */
  public void setPremOpsPDDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the PremisesOperationsTerr field.
   */
  public void setPremisesOperationsTerr(java.lang.String value);
  
  
  /**
   * Sets the value of the PremisesOperationsTerritory field.
   */
  public void setPremisesOperationsTerritory(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsBIDeductible field.
   */
  public void setProdsCompldOpsBIDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsBIPDDeductible field.
   */
  public void setProdsCompldOpsBIPDDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsPDDeductible field.
   */
  public void setProdsCompldOpsPDDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsTerritory field.
   */
  public void setProdsCompldOpsTerritory(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductWithdrawalDeductible field.
   */
  public void setProductWithdrawalDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the RailroadTerritory field.
   */
  public void setRailroadTerritory(java.lang.String value);
  
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value);
  
  
  public void setStatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SublineType field.
   */
  public void setSublineType(entity.GL7SublineType value);
  
  
  public void setSublineTypeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TerrorismTerritory field.
   */
  public void setTerrorismTerritory(java.lang.String value);
  
  
  /**
   * Sets the value of the ZipCode field.
   */
  public void setZipCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ZipCodeOverride field.
   */
  public void setZipCodeOverride(java.lang.String value);
  
  
  
}