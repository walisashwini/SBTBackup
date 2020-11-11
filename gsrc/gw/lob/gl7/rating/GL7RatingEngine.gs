package gw.lob.gl7.rating

uses com.guidewire.pl.system.util.DateRange
uses gw.api.locale.DisplayKey
uses gw.api.rating.RatingException
uses gw.job.RenewalProcess
uses gw.lang.reflect.TypeSystem
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.parameters.Parameters
uses gw.lob.gl7.GL7ExposureModel
uses gw.lob.gl7.compatibility.GL7CompatibilityConstants
uses gw.rating.CommonRatingEngine
uses gw.rating.CostDataWithOverrideSupport
uses gw.rating.LineModelObject
uses org.slf4j.LoggerFactory

uses java.math.BigDecimal
uses java.math.RoundingMode
uses java.util.Map

class GL7RatingEngine extends CommonRatingEngine<GL7Line> {
  private static final var LOG = LoggerFactory.getLogger(GL7RatingEngine.Type)

  private var scaledBasisMap : HashMap<ScaledBasisKey, Long> = new HashMap<ScaledBasisKey, Long>()
  private class ScaledBasisKey{
    var _exp : GL7Exposure as readonly Exp
    var _effDate : Date as readonly EffDate
    var _propName : String as readonly PropName

    construct(gl7Exp : GL7Exposure, propName : String,  effDate : Date) {
      _exp = gl7Exp
      _propName = propName
      _effDate = effDate
    }

    override function equals(obj : Object) : boolean {
      return obj typeis ScaledBasisKey and obj._exp == _exp and obj._effDate == _effDate and obj._propName == _propName
    }

    override function hashCode() : int {
      return Objects.hash({_exp,_effDate,_propName})
    }
  }

  construct(line : GL7Line) {
    super(line)
  }

  construct(line : GL7Line, minimumRatingLevel : RateBookStatus) {
    super(line, minimumRatingLevel)
  }

  override protected function createRatingParameters(lineVersion : GL7Line) : List<Parameters> {
    var parametersList : List<gw.lob.common.parameters.Parameters> = {}
    lineVersion.GL7SublineTypes.each(\sublineType -> sublineType.Sublines.each(\subline -> {
      parametersList.add(new Parameters()
          .withParam("GL7SublineType", sublineType.Subline)
          .withParam(Parameters.JURISDICTION_PARAMETER_NAME, DependencyUtil.getJurisdiction(subline)))
    }))
    return parametersList
  }

  override protected function findFieldsToInitialize() : Map<String, Object> {
    return {"State"->_lineVersion.BaseState.Code,
        "EffectiveDt"->_lineVersion.EffectiveDate,
        "ExpirationDt"->_lineVersion.ExpirationDate}
  }

  override protected function getLineModel(jurisdiction : Jurisdiction, version : String, dtoFQN : String, parameters : Parameters) : LineModelObject {
    var lineModelObject : LineModelObject = super.getLineModel(jurisdiction, version, dtoFQN, parameters)
    var glDto : LineModelObject = lineModelObject["GeneralLiability"] as LineModelObject
    scaleAllBasisScalableExposures(glDto, new HashSet<LineModelObject>())
    return lineModelObject
  }

  private function scaleAllBasisScalableExposures(dto : LineModelObject, visitedSet : Set<LineModelObject>) {
    visitedSet.add(dto)
    var dm = dto.DataModel
    if (dm typeis GL7Exposure) {
      var exposure = dm
      var isBasisScalable = exposure.IsBasisScalable
      if (isBasisScalable) {
        scaleBasisValue(exposure, dto)
      }
    }
    //this code loops through all nested DTOs recursively to scale the basis
    scaleChildrenDTOs(dto, visitedSet)

  }

  private function scaleChildrenDTOs(dto : LineModelObject, visitedSet : Set<LineModelObject>) {
    var type = TypeSystem.getByFullName(dto.Class.getCanonicalName())
    var typeInfo = type.TypeInfo
    var listOfProperties = typeInfo.Properties
    for (prop in listOfProperties) {
      var isChildDTO = !prop.Name.equals("Self") && LineModelObject.Type.isAssignableFrom(prop.Type)
      if (isChildDTO) {
        if (dto[prop.Name] != null && dto[prop.Name] != dto) {
          if (!visitedSet.contains(dto[prop.Name])) {
            var currentDTO = dto[prop.Name] as LineModelObject
            var dtoList : List<LineModelObject> = currentDTO.resolveChildDtos()
            dtoList.each(\elt -> scaleAllBasisScalableExposures(elt, visitedSet))
          }
        }
      }
    }
  }

