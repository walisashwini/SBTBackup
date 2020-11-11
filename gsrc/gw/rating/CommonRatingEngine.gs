package gw.rating

uses entity.DefaultRateFactorRow
uses entity.PolicyLine
uses gw.api.locale.DisplayKey
uses gw.api.rating.RatingException
uses gw.job.RenewalProcess
uses gw.lang.reflect.TypeSystem
uses gw.lang.reflect.interval.DateInterval
uses gw.lob.common.costdata.CostDataMappingSupport
uses gw.lob.common.parameters.Parameters
uses gw.plugin.Plugins
uses gw.plugin.rateflow.IRateRoutinePlugin
uses gw.rating.worksheet.domain.Worksheet
uses gw.rating.worksheet.domain.WorksheetEntryContainer
uses org.slf4j.LoggerFactory

@Export
abstract class CommonRatingEngine<T extends PolicyLine> extends AbstractRatingEngine<T> {
  private static final var LOG = LoggerFactory.getLogger(CommonRatingEngine.Type)
  private static final var DTO_VERSION_TABLE_NAME = "DtoVersion"
  private static final var POLICY_INDICATOR = "CoverageOnPolicyIndicator"
  protected var _lineVersion: T
  var _lineModelObject: LineModelObject as LineModelObj
  var _rateBook: RateBook as RateBook
  var _rateRoutineParameterMap: Map<CalcRoutineParamName, Object> as RateRoutineParameterMap
  protected var _ratingLevel: RateBookStatus
  var _worksheetEntries: Map<EffDated, Worksheet> as WorksheetEntries
  construct(line: T) {
    this(line, RateBookStatus.TC_ACTIVE)
  }

  construct(line: T, minimumRatingLevel: RateBookStatus) {
    super(line)
    _ratingLevel = minimumRatingLevel
  }

  override protected function existingSliceModeCosts(): Iterable<Cost> {
    return PolicyLine.Costs
  }

  override protected function rateSlice(lineVersion: T) {
    _lineVersion = lineVersion
    _worksheetEntries = {}
    assertSliceMode(_lineVersion)
    if (!_lineVersion.Branch.isCanceledSlice()) {
      for (ratingParameters in createRatingParameters(_lineVersion)) {

        //Cost data cache has to be initialized at least once per slice so that cost datas aren't reused for multiple
        //slices which results in costs being inadvertantly merged
        var costDataCache = new CostDataCache(RateCache, NumDaysInCoverageRatedTerm)

        var jurisdiction = Jurisdiction.get(ratingParameters.getParam(Parameters.JURISDICTION_PARAMETER_NAME))
        _rateBook = getRateBook(_lineVersion, jurisdiction)
        checkRateBookJurisdiction(_rateBook, jurisdiction)

        var dtoVersion = getDtoVersion(_rateBook)
        var dtoFQN = getDtoFQN(_rateBook)
        _lineModelObject = getLineModel(jurisdiction, dtoVersion, dtoFQN, ratingParameters)

        _rateRoutineParameterMap = {
            typekey.CalcRoutineParamName.TC_POLICYLINE  -> PolicyLine,
            typekey.CalcRoutineParamName.TC_RATINGINFO  -> _lineModelObject
        }

        getRateFlow(_rateBook).each(\factor -> rateCurrentRoutine(factor, costDataCache))
        // filter out cost datas marked as merged
        costDataCache.AllCostData
            .where(\cachedCostData -> (not cachedCostData.Merged) and (cachedCostData.CostData.StandardTermAmount != null))
            .each(\cachedCostData -> addCost(cachedCostData.CostData))
      }
    }
  }

  override protected function rateWindow(line: T) {
    LOG.info("Rating in window mode is not supported!")
  }

  override protected property get NumDaysInCoverageRatedTerm(): int {
    return 365
  }

  override protected function createCostDataForCost(c: Cost): CostDataWithOverrideSupport {
    return CostDataMappingSupport.createCostDataFromCost(c, RateCache)
  }

  private function isPremiumCalculation(routineName: String): boolean {
    return routineName.contains("_PC_")
  }

