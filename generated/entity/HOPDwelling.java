package entity;

/**
 * HOPDwelling
 * Dwellings for Homeowners Line
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwelling.eti;HOPDwelling.eix;HOPDwelling.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "HOPDwelling")
public class HOPDwelling extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, entity.Coverable, entity.Modifiable, gw.api.contact.AdditionalInterestContainer, gw.api.logicalmatch.EffDatedLogicalMatcher {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.HOPDwelling, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.HOPDwelling, entity.PolicyPeriod>("entity.HOPDwelling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ADDITIONALINTERESTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AdditionalInterests");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BURGLARALARMTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "BurglarAlarmType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CONDITIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Conditions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CONSTRUCTIONTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ConstructionType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONSTRUCTIONTYPEDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ConstructionTypeDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COVERAGEFORM_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CoverageForm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COVERAGES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Coverages");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEADBOLTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Deadbolts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DISTANCETOFIREHYDRANT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DistanceToFireHydrant");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DISTANCETOFIRESTATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DistanceToFireStation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DWELLINGANIMALS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "DwellingAnimals");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DWELLINGHAZARDS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "DwellingHazards");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DWELLINGLOCATION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DwellingLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DWELLINGUSAGE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DwellingUsage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ELECTRICALSYSTEMUPGRADEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ElectricalSystemUpgradeDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ELECTRICALTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ElectricalType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> EXCLUSIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Exclusions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> FIREALARMTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "FireAlarmType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIREPLACEORWOODSTOVESNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FireplaceOrWoodStovesNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FLOODINGHAZARD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FloodingHazard");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> FOUNDATION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Foundation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> GARAGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "GarageType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> HOPCOVERAGEPART_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "HOPCoveragePart");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> HOPDWELLINGMODS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "HOPDwellingMods");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HEATINGUPGRADEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HeatingUpgradeDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCONDITIONSCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialConditionsCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALCOVERAGESCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialCoveragesCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITIALEXCLUSIONSCREATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitialExclusionsCreated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INSUREDUNITS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InsuredUnits");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> KNOWNWATERLEAKAGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "KnownWaterLeakage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> KNOWNWATERLEAKAGEDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "KnownWaterLeakageDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LOCATION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Location");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEARCOMMERCIAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NearCommercial");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMBEROFFIREEXTINGUISHERS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumberOfFireExtinguishers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OCCUPANCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Occupancy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PLUMBINGTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PlumbingType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PLUMBINGTYPEDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PlumbingTypeDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PLUMBINGUPGRADEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PlumbingUpgradeDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PREFERREDCOVERAGECURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PreferredCoverageCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYHEATINGDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryHeatingDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIMARYHEATINGFUELLINELOCATION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PrimaryHeatingFuelLineLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIMARYHEATINGFUELTANKLOCATION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PrimaryHeatingFuelTankLocation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIMARYHEATINGTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PrimaryHeatingType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCEDATEINTERNAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReferenceDateInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> REPLACEMENTCOST_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "ReplacementCost");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REPLACEMENTCOST_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReplacementCost_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> REPLACEMENTCOST_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ReplacementCost_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RESIDENCETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ResidenceType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ROOFTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RoofType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ROOFTYPEDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RoofTypeDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ROOFINGUPGRADEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RoofingUpgradeDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ROOMERBOARDERSNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RoomerBoardersNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SECONDARYHEATINGTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SecondaryHeatingType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SMOKEALARM_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SmokeAlarm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SPRINKLERSYSTEMTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SprinklerSystemType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STORIESNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StoriesNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SWIMMINGPOOL_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "SwimmingPool");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SWIMMINGPOOLARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "SwimmingPoolArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TRAMPOLINEEXISTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TrampolineExists");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TRAMPOLINESAFETYNET_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TrampolineSafetyNet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UNITSNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UnitsNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VISIBLETONEIGHBORS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "VisibleToNeighbors");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> WIRINGTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "WiringType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> YEARBUILT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "YearBuilt");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.HOPDwellingInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the given branch.
   */
  public HOPDwelling(entity.PolicyPeriod branch)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initNewBeanInstance(this, java.util.Arrays.asList());
  }
  
  /**
   * Constructs a new <em>unsliced</em> instance of this entity in the given branch, and effective for the given date range.
   */
  public HOPDwelling(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    this((java.lang.Void)null);
    com.guidewire._generated.entity.PolicyPeriodInternalAccess.FRIEND_ACCESSOR.access().getInternalInterface(branch).initUnslicedBeanInstance(this, effectiveDate, expirationDate, java.util.Arrays.asList());
  }
  
  protected HOPDwelling(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.HOPDwellingInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.HOPDwellingInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public entity.AddlInterestDetail addAdditionalInterestDetail(entity.Contact contact) {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).addAdditionalInterestDetail(contact);
  }
  
  public entity.AddlInterestDetail addAdditionalInterestDetail(entity.PolicyAddlInterest policyAdditionalInterest) {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).addAdditionalInterestDetail(policyAdditionalInterest);
  }
  
  public void addToAdditionalInterestDetails(entity.AddlInterestDetail interestDetail) {
    ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).addToAdditionalInterestDetails(interestDetail);
  }
  
  /**
   * Adds the given element to the AdditionalInterests array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInterests(entity.HOPDwellAddlInterest element) {
    __getInternalInterface().addArrayElement(ADDITIONALINTERESTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditions(entity.HOPDwellingCond element) {
    __getInternalInterface().addArrayElement(CONDITIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.HOPDwellingCov element) {
    __getInternalInterface().addArrayElement(COVERAGES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the DwellingAnimals array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDwellingAnimals(entity.DwellingAnimal element) {
    __getInternalInterface().addArrayElement(DWELLINGANIMALS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the DwellingHazards array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDwellingHazards(entity.DwellingHazard element) {
    __getInternalInterface().addArrayElement(DWELLINGHAZARDS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToExclusions(entity.HOPDwellingExcl element) {
    __getInternalInterface().addArrayElement(EXCLUSIONS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the HOPDwellingMods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPDwellingMods(entity.HOPDwellingMod element) {
    __getInternalInterface().addArrayElement(HOPDWELLINGMODS_PROP.get(), element);
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
  
  public entity.HOPDwelling clone() {
    return (entity.HOPDwelling)__getInternalInterface().cloneUntyped();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  public entity.AddlInterestDetail createAndAddAdditionalInterestDetail(typekey.ContactType contactType) {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).createAndAddAdditionalInterestDetail(contactType);
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
  
  public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
  }
  
  public java.lang.Object genKey() {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
  }
  
  public entity.AccountContact[] getAdditionalInterestCandidates() {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getAdditionalInterestCandidates();
  }
  
  public entity.AddlInterestDetail[] getAdditionalInterestDetails() {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getAdditionalInterestDetails();
  }
  
  public entity.AddlInterestDetail[] getAdditionalInterestDetailsForPolicyAddlInterest(entity.PolicyAddlInterest policyAdditionalInterest) {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getAdditionalInterestDetailsForPolicyAddlInterest(policyAdditionalInterest);
  }
  
  public entity.AccountContact[] getAdditionalInterestOtherCandidates() {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getAdditionalInterestOtherCandidates();
  }
  
  /**
   * Gets the value of the AdditionalInterests field.
   * Third parties with an additional interest in the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellAddlInterest[] getAdditionalInterests() {
    return (entity.HOPDwellAddlInterest[])__getInternalInterface().getFieldValue(ADDITIONALINTERESTS_PROP.get());
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
  
  public entity.HOPDwelling getBasedOn() {
    return (entity.HOPDwelling)__getInternalInterface().getBasedOnUntyped();
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
  public entity.HOPDwelling getBasedOnValue() {
    return (entity.HOPDwelling)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
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
   * Gets the value of the BurglarAlarmType field.
   * Burglar Alarm Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BurglarAlarmType getBurglarAlarmType() {
    return (typekey.BurglarAlarmType)__getInternalInterface().getFieldValue(BURGLARALARMTYPE_PROP.get());
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
   * Conditions directly attached to the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingCond[] getConditions() {
    return (entity.HOPDwellingCond[])__getInternalInterface().getFieldValue(CONDITIONS_PROP.get());
  }
  
  public entity.PolicyCondition[] getConditionsFromCoverable() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getConditionsFromCoverable();
  }
  
  /**
   * Gets the value of the ConstructionType field.
   * Dwelling Construction Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPConstructionType getConstructionType() {
    return (typekey.HOPConstructionType)__getInternalInterface().getFieldValue(CONSTRUCTIONTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the ConstructionTypeDescription field.
   * Description of construction for type Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConstructionTypeDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONSTRUCTIONTYPEDESCRIPTION_PROP.get());
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
   * Gets the value of the CoverageForm field.
   * The HO coverage form for this dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPCoverageForm getCoverageForm() {
    return (typekey.HOPCoverageForm)__getInternalInterface().getFieldValue(COVERAGEFORM_PROP.get());
  }
  
  /**
   * Gets the value of the Coverages field.
   * Coverages directly attached to the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingCov[] getCoverages() {
    return (entity.HOPDwellingCov[])__getInternalInterface().getFieldValue(COVERAGES_PROP.get());
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
   * Gets the value of the DistanceToFireHydrant field.
   * Distance to Fire Hydrant
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDistanceToFireHydrant() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(DISTANCETOFIREHYDRANT_PROP.get());
  }
  
  /**
   * Gets the value of the DistanceToFireStation field.
   * Distance to Fire Station
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDistanceToFireStation() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(DISTANCETOFIRESTATION_PROP.get());
  }
  
  /**
   * Gets the value of the DwellingAnimals field.
   * Animals in the dwelling premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DwellingAnimal[] getDwellingAnimals() {
    return (entity.DwellingAnimal[])__getInternalInterface().getFieldValue(DWELLINGANIMALS_PROP.get());
  }
  
  /**
   * Gets the value of the DwellingHazards field.
   * Hazards in the dwelling premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DwellingHazard[] getDwellingHazards() {
    return (entity.DwellingHazard[])__getInternalInterface().getFieldValue(DWELLINGHAZARDS_PROP.get());
  }
  
  /**
   * Gets the value of the DwellingLocation field.
   * Dwelling Location Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DwellingLocationType getDwellingLocation() {
    return (typekey.DwellingLocationType)__getInternalInterface().getFieldValue(DWELLINGLOCATION_PROP.get());
  }
  
  /**
   * Gets the value of the DwellingUsage field.
   * Dwelling Usage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DwellingUsage getDwellingUsage() {
    return (typekey.DwellingUsage)__getInternalInterface().getFieldValue(DWELLINGUSAGE_PROP.get());
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
   * Gets the value of the ElectricalSystemUpgradeDate field.
   * Date of Electrical System Upgrade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getElectricalSystemUpgradeDate() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(ELECTRICALSYSTEMUPGRADEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ElectricalType field.
   * Electrical Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BreakerType getElectricalType() {
    return (typekey.BreakerType)__getInternalInterface().getFieldValue(ELECTRICALTYPE_PROP.get());
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
   * Exclusions directly attached to the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingExcl[] getExclusions() {
    return (entity.HOPDwellingExcl[])__getInternalInterface().getFieldValue(EXCLUSIONS_PROP.get());
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
   * Gets the value of the FireAlarmType field.
   * Fire alarm type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FireAlarmType getFireAlarmType() {
    return (typekey.FireAlarmType)__getInternalInterface().getFieldValue(FIREALARMTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the FireplaceOrWoodStovesNumber field.
   * Number of woodstoves or fire places
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getFireplaceOrWoodStovesNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(FIREPLACEORWOODSTOVESNUMBER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwelling getFixed() {
    return (entity.HOPDwelling)__getInternalInterface().getFieldValue(FIXED_PROP.get());
  }
  
  /**
   * Get the logical ID for this bean, not the row ID. All row
   * @return Logical ID for this bean, not the row ID.
   */
  public gw.pl.persistence.core.Key getFixedId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
  }
  
  /**
   * Gets the value of the Foundation field.
   * Foundation Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FoundationType getFoundation() {
    return (typekey.FoundationType)__getInternalInterface().getFieldValue(FOUNDATION_PROP.get());
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  /**
   * Gets the value of the GarageType field.
   * Garage type in dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GarageType getGarageType() {
    return (typekey.GarageType)__getInternalInterface().getFieldValue(GARAGETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the HOPCoveragePart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePart getHOPCoveragePart() {
    return (entity.HOPCoveragePart)__getInternalInterface().getFieldValue(HOPCOVERAGEPART_PROP.get());
  }
  
  /**
   * Gets the value of the HOPDwellingMods field.
   * Modifiers directly attached to the Dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingMod[] getHOPDwellingMods() {
    return (entity.HOPDwellingMod[])__getInternalInterface().getFieldValue(HOPDWELLINGMODS_PROP.get());
  }
  
  /**
   * Gets the value of the HeatingUpgradeDate field.
   * Date of Heating Upgrade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getHeatingUpgradeDate() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(HEATINGUPGRADEDATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the InsuredUnits field.
   * Number of units to be insured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getInsuredUnits() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INSUREDUNITS_PROP.get());
  }
  
  /**
   * Gets the value of the KnownWaterLeakageDescription field.
   * Description of water leakage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getKnownWaterLeakageDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KNOWNWATERLEAKAGEDESCRIPTION_PROP.get());
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
   * Gets the value of the Location field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation() {
    return (entity.PolicyLocation)__getInternalInterface().getFieldValue(LOCATION_PROP.get());
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
   * Gets the value of the NumberOfFireExtinguishers field.
   * How many fire extinguishers are on premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumberOfFireExtinguishers() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMBEROFFIREEXTINGUISHERS_PROP.get());
  }
  
  /**
   * Gets the value of the Occupancy field.
   * How the dwelling is being occupied
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DwellingOccupancyType getOccupancy() {
    return (typekey.DwellingOccupancyType)__getInternalInterface().getFieldValue(OCCUPANCY_PROP.get());
  }
  
  public java.lang.String getOwnerDisplayName() {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getOwnerDisplayName();
  }
  
  /**
   * Gets the value of the PlumbingType field.
   * Plumbing Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PlumbingType getPlumbingType() {
    return (typekey.PlumbingType)__getInternalInterface().getFieldValue(PLUMBINGTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the PlumbingTypeDescription field.
   * Description of plumbing for type Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPlumbingTypeDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PLUMBINGTYPEDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the PlumbingUpgradeDate field.
   * Date of Plumbing Upgrade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPlumbingUpgradeDate() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(PLUMBINGUPGRADEDATE_PROP.get());
  }
  
  public entity.PolicyLine getPolicyLine() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLine();
  }
  
  public entity.PolicyLocation[] getPolicyLocations() {
    return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getPolicyLocations();
  }
  
  public entity.PolicyPeriod getPolicyPeriod() {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getPolicyPeriod();
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
   * Gets the value of the PrimaryHeatingDescription field.
   * Description of primary heating for type Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryHeatingDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYHEATINGDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryHeatingFuelLineLocation field.
   * Location of fuel line for Oil based heating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FuelLineLocationType getPrimaryHeatingFuelLineLocation() {
    return (typekey.FuelLineLocationType)__getInternalInterface().getFieldValue(PRIMARYHEATINGFUELLINELOCATION_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryHeatingFuelTankLocation field.
   * Location of fuel tank for Oil based heating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FuelTankLocationType getPrimaryHeatingFuelTankLocation() {
    return (typekey.FuelTankLocationType)__getInternalInterface().getFieldValue(PRIMARYHEATINGFUELTANKLOCATION_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryHeatingType field.
   * Dwelling Heating Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HeatingType getPrimaryHeatingType() {
    return (typekey.HeatingType)__getInternalInterface().getFieldValue(PRIMARYHEATINGTYPE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
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
   * Gets the value of the ReplacementCost field.
   * Replacement Cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getReplacementCost() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(REPLACEMENTCOST_PROP.get());
  }
  
  /**
   * Gets the value of the ReplacementCost_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getReplacementCost_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(REPLACEMENTCOST_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the ReplacementCost_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getReplacementCost_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(REPLACEMENTCOST_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the ResidenceType field.
   * Residence Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ResidenceType getResidenceType() {
    return (typekey.ResidenceType)__getInternalInterface().getFieldValue(RESIDENCETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the RoofType field.
   * Roof Material Classification
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPRoofType getRoofType() {
    return (typekey.HOPRoofType)__getInternalInterface().getFieldValue(ROOFTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the RoofTypeDescription field.
   * Description of Roof Type for type Other
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRoofTypeDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ROOFTYPEDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the RoofingUpgradeDate field.
   * Date of Roofing Upgrade
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRoofingUpgradeDate() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(ROOFINGUPGRADEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the RoomerBoardersNumber field.
   * Number of roomers or boarders
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRoomerBoardersNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(ROOMERBOARDERSNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the SecondaryHeatingType field.
   *  Secondary Heating Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HeatingType getSecondaryHeatingType() {
    return (typekey.HeatingType)__getInternalInterface().getFieldValue(SECONDARYHEATINGTYPE_PROP.get());
  }
  
  public entity.HOPDwelling getSlice(java.util.Date sliceDate) {
    return (entity.HOPDwelling)getSliceUntyped(sliceDate);
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
   * Gets the value of the SmokeAlarm field.
   * Smoke Alarms on Premises
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SmokeAlarms getSmokeAlarm() {
    return (typekey.SmokeAlarms)__getInternalInterface().getFieldValue(SMOKEALARM_PROP.get());
  }
  
  /**
   * Gets the value of the SprinklerSystemType field.
   * Sprinkler System Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SprinklerSystemType getSprinklerSystemType() {
    return (typekey.SprinklerSystemType)__getInternalInterface().getFieldValue(SPRINKLERSYSTEMTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the StoriesNumber field.
   *  Number of stories in the dwelling
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getStoriesNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(STORIESNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the SwimmingPool field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPSwimmingPool getSwimmingPool() {
    return (entity.HOPSwimmingPool)__getInternalInterface().getFieldValue(SWIMMINGPOOL_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPSwimmingPool[] getSwimmingPoolArray() {
    return (entity.HOPSwimmingPool[])__getInternalInterface().getFieldValue(SWIMMINGPOOLARRAY_PROP.get());
  }
  
  public java.lang.String getTypeLabel() {
    return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getTypeLabel();
  }
  
  /**
   * Gets the value of the UnitsNumber field.
   *  Number of units between firewall
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getUnitsNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(UNITSNUMBER_PROP.get());
  }
  
  public entity.HOPDwelling getUnsliced() {
    return (entity.HOPDwelling)getUnslicedUntyped();
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
  
  public entity.windowed.HOPDwellingVersionList getVersionList() {
    return (entity.windowed.HOPDwellingVersionList)getVersionListUntyped();
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
   * Gets the value of the WiringType field.
   * Electrical Wiring Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WiringType getWiringType() {
    return (typekey.WiringType)__getInternalInterface().getFieldValue(WIRINGTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the YearBuilt field.
   * Year Built
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getYearBuilt() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(YEARBUILT_PROP.get());
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
   * Gets the value of the Deadbolts field.
   * Do all the doors have Deadbolts
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDeadbolts() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEADBOLTS_PROP.get());
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
  
  /**
   * Gets the value of the FloodingHazard field.
   * Flooding or landslide hazard?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFloodingHazard() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FLOODINGHAZARD_PROP.get());
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
   * Gets the value of the KnownWaterLeakage field.
   * Any water leakage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isKnownWaterLeakage() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(KNOWNWATERLEAKAGE_PROP.get());
  }
  
  public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
    return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).isLogicalMatchUntyped(bean);
  }
  
  /**
   * Gets the value of the NearCommercial field.
   * Property within 300 ft of commercial or non-residential property?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isNearCommercial() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(NEARCOMMERCIAL_PROP.get());
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
   * Gets the value of the TrampolineExists field.
   * Trampoline exists on property?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isTrampolineExists() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(TRAMPOLINEEXISTS_PROP.get());
  }
  
  /**
   * Gets the value of the TrampolineSafetyNet field.
   * Is there a safety net?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isTrampolineSafetyNet() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(TRAMPOLINESAFETYNET_PROP.get());
  }
  
  /**
   * Gets the value of the VisibleToNeighbors field.
   * Is the dwelling visible to neighbors
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isVisibleToNeighbors() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(VISIBLETONEIGHBORS_PROP.get());
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
  
  public void removeFromAdditionalInterestDetails(entity.AddlInterestDetail interestDetail) {
    ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).removeFromAdditionalInterestDetails(interestDetail);
  }
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInterests(entity.HOPDwellAddlInterest element) {
    __getInternalInterface().removeArrayElement(ADDITIONALINTERESTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInterests(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ADDITIONALINTERESTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
   */
  public void removeFromConditions(entity.HOPDwellingCond element) {
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
  public void removeFromCoverages(entity.HOPDwellingCov element) {
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
   * Removes the given element from the DwellingAnimals array. This is achieved by marking the element for removal.
   */
  public void removeFromDwellingAnimals(entity.DwellingAnimal element) {
    __getInternalInterface().removeArrayElement(DWELLINGANIMALS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the DwellingAnimals array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDwellingAnimals(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DWELLINGANIMALS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the DwellingHazards array. This is achieved by marking the element for removal.
   */
  public void removeFromDwellingHazards(entity.DwellingHazard element) {
    __getInternalInterface().removeArrayElement(DWELLINGHAZARDS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the DwellingHazards array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDwellingHazards(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DWELLINGHAZARDS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromExclusions(entity.HOPDwellingExcl element) {
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
   * Removes the given element from the HOPDwellingMods array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPDwellingMods(entity.HOPDwellingMod element) {
    __getInternalInterface().removeArrayElement(HOPDWELLINGMODS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the HOPDwellingMods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPDwellingMods(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(HOPDWELLINGMODS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AdditionalInterests field.
   */
  public void setAdditionalInterests(entity.HOPDwellAddlInterest[] value) {
    __getInternalInterface().setFieldValue(ADDITIONALINTERESTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.HOPDwelling value) {
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
   * Sets the value of the BurglarAlarmType field.
   */
  public void setBurglarAlarmType(typekey.BurglarAlarmType value) {
    __getInternalInterface().setFieldValue(BURGLARALARMTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
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
  public void setConditions(entity.HOPDwellingCond[] value) {
    __getInternalInterface().setFieldValue(CONDITIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ConstructionType field.
   */
  public void setConstructionType(typekey.HOPConstructionType value) {
    __getInternalInterface().setFieldValue(CONSTRUCTIONTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ConstructionTypeDescription field.
   */
  public void setConstructionTypeDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONSTRUCTIONTYPEDESCRIPTION_PROP.get(), value);
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
   * Sets the value of the CoverageForm field.
   */
  public void setCoverageForm(typekey.HOPCoverageForm value) {
    __getInternalInterface().setFieldValue(COVERAGEFORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.HOPDwellingCov[] value) {
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
   * Sets the value of the Deadbolts field.
   */
  public void setDeadbolts(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DEADBOLTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DistanceToFireHydrant field.
   */
  public void setDistanceToFireHydrant(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(DISTANCETOFIREHYDRANT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DistanceToFireStation field.
   */
  public void setDistanceToFireStation(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(DISTANCETOFIRESTATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DwellingAnimals field.
   */
  public void setDwellingAnimals(entity.DwellingAnimal[] value) {
    __getInternalInterface().setFieldValue(DWELLINGANIMALS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DwellingHazards field.
   */
  public void setDwellingHazards(entity.DwellingHazard[] value) {
    __getInternalInterface().setFieldValue(DWELLINGHAZARDS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DwellingLocation field.
   */
  public void setDwellingLocation(typekey.DwellingLocationType value) {
    __getInternalInterface().setFieldValue(DWELLINGLOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DwellingUsage field.
   */
  public void setDwellingUsage(typekey.DwellingUsage value) {
    __getInternalInterface().setFieldValue(DWELLINGUSAGE_PROP.get(), value);
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
   * Sets the value of the ElectricalSystemUpgradeDate field.
   */
  public void setElectricalSystemUpgradeDate(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(ELECTRICALSYSTEMUPGRADEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ElectricalType field.
   */
  public void setElectricalType(typekey.BreakerType value) {
    __getInternalInterface().setFieldValue(ELECTRICALTYPE_PROP.get(), value);
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
  public void setExclusions(entity.HOPDwellingExcl[] value) {
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
   * Sets the value of the FireAlarmType field.
   */
  public void setFireAlarmType(typekey.FireAlarmType value) {
    __getInternalInterface().setFieldValue(FIREALARMTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FireplaceOrWoodStovesNumber field.
   */
  public void setFireplaceOrWoodStovesNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(FIREPLACEORWOODSTOVESNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.HOPDwelling value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FloodingHazard field.
   */
  public void setFloodingHazard(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(FLOODINGHAZARD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Foundation field.
   */
  public void setFoundation(typekey.FoundationType value) {
    __getInternalInterface().setFieldValue(FOUNDATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GarageType field.
   */
  public void setGarageType(typekey.GarageType value) {
    __getInternalInterface().setFieldValue(GARAGETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HOPCoveragePart field.
   */
  public void setHOPCoveragePart(entity.HOPCoveragePart value) {
    __getInternalInterface().setFieldValue(HOPCOVERAGEPART_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HOPDwellingMods field.
   */
  public void setHOPDwellingMods(entity.HOPDwellingMod[] value) {
    __getInternalInterface().setFieldValue(HOPDWELLINGMODS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HeatingUpgradeDate field.
   */
  public void setHeatingUpgradeDate(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(HEATINGUPGRADEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
   * Sets the value of the InsuredUnits field.
   */
  public void setInsuredUnits(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INSUREDUNITS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the KnownWaterLeakage field.
   */
  public void setKnownWaterLeakage(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(KNOWNWATERLEAKAGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the KnownWaterLeakageDescription field.
   */
  public void setKnownWaterLeakageDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(KNOWNWATERLEAKAGEDESCRIPTION_PROP.get(), value);
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
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value) {
    __getInternalInterface().setFieldValue(LOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NearCommercial field.
   */
  public void setNearCommercial(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(NEARCOMMERCIAL_PROP.get(), value);
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
   * Sets the value of the NumberOfFireExtinguishers field.
   */
  public void setNumberOfFireExtinguishers(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMBEROFFIREEXTINGUISHERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Occupancy field.
   */
  public void setOccupancy(typekey.DwellingOccupancyType value) {
    __getInternalInterface().setFieldValue(OCCUPANCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PlumbingType field.
   */
  public void setPlumbingType(typekey.PlumbingType value) {
    __getInternalInterface().setFieldValue(PLUMBINGTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PlumbingTypeDescription field.
   */
  public void setPlumbingTypeDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PLUMBINGTYPEDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PlumbingUpgradeDate field.
   */
  public void setPlumbingUpgradeDate(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(PLUMBINGUPGRADEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreferredCoverageCurrency field.
   */
  public void setPreferredCoverageCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryHeatingDescription field.
   */
  public void setPrimaryHeatingDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYHEATINGDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryHeatingFuelLineLocation field.
   */
  public void setPrimaryHeatingFuelLineLocation(typekey.FuelLineLocationType value) {
    __getInternalInterface().setFieldValue(PRIMARYHEATINGFUELLINELOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryHeatingFuelTankLocation field.
   */
  public void setPrimaryHeatingFuelTankLocation(typekey.FuelTankLocationType value) {
    __getInternalInterface().setFieldValue(PRIMARYHEATINGFUELTANKLOCATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryHeatingType field.
   */
  public void setPrimaryHeatingType(typekey.HeatingType value) {
    __getInternalInterface().setFieldValue(PRIMARYHEATINGTYPE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the ReferenceDateInternal field.
   */
  public void setReferenceDateInternal(java.util.Date value) {
    __getInternalInterface().setFieldValue(REFERENCEDATEINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReplacementCost field.
   */
  public void setReplacementCost(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(REPLACEMENTCOST_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReplacementCost_amt field.
   */
  private void setReplacementCost_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(REPLACEMENTCOST_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReplacementCost_cur field.
   */
  private void setReplacementCost_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(REPLACEMENTCOST_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ResidenceType field.
   */
  public void setResidenceType(typekey.ResidenceType value) {
    __getInternalInterface().setFieldValue(RESIDENCETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoofType field.
   */
  public void setRoofType(typekey.HOPRoofType value) {
    __getInternalInterface().setFieldValue(ROOFTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoofTypeDescription field.
   */
  public void setRoofTypeDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ROOFTYPEDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoofingUpgradeDate field.
   */
  public void setRoofingUpgradeDate(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(ROOFINGUPGRADEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoomerBoardersNumber field.
   */
  public void setRoomerBoardersNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(ROOMERBOARDERSNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SecondaryHeatingType field.
   */
  public void setSecondaryHeatingType(typekey.HeatingType value) {
    __getInternalInterface().setFieldValue(SECONDARYHEATINGTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SmokeAlarm field.
   */
  public void setSmokeAlarm(typekey.SmokeAlarms value) {
    __getInternalInterface().setFieldValue(SMOKEALARM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SprinklerSystemType field.
   */
  public void setSprinklerSystemType(typekey.SprinklerSystemType value) {
    __getInternalInterface().setFieldValue(SPRINKLERSYSTEMTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StoriesNumber field.
   */
  public void setStoriesNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(STORIESNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SwimmingPool field.
   */
  public void setSwimmingPool(entity.HOPSwimmingPool value) {
    __getInternalInterface().setFieldValue(SWIMMINGPOOL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SwimmingPoolArray field.
   */
  private void setSwimmingPoolArray(entity.HOPSwimmingPool[] value) {
    __getInternalInterface().setFieldValue(SWIMMINGPOOLARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TrampolineExists field.
   */
  public void setTrampolineExists(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(TRAMPOLINEEXISTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TrampolineSafetyNet field.
   */
  public void setTrampolineSafetyNet(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(TRAMPOLINESAFETYNET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UnitsNumber field.
   */
  public void setUnitsNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(UNITSNUMBER_PROP.get(), value);
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
   * Sets the value of the VisibleToNeighbors field.
   */
  public void setVisibleToNeighbors(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(VISIBLETONEIGHBORS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the WiringType field.
   */
  public void setWiringType(typekey.WiringType value) {
    __getInternalInterface().setFieldValue(WIRINGTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the YearBuilt field.
   */
  public void setYearBuilt(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(YEARBUILT_PROP.get(), value);
  }
  
  public entity.HOPDwelling split(java.util.Date splitDate) {
    return (entity.HOPDwelling)splitUntyped(splitDate);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.HOPDwellingInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.HOPDwelling.this.__getDelegateManager();
    }
    
    public entity.AddlInterestDetail addAdditionalInterestDetail(entity.Contact contact) {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).addAdditionalInterestDetail(contact);
    }
    
    public entity.AddlInterestDetail addAdditionalInterestDetail(entity.PolicyAddlInterest policyAdditionalInterest) {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).addAdditionalInterestDetail(policyAdditionalInterest);
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
    
    public void addToAdditionalInterestDetails(entity.AddlInterestDetail interestDetail) {
      ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).addToAdditionalInterestDetails(interestDetail);
    }
    
    /**
     * Adds the given element to the AdditionalInterests array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAdditionalInterests(entity.HOPDwellAddlInterest element) {
      __getInternalInterface().addArrayElement(ADDITIONALINTERESTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Conditions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToConditions(entity.HOPDwellingCond element) {
      __getInternalInterface().addArrayElement(CONDITIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCoverages(entity.HOPDwellingCov element) {
      __getInternalInterface().addArrayElement(COVERAGES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the DwellingAnimals array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDwellingAnimals(entity.DwellingAnimal element) {
      __getInternalInterface().addArrayElement(DWELLINGANIMALS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the DwellingHazards array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDwellingHazards(entity.DwellingHazard element) {
      __getInternalInterface().addArrayElement(DWELLINGHAZARDS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Exclusions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToExclusions(entity.HOPDwellingExcl element) {
      __getInternalInterface().addArrayElement(EXCLUSIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the HOPDwellingMods array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToHOPDwellingMods(entity.HOPDwellingMod element) {
      __getInternalInterface().addArrayElement(HOPDWELLINGMODS_PROP.get(), element);
    }
    
    /**
     * Adds the given Modifier to the Modifiable.
     * @param element 
     */
    public void addToModifiers(entity.Modifier element) {
      ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).addToModifiers(element);
    }
    
    /**
     * Adds the given element to the SwimmingPoolArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToSwimmingPoolArray(entity.HOPSwimmingPool element) {
      __getInternalInterface().addArrayElement(SWIMMINGPOOLARRAY_PROP.get(), element);
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
    
    public entity.AddlInterestDetail createAndAddAdditionalInterestDetail(typekey.ContactType contactType) {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).createAndAddAdditionalInterestDetail(contactType);
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
    
    public java.util.List<entity.EffDated> findMatchesInPeriodUntyped(entity.PolicyPeriod period, boolean excludeSameFixedID) {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).findMatchesInPeriodUntyped(period, excludeSameFixedID);
    }
    
    public java.lang.Object genKey() {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).genKey();
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
    
    public entity.AccountContact[] getAdditionalInterestCandidates() {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getAdditionalInterestCandidates();
    }
    
    public entity.AddlInterestDetail[] getAdditionalInterestDetails() {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getAdditionalInterestDetails();
    }
    
    public entity.AddlInterestDetail[] getAdditionalInterestDetailsForPolicyAddlInterest(entity.PolicyAddlInterest policyAdditionalInterest) {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getAdditionalInterestDetailsForPolicyAddlInterest(policyAdditionalInterest);
    }
    
    public entity.AccountContact[] getAdditionalInterestOtherCandidates() {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getAdditionalInterestOtherCandidates();
    }
    
    /**
     * Gets the value of the AdditionalInterests field.
     * Third parties with an additional interest in the Dwelling
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwellAddlInterest[] getAdditionalInterests() {
      return (entity.HOPDwellAddlInterest[])__getInternalInterface().getFieldValue(ADDITIONALINTERESTS_PROP.get());
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
    public entity.HOPDwelling getBasedOnValue() {
      return (entity.HOPDwelling)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
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
     * Gets the value of the BurglarAlarmType field.
     * Burglar Alarm Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BurglarAlarmType getBurglarAlarmType() {
      return (typekey.BurglarAlarmType)__getInternalInterface().getFieldValue(BURGLARALARMTYPE_PROP.get());
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
     * Conditions directly attached to the Dwelling
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwellingCond[] getConditions() {
      return (entity.HOPDwellingCond[])__getInternalInterface().getFieldValue(CONDITIONS_PROP.get());
    }
    
    public entity.PolicyCondition[] getConditionsFromCoverable() {
      return ((gw.api.domain.CoverableAbstractDomainMethods)__getDelegateManager().getImplementation("gw.api.domain.CoverableAbstractDomainMethods")).getConditionsFromCoverable();
    }
    
    /**
     * Gets the value of the ConstructionType field.
     * Dwelling Construction Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.HOPConstructionType getConstructionType() {
      return (typekey.HOPConstructionType)__getInternalInterface().getFieldValue(CONSTRUCTIONTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the ConstructionTypeDescription field.
     * Description of construction for type Other
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getConstructionTypeDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONSTRUCTIONTYPEDESCRIPTION_PROP.get());
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
    
    /**
     * Gets the value of the CoverageForm field.
     * The HO coverage form for this dwelling
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.HOPCoverageForm getCoverageForm() {
      return (typekey.HOPCoverageForm)__getInternalInterface().getFieldValue(COVERAGEFORM_PROP.get());
    }
    
    public gw.api.productmodel.CoveragePattern[] getCoverageTypesForCoverable() {
      return ((com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.impl.CoverableInternalMethods")).getCoverageTypesForCoverable();
    }
    
    /**
     * Gets the value of the Coverages field.
     * Coverages directly attached to the Dwelling
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwellingCov[] getCoverages() {
      return (entity.HOPDwellingCov[])__getInternalInterface().getFieldValue(COVERAGES_PROP.get());
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
     * Gets the value of the DistanceToFireHydrant field.
     * Distance to Fire Hydrant
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getDistanceToFireHydrant() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(DISTANCETOFIREHYDRANT_PROP.get());
    }
    
    /**
     * Gets the value of the DistanceToFireStation field.
     * Distance to Fire Station
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getDistanceToFireStation() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(DISTANCETOFIRESTATION_PROP.get());
    }
    
    /**
     * Gets the value of the DwellingAnimals field.
     * Animals in the dwelling premises
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.DwellingAnimal[] getDwellingAnimals() {
      return (entity.DwellingAnimal[])__getInternalInterface().getFieldValue(DWELLINGANIMALS_PROP.get());
    }
    
    /**
     * Gets the value of the DwellingHazards field.
     * Hazards in the dwelling premises
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.DwellingHazard[] getDwellingHazards() {
      return (entity.DwellingHazard[])__getInternalInterface().getFieldValue(DWELLINGHAZARDS_PROP.get());
    }
    
    /**
     * Gets the value of the DwellingLocation field.
     * Dwelling Location Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DwellingLocationType getDwellingLocation() {
      return (typekey.DwellingLocationType)__getInternalInterface().getFieldValue(DWELLINGLOCATION_PROP.get());
    }
    
    /**
     * Gets the value of the DwellingUsage field.
     * Dwelling Usage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DwellingUsage getDwellingUsage() {
      return (typekey.DwellingUsage)__getInternalInterface().getFieldValue(DWELLINGUSAGE_PROP.get());
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
     * Gets the value of the ElectricalSystemUpgradeDate field.
     * Date of Electrical System Upgrade
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getElectricalSystemUpgradeDate() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(ELECTRICALSYSTEMUPGRADEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ElectricalType field.
     * Electrical Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BreakerType getElectricalType() {
      return (typekey.BreakerType)__getInternalInterface().getFieldValue(ELECTRICALTYPE_PROP.get());
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
     * Exclusions directly attached to the Dwelling
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwellingExcl[] getExclusions() {
      return (entity.HOPDwellingExcl[])__getInternalInterface().getFieldValue(EXCLUSIONS_PROP.get());
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
     * Gets the value of the FireAlarmType field.
     * Fire alarm type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FireAlarmType getFireAlarmType() {
      return (typekey.FireAlarmType)__getInternalInterface().getFieldValue(FIREALARMTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the FireplaceOrWoodStovesNumber field.
     * Number of woodstoves or fire places
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getFireplaceOrWoodStovesNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(FIREPLACEORWOODSTOVESNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the Fixed field.
     * Unique ID for this 'object' across all branches and periods
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwelling getFixed() {
      return (entity.HOPDwelling)__getInternalInterface().getFieldValue(FIXED_PROP.get());
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
     * Gets the value of the Foundation field.
     * Foundation Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FoundationType getFoundation() {
      return (typekey.FoundationType)__getInternalInterface().getFieldValue(FOUNDATION_PROP.get());
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
     * Gets the value of the GarageType field.
     * Garage type in dwelling
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.GarageType getGarageType() {
      return (typekey.GarageType)__getInternalInterface().getFieldValue(GARAGETYPE_PROP.get());
    }
    
    /**
     * Gets the value of the HOPCoveragePart field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPCoveragePart getHOPCoveragePart() {
      return (entity.HOPCoveragePart)__getInternalInterface().getFieldValue(HOPCOVERAGEPART_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getHOPCoveragePartID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(HOPCOVERAGEPART_PROP.get());
    }
    
    /**
     * Gets the value of the HOPDwellingMods field.
     * Modifiers directly attached to the Dwelling
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPDwellingMod[] getHOPDwellingMods() {
      return (entity.HOPDwellingMod[])__getInternalInterface().getFieldValue(HOPDWELLINGMODS_PROP.get());
    }
    
    /**
     * Gets the value of the HeatingUpgradeDate field.
     * Date of Heating Upgrade
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getHeatingUpgradeDate() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(HEATINGUPGRADEDATE_PROP.get());
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
     * Gets the value of the InsuredUnits field.
     * Number of units to be insured
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getInsuredUnits() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INSUREDUNITS_PROP.get());
    }
    
    /**
     * Gets the value of the KnownWaterLeakageDescription field.
     * Description of water leakage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getKnownWaterLeakageDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(KNOWNWATERLEAKAGEDESCRIPTION_PROP.get());
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
     * Gets the value of the Location field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyLocation getLocation() {
      return (entity.PolicyLocation)__getInternalInterface().getFieldValue(LOCATION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLocationID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LOCATION_PROP.get());
    }
    
    public entity.EffDatedBase getMaster() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getMaster();
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
     * Gets the value of the NumberOfFireExtinguishers field.
     * How many fire extinguishers are on premises
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumberOfFireExtinguishers() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMBEROFFIREEXTINGUISHERS_PROP.get());
    }
    
    /**
     * Gets the value of the Occupancy field.
     * How the dwelling is being occupied
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DwellingOccupancyType getOccupancy() {
      return (typekey.DwellingOccupancyType)__getInternalInterface().getFieldValue(OCCUPANCY_PROP.get());
    }
    
    public java.lang.String getOwnerDisplayName() {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getOwnerDisplayName();
    }
    
    /**
     * Gets the value of the PlumbingType field.
     * Plumbing Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PlumbingType getPlumbingType() {
      return (typekey.PlumbingType)__getInternalInterface().getFieldValue(PLUMBINGTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the PlumbingTypeDescription field.
     * Description of plumbing for type Other
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPlumbingTypeDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PLUMBINGTYPEDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the PlumbingUpgradeDate field.
     * Date of Plumbing Upgrade
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getPlumbingUpgradeDate() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(PLUMBINGUPGRADEDATE_PROP.get());
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
     * Gets the Preferred Coverage Currency for coverages associated with this coverable and initializes the value if null.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getPreferredCoverageCurrency() {
      return ((com.guidewire.pc.domain.coverage.CoverablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.coverage.CoverablePublicMethods")).getPreferredCoverageCurrency();
    }
    
    /**
     * Gets the value of the PrimaryHeatingDescription field.
     * Description of primary heating for type Other
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPrimaryHeatingDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYHEATINGDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryHeatingFuelLineLocation field.
     * Location of fuel line for Oil based heating
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FuelLineLocationType getPrimaryHeatingFuelLineLocation() {
      return (typekey.FuelLineLocationType)__getInternalInterface().getFieldValue(PRIMARYHEATINGFUELLINELOCATION_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryHeatingFuelTankLocation field.
     * Location of fuel tank for Oil based heating
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FuelTankLocationType getPrimaryHeatingFuelTankLocation() {
      return (typekey.FuelTankLocationType)__getInternalInterface().getFieldValue(PRIMARYHEATINGFUELTANKLOCATION_PROP.get());
    }
    
    /**
     * Gets the value of the PrimaryHeatingType field.
     * Dwelling Heating Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.HeatingType getPrimaryHeatingType() {
      return (typekey.HeatingType)__getInternalInterface().getFieldValue(PRIMARYHEATINGTYPE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
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
     * Gets the value of the ReplacementCost field.
     * Replacement Cost
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getReplacementCost() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(REPLACEMENTCOST_PROP.get());
    }
    
    /**
     * Gets the value of the ReplacementCost_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getReplacementCost_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(REPLACEMENTCOST_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the ReplacementCost_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getReplacementCost_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(REPLACEMENTCOST_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the ResidenceType field.
     * Residence Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ResidenceType getResidenceType() {
      return (typekey.ResidenceType)__getInternalInterface().getFieldValue(RESIDENCETYPE_PROP.get());
    }
    
    /**
     * Gets the value of the RoofType field.
     * Roof Material Classification
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.HOPRoofType getRoofType() {
      return (typekey.HOPRoofType)__getInternalInterface().getFieldValue(ROOFTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the RoofTypeDescription field.
     * Description of Roof Type for type Other
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getRoofTypeDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ROOFTYPEDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the RoofingUpgradeDate field.
     * Date of Roofing Upgrade
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getRoofingUpgradeDate() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(ROOFINGUPGRADEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the RoomerBoardersNumber field.
     * Number of roomers or boarders
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getRoomerBoardersNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(ROOMERBOARDERSNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the SecondaryHeatingType field.
     *  Secondary Heating Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.HeatingType getSecondaryHeatingType() {
      return (typekey.HeatingType)__getInternalInterface().getFieldValue(SECONDARYHEATINGTYPE_PROP.get());
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
     * Gets the value of the SmokeAlarm field.
     * Smoke Alarms on Premises
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.SmokeAlarms getSmokeAlarm() {
      return (typekey.SmokeAlarms)__getInternalInterface().getFieldValue(SMOKEALARM_PROP.get());
    }
    
    /**
     * Gets the value of the SprinklerSystemType field.
     * Sprinkler System Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.SprinklerSystemType getSprinklerSystemType() {
      return (typekey.SprinklerSystemType)__getInternalInterface().getFieldValue(SPRINKLERSYSTEMTYPE_PROP.get());
    }
    
    /**
     * 
     * @return the Jurisdiction of the delegating entity
     */
    public typekey.Jurisdiction getState() {
      return ((gw.api.domain.CoverableAdapter)__getDelegateManager().getImplementation("gw.api.domain.CoverableAdapter")).getState();
    }
    
    /**
     * Gets the value of the StoriesNumber field.
     *  Number of stories in the dwelling
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getStoriesNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(STORIESNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the SwimmingPool field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPSwimmingPool getSwimmingPool() {
      return (entity.HOPSwimmingPool)__getInternalInterface().getFieldValue(SWIMMINGPOOL_PROP.get());
    }
    
    /**
     * Gets the value of the SwimmingPoolArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.HOPSwimmingPool[] getSwimmingPoolArray() {
      return (entity.HOPSwimmingPool[])__getInternalInterface().getFieldValue(SWIMMINGPOOLARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getSwimmingPoolID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(SWIMMINGPOOL_PROP.get());
    }
    
    public java.util.Date getTraversalDate() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).getTraversalDate();
    }
    
    public java.lang.String getTypeLabel() {
      return ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).getTypeLabel();
    }
    
    /**
     * Gets the value of the UnitsNumber field.
     *  Number of units between firewall
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getUnitsNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(UNITSNUMBER_PROP.get());
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
     * Gets the value of the WiringType field.
     * Electrical Wiring Type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.WiringType getWiringType() {
      return (typekey.WiringType)__getInternalInterface().getFieldValue(WIRINGTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the YearBuilt field.
     * Year Built
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getYearBuilt() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(YEARBUILT_PROP.get());
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
     * Gets the value of the Deadbolts field.
     * Do all the doors have Deadbolts
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDeadbolts() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEADBOLTS_PROP.get());
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
    
    /**
     * Gets the value of the FloodingHazard field.
     * Flooding or landslide hazard?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isFloodingHazard() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(FLOODINGHAZARD_PROP.get());
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
     * Gets the value of the KnownWaterLeakage field.
     * Any water leakage
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isKnownWaterLeakage() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(KNOWNWATERLEAKAGE_PROP.get());
    }
    
    public java.lang.Boolean isLocked() {
      return ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).isLocked();
    }
    
    public boolean isLogicalMatchUntyped(entity.KeyableBean bean) {
      return ((gw.api.logicalmatch.EffDatedLogicalMatcher)__getDelegateManager().getImplementation("gw.api.logicalmatch.EffDatedLogicalMatcher")).isLogicalMatchUntyped(bean);
    }
    
    /**
     * Gets the value of the NearCommercial field.
     * Property within 300 ft of commercial or non-residential property?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isNearCommercial() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(NEARCOMMERCIAL_PROP.get());
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
    
    /**
     * Gets the value of the TrampolineExists field.
     * Trampoline exists on property?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isTrampolineExists() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(TRAMPOLINEEXISTS_PROP.get());
    }
    
    /**
     * Gets the value of the TrampolineSafetyNet field.
     * Is there a safety net?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isTrampolineSafetyNet() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(TRAMPOLINESAFETYNET_PROP.get());
    }
    
    /**
     * Gets the value of the VisibleToNeighbors field.
     * Is the dwelling visible to neighbors
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isVisibleToNeighbors() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(VISIBLETONEIGHBORS_PROP.get());
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
    
    public void removeFromAdditionalInterestDetails(entity.AddlInterestDetail interestDetail) {
      ((gw.api.contact.AdditionalInterestContainer)__getDelegateManager().getImplementation("gw.api.contact.AdditionalInterestContainer")).removeFromAdditionalInterestDetails(interestDetail);
    }
    
    /**
     * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
     */
    public void removeFromAdditionalInterests(entity.HOPDwellAddlInterest element) {
      __getInternalInterface().removeArrayElement(ADDITIONALINTERESTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AdditionalInterests array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAdditionalInterests(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ADDITIONALINTERESTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Conditions array. This is achieved by marking the element for removal.
     */
    public void removeFromConditions(entity.HOPDwellingCond element) {
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
    public void removeFromCoverages(entity.HOPDwellingCov element) {
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
     * Removes the given element from the DwellingAnimals array. This is achieved by marking the element for removal.
     */
    public void removeFromDwellingAnimals(entity.DwellingAnimal element) {
      __getInternalInterface().removeArrayElement(DWELLINGANIMALS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the DwellingAnimals array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDwellingAnimals(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DWELLINGANIMALS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the DwellingHazards array. This is achieved by marking the element for removal.
     */
    public void removeFromDwellingHazards(entity.DwellingHazard element) {
      __getInternalInterface().removeArrayElement(DWELLINGHAZARDS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the DwellingHazards array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDwellingHazards(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DWELLINGHAZARDS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Exclusions array. This is achieved by marking the element for removal.
     */
    public void removeFromExclusions(entity.HOPDwellingExcl element) {
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
     * Removes the given element from the HOPDwellingMods array. This is achieved by marking the element for removal.
     */
    public void removeFromHOPDwellingMods(entity.HOPDwellingMod element) {
      __getInternalInterface().removeArrayElement(HOPDWELLINGMODS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the HOPDwellingMods array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromHOPDwellingMods(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(HOPDWELLINGMODS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given Modifier from the Modifiable.
     * @param element 
     */
    public void removeFromModifiers(entity.Modifier element) {
      ((gw.api.domain.ModifiableAdapter)__getDelegateManager().getImplementation("gw.api.domain.ModifiableAdapter")).removeFromModifiers(element);
    }
    
    /**
     * Removes the given element from the SwimmingPoolArray array. This is achieved by marking the element for removal.
     */
    public void removeFromSwimmingPoolArray(entity.HOPSwimmingPool element) {
      __getInternalInterface().removeArrayElement(SWIMMINGPOOLARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the SwimmingPoolArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromSwimmingPoolArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SWIMMINGPOOLARRAY_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AdditionalInterests field.
     */
    public void setAdditionalInterests(entity.HOPDwellAddlInterest[] value) {
      __getInternalInterface().setFieldValue(ADDITIONALINTERESTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    public void setBasedOnId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setBasedOnId(id);
    }
    
    /**
     * Sets the value of the BasedOnValue field.
     */
    public void setBasedOnValue(entity.HOPDwelling value) {
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
     * Sets the value of the BurglarAlarmType field.
     */
    public void setBurglarAlarmType(typekey.BurglarAlarmType value) {
      __getInternalInterface().setFieldValue(BURGLARALARMTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ChangeType field.
     */
    public void setChangeType(typekey.EffDatedChangeType value) {
      __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
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
    public void setConditions(entity.HOPDwellingCond[] value) {
      __getInternalInterface().setFieldValue(CONDITIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ConstructionType field.
     */
    public void setConstructionType(typekey.HOPConstructionType value) {
      __getInternalInterface().setFieldValue(CONSTRUCTIONTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ConstructionTypeDescription field.
     */
    public void setConstructionTypeDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONSTRUCTIONTYPEDESCRIPTION_PROP.get(), value);
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
     * Sets the value of the CoverageForm field.
     */
    public void setCoverageForm(typekey.HOPCoverageForm value) {
      __getInternalInterface().setFieldValue(COVERAGEFORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Coverages field.
     */
    public void setCoverages(entity.HOPDwellingCov[] value) {
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
     * Sets the value of the Deadbolts field.
     */
    public void setDeadbolts(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DEADBOLTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DistanceToFireHydrant field.
     */
    public void setDistanceToFireHydrant(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(DISTANCETOFIREHYDRANT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DistanceToFireStation field.
     */
    public void setDistanceToFireStation(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(DISTANCETOFIRESTATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DwellingAnimals field.
     */
    public void setDwellingAnimals(entity.DwellingAnimal[] value) {
      __getInternalInterface().setFieldValue(DWELLINGANIMALS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DwellingHazards field.
     */
    public void setDwellingHazards(entity.DwellingHazard[] value) {
      __getInternalInterface().setFieldValue(DWELLINGHAZARDS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DwellingLocation field.
     */
    public void setDwellingLocation(typekey.DwellingLocationType value) {
      __getInternalInterface().setFieldValue(DWELLINGLOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DwellingUsage field.
     */
    public void setDwellingUsage(typekey.DwellingUsage value) {
      __getInternalInterface().setFieldValue(DWELLINGUSAGE_PROP.get(), value);
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
     * Sets the value of the ElectricalSystemUpgradeDate field.
     */
    public void setElectricalSystemUpgradeDate(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(ELECTRICALSYSTEMUPGRADEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ElectricalType field.
     */
    public void setElectricalType(typekey.BreakerType value) {
      __getInternalInterface().setFieldValue(ELECTRICALTYPE_PROP.get(), value);
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
    public void setExclusions(entity.HOPDwellingExcl[] value) {
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
     * Sets the value of the FireAlarmType field.
     */
    public void setFireAlarmType(typekey.FireAlarmType value) {
      __getInternalInterface().setFieldValue(FIREALARMTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FireplaceOrWoodStovesNumber field.
     */
    public void setFireplaceOrWoodStovesNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(FIREPLACEORWOODSTOVESNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fixed field.
     */
    public void setFixed(entity.HOPDwelling value) {
      __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
    }
    
    public void setFixedID(gw.pl.persistence.core.Key value) {
      setFieldValue(FIXED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FloodingHazard field.
     */
    public void setFloodingHazard(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(FLOODINGHAZARD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Foundation field.
     */
    public void setFoundation(typekey.FoundationType value) {
      __getInternalInterface().setFieldValue(FOUNDATION_PROP.get(), value);
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
     * Sets the value of the GarageType field.
     */
    public void setGarageType(typekey.GarageType value) {
      __getInternalInterface().setFieldValue(GARAGETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HOPCoveragePart field.
     */
    public void setHOPCoveragePart(entity.HOPCoveragePart value) {
      __getInternalInterface().setFieldValue(HOPCOVERAGEPART_PROP.get(), value);
    }
    
    public void setHOPCoveragePartID(gw.pl.persistence.core.Key value) {
      setFieldValue(HOPCOVERAGEPART_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HOPDwellingMods field.
     */
    public void setHOPDwellingMods(entity.HOPDwellingMod[] value) {
      __getInternalInterface().setFieldValue(HOPDWELLINGMODS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HeatingUpgradeDate field.
     */
    public void setHeatingUpgradeDate(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(HEATINGUPGRADEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
     * Sets the value of the InsuredUnits field.
     */
    public void setInsuredUnits(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INSUREDUNITS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the KnownWaterLeakage field.
     */
    public void setKnownWaterLeakage(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(KNOWNWATERLEAKAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the KnownWaterLeakageDescription field.
     */
    public void setKnownWaterLeakageDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(KNOWNWATERLEAKAGEDESCRIPTION_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
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
     * Sets the value of the Location field.
     */
    public void setLocation(entity.PolicyLocation value) {
      __getInternalInterface().setFieldValue(LOCATION_PROP.get(), value);
    }
    
    public void setLocationID(gw.pl.persistence.core.Key value) {
      setFieldValue(LOCATION_PROP.get(), value);
    }
    
    public void setMaster(entity.EffDatedBase master) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setMaster(master);
    }
    
    /**
     * Sets the value of the NearCommercial field.
     */
    public void setNearCommercial(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(NEARCOMMERCIAL_PROP.get(), value);
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
     * Sets the value of the NumberOfFireExtinguishers field.
     */
    public void setNumberOfFireExtinguishers(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMBEROFFIREEXTINGUISHERS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Occupancy field.
     */
    public void setOccupancy(typekey.DwellingOccupancyType value) {
      __getInternalInterface().setFieldValue(OCCUPANCY_PROP.get(), value);
    }
    
    public void setPeriodWindow(com.guidewire.pl.system.util.DateRange oldPeriodRange) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedInternalMethods")).setPeriodWindow(oldPeriodRange);
    }
    
    /**
     * Sets the value of the PlumbingType field.
     */
    public void setPlumbingType(typekey.PlumbingType value) {
      __getInternalInterface().setFieldValue(PLUMBINGTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PlumbingTypeDescription field.
     */
    public void setPlumbingTypeDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PLUMBINGTYPEDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PlumbingUpgradeDate field.
     */
    public void setPlumbingUpgradeDate(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(PLUMBINGUPGRADEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreferredCoverageCurrency field.
     */
    public void setPreferredCoverageCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(PREFERREDCOVERAGECURRENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryHeatingDescription field.
     */
    public void setPrimaryHeatingDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRIMARYHEATINGDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryHeatingFuelLineLocation field.
     */
    public void setPrimaryHeatingFuelLineLocation(typekey.FuelLineLocationType value) {
      __getInternalInterface().setFieldValue(PRIMARYHEATINGFUELLINELOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryHeatingFuelTankLocation field.
     */
    public void setPrimaryHeatingFuelTankLocation(typekey.FuelTankLocationType value) {
      __getInternalInterface().setFieldValue(PRIMARYHEATINGFUELTANKLOCATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PrimaryHeatingType field.
     */
    public void setPrimaryHeatingType(typekey.HeatingType value) {
      __getInternalInterface().setFieldValue(PRIMARYHEATINGTYPE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the ReferenceDateInternal field.
     */
    public void setReferenceDateInternal(java.util.Date value) {
      __getInternalInterface().setFieldValue(REFERENCEDATEINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ReplacementCost field.
     */
    public void setReplacementCost(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(REPLACEMENTCOST_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ReplacementCost_amt field.
     */
    public void setReplacementCost_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(REPLACEMENTCOST_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ReplacementCost_cur field.
     */
    public void setReplacementCost_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(REPLACEMENTCOST_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ResidenceType field.
     */
    public void setResidenceType(typekey.ResidenceType value) {
      __getInternalInterface().setFieldValue(RESIDENCETYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RoofType field.
     */
    public void setRoofType(typekey.HOPRoofType value) {
      __getInternalInterface().setFieldValue(ROOFTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RoofTypeDescription field.
     */
    public void setRoofTypeDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ROOFTYPEDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RoofingUpgradeDate field.
     */
    public void setRoofingUpgradeDate(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(ROOFINGUPGRADEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RoomerBoardersNumber field.
     */
    public void setRoomerBoardersNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(ROOMERBOARDERSNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SecondaryHeatingType field.
     */
    public void setSecondaryHeatingType(typekey.HeatingType value) {
      __getInternalInterface().setFieldValue(SECONDARYHEATINGTYPE_PROP.get(), value);
    }
    
    public void setSliceDate(java.util.Date sliceDate) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSliceDate(sliceDate);
    }
    
    public void setSlicesMap(java.util.Map<java.util.Date, entity.EffDatedBase> slices) {
      ((com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.impl.EffDatedBaseInternalMethods")).setSlicesMap(slices);
    }
    
    /**
     * Sets the value of the SmokeAlarm field.
     */
    public void setSmokeAlarm(typekey.SmokeAlarms value) {
      __getInternalInterface().setFieldValue(SMOKEALARM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SprinklerSystemType field.
     */
    public void setSprinklerSystemType(typekey.SprinklerSystemType value) {
      __getInternalInterface().setFieldValue(SPRINKLERSYSTEMTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StoriesNumber field.
     */
    public void setStoriesNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(STORIESNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SwimmingPool field.
     */
    public void setSwimmingPool(entity.HOPSwimmingPool value) {
      __getInternalInterface().setFieldValue(SWIMMINGPOOL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SwimmingPoolArray field.
     */
    public void setSwimmingPoolArray(entity.HOPSwimmingPool[] value) {
      __getInternalInterface().setFieldValue(SWIMMINGPOOLARRAY_PROP.get(), value);
    }
    
    public void setSwimmingPoolID(gw.pl.persistence.core.Key value) {
      setFieldValue(SWIMMINGPOOL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TrampolineExists field.
     */
    public void setTrampolineExists(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(TRAMPOLINEEXISTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TrampolineSafetyNet field.
     */
    public void setTrampolineSafetyNet(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(TRAMPOLINESAFETYNET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UnitsNumber field.
     */
    public void setUnitsNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(UNITSNUMBER_PROP.get(), value);
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
     * Sets the value of the VisibleToNeighbors field.
     */
    public void setVisibleToNeighbors(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(VISIBLETONEIGHBORS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the WiringType field.
     */
    public void setWiringType(typekey.WiringType value) {
      __getInternalInterface().setFieldValue(WIRINGTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the YearBuilt field.
     */
    public void setYearBuilt(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(YEARBUILT_PROP.get(), value);
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
    config.put("gw.api.contact.AdditionalInterestContainer", "gw.lob.hop.HOPDwellingAdditionalInterestContainerCoverableModifiableAdapter");
    config.put("gw.api.domain.CoverableAbstractDomainMethods", "gw.lob.hop.HOPDwellingAdditionalInterestContainerCoverableModifiableAdapter");
    config.put("gw.api.domain.CoverableAdapter", "gw.lob.hop.HOPDwellingAdditionalInterestContainerCoverableModifiableAdapter");
    config.put("gw.api.domain.ModifiableAdapter", "gw.lob.hop.HOPDwellingAdditionalInterestContainerCoverableModifiableAdapter");
    config.put("gw.api.logicalmatch.EffDatedLogicalMatcher", "gw.lob.hop.HOPDwellingMatcher");
    config.put("gw.api.logicalmatch.LogicalMatcher", "gw.lob.hop.HOPDwellingMatcher");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.HOPDwelling.class, config);
    com.guidewire._generated.entity.HOPDwellingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.HOPDwelling, com.guidewire._generated.entity.HOPDwellingInternal>() {
      public java.lang.Object getImplementation(entity.HOPDwelling bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.HOPDwellingInternal getInternalInterface(entity.HOPDwelling bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.HOPDwelling newEmptyInstance() {
        return new entity.HOPDwelling((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}