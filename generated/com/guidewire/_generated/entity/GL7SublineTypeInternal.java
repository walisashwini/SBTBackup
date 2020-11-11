package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7SublineType.eti;GL7SublineType.eix;GL7SublineType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7SublineTypeInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.LineSpecificLocationContainer, gw.api.domain.ModifiableAdapter {
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.GL7SublineTypeCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7SublineTypeCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.GL7SublineTypeExcl element);
  
  
  /**
   * Adds the given element to the Locations array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocations(entity.GL7Location element);
  
  
  /**
   * Adds the given element to the Modifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToModifiers(entity.GL7SublineTypeMod element);
  
  
  /**
   * Adds the given element to the Sublines array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSublines(entity.GL7Subline element);
  
  
  /**
   * Gets the value of the AnnualBasicLimitsCoPremiumOverridePremOps1 field.
   * Annual Basic Limits Co Premium Override Prem Ops
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAnnualBasicLimitsCoPremiumOverridePremOps1();
  
  
  /**
   * Gets the value of the AnnualBasicLimitsCoPremiumOverrideProdCompldOps1 field.
   * Annual Basic Limits Co Premium Override Prod CompldOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAnnualBasicLimitsCoPremiumOverrideProdCompldOps1();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineType getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the CompositeExposure field.
   * Composite Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getCompositeExposure();
  
  
  /**
   * Gets the value of the CompositeRating field.
   * Composite Rating Applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCompositeRating();
  
  
  /**
   * Gets the value of the Conditions field.
   * Subline Type level conditions for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCond[] getConditions();
  
  
  /**
   * Gets the value of the CoverageForm field.
   * Coverage Form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCoverageForm();
  
  
  /**
   * Gets the value of the Coverages field.
   * Subline Type level coverages for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeCov[] getCoverages();
  
  
  /**
   * Gets the value of the DamageToPremisesRentedToYouExcl field.
   * Damage To Premises Rented To You Exclusion exists
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDamageToPremisesRentedToYouExcl();
  
  
  /**
   * Gets the value of the EDLCoverageForm field.
   * Coverage Form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEDLCoverageForm();
  
  
  /**
   * Gets the value of the EDLRetroactiveDate field.
   * Retroactive Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEDLRetroactiveDate();
  
  
  /**
   * Gets the value of the ERPDramaticChangeOnExposure field.
   * The exposures have been subject to a dramatic change during or since the experience period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPDramaticChangeOnExposure();
  
  
  /**
   * Gets the value of the ERPExposuresOnSpecialUWBasisPremOpsCurrent field.
   * Premises/Operations Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getERPExposuresOnSpecialUWBasisPremOpsCurrent();
  
  
  /**
   * Gets the value of the ERPExposuresOnSpecialUWBasisProdCompldOpsCurrent field.
   * Products/Completed Operations Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getERPExposuresOnSpecialUWBasisProdCompldOpsCurrent();
  
  
  /**
   * Gets the value of the ERPPeriodEnds6MonthsPrior field.
   * Experience Period Ends At Least 6 Months Prior To Rating Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPPeriodEnds6MonthsPrior();
  
  
  /**
   * Gets the value of the ERPYearsOfExperienceIncurred field.
   * Experience Years Of Experience Incurred By Company:
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getERPYearsOfExperienceIncurred();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Subline Type level exclusions for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeExcl[] getExclusions();
  
  
  /**
   * Gets the value of the ExperienceBusinessStartDate field.
   * Start of Business Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExperienceBusinessStartDate();
  
  
  /**
   * Gets the value of the ExperienceNumberYearsRequired field.
   * Experience Number Years Required
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getExperienceNumberYearsRequired();
  
  
  /**
   * Gets the value of the ExperienceNumberYearsRequired1 field.
   * Experience Number Years Required From Line Level
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getExperienceNumberYearsRequired1();
  
  
  /**
   * Gets the value of the ExperienceRatingApplies field.
   * Experience Rating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExperienceRatingApplies();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineType getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GovernmentalSubdivision field.
   * Governmental Subdivision
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGovernmentalSubdivision();
  
  
  /**
   * Gets the value of the LegalEntity field.
   * Legal Entity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLegalEntity();
  
  
  /**
   * Gets the value of the LimitedCovForDesignatedUnmannedAircraft field.
   * Limited Coverage For Designated Unmanned Aircraft
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLimitedCovForDesignatedUnmannedAircraft();
  
  
  /**
   * Gets the value of the Line field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7GeneralLiabilityLine getLine();
  
  
  public gw.pl.persistence.core.Key getLineID();
  
  
  /**
   * Gets the value of the LiquorCoverageForm field.
   * Coverage Form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorCoverageForm();
  
  
  /**
   * Gets the value of the LiquorRetroactiveDate field.
   * Retroactive Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLiquorRetroactiveDate();
  
  
  /**
   * Gets the value of the LocationAutoNumberSeq field.
   * Sequence to autonumber GL7Location coverables
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getLocationAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getLocationAutoNumberSeqID();
  
  
  /**
   * Gets the value of the Locations field.
   * Covered Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Location[] getLocations();
  
  
  /**
   * Gets the value of the MedicalPaymentsExcl field.
   * Medical Payments Exclusion for Entire Policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMedicalPaymentsExcl();
  
  
  /**
   * Gets the value of the Modifiers field.
   * Subline Type level modifiers for General Liability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7SublineTypeMod[] getModifiers();
  
  
  /**
   * Gets the value of the Multistate field.
   * Multistate
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMultistate();
  
  
  /**
   * Gets the value of the OwnersContractorsCoverageForm field.
   * Coverage Form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnersContractorsCoverageForm();
  
  
  /**
   * Gets the value of the PackageModFactor field.
   * Package Mod Factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPackageModFactor();
  
  
  /**
   * Gets the value of the PackagePolicy field.
   * Package Policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPackagePolicy();
  
  
  /**
   * Gets the value of the PersonalAndAdvertisingInjuryExcl field.
   * Personal And Advertising Injury Exclusion exists
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPersonalAndAdvertisingInjuryExcl();
  
  
  /**
   * Gets the value of the PollutionCleanUpCoverage field.
   * Clean-Up Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionCleanUpCoverage();
  
  
  /**
   * Gets the value of the PollutionCoverageForm field.
   * Coverage Form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionCoverageForm();
  
  
  /**
   * Gets the value of the PollutionRetroactiveDate field.
   * Retroactive Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPollutionRetroactiveDate();
  
  
  /**
   * Gets the value of the PremOpsProdsCoverageForm field.
   * Coverage Form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsProdsCoverageForm();
  
  
  /**
   * Gets the value of the PremOpsProdsRetroactiveDate field.
   * Retroactive Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPremOpsProdsRetroactiveDate();
  
  
  /**
   * Gets the value of the PremiumDiscountPercentage field.
   * Premium Discount Percentage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremiumDiscountPercentage();
  
  
  /**
   * Gets the value of the ProdsWithdrawalCoverage field.
   * Limited Product Withdrawal Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsWithdrawalCoverage();
  
  
  /**
   * Gets the value of the ProductWithdrawalCoverageType field.
   * Product Withdrawal Coverage Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalCoverageType();
  
  
  /**
   * Gets the value of the ProductWithdrawalParticipationPercentage field.
   * Product Withdrawal Participation Percentage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalParticipationPercentage();
  
  
  /**
   * Gets the value of the ProductsWithdrawalCutOff field.
   * Product Withdrawal Cut off Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getProductsWithdrawalCutOff();
  
  
  /**
   * Gets the value of the RailroadCoverageForm field.
   * Coverage Form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRailroadCoverageForm();
  
  
  /**
   * Gets the value of the RetroactiveDateApplies field.
   * Retroactive Date Applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRetroactiveDateApplies();
  
  
  /**
   * Gets the value of the RiskType field.
   * Risk Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskType();
  
  
  /**
   * Gets the value of the ScheduleRatingModificationApplies field.
   * Schedule Rating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getScheduleRatingModificationApplies();
  
  
  /**
   * Gets the value of the StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getStatRecord();
  
  
  public gw.pl.persistence.core.Key getStatRecordID();
  
  
  /**
   * Gets the value of the Subline field.
   * Subline
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubline();
  
  
  /**
   * Gets the value of the Sublines field.
   * Jurisdiction-specific Subline extensions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Subline[] getSublines();
  
  
  /**
   * Gets the value of the TRIAExpirationDate field.
   * Enter current TRIA expiration date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTRIAExpirationDate();
  
  
  /**
   * Gets the value of the TRIAExtended field.
   * Has TRIA been extended past termination date of TRIP?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTRIAExtended();
  
  
  /**
   * Gets the value of the TRIPTerminatesBeforeExpirationDate field.
   * Terrorism Risk Insurance Program (TRIP) terminates before policy expiration date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTRIPTerminatesBeforeExpirationDate();
  
  
  /**
   * Gets the value of the TerrorismCoverage field.
   * Accept Certified Acts of Terrorism Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrorismCoverage();
  
  
  /**
   * Gets the value of the USTCoverageForm field.
   * Coverage Form
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUSTCoverageForm();
  
  
  /**
   * Gets the value of the UndergroundStorageTankRetroactiveDate field.
   * Retroactive Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUndergroundStorageTankRetroactiveDate();
  
  
  /**
   * Gets the value of the YearInClaimsMade field.
   * Year In Claims Made
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearInClaimsMade();
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.GL7SublineTypeCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7SublineTypeCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.GL7SublineTypeExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Locations array. This is achieved by marking the element for removal.
   */
  public void removeFromLocations(entity.GL7Location element);
  
  
  /**
   * Removes the given element from the Locations array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocations(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Modifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromModifiers(entity.GL7SublineTypeMod element);
  
  
  /**
   * Removes the given element from the Modifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Sublines array. This is achieved by marking the element for removal.
   */
  public void removeFromSublines(entity.GL7Subline element);
  
  
  /**
   * Removes the given element from the Sublines array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSublines(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AnnualBasicLimitsCoPremiumOverridePremOps1 field.
   */
  public void setAnnualBasicLimitsCoPremiumOverridePremOps1(java.lang.Integer value);
  
  
  /**
   * Sets the value of the AnnualBasicLimitsCoPremiumOverrideProdCompldOps1 field.
   */
  public void setAnnualBasicLimitsCoPremiumOverrideProdCompldOps1(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7SublineType value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CompositeExposure field.
   */
  public void setCompositeExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the CompositeRating field.
   */
  public void setCompositeRating(java.lang.String value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.GL7SublineTypeCond[] value);
  
  
  /**
   * Sets the value of the CoverageForm field.
   */
  public void setCoverageForm(java.lang.String value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7SublineTypeCov[] value);
  
  
  /**
   * Sets the value of the DamageToPremisesRentedToYouExcl field.
   */
  public void setDamageToPremisesRentedToYouExcl(java.lang.String value);
  
  
  /**
   * Sets the value of the EDLCoverageForm field.
   */
  public void setEDLCoverageForm(java.lang.String value);
  
  
  /**
   * Sets the value of the EDLRetroactiveDate field.
   */
  public void setEDLRetroactiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ERPDramaticChangeOnExposure field.
   */
  public void setERPDramaticChangeOnExposure(java.lang.String value);
  
  
  /**
   * Sets the value of the ERPExposuresOnSpecialUWBasisPremOpsCurrent field.
   */
  public void setERPExposuresOnSpecialUWBasisPremOpsCurrent(java.lang.Long value);
  
  
  /**
   * Sets the value of the ERPExposuresOnSpecialUWBasisProdCompldOpsCurrent field.
   */
  public void setERPExposuresOnSpecialUWBasisProdCompldOpsCurrent(java.lang.Long value);
  
  
  /**
   * Sets the value of the ERPPeriodEnds6MonthsPrior field.
   */
  public void setERPPeriodEnds6MonthsPrior(java.lang.String value);
  
  
  /**
   * Sets the value of the ERPYearsOfExperienceIncurred field.
   */
  public void setERPYearsOfExperienceIncurred(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.GL7SublineTypeExcl[] value);
  
  
  /**
   * Sets the value of the ExperienceBusinessStartDate field.
   */
  public void setExperienceBusinessStartDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ExperienceNumberYearsRequired field.
   */
  public void setExperienceNumberYearsRequired(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ExperienceNumberYearsRequired1 field.
   */
  public void setExperienceNumberYearsRequired1(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ExperienceRatingApplies field.
   */
  public void setExperienceRatingApplies(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7SublineType value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GovernmentalSubdivision field.
   */
  public void setGovernmentalSubdivision(java.lang.String value);
  
  
  /**
   * Sets the value of the LegalEntity field.
   */
  public void setLegalEntity(java.lang.String value);
  
  
  /**
   * Sets the value of the LimitedCovForDesignatedUnmannedAircraft field.
   */
  public void setLimitedCovForDesignatedUnmannedAircraft(java.lang.String value);
  
  
  /**
   * Sets the value of the Line field.
   */
  public void setLine(entity.GL7GeneralLiabilityLine value);
  
  
  public void setLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LiquorCoverageForm field.
   */
  public void setLiquorCoverageForm(java.lang.String value);
  
  
  /**
   * Sets the value of the LiquorRetroactiveDate field.
   */
  public void setLiquorRetroactiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LocationAutoNumberSeq field.
   */
  public void setLocationAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setLocationAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Locations field.
   */
  public void setLocations(entity.GL7Location[] value);
  
  
  /**
   * Sets the value of the MedicalPaymentsExcl field.
   */
  public void setMedicalPaymentsExcl(java.lang.String value);
  
  
  /**
   * Sets the value of the Modifiers field.
   */
  public void setModifiers(entity.GL7SublineTypeMod[] value);
  
  
  /**
   * Sets the value of the Multistate field.
   */
  public void setMultistate(java.lang.String value);
  
  
  /**
   * Sets the value of the OwnersContractorsCoverageForm field.
   */
  public void setOwnersContractorsCoverageForm(java.lang.String value);
  
  
  /**
   * Sets the value of the PackageModFactor field.
   */
  public void setPackageModFactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PackagePolicy field.
   */
  public void setPackagePolicy(java.lang.String value);
  
  
  /**
   * Sets the value of the PersonalAndAdvertisingInjuryExcl field.
   */
  public void setPersonalAndAdvertisingInjuryExcl(java.lang.String value);
  
  
  /**
   * Sets the value of the PollutionCleanUpCoverage field.
   */
  public void setPollutionCleanUpCoverage(java.lang.String value);
  
  
  /**
   * Sets the value of the PollutionCoverageForm field.
   */
  public void setPollutionCoverageForm(java.lang.String value);
  
  
  /**
   * Sets the value of the PollutionRetroactiveDate field.
   */
  public void setPollutionRetroactiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PremOpsProdsCoverageForm field.
   */
  public void setPremOpsProdsCoverageForm(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsProdsRetroactiveDate field.
   */
  public void setPremOpsProdsRetroactiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PremiumDiscountPercentage field.
   */
  public void setPremiumDiscountPercentage(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProdsWithdrawalCoverage field.
   */
  public void setProdsWithdrawalCoverage(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductWithdrawalCoverageType field.
   */
  public void setProductWithdrawalCoverageType(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductWithdrawalParticipationPercentage field.
   */
  public void setProductWithdrawalParticipationPercentage(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductsWithdrawalCutOff field.
   */
  public void setProductsWithdrawalCutOff(java.util.Date value);
  
  
  /**
   * Sets the value of the RailroadCoverageForm field.
   */
  public void setRailroadCoverageForm(java.lang.String value);
  
  
  /**
   * Sets the value of the RetroactiveDateApplies field.
   */
  public void setRetroactiveDateApplies(java.lang.String value);
  
  
  /**
   * Sets the value of the RiskType field.
   */
  public void setRiskType(java.lang.String value);
  
  
  /**
   * Sets the value of the ScheduleRatingModificationApplies field.
   */
  public void setScheduleRatingModificationApplies(java.lang.String value);
  
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value);
  
  
  public void setStatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subline field.
   */
  public void setSubline(java.lang.String value);
  
  
  /**
   * Sets the value of the Sublines field.
   */
  public void setSublines(entity.GL7Subline[] value);
  
  
  /**
   * Sets the value of the TRIAExpirationDate field.
   */
  public void setTRIAExpirationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the TRIAExtended field.
   */
  public void setTRIAExtended(java.lang.String value);
  
  
  /**
   * Sets the value of the TRIPTerminatesBeforeExpirationDate field.
   */
  public void setTRIPTerminatesBeforeExpirationDate(java.lang.String value);
  
  
  /**
   * Sets the value of the TerrorismCoverage field.
   */
  public void setTerrorismCoverage(java.lang.String value);
  
  
  /**
   * Sets the value of the USTCoverageForm field.
   */
  public void setUSTCoverageForm(java.lang.String value);
  
  
  /**
   * Sets the value of the UndergroundStorageTankRetroactiveDate field.
   */
  public void setUndergroundStorageTankRetroactiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the YearInClaimsMade field.
   */
  public void setYearInClaimsMade(java.lang.Integer value);
  
  
  
}