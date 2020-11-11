package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_4a0a extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var temp11: java.lang.Integer
  private var temp12: java.lang.Integer
  private var temp13: java.lang.Integer
  private var temp14: java.lang.Integer
  private var ExperienceNumberYearsRequiredCLV: java.lang.Integer = 0
  private var temp30: java.lang.Integer
  private var temp31: java.lang.Integer
  private var temp10: java.lang.Integer
  private var temp19: java.lang.Integer
  private var temp2: java.lang.Integer
  private var temp15: java.lang.Integer
  private var temp3: java.lang.Integer
  private var temp16: java.lang.Integer
  private var temp17: java.lang.Integer
  private var temp1: java.lang.Integer
  private var temp18: java.lang.Integer
  private var Error_Message: java.lang.String
  private var EffectiveDtCLV: java.util.Date
  private var temp22: java.lang.Integer
  private var temp23: java.lang.Integer
  private var temp24: java.lang.Integer
  private var temp25: java.lang.Integer
  private var temp20: java.lang.Integer
  private var temp21: java.lang.Integer
  private var temp26: java.lang.Integer
  private var temp27: java.lang.Integer
  private var temp28: java.lang.Integer
  private var temp29: java.lang.Integer
  private var temp6: java.lang.Integer
  private var temp7: java.lang.Integer
  private var temp4: java.lang.Integer
  private var temp5: java.lang.Integer
  private var temp8: java.lang.Integer
  private var temp9: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    EffectiveDt()
    ExperienceNumberYearsRequired()
    YearsOfExperienceIncurredCannotExceedtheStartOfBusinessDate()
  
    return Error_Message
  }

  private function EffectiveDt() {
    EffectiveDtCLV = line.EffectiveDate
    if (line.EffectiveDate != null) {
      EffectiveDtCLV = line.EffectiveDate
    }
  }

  private function ExperienceNumberYearsRequired() {
    ExperienceNumberYearsRequiredCLV = ED.tempGL7SublineTypes.ExperienceNumberYearsRequired1
    if (ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" || ED.tempGL7SublineTypes.ScheduleRatingModificationApplies == "Yes") {
      if (ED.tempGL7SublineTypes.ExperienceBusinessStartDate != null && EffectiveDtCLV != null) {
        temp1 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
        if (temp1 < 1) {
          ExperienceNumberYearsRequiredCLV = 0
        } else {
          temp3 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
          temp2 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
          if (temp2 == 1 && temp3 < 6) {
            ExperienceNumberYearsRequiredCLV = 0
          } else {
            temp6 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
            temp5 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
            temp4 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
            if (temp4 == 1 && (temp5 > 5 && temp6 < 12)) {
              ExperienceNumberYearsRequiredCLV = 1
            } else {
              temp8 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
              temp7 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
              if (temp7 == 2 && temp8 <= -7) {
                ExperienceNumberYearsRequiredCLV = 0
              } else {
                temp11 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                temp10 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                temp9 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                if (temp9 == 2 && (temp10 < 6 && temp11 > -7)) {
                  ExperienceNumberYearsRequiredCLV = 1
                } else {
                  temp14 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                  temp13 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                  temp12 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                  if (temp12 == 2 && (temp13 > 5 && temp14 < 12)) {
                    ExperienceNumberYearsRequiredCLV = 2
                  } else {
                    temp16 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                    temp15 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                    if (temp15 == 3 && temp16 <= -7) {
                      ExperienceNumberYearsRequiredCLV = 1
                    } else {
                      temp19 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                      temp18 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                      temp17 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                      if (temp17 == 3 && (temp18 < 6 && temp19 > -7)) {
                        ExperienceNumberYearsRequiredCLV = 2
                      } else {
                        temp22 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                        temp21 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                        temp20 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                        if (temp20 == 3 && (temp21 > 5 && temp22 < 12)) {
                          ExperienceNumberYearsRequiredCLV = 3
                        } else {
                          temp24 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                          temp23 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                          if (temp23 == 4 && temp24 <= -7) {
                            ExperienceNumberYearsRequiredCLV = 2
                          } else {
                            temp27 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                            temp26 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                            temp25 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                            if (temp25 == 4 && (temp26 < 6 && temp27 > -7)) {
                              ExperienceNumberYearsRequiredCLV = 3
                            } else {
                              temp30 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                              temp29 = _cf.isoMonth(line.EffectiveDate) - _cf.isoMonth(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                              temp28 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                              if (temp28 == 4 && (temp29 > 5 && temp30 < 12)) {
                                ExperienceNumberYearsRequiredCLV = 3
                              } else {
                                temp31 = _cf.isoYear(line.EffectiveDate) - _cf.isoYear(ED.tempGL7SublineTypes.ExperienceBusinessStartDate)
                                if (temp31 > 4) {
                                  ExperienceNumberYearsRequiredCLV = 3
                                } else {
                                  ExperienceNumberYearsRequiredCLV = 0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        ExperienceNumberYearsRequiredCLV = 0
      }
    }
  }

  private function YearsOfExperienceIncurredCannotExceedtheStartOfBusinessDate() {
    if (ED.tempGL7SublineTypes.ExperienceRatingApplies == "Yes" && ED.tempGL7SublineTypes.ERPYearsOfExperienceIncurred > ExperienceNumberYearsRequiredCLV) {
      Error_Message = "[{0}] Years Of Experience Incurred Cannot Exceed the Start Of Business Date"
    }
  }

}