  private function getEffectiveDatesInThisVersion(exposure : GL7Exposure, targetDateRange : DateRange) : List<Date> {
    var relevantVersion = exposure.VersionList.AllVersions.firstWhere(\expV -> expV.EffectiveDate <= targetDateRange.Start and expV.ExpirationDate >= targetDateRange.End)
    return AllEffectiveDates.where(\effDate -> effDate >= relevantVersion.EffectiveDate and effDate <= relevantVersion.ExpirationDate)
  }

  private function scaleBasisValue(exposure : GL7Exposure, dto : LineModelObject) {
    LOG.debug("Scaling basis for Class Code: " + exposure.ClassCode)
    var dateRangeExpStartToEndOfThisSlice = DateRange.allDatesBetween(exposure.EffectiveDate, getNextSliceDateAfter(exposure.SliceDate))
    var dateRangeExpBeforeCancellation : DateRange = null
    if(_lineVersion.Branch.Job typeis Cancellation and _lineVersion.Branch.EditEffectiveDate < exposure.ExpirationDate ){
      dateRangeExpBeforeCancellation = DateRange.allDatesBetween(exposure.EffectiveDate, _lineVersion.Branch.EditEffectiveDate)
    }

    var totalDateRangeOfExp = dateRangeExpBeforeCancellation?:exposure.EffectiveDateRange
    var effectiveDates = getEffectiveDatesInThisVersion(exposure, dateRangeExpStartToEndOfThisSlice)
    scaleBasisByDiscountingPreviouslyRatedChunk(exposure, dto, effectiveDates, dateRangeExpStartToEndOfThisSlice, totalDateRangeOfExp)

  }

  private function scaleBasisByDiscountingPreviouslyRatedChunk(exposure : GL7Exposure, dto : LineModelObject, effectiveDates : List<Date>, targetDateRange : DateRange, currentDateRange : DateRange) {
    var scaledBasisExpStartToEndOfCurrentSlice = GL7ExposureUtil.getScaledExposureBasisToDateRange(exposure, targetDateRange, currentDateRange)
    var basisDiscountingPrevSlicesMap = new HashMap<String, Long>()

    //substract the basis already rated in the previous slices from the scaled basis for the timespan beginning exposure start till end of current slice.
    effectiveDates.where(\effDate -> effDate.before(exposure.SliceDate)).forEach(\sliceDate -> {
      var scaledBasisKey = new ScaledBasisKey(exposure, GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name, sliceDate)
      var prodsComBasisMinusPrevSlices = basisDiscountingPrevSlicesMap.getOrDefault(GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name, scaledBasisExpStartToEndOfCurrentSlice.getSecond()) - scaledBasisMap.getOrDefault(scaledBasisKey, 0)
      basisDiscountingPrevSlicesMap.put(GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name, prodsComBasisMinusPrevSlices)
      exposure.DomainModel.sublineSpecificPropertiesFor(GL7ExposureModel.PropertyType.Exposure).each(\prop -> {
        scaledBasisKey = new ScaledBasisKey(exposure, prop.PropertyInfo.Name, sliceDate)
        var basisMinusPrevSlices = basisDiscountingPrevSlicesMap.getOrDefault(prop.PropertyInfo.Name, scaledBasisExpStartToEndOfCurrentSlice.getFirst()) - scaledBasisMap.getOrDefault(scaledBasisKey, 0)
        basisDiscountingPrevSlicesMap.put(prop.PropertyInfo.Name, basisMinusPrevSlices)
      })
    })

    //Store the calculated basis for the current slice in dto and into the scaledBasisMap(for calculating the basis for future slices)
    dto[GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name] = basisDiscountingPrevSlicesMap.get(GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name)?:scaledBasisExpStartToEndOfCurrentSlice.Second
    var sbKeyProdOps = new ScaledBasisKey(exposure, GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name, exposure.SliceDate)
    scaledBasisMap.put(sbKeyProdOps, dto[GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name] as Long)
    LOG.debug("Basis scaled via exclusion of prev rated basis -${GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name} - ${dto[GL7Exposure.PRODSCOMPLDOPSEXPOSURE_PROP.Name] as Long}")
    exposure.DomainModel.sublineSpecificPropertiesFor(GL7ExposureModel.PropertyType.Exposure).each(\prop -> {
      var sbKey = new ScaledBasisKey(exposure, prop.PropertyInfo.Name, exposure.SliceDate)
      dto[prop.PropertyInfo.Name] = basisDiscountingPrevSlicesMap.get(prop.PropertyInfo.Name)?:scaledBasisExpStartToEndOfCurrentSlice.First
      scaledBasisMap.put(sbKey, dto[prop.PropertyInfo.Name] as Long)
      LOG.debug("Basis scaled via exclusion of prev rated basis -${prop.PropertyInfo.Name} - ${dto[prop.PropertyInfo.Name] as Long}")

    })
  }

