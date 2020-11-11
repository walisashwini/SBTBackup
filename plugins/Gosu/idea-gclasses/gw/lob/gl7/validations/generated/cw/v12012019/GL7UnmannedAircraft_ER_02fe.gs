package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7UnmannedAircraft_ER_02fe extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7UnmannedAircraft> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7UnmannedAircraft
  private var jurisdiction: typekey.Jurisdiction
  private var referenceDate: java.util.Date
  private var unmannedAircraftAggregateLimitNumeric: java.lang.Integer
  private var limitNumericTemp2: java.lang.String
  private var limitNumericTemp3: java.lang.String
  private var limitNumericTemp1: java.lang.String
  private var prodsAggregateLimitNumeric: java.lang.Integer
  private var Error_Message: java.lang.String
  private var premOpsAggregateLimitNumeric: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7AggLimit23Term = coverable.GL7UnmannedAircraf.GL7AggLimit23Term.OptionValue
    private var tempSublineType = coverable.Exposure.GL7Location.SublineType
    private var tempGL7ProdsCompldOpsAggLimitTerm = tempSublineType.GL7Lmts.GL7ProdsCompldOpsAggLimitTerm.OptionValue
    private var tempGL7GeneralAggLimit1Term = tempSublineType.GL7Lmts.GL7GeneralAggLimit1Term.OptionValue
  }
  

  override public function validate(_coverable : GL7UnmannedAircraft) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    jurisdiction = coverable.CoverableState
    referenceDate = _cf.getReferenceDate(coverable)
    extractedData = new ExtractedData()
  
    unmannedAircraftAggregateLimitNumeric()
    premOpsAggregateLimitNumeric()
    prodsAggregateLimitNumeric()
    UnmannedAircraftLiabilityAggregateLimitcannotbegreaterthePolicyAggregrateLimits()
  
    return Error_Message
  }

  private function unmannedAircraftAggregateLimitNumeric() {
    unmannedAircraftAggregateLimitNumeric = 0
    if (_cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraf1)) {
      if (_cf.exists(ED.tempGL7AggLimit23Term.DisplayName) && (ED.tempGL7AggLimit23Term.DisplayName != "" && ED.tempGL7AggLimit23Term.DisplayName != null)) {
        limitNumericTemp1 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7AggLimit23Term.DisplayName) }, jurisdiction, referenceDate)
        unmannedAircraftAggregateLimitNumeric = _cf.makeIntegerFrom(limitNumericTemp1)
      } else {
        unmannedAircraftAggregateLimitNumeric = 0
      }
    }
  }

  private function premOpsAggregateLimitNumeric() {
    premOpsAggregateLimitNumeric = 0
    if (_cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraf1)) {
      if (_cf.exists(ED.tempGL7GeneralAggLimit1Term.DisplayName) && (ED.tempGL7GeneralAggLimit1Term.DisplayName != null && ED.tempGL7GeneralAggLimit1Term.DisplayName != "")) {
        limitNumericTemp2 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7GeneralAggLimit1Term.DisplayName) }, jurisdiction, referenceDate)
        premOpsAggregateLimitNumeric = _cf.makeIntegerFrom(limitNumericTemp2)
      } else {
        premOpsAggregateLimitNumeric = 0
      }
    }
  }

  private function prodsAggregateLimitNumeric() {
    prodsAggregateLimitNumeric = 0
    if (_cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraf1)) {
      if (_cf.exists(ED.tempGL7ProdsCompldOpsAggLimitTerm.DisplayName) && (ED.tempGL7ProdsCompldOpsAggLimitTerm.DisplayName != null && ED.tempGL7ProdsCompldOpsAggLimitTerm.DisplayName != "")) {
        limitNumericTemp3 = _cf.readSystemTable(entity.GL7LimitNumericRT, { SysTableReadParam.of("Lim", "ExactMatch", ED.tempGL7ProdsCompldOpsAggLimitTerm.DisplayName) }, jurisdiction, referenceDate)
        prodsAggregateLimitNumeric = _cf.makeIntegerFrom(limitNumericTemp3)
      } else {
        prodsAggregateLimitNumeric = 0
      }
    }
  }

  private function UnmannedAircraftLiabilityAggregateLimitcannotbegreaterthePolicyAggregrateLimits() {
    if (_cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovAOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraftCovBOnl1) || _cf.exists(ED.tempSublineType.GL7LmtdCovForDesignatedUnmannedAircraf1)) {
      if ((ED.tempSublineType.Subline != null && ED.tempSublineType.Subline != "") && ED.tempSublineType.Subline == "Premises/Operations and Products/Completed Operations") {
        if (unmannedAircraftAggregateLimitNumeric > premOpsAggregateLimitNumeric || unmannedAircraftAggregateLimitNumeric > prodsAggregateLimitNumeric) {
          Error_Message = "[{0}] Unmanned Aircraft Liability Aggregate Limit cannot be greater the Policy Aggregrate Limits"
        }
      }
    }
  }

}