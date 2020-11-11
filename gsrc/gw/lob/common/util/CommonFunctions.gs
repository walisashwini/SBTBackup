package gw.lob.common.util

uses gw.config.CommonServices
uses gw.entity.IEntityType
uses gw.lang.Deprecated
uses gw.lang.parser.ICoercionManager
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.parameters.Parameters
uses gw.rating.LineModelObject
uses gw.rating.flow.RatingFunctionSource
uses gw.rating.flow.TimeSpan
uses org.apache.commons.lang.StringUtils
uses org.apache.commons.lang3.mutable.MutableInt
uses org.apache.commons.lang3.time.DateUtils
uses org.joda.time.Days
uses org.joda.time.LocalDate
uses org.joda.time.Months
uses org.joda.time.Years

uses java.math.BigDecimal
uses java.math.RoundingMode

class CommonFunctions extends RatingFunctionSource implements ICoercionManager{

  private final delegate _coercionManager represents ICoercionManager

  construct() {
    _coercionManager = CommonServices.getCoercionManager()
  }

  override protected function availableForLine(policyLineCode: String): boolean {
    // available for all lines so always return true
    return true
  }

  function startsWith(val: String, prefix: String): boolean {
    return val?.startsWith(prefix)
  }

  function contains(val: String, affix: String): boolean {
    return val?.contains(affix)
  }

  function ceiling(val: BigDecimal): BigDecimal {
    return val?.setScale(0, RoundingMode.CEILING)
  }

  function padLeft(val: String, padLen: BigDecimal): String {
    if (padLen.remainder(BigDecimal.ONE) != 0) {
      throw("Cannot padLeft by number with fractional part")
    }

    return StringUtils.leftPad(val, padLen.intValue(), "0")
  }

  function replaceWith(val: String, oldCharSequence: String, newCharSequence: String): String {
    return val?.replace(oldCharSequence, newCharSequence)
  }

  @Deprecated("Use subtractDates() instead")
  function subtract(endDate: Date, startDate: Date): TimeSpan {
    var yodaStart = LocalDate.fromDateFields(startDate)
    var yodaEnd = LocalDate.fromDateFields(endDate)
    var daysBetween = Days.daysBetween(yodaStart, yodaEnd).Days
    var monthsBetween = Months.monthsBetween(yodaStart, yodaEnd).Months
    var yearsBetween = Years.yearsBetween(yodaStart, yodaEnd).Years
    return new TimeSpan(daysBetween, monthsBetween, yearsBetween)
  }

  function subtractDates(endDate: Date, startDate: Date): TimeSpan {
    var yodaStart = LocalDate.fromDateFields(startDate)
    var yodaEnd = LocalDate.fromDateFields(endDate)
    var daysBetween = Days.daysBetween(yodaStart, yodaEnd).Days
    var monthsBetween = Months.monthsBetween(yodaStart, yodaEnd).Months
    var yearsBetween = Years.yearsBetween(yodaStart, yodaEnd).Years
    return new TimeSpan(daysBetween, monthsBetween, yearsBetween)
  }

  function subtractYears(minuendDate: Date, subtrahendDate: Date): int {
    return minuendDate.YearOfDate - subtrahendDate.YearOfDate
  }

  function length(val: String): int {
    return val?.length()
  }

  function count(obj: Object): int {
    if (obj == null) {
      return 0
    } else  if (obj typeis LineModelObject && obj.DataModel == null) {
      return 0
    } else if (obj typeis List) {
      return obj.size()
    } else if (obj.Class.Array) {
      return java.lang.reflect.Array.getLength(obj)
    }

    return 1;
  }

  /**
   * When this function receives collection as obj param it counts all elements pointed by path on this collection.
   * eg.
   * 1. countByPath(CommercialAuto.Garages.All, 'Cov.Property') will count all element.Cov.Property where element is
   * every item of the collection.
   * 2. countByPath(CrimeCommlFidelityInsuringAgreements, "IncldSpouseChildrenOfBldgMgrAsEmps.IncldSpouseChildrenOfBldgMgrAsEmpsDetail.All")
   * 3. countByPath(line.CR7CommlFidelities,"CR7IncludeVolunteerWorkersAsEmpls.ScheduledItems")
   */
  function countByPath(obj: Object, path: String): int {
    var splitPath = path.split("\\.")
    var total = new MutableInt(0)
    processCountByPath(obj, splitPath, total)
    return total.Value
  }

  private function processCountByPath(element: Object, splitPath: String[], total: MutableInt) {
    if (element typeis Object[]) {
      element = element.toList()
    }
    if (element typeis List) {
      for (elem in element) {
        processElement(elem, splitPath, total)
      }
    } else {
      processElement(element, splitPath, total)
    }
  }

  private function processElement(elem: Object, splitPath: String[], total: MutableInt) {
    if (splitPath.length == 0) {
      return
    } else {
      var propName = splitPath[0]
      elem = getElementByPropertyName(elem, propName)
      if (elem == null) {
        return
      }
      if (splitPath.length == 1) {
        total.add(count(elem))
      } else {
        processCountByPath(elem, subArray(splitPath, 1, splitPath.length), total)
      }
    }
  }

  private function getElementByPropertyName(element: Object, propName: String): Object {
    if ((typeof element).TypeInfo.Properties*.Name.contains(propName)) {
      return element[propName]
    }
    return element
  }

