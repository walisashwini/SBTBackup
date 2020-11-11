package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Subline.eti;GL7Subline.eix;GL7Subline.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter {
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.GL7SublineCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7SublineCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.GL7SublineExcl element);
  
  
  /**
   * Adds the given element to the Modifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToModifiers(entity.GL7SublineMod element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Subline getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ByLawsCreatedOrAmendedOnOrAfterDate field.
   * By Laws Conform with the Illinois Insurance Code 5/12 and 5/12.1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getByLawsCreatedOrAmendedOnOrAfterDate();
  
  
  /**
   * Gets the value of the Conditions field.
   * Subline level conditions for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineCond[] getConditions();
  
  
  /**
   * Gets the value of the CondominiumAssociation field.
   * Condominium Association
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCondominiumAssociation();
  
  
  /**
   * Gets the value of the Coverages field.
   * Subline level coverages for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineCov[] getCoverages();
  
  
  /**
   * Gets the value of the DamageToPremisesRentedToYouExclGovernmentalSubdivision field.
   * Damage To Premises Rented To You Excluding Governmental Subdivision
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDamageToPremisesRentedToYouExclGovernmentalSubdivision();
  
  
  /**
   * Gets the value of the DoesThisRiskOperateScaffoldBuildingsInChicagoThatRequirePermit field.
   * Does this risk operate a scaffold on buildings in Chicago that require a permit?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDoesThisRiskOperateScaffoldBuildingsInChicagoThatRequirePermit();
  
  
  /**
   * Gets the value of the DoesThisRiskOperateScaffolds field.
   * Does this risk operate scaffolds?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDoesThisRiskOperateScaffolds();
  
  
  /**
   * Gets the value of the DoesThisRiskPerformHomeRepairAndRemodeling field.
   * Does this risk perform home repair and remodeling?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDoesThisRiskPerformHomeRepairAndRemodeling();
  
  
  /**
   * Gets the value of the EnergyEfficiencyInstaller field.
   * Is Insured an Energy Efficiency Installer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEnergyEfficiencyInstaller();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Subline level exclusions for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineExcl[] getExclusions();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Subline getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * The jurisdiction of the subline
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the Modifiers field.
   * Subline level modifiers for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineMod[] getModifiers();
  
  
  /**
   * Gets the value of the StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getStatRecord();
  
  
  public gw.pl.persistence.core.Key getStatRecordID();
  
  
  /**
   * Gets the value of the StopGap field.
   * Stop Gap Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStopGap();
  
  
  /**
   * Gets the value of the SublineType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineType getSublineType();
  
  
  public gw.pl.persistence.core.Key getSublineTypeID();
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.GL7SublineCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7SublineCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.GL7SublineExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Modifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromModifiers(entity.GL7SublineMod element);
  
  
  /**
   * Removes the given element from the Modifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7Subline value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ByLawsCreatedOrAmendedOnOrAfterDate field.
   */
  public void setByLawsCreatedOrAmendedOnOrAfterDate(java.lang.String value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.GL7SublineCond[] value);
  
  
  /**
   * Sets the value of the CondominiumAssociation field.
   */
  public void setCondominiumAssociation(java.lang.String value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7SublineCov[] value);
  
  
  /**
   * Sets the value of the DamageToPremisesRentedToYouExclGovernmentalSubdivision field.
   */
  public void setDamageToPremisesRentedToYouExclGovernmentalSubdivision(java.lang.String value);
  
  
  /**
   * Sets the value of the DoesThisRiskOperateScaffoldBuildingsInChicagoThatRequirePermit field.
   */
  public void setDoesThisRiskOperateScaffoldBuildingsInChicagoThatRequirePermit(java.lang.String value);
  
  
  /**
   * Sets the value of the DoesThisRiskOperateScaffolds field.
   */
  public void setDoesThisRiskOperateScaffolds(java.lang.String value);
  
  
  /**
   * Sets the value of the DoesThisRiskPerformHomeRepairAndRemodeling field.
   */
  public void setDoesThisRiskPerformHomeRepairAndRemodeling(java.lang.String value);
  
  
  /**
   * Sets the value of the EnergyEfficiencyInstaller field.
   */
  public void setEnergyEfficiencyInstaller(java.lang.String value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.GL7SublineExcl[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7Subline value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Modifiers field.
   */
  public void setModifiers(entity.GL7SublineMod[] value);
  
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value);
  
  
  public void setStatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StopGap field.
   */
  public void setStopGap(java.lang.String value);
  
  
  /**
   * Sets the value of the SublineType field.
   */
  public void setSublineType(entity.GL7SublineType value);
  
  
  public void setSublineTypeID(gw.pl.persistence.core.Key value);
  
  
  
}