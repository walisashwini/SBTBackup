package entity;

/**
 * GL7Exposure
 * General Liability Exposure
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7Exposure.eti;GL7Exposure.eix;GL7Exposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "GL7Exposure")
public class GL7Exposure extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, entity.Coverable, entity.CoverableFieldAvailability, entity.Modifiable {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.GL7Exposure, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.GL7Exposure, entity.PolicyPeriod>("entity.GL7Exposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUDITEDEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AuditedExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUDITEDPRODSCOMPLTDOPSEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AuditedProdsCompltdOpsExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClassCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLASSDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClassDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLASSIFICATIONTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClassificationType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLIMBINGFACILITYOPERATOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClimbingFacilityOperator");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CONDITIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Conditions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONTRACTOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Contractor");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COVERAGES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Coverages");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDLCLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EDLClassCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDLCLASSDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EDLClassDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDLEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EDLExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDLPREMIUMRATINGBASE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EDLPremiumRatingBase");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ESTDCONTRACTCOSTWORRHZD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EstdContractCostWORRHzd");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ESTIMATEDCONTRACTCOSTRATIO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EstimatedContractCostRatio");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> EXCLUSIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Exclusions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIELDAVAILABILITIES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FieldAvailabilities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> GL7EXPOSUREMODS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "GL7ExposureMods");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> GL7LOCATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "GL7Location");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> IFANYBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IfAnyBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> IFANYBASISPRODSCOMPLDOPS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IfAnyBasisProdsCompldOps");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCONDITIONSCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialConditionsCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCOVERAGESCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialCoveragesCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALEXCLUSIONSCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialExclusionsCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INJURYSUPRVSRINSPCTRSOTHEREMPSCOV_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InjurySuprvsrInspctrsOtherEmpsCov");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIMITEDCOVFORPERSONALANDADVERTISINGINJURY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LimitedCovForPersonalAndAdvertisingInjury");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIQUORCLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiquorClassCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIQUORCLASSDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiquorClassDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIQUORDEDFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiquorDedFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIQUORDEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiquorDeductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIQUORELPOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiquorELPOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIQUOREXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiquorExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIQUOREXPOSUREONPREMISES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiquorExposureOnPremises");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIQUORPREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiquorPremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LMTDPRODSWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LmtdProdsWithdrawalDeductibleFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MEDPAYCOVFORSTUD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MedPayCovForStud");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MISCIFANYBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MiscIfAnyBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MUNICIPALITYOPERATESAFIREDEPARTMENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MunicipalityOperatesAFireDepartment");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMPASSGRFREIGHTTRAINS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumPassgrFreightTrains");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OTHERTHANPRODSCOMPLDOPSCOV_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OtherThanProdsCompldOpsCov");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OWNERSCONTRACTORSCLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OwnersContractorsClassCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OWNERSCONTRACTORSCLASSDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OwnersContractorsClassDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OWNERSCONTRACTORSELPOVERONEMILLIONOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OwnersContractorsELPOverOneMillionOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OWNERSCONTRACTORSELPOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OwnersContractorsELPOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OWNERSCONTRACTORSEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OwnersContractorsExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OWNERSCONTRACTORSPREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OwnersContractorsPremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLLUTIONCLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PollutionClassCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLLUTIONCLASSDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PollutionClassDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLLUTIONEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PollutionExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLLUTIONPREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PollutionPremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDCOVERAGECURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreferredCoverageCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSBIDEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsBIDeductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsBIDeductibleFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSBIPDDEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsBIPDDeductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsBIPDDeductibleFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSELPOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsELPOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSINCRDLIMITTABLEASSIGNMENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsIncrdLimitTableAssignment");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsIncrdLimitTableAssignmentOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSPDDEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsPDDeductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsPDDeductibleFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMOPSPREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremOpsPremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSBIDEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsBIDeductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsBIDeductibleFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSBIPDDEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsBIPDDeductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsBIPDDeductibleFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSCOV_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsCov");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSELPOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsELPOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsIncrdLimitTableAssignment");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsIncrdLimitTableAssignmentOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSLOSSCOST_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsLossCost");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSPDDEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsPDDeductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsPDDeductibleFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODSCOMPLDOPSPREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProdsCompldOpsPremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTCOVERAGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductCoverage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALCOVERAGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalCoverage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALDEDUCTIBLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalDeductible");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalDeductibleFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALELPOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalELPOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALPREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalPremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RAILROADCLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RailroadClassCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RAILROADCLASSDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RailroadClassDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RAILROADEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RailroadExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RAILROADPREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RailroadPremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCEDATEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReferenceDateInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SPRAYPAINTING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SprayPainting");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> STATRECORD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "StatRecord");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STOPGAPINCRDLIMITFACTOROVERRIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StopGapIncrdLimitFactorOverride");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TERRORISMEXPOSURECLASSESOTHER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TerrorismExposureClassesOther");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TERRORISMEXPOSURECLASSESPREMISES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TerrorismExposureClassesPremises");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TERRORISMEXPOSURECLASSESPRODUCTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TerrorismExposureClassesProducts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALCOSTWORKTRAINSOROTHERRREQUIPMTASSIGNED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalCostWorkTrainsOrOtherRREquipmtAssigned");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> USTCLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "USTClassCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> USTCLASSDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "USTClassDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> USTEXPOSURE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "USTExposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> USTPREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "USTPremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UNMANNEDAIRCRAFTAUTONUMBERSEQ_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UnmannedAircraftAutoNumberSeq");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> UNMANNEDAIRCRAFTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "UnmannedAircrafts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.GL7ExposureInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the given branch.
   */
  public GL7Exposure(entity.PolicyPeriod branch)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initNewBeanInstance(this, java.util.Arrays.asList());
  }
  
  /**
   * Constructs a new <em>unsliced</em> instance of this entity in the given branch, and effective for the given date range.
   */
  public GL7Exposure(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initUnslicedBeanInstance(this, effectiveDate, expirationDate, java.util.Arrays.asList());
  }
  
  protected GL7Exposure(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.GL7ExposureInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.GL7ExposureInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.GL7ExposureCond element) {
    __getInternalInterface().addArrayElement(CONDITIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.GL7ExposureCov element) {
    __getInternalInterface().addArrayElement(COVERAGES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.GL7ExposureExcl element) {
    __getInternalInterface().addArrayElement(EXCLUSIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the GL7ExposureMods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToGL7ExposureMods(entity.GL7ExposureMod element) {
    __getInternalInterface().addArrayElement(GL7EXPOSUREMODS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the UnmannedAircrafts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUnmannedAircrafts(entity.GL7UnmannedAircraft element) {
    __getInternalInterface().addArrayElement(UNMANNEDAIRCRAFTS_PROP.get(), element);
  }
  
  /**
   * Finds all issues involving conditions on this coverable. None of the actions involved will
   * be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModel();
  }
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel(gw.api.productmodel.ConditionPattern[] patternsToCheck) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModel(patternsToCheck);
  }
  
  /**
   * Finds all issues involving conditions contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModelwLine(entity.PolicyLine policyLine) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModelwLine(policyLine);
  }
  
  /**
   * Finds all issues involving coverages contained on this coverable. None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModel();
  }
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel(gw.api.productmodel.CoveragePattern[] patternsToCheck) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModel(patternsToCheck);
  }
  
  /**
   * Finds all issues involving coverages contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModelwLine(entity.PolicyLine policyLine) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModelwLine(policyLine);
  }
  
  /**
   * Finds all issues involving coverages, conditions, and exclusions on this coverable. None of the actions
   * involved will be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesConditionsAndExclusionsAgainstProductModel() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesConditionsAndExclusionsAgainstProductModel();
  }
  
  /**
   * Finds all issues involving exclusions on this coverable. None of the actions involved will
   * be taken at this point; this will just return information about any potential problems.
   * @return the list of ProductModelSyncIssues found
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModel();
  }
  
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel(gw.api.productmodel.ExclusionPattern[] patternsToCheck) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModel(patternsToCheck);
  }
  
  /**
   * Finds all issues involving exclusions contained on this coverable.  None of the actions
   * involved will be taken at this point; this will just return information about any
   * potential problems.
   * @param policyLine the PolicyLine for this Coverable
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModelwLine(entity.PolicyLine policyLine) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModelwLine(policyLine);
  }
  
  /**
   * Checks modifiers on this Modifiable instance against the product model and returns the resulting sync issues.
   * None of the fix actions involved will be taken at this point; this will just return information about any
   * potential problems.
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkModifiersAgainstProductModel() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).checkModifiersAgainstProductModel();
  }
  
  /**
   * Sets this Coverable's internal reference date field to null so {@link #getCoverableReferenceDate()}
   * will compute the reference date based on the current policy data, rather than returning the
   * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
   * in a renewal job), when the reference dates must be recalculated.
   */
  public void clearCoverableReferenceDateInternal() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).clearCoverableReferenceDateInternal();
  }
  
  /**
   * Sets this Modifiable's internal reference date field to null so {@link #getModifiableReferenceDate()}
   * will compute the reference date based on the current policy data, rather than returning the
   * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
   * in a renewal job), when the reference dates must be recalculated.
   */
  public void clearModifiableReferenceDateInternal() {
    ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).clearModifiableReferenceDateInternal();
  }
  
  public entity.GL7Exposure clone() {
    return (entity.GL7Exposure)__getInternalInterface().cloneUntyped();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Creates a condition of the given <code>pattern</code> and adds the condition to this Coverable.
   * It also does the following:
   * <p/>
   * <ul>
   * <li>Automatically adds the available condition terms to the condition as determined
   * by the product model</li>
   * <li>Updates coverage symbols</li>
   * <li>Runs the Gosu initialization script from the corresponding pattern</li>
   * </ul>
   * @param pattern the pattern for the created condition
   * @return the newly created condition
   */
  public entity.PolicyCondition createCondition(gw.api.productmodel.ConditionPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCondition(pattern);
  }
  
  /**
   * Creates conditions on this object.  Asserts there are no existing
   * conditions on this object.  Use this method when first creating a coverable to
   * create conditions.
   * <p/>
   * Conditions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has conditions
   */
  public void createConditions() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createConditions();
  }
  
  /**
   * Creates a coverage of the given <code>pattern</code> and adds the coverage to this Coverable.
   * It also does the following:
   * <p/>
   * <ul>
   * <li>Automatically adds the available coverage terms to the coverage as determined
   * by the product model</li>
   * <li>Updates coverage symbols</li>
   * <li>Runs the Gosu initialization script from the corresponding pattern</li>
   * </ul>
   * @param pattern the pattern for the created coverage
   * @return the newly created coverage
   */
  public entity.Coverage createCoverage(gw.api.productmodel.CoveragePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverage(pattern);
  }
  
  /**
   * Creates a coverage, condition, or exclusion of the given <code>pattern</code> and adds it to this Coverable.
   * It also does the following:
   * <p/>
   * <ul>
   * <li>Automatically adds the available terms to the coverage, condition, or exclusion as determined
   * by the product model</li>
   * <li>Updates coverage symbols</li>
   * <li>Runs the Gosu initialization script from the corresponding pattern</li>
   * </ul>
   * @param pattern the pattern for the created clause
   * @return the newly created coverage, condition, or exclusion
   */
  public entity.Clause createCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverageConditionOrExclusion(pattern);
  }
  
  /**
   * Creates coverages on this object.  Asserts there are no existing
   * coverages on this object.  Use this method when first creating a coverable to
   * create coverages.
   * <p/>
   * Coverages created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has coverages
   */
  public void createCoverages() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverages();
  }
  
  /**
   * Creates coverages, conditions, and exclusions on this object.  Asserts there are no existing
   * coverages, conditions, and exclusions on this object.  Use this method when first creating a coverable to
   * create coverages, conditions, and exclusions.
   * <p/>
   * Coverages, conditions, and exclusions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has coverages, conditions, or exclusions
   */
  public void createCoveragesConditionsAndExclusions() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoveragesConditionsAndExclusions();
  }
  
  /**
   * Creates an exclusion of the given <code>pattern</code> and adds the exclusion to this Coverable.
   * It also does the following:
   * <p/>
   * <ul>
   * <li>Automatically adds the available exclusion terms to the exclusion as determined
   * by the product model</li>
   * <li>Updates coverage symbols</li>
   * <li>Runs the Gosu initialization script from the corresponding pattern</li>
   * </ul>
   * @param pattern the pattern for the created exclusion
   * @return the newly created exclusion
   */
  public entity.Exclusion createExclusion(gw.api.productmodel.ExclusionPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createExclusion(pattern);
  }
  
  /**
   * Creates exclusions on this object.  Asserts there are no existing
   * exclusions on this object.  Use this method when first creating a coverable to
   * create exclusions.
   * <p/>
   * Exclusions created are available and of existence type Required or Suggested.
   * @throws IllegalStateException if this coverable already has exclusions
   */
  public void createExclusions() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createExclusions();
  }
  
  /**
   * Stores the current value of {@link #getCoverableReferenceDate()} in this Coverable's internal
   * reference date field if that field is currently null, and does nothing otherwise. This should
   * be called only upon binding a policy period.
   */
  public void denormalizeCoverableReferenceDate() {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).denormalizeCoverableReferenceDate();
  }
  
  /**
   * Stores the current value of {@link #getModifiableReferenceDate()} in this Modifiable's internal
   * reference date field if that field is currently null, and does nothing otherwise. This should
   * be called only upon binding a policy period.
   */
  public void denormalizeModifiableReferenceDate() {
    ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).denormalizeModifiableReferenceDate();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  public typekey.CoveragePartType[] getAssociatedCoveragePartTypes() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getAssociatedCoveragePartTypes();
  }
  
  /**
   * Gets the value of the AuditedExposure field.
   * The exposure determined by an auditor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getAuditedExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(AUDITEDEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the AuditedProdsCompltdOpsExposure field.
   * The exposure for Products/Completed Operations determined by an auditor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getAuditedProdsCompltdOpsExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(AUDITEDPRODSCOMPLTDOPSEXPOSURE_PROP.get());
  }
  
  public entity.GL7Exposure getBasedOn() {
    return (entity.GL7Exposure)__getInternalInterface().getBasedOnUntyped();
  }
  
  /**
   * Return the bean from which this bean was based (cloned), or null if this
   * bean is new to this branch. This value will never change for the life of
   * the bean as its set when the bean is first created, either as a bean new to
   * this branch (in which case it's null) or when this bean is cloned from a
   * bean in an existing branch when its branch is created.
   * <p/>
   * When compiling DiffItems a bean is always compared to it's based-on bean to
   * discover what fields on it have changed. If there is no based-on bean then
   * we know that this bean was new to this branch.
   * @return Bean on which this bean was based (cloned), or null if this bean is
   *         new to this branch.
   */
  public entity.EffDated getBasedOnUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Exposure getBasedOnValue() {
    return (entity.GL7Exposure)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Return the branch associated with this bean. This can never be null, and
   * will never change. A bean will always be associated with the same branch.
   * @return Branch associated with this bean
   */
  public entity.EffDatedBranch getBranchUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
  }
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the ChangeType field.
   * Type of change made to this row
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffDatedChangeType getChangeType() {
    return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the ClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the ClassificationType field.
   * Classification Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassificationType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSIFICATIONTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the ClimbingFacilityOperator field.
   * Climbing Facility Operator
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClimbingFacilityOperator() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLIMBINGFACILITYOPERATOR_PROP.get());
  }
  
  /**
   * Returns the condition on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the condition on the coverable
   */
  public entity.PolicyCondition getCondition(gw.api.productmodel.ConditionPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCondition(pattern);
  }
  
  /**
   * Gets the value of the Conditions field.
   * Conditions directly attached to the GL7 Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureCond[] getConditions() {
    return (entity.GL7ExposureCond[])__getInternalInterface().getFieldValue(CONDITIONS_PROP.get());
  }
  
  public entity.PolicyCondition[] getConditionsFromCoverable() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getConditionsFromCoverable();
  }
  
  /**
   * Gets the value of the Contractor field.
   * Is the insured a contractor as defined in IA Code Ch 105?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContractor() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTRACTOR_PROP.get());
  }
  
  /**
   * 
   * @return the reference date of this Coverable object. This will be the internally persisted
   * reference date if that is not null. Otherwise it will be calculated based on the Coverable's policy line and
   * state.
   */
  public java.util.Date getCoverableReferenceDate() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverableReferenceDate();
  }
  
  /**
   * 
   * @return the state of this particular Coverable object.
   */
  public typekey.Jurisdiction getCoverableState() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverableState();
  }
  
  /**
   * Returns the coverage on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the coverage on the coverable
   */
  public entity.Coverage getCoverage(gw.api.productmodel.CoveragePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverage(pattern);
  }
  
  /**
   * Returns the coverage, condition, or exclusion on the coverable object that has
   * the passed in pattern.
   * @param pattern - the type of coverage, condition, or exclusion to get
   * @return the clause on the coverable
   */
  public entity.Clause getCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverageConditionOrExclusion(pattern);
  }
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to the GL7 Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureCov[] getCoverages() {
    return (entity.GL7ExposureCov[])__getInternalInterface().getFieldValue(COVERAGES_PROP.get());
  }
  
  /**
   * 
   * @return all the coverages, conditions, and exclusions on this coverable object.
   */
  public entity.Clause[] getCoveragesConditionsAndExclusionsFromCoverable() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoveragesConditionsAndExclusionsFromCoverable();
  }
  
  public entity.Coverage[] getCoveragesFromCoverable() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getCoveragesFromCoverable();
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the EDLClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEDLClassCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EDLCLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the EDLClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEDLClassDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EDLCLASSDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the EDLExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getEDLExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(EDLEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the EDLPremiumRatingBase field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEDLPremiumRatingBase() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EDLPREMIUMRATINGBASE_PROP.get());
  }
  
  /**
   * Get an effective date independent key for this bean. This key will include
   * the BranchId and the FixedId. This is the key for the "logical" bean.
   * <p/>
   * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
   * the same throughout its effective range (or its period range) so there is
   * no difference between the "logical" bean and the actual bean.
   */
  public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
  }
  
  /**
   * Get the date when this bean starts being effective.
   * @return Date when this bean starts being effective.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
  }
  
  /**
   * Gets the value of the EstdContractCostWORRHzd field.
   * Estimated Contract Cost Without Railroad Train Hazard
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getEstdContractCostWORRHzd() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ESTDCONTRACTCOSTWORRHZD_PROP.get());
  }
  
  /**
   * Gets the value of the EstimatedContractCostRatio field.
   * Estimated Contract Cost Ratio Railroad Operations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getEstimatedContractCostRatio() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ESTIMATEDCONTRACTCOSTRATIO_PROP.get());
  }
  
  /**
   * Returns the exclusion on the coverable object that has
   * the passed in pattern.
   * @param pattern - the coverage type to get
   * @return the exclusion on the coverable
   */
  public entity.Exclusion getExclusion(gw.api.productmodel.ExclusionPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getExclusion(pattern);
  }
  
  /**
   * Gets the value of the Exclusions field.
   * Exclusions directly attached to the GL7 Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureExcl[] getExclusions() {
    return (entity.GL7ExposureExcl[])__getInternalInterface().getFieldValue(EXCLUSIONS_PROP.get());
  }
  
  public entity.Exclusion[] getExclusionsFromCoverable() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getExclusionsFromCoverable();
  }
  
  /**
   * Get the date when this bean expires.
   * @return Date when this bean expires.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
  }
  
  /**
   * Gets the value of the FieldAvailabilities field.
   * List of field availiabilities
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFieldAvailabilities() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIELDAVAILABILITIES_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Exposure getFixed() {
    return (entity.GL7Exposure)__getInternalInterface().getFieldValue(FIXED_PROP.get());
  }
  
  /**
   * Get the logical ID for this bean, not the row ID. All row
   * @return Logical ID for this bean, not the row ID.
   */
  public gw.pl.persistence.core.Key getFixedId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  /**
   * Gets the value of the GL7ExposureMods field.
   * Modifiers directly attached to the GL7 Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7ExposureMod[] getGL7ExposureMods() {
    return (entity.GL7ExposureMod[])__getInternalInterface().getFieldValue(GL7EXPOSUREMODS_PROP.get());
  }
  
  /**
   * Gets the value of the GL7Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7Location getGL7Location() {
    return (entity.GL7Location)__getInternalInterface().getFieldValue(GL7LOCATION_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the IfAnyBasis field.
   * 'If Any' Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIfAnyBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(IFANYBASIS_PROP.get());
  }
  
  /**
   * Gets the value of the IfAnyBasisProdsCompldOps field.
   * 'If Any' Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIfAnyBasisProdsCompldOps() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(IFANYBASISPRODSCOMPLDOPS_PROP.get());
  }
  
  /**
   * Gets the value of the InjurySuprvsrInspctrsOtherEmpsCov field.
   * Injury to Supervisors, Inspectors and Other Employees
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInjurySuprvsrInspctrsOtherEmpsCov() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INJURYSUPRVSRINSPCTRSOTHEREMPSCOV_PROP.get());
  }
  
  /**
   * Gets the value of the LimitedCovForPersonalAndAdvertisingInjury field.
   * Is limited coverage for personal and advertising injury desired?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLimitedCovForPersonalAndAdvertisingInjury() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIMITEDCOVFORPERSONALANDADVERTISINGINJURY_PROP.get());
  }
  
  /**
   * Get the version list for an effective dated foreign key.  You need this
   * method because it's the only way to get the version list for a foreign key
   * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
   * since you can't traverse the array and there are no methods on
   * EffDatedVersionList to access a FK (only arrays).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key
   * @return Version list for an effective dated foreign key
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
  }
  
  /**
   * Gets the value of the LiquorClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorClassCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUORCLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the LiquorClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorClassDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUORCLASSDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the LiquorDedFactorOverride field.
   * Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLiquorDedFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(LIQUORDEDFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the LiquorDeductible field.
   * Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorDeductible() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUORDEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the LiquorELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLiquorELPOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(LIQUORELPOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the LiquorExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLiquorExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(LIQUOREXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the LiquorExposureOnPremises field.
   * Liquor Exposure On-Premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorExposureOnPremises() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUOREXPOSUREONPREMISES_PROP.get());
  }
  
  /**
   * Gets the value of the LiquorPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiquorPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUORPREMIUMBASIS_PROP.get());
  }
  
  /**
   * Gets the value of the LmtdProdsWithdrawalDeductibleFactorOverride field.
   * Limited Product Withdrawal Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLmtdProdsWithdrawalDeductibleFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(LMTDPRODSWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the MedPayCovForStud field.
   * Medical Payments Coverage for Students
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMedPayCovForStud() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MEDPAYCOVFORSTUD_PROP.get());
  }
  
  /**
   * Gets the value of the MiscIfAnyBasis field.
   * 'If Any' Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMiscIfAnyBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MISCIFANYBASIS_PROP.get());
  }
  
  /**
   * Returns the policy line that this modifiable belongs to.
   * @return the policy line of this modifiable
   */
  public entity.PolicyLine getModifiableLine() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableLine();
  }
  
  /**
   * Returns the policy period that this modifiable belongs to.
   * @return the policy period of this modifiable
   */
  public entity.PolicyPeriod getModifiablePolicyPeriod() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiablePolicyPeriod();
  }
  
  /**
   * Returns the reference date of this Modifiable object. This will be the internally persisted
   * reference date (see {@link gw.api.domain.ModifiableAdapter#getReferenceDateInternal()} if
   * that is not null. Otherwise it will be calculated based on the Modifiable's policy line and
   * state.
   * @return the reference date of this modifiable
   */
  public java.util.Date getModifiableReferenceDate() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableReferenceDate();
  }
  
  /**
   * 
   * @return the state of this modifiable
   */
  public typekey.Jurisdiction getModifiableState() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableState();
  }
  
  /**
   * Finds a Modifier of the given pattern on this Modifiable.
   * @param pattern Pattern of modifier to retrieve
   * @return Modifier that matches the criteria or <code>null</code> if none found
   */
  public entity.Modifier getModifier(gw.api.productmodel.ModifierPatternBase pattern) {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifier(pattern);
  }
  
  /**
   * Finds a Modifier on this Modifiable based on the given pattern code.
   * @param modifierPatternCode Public ID of the Modifier to find
   * @return Modifier that matches the criteria or <code>null</code> if none found
   */
  public entity.Modifier getModifier(java.lang.String modifierPatternCode) {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifier(modifierPatternCode);
  }
  
  /**
   * Returns the modifiers that are on this Modifiable. This method allow common access to
   * modifiers on Modifiable entities. However, it may be more efficient to use a similar method on the
   * Modifiable implementor that returns a specific subtype of Modifier.
   * @return Modifier[] Modifiers held by this Modifiable; may be empty array, but should not be null
   */
  public entity.Modifier[] getModifiers() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiers();
  }
  
  /**
   * Gets the value of the MunicipalityOperatesAFireDepartment field.
   * Municipality Operates a Fire Department
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMunicipalityOperatesAFireDepartment() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MUNICIPALITYOPERATESAFIREDEPARTMENT_PROP.get());
  }
  
  /**
   * Gets the value of the NumPassgrFreightTrains field.
   * Number of Passenger or Freight Trains Per Day
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNumPassgrFreightTrains() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NUMPASSGRFREIGHTTRAINS_PROP.get());
  }
  
  /**
   * Gets the value of the OtherThanProdsCompldOpsCov field.
   * Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOtherThanProdsCompldOpsCov() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OTHERTHANPRODSCOMPLDOPSCOV_PROP.get());
  }
  
  /**
   * Gets the value of the OwnersContractorsClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnersContractorsClassCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNERSCONTRACTORSCLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the OwnersContractorsClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnersContractorsClassDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNERSCONTRACTORSCLASSDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the OwnersContractorsELPOverOneMillionOverride field.
   * Estimated Loss Potential (Exposure Over 1,000,000)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOwnersContractorsELPOverOneMillionOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OWNERSCONTRACTORSELPOVERONEMILLIONOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the OwnersContractorsELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOwnersContractorsELPOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OWNERSCONTRACTORSELPOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the OwnersContractorsExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getOwnersContractorsExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(OWNERSCONTRACTORSEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the OwnersContractorsPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnersContractorsPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNERSCONTRACTORSPREMIUMBASIS_PROP.get());
  }
  
  public entity.PolicyLine getPolicyLine() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLine();
  }
  
  public entity.PolicyLocation[] getPolicyLocations() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLocations();
  }
  
  /**
   * Gets the value of the PollutionClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionClassCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONCLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the PollutionClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionClassDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONCLASSDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the PollutionExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getPollutionExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(POLLUTIONEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the PollutionPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONPREMIUMBASIS_PROP.get());
  }
  
  /**
   * Gets the Preferred Coverage Currency for coverages associated with this coverable and initializes the value if null.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPreferredCoverageCurrency() {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getPreferredCoverageCurrency();
  }
  
  /**
   * Gets the value of the PremOpsBIDeductible field.
   * BI Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsBIDeductible() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSBIDEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsBIDeductibleFactorOverride field.
   * BI Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremOpsBIDeductibleFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PREMOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsBIPDDeductible field.
   * BI and PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsBIPDDeductible() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSBIPDDEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsBIPDDeductibleFactorOverride field.
   * BI and PD Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremOpsBIPDDeductibleFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PREMOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremOpsELPOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PREMOPSELPOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getPremOpsExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(PREMOPSEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsIncrdLimitTableAssignment field.
   * Increased Limits Table Assignment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsIncrdLimitTableAssignment() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSINCRDLIMITTABLEASSIGNMENT_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsIncrdLimitTableAssignmentOverride field.
   * Increased Limits Table Assignment Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsIncrdLimitTableAssignmentOverride() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsPDDeductible field.
   * PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsPDDeductible() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSPDDEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsPDDeductibleFactorOverride field.
   * PD Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPremOpsPDDeductibleFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PREMOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the PremOpsPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremOpsPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSPREMIUMBASIS_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsBIDeductible field.
   * BI Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsBIDeductible() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSBIDEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsBIDeductibleFactorOverride field.
   * BI Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsBIDeductibleFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsBIPDDeductible field.
   * BI and PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsBIPDDeductible() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSBIPDDEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsBIPDDeductibleFactorOverride field.
   * BI and PD Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsBIPDDeductibleFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsCov field.
   * Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsCov() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSCOV_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsELPOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSELPOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getProdsCompldOpsExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsIncrdLimitTableAssignment field.
   * Increased Limits Table Assignment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsIncrdLimitTableAssignment() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENT_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsIncrdLimitTableAssignmentOverride field.
   * Increased Limits Table Assignment Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsIncrdLimitTableAssignmentOverride() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsLossCost field.
   * ProdsCompldOpsLossCost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsLossCost() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSLOSSCOST_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsPDDeductible field.
   * PD Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsPDDeductible() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSPDDEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsPDDeductibleFactorOverride field.
   * PD Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProdsCompldOpsPDDeductibleFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the ProdsCompldOpsPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProdsCompldOpsPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSPREMIUMBASIS_PROP.get());
  }
  
  /**
   * Gets the value of the ProductCoverage field.
   * Product Coverage Only
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCoverage() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTCOVERAGE_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalCoverage field.
   * Coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalCoverage() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALCOVERAGE_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalDeductible field.
   * Product Withdrawal Deductible
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalDeductible() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALDEDUCTIBLE_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalDeductibleFactorOverride field.
   * Deductible Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProductWithdrawalDeductibleFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODUCTWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalELPOverride field.
   * ELP Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getProductWithdrawalELPOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODUCTWITHDRAWALELPOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment field.
   * Increased Limit Table Assignment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENT_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride field.
   * Increased Limits Table Assignment Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getProductWithdrawalExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(PRODUCTWITHDRAWALEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALPREMIUMBASIS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RailroadClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRailroadClassCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RAILROADCLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the RailroadClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRailroadClassDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RAILROADCLASSDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the RailroadExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRailroadExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RAILROADEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the RailroadPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRailroadPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RAILROADPREMIUMBASIS_PROP.get());
  }
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of this entity on bound policy periods.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REFERENCEDATEINTERNAL_PROP.get());
  }
  
  public entity.GL7Exposure getSlice(java.util.Date sliceDate) {
    return (entity.GL7Exposure)getSliceUntyped(sliceDate);
  }
  
  /**
   * Date which this bean is "sliced" or viewed. If you traverse from this bean
   * to another bean or beans via a link or array, only beans that are effective
   * at this slice date will be returned. The beans that are returned will be
   * sliced at this date as well. If NULL then the bean is in "window" mode.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return Date which bean is sliced or null if in window mode.
   */
  public java.util.Date getSliceDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
  }
  
  /**
   * Slice this bean at a particular date. This bean can be unsliced or sliced
   * when this method is called. The slice date must be within the effective
   * range of this bean or an exception will be thrown. If you want to get at
   * the version of this "logical" bean at a date outside of this particular
   * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
   * @param sliceDate Date at which to slice this bean.
   * @return Sliced version of the bean.
   */
  public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
  }
  
  /**
   * Gets the value of the SprayPainting field.
   * Spray Painting
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSprayPainting() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPRAYPAINTING_PROP.get());
  }
  
  /**
   * Gets the value of the StatRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getStatRecord() {
    return (entity.GL7StatRecord)__getInternalInterface().getFieldValue(STATRECORD_PROP.get());
  }
  
  /**
   * Gets the value of the StopGapIncrdLimitFactorOverride field.
   * Stop Gap Increased Limits Factor Override
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStopGapIncrdLimitFactorOverride() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(STOPGAPINCRDLIMITFACTOROVERRIDE_PROP.get());
  }
  
  /**
   * Gets the value of the TerrorismExposureClassesOther field.
   * Terrorism Exposure Classes Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrorismExposureClassesOther() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRORISMEXPOSURECLASSESOTHER_PROP.get());
  }
  
  /**
   * Gets the value of the TerrorismExposureClassesPremises field.
   * Terrorism Exposure Classes Premises/Operations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrorismExposureClassesPremises() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRORISMEXPOSURECLASSESPREMISES_PROP.get());
  }
  
  /**
   * Gets the value of the TerrorismExposureClassesProducts field.
   * Terrorism Exposure Classes Products/Completed Operations
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrorismExposureClassesProducts() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRORISMEXPOSURECLASSESPRODUCTS_PROP.get());
  }
  
  /**
   * Gets the value of the TotalCostWorkTrainsOrOtherRREquipmtAssigned field.
   * Cost of Work Trains or Other Railroad Equipment Assigned
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getTotalCostWorkTrainsOrOtherRREquipmtAssigned() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(TOTALCOSTWORKTRAINSOROTHERRREQUIPMTASSIGNED_PROP.get());
  }
  
  /**
   * Gets the value of the USTClassCode field.
   * Class Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUSTClassCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USTCLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the USTClassDescription field.
   * Class Description
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUSTClassDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USTCLASSDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the USTExposure field.
   * Exposure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getUSTExposure() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(USTEXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the USTPremiumBasis field.
   * Premium Basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUSTPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USTPREMIUMBASIS_PROP.get());
  }
  
  /**
   * Gets the value of the UnmannedAircraftAutoNumberSeq field.
   * Sequence to autonumber GL7UnmannedAircraft coverables
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getUnmannedAircraftAutoNumberSeq() {
    return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(UNMANNEDAIRCRAFTAUTONUMBERSEQ_PROP.get());
  }
  
  /**
   * Gets the value of the UnmannedAircrafts field.
   * Covered UnmannedAircraft
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7UnmannedAircraft[] getUnmannedAircrafts() {
    return (entity.GL7UnmannedAircraft[])__getInternalInterface().getFieldValue(UNMANNEDAIRCRAFTS_PROP.get());
  }
  
  public entity.GL7Exposure getUnsliced() {
    return (entity.GL7Exposure)getUnslicedUntyped();
  }
  
  /**
   * Return the unsliced version of this bean. If the bean is already unsliced
   * then returns itself.
   * @return An unsliced version of this bean. If the bean is already unsliced
   *         then returns itself.
   */
  public entity.EffDated getUnslicedUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  public entity.windowed.GL7ExposureVersionList getVersionList() {
    return (entity.windowed.GL7ExposureVersionList)getVersionListUntyped();
  }
  
  /**
   * Get the version list for this bean. An EffDatedVersionList is a
   * representation of a logical bean through its effective range. For example,
   * if a bean has changes at three separate effective dates then the version
   * list will comprise 3 versions of the bean, one for each of these dates.
   * <p/>
   * You can use an EffDatedVersionList to traverse from this bean to other
   * linked beans in window mode. Recall that in window mode you cannot traverse
   * links directly from the bean.
   * <p/>
   * Although an EffDatedBranch only has a single version throughout its
   * effective range you can still get its EffDatedVersionList in order to
   * navigate in window mode from the branch to its related EffDateds.
   * @return Version list for this bean
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
  }
  
  /**
   * 
   * @param conditionPattern the pattern of the condition to check on this coverable
   * @return true if condition of the given <code>conditionPattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCondition(gw.api.productmodel.ConditionPattern conditionPattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCondition(conditionPattern);
  }
  
  /**
   * 
   * @param coveragePattern the pattern of the coverage to check
   * @return true if coverage of the given <code>coveragePattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCoverage(gw.api.productmodel.CoveragePattern coveragePattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCoverage(coveragePattern);
  }
  
  /**
   * 
   * @param pattern the pattern of the clause to check on this coverable
   * @return true if coverage, condition, or exclusion of the given <code>pattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCoverageConditionOrExclusion(pattern);
  }
  
  /**
   * 
   * @param exclusionPattern the pattern of the exclusion to check on this coverable
   * @return true if exclusion of the given <code>exclusionPattern</code>
   * exists on this Coverable; false otherwise.
   */
  public boolean hasExclusion(gw.api.productmodel.ExclusionPattern exclusionPattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasExclusion(exclusionPattern);
  }
  
  /**
   * Determines whether the given condition pattern is available for this coverable. This will be
   * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
   * the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param conditionPattern The condition pattern whose availability should be checked for this Coverable.
   * @return true if the pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isConditionAvailable(gw.api.productmodel.ConditionPattern conditionPattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isConditionAvailable(conditionPattern);
  }
  
  /**
   * Determines whether the given covterm pattern is available for this coverable. This assumes that the covterm's
   * clause pattern is available and will be true if one of the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param pattern The covterm pattern whose availability should be checked for this Coverable.
   * @return true if pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isCovTermAvailable(gw.api.productmodel.CovTermPattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCovTermAvailable(pattern);
  }
  
  /**
   * Determines whether the given coverage pattern is available for this coverable. This will be
   * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
   * the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param pattern The coverage pattern whose availability should be checked for this Coverable.
   * @return true
   *         if pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isCoverageAvailable(gw.api.productmodel.CoveragePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCoverageAvailable(pattern);
  }
  
  /**
   * Determines whether the given coverage, condition, or exclusion pattern is available for this coverable. This will be
   * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
   * the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param pattern The coverage, condition, or exclusion pattern whose availability should be checked for this Coverable.
   * @return true if the pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isCoverageConditionOrExclusionAvailable(gw.api.productmodel.ClausePattern pattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCoverageConditionOrExclusionAvailable(pattern);
  }
  
  /**
   * Given a date, check whether it falls within this bean's effective window.
   * @param effDate Date to check
   * @return True if date is within this bean's effective window.
   */
  public boolean isEffective(java.util.Date effDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
  }
  
  /**
   * Determines whether the given exclusion pattern is available for this coverable. This will be
   * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
   * the following two cases holds:
   * <p/>
   * <ol>
   * <li>The pattern is available according to both its lookup table and script (if any).
   * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
   * </ol>
   * @param exclusionPattern The exclusion pattern whose availability should be checked for this Coverable.
   * @return true if the pattern is available for this coverable; false otherwise
   */
  public java.lang.Boolean isExclusionAvailable(gw.api.productmodel.ExclusionPattern exclusionPattern) {
    return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isExclusionAvailable(exclusionPattern);
  }
  
  /**
   * Returns true if the given field has been modified relative to the based-on
   * bean and false if this bean has no based-on or if the field has the same
   * value as for the based-on bean.  This method only works with non-array
   * fields.
   * @param field the name of the property to check for changes, which must
   *              correspond to a database column (i.e. it can't be an array or
   *              a synthetic property)
   * @return true if the field has a different value for the based-on bean,
   *         false otherwise
   */
  public boolean isFieldChangedFromBasedOn(java.lang.String field) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * Gets the value of the InitialConditionsCreated field.
   * Whether or not the initial set of conditions has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialConditionsCreated() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALCONDITIONSCREATED_PROP.get());
  }
  
  /**
   * Gets the value of the InitialCoveragesCreated field.
   * Whether or not the initial set of coverages has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialCoveragesCreated() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALCOVERAGESCREATED_PROP.get());
  }
  
  /**
   * Gets the value of the InitialExclusionsCreated field.
   * Whether or not the initial set of exclusions has been created on this Coverable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInitialExclusionsCreated() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALEXCLUSIONSCREATED_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Check if this bean or branch has been promoted. A promoted bean is also
   * locked and cannot be changed.
   * <p/>
   * An EffDated is never promoted independent of its related
   * EffDatedBranch, meaning if the branch is promoted every bean in the graph
   * will be promoted, and if the branch is not promoted no bean in the graph
   * can be promoted.
   * @return True if promoted.
   */
  public boolean isPromoted() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
  }
  
  /**
   * Whether this bean is sliced. If a bean is sliced then you can navigate from
   * this bean to another bean or beans via a link or array, if it's unsliced
   * (in "window" mode) you cannot navigate from this bean.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return 
   */
  public boolean isSlice() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given <code>condition</code> from this Coverable
   * @param policyCondition the condition to remove
   */
  public void removeConditionFromCoverable(entity.PolicyCondition policyCondition) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeConditionFromCoverable(policyCondition);
  }
  
  /**
   * Removes the given coverage, condition, or exclusion from this Coverable
   * @param coverageConditionOrExclusion the clause to remove
   */
  public void removeCoverageConditionOrExclusionFromCoverable(entity.Clause coverageConditionOrExclusion) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeCoverageConditionOrExclusionFromCoverable(coverageConditionOrExclusion);
  }
  
  /**
   * Removes the given <code>coverage</code> from this Coverable
   * @param coverage the coverage to remove
   */
  public void removeCoverageFromCoverable(entity.Coverage coverage) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeCoverageFromCoverable(coverage);
  }
  
  /**
   * Removes the given <code>exclusion</code> from this Coverable
   * @param exclusion the exclusion to remove
   */
  public void removeExclusionFromCoverable(entity.Exclusion exclusion) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeExclusionFromCoverable(exclusion);
  }
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.GL7ExposureCond element) {
    __getInternalInterface().removeArrayElement(CONDITIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(CONDITIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.GL7ExposureCov element) {
    __getInternalInterface().removeArrayElement(COVERAGES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COVERAGES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.GL7ExposureExcl element) {
    __getInternalInterface().removeArrayElement(EXCLUSIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromExclusions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(EXCLUSIONS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the GL7ExposureMods array. This is achieved by marking the element for removal.
   */
  public void removeFromGL7ExposureMods(entity.GL7ExposureMod element) {
    __getInternalInterface().removeArrayElement(GL7EXPOSUREMODS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the GL7ExposureMods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromGL7ExposureMods(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(GL7EXPOSUREMODS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the UnmannedAircrafts array. This is achieved by marking the element for removal.
   */
  public void removeFromUnmannedAircrafts(entity.GL7UnmannedAircraft element) {
    __getInternalInterface().removeArrayElement(UNMANNEDAIRCRAFTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the UnmannedAircrafts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUnmannedAircrafts(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(UNMANNEDAIRCRAFTS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditedExposure field.
   */
  public void setAuditedExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(AUDITEDEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditedProdsCompltdOpsExposure field.
   */
  public void setAuditedProdsCompltdOpsExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(AUDITEDPRODSCOMPLTDOPSEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.GL7Exposure value) {
    __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchValue field.
   */
  private void setBranchValue(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClassCode field.
   */
  public void setClassCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLASSCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClassDescription field.
   */
  public void setClassDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLASSDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClassificationType field.
   */
  public void setClassificationType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLASSIFICATIONTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClimbingFacilityOperator field.
   */
  public void setClimbingFacilityOperator(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLIMBINGFACILITYOPERATOR_PROP.get(), value);
  }
  
  /**
   * <p>Adds or removes a condition with the given condition pattern.
   * <p/>
   * <p>If <code>exist</code> is <code>true</code>, adds an instance of the condition of
   * type <code>pattern</code> to this Coverable if the condition does not already exist
   * on it; does nothing if condition already exists.
   * <p/>
   * <p>If <code>exist</code> is <code>false</code>, removes the condition of type
   * <code>pattern</code> from this Coverable if such a condition exists on it; does
   * nothing otherwise.
   * @param pattern determines which condition to add or remove
   * @param exist If true, adds a condition. If false, removes the condition.
   */
  public void setConditionExists(gw.api.productmodel.ConditionPattern pattern, java.lang.Boolean exist) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setConditionExists(pattern, exist);
  }
  
  /**
   * Sets the value of the Conditions field.
   */
  public void setConditions(entity.GL7ExposureCond[] value) {
    __getInternalInterface().setFieldValue(CONDITIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Contractor field.
   */
  public void setContractor(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONTRACTOR_PROP.get(), value);
  }
  
  /**
   * <p>Adds or removes a coverage, condition, or exclusion with the given pattern.
   * <p/>
   * <p>If <code>exist</code> is <code>true</code>, adds an instance of the coverage, condition, or exclusion of
   * type <code>pattern</code> to this Coverable if it does not already exist
   * on it; does nothing if it already exists.
   * <p/>
   * <p>If <code>exist</code> is <code>false</code>, removes the coverage, condition, or exclusion of type
   * <code>pattern</code> from this Coverable if it exists on it; does
   * nothing otherwise.
   * @param pattern determines which coverage, condition, or exclusion to add or remove
   * @param exist If true, adds a coverage, condition, or exclusion. If false, removes it.
   */
  public void setCoverageConditionOrExclusionExists(gw.api.productmodel.ClausePattern pattern, java.lang.Boolean exist) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setCoverageConditionOrExclusionExists(pattern, exist);
  }
  
  /**
   * <p>Adds or removes a coverage with the given coverage pattern.
   * <p/>
   * <p>If <code>exist</code> is <code>true</code>, adds an instance of the coverage of
   * type <code>pattern</code> to this Coverable if the coverage does not already exist
   * on it; does nothing if coverage already exists.
   * <p/>
   * <p>If <code>exist</code> is <code>false</code>, removes the coverage of type
   * <code>pattern</code> from this Coverable if such a coverage exists on it; does
   * nothing otherwise.
   * @param pattern determines which coverage to add or remove
   * @param exist If true, adds a coverage. If false, removes the coverage.
   */
  public void setCoverageExists(gw.api.productmodel.CoveragePattern pattern, java.lang.Boolean exist) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setCoverageExists(pattern, exist);
  }
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.GL7ExposureCov[] value) {
    __getInternalInterface().setFieldValue(COVERAGES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EDLClassCode field.
   */
  public void setEDLClassCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EDLCLASSCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EDLClassDescription field.
   */
  public void setEDLClassDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EDLCLASSDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EDLExposure field.
   */
  public void setEDLExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(EDLEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EDLPremiumRatingBase field.
   */
  public void setEDLPremiumRatingBase(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EDLPREMIUMRATINGBASE_PROP.get(), value);
  }
  
  /**
   * Change when the effective date of this bean. You cannot change the
   * effective date when in slice mode. In window mode there are no
   * restrictions.
   * <p/>
   * The effective date must be non-null. It must also come on or before the
   * expiration date and within the period range of its branch.
   * @param effDate New effective date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setEffectiveDate(java.util.Date effDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
  }
  
  /**
   * Change the effective and expiration dates together. This can only be called
   * in window mode. Both dates must be non-null. The effective date must be
   * before or equal to the expiration date. Both dates must be within the
   * period range of its branch.
   * @param effDate New effective date
   * @param expDate New expiration date
   */
  public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
  }
  
  /**
   * Sets the value of the EstdContractCostWORRHzd field.
   */
  public void setEstdContractCostWORRHzd(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ESTDCONTRACTCOSTWORRHZD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EstimatedContractCostRatio field.
   */
  public void setEstimatedContractCostRatio(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ESTIMATEDCONTRACTCOSTRATIO_PROP.get(), value);
  }
  
  /**
   * <p>Adds or removes a exclusion with the given exclusion pattern.
   * <p/>
   * <p>If <code>exist</code> is <code>true</code>, adds an instance of the exclusion of
   * type <code>pattern</code> to this Coverable if the exclusion does not already exist
   * on it; does nothing if exclusion already exists.
   * <p/>
   * <p>If <code>exist</code> is <code>false</code>, removes the exclusion of type
   * <code>pattern</code> from this Coverable if such a exclusion exists on it; does
   * nothing otherwise.
   * @param pattern determines which exclusion to add or remove
   * @param exist If true, adds a exclusion. If false, removes the exclusion.
   */
  public void setExclusionExists(gw.api.productmodel.ExclusionPattern pattern, java.lang.Boolean exist) {
    ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setExclusionExists(pattern, exist);
  }
  
  /**
   * Sets the value of the Exclusions field.
   */
  public void setExclusions(entity.GL7ExposureExcl[] value) {
    __getInternalInterface().setFieldValue(EXCLUSIONS_PROP.get(), value);
  }
  
  /**
   * Change when the expiration date of this bean. You cannot change the
   * expiration date when in slice mode UNLESS the bean is new to its branch and
   * you're not setting the expiration date to the effective date (zero width).
   * In window mode there are no restrictions.
   * <p/>
   * The expiration date must be non-null. It must also come on or after the
   * effective date and within the period range of its branch.
   * @param expDate New expiration date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setExpirationDate(java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
  }
  
  /**
   * Sets the value of the FieldAvailabilities field.
   */
  public void setFieldAvailabilities(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIELDAVAILABILITIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.GL7Exposure value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GL7ExposureMods field.
   */
  public void setGL7ExposureMods(entity.GL7ExposureMod[] value) {
    __getInternalInterface().setFieldValue(GL7EXPOSUREMODS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GL7Location field.
   */
  public void setGL7Location(entity.GL7Location value) {
    __getInternalInterface().setFieldValue(GL7LOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IfAnyBasis field.
   */
  public void setIfAnyBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(IFANYBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IfAnyBasisProdsCompldOps field.
   */
  public void setIfAnyBasisProdsCompldOps(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(IFANYBASISPRODSCOMPLDOPS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InitialConditionsCreated field.
   */
  public void setInitialConditionsCreated(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INITIALCONDITIONSCREATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InitialCoveragesCreated field.
   */
  public void setInitialCoveragesCreated(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INITIALCOVERAGESCREATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InitialExclusionsCreated field.
   */
  public void setInitialExclusionsCreated(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INITIALEXCLUSIONSCREATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InjurySuprvsrInspctrsOtherEmpsCov field.
   */
  public void setInjurySuprvsrInspctrsOtherEmpsCov(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(INJURYSUPRVSRINSPCTRSOTHEREMPSCOV_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LimitedCovForPersonalAndAdvertisingInjury field.
   */
  public void setLimitedCovForPersonalAndAdvertisingInjury(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LIMITEDCOVFORPERSONALANDADVERTISINGINJURY_PROP.get(), value);
  }
  
  /**
   * Set a foreign key by passing in an EFfDatedKey (effectively the
   * EffDatedVersionList or FixedId of the bean). You need this method because
   * it's the only way to set a foreign key given a FixedId (and no context for
   * when that FixeId might be effective).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key to set
   * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
   *             FixedId of the bean)
   */
  public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
  }
  
  /**
   * Sets the value of the LiquorClassCode field.
   */
  public void setLiquorClassCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LIQUORCLASSCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LiquorClassDescription field.
   */
  public void setLiquorClassDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LIQUORCLASSDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LiquorDedFactorOverride field.
   */
  public void setLiquorDedFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(LIQUORDEDFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LiquorDeductible field.
   */
  public void setLiquorDeductible(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LIQUORDEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LiquorELPOverride field.
   */
  public void setLiquorELPOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(LIQUORELPOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LiquorExposure field.
   */
  public void setLiquorExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LIQUOREXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LiquorExposureOnPremises field.
   */
  public void setLiquorExposureOnPremises(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LIQUOREXPOSUREONPREMISES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LiquorPremiumBasis field.
   */
  public void setLiquorPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LIQUORPREMIUMBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LmtdProdsWithdrawalDeductibleFactorOverride field.
   */
  public void setLmtdProdsWithdrawalDeductibleFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(LMTDPRODSWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MedPayCovForStud field.
   */
  public void setMedPayCovForStud(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MEDPAYCOVFORSTUD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MiscIfAnyBasis field.
   */
  public void setMiscIfAnyBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MISCIFANYBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MunicipalityOperatesAFireDepartment field.
   */
  public void setMunicipalityOperatesAFireDepartment(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MUNICIPALITYOPERATESAFIREDEPARTMENT_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the NumPassgrFreightTrains field.
   */
  public void setNumPassgrFreightTrains(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NUMPASSGRFREIGHTTRAINS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OtherThanProdsCompldOpsCov field.
   */
  public void setOtherThanProdsCompldOpsCov(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OTHERTHANPRODSCOMPLDOPSCOV_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OwnersContractorsClassCode field.
   */
  public void setOwnersContractorsClassCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OWNERSCONTRACTORSCLASSCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OwnersContractorsClassDescription field.
   */
  public void setOwnersContractorsClassDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OWNERSCONTRACTORSCLASSDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OwnersContractorsELPOverOneMillionOverride field.
   */
  public void setOwnersContractorsELPOverOneMillionOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OWNERSCONTRACTORSELPOVERONEMILLIONOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OwnersContractorsELPOverride field.
   */
  public void setOwnersContractorsELPOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OWNERSCONTRACTORSELPOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OwnersContractorsExposure field.
   */
  public void setOwnersContractorsExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(OWNERSCONTRACTORSEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OwnersContractorsPremiumBasis field.
   */
  public void setOwnersContractorsPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OWNERSCONTRACTORSPREMIUMBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PollutionClassCode field.
   */
  public void setPollutionClassCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLLUTIONCLASSCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PollutionClassDescription field.
   */
  public void setPollutionClassDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLLUTIONCLASSDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PollutionExposure field.
   */
  public void setPollutionExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(POLLUTIONEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PollutionPremiumBasis field.
   */
  public void setPollutionPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLLUTIONPREMIUMBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreferredCoverageCurrency field.
   */
  public void setPreferredCoverageCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsBIDeductible field.
   */
  public void setPremOpsBIDeductible(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PREMOPSBIDEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsBIDeductibleFactorOverride field.
   */
  public void setPremOpsBIDeductibleFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PREMOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsBIPDDeductible field.
   */
  public void setPremOpsBIPDDeductible(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PREMOPSBIPDDEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsBIPDDeductibleFactorOverride field.
   */
  public void setPremOpsBIPDDeductibleFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PREMOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsELPOverride field.
   */
  public void setPremOpsELPOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PREMOPSELPOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsExposure field.
   */
  public void setPremOpsExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(PREMOPSEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsIncrdLimitTableAssignment field.
   */
  public void setPremOpsIncrdLimitTableAssignment(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PREMOPSINCRDLIMITTABLEASSIGNMENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsIncrdLimitTableAssignmentOverride field.
   */
  public void setPremOpsIncrdLimitTableAssignmentOverride(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PREMOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsPDDeductible field.
   */
  public void setPremOpsPDDeductible(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PREMOPSPDDEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsPDDeductibleFactorOverride field.
   */
  public void setPremOpsPDDeductibleFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PREMOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremOpsPremiumBasis field.
   */
  public void setPremOpsPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PREMOPSPREMIUMBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsBIDeductible field.
   */
  public void setProdsCompldOpsBIDeductible(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSBIDEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsBIDeductibleFactorOverride field.
   */
  public void setProdsCompldOpsBIDeductibleFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRODSCOMPLDOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsBIPDDeductible field.
   */
  public void setProdsCompldOpsBIPDDeductible(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSBIPDDEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsBIPDDeductibleFactorOverride field.
   */
  public void setProdsCompldOpsBIPDDeductibleFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRODSCOMPLDOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsCov field.
   */
  public void setProdsCompldOpsCov(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSCOV_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsELPOverride field.
   */
  public void setProdsCompldOpsELPOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRODSCOMPLDOPSELPOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsExposure field.
   */
  public void setProdsCompldOpsExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(PRODSCOMPLDOPSEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsIncrdLimitTableAssignment field.
   */
  public void setProdsCompldOpsIncrdLimitTableAssignment(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsIncrdLimitTableAssignmentOverride field.
   */
  public void setProdsCompldOpsIncrdLimitTableAssignmentOverride(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsLossCost field.
   */
  public void setProdsCompldOpsLossCost(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRODSCOMPLDOPSLOSSCOST_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsPDDeductible field.
   */
  public void setProdsCompldOpsPDDeductible(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSPDDEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsPDDeductibleFactorOverride field.
   */
  public void setProdsCompldOpsPDDeductibleFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRODSCOMPLDOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProdsCompldOpsPremiumBasis field.
   */
  public void setProdsCompldOpsPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSPREMIUMBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductCoverage field.
   */
  public void setProductCoverage(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTCOVERAGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalCoverage field.
   */
  public void setProductWithdrawalCoverage(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALCOVERAGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalDeductible field.
   */
  public void setProductWithdrawalDeductible(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALDEDUCTIBLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalDeductibleFactorOverride field.
   */
  public void setProductWithdrawalDeductibleFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRODUCTWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalELPOverride field.
   */
  public void setProductWithdrawalELPOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(PRODUCTWITHDRAWALELPOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment field.
   */
  public void setProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride field.
   */
  public void setProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalExposure field.
   */
  public void setProductWithdrawalExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(PRODUCTWITHDRAWALEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalPremiumBasis field.
   */
  public void setProductWithdrawalPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALPREMIUMBASIS_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RailroadClassCode field.
   */
  public void setRailroadClassCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RAILROADCLASSCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RailroadClassDescription field.
   */
  public void setRailroadClassDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RAILROADCLASSDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RailroadExposure field.
   */
  public void setRailroadExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RAILROADEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RailroadPremiumBasis field.
   */
  public void setRailroadPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RAILROADPREMIUMBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReferenceDateInternal field.
   */
  public void setReferenceDateInternal(java.util.Date value) {
    __getInternalInterface().setFieldValue(REFERENCEDATEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SprayPainting field.
   */
  public void setSprayPainting(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SPRAYPAINTING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StatRecord field.
   */
  public void setStatRecord(entity.GL7StatRecord value) {
    __getInternalInterface().setFieldValue(STATRECORD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StopGapIncrdLimitFactorOverride field.
   */
  public void setStopGapIncrdLimitFactorOverride(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(STOPGAPINCRDLIMITFACTOROVERRIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TerrorismExposureClassesOther field.
   */
  public void setTerrorismExposureClassesOther(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TERRORISMEXPOSURECLASSESOTHER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TerrorismExposureClassesPremises field.
   */
  public void setTerrorismExposureClassesPremises(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TERRORISMEXPOSURECLASSESPREMISES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TerrorismExposureClassesProducts field.
   */
  public void setTerrorismExposureClassesProducts(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TERRORISMEXPOSURECLASSESPRODUCTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalCostWorkTrainsOrOtherRREquipmtAssigned field.
   */
  public void setTotalCostWorkTrainsOrOtherRREquipmtAssigned(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(TOTALCOSTWORKTRAINSOROTHERRREQUIPMTASSIGNED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the USTClassCode field.
   */
  public void setUSTClassCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(USTCLASSCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the USTClassDescription field.
   */
  public void setUSTClassDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(USTCLASSDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the USTExposure field.
   */
  public void setUSTExposure(java.lang.Long value) {
    __getInternalInterface().setFieldValue(USTEXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the USTPremiumBasis field.
   */
  public void setUSTPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(USTPREMIUMBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UnmannedAircraftAutoNumberSeq field.
   */
  public void setUnmannedAircraftAutoNumberSeq(entity.AutoNumberSequence value) {
    __getInternalInterface().setFieldValue(UNMANNEDAIRCRAFTAUTONUMBERSEQ_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UnmannedAircrafts field.
   */
  public void setUnmannedAircrafts(entity.GL7UnmannedAircraft[] value) {
    __getInternalInterface().setFieldValue(UNMANNEDAIRCRAFTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  public entity.GL7Exposure split(java.util.Date splitDate) {
    return (entity.GL7Exposure)splitUntyped(splitDate);
  }
  
  /**
   * Split this bean at the given date. A bean can only be split in window mode.
   * Splitting creates a new bean (and row) with the same FixedId as this bean
   * which is effective from the original effective date of this bean to the
   * split date. We then move the effective date of this bean up to the split
   * date. The result is two beans: one effective from the original effective
   * date to the split date, the other effective from the split date to the
   * original expiration date. "This" bean is the later in that range, and the
   * bean returned from calling this method is the former in that range.
   * <p/>
   * If this bean's effective date equals the split date then no split will
   * occur. The split date must be within the effective range of this bean or an
   * exception is thrown.
   * @param splitDate Date on which to split this bean.
   * @return A new bean effective from the original effective date to the split
   *         date or this bean if no split occurred (see above).
   */
  public entity.EffDated splitUntyped(java.util.Date splitDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  /**
   * Synchronizes modifiers on this Modifiable instance with the product model, adding and removing them
   * as necessary to match pattern changes and availability conditions.
   * @return a list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> updateModifiers() {
    return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).updateModifiers();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.GL7ExposureInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.GL7Exposure.this.__getDelegateManager();
    }
    
    /**
     * Adds the given <code>condition</code> to the delegator's conditions.
     * @param condition the PolicyCondition to add to the delegator's conditions
     * @throws IllegalArgumentException if the PolicyCondition cannot be associated with the coverable object
     */
    public void addCondition(entity.PolicyCondition condition) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).addCondition(condition);
    }
    
    /**
     * Adds the given <code>coverage</code> to the delegator's coverages.
     * @param coverage the Coverage to add to the delegator's coverages
     * @throws IllegalArgumentException if the coverage cannot be associated with the coverable object
     */
    public void addCoverage(entity.Coverage coverage) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).addCoverage(coverage);
    }
    
    /**
     * Adds the given <code>exclusion</code> to the delegator's exclusions.
     * @param exclusion the Exclusion to add to the delegator's exclusions
     * @throws IllegalArgumentException if the exclusion cannot be associated with the coverable object
     */
    public void addExclusion(entity.Exclusion exclusion) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).addExclusion(exclusion);
    }
    
    public void addSlice(entity.EffDatedBase slice, java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).addSlice(slice, sliceDate);
    }
    
    /**
     * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToConditions(entity.GL7ExposureCond element) {
      __getInternalInterface().addArrayElement(CONDITIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCoverages(entity.GL7ExposureCov element) {
      __getInternalInterface().addArrayElement(COVERAGES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToExclusions(entity.GL7ExposureExcl element) {
      __getInternalInterface().addArrayElement(EXCLUSIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the GL7ExposureMods array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToGL7ExposureMods(entity.GL7ExposureMod element) {
      __getInternalInterface().addArrayElement(GL7EXPOSUREMODS_PROP.get(), element);
    }
    
    /**
     * Adds the given Modifier to the Modifiable.
     * @param element 
     */
    public void addToModifiers(entity.Modifier element) {
      ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).addToModifiers(element);
    }
    
    /**
     * Adds the given element to the UnmannedAircrafts array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToUnmannedAircrafts(entity.GL7UnmannedAircraft element) {
      __getInternalInterface().addArrayElement(UNMANNEDAIRCRAFTS_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void beforeInsert() {
      ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
    }
    
    public void beforeUpdate() {
      ((com.guidewire.pl.system.bundle.UpdateCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.UpdateCallback")).beforeUpdate();
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public void changeEdgeForeignKey(gw.entity.IEdgeLinkPropertyInfo edgeProp, gw.pl.persistence.core.Key newId) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeEdgeForeignKey(edgeProp, newId);
    }
    
    public void changeNonDefaultLocaleValue(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo localizedProperty, java.lang.Object value) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeNonDefaultLocaleValue(localizedProperty, value);
    }
    
    public void changeSlice(java.util.Date oldSliceDate, java.util.Date newSliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).changeSlice(oldSliceDate, newSliceDate);
    }
    
    /**
     * Finds all issues involving conditions on this coverable. None of the actions involved will
     * be taken at this point; this will just return information about any potential problems.
     * @return the list of ProductModelSyncIssues found
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModel(gw.api.productmodel.ConditionPattern[] patternsToCheck) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModel(patternsToCheck);
    }
    
    /**
     * Finds all issues involving conditions contained on this coverable.  None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @param policyLine the PolicyLine for this Coverable
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkConditionsAgainstProductModelwLine(entity.PolicyLine policyLine) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkConditionsAgainstProductModelwLine(policyLine);
    }
    
    /**
     * Finds all issues involving coverages contained on this coverable. None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @return the list of ProductModelSyncIssues found
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModel(gw.api.productmodel.CoveragePattern[] patternsToCheck) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModel(patternsToCheck);
    }
    
    /**
     * Finds all issues involving coverages contained on this coverable.  None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @param policyLine the PolicyLine for this Coverable
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesAgainstProductModelwLine(entity.PolicyLine policyLine) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesAgainstProductModelwLine(policyLine);
    }
    
    /**
     * Finds all issues involving coverages, conditions, and exclusions on this coverable. None of the actions
     * involved will be taken at this point; this will just return information about any potential problems.
     * @return the list of ProductModelSyncIssues found
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkCoveragesConditionsAndExclusionsAgainstProductModel() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkCoveragesConditionsAndExclusionsAgainstProductModel();
    }
    
    /**
     * Finds all issues involving exclusions on this coverable. None of the actions involved will
     * be taken at this point; this will just return information about any potential problems.
     * @return the list of ProductModelSyncIssues found
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModel();
    }
    
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModel(gw.api.productmodel.ExclusionPattern[] patternsToCheck) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModel(patternsToCheck);
    }
    
    /**
     * Finds all issues involving exclusions contained on this coverable.  None of the actions
     * involved will be taken at this point; this will just return information about any
     * potential problems.
     * @param policyLine the PolicyLine for this Coverable
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkExclusionsAgainstProductModelwLine(entity.PolicyLine policyLine) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).checkExclusionsAgainstProductModelwLine(policyLine);
    }
    
    /**
     * Checks modifiers on this Modifiable instance against the product model and returns the resulting sync issues.
     * None of the fix actions involved will be taken at this point; this will just return information about any
     * potential problems.
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkModifiersAgainstProductModel() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).checkModifiersAgainstProductModel();
    }
    
    /**
     * Sets this Coverable's internal reference date field to null so {@link #getCoverableReferenceDate()}
     * will compute the reference date based on the current policy data, rather than returning the
     * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
     * in a renewal job), when the reference dates must be recalculated.
     */
    public void clearCoverableReferenceDateInternal() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).clearCoverableReferenceDateInternal();
    }
    
    /**
     * Sets this Modifiable's internal reference date field to null so {@link #getModifiableReferenceDate()}
     * will compute the reference date based on the current policy data, rather than returning the
     * persisted field's value. This is meant to be called only upon creating a new policy term (e.g.,
     * in a renewal job), when the reference dates must be recalculated.
     */
    public void clearModifiableReferenceDateInternal() {
      ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).clearModifiableReferenceDateInternal();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    public entity.EffDated cloneIntoBranch(entity.EffDatedBranch branch) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).cloneIntoBranch(branch);
    }
    
    public entity.EffDated cloneUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).cloneUntyped();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    /**
     * Creates a condition of the given <code>pattern</code> and adds the condition to this Coverable.
     * It also does the following:
     * <p/>
     * <ul>
     * <li>Automatically adds the available condition terms to the condition as determined
     * by the product model</li>
     * <li>Updates coverage symbols</li>
     * <li>Runs the Gosu initialization script from the corresponding pattern</li>
     * </ul>
     * @param pattern the pattern for the created condition
     * @return the newly created condition
     */
    public entity.PolicyCondition createCondition(gw.api.productmodel.ConditionPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCondition(pattern);
    }
    
    public entity.PolicyCondition createCondition(gw.api.productmodel.ConditionPattern pattern, com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext context) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).createCondition(pattern, context);
    }
    
    /**
     * Creates conditions on this object.  Asserts there are no existing
     * conditions on this object.  Use this method when first creating a coverable to
     * create conditions.
     * <p/>
     * Conditions created are available and of existence type Required or Suggested.
     * @throws IllegalStateException if this coverable already has conditions
     */
    public void createConditions() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createConditions();
    }
    
    /**
     * Creates a coverage of the given <code>pattern</code> and adds the coverage to this Coverable.
     * It also does the following:
     * <p/>
     * <ul>
     * <li>Automatically adds the available coverage terms to the coverage as determined
     * by the product model</li>
     * <li>Updates coverage symbols</li>
     * <li>Runs the Gosu initialization script from the corresponding pattern</li>
     * </ul>
     * @param pattern the pattern for the created coverage
     * @return the newly created coverage
     */
    public entity.Coverage createCoverage(gw.api.productmodel.CoveragePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverage(pattern);
    }
    
    public entity.Coverage createCoverage(gw.api.productmodel.CoveragePattern pattern, com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext context) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).createCoverage(pattern, context);
    }
    
    /**
     * Creates a coverage, condition, or exclusion of the given <code>pattern</code> and adds it to this Coverable.
     * It also does the following:
     * <p/>
     * <ul>
     * <li>Automatically adds the available terms to the coverage, condition, or exclusion as determined
     * by the product model</li>
     * <li>Updates coverage symbols</li>
     * <li>Runs the Gosu initialization script from the corresponding pattern</li>
     * </ul>
     * @param pattern the pattern for the created clause
     * @return the newly created coverage, condition, or exclusion
     */
    public entity.Clause createCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverageConditionOrExclusion(pattern);
    }
    
    public entity.Clause createCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern, com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext context) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).createCoverageConditionOrExclusion(pattern, context);
    }
    
    /**
     * Creates coverages on this object.  Asserts there are no existing
     * coverages on this object.  Use this method when first creating a coverable to
     * create coverages.
     * <p/>
     * Coverages created are available and of existence type Required or Suggested.
     * @throws IllegalStateException if this coverable already has coverages
     */
    public void createCoverages() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoverages();
    }
    
    /**
     * Creates coverages, conditions, and exclusions on this object.  Asserts there are no existing
     * coverages, conditions, and exclusions on this object.  Use this method when first creating a coverable to
     * create coverages, conditions, and exclusions.
     * <p/>
     * Coverages, conditions, and exclusions created are available and of existence type Required or Suggested.
     * @throws IllegalStateException if this coverable already has coverages, conditions, or exclusions
     */
    public void createCoveragesConditionsAndExclusions() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createCoveragesConditionsAndExclusions();
    }
    
    /**
     * Creates an exclusion of the given <code>pattern</code> and adds the exclusion to this Coverable.
     * It also does the following:
     * <p/>
     * <ul>
     * <li>Automatically adds the available exclusion terms to the exclusion as determined
     * by the product model</li>
     * <li>Updates coverage symbols</li>
     * <li>Runs the Gosu initialization script from the corresponding pattern</li>
     * </ul>
     * @param pattern the pattern for the created exclusion
     * @return the newly created exclusion
     */
    public entity.Exclusion createExclusion(gw.api.productmodel.ExclusionPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createExclusion(pattern);
    }
    
    public entity.Exclusion createExclusion(gw.api.productmodel.ExclusionPattern pattern, com.guidewire.pc.domain.productmodel.CovTermAvailabilityContext context) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).createExclusion(pattern, context);
    }
    
    /**
     * Creates exclusions on this object.  Asserts there are no existing
     * exclusions on this object.  Use this method when first creating a coverable to
     * create exclusions.
     * <p/>
     * Exclusions created are available and of existence type Required or Suggested.
     * @throws IllegalStateException if this coverable already has exclusions
     */
    public void createExclusions() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).createExclusions();
    }
    
    public entity.Modifier createModifier(gw.api.productmodel.ModifierPatternBase pattern) {
      return ((com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods")).createModifier(pattern);
    }
    
    /**
     * Instantiates a new Modifier of the appropriate subtype for this Modifiable.
     */
    public entity.Modifier createRawModifier() {
      return ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).createRawModifier();
    }
    
    public boolean deletableInternal() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).deletableInternal();
    }
    
    /**
     * Stores the current value of {@link #getCoverableReferenceDate()} in this Coverable's internal
     * reference date field if that field is currently null, and does nothing otherwise. This should
     * be called only upon binding a policy period.
     */
    public void denormalizeCoverableReferenceDate() {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).denormalizeCoverableReferenceDate();
    }
    
    /**
     * Stores the current value of {@link #getModifiableReferenceDate()} in this Modifiable's internal
     * reference date field if that field is currently null, and does nothing otherwise. This should
     * be called only upon binding a policy period.
     */
    public void denormalizeModifiableReferenceDate() {
      ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).denormalizeModifiableReferenceDate();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public void extendExpirationDate(java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).extendExpirationDate(newExp);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Returns the Modifier array on the Modifiable.
     */
    public entity.Modifier[] getAllModifiers() {
      return ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).getAllModifiers();
    }
    
    /**
     * Returns the list of currencies available for use on the coverable.  OOTB set to the available currencies on the
     * associated policy line pattern
     * @return list of currencies that are allowed to be set on the coverable
     */
    public java.util.List<typekey.Currency> getAllowedCurrencies() {
      return ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).getAllowedCurrencies();
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    public typekey.CoveragePartType[] getAssociatedCoveragePartTypes() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getAssociatedCoveragePartTypes();
    }
    
    /**
     * Gets the value of the AuditedExposure field.
     * The exposure determined by an auditor.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getAuditedExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(AUDITEDEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the AuditedProdsCompltdOpsExposure field.
     * The exposure for Products/Completed Operations determined by an auditor.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getAuditedProdsCompltdOpsExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(AUDITEDPRODSCOMPLTDOPSEXPOSURE_PROP.get());
    }
    
    public com.guidewire.pc.domain.productmodel.ClauseAvailabilityContext getAvailabilityContext(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getAvailabilityContext(pattern);
    }
    
    public gw.pl.persistence.core.Key getBasedOnId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getBasedOnId();
    }
    
    /**
     * Return the bean from which this bean was based (cloned), or null if this
     * bean is new to this branch. This value will never change for the life of
     * the bean as its set when the bean is first created, either as a bean new to
     * this branch (in which case it's null) or when this bean is cloned from a
     * bean in an existing branch when its branch is created.
     * <p/>
     * When compiling DiffItems a bean is always compared to it's based-on bean to
     * discover what fields on it have changed. If there is no based-on bean then
     * we know that this bean was new to this branch.
     * @return Bean on which this bean was based (cloned), or null if this bean is
     *         new to this branch.
     */
    public entity.EffDated getBasedOnUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
    }
    
    /**
     * Gets the value of the BasedOnValue field.
     * Link to the row on which this row is based; or null if new to branch
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7Exposure getBasedOnValue() {
      return (entity.GL7Exposure)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BASEDONVALUE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    public gw.pl.persistence.core.Key getBranchId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getBranchId();
    }
    
    /**
     * Return the branch associated with this bean. This can never be null, and
     * will never change. A bean will always be associated with the same branch.
     * @return Branch associated with this bean
     */
    public entity.EffDatedBranch getBranchUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
    }
    
    /**
     * Gets the value of the BranchValue field.
     * Link to root of effdated tree
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getBranchValue() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBranchValueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BRANCHVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the ChangeType field.
     * Type of change made to this row
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.EffDatedChangeType getChangeType() {
      return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
    }
    
    public java.util.Set<gw.lang.reflect.IPropertyInfo> getChangedFields(entity.EffDated basedOn) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getChangedFields(basedOn);
    }
    
    public java.util.Set<gw.lang.reflect.IPropertyInfo> getChangedFieldsFromBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getChangedFieldsFromBasedOn();
    }
    
    /**
     * Gets the value of the ClassCode field.
     * Class Code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClassCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ClassDescription field.
     * Class Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClassDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the ClassificationType field.
     * Classification Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClassificationType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSIFICATIONTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the ClimbingFacilityOperator field.
     * Climbing Facility Operator
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClimbingFacilityOperator() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLIMBINGFACILITYOPERATOR_PROP.get());
    }
    
    /**
     * Returns the condition on the coverable object that has
     * the passed in pattern.
     * @param pattern - the coverage type to get
     * @return the condition on the coverable
     */
    public entity.PolicyCondition getCondition(gw.api.productmodel.ConditionPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCondition(pattern);
    }
    
    public gw.api.productmodel.ConditionPattern[] getConditionTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getConditionTypesForCoverable();
    }
    
    /**
     * Gets the value of the Conditions field.
     * Conditions directly attached to the GL7 Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7ExposureCond[] getConditions() {
      return (entity.GL7ExposureCond[])__getInternalInterface().getFieldValue(CONDITIONS_PROP.get());
    }
    
    public entity.PolicyCondition[] getConditionsFromCoverable() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getConditionsFromCoverable();
    }
    
    /**
     * Gets the value of the Contractor field.
     * Is the insured a contractor as defined in IA Code Ch 105?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getContractor() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTRACTOR_PROP.get());
    }
    
    /**
     * 
     * @return the reference date of this Coverable object. This will be the internally persisted
     * reference date if that is not null. Otherwise it will be calculated based on the Coverable's policy line and
     * state.
     */
    public java.util.Date getCoverableReferenceDate() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverableReferenceDate();
    }
    
    /**
     * 
     * @return the state of this particular Coverable object.
     */
    public typekey.Jurisdiction getCoverableState() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverableState();
    }
    
    /**
     * Returns the coverage on the coverable object that has
     * the passed in pattern.
     * @param pattern - the coverage type to get
     * @return the coverage on the coverable
     */
    public entity.Coverage getCoverage(gw.api.productmodel.CoveragePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverage(pattern);
    }
    
    public gw.api.productmodel.ClausePattern[] getCoverageConditionAndExclusionTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getCoverageConditionAndExclusionTypesForCoverable();
    }
    
    /**
     * Returns the coverage, condition, or exclusion on the coverable object that has
     * the passed in pattern.
     * @param pattern - the type of coverage, condition, or exclusion to get
     * @return the clause on the coverable
     */
    public entity.Clause getCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoverageConditionOrExclusion(pattern);
    }
    
    public gw.api.productmodel.CoveragePattern[] getCoverageTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getCoverageTypesForCoverable();
    }
    
    /**
     * Gets the value of the Coverages field.
     * Coverages directly attached to the GL7 Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7ExposureCov[] getCoverages() {
      return (entity.GL7ExposureCov[])__getInternalInterface().getFieldValue(COVERAGES_PROP.get());
    }
    
    /**
     * 
     * @return all the coverages, conditions, and exclusions on this coverable object.
     */
    public entity.Clause[] getCoveragesConditionsAndExclusionsFromCoverable() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getCoveragesConditionsAndExclusionsFromCoverable();
    }
    
    public entity.Coverage[] getCoveragesFromCoverable() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getCoveragesFromCoverable();
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Returns the currency used as the default for the PreferredCoverageCurrency input. E.g. we refer to the PolicyLine currency
     * in the PersonalVehicleCoverableAdapter.
     * @return the default currency used in the PreferredCoverageCurrency input
     */
    public typekey.Currency getDefaultCurrency() {
      return ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).getDefaultCurrency();
    }
    
    /**
     * Gets the value of the EDLClassCode field.
     * Class Code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEDLClassCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EDLCLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the EDLClassDescription field.
     * Class Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEDLClassDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EDLCLASSDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the EDLExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getEDLExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(EDLEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the EDLPremiumRatingBase field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEDLPremiumRatingBase() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EDLPREMIUMRATINGBASE_PROP.get());
    }
    
    /**
     * Get an effective date independent key for this bean. This key will include
     * the BranchId and the FixedId. This is the key for the "logical" bean.
     * <p/>
     * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
     * the same throughout its effective range (or its period range) so there is
     * no difference between the "logical" bean and the actual bean.
     */
    public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
    }
    
    public java.util.Map<java.util.Date, java.lang.Boolean> getEffectiveCache() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getEffectiveCache();
    }
    
    /**
     * Get the date when this bean starts being effective.
     * @return Date when this bean starts being effective.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
    }
    
    public com.guidewire.pl.system.util.DateRange getEffectiveRange() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getEffectiveRange();
    }
    
    /**
     * Gets the value of the EstdContractCostWORRHzd field.
     * Estimated Contract Cost Without Railroad Train Hazard
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getEstdContractCostWORRHzd() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ESTDCONTRACTCOSTWORRHZD_PROP.get());
    }
    
    /**
     * Gets the value of the EstimatedContractCostRatio field.
     * Estimated Contract Cost Ratio Railroad Operations
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getEstimatedContractCostRatio() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ESTIMATEDCONTRACTCOSTRATIO_PROP.get());
    }
    
    /**
     * Returns the exclusion on the coverable object that has
     * the passed in pattern.
     * @param pattern - the coverage type to get
     * @return the exclusion on the coverable
     */
    public entity.Exclusion getExclusion(gw.api.productmodel.ExclusionPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getExclusion(pattern);
    }
    
    public gw.api.productmodel.ExclusionPattern[] getExclusionTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getExclusionTypesForCoverable();
    }
    
    /**
     * Gets the value of the Exclusions field.
     * Exclusions directly attached to the GL7 Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7ExposureExcl[] getExclusions() {
      return (entity.GL7ExposureExcl[])__getInternalInterface().getFieldValue(EXCLUSIONS_PROP.get());
    }
    
    public entity.Exclusion[] getExclusionsFromCoverable() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getExclusionsFromCoverable();
    }
    
    /**
     * Get the date when this bean expires.
     * @return Date when this bean expires.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpirationDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
    }
    
    /**
     * Gets the value of the FieldAvailabilities field.
     * List of field availiabilities
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFieldAvailabilities() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIELDAVAILABILITIES_PROP.get());
    }
    
    /**
     * Gets the value of the Fixed field.
     * Unique ID for this 'object' across all branches and periods
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7Exposure getFixed() {
      return (entity.GL7Exposure)__getInternalInterface().getFieldValue(FIXED_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFixedID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FIXED_PROP.get());
    }
    
    /**
     * Get the logical ID for this bean, not the row ID. All row
     * @return Logical ID for this bean, not the row ID.
     */
    public gw.pl.persistence.core.Key getFixedId() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
    }
    
    /**
     * Gets the value of the FrozenSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FrozenSet getFrozenSet() {
      return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFrozenSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FROZENSET_PROP.get());
    }
    
    public java.util.List<entity.EffDated> getFutureVersions() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).getFutureVersions();
    }
    
    /**
     * Gets the value of the GL7ExposureMods field.
     * Modifiers directly attached to the GL7 Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7ExposureMod[] getGL7ExposureMods() {
      return (entity.GL7ExposureMod[])__getInternalInterface().getFieldValue(GL7EXPOSUREMODS_PROP.get());
    }
    
    /**
     * Gets the value of the GL7Location field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7Location getGL7Location() {
      return (entity.GL7Location)__getInternalInterface().getFieldValue(GL7LOCATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getGL7LocationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(GL7LOCATION_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the IfAnyBasis field.
     * 'If Any' Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getIfAnyBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(IFANYBASIS_PROP.get());
    }
    
    /**
     * Gets the value of the IfAnyBasisProdsCompldOps field.
     * 'If Any' Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getIfAnyBasisProdsCompldOps() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(IFANYBASISPRODSCOMPLDOPS_PROP.get());
    }
    
    /**
     * Gets the value of the InjurySuprvsrInspctrsOtherEmpsCov field.
     * Injury to Supervisors, Inspectors and Other Employees
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getInjurySuprvsrInspctrsOtherEmpsCov() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INJURYSUPRVSRINSPCTRSOTHEREMPSCOV_PROP.get());
    }
    
    /**
     * Gets the value of the LimitedCovForPersonalAndAdvertisingInjury field.
     * Is limited coverage for personal and advertising injury desired?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLimitedCovForPersonalAndAdvertisingInjury() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIMITEDCOVFORPERSONALANDADVERTISINGINJURY_PROP.get());
    }
    
    /**
     * Get the version list for an effective dated foreign key.  You need this
     * method because it's the only way to get the version list for a foreign key
     * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
     * since you can't traverse the array and there are no methods on
     * EffDatedVersionList to access a FK (only arrays).
     * <p/>
     * This bean can be unsliced or sliced when this is called.
     * @param link Effective dated foreign key
     * @return Version list for an effective dated foreign key
     */
    public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
    }
    
    /**
     * Gets the value of the LiquorClassCode field.
     * Class Code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLiquorClassCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUORCLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the LiquorClassDescription field.
     * Class Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLiquorClassDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUORCLASSDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the LiquorDedFactorOverride field.
     * Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getLiquorDedFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(LIQUORDEDFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the LiquorDeductible field.
     * Deductible
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLiquorDeductible() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUORDEDUCTIBLE_PROP.get());
    }
    
    /**
     * Gets the value of the LiquorELPOverride field.
     * ELP Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getLiquorELPOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(LIQUORELPOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the LiquorExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getLiquorExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(LIQUOREXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the LiquorExposureOnPremises field.
     * Liquor Exposure On-Premises
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLiquorExposureOnPremises() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUOREXPOSUREONPREMISES_PROP.get());
    }
    
    /**
     * Gets the value of the LiquorPremiumBasis field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLiquorPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIQUORPREMIUMBASIS_PROP.get());
    }
    
    /**
     * Gets the value of the LmtdProdsWithdrawalDeductibleFactorOverride field.
     * Limited Product Withdrawal Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getLmtdProdsWithdrawalDeductibleFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(LMTDPRODSWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP.get());
    }
    
    public entity.EffDatedBase getMaster() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getMaster();
    }
    
    /**
     * Gets the value of the MedPayCovForStud field.
     * Medical Payments Coverage for Students
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMedPayCovForStud() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MEDPAYCOVFORSTUD_PROP.get());
    }
    
    /**
     * Gets the value of the MiscIfAnyBasis field.
     * 'If Any' Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMiscIfAnyBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MISCIFANYBASIS_PROP.get());
    }
    
    /**
     * Returns the policy line that this modifiable belongs to.
     * @return the policy line of this modifiable
     */
    public entity.PolicyLine getModifiableLine() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableLine();
    }
    
    /**
     * Returns the policy period that this modifiable belongs to.
     * @return the policy period of this modifiable
     */
    public entity.PolicyPeriod getModifiablePolicyPeriod() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiablePolicyPeriod();
    }
    
    /**
     * Returns the reference date of this Modifiable object. This will be the internally persisted
     * reference date (see {@link gw.api.domain.ModifiableAdapter#getReferenceDateInternal()} if
     * that is not null. Otherwise it will be calculated based on the Modifiable's policy line and
     * state.
     * @return the reference date of this modifiable
     */
    public java.util.Date getModifiableReferenceDate() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableReferenceDate();
    }
    
    /**
     * 
     * @return the state of this modifiable
     */
    public typekey.Jurisdiction getModifiableState() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiableState();
    }
    
    /**
     * Finds a Modifier of the given pattern on this Modifiable.
     * @param pattern Pattern of modifier to retrieve
     * @return Modifier that matches the criteria or <code>null</code> if none found
     */
    public entity.Modifier getModifier(gw.api.productmodel.ModifierPatternBase pattern) {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifier(pattern);
    }
    
    /**
     * Finds a Modifier on this Modifiable based on the given pattern code.
     * @param modifierPatternCode Public ID of the Modifier to find
     * @return Modifier that matches the criteria or <code>null</code> if none found
     */
    public entity.Modifier getModifier(java.lang.String modifierPatternCode) {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifier(modifierPatternCode);
    }
    
    /**
     * Returns the modifiers that are on this Modifiable. This method allow common access to
     * modifiers on Modifiable entities. However, it may be more efficient to use a similar method on the
     * Modifiable implementor that returns a specific subtype of Modifier.
     * @return Modifier[] Modifiers held by this Modifiable; may be empty array, but should not be null
     */
    public entity.Modifier[] getModifiers() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).getModifiers();
    }
    
    /**
     * Gets the value of the MunicipalityOperatesAFireDepartment field.
     * Municipality Operates a Fire Department
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMunicipalityOperatesAFireDepartment() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MUNICIPALITYOPERATESAFIREDEPARTMENT_PROP.get());
    }
    
    /**
     * Gets the value of the NumPassgrFreightTrains field.
     * Number of Passenger or Freight Trains Per Day
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNumPassgrFreightTrains() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NUMPASSGRFREIGHTTRAINS_PROP.get());
    }
    
    /**
     * Gets the value of the OtherThanProdsCompldOpsCov field.
     * Coverage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOtherThanProdsCompldOpsCov() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OTHERTHANPRODSCOMPLDOPSCOV_PROP.get());
    }
    
    /**
     * Gets the value of the OwnersContractorsClassCode field.
     * Class Code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOwnersContractorsClassCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNERSCONTRACTORSCLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the OwnersContractorsClassDescription field.
     * Class Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOwnersContractorsClassDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNERSCONTRACTORSCLASSDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the OwnersContractorsELPOverOneMillionOverride field.
     * Estimated Loss Potential (Exposure Over 1,000,000)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getOwnersContractorsELPOverOneMillionOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OWNERSCONTRACTORSELPOVERONEMILLIONOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the OwnersContractorsELPOverride field.
     * ELP Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getOwnersContractorsELPOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OWNERSCONTRACTORSELPOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the OwnersContractorsExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getOwnersContractorsExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(OWNERSCONTRACTORSEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the OwnersContractorsPremiumBasis field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOwnersContractorsPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNERSCONTRACTORSPREMIUMBASIS_PROP.get());
    }
    
    public entity.PolicyLine getPolicyLine() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLine();
    }
    
    public entity.PolicyLocation[] getPolicyLocations() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLocations();
    }
    
    /**
     * Returns the PolicyPeriod of the Modifiable. Must not return null.
     */
    public entity.PolicyPeriod getPolicyPeriod() {
      return ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).getPolicyPeriod();
    }
    
    /**
     * Gets the value of the PollutionClassCode field.
     * Class Code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPollutionClassCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONCLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the PollutionClassDescription field.
     * Class Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPollutionClassDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONCLASSDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the PollutionExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getPollutionExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(POLLUTIONEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the PollutionPremiumBasis field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPollutionPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONPREMIUMBASIS_PROP.get());
    }
    
    /**
     * Gets the Preferred Coverage Currency for coverages associated with this coverable and initializes the value if null.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPreferredCoverageCurrency() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getPreferredCoverageCurrency();
    }
    
    /**
     * Gets the value of the PremOpsBIDeductible field.
     * BI Deductible
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPremOpsBIDeductible() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSBIDEDUCTIBLE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsBIDeductibleFactorOverride field.
     * BI Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getPremOpsBIDeductibleFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PREMOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsBIPDDeductible field.
     * BI and PD Deductible
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPremOpsBIPDDeductible() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSBIPDDEDUCTIBLE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsBIPDDeductibleFactorOverride field.
     * BI and PD Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getPremOpsBIPDDeductibleFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PREMOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsELPOverride field.
     * ELP Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getPremOpsELPOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PREMOPSELPOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getPremOpsExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(PREMOPSEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsIncrdLimitTableAssignment field.
     * Increased Limits Table Assignment
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPremOpsIncrdLimitTableAssignment() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSINCRDLIMITTABLEASSIGNMENT_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsIncrdLimitTableAssignmentOverride field.
     * Increased Limits Table Assignment Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPremOpsIncrdLimitTableAssignmentOverride() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsPDDeductible field.
     * PD Deductible
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPremOpsPDDeductible() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSPDDEDUCTIBLE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsPDDeductibleFactorOverride field.
     * PD Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getPremOpsPDDeductibleFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PREMOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the PremOpsPremiumBasis field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPremOpsPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMOPSPREMIUMBASIS_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsBIDeductible field.
     * BI Deductible
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProdsCompldOpsBIDeductible() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSBIDEDUCTIBLE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsBIDeductibleFactorOverride field.
     * BI Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getProdsCompldOpsBIDeductibleFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsBIPDDeductible field.
     * BI and PD Deductible
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProdsCompldOpsBIPDDeductible() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSBIPDDEDUCTIBLE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsBIPDDeductibleFactorOverride field.
     * BI and PD Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getProdsCompldOpsBIPDDeductibleFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsCov field.
     * Coverage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProdsCompldOpsCov() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSCOV_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsELPOverride field.
     * ELP Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getProdsCompldOpsELPOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSELPOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getProdsCompldOpsExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsIncrdLimitTableAssignment field.
     * Increased Limits Table Assignment
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProdsCompldOpsIncrdLimitTableAssignment() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENT_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsIncrdLimitTableAssignmentOverride field.
     * Increased Limits Table Assignment Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProdsCompldOpsIncrdLimitTableAssignmentOverride() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsLossCost field.
     * ProdsCompldOpsLossCost
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getProdsCompldOpsLossCost() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSLOSSCOST_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsPDDeductible field.
     * PD Deductible
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProdsCompldOpsPDDeductible() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSPDDEDUCTIBLE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsPDDeductibleFactorOverride field.
     * PD Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getProdsCompldOpsPDDeductibleFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODSCOMPLDOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the ProdsCompldOpsPremiumBasis field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProdsCompldOpsPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODSCOMPLDOPSPREMIUMBASIS_PROP.get());
    }
    
    /**
     * Gets the value of the ProductCoverage field.
     * Product Coverage Only
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductCoverage() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTCOVERAGE_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalCoverage field.
     * Coverage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductWithdrawalCoverage() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALCOVERAGE_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalDeductible field.
     * Product Withdrawal Deductible
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductWithdrawalDeductible() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALDEDUCTIBLE_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalDeductibleFactorOverride field.
     * Deductible Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getProductWithdrawalDeductibleFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODUCTWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalELPOverride field.
     * ELP Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getProductWithdrawalELPOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(PRODUCTWITHDRAWALELPOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment field.
     * Increased Limit Table Assignment
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENT_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride field.
     * Increased Limits Table Assignment Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getProductWithdrawalExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(PRODUCTWITHDRAWALEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalPremiumBasis field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductWithdrawalPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALPREMIUMBASIS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RailroadClassCode field.
     * Class Code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRailroadClassCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RAILROADCLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the RailroadClassDescription field.
     * Class Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRailroadClassDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RAILROADCLASSDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the RailroadExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRailroadExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(RAILROADEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the RailroadPremiumBasis field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRailroadPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RAILROADPREMIUMBASIS_PROP.get());
    }
    
    public com.guidewire.pc.domain.productmodel.RateFactorAvailabilityContext getRateFactorAvailabilityContext(gw.api.productmodel.ModifierPatternBase modifierPattern) {
      return ((com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods")).getRateFactorAvailabilityContext(modifierPattern);
    }
    
    /**
     * Gets the value of the ReferenceDateInternal field.
     * Internal field for storing the reference date of this entity on bound policy periods.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getReferenceDateInternal() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REFERENCEDATEINTERNAL_PROP.get());
    }
    
    /**
     * Date which this bean is "sliced" or viewed. If you traverse from this bean
     * to another bean or beans via a link or array, only beans that are effective
     * at this slice date will be returned. The beans that are returned will be
     * sliced at this date as well. If NULL then the bean is in "window" mode.
     * <p/>
     * In most cases a bean will be sliced, window mode is used in special cases.
     * @return Date which bean is sliced or null if in window mode.
     */
    public java.util.Date getSliceDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
    }
    
    /**
     * Slice this bean at a particular date. This bean can be unsliced or sliced
     * when this method is called. The slice date must be within the effective
     * range of this bean or an exception will be thrown. If you want to get at
     * the version of this "logical" bean at a date outside of this particular
     * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
     * @param sliceDate Date at which to slice this bean.
     * @return Sliced version of the bean.
     */
    public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
    }
    
    public java.util.Collection<entity.EffDatedBase> getSlices() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getSlices();
    }
    
    public java.util.Map<java.util.Date, entity.EffDatedBase> getSlicesMap() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getSlicesMap();
    }
    
    /**
     * Gets the value of the SprayPainting field.
     * Spray Painting
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSprayPainting() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPRAYPAINTING_PROP.get());
    }
    
    /**
     * Gets the value of the StatRecord field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7StatRecord getStatRecord() {
      return (entity.GL7StatRecord)__getInternalInterface().getFieldValue(STATRECORD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getStatRecordID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(STATRECORD_PROP.get());
    }
    
    /**
     * 
     * @return the Jurisdiction of the delegating entity
     */
    public typekey.Jurisdiction getState() {
      return ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).getState();
    }
    
    /**
     * Gets the value of the StopGapIncrdLimitFactorOverride field.
     * Stop Gap Increased Limits Factor Override
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getStopGapIncrdLimitFactorOverride() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(STOPGAPINCRDLIMITFACTOROVERRIDE_PROP.get());
    }
    
    /**
     * Gets the value of the TerrorismExposureClassesOther field.
     * Terrorism Exposure Classes Other
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTerrorismExposureClassesOther() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRORISMEXPOSURECLASSESOTHER_PROP.get());
    }
    
    /**
     * Gets the value of the TerrorismExposureClassesPremises field.
     * Terrorism Exposure Classes Premises/Operations
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTerrorismExposureClassesPremises() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRORISMEXPOSURECLASSESPREMISES_PROP.get());
    }
    
    /**
     * Gets the value of the TerrorismExposureClassesProducts field.
     * Terrorism Exposure Classes Products/Completed Operations
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTerrorismExposureClassesProducts() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRORISMEXPOSURECLASSESPRODUCTS_PROP.get());
    }
    
    /**
     * Gets the value of the TotalCostWorkTrainsOrOtherRREquipmtAssigned field.
     * Cost of Work Trains or Other Railroad Equipment Assigned
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getTotalCostWorkTrainsOrOtherRREquipmtAssigned() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(TOTALCOSTWORKTRAINSOROTHERRREQUIPMTASSIGNED_PROP.get());
    }
    
    public java.util.Date getTraversalDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getTraversalDate();
    }
    
    /**
     * Gets the value of the USTClassCode field.
     * Class Code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUSTClassCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USTCLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the USTClassDescription field.
     * Class Description
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUSTClassDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USTCLASSDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the USTExposure field.
     * Exposure
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getUSTExposure() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(USTEXPOSURE_PROP.get());
    }
    
    /**
     * Gets the value of the USTPremiumBasis field.
     * Premium Basis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUSTPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USTPREMIUMBASIS_PROP.get());
    }
    
    /**
     * Gets the value of the UnmannedAircraftAutoNumberSeq field.
     * Sequence to autonumber GL7UnmannedAircraft coverables
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AutoNumberSequence getUnmannedAircraftAutoNumberSeq() {
      return (entity.AutoNumberSequence)__getInternalInterface().getFieldValue(UNMANNEDAIRCRAFTAUTONUMBERSEQ_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUnmannedAircraftAutoNumberSeqID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UNMANNEDAIRCRAFTAUTONUMBERSEQ_PROP.get());
    }
    
    /**
     * Gets the value of the UnmannedAircrafts field.
     * Covered UnmannedAircraft
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7UnmannedAircraft[] getUnmannedAircrafts() {
      return (entity.GL7UnmannedAircraft[])__getInternalInterface().getFieldValue(UNMANNEDAIRCRAFTS_PROP.get());
    }
    
    /**
     * Return the unsliced version of this bean. If the bean is already unsliced
     * then returns itself.
     * @return An unsliced version of this bean. If the bean is already unsliced
     *         then returns itself.
     */
    public entity.EffDated getUnslicedUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    /**
     * Get the version list for this bean. An EffDatedVersionList is a
     * representation of a logical bean through its effective range. For example,
     * if a bean has changes at three separate effective dates then the version
     * list will comprise 3 versions of the bean, one for each of these dates.
     * <p/>
     * You can use an EffDatedVersionList to traverse from this bean to other
     * linked beans in window mode. Recall that in window mode you cannot traverse
     * links directly from the bean.
     * <p/>
     * Although an EffDatedBranch only has a single version throughout its
     * effective range you can still get its EffDatedVersionList in order to
     * navigate in window mode from the branch to its related EffDateds.
     * @return Version list for this bean
     */
    public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
    }
    
    /**
     * 
     * @param conditionPattern the pattern of the condition to check on this coverable
     * @return true if condition of the given <code>conditionPattern</code>
     * exists on this Coverable; false otherwise.
     */
    public boolean hasCondition(gw.api.productmodel.ConditionPattern conditionPattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCondition(conditionPattern);
    }
    
    /**
     * 
     * @param coveragePattern the pattern of the coverage to check
     * @return true if coverage of the given <code>coveragePattern</code>
     * exists on this Coverable; false otherwise.
     */
    public boolean hasCoverage(gw.api.productmodel.CoveragePattern coveragePattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCoverage(coveragePattern);
    }
    
    /**
     * 
     * @param pattern the pattern of the clause to check on this coverable
     * @return true if coverage, condition, or exclusion of the given <code>pattern</code>
     * exists on this Coverable; false otherwise.
     */
    public boolean hasCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasCoverageConditionOrExclusion(pattern);
    }
    
    /**
     * 
     * @param exclusionPattern the pattern of the exclusion to check on this coverable
     * @return true if exclusion of the given <code>exclusionPattern</code>
     * exists on this Coverable; false otherwise.
     */
    public boolean hasExclusion(gw.api.productmodel.ExclusionPattern exclusionPattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).hasExclusion(exclusionPattern);
    }
    
    public boolean hasFutureVersions() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).hasFutureVersions();
    }
    
    public boolean hasMergeBase() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).hasMergeBase();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    public boolean isAutoSplit() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isAutoSplit();
    }
    
    public boolean isBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isBasedOn();
    }
    
    /**
     * Determines whether the given condition pattern is available for this coverable. This will be
     * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
     * the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param conditionPattern The condition pattern whose availability should be checked for this Coverable.
     * @return true if the pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isConditionAvailable(gw.api.productmodel.ConditionPattern conditionPattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isConditionAvailable(conditionPattern);
    }
    
    /**
     * Determines whether the given covterm pattern is available for this coverable. This assumes that the covterm's
     * clause pattern is available and will be true if one of the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param pattern The covterm pattern whose availability should be checked for this Coverable.
     * @return true if pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isCovTermAvailable(gw.api.productmodel.CovTermPattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCovTermAvailable(pattern);
    }
    
    /**
     * Determines whether the given coverage pattern is available for this coverable. This will be
     * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
     * the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param pattern The coverage pattern whose availability should be checked for this Coverable.
     * @return true
     *         if pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isCoverageAvailable(gw.api.productmodel.CoveragePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCoverageAvailable(pattern);
    }
    
    /**
     * Determines whether the given coverage, condition, or exclusion pattern is available for this coverable. This will be
     * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
     * the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param pattern The coverage, condition, or exclusion pattern whose availability should be checked for this Coverable.
     * @return true if the pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isCoverageConditionOrExclusionAvailable(gw.api.productmodel.ClausePattern pattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isCoverageConditionOrExclusionAvailable(pattern);
    }
    
    /**
     * Given a date, check whether it falls within this bean's effective window.
     * @param effDate Date to check
     * @return True if date is within this bean's effective window.
     */
    public boolean isEffective(java.util.Date effDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
    }
    
    /**
     * Determines whether the given exclusion pattern is available for this coverable. This will be
     * true only if the coverable type is a subtype of the pattern's owning entity type, and one of
     * the following two cases holds:
     * <p/>
     * <ol>
     * <li>The pattern is available according to both its lookup table and script (if any).
     * <li>The pattern exists in the previous version of the period, and its state is grandfathered.
     * </ol>
     * @param exclusionPattern The exclusion pattern whose availability should be checked for this Coverable.
     * @return true if the pattern is available for this coverable; false otherwise
     */
    public java.lang.Boolean isExclusionAvailable(gw.api.productmodel.ExclusionPattern exclusionPattern) {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).isExclusionAvailable(exclusionPattern);
    }
    
    /**
     * Returns true if the given field has been modified relative to the based-on
     * bean and false if this bean has no based-on or if the field has the same
     * value as for the based-on bean.  This method only works with non-array
     * fields.
     * @param field the name of the property to check for changes, which must
     *              correspond to a database column (i.e. it can't be an array or
     *              a synthetic property)
     * @return true if the field has a different value for the based-on bean,
     *         false otherwise
     */
    public boolean isFieldChangedFromBasedOn(java.lang.String field) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
    }
    
    /**
     * Gets the value of the InitialConditionsCreated field.
     * Whether or not the initial set of conditions has been created on this Coverable.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInitialConditionsCreated() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALCONDITIONSCREATED_PROP.get());
    }
    
    /**
     * Gets the value of the InitialCoveragesCreated field.
     * Whether or not the initial set of coverages has been created on this Coverable.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInitialCoveragesCreated() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALCOVERAGESCREATED_PROP.get());
    }
    
    /**
     * Gets the value of the InitialExclusionsCreated field.
     * Whether or not the initial set of exclusions has been created on this Coverable.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInitialExclusionsCreated() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INITIALEXCLUSIONSCREATED_PROP.get());
    }
    
    public java.lang.Boolean isLocked() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isLocked();
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    /**
     * Check if this bean or branch has been promoted. A promoted bean is also
     * locked and cannot be changed.
     * <p/>
     * An EffDated is never promoted independent of its related
     * EffDatedBranch, meaning if the branch is promoted every bean in the graph
     * will be promoted, and if the branch is not promoted no bean in the graph
     * can be promoted.
     * @return True if promoted.
     */
    public boolean isPromoted() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
    }
    
    /**
     * Whether this bean is sliced. If a bean is sliced then you can navigate from
     * this bean to another bean or beans via a link or array, if it's unsliced
     * (in "window" mode) you cannot navigate from this bean.
     * <p/>
     * In most cases a bean will be sliced, window mode is used in special cases.
     * @return 
     */
    public boolean isSlice() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
    }
    
    public boolean isSliceAddedBeforeBasedOn() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isSliceAddedBeforeBasedOn();
    }
    
    public boolean isSliceChange() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isSliceChange();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public boolean isTerminated() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isTerminated();
    }
    
    public boolean isZeroWidth() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).isZeroWidth();
    }
    
    public com.guidewire.pl.system.expression.SymbolSet makeAvailabilitySymbolSet() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).makeAvailabilitySymbolSet();
    }
    
    public com.guidewire.pl.system.expression.SymbolSet makeExistenceSymbolSet() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).makeExistenceSymbolSet();
    }
    
    public com.guidewire.pl.system.expression.SymbolSet makeModifiableAvailabilitySymbolSet() {
      return ((com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods")).makeModifiableAvailabilitySymbolSet();
    }
    
    public void markAsMerged() {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).markAsMerged();
    }
    
    public void mergeForwardFieldValue(gw.lang.reflect.IPropertyInfo property, java.lang.Object newValue) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).mergeForwardFieldValue(property, newValue);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    /**
     * Executes custom logic after modifiers are updated on the Modifiable.
     */
    public void postUpdateModifiers() {
      ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).postUpdateModifiers();
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    /**
     * Removes the given <code>condition</code> from the delegator's policy conditions.
     * @param condition the Condition to remove from the delegator's policy conditions
     */
    public void removeCondition(entity.PolicyCondition condition) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).removeCondition(condition);
    }
    
    public void removeCondition(gw.api.productmodel.ConditionPattern pattern) {
      ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).removeCondition(pattern);
    }
    
    /**
     * Removes the given <code>condition</code> from this Coverable
     * @param policyCondition the condition to remove
     */
    public void removeConditionFromCoverable(entity.PolicyCondition policyCondition) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeConditionFromCoverable(policyCondition);
    }
    
    /**
     * Removes the given <code>coverage</code> from the delegator's coverages
     * @param coverage the Coverage to remove from the delegator's coverages
     */
    public void removeCoverage(entity.Coverage coverage) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).removeCoverage(coverage);
    }
    
    public void removeCoverage(gw.api.productmodel.CoveragePattern pattern) {
      ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).removeCoverage(pattern);
    }
    
    public void removeCoverageConditionOrExclusion(gw.api.productmodel.ClausePattern pattern) {
      ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).removeCoverageConditionOrExclusion(pattern);
    }
    
    /**
     * Removes the given coverage, condition, or exclusion from this Coverable
     * @param coverageConditionOrExclusion the clause to remove
     */
    public void removeCoverageConditionOrExclusionFromCoverable(entity.Clause coverageConditionOrExclusion) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeCoverageConditionOrExclusionFromCoverable(coverageConditionOrExclusion);
    }
    
    /**
     * Removes the given <code>coverage</code> from this Coverable
     * @param coverage the coverage to remove
     */
    public void removeCoverageFromCoverable(entity.Coverage coverage) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeCoverageFromCoverable(coverage);
    }
    
    /**
     * Removes the given <code>exclusion</code> from the delegator's exclusions.
     * @param exclusion the Exclusion to remove from the delegator's exclusions
     */
    public void removeExclusion(entity.Exclusion exclusion) {
      ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).removeExclusion(exclusion);
    }
    
    public void removeExclusion(gw.api.productmodel.ExclusionPattern pattern) {
      ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).removeExclusion(pattern);
    }
    
    /**
     * Removes the given <code>exclusion</code> from this Coverable
     * @param exclusion the exclusion to remove
     */
    public void removeExclusionFromCoverable(entity.Exclusion exclusion) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).removeExclusionFromCoverable(exclusion);
    }
    
    /**
     * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
     */
    public void removeFromConditions(entity.GL7ExposureCond element) {
      __getInternalInterface().removeArrayElement(CONDITIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromConditions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(CONDITIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
     */
    public void removeFromCoverages(entity.GL7ExposureCov element) {
      __getInternalInterface().removeArrayElement(COVERAGES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCoverages(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(COVERAGES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
     */
    public void removeFromExclusions(entity.GL7ExposureExcl element) {
      __getInternalInterface().removeArrayElement(EXCLUSIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromExclusions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(EXCLUSIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the GL7ExposureMods array. This is achieved by marking the element for removal.
     */
    public void removeFromGL7ExposureMods(entity.GL7ExposureMod element) {
      __getInternalInterface().removeArrayElement(GL7EXPOSUREMODS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the GL7ExposureMods array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromGL7ExposureMods(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(GL7EXPOSUREMODS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given Modifier from the Modifiable.
     * @param element 
     */
    public void removeFromModifiers(entity.Modifier element) {
      ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).removeFromModifiers(element);
    }
    
    /**
     * Removes the given element from the UnmannedAircrafts array. This is achieved by marking the element for removal.
     */
    public void removeFromUnmannedAircrafts(entity.GL7UnmannedAircraft element) {
      __getInternalInterface().removeArrayElement(UNMANNEDAIRCRAFTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the UnmannedAircrafts array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromUnmannedAircrafts(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(UNMANNEDAIRCRAFTS_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditedExposure field.
     */
    public void setAuditedExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(AUDITEDEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditedProdsCompltdOpsExposure field.
     */
    public void setAuditedProdsCompltdOpsExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(AUDITEDPRODSCOMPLTDOPSEXPOSURE_PROP.get(), value);
    }
    
    public void setBasedOnId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setBasedOnId(id);
    }
    
    /**
     * Sets the value of the BasedOnValue field.
     */
    public void setBasedOnValue(entity.GL7Exposure value) {
      __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    public void setBasedOnValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BASEDONVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BranchValue field.
     */
    public void setBranchValue(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
    }
    
    public void setBranchValueID(gw.pl.persistence.core.Key value) {
      setFieldValue(BRANCHVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChangeType field.
     */
    public void setChangeType(typekey.EffDatedChangeType value) {
      __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClassCode field.
     */
    public void setClassCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLASSCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClassDescription field.
     */
    public void setClassDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLASSDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClassificationType field.
     */
    public void setClassificationType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLASSIFICATIONTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClimbingFacilityOperator field.
     */
    public void setClimbingFacilityOperator(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLIMBINGFACILITYOPERATOR_PROP.get(), value);
    }
    
    /**
     * <p>Adds or removes a condition with the given condition pattern.
     * <p/>
     * <p>If <code>exist</code> is <code>true</code>, adds an instance of the condition of
     * type <code>pattern</code> to this Coverable if the condition does not already exist
     * on it; does nothing if condition already exists.
     * <p/>
     * <p>If <code>exist</code> is <code>false</code>, removes the condition of type
     * <code>pattern</code> from this Coverable if such a condition exists on it; does
     * nothing otherwise.
     * @param pattern determines which condition to add or remove
     * @param exist If true, adds a condition. If false, removes the condition.
     */
    public void setConditionExists(gw.api.productmodel.ConditionPattern pattern, java.lang.Boolean exist) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setConditionExists(pattern, exist);
    }
    
    /**
     * Sets the value of the Conditions field.
     */
    public void setConditions(entity.GL7ExposureCond[] value) {
      __getInternalInterface().setFieldValue(CONDITIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Contractor field.
     */
    public void setContractor(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONTRACTOR_PROP.get(), value);
    }
    
    /**
     * <p>Adds or removes a coverage, condition, or exclusion with the given pattern.
     * <p/>
     * <p>If <code>exist</code> is <code>true</code>, adds an instance of the coverage, condition, or exclusion of
     * type <code>pattern</code> to this Coverable if it does not already exist
     * on it; does nothing if it already exists.
     * <p/>
     * <p>If <code>exist</code> is <code>false</code>, removes the coverage, condition, or exclusion of type
     * <code>pattern</code> from this Coverable if it exists on it; does
     * nothing otherwise.
     * @param pattern determines which coverage, condition, or exclusion to add or remove
     * @param exist If true, adds a coverage, condition, or exclusion. If false, removes it.
     */
    public void setCoverageConditionOrExclusionExists(gw.api.productmodel.ClausePattern pattern, java.lang.Boolean exist) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setCoverageConditionOrExclusionExists(pattern, exist);
    }
    
    /**
     * <p>Adds or removes a coverage with the given coverage pattern.
     * <p/>
     * <p>If <code>exist</code> is <code>true</code>, adds an instance of the coverage of
     * type <code>pattern</code> to this Coverable if the coverage does not already exist
     * on it; does nothing if coverage already exists.
     * <p/>
     * <p>If <code>exist</code> is <code>false</code>, removes the coverage of type
     * <code>pattern</code> from this Coverable if such a coverage exists on it; does
     * nothing otherwise.
     * @param pattern determines which coverage to add or remove
     * @param exist If true, adds a coverage. If false, removes the coverage.
     */
    public void setCoverageExists(gw.api.productmodel.CoveragePattern pattern, java.lang.Boolean exist) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setCoverageExists(pattern, exist);
    }
    
    /**
     * Sets the value of the Coverages field.
     */
    public void setCoverages(entity.GL7ExposureCov[] value) {
      __getInternalInterface().setFieldValue(COVERAGES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EDLClassCode field.
     */
    public void setEDLClassCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EDLCLASSCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EDLClassDescription field.
     */
    public void setEDLClassDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EDLCLASSDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EDLExposure field.
     */
    public void setEDLExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(EDLEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EDLPremiumRatingBase field.
     */
    public void setEDLPremiumRatingBase(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EDLPREMIUMRATINGBASE_PROP.get(), value);
    }
    
    /**
     * Change when the effective date of this bean. You cannot change the
     * effective date when in slice mode. In window mode there are no
     * restrictions.
     * <p/>
     * The effective date must be non-null. It must also come on or before the
     * expiration date and within the period range of its branch.
     * @param effDate New effective date
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setEffectiveDate(java.util.Date effDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
    }
    
    public void setEffectiveDateInternal(java.util.Date newEff) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveDateInternal(newEff);
    }
    
    public void setEffectiveWindow(com.guidewire.pl.system.util.DateRange oldEffRange, java.util.Date newEff, java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveWindow(oldEffRange, newEff, newExp);
    }
    
    /**
     * Change the effective and expiration dates together. This can only be called
     * in window mode. Both dates must be non-null. The effective date must be
     * before or equal to the expiration date. Both dates must be within the
     * period range of its branch.
     * @param effDate New effective date
     * @param expDate New expiration date
     */
    public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
    }
    
    public void setEffectiveWindowInternal(java.util.Date newEff, java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setEffectiveWindowInternal(newEff, newExp);
    }
    
    /**
     * Sets the value of the EstdContractCostWORRHzd field.
     */
    public void setEstdContractCostWORRHzd(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(ESTDCONTRACTCOSTWORRHZD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EstimatedContractCostRatio field.
     */
    public void setEstimatedContractCostRatio(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(ESTIMATEDCONTRACTCOSTRATIO_PROP.get(), value);
    }
    
    /**
     * <p>Adds or removes a exclusion with the given exclusion pattern.
     * <p/>
     * <p>If <code>exist</code> is <code>true</code>, adds an instance of the exclusion of
     * type <code>pattern</code> to this Coverable if the exclusion does not already exist
     * on it; does nothing if exclusion already exists.
     * <p/>
     * <p>If <code>exist</code> is <code>false</code>, removes the exclusion of type
     * <code>pattern</code> from this Coverable if such a exclusion exists on it; does
     * nothing otherwise.
     * @param pattern determines which exclusion to add or remove
     * @param exist If true, adds a exclusion. If false, removes the exclusion.
     */
    public void setExclusionExists(gw.api.productmodel.ExclusionPattern pattern, java.lang.Boolean exist) {
      ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).setExclusionExists(pattern, exist);
    }
    
    /**
     * Sets the value of the Exclusions field.
     */
    public void setExclusions(entity.GL7ExposureExcl[] value) {
      __getInternalInterface().setFieldValue(EXCLUSIONS_PROP.get(), value);
    }
    
    /**
     * Change when the expiration date of this bean. You cannot change the
     * expiration date when in slice mode UNLESS the bean is new to its branch and
     * you're not setting the expiration date to the effective date (zero width).
     * In window mode there are no restrictions.
     * <p/>
     * The expiration date must be non-null. It must also come on or after the
     * effective date and within the period range of its branch.
     * @param expDate New expiration date
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setExpirationDate(java.util.Date expDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
    }
    
    public void setExpirationDateInternal(java.util.Date newExp) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setExpirationDateInternal(newExp);
    }
    
    /**
     * Sets the value of the FieldAvailabilities field.
     */
    public void setFieldAvailabilities(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIELDAVAILABILITIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fixed field.
     */
    public void setFixed(entity.GL7Exposure value) {
      __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
    }
    
    public void setFixedID(gw.pl.persistence.core.Key value) {
      setFieldValue(FIXED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FrozenSet field.
     */
    public void setFrozenSet(entity.FrozenSet value) {
      __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    public void setFrozenSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GL7ExposureMods field.
     */
    public void setGL7ExposureMods(entity.GL7ExposureMod[] value) {
      __getInternalInterface().setFieldValue(GL7EXPOSUREMODS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GL7Location field.
     */
    public void setGL7Location(entity.GL7Location value) {
      __getInternalInterface().setFieldValue(GL7LOCATION_PROP.get(), value);
    }
    
    public void setGL7LocationID(gw.pl.persistence.core.Key value) {
      setFieldValue(GL7LOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IfAnyBasis field.
     */
    public void setIfAnyBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(IFANYBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IfAnyBasisProdsCompldOps field.
     */
    public void setIfAnyBasisProdsCompldOps(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(IFANYBASISPRODSCOMPLDOPS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InitialConditionsCreated field.
     */
    public void setInitialConditionsCreated(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INITIALCONDITIONSCREATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InitialCoveragesCreated field.
     */
    public void setInitialCoveragesCreated(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INITIALCOVERAGESCREATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InitialExclusionsCreated field.
     */
    public void setInitialExclusionsCreated(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INITIALEXCLUSIONSCREATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InjurySuprvsrInspctrsOtherEmpsCov field.
     */
    public void setInjurySuprvsrInspctrsOtherEmpsCov(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(INJURYSUPRVSRINSPCTRSOTHEREMPSCOV_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LimitedCovForPersonalAndAdvertisingInjury field.
     */
    public void setLimitedCovForPersonalAndAdvertisingInjury(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LIMITEDCOVFORPERSONALANDADVERTISINGINJURY_PROP.get(), value);
    }
    
    /**
     * Set a foreign key by passing in an EFfDatedKey (effectively the
     * EffDatedVersionList or FixedId of the bean). You need this method because
     * it's the only way to set a foreign key given a FixedId (and no context for
     * when that FixeId might be effective).
     * <p/>
     * This bean can be unsliced or sliced when this is called.
     * @param link Effective dated foreign key to set
     * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
     *             FixedId of the bean)
     */
    public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
      ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
    }
    
    /**
     * Sets the value of the LiquorClassCode field.
     */
    public void setLiquorClassCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LIQUORCLASSCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LiquorClassDescription field.
     */
    public void setLiquorClassDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LIQUORCLASSDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LiquorDedFactorOverride field.
     */
    public void setLiquorDedFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(LIQUORDEDFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LiquorDeductible field.
     */
    public void setLiquorDeductible(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LIQUORDEDUCTIBLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LiquorELPOverride field.
     */
    public void setLiquorELPOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(LIQUORELPOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LiquorExposure field.
     */
    public void setLiquorExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LIQUOREXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LiquorExposureOnPremises field.
     */
    public void setLiquorExposureOnPremises(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LIQUOREXPOSUREONPREMISES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LiquorPremiumBasis field.
     */
    public void setLiquorPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LIQUORPREMIUMBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LmtdProdsWithdrawalDeductibleFactorOverride field.
     */
    public void setLmtdProdsWithdrawalDeductibleFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(LMTDPRODSWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
    }
    
    public void setMaster(entity.EffDatedBase master) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setMaster(master);
    }
    
    /**
     * Sets the value of the MedPayCovForStud field.
     */
    public void setMedPayCovForStud(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MEDPAYCOVFORSTUD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MiscIfAnyBasis field.
     */
    public void setMiscIfAnyBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MISCIFANYBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MunicipalityOperatesAFireDepartment field.
     */
    public void setMunicipalityOperatesAFireDepartment(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MUNICIPALITYOPERATESAFIREDEPARTMENT_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the NumPassgrFreightTrains field.
     */
    public void setNumPassgrFreightTrains(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NUMPASSGRFREIGHTTRAINS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OtherThanProdsCompldOpsCov field.
     */
    public void setOtherThanProdsCompldOpsCov(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OTHERTHANPRODSCOMPLDOPSCOV_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OwnersContractorsClassCode field.
     */
    public void setOwnersContractorsClassCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OWNERSCONTRACTORSCLASSCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OwnersContractorsClassDescription field.
     */
    public void setOwnersContractorsClassDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OWNERSCONTRACTORSCLASSDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OwnersContractorsELPOverOneMillionOverride field.
     */
    public void setOwnersContractorsELPOverOneMillionOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(OWNERSCONTRACTORSELPOVERONEMILLIONOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OwnersContractorsELPOverride field.
     */
    public void setOwnersContractorsELPOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(OWNERSCONTRACTORSELPOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OwnersContractorsExposure field.
     */
    public void setOwnersContractorsExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(OWNERSCONTRACTORSEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OwnersContractorsPremiumBasis field.
     */
    public void setOwnersContractorsPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OWNERSCONTRACTORSPREMIUMBASIS_PROP.get(), value);
    }
    
    public void setPeriodWindow(com.guidewire.pl.system.util.DateRange oldPeriodRange) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setPeriodWindow(oldPeriodRange);
    }
    
    /**
     * Sets the value of the PollutionClassCode field.
     */
    public void setPollutionClassCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLLUTIONCLASSCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PollutionClassDescription field.
     */
    public void setPollutionClassDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLLUTIONCLASSDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PollutionExposure field.
     */
    public void setPollutionExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(POLLUTIONEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PollutionPremiumBasis field.
     */
    public void setPollutionPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLLUTIONPREMIUMBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreferredCoverageCurrency field.
     */
    public void setPreferredCoverageCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsBIDeductible field.
     */
    public void setPremOpsBIDeductible(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PREMOPSBIDEDUCTIBLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsBIDeductibleFactorOverride field.
     */
    public void setPremOpsBIDeductibleFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PREMOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsBIPDDeductible field.
     */
    public void setPremOpsBIPDDeductible(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PREMOPSBIPDDEDUCTIBLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsBIPDDeductibleFactorOverride field.
     */
    public void setPremOpsBIPDDeductibleFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PREMOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsELPOverride field.
     */
    public void setPremOpsELPOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PREMOPSELPOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsExposure field.
     */
    public void setPremOpsExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(PREMOPSEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsIncrdLimitTableAssignment field.
     */
    public void setPremOpsIncrdLimitTableAssignment(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PREMOPSINCRDLIMITTABLEASSIGNMENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsIncrdLimitTableAssignmentOverride field.
     */
    public void setPremOpsIncrdLimitTableAssignmentOverride(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PREMOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsPDDeductible field.
     */
    public void setPremOpsPDDeductible(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PREMOPSPDDEDUCTIBLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsPDDeductibleFactorOverride field.
     */
    public void setPremOpsPDDeductibleFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PREMOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremOpsPremiumBasis field.
     */
    public void setPremOpsPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PREMOPSPREMIUMBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsBIDeductible field.
     */
    public void setProdsCompldOpsBIDeductible(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSBIDEDUCTIBLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsBIDeductibleFactorOverride field.
     */
    public void setProdsCompldOpsBIDeductibleFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRODSCOMPLDOPSBIDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsBIPDDeductible field.
     */
    public void setProdsCompldOpsBIPDDeductible(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSBIPDDEDUCTIBLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsBIPDDeductibleFactorOverride field.
     */
    public void setProdsCompldOpsBIPDDeductibleFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRODSCOMPLDOPSBIPDDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsCov field.
     */
    public void setProdsCompldOpsCov(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSCOV_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsELPOverride field.
     */
    public void setProdsCompldOpsELPOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRODSCOMPLDOPSELPOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsExposure field.
     */
    public void setProdsCompldOpsExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(PRODSCOMPLDOPSEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsIncrdLimitTableAssignment field.
     */
    public void setProdsCompldOpsIncrdLimitTableAssignment(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsIncrdLimitTableAssignmentOverride field.
     */
    public void setProdsCompldOpsIncrdLimitTableAssignmentOverride(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsLossCost field.
     */
    public void setProdsCompldOpsLossCost(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRODSCOMPLDOPSLOSSCOST_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsPDDeductible field.
     */
    public void setProdsCompldOpsPDDeductible(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSPDDEDUCTIBLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsPDDeductibleFactorOverride field.
     */
    public void setProdsCompldOpsPDDeductibleFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRODSCOMPLDOPSPDDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProdsCompldOpsPremiumBasis field.
     */
    public void setProdsCompldOpsPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODSCOMPLDOPSPREMIUMBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductCoverage field.
     */
    public void setProductCoverage(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTCOVERAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalCoverage field.
     */
    public void setProductWithdrawalCoverage(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALCOVERAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalDeductible field.
     */
    public void setProductWithdrawalDeductible(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALDEDUCTIBLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalDeductibleFactorOverride field.
     */
    public void setProductWithdrawalDeductibleFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRODUCTWITHDRAWALDEDUCTIBLEFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalELPOverride field.
     */
    public void setProductWithdrawalELPOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(PRODUCTWITHDRAWALELPOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment field.
     */
    public void setProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignment(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride field.
     */
    public void setProductWithdrawalExpensesAndLiabilityIncrdLimitTableAssignmentOverride(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALEXPENSESANDLIABILITYINCRDLIMITTABLEASSIGNMENTOVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalExposure field.
     */
    public void setProductWithdrawalExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(PRODUCTWITHDRAWALEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalPremiumBasis field.
     */
    public void setProductWithdrawalPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALPREMIUMBASIS_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RailroadClassCode field.
     */
    public void setRailroadClassCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RAILROADCLASSCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RailroadClassDescription field.
     */
    public void setRailroadClassDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RAILROADCLASSDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RailroadExposure field.
     */
    public void setRailroadExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RAILROADEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RailroadPremiumBasis field.
     */
    public void setRailroadPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RAILROADPREMIUMBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ReferenceDateInternal field.
     */
    public void setReferenceDateInternal(java.util.Date value) {
      __getInternalInterface().setFieldValue(REFERENCEDATEINTERNAL_PROP.get(), value);
    }
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the SprayPainting field.
     */
    public void setSprayPainting(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SPRAYPAINTING_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StatRecord field.
     */
    public void setStatRecord(entity.GL7StatRecord value) {
      __getInternalInterface().setFieldValue(STATRECORD_PROP.get(), value);
    }
    
    public void setStatRecordID(gw.pl.persistence.core.Key value) {
      setFieldValue(STATRECORD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StopGapIncrdLimitFactorOverride field.
     */
    public void setStopGapIncrdLimitFactorOverride(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(STOPGAPINCRDLIMITFACTOROVERRIDE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TerrorismExposureClassesOther field.
     */
    public void setTerrorismExposureClassesOther(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TERRORISMEXPOSURECLASSESOTHER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TerrorismExposureClassesPremises field.
     */
    public void setTerrorismExposureClassesPremises(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TERRORISMEXPOSURECLASSESPREMISES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TerrorismExposureClassesProducts field.
     */
    public void setTerrorismExposureClassesProducts(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TERRORISMEXPOSURECLASSESPRODUCTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalCostWorkTrainsOrOtherRREquipmtAssigned field.
     */
    public void setTotalCostWorkTrainsOrOtherRREquipmtAssigned(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(TOTALCOSTWORKTRAINSOROTHERRREQUIPMTASSIGNED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the USTClassCode field.
     */
    public void setUSTClassCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(USTCLASSCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the USTClassDescription field.
     */
    public void setUSTClassDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(USTCLASSDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the USTExposure field.
     */
    public void setUSTExposure(java.lang.Long value) {
      __getInternalInterface().setFieldValue(USTEXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the USTPremiumBasis field.
     */
    public void setUSTPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(USTPREMIUMBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UnmannedAircraftAutoNumberSeq field.
     */
    public void setUnmannedAircraftAutoNumberSeq(entity.AutoNumberSequence value) {
      __getInternalInterface().setFieldValue(UNMANNEDAIRCRAFTAUTONUMBERSEQ_PROP.get(), value);
    }
    
    public void setUnmannedAircraftAutoNumberSeqID(gw.pl.persistence.core.Key value) {
      setFieldValue(UNMANNEDAIRCRAFTAUTONUMBERSEQ_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UnmannedAircrafts field.
     */
    public void setUnmannedAircrafts(entity.GL7UnmannedAircraft[] value) {
      __getInternalInterface().setFieldValue(UNMANNEDAIRCRAFTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Split this bean at the given date. A bean can only be split in window mode.
     * Splitting creates a new bean (and row) with the same FixedId as this bean
     * which is effective from the original effective date of this bean to the
     * split date. We then move the effective date of this bean up to the split
     * date. The result is two beans: one effective from the original effective
     * date to the split date, the other effective from the split date to the
     * original expiration date. "This" bean is the later in that range, and the
     * bean returned from calling this method is the former in that range.
     * <p/>
     * If this bean's effective date equals the split date then no split will
     * occur. The split date must be within the effective range of this bean or an
     * exception is thrown.
     * @param splitDate Date on which to split this bean.
     * @return A new bean effective from the original effective date to the split
     *         date or this bean if no split occurred (see above).
     */
    public entity.EffDated splitUntyped(java.util.Date splitDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    /**
     * Synchronizes modifiers on this Modifiable instance with the product model, adding and removing them
     * as necessary to match pattern changes and availability conditions.
     * @return a list of ProductModelSyncIssues
     */
    public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> updateModifiers() {
      return ((com.guidewire.pc.domain.policy.ModifiablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.ModifiablePublicMethods")).updateModifiers();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.coverage.CoverablePublicMethods", "com.guidewire.pc.domain.coverage.impl.CoverableImpl");
    config.put("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods", "com.guidewire.pc.domain.coverage.impl.CoverableImpl");
    config.put("com.guidewire.pc.domain.policy.ModifiablePublicMethods", "com.guidewire.pc.domain.policy.impl.ModifiableImpl");
    config.put("com.guidewire.pc.domain.policy.impl.ModifiableInternalMethods", "com.guidewire.pc.domain.policy.impl.ModifiableImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pl.system.entity.proxy.EffDatedBeanProxy");
    config.put("gw.api.domain.CoverableAbstractDomainMethods", "gw.lob.gl7.GL7ExposureCoverableAdapter");
    config.put("gw.api.domain.CoverableAdapter", "gw.lob.gl7.GL7ExposureCoverableAdapter");
    config.put("gw.api.domain.ModifiableAdapter", "gw.lob.gl7.GL7ExposureCoverableAdapter");
    config.put("gw.lob.common.LobCoverable", "gw.lob.gl7.GL7ExposureCoverable");
    config.put("gw.lob.gl7.GL7Coverable", "gw.lob.gl7.GL7ExposureCoverable");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.rating.CoverableWithRatingBasisType", "gw.lob.gl7.rating.GL7ExposureCoverableWithRatingBasisType");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.GL7Exposure.class, config);
    com.guidewire._generated.entity.GL7ExposureInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.GL7Exposure, com.guidewire._generated.entity.GL7ExposureInternal>() {
      public java.lang.Object getImplementation(entity.GL7Exposure bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.GL7ExposureInternal getInternalInterface(entity.GL7Exposure bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.GL7Exposure newEmptyInstance() {
        return new entity.GL7Exposure((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}