package entity;

/**
 * GL7StatRecord
 * Commercial statistical plan for the General Liability Line which includes statistical codes. Represents the Premium Record Layout
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GL7StatRecord.eti;GL7StatRecord.eix;GL7StatRecord.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "GL7StatRecord")
public class GL7StatRecord extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.GL7StatRecord, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.GL7StatRecord, entity.PolicyPeriod>("entity.GL7StatRecord");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDLINSD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddlInsd");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AGGENDORSEMENTLIABLIMSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AggEndorsementLiabLimStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ANNUALBASICLMTSCOPREMIUMPREMOP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AnnualBasicLmtsCoPremiumPremOp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ANNUALBASICLMTSCOPREMIUMPRODCO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AnnualBasicLmtsCoPremiumProdCo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BIDEDSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BIDedStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClassCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CovStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COVSTATCODEEBL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CovStatCodeEBL");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DRONEMODIFICATIONSSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DroneModificationsStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPACTUALEXPERIENCERATIO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPActualExperienceRatio");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPADJMTTOULTIMATELEVELOFLOSSE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPAdjmtToUltimateLevelOfLosse");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPANNUALBASICLMTSCOLOSSCOSTPR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPAnnualBasicLmtsCoLossCostPr");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPBASICLMTSCOLOSSCOSTBYSUBLIN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPBasicLmtsCoLossCostBySublin");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPBASICLMTSCOSUBJECTLOSSCOSTL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPBasicLmtsCoSubjectLossCostL");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPBASICLMTSCOSUBJECTLOSSCOSTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPBasicLmtsCoSubjectLossCostS");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPBASICLMTSCOSUBJECTLOSSCOSTT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPBasicLmtsCoSubjectLossCostT");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPCREDIBILITYFACTOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPCredibilityFactor");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPEXPECTEDEXPERIENCERATIO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPExpectedExperienceRatio");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPEXPECTEDLOSSRATIO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPExpectedLossRatio");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPEXPERIENCEMODIFICATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPExperienceModification");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPLATESTYEARDETRENDFACTORPREM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPLatestYearDetrendFactorPrem");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPLATESTYEARDETRENDFACTORPROD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPLatestYearDetrendFactorProd");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPLOSSDEVELOPMENTFACTORLATEST_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPLossDevelopmentFactorLatest");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPLOSSDEVELOPMENTFACTORSECOND_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPLossDevelopmentFactorSecond");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPLOSSDEVELOPMENTFACTORTHIRDL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPLossDevelopmentFactorThirdL");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPMATURITYLATESTYEAR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPMaturityLatestYear");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPMATURITYSECONDLATESTYEAR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPMaturitySecondLatestYear");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPMATURITYTHIRDLATESTYEAR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPMaturityThirdLatestYear");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPPOLICYADJUSTMENTFACTORBPREM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPPolicyAdjustmentFactorBPrem");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPPOLICYADJUSTMENTFACTORBPROD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPPolicyAdjustmentFactorBProd");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPPOLICYADJUSTMENTFACTORCLATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPPolicyAdjustmentFactorCLate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPPOLICYADJUSTMENTFACTORCSECO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPPolicyAdjustmentFactorCSeco");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPPOLICYADJUSTMENTFACTORCTHIR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPPolicyAdjustmentFactorCThir");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPSECONDLATESTYEARDETRENDFACT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPSecondLatestYearDetrendFact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPSUBLINEPRESENTAVGRATEPREMOP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPSublinePresentAvgRatePremOp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPSUBLINEPRESENTAVGRATEPRODCO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPSublinePresentAvgRateProdCo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPTHIRDLATESTYEARDETRENDFACTO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPThirdLatestYearDetrendFacto");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPTOTALADJMTTOULTIMATELEVELOF_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPTotalAdjmtToUltimateLevelOf");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPTOTALBASICLMTSCOSUBJECTLOSS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPTotalBasicLmtsCoSubjectLoss");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ERPTOTALINCLUDEDLOSSES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ERPTotalIncludedLosses");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EMPLBENEFITSLIABCOVCLAIMSMADE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EmplBenefitsLiabCovClaimsMade");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLRIOTCIVILCOMMOTIONMOBACTIO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExclRiotCivilCommotionMobActio");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLSALINESUBSTANCESCONTAMINAT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExclSalineSubstancesContaminat");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPENSEMODIFICATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpenseModification");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPENSEPREMIUM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpensePremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPERIENCERATINGMODIFICATIONFA_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExperienceRatingModificationFa");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPOSUREINDICATORCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExposureIndicatorCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPOSUREINDICATORSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExposureIndicatorStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPOSURESTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExposureStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HOURSOFOPERATIONSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HoursOfOperationStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LCM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LCM");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LCMSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LCMStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LEVELOFCERTIFICATIONSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LevelOfCertificationStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIABPREMIUM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LiabPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LIMSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LimStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LMTSIDENTIFIERSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LmtsIdentifierStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MANUFACTURERMODELSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ManufacturerModelStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MODTOUSE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ModToUse");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MOLDSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MoldStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPERATORYEARSOFEXPERIENCESTATC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OperatorYearsOfExperienceStatC");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OWNERSHIPOPERATIONSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OwnershipOperationStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PDDEDSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PDDedStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PACKAGEMODFACTOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PackageModFactor");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLLUTIONLIABCOVEXTENSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PollutionLiabCovExtension");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLLUTIONLIABCOVFORMDESIGNTDSI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PollutionLiabCovFormDesigntdSi");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLLUTIONLIABLMTDCOVFORMDESIGN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PollutionLiabLmtdCovFormDesign");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PREMIUMBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PremiumBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYPLACEOFOPERATIONSTATCOD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryPlaceOfOperationStatCod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALBIDEDSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalBIDedStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTWITHDRAWALPDDEDSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductWithdrawalPDDedStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RATINGIDSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RatingIDStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RATINGMODIFICATIONFACTORSTATCO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RatingModificationFactorStatCo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RISKIDSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RiskIDStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPCLASSIFICATIONPCTCONVERTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPClassificationPctConverted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPCOOPERATIONMEDICALFACILITIE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPCooperationMedicalFacilitie");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPCOOPERATIONSAFETYPROGRAMPCT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPCooperationSafetyProgramPct");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPEMPLSPCTCONVERTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPEmplsPctConverted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPEQUIPPCTCONVERTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPEquipPctConverted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPLOCATIONEXPOSUREINSIDEPREMI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPLocationExposureInsidePremi");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPLOCATIONEXPOSUREOUTSIDEPREM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPLocationExposureOutsidePrem");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPMAXCREDIT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPMaxCredit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPMAXDEBIT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPMaxDebit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPPREMISESPCTCONVERTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPPremisesPctConverted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SRPTOTALMODIFICATIONPCT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SRPTotalModificationPct");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SCHEDULERATINGMODIFICATIONFACT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ScheduleRatingModificationFact");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SPECIALCLASSIFICATIONSINCLUDIN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SpecialClassificationsIncludin");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SPECIALCLASSIFICATIONSRISKSSTA_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SpecialClassificationsRisksSta");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "State");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STATECODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StateCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STOPGAPSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StopGapStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SUBLINE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Subline");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SUBLINECODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SublineCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TERRCOVSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TerrCovStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TERRCOVUNDERLYIGPOLICYSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TerrCovUnderlyigPolicyStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TYPEOFPOLICYSTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TypeOfPolicyStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UNDERGROUNDRESOURCESEQUIPMTCOV_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UndergroundResourcesEquipmtCov");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> USAGESTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UsageStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WEIGHTOFDRONESTATCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "WeightOfDroneStatCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> Y2KCOMPURELTDOTHERELECTRPROBLM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Y2KCompuReltdOtherElectrProbLm");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.GL7StatRecordInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the given branch.
   */
  public GL7StatRecord(entity.PolicyPeriod branch)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initNewBeanInstance(this, java.util.Arrays.asList());
  }
  
  /**
   * Constructs a new <em>unsliced</em> instance of this entity in the given branch, and effective for the given date range.
   */
  public GL7StatRecord(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initUnslicedBeanInstance(this, effectiveDate, expirationDate, java.util.Arrays.asList());
  }
  
  protected GL7StatRecord(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.GL7StatRecordInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.GL7StatRecordInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public entity.GL7StatRecord clone() {
    return (entity.GL7StatRecord)__getInternalInterface().cloneUntyped();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the AddlInsd field.
   * AddlInsd
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddlInsd() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDLINSD_PROP.get());
  }
  
  /**
   * Gets the value of the AggEndorsementLiabLimStatCode field.
   * AggregateEndorsementLiabLimitStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAggEndorsementLiabLimStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AGGENDORSEMENTLIABLIMSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the AnnualBasicLmtsCoPremiumPremOp field.
   * AnnualBasicLimitsCoPremiumPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAnnualBasicLmtsCoPremiumPremOp() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ANNUALBASICLMTSCOPREMIUMPREMOP_PROP.get());
  }
  
  /**
   * Gets the value of the AnnualBasicLmtsCoPremiumProdCo field.
   * AnnualBasicLimitsCoPremiumProdCompldOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAnnualBasicLmtsCoPremiumProdCo() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ANNUALBASICLMTSCOPREMIUMPRODCO_PROP.get());
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
  
  /**
   * Gets the value of the BIDedStatCode field.
   * BIDedStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBIDedStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BIDEDSTATCODE_PROP.get());
  }
  
  public entity.GL7StatRecord getBasedOn() {
    return (entity.GL7StatRecord)__getInternalInterface().getBasedOnUntyped();
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
  public entity.GL7StatRecord getBasedOnValue() {
    return (entity.GL7StatRecord)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
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
   * ClassCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the CovStatCode field.
   * CoverageStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the CovStatCodeEBL field.
   * CoverageStatCodeEBL
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovStatCodeEBL() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVSTATCODEEBL_PROP.get());
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
   * Gets the value of the DroneModificationsStatCode field.
   * DroneModificationsStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDroneModificationsStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DRONEMODIFICATIONSSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ERPActualExperienceRatio field.
   * ERPActualExperienceRatio
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPActualExperienceRatio() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPACTUALEXPERIENCERATIO_PROP.get());
  }
  
  /**
   * Gets the value of the ERPAdjmtToUltimateLevelOfLosse field.
   * ERPAdjmtToUltimateLevelOfLossesLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPAdjmtToUltimateLevelOfLosse() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPADJMTTOULTIMATELEVELOFLOSSE_PROP.get());
  }
  
  /**
   * Gets the value of the ERPAnnualBasicLmtsCoLossCostPr field.
   * ERPAnnualBasicLimitsCoLossCostPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPAnnualBasicLmtsCoLossCostPr() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPANNUALBASICLMTSCOLOSSCOSTPR_PROP.get());
  }
  
  /**
   * Gets the value of the ERPBasicLmtsCoLossCostBySublin field.
   * ERPBasicLimitsCoLossCostBySublineLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPBasicLmtsCoLossCostBySublin() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPBASICLMTSCOLOSSCOSTBYSUBLIN_PROP.get());
  }
  
  /**
   * Gets the value of the ERPBasicLmtsCoSubjectLossCostL field.
   * ERPBasicLimitsCoSubjectLossCostLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPBasicLmtsCoSubjectLossCostL() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTL_PROP.get());
  }
  
  /**
   * Gets the value of the ERPBasicLmtsCoSubjectLossCostS field.
   * ERPBasicLimitsCoSubjectLossCostSecondLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPBasicLmtsCoSubjectLossCostS() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTS_PROP.get());
  }
  
  /**
   * Gets the value of the ERPBasicLmtsCoSubjectLossCostT field.
   * ERPBasicLimitsCoSubjectLossCostThirdLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPBasicLmtsCoSubjectLossCostT() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTT_PROP.get());
  }
  
  /**
   * Gets the value of the ERPCredibilityFactor field.
   * ERPCredibilityFactor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPCredibilityFactor() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPCREDIBILITYFACTOR_PROP.get());
  }
  
  /**
   * Gets the value of the ERPExpectedExperienceRatio field.
   * ERPExpectedExperienceRatio
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPExpectedExperienceRatio() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPEXPECTEDEXPERIENCERATIO_PROP.get());
  }
  
  /**
   * Gets the value of the ERPExpectedLossRatio field.
   * ERPExpectedLossRatio
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPExpectedLossRatio() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPEXPECTEDLOSSRATIO_PROP.get());
  }
  
  /**
   * Gets the value of the ERPExperienceModification field.
   * ERPExperienceModification
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPExperienceModification() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPEXPERIENCEMODIFICATION_PROP.get());
  }
  
  /**
   * Gets the value of the ERPLatestYearDetrendFactorPrem field.
   * ERPLatestYearDetrendFactorPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPLatestYearDetrendFactorPrem() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLATESTYEARDETRENDFACTORPREM_PROP.get());
  }
  
  /**
   * Gets the value of the ERPLatestYearDetrendFactorProd field.
   * ERPLatestYearDetrendFactorProdsCompldOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPLatestYearDetrendFactorProd() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLATESTYEARDETRENDFACTORPROD_PROP.get());
  }
  
  /**
   * Gets the value of the ERPLossDevelopmentFactorLatest field.
   * ERPLossDevelopmentFactorLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPLossDevelopmentFactorLatest() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORLATEST_PROP.get());
  }
  
  /**
   * Gets the value of the ERPLossDevelopmentFactorSecond field.
   * ERPLossDevelopmentFactorSecondLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPLossDevelopmentFactorSecond() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORSECOND_PROP.get());
  }
  
  /**
   * Gets the value of the ERPLossDevelopmentFactorThirdL field.
   * ERPLossDevelopmentFactorThirdLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPLossDevelopmentFactorThirdL() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORTHIRDL_PROP.get());
  }
  
  /**
   * Gets the value of the ERPMaturityLatestYear field.
   * ERPMaturityLatestYear
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPMaturityLatestYear() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPMATURITYLATESTYEAR_PROP.get());
  }
  
  /**
   * Gets the value of the ERPMaturitySecondLatestYear field.
   * ERPMaturitySecondLatestYear
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPMaturitySecondLatestYear() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPMATURITYSECONDLATESTYEAR_PROP.get());
  }
  
  /**
   * Gets the value of the ERPMaturityThirdLatestYear field.
   * ERPMaturityThirdLatestYear
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPMaturityThirdLatestYear() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPMATURITYTHIRDLATESTYEAR_PROP.get());
  }
  
  /**
   * Gets the value of the ERPPolicyAdjustmentFactorBPrem field.
   * ERPPolicyAdjustmentFactorBPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPPolicyAdjustmentFactorBPrem() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORBPREM_PROP.get());
  }
  
  /**
   * Gets the value of the ERPPolicyAdjustmentFactorBProd field.
   * ERPPolicyAdjustmentFactorBProdsCompldOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPPolicyAdjustmentFactorBProd() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORBPROD_PROP.get());
  }
  
  /**
   * Gets the value of the ERPPolicyAdjustmentFactorCLate field.
   * ERPPolicyAdjustmentFactorCLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPPolicyAdjustmentFactorCLate() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCLATE_PROP.get());
  }
  
  /**
   * Gets the value of the ERPPolicyAdjustmentFactorCSeco field.
   * ERPPolicyAdjustmentFactorCSecondLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPPolicyAdjustmentFactorCSeco() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCSECO_PROP.get());
  }
  
  /**
   * Gets the value of the ERPPolicyAdjustmentFactorCThir field.
   * ERPPolicyAdjustmentFactorCThirdLatestYearPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPPolicyAdjustmentFactorCThir() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCTHIR_PROP.get());
  }
  
  /**
   * Gets the value of the ERPSecondLatestYearDetrendFact field.
   * ERPSecondLatestYearDetrendFactorPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPSecondLatestYearDetrendFact() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPSECONDLATESTYEARDETRENDFACT_PROP.get());
  }
  
  /**
   * Gets the value of the ERPSublinePresentAvgRatePremOp field.
   * ERPSublinePresentAvgRatePremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPSublinePresentAvgRatePremOp() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPSUBLINEPRESENTAVGRATEPREMOP_PROP.get());
  }
  
  /**
   * Gets the value of the ERPSublinePresentAvgRateProdCo field.
   * ERPSublinePresentAvgRateProdCompldOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPSublinePresentAvgRateProdCo() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPSUBLINEPRESENTAVGRATEPRODCO_PROP.get());
  }
  
  /**
   * Gets the value of the ERPThirdLatestYearDetrendFacto field.
   * ERPThirdLatestYearDetrendFactorPremOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPThirdLatestYearDetrendFacto() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPTHIRDLATESTYEARDETRENDFACTO_PROP.get());
  }
  
  /**
   * Gets the value of the ERPTotalAdjmtToUltimateLevelOf field.
   * ERPTotalAdjmtToUltimateLevelOfLosses
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPTotalAdjmtToUltimateLevelOf() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPTOTALADJMTTOULTIMATELEVELOF_PROP.get());
  }
  
  /**
   * Gets the value of the ERPTotalBasicLmtsCoSubjectLoss field.
   * ERPTotalBasicLimitsCoSubjectLossCost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPTotalBasicLmtsCoSubjectLoss() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPTOTALBASICLMTSCOSUBJECTLOSS_PROP.get());
  }
  
  /**
   * Gets the value of the ERPTotalIncludedLosses field.
   * ERPTotalIncludedLosses
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getERPTotalIncludedLosses() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPTOTALINCLUDEDLOSSES_PROP.get());
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
   * Gets the value of the EmplBenefitsLiabCovClaimsMade field.
   * EmployeeBenefitsLiabCovClaimsMade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEmplBenefitsLiabCovClaimsMade() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EMPLBENEFITSLIABCOVCLAIMSMADE_PROP.get());
  }
  
  /**
   * Gets the value of the ExclRiotCivilCommotionMobActio field.
   * ExclRiotCivilCommotionMobActionGovtSubdivision
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExclRiotCivilCommotionMobActio() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCLRIOTCIVILCOMMOTIONMOBACTIO_PROP.get());
  }
  
  /**
   * Gets the value of the ExclSalineSubstancesContaminat field.
   * ExclSalineSubstancesContamination
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExclSalineSubstancesContaminat() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCLSALINESUBSTANCESCONTAMINAT_PROP.get());
  }
  
  /**
   * Gets the value of the ExpenseModification field.
   * ExpenseModification
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExpenseModification() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPENSEMODIFICATION_PROP.get());
  }
  
  /**
   * Gets the value of the ExpensePremium field.
   * ExpensePremium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExpensePremium() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPENSEPREMIUM_PROP.get());
  }
  
  /**
   * Gets the value of the ExperienceRatingModificationFa field.
   * ExperienceRatingModificationFactor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExperienceRatingModificationFa() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPERIENCERATINGMODIFICATIONFA_PROP.get());
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
   * Gets the value of the ExposureIndicatorCode field.
   * ExposureIndicatorCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExposureIndicatorCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPOSUREINDICATORCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ExposureIndicatorStatCode field.
   * ExposureIndicatorStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExposureIndicatorStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPOSUREINDICATORSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ExposureStatCode field.
   * ExposureStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExposureStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPOSURESTATCODE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GL7StatRecord getFixed() {
    return (entity.GL7StatRecord)__getInternalInterface().getFieldValue(FIXED_PROP.get());
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
   * Gets the value of the HoursOfOperationStatCode field.
   * HoursOfOperationStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHoursOfOperationStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HOURSOFOPERATIONSTATCODE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LCM field.
   * LCM
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLCM() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LCM_PROP.get());
  }
  
  /**
   * Gets the value of the LCMStatCode field.
   * LCMStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLCMStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LCMSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the LevelOfCertificationStatCode field.
   * LevelOfCertificationStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLevelOfCertificationStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LEVELOFCERTIFICATIONSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the LiabPremium field.
   * LiabilityPremium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLiabPremium() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIABPREMIUM_PROP.get());
  }
  
  /**
   * Gets the value of the LimStatCode field.
   * LimitStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLimStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIMSTATCODE_PROP.get());
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
   * Gets the value of the LmtsIdentifierStatCode field.
   * LimitsIdentifierStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLmtsIdentifierStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LMTSIDENTIFIERSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ManufacturerModelStatCode field.
   * ManufacturerModelStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getManufacturerModelStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MANUFACTURERMODELSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ModToUse field.
   * ModToUse
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModToUse() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MODTOUSE_PROP.get());
  }
  
  /**
   * Gets the value of the MoldStatCode field.
   * MoldStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMoldStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MOLDSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the OperatorYearsOfExperienceStatC field.
   * OperatorYearsOfExperienceStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOperatorYearsOfExperienceStatC() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPERATORYEARSOFEXPERIENCESTATC_PROP.get());
  }
  
  /**
   * Gets the value of the OwnershipOperationStatCode field.
   * OwnershipAndOperationStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwnershipOperationStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNERSHIPOPERATIONSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the PDDedStatCode field.
   * PDDedStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPDDedStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PDDEDSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the PackageModFactor field.
   * PackageModFactor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPackageModFactor() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PACKAGEMODFACTOR_PROP.get());
  }
  
  /**
   * Gets the value of the PollutionLiabCovExtension field.
   * PollutionLiabCovExtension
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionLiabCovExtension() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONLIABCOVEXTENSION_PROP.get());
  }
  
  /**
   * Gets the value of the PollutionLiabCovFormDesigntdSi field.
   * PollutionLiabCovFormDesigntdSites
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionLiabCovFormDesigntdSi() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONLIABCOVFORMDESIGNTDSI_PROP.get());
  }
  
  /**
   * Gets the value of the PollutionLiabLmtdCovFormDesign field.
   * PollutionLiabLimitedCovFormDesigntdSites
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPollutionLiabLmtdCovFormDesign() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONLIABLMTDCOVFORMDESIGN_PROP.get());
  }
  
  /**
   * Gets the value of the PremiumBasis field.
   * PremiumBasis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPremiumBasis() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMIUMBASIS_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryPlaceOfOperationStatCod field.
   * PrimaryPlaceOfOperationStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryPlaceOfOperationStatCod() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYPLACEOFOPERATIONSTATCOD_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalBIDedStatCode field.
   * ProductWithdrawalBIDedStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalBIDedStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALBIDEDSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ProductWithdrawalPDDedStatCode field.
   * ProductWithdrawalPDDedStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductWithdrawalPDDedStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALPDDEDSTATCODE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RatingIDStatCode field.
   * RatingIDStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRatingIDStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RATINGIDSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the RatingModificationFactorStatCo field.
   * RatingModificationFactorStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRatingModificationFactorStatCo() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RATINGMODIFICATIONFACTORSTATCO_PROP.get());
  }
  
  /**
   * Gets the value of the RiskIDStatCode field.
   * RiskIDStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskIDStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RISKIDSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the SRPClassificationPctConverted field.
   * SRPClassificationPctConverted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPClassificationPctConverted() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPCLASSIFICATIONPCTCONVERTED_PROP.get());
  }
  
  /**
   * Gets the value of the SRPCooperationMedicalFacilitie field.
   * SRPCooperationMedicalFacilitiesPctConverted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPCooperationMedicalFacilitie() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPCOOPERATIONMEDICALFACILITIE_PROP.get());
  }
  
  /**
   * Gets the value of the SRPCooperationSafetyProgramPct field.
   * SRPCooperationSafetyProgramPctConverted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPCooperationSafetyProgramPct() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPCOOPERATIONSAFETYPROGRAMPCT_PROP.get());
  }
  
  /**
   * Gets the value of the SRPEmplsPctConverted field.
   * SRPEmployeesPctConverted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPEmplsPctConverted() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPEMPLSPCTCONVERTED_PROP.get());
  }
  
  /**
   * Gets the value of the SRPEquipPctConverted field.
   * SRPEquipmentPctConverted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPEquipPctConverted() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPEQUIPPCTCONVERTED_PROP.get());
  }
  
  /**
   * Gets the value of the SRPLocationExposureInsidePremi field.
   * SRPLocationExposureInsidePremisesPctConverted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPLocationExposureInsidePremi() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPLOCATIONEXPOSUREINSIDEPREMI_PROP.get());
  }
  
  /**
   * Gets the value of the SRPLocationExposureOutsidePrem field.
   * SRPLocationExposureOutsidePremisesPctConverted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPLocationExposureOutsidePrem() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPLOCATIONEXPOSUREOUTSIDEPREM_PROP.get());
  }
  
  /**
   * Gets the value of the SRPMaxCredit field.
   * SRPMaximumCredit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPMaxCredit() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPMAXCREDIT_PROP.get());
  }
  
  /**
   * Gets the value of the SRPMaxDebit field.
   * SRPMaximumDebit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPMaxDebit() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPMAXDEBIT_PROP.get());
  }
  
  /**
   * Gets the value of the SRPPremisesPctConverted field.
   * SRPPremisesPctConverted
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPPremisesPctConverted() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPPREMISESPCTCONVERTED_PROP.get());
  }
  
  /**
   * Gets the value of the SRPTotalModificationPct field.
   * SRPTotalModificationPct
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSRPTotalModificationPct() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPTOTALMODIFICATIONPCT_PROP.get());
  }
  
  /**
   * Gets the value of the ScheduleRatingModificationFact field.
   * ScheduleRatingModificationFactor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getScheduleRatingModificationFact() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SCHEDULERATINGMODIFICATIONFACT_PROP.get());
  }
  
  public entity.GL7StatRecord getSlice(java.util.Date sliceDate) {
    return (entity.GL7StatRecord)getSliceUntyped(sliceDate);
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
   * Gets the value of the SpecialClassificationsIncludin field.
   * SpecialClassificationsIncludingNuclearEnergyLiability
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSpecialClassificationsIncludin() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPECIALCLASSIFICATIONSINCLUDIN_PROP.get());
  }
  
  /**
   * Gets the value of the SpecialClassificationsRisksSta field.
   * SpecialClassificationsRisksStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSpecialClassificationsRisksSta() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPECIALCLASSIFICATIONSRISKSSTA_PROP.get());
  }
  
  /**
   * Gets the value of the State field.
   * State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getState() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATE_PROP.get());
  }
  
  /**
   * Gets the value of the StateCode field.
   * StateCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStateCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATECODE_PROP.get());
  }
  
  /**
   * Gets the value of the StopGapStatCode field.
   * StopGapStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStopGapStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STOPGAPSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the Subline field.
   * Subline
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubline() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBLINE_PROP.get());
  }
  
  /**
   * Gets the value of the SublineCode field.
   * SublineCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSublineCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBLINECODE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GL7StatRecord getSubtype() {
    return (typekey.GL7StatRecord)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the TerrCovStatCode field.
   * TerrorismCovStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrCovStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRCOVSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the TerrCovUnderlyigPolicyStatCode field.
   * TerrorismCovUnderlyigPolicyStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTerrCovUnderlyigPolicyStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRCOVUNDERLYIGPOLICYSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the TypeOfPolicyStatCode field.
   * TypeOfPolicyStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeOfPolicyStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPEOFPOLICYSTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the UndergroundResourcesEquipmtCov field.
   * UndergroundResourcesAndEquipmtCov
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUndergroundResourcesEquipmtCov() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(UNDERGROUNDRESOURCESEQUIPMTCOV_PROP.get());
  }
  
  public entity.GL7StatRecord getUnsliced() {
    return (entity.GL7StatRecord)getUnslicedUntyped();
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
  
  /**
   * Gets the value of the UsageStatCode field.
   * UsageStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUsageStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USAGESTATCODE_PROP.get());
  }
  
  public entity.windowed.GL7StatRecordVersionList getVersionList() {
    return (entity.windowed.GL7StatRecordVersionList)getVersionListUntyped();
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
   * Gets the value of the WeightOfDroneStatCode field.
   * WeightOfDroneStatCode
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getWeightOfDroneStatCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(WEIGHTOFDRONESTATCODE_PROP.get());
  }
  
  /**
   * Gets the value of the Y2KCompuReltdOtherElectrProbLm field.
   * Year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOps
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getY2KCompuReltdOtherElectrProbLm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(Y2KCOMPURELTDOTHERELECTRPROBLM_PROP.get());
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
   * Sets the value of the AddlInsd field.
   */
  public void setAddlInsd(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDLINSD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AggEndorsementLiabLimStatCode field.
   */
  public void setAggEndorsementLiabLimStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(AGGENDORSEMENTLIABLIMSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AnnualBasicLmtsCoPremiumPremOp field.
   */
  public void setAnnualBasicLmtsCoPremiumPremOp(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ANNUALBASICLMTSCOPREMIUMPREMOP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AnnualBasicLmtsCoPremiumProdCo field.
   */
  public void setAnnualBasicLmtsCoPremiumProdCo(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ANNUALBASICLMTSCOPREMIUMPRODCO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BIDedStatCode field.
   */
  public void setBIDedStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BIDEDSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.GL7StatRecord value) {
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
   * Sets the value of the CovStatCode field.
   */
  public void setCovStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CovStatCodeEBL field.
   */
  public void setCovStatCodeEBL(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COVSTATCODEEBL_PROP.get(), value);
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
   * Sets the value of the DroneModificationsStatCode field.
   */
  public void setDroneModificationsStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DRONEMODIFICATIONSSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPActualExperienceRatio field.
   */
  public void setERPActualExperienceRatio(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPACTUALEXPERIENCERATIO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPAdjmtToUltimateLevelOfLosse field.
   */
  public void setERPAdjmtToUltimateLevelOfLosse(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPADJMTTOULTIMATELEVELOFLOSSE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPAnnualBasicLmtsCoLossCostPr field.
   */
  public void setERPAnnualBasicLmtsCoLossCostPr(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPANNUALBASICLMTSCOLOSSCOSTPR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPBasicLmtsCoLossCostBySublin field.
   */
  public void setERPBasicLmtsCoLossCostBySublin(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPBASICLMTSCOLOSSCOSTBYSUBLIN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPBasicLmtsCoSubjectLossCostL field.
   */
  public void setERPBasicLmtsCoSubjectLossCostL(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPBasicLmtsCoSubjectLossCostS field.
   */
  public void setERPBasicLmtsCoSubjectLossCostS(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPBasicLmtsCoSubjectLossCostT field.
   */
  public void setERPBasicLmtsCoSubjectLossCostT(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPCredibilityFactor field.
   */
  public void setERPCredibilityFactor(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPCREDIBILITYFACTOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPExpectedExperienceRatio field.
   */
  public void setERPExpectedExperienceRatio(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPEXPECTEDEXPERIENCERATIO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPExpectedLossRatio field.
   */
  public void setERPExpectedLossRatio(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPEXPECTEDLOSSRATIO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPExperienceModification field.
   */
  public void setERPExperienceModification(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPEXPERIENCEMODIFICATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPLatestYearDetrendFactorPrem field.
   */
  public void setERPLatestYearDetrendFactorPrem(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPLATESTYEARDETRENDFACTORPREM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPLatestYearDetrendFactorProd field.
   */
  public void setERPLatestYearDetrendFactorProd(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPLATESTYEARDETRENDFACTORPROD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPLossDevelopmentFactorLatest field.
   */
  public void setERPLossDevelopmentFactorLatest(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORLATEST_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPLossDevelopmentFactorSecond field.
   */
  public void setERPLossDevelopmentFactorSecond(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORSECOND_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPLossDevelopmentFactorThirdL field.
   */
  public void setERPLossDevelopmentFactorThirdL(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORTHIRDL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPMaturityLatestYear field.
   */
  public void setERPMaturityLatestYear(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPMATURITYLATESTYEAR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPMaturitySecondLatestYear field.
   */
  public void setERPMaturitySecondLatestYear(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPMATURITYSECONDLATESTYEAR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPMaturityThirdLatestYear field.
   */
  public void setERPMaturityThirdLatestYear(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPMATURITYTHIRDLATESTYEAR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPPolicyAdjustmentFactorBPrem field.
   */
  public void setERPPolicyAdjustmentFactorBPrem(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORBPREM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPPolicyAdjustmentFactorBProd field.
   */
  public void setERPPolicyAdjustmentFactorBProd(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORBPROD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPPolicyAdjustmentFactorCLate field.
   */
  public void setERPPolicyAdjustmentFactorCLate(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCLATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPPolicyAdjustmentFactorCSeco field.
   */
  public void setERPPolicyAdjustmentFactorCSeco(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCSECO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPPolicyAdjustmentFactorCThir field.
   */
  public void setERPPolicyAdjustmentFactorCThir(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCTHIR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPSecondLatestYearDetrendFact field.
   */
  public void setERPSecondLatestYearDetrendFact(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPSECONDLATESTYEARDETRENDFACT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPSublinePresentAvgRatePremOp field.
   */
  public void setERPSublinePresentAvgRatePremOp(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPSUBLINEPRESENTAVGRATEPREMOP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPSublinePresentAvgRateProdCo field.
   */
  public void setERPSublinePresentAvgRateProdCo(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPSUBLINEPRESENTAVGRATEPRODCO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPThirdLatestYearDetrendFacto field.
   */
  public void setERPThirdLatestYearDetrendFacto(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPTHIRDLATESTYEARDETRENDFACTO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPTotalAdjmtToUltimateLevelOf field.
   */
  public void setERPTotalAdjmtToUltimateLevelOf(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPTOTALADJMTTOULTIMATELEVELOF_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPTotalBasicLmtsCoSubjectLoss field.
   */
  public void setERPTotalBasicLmtsCoSubjectLoss(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPTOTALBASICLMTSCOSUBJECTLOSS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ERPTotalIncludedLosses field.
   */
  public void setERPTotalIncludedLosses(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ERPTOTALINCLUDEDLOSSES_PROP.get(), value);
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
   * Sets the value of the EmplBenefitsLiabCovClaimsMade field.
   */
  public void setEmplBenefitsLiabCovClaimsMade(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EMPLBENEFITSLIABCOVCLAIMSMADE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExclRiotCivilCommotionMobActio field.
   */
  public void setExclRiotCivilCommotionMobActio(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXCLRIOTCIVILCOMMOTIONMOBACTIO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExclSalineSubstancesContaminat field.
   */
  public void setExclSalineSubstancesContaminat(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXCLSALINESUBSTANCESCONTAMINAT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpenseModification field.
   */
  public void setExpenseModification(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXPENSEMODIFICATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpensePremium field.
   */
  public void setExpensePremium(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXPENSEPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExperienceRatingModificationFa field.
   */
  public void setExperienceRatingModificationFa(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXPERIENCERATINGMODIFICATIONFA_PROP.get(), value);
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
   * Sets the value of the ExposureIndicatorCode field.
   */
  public void setExposureIndicatorCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXPOSUREINDICATORCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExposureIndicatorStatCode field.
   */
  public void setExposureIndicatorStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXPOSUREINDICATORSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExposureStatCode field.
   */
  public void setExposureStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXPOSURESTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.GL7StatRecord value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HoursOfOperationStatCode field.
   */
  public void setHoursOfOperationStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(HOURSOFOPERATIONSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LCM field.
   */
  public void setLCM(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LCM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LCMStatCode field.
   */
  public void setLCMStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LCMSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LevelOfCertificationStatCode field.
   */
  public void setLevelOfCertificationStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LEVELOFCERTIFICATIONSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LiabPremium field.
   */
  public void setLiabPremium(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LIABPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LimStatCode field.
   */
  public void setLimStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LIMSTATCODE_PROP.get(), value);
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
   * Sets the value of the LmtsIdentifierStatCode field.
   */
  public void setLmtsIdentifierStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LMTSIDENTIFIERSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ManufacturerModelStatCode field.
   */
  public void setManufacturerModelStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MANUFACTURERMODELSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ModToUse field.
   */
  public void setModToUse(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MODTOUSE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MoldStatCode field.
   */
  public void setMoldStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MOLDSTATCODE_PROP.get(), value);
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
   * Sets the value of the OperatorYearsOfExperienceStatC field.
   */
  public void setOperatorYearsOfExperienceStatC(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OPERATORYEARSOFEXPERIENCESTATC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OwnershipOperationStatCode field.
   */
  public void setOwnershipOperationStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OWNERSHIPOPERATIONSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PDDedStatCode field.
   */
  public void setPDDedStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PDDEDSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PackageModFactor field.
   */
  public void setPackageModFactor(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PACKAGEMODFACTOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PollutionLiabCovExtension field.
   */
  public void setPollutionLiabCovExtension(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLLUTIONLIABCOVEXTENSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PollutionLiabCovFormDesigntdSi field.
   */
  public void setPollutionLiabCovFormDesigntdSi(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLLUTIONLIABCOVFORMDESIGNTDSI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PollutionLiabLmtdCovFormDesign field.
   */
  public void setPollutionLiabLmtdCovFormDesign(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLLUTIONLIABLMTDCOVFORMDESIGN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PremiumBasis field.
   */
  public void setPremiumBasis(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PREMIUMBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryPlaceOfOperationStatCod field.
   */
  public void setPrimaryPlaceOfOperationStatCod(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYPLACEOFOPERATIONSTATCOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalBIDedStatCode field.
   */
  public void setProductWithdrawalBIDedStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALBIDEDSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductWithdrawalPDDedStatCode field.
   */
  public void setProductWithdrawalPDDedStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALPDDEDSTATCODE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RatingIDStatCode field.
   */
  public void setRatingIDStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RATINGIDSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RatingModificationFactorStatCo field.
   */
  public void setRatingModificationFactorStatCo(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RATINGMODIFICATIONFACTORSTATCO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RiskIDStatCode field.
   */
  public void setRiskIDStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RISKIDSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPClassificationPctConverted field.
   */
  public void setSRPClassificationPctConverted(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPCLASSIFICATIONPCTCONVERTED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPCooperationMedicalFacilitie field.
   */
  public void setSRPCooperationMedicalFacilitie(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPCOOPERATIONMEDICALFACILITIE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPCooperationSafetyProgramPct field.
   */
  public void setSRPCooperationSafetyProgramPct(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPCOOPERATIONSAFETYPROGRAMPCT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPEmplsPctConverted field.
   */
  public void setSRPEmplsPctConverted(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPEMPLSPCTCONVERTED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPEquipPctConverted field.
   */
  public void setSRPEquipPctConverted(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPEQUIPPCTCONVERTED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPLocationExposureInsidePremi field.
   */
  public void setSRPLocationExposureInsidePremi(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPLOCATIONEXPOSUREINSIDEPREMI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPLocationExposureOutsidePrem field.
   */
  public void setSRPLocationExposureOutsidePrem(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPLOCATIONEXPOSUREOUTSIDEPREM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPMaxCredit field.
   */
  public void setSRPMaxCredit(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPMAXCREDIT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPMaxDebit field.
   */
  public void setSRPMaxDebit(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPMAXDEBIT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPPremisesPctConverted field.
   */
  public void setSRPPremisesPctConverted(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPPREMISESPCTCONVERTED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SRPTotalModificationPct field.
   */
  public void setSRPTotalModificationPct(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SRPTOTALMODIFICATIONPCT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ScheduleRatingModificationFact field.
   */
  public void setScheduleRatingModificationFact(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SCHEDULERATINGMODIFICATIONFACT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SpecialClassificationsIncludin field.
   */
  public void setSpecialClassificationsIncludin(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SPECIALCLASSIFICATIONSINCLUDIN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SpecialClassificationsRisksSta field.
   */
  public void setSpecialClassificationsRisksSta(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SPECIALCLASSIFICATIONSRISKSSTA_PROP.get(), value);
  }
  
  /**
   * Sets the value of the State field.
   */
  public void setState(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StateCode field.
   */
  public void setStateCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STATECODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StopGapStatCode field.
   */
  public void setStopGapStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STOPGAPSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subline field.
   */
  public void setSubline(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SUBLINE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SublineCode field.
   */
  public void setSublineCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SUBLINECODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.GL7StatRecord value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TerrCovStatCode field.
   */
  public void setTerrCovStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TERRCOVSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TerrCovUnderlyigPolicyStatCode field.
   */
  public void setTerrCovUnderlyigPolicyStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TERRCOVUNDERLYIGPOLICYSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TypeOfPolicyStatCode field.
   */
  public void setTypeOfPolicyStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TYPEOFPOLICYSTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UndergroundResourcesEquipmtCov field.
   */
  public void setUndergroundResourcesEquipmtCov(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(UNDERGROUNDRESOURCESEQUIPMTCOV_PROP.get(), value);
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
  
  /**
   * Sets the value of the UsageStatCode field.
   */
  public void setUsageStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(USAGESTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the WeightOfDroneStatCode field.
   */
  public void setWeightOfDroneStatCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(WEIGHTOFDRONESTATCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Y2KCompuReltdOtherElectrProbLm field.
   */
  public void setY2KCompuReltdOtherElectrProbLm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(Y2KCOMPURELTDOTHERELECTRPROBLM_PROP.get(), value);
  }
  
  public entity.GL7StatRecord split(java.util.Date splitDate) {
    return (entity.GL7StatRecord)splitUntyped(splitDate);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.GL7StatRecordInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.GL7StatRecord.this.__getDelegateManager();
    }
    
    public void addSlice(entity.EffDatedBase slice, java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).addSlice(slice, sliceDate);
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
    
    public boolean deletableInternal() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).deletableInternal();
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
     * Gets the value of the AddlInsd field.
     * AddlInsd
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddlInsd() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDLINSD_PROP.get());
    }
    
    /**
     * Gets the value of the AggEndorsementLiabLimStatCode field.
     * AggregateEndorsementLiabLimitStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAggEndorsementLiabLimStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AGGENDORSEMENTLIABLIMSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the AnnualBasicLmtsCoPremiumPremOp field.
     * AnnualBasicLimitsCoPremiumPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAnnualBasicLmtsCoPremiumPremOp() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ANNUALBASICLMTSCOPREMIUMPREMOP_PROP.get());
    }
    
    /**
     * Gets the value of the AnnualBasicLmtsCoPremiumProdCo field.
     * AnnualBasicLimitsCoPremiumProdCompldOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAnnualBasicLmtsCoPremiumProdCo() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ANNUALBASICLMTSCOPREMIUMPRODCO_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * Gets the value of the BIDedStatCode field.
     * BIDedStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBIDedStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BIDEDSTATCODE_PROP.get());
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
    public entity.GL7StatRecord getBasedOnValue() {
      return (entity.GL7StatRecord)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
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
     * ClassCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClassCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the CovStatCode field.
     * CoverageStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCovStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the CovStatCodeEBL field.
     * CoverageStatCodeEBL
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCovStatCodeEBL() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COVSTATCODEEBL_PROP.get());
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
     * Gets the value of the DroneModificationsStatCode field.
     * DroneModificationsStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDroneModificationsStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DRONEMODIFICATIONSSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ERPActualExperienceRatio field.
     * ERPActualExperienceRatio
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPActualExperienceRatio() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPACTUALEXPERIENCERATIO_PROP.get());
    }
    
    /**
     * Gets the value of the ERPAdjmtToUltimateLevelOfLosse field.
     * ERPAdjmtToUltimateLevelOfLossesLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPAdjmtToUltimateLevelOfLosse() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPADJMTTOULTIMATELEVELOFLOSSE_PROP.get());
    }
    
    /**
     * Gets the value of the ERPAnnualBasicLmtsCoLossCostPr field.
     * ERPAnnualBasicLimitsCoLossCostPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPAnnualBasicLmtsCoLossCostPr() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPANNUALBASICLMTSCOLOSSCOSTPR_PROP.get());
    }
    
    /**
     * Gets the value of the ERPBasicLmtsCoLossCostBySublin field.
     * ERPBasicLimitsCoLossCostBySublineLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPBasicLmtsCoLossCostBySublin() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPBASICLMTSCOLOSSCOSTBYSUBLIN_PROP.get());
    }
    
    /**
     * Gets the value of the ERPBasicLmtsCoSubjectLossCostL field.
     * ERPBasicLimitsCoSubjectLossCostLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPBasicLmtsCoSubjectLossCostL() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTL_PROP.get());
    }
    
    /**
     * Gets the value of the ERPBasicLmtsCoSubjectLossCostS field.
     * ERPBasicLimitsCoSubjectLossCostSecondLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPBasicLmtsCoSubjectLossCostS() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTS_PROP.get());
    }
    
    /**
     * Gets the value of the ERPBasicLmtsCoSubjectLossCostT field.
     * ERPBasicLimitsCoSubjectLossCostThirdLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPBasicLmtsCoSubjectLossCostT() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTT_PROP.get());
    }
    
    /**
     * Gets the value of the ERPCredibilityFactor field.
     * ERPCredibilityFactor
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPCredibilityFactor() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPCREDIBILITYFACTOR_PROP.get());
    }
    
    /**
     * Gets the value of the ERPExpectedExperienceRatio field.
     * ERPExpectedExperienceRatio
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPExpectedExperienceRatio() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPEXPECTEDEXPERIENCERATIO_PROP.get());
    }
    
    /**
     * Gets the value of the ERPExpectedLossRatio field.
     * ERPExpectedLossRatio
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPExpectedLossRatio() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPEXPECTEDLOSSRATIO_PROP.get());
    }
    
    /**
     * Gets the value of the ERPExperienceModification field.
     * ERPExperienceModification
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPExperienceModification() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPEXPERIENCEMODIFICATION_PROP.get());
    }
    
    /**
     * Gets the value of the ERPLatestYearDetrendFactorPrem field.
     * ERPLatestYearDetrendFactorPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPLatestYearDetrendFactorPrem() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLATESTYEARDETRENDFACTORPREM_PROP.get());
    }
    
    /**
     * Gets the value of the ERPLatestYearDetrendFactorProd field.
     * ERPLatestYearDetrendFactorProdsCompldOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPLatestYearDetrendFactorProd() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLATESTYEARDETRENDFACTORPROD_PROP.get());
    }
    
    /**
     * Gets the value of the ERPLossDevelopmentFactorLatest field.
     * ERPLossDevelopmentFactorLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPLossDevelopmentFactorLatest() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORLATEST_PROP.get());
    }
    
    /**
     * Gets the value of the ERPLossDevelopmentFactorSecond field.
     * ERPLossDevelopmentFactorSecondLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPLossDevelopmentFactorSecond() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORSECOND_PROP.get());
    }
    
    /**
     * Gets the value of the ERPLossDevelopmentFactorThirdL field.
     * ERPLossDevelopmentFactorThirdLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPLossDevelopmentFactorThirdL() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORTHIRDL_PROP.get());
    }
    
    /**
     * Gets the value of the ERPMaturityLatestYear field.
     * ERPMaturityLatestYear
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPMaturityLatestYear() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPMATURITYLATESTYEAR_PROP.get());
    }
    
    /**
     * Gets the value of the ERPMaturitySecondLatestYear field.
     * ERPMaturitySecondLatestYear
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPMaturitySecondLatestYear() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPMATURITYSECONDLATESTYEAR_PROP.get());
    }
    
    /**
     * Gets the value of the ERPMaturityThirdLatestYear field.
     * ERPMaturityThirdLatestYear
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPMaturityThirdLatestYear() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPMATURITYTHIRDLATESTYEAR_PROP.get());
    }
    
    /**
     * Gets the value of the ERPPolicyAdjustmentFactorBPrem field.
     * ERPPolicyAdjustmentFactorBPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPPolicyAdjustmentFactorBPrem() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORBPREM_PROP.get());
    }
    
    /**
     * Gets the value of the ERPPolicyAdjustmentFactorBProd field.
     * ERPPolicyAdjustmentFactorBProdsCompldOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPPolicyAdjustmentFactorBProd() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORBPROD_PROP.get());
    }
    
    /**
     * Gets the value of the ERPPolicyAdjustmentFactorCLate field.
     * ERPPolicyAdjustmentFactorCLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPPolicyAdjustmentFactorCLate() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCLATE_PROP.get());
    }
    
    /**
     * Gets the value of the ERPPolicyAdjustmentFactorCSeco field.
     * ERPPolicyAdjustmentFactorCSecondLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPPolicyAdjustmentFactorCSeco() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCSECO_PROP.get());
    }
    
    /**
     * Gets the value of the ERPPolicyAdjustmentFactorCThir field.
     * ERPPolicyAdjustmentFactorCThirdLatestYearPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPPolicyAdjustmentFactorCThir() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCTHIR_PROP.get());
    }
    
    /**
     * Gets the value of the ERPSecondLatestYearDetrendFact field.
     * ERPSecondLatestYearDetrendFactorPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPSecondLatestYearDetrendFact() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPSECONDLATESTYEARDETRENDFACT_PROP.get());
    }
    
    /**
     * Gets the value of the ERPSublinePresentAvgRatePremOp field.
     * ERPSublinePresentAvgRatePremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPSublinePresentAvgRatePremOp() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPSUBLINEPRESENTAVGRATEPREMOP_PROP.get());
    }
    
    /**
     * Gets the value of the ERPSublinePresentAvgRateProdCo field.
     * ERPSublinePresentAvgRateProdCompldOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPSublinePresentAvgRateProdCo() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPSUBLINEPRESENTAVGRATEPRODCO_PROP.get());
    }
    
    /**
     * Gets the value of the ERPThirdLatestYearDetrendFacto field.
     * ERPThirdLatestYearDetrendFactorPremOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPThirdLatestYearDetrendFacto() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPTHIRDLATESTYEARDETRENDFACTO_PROP.get());
    }
    
    /**
     * Gets the value of the ERPTotalAdjmtToUltimateLevelOf field.
     * ERPTotalAdjmtToUltimateLevelOfLosses
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPTotalAdjmtToUltimateLevelOf() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPTOTALADJMTTOULTIMATELEVELOF_PROP.get());
    }
    
    /**
     * Gets the value of the ERPTotalBasicLmtsCoSubjectLoss field.
     * ERPTotalBasicLimitsCoSubjectLossCost
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPTotalBasicLmtsCoSubjectLoss() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPTOTALBASICLMTSCOSUBJECTLOSS_PROP.get());
    }
    
    /**
     * Gets the value of the ERPTotalIncludedLosses field.
     * ERPTotalIncludedLosses
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getERPTotalIncludedLosses() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ERPTOTALINCLUDEDLOSSES_PROP.get());
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
     * Gets the value of the EmplBenefitsLiabCovClaimsMade field.
     * EmployeeBenefitsLiabCovClaimsMade
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEmplBenefitsLiabCovClaimsMade() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EMPLBENEFITSLIABCOVCLAIMSMADE_PROP.get());
    }
    
    /**
     * Gets the value of the ExclRiotCivilCommotionMobActio field.
     * ExclRiotCivilCommotionMobActionGovtSubdivision
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExclRiotCivilCommotionMobActio() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCLRIOTCIVILCOMMOTIONMOBACTIO_PROP.get());
    }
    
    /**
     * Gets the value of the ExclSalineSubstancesContaminat field.
     * ExclSalineSubstancesContamination
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExclSalineSubstancesContaminat() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCLSALINESUBSTANCESCONTAMINAT_PROP.get());
    }
    
    /**
     * Gets the value of the ExpenseModification field.
     * ExpenseModification
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExpenseModification() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPENSEMODIFICATION_PROP.get());
    }
    
    /**
     * Gets the value of the ExpensePremium field.
     * ExpensePremium
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExpensePremium() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPENSEPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the ExperienceRatingModificationFa field.
     * ExperienceRatingModificationFactor
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExperienceRatingModificationFa() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPERIENCERATINGMODIFICATIONFA_PROP.get());
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
     * Gets the value of the ExposureIndicatorCode field.
     * ExposureIndicatorCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExposureIndicatorCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPOSUREINDICATORCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ExposureIndicatorStatCode field.
     * ExposureIndicatorStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExposureIndicatorStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPOSUREINDICATORSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ExposureStatCode field.
     * ExposureStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getExposureStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXPOSURESTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the Fixed field.
     * Unique ID for this 'object' across all branches and periods
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.GL7StatRecord getFixed() {
      return (entity.GL7StatRecord)__getInternalInterface().getFieldValue(FIXED_PROP.get());
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
     * Gets the value of the HoursOfOperationStatCode field.
     * HoursOfOperationStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHoursOfOperationStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HOURSOFOPERATIONSTATCODE_PROP.get());
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
     * Gets the value of the LCM field.
     * LCM
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLCM() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LCM_PROP.get());
    }
    
    /**
     * Gets the value of the LCMStatCode field.
     * LCMStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLCMStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LCMSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the LevelOfCertificationStatCode field.
     * LevelOfCertificationStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLevelOfCertificationStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LEVELOFCERTIFICATIONSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the LiabPremium field.
     * LiabilityPremium
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLiabPremium() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIABPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the LimStatCode field.
     * LimitStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLimStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LIMSTATCODE_PROP.get());
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
     * Gets the value of the LmtsIdentifierStatCode field.
     * LimitsIdentifierStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLmtsIdentifierStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LMTSIDENTIFIERSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ManufacturerModelStatCode field.
     * ManufacturerModelStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getManufacturerModelStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MANUFACTURERMODELSTATCODE_PROP.get());
    }
    
    public entity.EffDatedBase getMaster() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getMaster();
    }
    
    /**
     * Gets the value of the ModToUse field.
     * ModToUse
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getModToUse() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MODTOUSE_PROP.get());
    }
    
    /**
     * Gets the value of the MoldStatCode field.
     * MoldStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMoldStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MOLDSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the OperatorYearsOfExperienceStatC field.
     * OperatorYearsOfExperienceStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOperatorYearsOfExperienceStatC() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPERATORYEARSOFEXPERIENCESTATC_PROP.get());
    }
    
    /**
     * Gets the value of the OwnershipOperationStatCode field.
     * OwnershipAndOperationStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOwnershipOperationStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OWNERSHIPOPERATIONSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the PDDedStatCode field.
     * PDDedStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPDDedStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PDDEDSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the PackageModFactor field.
     * PackageModFactor
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPackageModFactor() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PACKAGEMODFACTOR_PROP.get());
    }
    
    /**
     * Gets the value of the PollutionLiabCovExtension field.
     * PollutionLiabCovExtension
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPollutionLiabCovExtension() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONLIABCOVEXTENSION_PROP.get());
    }
    
    /**
     * Gets the value of the PollutionLiabCovFormDesigntdSi field.
     * PollutionLiabCovFormDesigntdSites
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPollutionLiabCovFormDesigntdSi() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONLIABCOVFORMDESIGNTDSI_PROP.get());
    }
    
    /**
     * Gets the value of the PollutionLiabLmtdCovFormDesign field.
     * PollutionLiabLimitedCovFormDesigntdSites
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPollutionLiabLmtdCovFormDesign() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLLUTIONLIABLMTDCOVFORMDESIGN_PROP.get());
    }
    
    /**
     * Gets the value of the PremiumBasis field.
     * PremiumBasis
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPremiumBasis() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PREMIUMBASIS_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryPlaceOfOperationStatCod field.
     * PrimaryPlaceOfOperationStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryPlaceOfOperationStatCod() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYPLACEOFOPERATIONSTATCOD_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalBIDedStatCode field.
     * ProductWithdrawalBIDedStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductWithdrawalBIDedStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALBIDEDSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ProductWithdrawalPDDedStatCode field.
     * ProductWithdrawalPDDedStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductWithdrawalPDDedStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTWITHDRAWALPDDEDSTATCODE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RatingIDStatCode field.
     * RatingIDStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRatingIDStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RATINGIDSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the RatingModificationFactorStatCo field.
     * RatingModificationFactorStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRatingModificationFactorStatCo() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RATINGMODIFICATIONFACTORSTATCO_PROP.get());
    }
    
    /**
     * Gets the value of the RiskIDStatCode field.
     * RiskIDStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRiskIDStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RISKIDSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the SRPClassificationPctConverted field.
     * SRPClassificationPctConverted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPClassificationPctConverted() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPCLASSIFICATIONPCTCONVERTED_PROP.get());
    }
    
    /**
     * Gets the value of the SRPCooperationMedicalFacilitie field.
     * SRPCooperationMedicalFacilitiesPctConverted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPCooperationMedicalFacilitie() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPCOOPERATIONMEDICALFACILITIE_PROP.get());
    }
    
    /**
     * Gets the value of the SRPCooperationSafetyProgramPct field.
     * SRPCooperationSafetyProgramPctConverted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPCooperationSafetyProgramPct() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPCOOPERATIONSAFETYPROGRAMPCT_PROP.get());
    }
    
    /**
     * Gets the value of the SRPEmplsPctConverted field.
     * SRPEmployeesPctConverted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPEmplsPctConverted() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPEMPLSPCTCONVERTED_PROP.get());
    }
    
    /**
     * Gets the value of the SRPEquipPctConverted field.
     * SRPEquipmentPctConverted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPEquipPctConverted() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPEQUIPPCTCONVERTED_PROP.get());
    }
    
    /**
     * Gets the value of the SRPLocationExposureInsidePremi field.
     * SRPLocationExposureInsidePremisesPctConverted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPLocationExposureInsidePremi() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPLOCATIONEXPOSUREINSIDEPREMI_PROP.get());
    }
    
    /**
     * Gets the value of the SRPLocationExposureOutsidePrem field.
     * SRPLocationExposureOutsidePremisesPctConverted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPLocationExposureOutsidePrem() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPLOCATIONEXPOSUREOUTSIDEPREM_PROP.get());
    }
    
    /**
     * Gets the value of the SRPMaxCredit field.
     * SRPMaximumCredit
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPMaxCredit() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPMAXCREDIT_PROP.get());
    }
    
    /**
     * Gets the value of the SRPMaxDebit field.
     * SRPMaximumDebit
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPMaxDebit() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPMAXDEBIT_PROP.get());
    }
    
    /**
     * Gets the value of the SRPPremisesPctConverted field.
     * SRPPremisesPctConverted
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPPremisesPctConverted() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPPREMISESPCTCONVERTED_PROP.get());
    }
    
    /**
     * Gets the value of the SRPTotalModificationPct field.
     * SRPTotalModificationPct
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSRPTotalModificationPct() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SRPTOTALMODIFICATIONPCT_PROP.get());
    }
    
    /**
     * Gets the value of the ScheduleRatingModificationFact field.
     * ScheduleRatingModificationFactor
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getScheduleRatingModificationFact() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SCHEDULERATINGMODIFICATIONFACT_PROP.get());
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
     * Gets the value of the SpecialClassificationsIncludin field.
     * SpecialClassificationsIncludingNuclearEnergyLiability
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSpecialClassificationsIncludin() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPECIALCLASSIFICATIONSINCLUDIN_PROP.get());
    }
    
    /**
     * Gets the value of the SpecialClassificationsRisksSta field.
     * SpecialClassificationsRisksStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSpecialClassificationsRisksSta() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SPECIALCLASSIFICATIONSRISKSSTA_PROP.get());
    }
    
    /**
     * Gets the value of the State field.
     * State
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getState() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATE_PROP.get());
    }
    
    /**
     * Gets the value of the StateCode field.
     * StateCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStateCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATECODE_PROP.get());
    }
    
    /**
     * Gets the value of the StopGapStatCode field.
     * StopGapStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStopGapStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STOPGAPSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the Subline field.
     * Subline
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSubline() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBLINE_PROP.get());
    }
    
    /**
     * Gets the value of the SublineCode field.
     * SublineCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSublineCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBLINECODE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.GL7StatRecord getSubtype() {
      return (typekey.GL7StatRecord)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TerrCovStatCode field.
     * TerrorismCovStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTerrCovStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRCOVSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the TerrCovUnderlyigPolicyStatCode field.
     * TerrorismCovUnderlyigPolicyStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTerrCovUnderlyigPolicyStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TERRCOVUNDERLYIGPOLICYSTATCODE_PROP.get());
    }
    
    public java.util.Date getTraversalDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getTraversalDate();
    }
    
    /**
     * Gets the value of the TypeOfPolicyStatCode field.
     * TypeOfPolicyStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTypeOfPolicyStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TYPEOFPOLICYSTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the UndergroundResourcesEquipmtCov field.
     * UndergroundResourcesAndEquipmtCov
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUndergroundResourcesEquipmtCov() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(UNDERGROUNDRESOURCESEQUIPMTCOV_PROP.get());
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
     * Gets the value of the UsageStatCode field.
     * UsageStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUsageStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(USAGESTATCODE_PROP.get());
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
     * Gets the value of the WeightOfDroneStatCode field.
     * WeightOfDroneStatCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getWeightOfDroneStatCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(WEIGHTOFDRONESTATCODE_PROP.get());
    }
    
    /**
     * Gets the value of the Y2KCompuReltdOtherElectrProbLm field.
     * Year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOps
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getY2KCompuReltdOtherElectrProbLm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(Y2KCOMPURELTDOTHERELECTRPROBLM_PROP.get());
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
     * Given a date, check whether it falls within this bean's effective window.
     * @param effDate Date to check
     * @return True if date is within this bean's effective window.
     */
    public boolean isEffective(java.util.Date effDate) {
      return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AddlInsd field.
     */
    public void setAddlInsd(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDLINSD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AggEndorsementLiabLimStatCode field.
     */
    public void setAggEndorsementLiabLimStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(AGGENDORSEMENTLIABLIMSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AnnualBasicLmtsCoPremiumPremOp field.
     */
    public void setAnnualBasicLmtsCoPremiumPremOp(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ANNUALBASICLMTSCOPREMIUMPREMOP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AnnualBasicLmtsCoPremiumProdCo field.
     */
    public void setAnnualBasicLmtsCoPremiumProdCo(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ANNUALBASICLMTSCOPREMIUMPRODCO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BIDedStatCode field.
     */
    public void setBIDedStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BIDEDSTATCODE_PROP.get(), value);
    }
    
    public void setBasedOnId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setBasedOnId(id);
    }
    
    /**
     * Sets the value of the BasedOnValue field.
     */
    public void setBasedOnValue(entity.GL7StatRecord value) {
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
     * Sets the value of the CovStatCode field.
     */
    public void setCovStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CovStatCodeEBL field.
     */
    public void setCovStatCodeEBL(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COVSTATCODEEBL_PROP.get(), value);
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
     * Sets the value of the DroneModificationsStatCode field.
     */
    public void setDroneModificationsStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DRONEMODIFICATIONSSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPActualExperienceRatio field.
     */
    public void setERPActualExperienceRatio(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPACTUALEXPERIENCERATIO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPAdjmtToUltimateLevelOfLosse field.
     */
    public void setERPAdjmtToUltimateLevelOfLosse(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPADJMTTOULTIMATELEVELOFLOSSE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPAnnualBasicLmtsCoLossCostPr field.
     */
    public void setERPAnnualBasicLmtsCoLossCostPr(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPANNUALBASICLMTSCOLOSSCOSTPR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPBasicLmtsCoLossCostBySublin field.
     */
    public void setERPBasicLmtsCoLossCostBySublin(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPBASICLMTSCOLOSSCOSTBYSUBLIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPBasicLmtsCoSubjectLossCostL field.
     */
    public void setERPBasicLmtsCoSubjectLossCostL(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPBasicLmtsCoSubjectLossCostS field.
     */
    public void setERPBasicLmtsCoSubjectLossCostS(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPBasicLmtsCoSubjectLossCostT field.
     */
    public void setERPBasicLmtsCoSubjectLossCostT(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPBASICLMTSCOSUBJECTLOSSCOSTT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPCredibilityFactor field.
     */
    public void setERPCredibilityFactor(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPCREDIBILITYFACTOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPExpectedExperienceRatio field.
     */
    public void setERPExpectedExperienceRatio(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPEXPECTEDEXPERIENCERATIO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPExpectedLossRatio field.
     */
    public void setERPExpectedLossRatio(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPEXPECTEDLOSSRATIO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPExperienceModification field.
     */
    public void setERPExperienceModification(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPEXPERIENCEMODIFICATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPLatestYearDetrendFactorPrem field.
     */
    public void setERPLatestYearDetrendFactorPrem(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPLATESTYEARDETRENDFACTORPREM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPLatestYearDetrendFactorProd field.
     */
    public void setERPLatestYearDetrendFactorProd(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPLATESTYEARDETRENDFACTORPROD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPLossDevelopmentFactorLatest field.
     */
    public void setERPLossDevelopmentFactorLatest(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORLATEST_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPLossDevelopmentFactorSecond field.
     */
    public void setERPLossDevelopmentFactorSecond(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORSECOND_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPLossDevelopmentFactorThirdL field.
     */
    public void setERPLossDevelopmentFactorThirdL(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPLOSSDEVELOPMENTFACTORTHIRDL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPMaturityLatestYear field.
     */
    public void setERPMaturityLatestYear(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPMATURITYLATESTYEAR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPMaturitySecondLatestYear field.
     */
    public void setERPMaturitySecondLatestYear(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPMATURITYSECONDLATESTYEAR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPMaturityThirdLatestYear field.
     */
    public void setERPMaturityThirdLatestYear(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPMATURITYTHIRDLATESTYEAR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPPolicyAdjustmentFactorBPrem field.
     */
    public void setERPPolicyAdjustmentFactorBPrem(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORBPREM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPPolicyAdjustmentFactorBProd field.
     */
    public void setERPPolicyAdjustmentFactorBProd(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORBPROD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPPolicyAdjustmentFactorCLate field.
     */
    public void setERPPolicyAdjustmentFactorCLate(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCLATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPPolicyAdjustmentFactorCSeco field.
     */
    public void setERPPolicyAdjustmentFactorCSeco(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCSECO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPPolicyAdjustmentFactorCThir field.
     */
    public void setERPPolicyAdjustmentFactorCThir(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPPOLICYADJUSTMENTFACTORCTHIR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPSecondLatestYearDetrendFact field.
     */
    public void setERPSecondLatestYearDetrendFact(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPSECONDLATESTYEARDETRENDFACT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPSublinePresentAvgRatePremOp field.
     */
    public void setERPSublinePresentAvgRatePremOp(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPSUBLINEPRESENTAVGRATEPREMOP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPSublinePresentAvgRateProdCo field.
     */
    public void setERPSublinePresentAvgRateProdCo(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPSUBLINEPRESENTAVGRATEPRODCO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPThirdLatestYearDetrendFacto field.
     */
    public void setERPThirdLatestYearDetrendFacto(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPTHIRDLATESTYEARDETRENDFACTO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPTotalAdjmtToUltimateLevelOf field.
     */
    public void setERPTotalAdjmtToUltimateLevelOf(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPTOTALADJMTTOULTIMATELEVELOF_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPTotalBasicLmtsCoSubjectLoss field.
     */
    public void setERPTotalBasicLmtsCoSubjectLoss(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPTOTALBASICLMTSCOSUBJECTLOSS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ERPTotalIncludedLosses field.
     */
    public void setERPTotalIncludedLosses(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ERPTOTALINCLUDEDLOSSES_PROP.get(), value);
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
     * Sets the value of the EmplBenefitsLiabCovClaimsMade field.
     */
    public void setEmplBenefitsLiabCovClaimsMade(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EMPLBENEFITSLIABCOVCLAIMSMADE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExclRiotCivilCommotionMobActio field.
     */
    public void setExclRiotCivilCommotionMobActio(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXCLRIOTCIVILCOMMOTIONMOBACTIO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExclSalineSubstancesContaminat field.
     */
    public void setExclSalineSubstancesContaminat(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXCLSALINESUBSTANCESCONTAMINAT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExpenseModification field.
     */
    public void setExpenseModification(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXPENSEMODIFICATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExpensePremium field.
     */
    public void setExpensePremium(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXPENSEPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExperienceRatingModificationFa field.
     */
    public void setExperienceRatingModificationFa(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXPERIENCERATINGMODIFICATIONFA_PROP.get(), value);
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
     * Sets the value of the ExposureIndicatorCode field.
     */
    public void setExposureIndicatorCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXPOSUREINDICATORCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExposureIndicatorStatCode field.
     */
    public void setExposureIndicatorStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXPOSUREINDICATORSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExposureStatCode field.
     */
    public void setExposureStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(EXPOSURESTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fixed field.
     */
    public void setFixed(entity.GL7StatRecord value) {
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
     * Sets the value of the HoursOfOperationStatCode field.
     */
    public void setHoursOfOperationStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HOURSOFOPERATIONSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LCM field.
     */
    public void setLCM(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LCM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LCMStatCode field.
     */
    public void setLCMStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LCMSTATCODE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LevelOfCertificationStatCode field.
     */
    public void setLevelOfCertificationStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LEVELOFCERTIFICATIONSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LiabPremium field.
     */
    public void setLiabPremium(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LIABPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LimStatCode field.
     */
    public void setLimStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LIMSTATCODE_PROP.get(), value);
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
     * Sets the value of the LmtsIdentifierStatCode field.
     */
    public void setLmtsIdentifierStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LMTSIDENTIFIERSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ManufacturerModelStatCode field.
     */
    public void setManufacturerModelStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MANUFACTURERMODELSTATCODE_PROP.get(), value);
    }
    
    public void setMaster(entity.EffDatedBase master) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setMaster(master);
    }
    
    /**
     * Sets the value of the ModToUse field.
     */
    public void setModToUse(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MODTOUSE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MoldStatCode field.
     */
    public void setMoldStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MOLDSTATCODE_PROP.get(), value);
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
     * Sets the value of the OperatorYearsOfExperienceStatC field.
     */
    public void setOperatorYearsOfExperienceStatC(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OPERATORYEARSOFEXPERIENCESTATC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OwnershipOperationStatCode field.
     */
    public void setOwnershipOperationStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OWNERSHIPOPERATIONSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PDDedStatCode field.
     */
    public void setPDDedStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PDDEDSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PackageModFactor field.
     */
    public void setPackageModFactor(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PACKAGEMODFACTOR_PROP.get(), value);
    }
    
    public void setPeriodWindow(com.guidewire.pl.system.util.DateRange oldPeriodRange) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setPeriodWindow(oldPeriodRange);
    }
    
    /**
     * Sets the value of the PollutionLiabCovExtension field.
     */
    public void setPollutionLiabCovExtension(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLLUTIONLIABCOVEXTENSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PollutionLiabCovFormDesigntdSi field.
     */
    public void setPollutionLiabCovFormDesigntdSi(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLLUTIONLIABCOVFORMDESIGNTDSI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PollutionLiabLmtdCovFormDesign field.
     */
    public void setPollutionLiabLmtdCovFormDesign(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLLUTIONLIABLMTDCOVFORMDESIGN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PremiumBasis field.
     */
    public void setPremiumBasis(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PREMIUMBASIS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryPlaceOfOperationStatCod field.
     */
    public void setPrimaryPlaceOfOperationStatCod(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYPLACEOFOPERATIONSTATCOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalBIDedStatCode field.
     */
    public void setProductWithdrawalBIDedStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALBIDEDSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductWithdrawalPDDedStatCode field.
     */
    public void setProductWithdrawalPDDedStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTWITHDRAWALPDDEDSTATCODE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RatingIDStatCode field.
     */
    public void setRatingIDStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RATINGIDSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RatingModificationFactorStatCo field.
     */
    public void setRatingModificationFactorStatCo(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RATINGMODIFICATIONFACTORSTATCO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RiskIDStatCode field.
     */
    public void setRiskIDStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RISKIDSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPClassificationPctConverted field.
     */
    public void setSRPClassificationPctConverted(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPCLASSIFICATIONPCTCONVERTED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPCooperationMedicalFacilitie field.
     */
    public void setSRPCooperationMedicalFacilitie(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPCOOPERATIONMEDICALFACILITIE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPCooperationSafetyProgramPct field.
     */
    public void setSRPCooperationSafetyProgramPct(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPCOOPERATIONSAFETYPROGRAMPCT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPEmplsPctConverted field.
     */
    public void setSRPEmplsPctConverted(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPEMPLSPCTCONVERTED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPEquipPctConverted field.
     */
    public void setSRPEquipPctConverted(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPEQUIPPCTCONVERTED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPLocationExposureInsidePremi field.
     */
    public void setSRPLocationExposureInsidePremi(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPLOCATIONEXPOSUREINSIDEPREMI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPLocationExposureOutsidePrem field.
     */
    public void setSRPLocationExposureOutsidePrem(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPLOCATIONEXPOSUREOUTSIDEPREM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPMaxCredit field.
     */
    public void setSRPMaxCredit(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPMAXCREDIT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPMaxDebit field.
     */
    public void setSRPMaxDebit(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPMAXDEBIT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPPremisesPctConverted field.
     */
    public void setSRPPremisesPctConverted(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPPREMISESPCTCONVERTED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SRPTotalModificationPct field.
     */
    public void setSRPTotalModificationPct(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SRPTOTALMODIFICATIONPCT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ScheduleRatingModificationFact field.
     */
    public void setScheduleRatingModificationFact(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SCHEDULERATINGMODIFICATIONFACT_PROP.get(), value);
    }
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the SpecialClassificationsIncludin field.
     */
    public void setSpecialClassificationsIncludin(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SPECIALCLASSIFICATIONSINCLUDIN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SpecialClassificationsRisksSta field.
     */
    public void setSpecialClassificationsRisksSta(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SPECIALCLASSIFICATIONSRISKSSTA_PROP.get(), value);
    }
    
    /**
     * Sets the value of the State field.
     */
    public void setState(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StateCode field.
     */
    public void setStateCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STATECODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StopGapStatCode field.
     */
    public void setStopGapStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STOPGAPSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subline field.
     */
    public void setSubline(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SUBLINE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SublineCode field.
     */
    public void setSublineCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SUBLINECODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.GL7StatRecord value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TerrCovStatCode field.
     */
    public void setTerrCovStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TERRCOVSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TerrCovUnderlyigPolicyStatCode field.
     */
    public void setTerrCovUnderlyigPolicyStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TERRCOVUNDERLYIGPOLICYSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TypeOfPolicyStatCode field.
     */
    public void setTypeOfPolicyStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TYPEOFPOLICYSTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UndergroundResourcesEquipmtCov field.
     */
    public void setUndergroundResourcesEquipmtCov(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(UNDERGROUNDRESOURCESEQUIPMTCOV_PROP.get(), value);
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
     * Sets the value of the UsageStatCode field.
     */
    public void setUsageStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(USAGESTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WeightOfDroneStatCode field.
     */
    public void setWeightOfDroneStatCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(WEIGHTOFDRONESTATCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Y2KCompuReltdOtherElectrProbLm field.
     */
    public void setY2KCompuReltdOtherElectrProbLm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(Y2KCOMPURELTDOTHERELECTRPROBLM_PROP.get(), value);
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
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
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
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.GL7StatRecord.class, config);
    com.guidewire._generated.entity.GL7StatRecordInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.GL7StatRecord, com.guidewire._generated.entity.GL7StatRecordInternal>() {
      public java.lang.Object getImplementation(entity.GL7StatRecord bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.GL7StatRecordInternal getInternalInterface(entity.GL7StatRecord bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.GL7StatRecord newEmptyInstance() {
        return new entity.GL7StatRecord((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}