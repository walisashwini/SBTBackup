package gw.sbt.pca.validation

uses gw.api.locale.DisplayKey
uses gw.sbt.util.Formatter
uses org.slf4j.LoggerFactory

uses java.util.ArrayList
uses java.util.List

abstract class Validator {
  var _errorMessages : List<String>as ErrorMessages = new ArrayList<String>()

  abstract protected function validate()

  protected function addError(msg : String) {
    ErrorMessages.add(msg)
  }

  property get HasErrors() : boolean {
    return ErrorMessages.HasElements
  }

  function validateAdoptionDate(adoptionDate : Date, effectiveDate : Date, jurisdiction : String) : String {
    var msg : String = null
    if (adoptionDate == null) {
      msg = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Error.AdoptionDateNull")
      addError(msg)
    } else {
      try {
        if (adoptionDate.before(effectiveDate)) {
          msg = DisplayKey.get("Web.Admin.LOB.ProductContentAnalysis.Error.AdoptionBeforeEffectiveDate",
              Formatter.dateToString(adoptionDate),
              jurisdiction,
              Formatter.dateToString(effectiveDate))
          addError(msg)
        }
      } catch (e : java.lang.NullPointerException) {
        LoggerFactory.getLogger("PCA").error("Missing Effective Date During Adoption Date Validation. ", e)
      }
    }
    return msg
  }
}