package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Exposure.eti;GL7Exposure.eix;GL7Exposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GL7ExposureInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.CoverableFieldAvailabilityInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter {
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.GL7ExposureCond element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7ExposureCov element);
  
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.GL7ExposureExcl element);
  
  
  /**
   * Adds the given element to the GL7ExposureMods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7ExposureMods(entity.GL7ExposureMod element);
  
  
  /**
   * Adds the given element to the UnmannedAircrafts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUnmannedAircrafts(entity.GL7UnmannedAircraft element);
  
  
  /**
   * Gets the value of the AuditedExposure field.
   * The exposure determined by an auditor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getAuditedExposure();
  
  
  /**
   * Gets the value of the AuditedProdsCompltdOpsExposure field.
   * The exposure for Products/Completed Operations determined by an auditor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getAuditedProdsCompltdOpsExposure();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Exposure getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassCode();
  
  
  /**
   * Gets the value of the ClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassDescription();
  
  
  /**
   * Gets the value of the ClassificationType field.
   * Classification Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassificationType();
  
  
  /**
   * Gets the value of the ClimbingFacilityOperator field.
   * Climbing Facility Operator
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClimbingFacilityOperator();
  
  
  /**
   * Gets the value of the Conditions field.
   * Conditions directly attached to the GL7 Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureCond[] getConditions();
  
  
  /**
   * Gets the value of the Contractor field.
   * Is the insured a contractor as defined in IA Code Ch 105?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContractor();
  
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to the GL7 Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureCov[] getCoverages();
  
  
  /**
   * Gets the value of the EDLClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEDLClassCode();
  
  
  /**
   * Gets the value of the EDLClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEDLClassDescription();
  
  
  /**
   * Gets the value of the EDLExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getEDLExposure();
  
  
  /**
   * Gets the value of the EDLPremiumRatingBase field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEDLPremiumRatingBase();
  
  
  /**
   * Gets the value of the EstdContractCostWORRHzd field.
   * Estimated Contract Cost Without Railroad Train Hazard
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getEstdContractCostWORRHzd();
  
  
  /**
   * Gets the value of the EstimatedContractCostRatio field.
   * Estimated Contract Cost Ratio Railroad Operations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getEstimatedContractCostRatio();
  
  
  /**
   * Gets the value of the Exclusions field.
   * Exclusions directly attached to the GL7 Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureExcl[] getExclusions();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Exposure getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GL7ExposureMods field.
   * Modifiers directly attached to the GL7 Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureMod[] getGL7ExposureMods();
  
  
  /**
   * Gets the value of the GL7Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Location getGL7Location();
  
  
  public gw.pl.persistence.core.Key getGL7LocationID();
  
  
  /**
   * Gets the value of the IfAnyBasis field.
   * 'If Any' Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIfAnyBasis();
  
  
  /**
   * Gets the value of the IfAnyBasisProdsCompldOps field.
   * 'If Any' Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIfAnyBasisProdsCompldOps();
  
  
  /**
   * Gets the value of the InjurySuprvsrInspctrsOtherEmpsCov field.
   * Injury to Supervisors, Inspectors and Other Employees
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInjurySuprvsrInspctrsOtherEmpsCov();
  
  
  /**
   * Gets the value of the LimitedCovForPersonalAndAdvertisingInjury field.
   * Is limited coverage for personal and advertising injury desired?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLimitedCovForPersonalAndAdvertisingInjury();
  
  
  /**
   * Gets the value of the LiquorClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorClassCode();
  
  
  /**
   * Gets the value of the LiquorClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorClassDescription();
  
  
  /**
   * Gets the value of the LiquorDedFactorOverride field.
   * Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLiquorDedFactorOverride();
  
  
  /**
   * Gets the value of the LiquorDeductible field.
   * Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorDeductible();
  
  
  /**
   * Gets the value of the LiquorELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLiquorELPOverride();
  
  
  /**
   * Gets the value of the LiquorExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLiquorExposure();
  
  
  /**
   * Gets the value of the LiquorExposureOnPremises field.
   * Liquor Exposure On-Premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorExposureOnPremises();
  
  
  /**
   * Gets the value of the LiquorPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorPremiumBasis();
  
  
  /**
   * Gets the value of the LmtdProdsWithdrawalDeductibleFactorOverride field.
   * Limited Product Withdrawal Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLmtdProdsWithdrawalDeductibleFactorOverride();
  
  
  /**
   * Gets the value of the MedPayCovForStud field.
   * Medical Payments Coverage for Students
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMedPayCovForStud();
  
  
  /**
   * Gets the value of the MiscIfAnyBasis field.
   * 'If Any' Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMiscIfAnyBasis();
  
  
  /**
   * Gets the value of the MunicipalityOperatesAFireDepartment field.
   * Municipality Operates a Fire Department
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMunicipalityOperatesAFireDepartment();
  
  
  /**
   * Gets the value of the NumPassgrFreightTrains field.
   * Number of Passenger or Freight Trains Per Day
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNumPassgrFreightTrains();
  
  
  /**
   * Gets the value of the OtherThanProdsCompldOpsCov field.
   * Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOtherThanProdsCompldOpsCov();
  
  
  /**
   * Gets the value of the OwnersContractorsClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnersContractorsClassCode();
  
  
  /**
   * Gets the value of the OwnersContractorsClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnersContractorsClassDescription();
  
  
  /**
   * Gets the value of the OwnersContractorsELPOverOneMillionOverride field.
   * Estimated Loss Potential (Exposure Over 1,000,000)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOwnersContractorsELPOverOneMillionOverride();
  
  
  /**
   * Gets the value of the OwnersContractorsELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOwnersContractorsELPOverride();
  
  
  /**
   * Gets the value of the OwnersContractorsExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getOwnersContractorsExposure();
  
  
  /**
   * Gets the value of the OwnersContractorsPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnersContractorsPremiumBasis();
  
  
  /**
   * Gets the value of the PollutionClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionClassCode();
  
  
  /**
   * Gets the value of the PollutionClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionClassDescription();
  
  
  /**
   * Gets the value of the PollutionExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getPollutionExposure();
  
  
  /**
   * Gets the value of the PollutionPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionPremiumBasis();
  
  
  /**
   * Gets the value of the PremOpsBIDeductible field.
   * BI Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsBIDeductible();
  
  
  /**
   * Gets the value of the PremOpsBIDeductibleFactorOverride field.
   * BI Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremOpsBIDeductibleFactorOverride();
  
  
  /**
   * Gets the value of the PremOpsBIPDDeductible field.
   * BI and PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsBIPDDeductible();
  
  
  /**
   * Gets the value of the PremOpsBIPDDeductibleFactorOverride field.
   * BI and PD Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremOpsBIPDDeductibleFactorOverride();
  
  
  /**
   * Gets the value of the PremOpsELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremOpsELPOverride();
  
  
  /**
   * Gets the value of the PremOpsExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getPremOpsExposure();
  
  
  /**
   * Gets the value of the PremOpsIncrdLimitTableAssignment field.
   * Increased Limits Table Assignment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsIncrdLimitTableAssignment();
  
  
  /**
   * Gets the value of the PremOpsIncrdLimitTableAssignmentOverride field.
   * Increased Limits Table Assignment Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsIncrdLimitTableAssignmentOverride();
  
  
  /**
   * Gets the value of the PremOpsPDDeductible field.
   * PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsPDDeductible();
  
  
  /**
   * Gets the value of the PremOpsPDDeductibleFactorOverride field.
   * PD Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremOpsPDDeductibleFactorOverride();
  
  
  /**
   * Gets the value of the PremOpsPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsPremiumBasis();
  
  
  /**
   * Gets the value of the ProdsCompldOpsBIDeductible field.
   * BI Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsBIDeductible();
  
  
  /**
   * Gets the value of the ProdsCompldOpsBIDeductibleFactorOverride field.
   * BI Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsBIDeductibleFactorOverride();
  
  
  /**
   * Gets the value of the ProdsCompldOpsBIPDDeductible field.
   * BI and PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsBIPDDeductible();
  
  
  /**
   * Gets the value of the ProdsCompldOpsBIPDDeductibleFactorOverride field.
   * BI and PD Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsBIPDDeductibleFactorOverride();
  
  
  /**
   * Gets the value of the ProdsCompldOpsCov field.
   * Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsCov();
  
  
  /**
   * Gets the value of the ProdsCompldOpsELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsELPOverride();
  
  
  /**
   * Gets the value of the ProdsCompldOpsExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getProdsCompldOpsExposure();
  
  
  /**
   * Gets the value of the ProdsCompldOpsIncrdLimitTableAssignment field.
   * Increased Limits Table Assignment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsIncrdLimitTableAssignment();
  
  
  /**
   * Gets the value of the ProdsCompldOpsIncrdLimitTableAssignmentOverride field.
   * Increased Limits Table Assignment Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsIncrdLimitTableAssignmentOverride();
  
  
  /**
   * Gets the value of the ProdsCompldOpsLossCost field.
   * ProdsCompldOpsLossCost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsLossCost();
  
  
  /**
   * Gets the value of the ProdsCompldOpsPDDeductible field.
   * PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsPDDeductible();
  
  
  /**
   * Gets the value of the ProdsCompldOpsPDDeductibleFactorOverride field.
   * PD Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsPDDeductibleFactorOverride();
  
  
  /**
   * Gets the value of the ProdsCompldOpsPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsPremiumBasis();
  
  
  /**
   * Gets the value of the ProductCoverage field.
   * Product Coverage Only
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCoverage();
  
  
  /**
   * Gets the value of the ProductWithdrawalCoverage field.
   * Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalCoverage();
  
  
  /**
   * Gets the value of the ProductWithdrawalDeductible field.
   * Product Withdrawal Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalDeductible();
  
  
  /**
   * Gets the value of the ProductWithdrawalDeductibleFactorOverride field.
   * Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProductWithdrawalDeductibleFactorOverride();
  
  
  /**
   * Gets the value of the ProductWithdrawalELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProductWithdrawalELPOverride();
  
  
  /**
   * Gets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment field.
   * Increased Limit Table Assignment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment();
  
  
  /**
   * Gets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride field.
   * Increased Limits Table Assignment Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride();
  
  
  /**
   * Gets the value of the ProductWithdrawalExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getProductWithdrawalExposure();
  
  
  /**
   * Gets the value of the ProductWithdrawalPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalPremiumBasis();
  
  
  /**
   * Gets the value of the RailroadClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRailroadClassCode();
  
  
  /**
   * Gets the value of the RailroadClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRailroadClassDescription();
  
  
  /**
   * Gets the value of the RailroadExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRailroadExposure();
  
  
  /**
   * Gets the value of the RailroadPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRailroadPremiumBasis();
  
  
  /**
   * Gets the value of the SprayPainting field.
   * Spray Painting
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSprayPainting();
  
  
  /**
   * Gets the value of the StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getStatRecord();
  
  
  public gw.pl.persistence.core.Key getStatRecordID();
  
  
  /**
   * Gets the value of the StopGapIncrdLimitFactorOverride field.
   * Stop Gap Increased Limits Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStopGapIncrdLimitFactorOverride();
  
  
  /**
   * Gets the value of the TerrorismExposureClassesOther field.
   * Terrorism Exposure Classes Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrorismExposureClassesOther();
  
  
  /**
   * Gets the value of the TerrorismExposureClassesPremises field.
   * Terrorism Exposure Classes Premises/Operations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrorismExposureClassesPremises();
  
  
  /**
   * Gets the value of the TerrorismExposureClassesProducts field.
   * Terrorism Exposure Classes Products/Completed Operations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrorismExposureClassesProducts();
  
  
  /**
   * Gets the value of the TotalCostWorkTrainsOrOtherRREquipmtAssigned field.
   * Cost of Work Trains or Other Railroad Equipment Assigned
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getTotalCostWorkTrainsOrOtherRREquipmtAssigned();
  
  
  /**
   * Gets the value of the USTClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUSTClassCode();
  
  
  /**
   * Gets the value of the USTClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUSTClassDescription();
  
  
  /**
   * Gets the value of the USTExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getUSTExposure();
  
  
  /**
   * Gets the value of the USTPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUSTPremiumBasis();
  
  
  /**
   * Gets the value of the UnmannedAircraftAutoNumberSeq field.
   * Sequence to autonumber GL7UnmannedAircraft coverables
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getUnmannedAircraftAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getUnmannedAircraftAutoNumberSeqID();
  
  
  /**
   * Gets the value of the UnmannedAircrafts field.
   * Covered UnmannedAircraft
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraft[] getUnmannedAircrafts();
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.GL7ExposureCond element);
  
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7ExposureCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.GL7ExposureExcl element);
  
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the GL7ExposureMods array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7ExposureMods(entity.GL7ExposureMod element);
  
  
  /**
   * Removes the given element from the GL7ExposureMods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7ExposureMods(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UnmannedAircrafts array. This is achieved by marking the element for removal.
   */
  public void removeFromUnmannedAircrafts(entity.GL7UnmannedAircraft element);
  
  
  /**
   * Removes the given element from the UnmannedAircrafts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUnmannedAircrafts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AuditedExposure field.
   */
  public void setAuditedExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the AuditedProdsCompltdOpsExposure field.
   */
  public void setAuditedProdsCompltdOpsExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GL7Exposure value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ClassCode field.
   */
  public void setClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ClassDescription field.
   */
  public void setClassDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the ClassificationType field.
   */
  public void setClassificationType(java.lang.String value);
  
  
  /**
   * Sets the value of the ClimbingFacilityOperator field.
   */
  public void setClimbingFacilityOperator(java.lang.String value);
  
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.GL7ExposureCond[] value);
  
  
  /**
   * Sets the value of the Contractor field.
   */
  public void setContractor(java.lang.String value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7ExposureCov[] value);
  
  
  /**
   * Sets the value of the EDLClassCode field.
   */
  public void setEDLClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the EDLClassDescription field.
   */
  public void setEDLClassDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the EDLExposure field.
   */
  public void setEDLExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the EDLPremiumRatingBase field.
   */
  public void setEDLPremiumRatingBase(java.lang.String value);
  
  
  /**
   * Sets the value of the EstdContractCostWORRHzd field.
   */
  public void setEstdContractCostWORRHzd(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the EstimatedContractCostRatio field.
   */
  public void setEstimatedContractCostRatio(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.GL7ExposureExcl[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GL7Exposure value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GL7ExposureMods field.
   */
  public void setGL7ExposureMods(entity.GL7ExposureMod[] value);
  
  
  /**
   * Sets the value of the GL7Location field.
   */
  public void setGL7Location(entity.GL7Location value);
  
  
  public void setGL7LocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IfAnyBasis field.
   */
  public void setIfAnyBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the IfAnyBasisProdsCompldOps field.
   */
  public void setIfAnyBasisProdsCompldOps(java.lang.String value);
  
  
  /**
   * Sets the value of the InjurySuprvsrInspctrsOtherEmpsCov field.
   */
  public void setInjurySuprvsrInspctrsOtherEmpsCov(java.lang.String value);
  
  
  /**
   * Sets the value of the LimitedCovForPersonalAndAdvertisingInjury field.
   */
  public void setLimitedCovForPersonalAndAdvertisingInjury(java.lang.String value);
  
  
  /**
   * Sets the value of the LiquorClassCode field.
   */
  public void setLiquorClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the LiquorClassDescription field.
   */
  public void setLiquorClassDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the LiquorDedFactorOverride field.
   */
  public void setLiquorDedFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the LiquorDeductible field.
   */
  public void setLiquorDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the LiquorELPOverride field.
   */
  public void setLiquorELPOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the LiquorExposure field.
   */
  public void setLiquorExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the LiquorExposureOnPremises field.
   */
  public void setLiquorExposureOnPremises(java.lang.String value);
  
  
  /**
   * Sets the value of the LiquorPremiumBasis field.
   */
  public void setLiquorPremiumBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the LmtdProdsWithdrawalDeductibleFactorOverride field.
   */
  public void setLmtdProdsWithdrawalDeductibleFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the MedPayCovForStud field.
   */
  public void setMedPayCovForStud(java.lang.String value);
  
  
  /**
   * Sets the value of the MiscIfAnyBasis field.
   */
  public void setMiscIfAnyBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the MunicipalityOperatesAFireDepartment field.
   */
  public void setMunicipalityOperatesAFireDepartment(java.lang.String value);
  
  
  /**
   * Sets the value of the NumPassgrFreightTrains field.
   */
  public void setNumPassgrFreightTrains(java.lang.String value);
  
  
  /**
   * Sets the value of the OtherThanProdsCompldOpsCov field.
   */
  public void setOtherThanProdsCompldOpsCov(java.lang.String value);
  
  
  /**
   * Sets the value of the OwnersContractorsClassCode field.
   */
  public void setOwnersContractorsClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the OwnersContractorsClassDescription field.
   */
  public void setOwnersContractorsClassDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the OwnersContractorsELPOverOneMillionOverride field.
   */
  public void setOwnersContractorsELPOverOneMillionOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OwnersContractorsELPOverride field.
   */
  public void setOwnersContractorsELPOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OwnersContractorsExposure field.
   */
  public void setOwnersContractorsExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the OwnersContractorsPremiumBasis field.
   */
  public void setOwnersContractorsPremiumBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the PollutionClassCode field.
   */
  public void setPollutionClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PollutionClassDescription field.
   */
  public void setPollutionClassDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the PollutionExposure field.
   */
  public void setPollutionExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the PollutionPremiumBasis field.
   */
  public void setPollutionPremiumBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsBIDeductible field.
   */
  public void setPremOpsBIDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsBIDeductibleFactorOverride field.
   */
  public void setPremOpsBIDeductibleFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PremOpsBIPDDeductible field.
   */
  public void setPremOpsBIPDDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsBIPDDeductibleFactorOverride field.
   */
  public void setPremOpsBIPDDeductibleFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PremOpsELPOverride field.
   */
  public void setPremOpsELPOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PremOpsExposure field.
   */
  public void setPremOpsExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the PremOpsIncrdLimitTableAssignment field.
   */
  public void setPremOpsIncrdLimitTableAssignment(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsIncrdLimitTableAssignmentOverride field.
   */
  public void setPremOpsIncrdLimitTableAssignmentOverride(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsPDDeductible field.
   */
  public void setPremOpsPDDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the PremOpsPDDeductibleFactorOverride field.
   */
  public void setPremOpsPDDeductibleFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PremOpsPremiumBasis field.
   */
  public void setPremOpsPremiumBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsBIDeductible field.
   */
  public void setProdsCompldOpsBIDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsBIDeductibleFactorOverride field.
   */
  public void setProdsCompldOpsBIDeductibleFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsBIPDDeductible field.
   */
  public void setProdsCompldOpsBIPDDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsBIPDDeductibleFactorOverride field.
   */
  public void setProdsCompldOpsBIPDDeductibleFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsCov field.
   */
  public void setProdsCompldOpsCov(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsELPOverride field.
   */
  public void setProdsCompldOpsELPOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsExposure field.
   */
  public void setProdsCompldOpsExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsIncrdLimitTableAssignment field.
   */
  public void setProdsCompldOpsIncrdLimitTableAssignment(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsIncrdLimitTableAssignmentOverride field.
   */
  public void setProdsCompldOpsIncrdLimitTableAssignmentOverride(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsLossCost field.
   */
  public void setProdsCompldOpsLossCost(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsPDDeductible field.
   */
  public void setProdsCompldOpsPDDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsPDDeductibleFactorOverride field.
   */
  public void setProdsCompldOpsPDDeductibleFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProdsCompldOpsPremiumBasis field.
   */
  public void setProdsCompldOpsPremiumBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductCoverage field.
   */
  public void setProductCoverage(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductWithdrawalCoverage field.
   */
  public void setProductWithdrawalCoverage(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductWithdrawalDeductible field.
   */
  public void setProductWithdrawalDeductible(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductWithdrawalDeductibleFactorOverride field.
   */
  public void setProductWithdrawalDeductibleFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProductWithdrawalELPOverride field.
   */
  public void setProductWithdrawalELPOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment field.
   */
  public void setProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride field.
   */
  public void setProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductWithdrawalExposure field.
   */
  public void setProductWithdrawalExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the ProductWithdrawalPremiumBasis field.
   */
  public void setProductWithdrawalPremiumBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the RailroadClassCode field.
   */
  public void setRailroadClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the RailroadClassDescription field.
   */
  public void setRailroadClassDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the RailroadExposure field.
   */
  public void setRailroadExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the RailroadPremiumBasis field.
   */
  public void setRailroadPremiumBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the SprayPainting field.
   */
  public void setSprayPainting(java.lang.String value);
  
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value);
  
  
  public void setStatRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StopGapIncrdLimitFactorOverride field.
   */
  public void setStopGapIncrdLimitFactorOverride(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TerrorismExposureClassesOther field.
   */
  public void setTerrorismExposureClassesOther(java.lang.String value);
  
  
  /**
   * Sets the value of the TerrorismExposureClassesPremises field.
   */
  public void setTerrorismExposureClassesPremises(java.lang.String value);
  
  
  /**
   * Sets the value of the TerrorismExposureClassesProducts field.
   */
  public void setTerrorismExposureClassesProducts(java.lang.String value);
  
  
  /**
   * Sets the value of the TotalCostWorkTrainsOrOtherRREquipmtAssigned field.
   */
  public void setTotalCostWorkTrainsOrOtherRREquipmtAssigned(java.lang.Integer value);
  
  
  /**
   * Sets the value of the USTClassCode field.
   */
  public void setUSTClassCode(java.lang.String value);
  
  
  /**
   * Sets the value of the USTClassDescription field.
   */
  public void setUSTClassDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the USTExposure field.
   */
  public void setUSTExposure(java.lang.Long value);
  
  
  /**
   * Sets the value of the USTPremiumBasis field.
   */
  public void setUSTPremiumBasis(java.lang.String value);
  
  
  /**
   * Sets the value of the UnmannedAircraftAutoNumberSeq field.
   */
  public void setUnmannedAircraftAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setUnmannedAircraftAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the UnmannedAircrafts field.
   */
  public void setUnmannedAircrafts(entity.GL7UnmannedAircraft[] value);
  
  
  
}