  private function isStatCalculation(routineName: String): boolean {
    return routineName.contains("_ST_")
  }

  private function isCommonRating(routineName: String): boolean {
    return routineName.contains("_CR_")
  }

  protected function rateCurrentRoutine(rateflowRow: DefaultRateFactorRow, costDataCache : CostDataCache) {
    var clausePath = rateflowRow.str3
    var routineName = rateflowRow.str2

    try {
      var splitPath = clausePath.split("\\.").toList()
      ratePathElement(new LinkedList<String>(splitPath), _lineModelObject, routineName, costDataCache)
    } catch (e: Exception) {
      LOG.error("Failed rating routine: ${routineName}")
      throw e
    }
  }

  private function ratePathElement(remainingPropertyPath: Queue<String>, currentDto: LineModelObject, routineName: String, costDataCache : CostDataCache) {
    if (isFromCurrentJurisdiction(currentDto) || isLineLevelCommonRatingClause(currentDto, routineName) || isScheduledElement(currentDto)) {
      if (remainingPropertyPath.Empty) {
        handleDTORating(currentDto, routineName, costDataCache)
      } else {
        handleNextPathElement(remainingPropertyPath, currentDto, routineName, costDataCache)
      }
    }
  }

  private function handleNextPathElement(remainingPropertyPath: Queue<String>, currentDto: LineModelObject, routineName: String, costDataCache : CostDataCache) {
    var currentProperty = remainingPropertyPath.poll()
    if (!currentDto.hasProperty(currentProperty)){
      throw "Property not found: ${currentProperty} DTO: ${currentDto.ClassName}"
    }
    var nextDto = currentDto.getChild(currentProperty)
    var dtoList = nextDto?.resolveChildDtos() ?: {} as List<LineModelObject>
    dtoList.each(\dto -> {
      nextDto.handleCurrent(dto)
      ratePathElement(new LinkedList<String>(remainingPropertyPath), dto, routineName, costDataCache)
    })
  }

  private function handleDTORating(currentDto: LineModelObject, routineName: String, costDataCache : CostDataCache) {
    var dtoList = currentDto.resolveChildDtos()
    LOG.info("Executing Routine: ${routineName}")
    dtoList.each(\dto -> {
      if (currentDto != null) {
        currentDto.handleCurrent(dto)
        initializeMandatoryFields(dto)
        launchRateRoutine(routineName, dto, costDataCache)
      } else {
        LOG.info("Coverage was null ${currentDto.ClassName} for routine ${routineName}")
      }
    })
  }

  protected function launchRateRoutine(routineName: String, dto: LineModelObject, costDataCache : CostDataCache) {
    if (isPremiumCalculation(routineName)) {
      processPremium(dto, routineName, costDataCache)
    } else if (isStatCalculation(routineName)) {
      processStat(dto, routineName)
    } else if (isCommonRating(routineName)) {
      processCommonRating(dto, routineName)
    }
    else {
      LOG.error("Unsupported routine type! Routine: ${routineName}")
    }
  }

  protected function processPremium(dto: LineModelObject, routineName: String, costDataCache : CostDataCache) {
    if (!dto.isSelected()){
      return
    }
    if (isZeroPolicyIndicator(dto)){
      LOG.info("Will not rate ${dto.ClassName} for routine ${routineName} because of PolicyIndicator")
      return
    }
    var effDated = dto.EffDated
    if (effDated == null) {
      LOG.error("Unsupported entity for assignign cost for routine: ${routineName}")
      return
    }
    var clauseId = dto typeis ClauseLineModelObject and dto.RateOnly ? dto.ClauseCode : null
    var costData = costDataCache.getCostData(effDated, clauseId, getDateInterval(effDated))
    executeRateRoutine(dto, costData, routineName)
    populateCosts(effDated, costData, dto, costDataCache.AddCosts)
  }

  protected function processCommonRating(dto: LineModelObject, routineName: String) {
    if (!dto.isSelected()){
      return
    }
    if (isZeroPolicyIndicator(dto)){
      LOG.info("Will not create stat ${dto.ClassName} for routine ${routineName} because of PolicyIndicator")
      return
    }
    executeRateRoutine(dto, null, routineName)
  }

