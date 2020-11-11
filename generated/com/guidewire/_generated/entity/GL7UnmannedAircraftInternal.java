package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7UnmannedAircraft.eti;GL7UnmannedAircraft.eix;GL7UnmannedAircraft.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7UnmannedAircraftInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.GL7UnmannedAircraftCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7UnmannedAircraftCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.GL7UnmannedAircraftExcl element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraft getBasedOnValue();
  
  
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
   * Conditions directly attached to the UnmannedAircraft
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraftCond[] getConditions();
  
  
  /**
   * Gets the value of the CovAApplies field.
   * Coverage A Applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovAApplies();
  
  
  /**
   * Gets the value of the CovBApplies field.
   * Coverage B Applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovBApplies();
  
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to the UnmannedAircraft
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraftCov[] getCoverages();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Exclusions directly attached to the UnmannedAircraft
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraftExcl[] getExclusions();
  
  
  /**
   * Gets the value of the Exposure field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Exposure getExposure();
  
  
  public gw.pl.persistence.core.Key getExposureID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraft getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HoursOfOperationPerYear field.
   * Hours Of Operation Per Year
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getHoursOfOperationPerYear();
  
  
  /**
   * Gets the value of the LevelOfCertification field.
   * Level Of Certification
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLevelOfCertification();
  
  
  /**
   * Gets the value of the Manufacturer field.
   * Manufacturer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getManufacturer();
  
  
  /**
   * Gets the value of the MaximumTakeoffWeight field.
   * Maximum Takeoff Weight (including drone, camera and payload) in lbs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMaximumTakeoffWeight();
  
  
  /**
   * Gets the value of the Model field.
   * Model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModel();
  
  
  /**
   * Gets the value of the OperatorYearsOfExperience field.
   * Primary Operator Years Of Experience
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOperatorYearsOfExperience();
  
  
  /**
   * Gets the value of the OwnershipAndOperation field.
   * Ownership And Operation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnershipAndOperation();
  
  
  /**
   * Gets the value of the PrimaryPlaceOfOperation field.
   * Primary Place Of Operation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryPlaceOfOperation();
  
  
  /**
   * Gets the value of the StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getStatRecord();
  
  
  public gw.pl.persistence.core.Key getStatRecordID();
  
  
  /**
   * Gets the value of the TypeOfModifications field.
   * Type of Modifications
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeOfModifications();
  
  
  /**
   * Gets the value of the UAIdentificationCode field.
   * Aircraft Identification Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUAIdentificationCode();
  
  
  /**
   * Gets the value of the UnmannedAircraftNumber field.
   * Unmanned Aircraft Number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getUnmannedAircraftNumber();
  
  
  /**
   * Gets the value of the Usage field.
   * Usage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUsage();
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.GL7UnmannedAircraftCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7UnmannedAircraftCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.GL7UnmannedAircraftExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7UnmannedAircraft value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.GL7UnmannedAircraftCond[] value);
  
  
  /**
   * Sets the value of the CovAApplies field.
   */
  public void setCovAApplies(java.lang.String value);
  
  
  /**
   * Sets the value of the CovBApplies field.
   */
  public void setCovBApplies(java.lang.String value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7UnmannedAircraftCov[] value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.GL7UnmannedAircraftExcl[] value);
  
  
  /**
   * Sets the value of the Exposure field.
   */
  public void setExposure(entity.GL7Exposure value);
  
  
  public void setExposureID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7UnmannedAircraft value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HoursOfOperationPerYear field.
   */
  public void setHoursOfOperationPerYear(java.lang.Integer value);
  
  
  /**
   * Sets the value of the LevelOfCertification field.
   */
  public void setLevelOfCertification(java.lang.String value);
  
  
  /**
   * Sets the value of the Manufacturer field.
   */
  public void setManufacturer(java.lang.String value);
  
  
  /**
   * Sets the value of the MaximumTakeoffWeight field.
   */
  public void setMaximumTakeoffWeight(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Model field.
   */
  public void setModel(java.lang.String value);
  
  
  /**
   * Sets the value of the OperatorYearsOfExperience field.
   */
  public void setOperatorYearsOfExperience(java.lang.String value);
  
  
  /**
   * Sets the value of the OwnershipAndOperation field.
   */
  public void setOwnershipAndOperation(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryPlaceOfOperation field.
   */
  public void setPrimaryPlaceOfOperation(java.lang.String value);
  
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value);
  
  
  public void setStatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TypeOfModifications field.
   */
  public void setTypeOfModifications(java.lang.String value);
  
  
  /**
   * Sets the value of the UAIdentificationCode field.
   */
  public void setUAIdentificationCode(java.lang.String value);
  
  
  /**
   * Sets the value of the UnmannedAircraftNumber field.
   */
  public void setUnmannedAircraftNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Usage field.
   */
  public void setUsage(java.lang.String value);
  
  
  
}