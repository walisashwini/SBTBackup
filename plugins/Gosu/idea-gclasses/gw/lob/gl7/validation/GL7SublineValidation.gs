package gw.lob.gl7.validation

uses gw.api.locale.DisplayKey
uses gw.validation.PCValidationBase
uses gw.validation.PCValidationContext

@Export
class GL7SublineValidation extends PCValidationBase {

  var _subline : GL7SublineType as Subline

  construct(valContext : PCValidationContext, subline : GL7SublineType) {
    super(valContext)
    _subline = subline
  }

  override protected function validateImpl() {
    Context.addToVisited(this, "validateImpl")
    noExposureGaps()
    validateLocations()
  }

  private function validateLocations() {
    Context.addToVisited(this, "validateLocations")

    _subline.Locations?.each(\ location -> new GL7LocationValidation(Context, location).validate())
  }

  //Check for gaps in exposure coverage from start to end of Subline effective date range
  private function noExposureGaps() {
    var job = Subline.Line.Branch.Job
    if (job typeis Submission or job typeis Renewal) {
      Context.addToVisited(this, "noExposureGaps")

      var lastReadExpEnd = _subline.EffectiveDate  //Track latest end date of exposures during the iteration
      var cpEnd = _subline.ExpirationDate
      var expCount = 0

      _subline.Locations*.GL7Exposures.toList().sortBy(\ order -> order.EffectiveDate).each(\ e -> {
        expCount++
        //Check for gap before this exposure starts
        if (e.EffectiveDate > lastReadExpEnd) {
          if (expCount == 1) {
            Result.addError( _subline, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Subline.Validation.NoExposureAtStart", _subline.Subline), "GL7LineEU")
          } else {
            Result.addError( _subline, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Subline.Validation.ExposureGap", _subline.Subline,_subline.EffectiveDate.formatDate(SHORT),_subline.ExpirationDate.formatDate(SHORT)), "GL7LineEU")
          }
        }

        if (e.ExpirationDate > lastReadExpEnd) {
          lastReadExpEnd = e.ExpirationDate
        }
        //Check for gap between exposure end and cov part end if there no more exposures
        if (lastReadExpEnd < cpEnd and expCount == _subline.Locations*.GL7Exposures.toList().Count) {
          Result.addError( _subline, ValidationLevel.TC_DEFAULT, DisplayKey.get("Web.Policy.GL7.Subline.Validation.NoExposureAtEnd", _subline.Subline), "GL7LineEU")
        }
      })
    }
  }

}