  protected function processStat(dto: LineModelObject, routineName: String) {
    if (!dto.isSelected()){
      return
    }
    if (isZeroPolicyIndicator(dto)){
      LOG.info("Will not create stat ${dto.ClassName} for routine ${routineName} because of PolicyIndicator")
      return
    }
    executeRateRoutine(dto, null, routineName)
    updateStatValues(dto, routineName)
  }

  private function updateStatValues(dto: LineModelObject, routineName: String) {
    var effDated = dto.EffDated
    if (effDated == null) {
      LOG.error("Unsupported entity for assigning stat for routine: ${routineName}")
    } else {
      StatRecordUtil.updateStatValues(dto)
    }
  }

  protected function isZeroPolicyIndicator(dto: LineModelObject): boolean {
    return dto.hasProperty(POLICY_INDICATOR) && dto[POLICY_INDICATOR] == 0
  }

  protected function executeRateRoutine(dto: LineModelObject, costData: LobCachedCostData, routineName: String) {
    var worksheetContainer = new NoCostWorksheetContainer()
    _lineModelObject.initShortNames()
    _rateBook.executeCalcRoutine(routineName, costData.CostData, worksheetContainer, _rateRoutineParameterMap)
    if (dto.isEffDated()) {
      addWorksheet(dto.WorksheetAttachmentEntity, worksheetContainer)
    } else {
      LOG.error("DTO for ${routineName} does not implement EffDated.")
    }
  }

  protected function isFromCurrentJurisdiction(dto: LineModelObject): boolean {
    var jurisdictionTypeKey = dto.JurisdictionTypekey
    return jurisdictionTypeKey == null || dto.DataModel typeis PolicyLine || _rateBook.BookJurisdiction == jurisdictionTypeKey
  }

  private function isLineLevelCommonRatingClause(dto: LineModelObject, routineName: String): boolean {
    return isCommonRating(routineName) && dto.DataModel typeis Clause && dto.DataModel.OwningCoverable typeis PolicyLine
  }

  private function isScheduledElement(dto: LineModelObject): boolean {
    var dataModel = dto.DataModel
    return dataModel typeis ScheduledItem || (dataModel typeis Clause && dataModel.OwningCoverable typeis ScheduledItem)
  }

  protected function getRateFlow(rateBook: RateBook): List<DefaultRateFactorRow> {
    var rateTable = rateBook.getTable(RateFlowTableName)
    return rateTable.Factors.map(\factor -> (factor as DefaultRateFactorRow))
        .sort(\elt1, elt2 -> elt1.str1.toInt() < elt2.str1.toInt())
  }

  protected function getDtoVersion(rateBook: RateBook): String {
    var rateTable = getDtoRateTable(rateBook)
    return (rateTable.Factors.single() as DefaultRateFactorRow).str1
  }

  protected function getDtoFQN(rateBook: RateBook): String {
    var rateTable = getDtoRateTable(rateBook)
    return (rateTable.Factors.single() as DefaultRateFactorRow).str2
  }

  private function getDtoRateTable(rateBook: RateBook) : RateTable {
    return rateBook.getTable(DTO_VERSION_TABLE_NAME)
  }

  protected property get RateFlowTableName(): String {
    return "FlowChart"
  }

  protected function getRateBook(policyLine: T, jurisdiction: Jurisdiction): RateBook {
    var offeringCode = policyLine.Branch.Offering.CodeIdentifier
    var periodRefDateType = ReferenceDatePlugin.getReferenceDateType(policyLine, jurisdiction)
    var refDate = ReferenceDatePlugin.getPeriodReferenceDate(policyLine.Branch, periodRefDateType, jurisdiction)
    var book: RateBook
    try {
      book = RateBook.selectRateBook(refDate, PolicyLine.Branch.RateAsOfDate, PolicyLine.PatternCode,
          jurisdiction, _ratingLevel, PolicyLine.Branch.JobProcess typeis RenewalProcess, offeringCode)
    } catch (e: Exception) {
      throw new RatingException(DisplayKey.get("Web.Policy.Validation.Rating.InvalidRatebook", jurisdiction.DisplayName))
    }

    return book
  }

