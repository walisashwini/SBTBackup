package gw.lob.gl7.validations.generated.cw.v12012019

uses gw.lob.common.util.*
class GL7_ER_a51c extends gw.lob.gl7.validation.GL7GeneratedValidation<GL7SublineType> {
  private var _cf = new CommonFunctions()
  private var line: GL7Line
  private var coverable: GL7SublineType
  private var Error_Message: java.lang.String
  private var classCompldOpsCovNotIncludedCount_1: java.lang.Integer
  var extractedData: ExtractedData as ED
  class ExtractedData {
    private var tempGL7SublineTypes = line.GL7SublineTypes.firstWhere( \ elm -> elm.Constraint.matchesConditionsForCoverable(coverable))
  }
  

  override public function validate(_coverable : GL7SublineType) : java.lang.String {
    coverable = _coverable
    line = (coverable.PolicyLine as GL7Line)
    extractedData = new ExtractedData()
  
    classCompldOpsCovNotIncludedCount_1()
    AclassificationthatdoesnotincludeProductscoveragetothepremisesmustbeselectedtoattachtheLimitedProductWithdrawalEndorsement()
  
    return Error_Message
  }

  private function classCompldOpsCovNotIncludedCount_1() {
    classCompldOpsCovNotIncludedCount_1 = 0
    for (element in ED.tempGL7SublineTypes.Locations?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
      for (element1 in element.GL7Exposures?.where(\elm -> elm.Constraint.matchesConditionsForCoverable(coverable))) {
        if ((element1.ProdsCompldOpsCov != null && element1.ProdsCompldOpsCov != "") && element1.ProdsCompldOpsCov != "Included") {
          classCompldOpsCovNotIncludedCount_1 = classCompldOpsCovNotIncludedCount_1 + 1
        }
      }
    }
  }

  private function AclassificationthatdoesnotincludeProductscoveragetothepremisesmustbeselectedtoattachtheLimitedProductWithdrawalEndorsement() {
    if (ED.tempGL7SublineTypes.Subline == "Premises/Operations and Products/Completed Operations" && ED.tempGL7SublineTypes.ProdsWithdrawalCoverage == "Yes") {
      if (classCompldOpsCovNotIncludedCount_1 == 0 && _cf.count(ED.tempGL7SublineTypes.GL7LmtdProductWithdrawalExpenseEndtPolLvl) > 0) {
        Error_Message = "[{0}] A classification that does not include Products coverage to the premises must be selected to attach the Limited Product Withdrawal Endorsement"
      }
    }
  }

}