  private function subArray(splitPath: String[], startIndex: Integer, endIndex: Integer): String[] {
    return Arrays.asList(splitPath)
        .subList(startIndex, endIndex)
        .toArray(new String[0])
  }

  function isoDay(date: Date): int {
    return LocalDate.fromDateFields(date).dayOfMonth().get()
  }

  function isoMonth(date: Date): int {
    return LocalDate.fromDateFields(date).monthOfYear().get()
  }

  function isoYear(date: Date): int {
    return LocalDate.fromDateFields(date).year().get()
  }

  function days(timeSpan: TimeSpan): int {
    return timeSpan.Days
  }

  function months(timeSpan: TimeSpan): int {
    return timeSpan.Months
  }

  function years(timeSpan: TimeSpan): int {
    return timeSpan.Years
  }

  function isoDateWithoutTime(date: Date) : Date {
    return DateUtils.truncate(date, Calendar.DAY_OF_MONTH)
  }

  function split(SplitLimit: String, splitLimitPart: int): String {
    return SplitLimit?.split("/")[splitLimitPart]
  }

  function addYears(date: Date, years: BigDecimal): Date {
    if (years.remainder(BigDecimal.ONE) != 0) {
      throw("Cannot add value with fractional part to date")
    }

    return date.addYears(years.intValue());
  }

  function exists(obj: Object): boolean {
    if (obj == null) {
      return false
    } else if (obj typeis List) {
      return obj.size() > 0
    } else if (obj typeis LineModelObject && obj.DataModel == null) {
      return false
    } else if (obj.Class.Array) {
      return java.lang.reflect.Array.getLength(obj) > 0
    }

    return true
  }

  function formExists(obj: Object): boolean {
    if (obj == null) {
      return false
    } else if (obj typeis LineModelObject && obj.DataModel == null) {
      return false
    }

    return true
  }

  override function makeStringFrom(value : Object) : String {
    if (value typeis Boolean) {
      return value.toYesNoString()
    }
    return _coercionManager.makeStringFrom(value)
  }

  override function makeIntegerFrom(value : Object) : Integer {
    return _coercionManager.makeIntegerFrom(value)
  }

  override function makeLongFrom(value : Object) : Long {
    return _coercionManager.makeLongFrom(value)
  }

  override  function makeBigDecimalFrom(value : Object) : BigDecimal {
    return _coercionManager.makeBigDecimalFrom(value)
  }

  override function makeDateFrom(value : Object) : Date {
    return _coercionManager.makeDateFrom(value)
  }

  function add(list: List, element: Object): boolean {
    return list?.add(element)
  }

  function hasMatch(collection: List, operator: String, comparedValue: Object): boolean {
    return collection?.hasMatch(\item -> {
      switch (operator) {
        case "==":
            return item == comparedValue;
        case "!=":
            return item != comparedValue;
      }
      throw "Unsupported operator used in hasMatch function: " + operator
    })
  }

  function substring(string: java.lang.String, beginIndex: int): java.lang.String {
    return string?.substring(beginIndex)
  }

  function indexOf(string: java.lang.String, substring: java.lang.String): int {
    return string == null ? -1 : string.indexOf(substring)
  }

  function RoundUsingScale(scale: int, value: BigDecimal): BigDecimal {
    return value.setScale(scale, HALF_UP)
  }

  @Deprecated("Should use readSystemTable() with jurisdiction and refDate")
  function readSystemTable(sysTableEntity: IEntityType, parameters: List<SysTableReadParam>): java.lang.String {
    return SystemTableQuery.query(sysTableEntity, parameters).first()
  }

  function readSystemTable(sysTableEntity: IEntityType, parameters: List<SysTableReadParam>,
                           jurisdiction : Jurisdiction, referenceDate : Date): java.lang.String {
    var effDatedFilter = new SystemTableEffDatedParam(jurisdiction, referenceDate)
    return SystemTableQuery.query(sysTableEntity, parameters, effDatedFilter).first()
  }

  function getReferenceDate(coverable : Coverable) : Date {
    return DependencyUtil.getCoverableReferenceDate(coverable)
  }

  function getReferenceDate(clause : Clause) : Date {
    if (clause == null) {
      return null
    }
    return DependencyUtil.getClauseReferenceDate(clause.OwningCoverable, clause.Pattern.CodeIdentifier)
  }

  function getReferenceDate(modifier : Modifier) : Date {
    if (modifier == null) {
      return null
    }
    return modifier.ReferenceDate
  }

  function stateMatches(coverable: Coverable, parameters: Parameters): boolean {
    return DependencyUtil.getJurisdiction(coverable) == parameters.getParam(Parameters.JURISDICTION_PARAMETER_NAME)
  }

  function stateMatches(modifier: Modifier, parameters: Parameters): boolean {
    return DependencyUtil.getJurisdiction(modifier) == parameters.getParam(Parameters.JURISDICTION_PARAMETER_NAME)
  }

  function concatStr(str1: String, str2: String): String {
    return str1.concat(str2)
  }

  function pow(base: BigDecimal, exponent: BigDecimal ): BigDecimal {
    return Math.pow( base.doubleValue(), exponent.doubleValue())
  }
}