  protected function getLineModelName(jurisdiction: Jurisdiction, version: String, dtoFQN: String): String {
    return getLineModelName(jurisdiction.Code, version, dtoFQN)
  }

  protected function getLineModelName(jurisdictionCode: String, version: String, dtoFQN: String): String {
    var lineShortCode = _lineVersion.PatternCode.remove("Line")

    return dtoFQN.HasContent
        ? dtoFQN
        : "gw.lob." + lineShortCode.toLowerCase() + ".iso.rating.infos.ratingparam."
        + jurisdictionCode.toLowerCase() + ".v" + version + "." + lineShortCode + "LineModelDTO"
  }

  protected function getLineModel(jurisdiction: Jurisdiction, version: String, dtoFQN: String, parameters: Parameters): LineModelObject {
    var type = TypeSystem.getByFullName(getLineModelName(jurisdiction, version, dtoFQN))
    if (type.TypeInfo.getConstructors().hasMatch(\elt -> isTwoArgumentsLineModelConstructor(elt.Parameters))) {
      var constructor = type.TypeInfo.getConstructors().singleWhere(\elt -> isTwoArgumentsLineModelConstructor(elt.Parameters))
      return constructor.Constructor.newInstance({_lineVersion, parameters}) as LineModelObject
    }
    var constructor = type.TypeInfo.getConstructors().singleWhere(\elt -> elt.Parameters.length == 1 && elt.Parameters.first().Name == "line")
    return constructor.Constructor.newInstance({_lineVersion}) as LineModelObject
  }

  private function isTwoArgumentsLineModelConstructor(constructorParameters: gw.lang.reflect.IParameterInfo[]): boolean {
    return constructorParameters.length == 2 && constructorParameters[0].Name == "line" && constructorParameters[1].Name == "parameters"
  }

  private function handleBasisScalableCostData(costData: CostDataWithOverrideSupport) {
    if (!costData.MergeAsBasisScalable) {
      throw "Cost with fixed basis passed for handling as basis scalable"
    }
    if (costData.StandardTermAmount == null) {
      return
    }

    // Set amount equal to term amount, proration will be handled afterwards
    costData.setAmountAndHandleOverrides(costData.ActualTermAmount)
  }

  private function populateCosts(effDated: EffDated, cachedCostData: LobCachedCostData, dto: LineModelObject) {
    populateCosts(effDated, cachedCostData, dto, true)
  }

  private function populateCosts(effDated: EffDated, cachedCostData: LobCachedCostData, dto: LineModelObject, addCosts : boolean) {
    var costData = cachedCostData.CostData
    // Holds information if created cost should be added to rating engine's result.
    // Add the cost only if implementation rated class, a null term amount indicates cost not rated
    var updateWorksheetEntries = costData.StandardTermAmount != null

    if (updateWorksheetEntries and costData.MergeAsBasisScalable) {
      handleBasisScalableCostData(costData)
      var emitted = accumulateOrEmitCosts(costData, isNewCoverableSliceRated(effDated, costData.EffectiveDate), addCosts)
      updateWorksheetEntries = emitted

      cachedCostData.Merged = !emitted
    }

    if (updateWorksheetEntries) {
      costData.WorksheetEntries = _worksheetEntries.get(effDated).WorksheetEntries
    }

    if (costData typeis LobCostData) {
      costData.Details = dto.DisplayName
      costData.HasParent = dto typeis ClauseLineModelObject && dto.RateOnly
    }
  }

  private function isNewCoverableSliceRated(effDated: EffDated, effectiveDate: Date): Boolean {
    var existingSliceDates: Date[]
    if(effDated typeis CoverableWithRatingBasisType) {
      existingSliceDates = effDated.VersionListUntyped.AllVersionsUntyped*.EffectiveDate
    }
    if(effDated typeis Clause and effDated.OwningCoverable typeis CoverableWithRatingBasisType) {
      existingSliceDates = effDated.OwningCoverable.VersionListUntyped.AllVersionsUntyped*.EffectiveDate
    }
    return existingSliceDates.contains(effectiveDate)
  }