  override protected function accumulateOrEmitCosts(costData : CostDataWithOverrideSupport, newCoverableSliceRated : Boolean, addCosts : boolean) : Boolean {
    if (costData typeis GL7ExposureCovCostData) {
      costRoundingBalancer(costData)
      // find CostData with the same key and adjacent effective window
      var previousCost = CostDataMap.get(PolicyLine)
          .firstWhere(\previousCost -> previousCost.Key == costData.Key
              and previousCost.ExpirationDate == costData.EffectiveDate)
      if (previousCost == null) {
        // no previous cost, so emit this one
        return true
      } else if (previousCost.isBasisScalableCostEqual(costData)) {
        if (costData.MergeAsBasisScalable) {
          // if new coverable slice is rated, attempt to merge basis scalable CostDatas
          return !previousCost.mergeAsBasisScalableIfCostEqual(costData)
        } else {
          // slice date does not align with new basis scalable coverable slice, so just extend prior cost
          previousCost.ExpirationDate = costData.ExpirationDate
          return false
        }
      }
      // merge not possible, so emit the new CostData
      return true
    } else return super.accumulateOrEmitCosts(costData, newCoverableSliceRated, true)
  }

  private function costRoundingBalancer(currentCost : GL7ExposureCovCostData) {
    var previousCosts = CostDataMap.get(PolicyLine)
        .where(\previousCost -> previousCost.Key == currentCost.Key and currentCost != previousCost)
    if (previousCosts.isEmpty())
      return
    if (!currentCost.MergeAsBasisScalable || previousCosts.hasMatch(\previousCost -> !previousCost.MergeAsBasisScalable))
      return
    var totalPreviousAmount = previousCosts.sum(\previousCost -> previousCost.ActualAdjRate * previousCost.Basis)
    //restore total actual amount using costs's basis and rate.
    var totalActualAmount = totalPreviousAmount + currentCost.ActualAdjRate * currentCost.Basis
    totalActualAmount = totalActualAmount.divide(new BigDecimal(1000)).setScale(0, RoundingMode.HALF_UP)
    //calculate the actual amount for current cost.
    var actualCostForCurrent = totalActualAmount
    previousCosts.forEach(\previousCost -> {
      actualCostForCurrent -= previousCost.ActualAmount
    })
    //reset the current cost if needed
    if (Math.abs(actualCostForCurrent.intValue() - currentCost.ActualAmount.intValue()) == 1) {
      LOG.debug("Cost rounding triggerred, adjusted cost from ${currentCost.ActualAmount} to ${actualCostForCurrent}.")
      currentCost.ActualAmount = actualCostForCurrent
      currentCost.ActualTermAmount = actualCostForCurrent
    }
  }

  protected override function shouldRateThisSliceForward() : boolean {
    return false
  }

  protected override function getRateBook(policyLine : GL7Line, jurisdiction : Jurisdiction) : RateBook {
    var offeringCode = policyLine.Branch.Offering.CodeIdentifier
    var policyPeriodStartDate = policyLine.Branch.PeriodStart
    var book : RateBook
    try {
      book = RateBook.selectRateBook(policyPeriodStartDate, PolicyLine.Branch.RateAsOfDate, PolicyLine.PatternCode,
          jurisdiction, _ratingLevel, PolicyLine.Branch.JobProcess typeis RenewalProcess, offeringCode)
    } catch (e : Exception) {
      throw new RatingException(DisplayKey.get("Web.Policy.Validation.Rating.InvalidRatebook", jurisdiction.DisplayName))
    }

    return book
  }

  //override CommonRatingEngine to pass the indicator check for some UnmannedAircraft related coverages
  protected override function isZeroPolicyIndicator(dto: LineModelObject): boolean {
    if (PolicyLine.Branch.Job typeis PolicyChange and dto.ParentLineModelObject.DataModel typeis GL7UnmannedAircraft) {
      var clausePID = dto.Clause.Pattern.PublicID
      if (clausePID == GL7CompatibilityConstants.COV_UnmannedAircraftCovABIPD
          or clausePID == GL7CompatibilityConstants.COV_UnmannedAircraftCovBPAI
          or clausePID == GL7CompatibilityConstants.COV_UnmannedAircraft
          or clausePID == GL7CompatibilityConstants.COV_UnmannedAircraftTerr) {
        return false
      }
    }
    return super.isZeroPolicyIndicator(dto)
  }
}