  protected function accumulateOrEmitCosts(costData : CostDataWithOverrideSupport, newCoverableSliceRated : Boolean) : Boolean {
    return accumulateOrEmitCosts(costData, newCoverableSliceRated, true)
  }

  protected function accumulateOrEmitCosts(costData : CostDataWithOverrideSupport, newCoverableSliceRated : Boolean, addCosts : boolean) : Boolean {
    // find CostData with the same key and adjacent effective window
    var previousCostData = CostDataMap.get(PolicyLine)
        .firstWhere(\prevCostData -> prevCostData.Key == costData.Key
            and prevCostData.ExpirationDate == costData.EffectiveDate)
    if (previousCostData == null) {
      // no previous cost, so emit this one
      return true
    }
    if (previousCostData.isBasisScalableCostEqual(costData)) {
      if (newCoverableSliceRated) {
        // if new coverable slice is rated, attempt to merge basis scalable CostDatas
        return !previousCostData.mergeAsBasisScalableIfCostEqual(costData)
      }
      // slice date does not align with new basis scalable coverable slice, so just extend prior cost
      return conditionallyExtendCost(costData, previousCostData, addCosts)
    }
    // merge not possible, so emit the new CostData
    return true
  }

  protected function conditionallyExtendCost(costData : CostDataWithOverrideSupport, previousCostData : CostData, addCosts : boolean) : boolean {
    previousCostData.ExpirationDate = costData.ExpirationDate
    return false
  }

  private function addWorksheet(effDated: EffDated, worksheetContainer: WorksheetEntryContainer) {
    if (Plugins.get(IRateRoutinePlugin).worksheetsEnabledForLine(PolicyLine.PatternCode)) {
      if (!_worksheetEntries.containsKey(effDated)) {
        var worksheet = new Worksheet() { : WorksheetEntries = worksheetContainer.WorksheetEntries }
        _worksheetEntries.put(effDated, worksheet)
      } else {
        _worksheetEntries.get(effDated).addWorksheetEntries(worksheetContainer.WorksheetEntries)
      }
      PolicyLine.Branch.addWorksheetFor(effDated, _worksheetEntries.get(effDated))
    }
  }

  private function getDateInterval(effDated: EffDated): DateInterval {
    if (effDated typeis Clause) {
      return effDated.PolicyLine.SliceDate..getNextSliceDateAfter(effDated.PolicyLine.SliceDate)
    } else if (effDated typeis Coverable) {
      return effDated.PolicyLine.SliceDate..getNextSliceDateAfter(effDated.PolicyLine.SliceDate)
    }
    return null
  }

  private function initializeMandatoryFields(dto: LineModelObject) {
    findFieldsToInitialize().eachKeyAndValue(\key, val -> {
      if (dto.hasProperty(key)){
        dto[key] = val
      }
    })
  }

  protected function findFieldsToInitialize(): Map<String, Object> {
    return { "State" -> _lineVersion.BaseState.DisplayName,
        "StateFullName" -> _lineVersion.BaseState.DisplayName,
        "StateAbbreviation" -> _lineVersion.BaseState.Code,
        "EffectiveDt" -> _lineVersion.EffectiveDate,
        "ExpirationDt" -> _lineVersion.ExpirationDate,
        "StateCode" -> _lineVersion.BaseState.Code,
        "Renewal" -> _lineVersion.Branch.Renewal != null ? 1 : 0 }
  }

  protected function checkRateBookJurisdiction(rateBook: RateBook, jurisdiction: Jurisdiction) {
    if (rateBook.BookJurisdiction == null){
      throw new RatingException(DisplayKey.get("Web.Policy.Validation.Rating.InvalidRatebook", jurisdiction.DisplayName))
    }
  }

  protected function createRatingParameters(lineVersion: T): List<Parameters> {
    var parametersList: List< gw.lob.common.parameters.Parameters > = {}
    for (jurisdiction in _lineVersion.CoveredStates) {
      parametersList.add(new Parameters().withParam(Parameters.JURISDICTION_PARAMETER_NAME, jurisdiction.Code))
    }
    return parametersList
  }

}
