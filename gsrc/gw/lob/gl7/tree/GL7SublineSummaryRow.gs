package gw.lob.gl7.tree

uses gw.lob.gl7.presenters.GL7ExposurePresenter

uses java.util.Collections
uses java.util.Comparator

class GL7SublineSummaryRow extends GL7AbstractSummaryRow<GL7SublineType> {

  var _subline : GL7SublineType
  var _policyLocation : PolicyLocation

  construct(subline : GL7SublineType, policyLocation : PolicyLocation) {
    super(subline)
    _subline = subline
    _policyLocation = policyLocation
    createChildren()
  }

  override property get Description(): String {
    return _subline.Subline
  }

  override property get Location(): PolicyLocation {
    return _policyLocation
  }

  private function createChildren(){
    var gl7Locations = _subline.Locations.where( \ gl7Location -> gl7Location.Location == Location)
    var exposuresForLocationAndSubline = gl7Locations*.GL7Exposures.where( \ exp -> exp.GL7Location.Location == Location
      and exp.GL7Location.SublineType == _subline)

    var sortedExpPresenters = sortedExposures(exposuresForLocationAndSubline.toList())

    sortedExpPresenters.each( \ expPresenter ->
        addChildRow(new GL7ExposureSummaryRow(expPresenter.ExposureSliced, Location)))
  }

  protected function sortedExposures(exposures : List<GL7Exposure>) : List<GL7ExposurePresenter> {
    var expPresenters : List<GL7ExposurePresenter> = {}
    exposures.each( \ exp -> {
      var presenter = GL7ExposurePresenter.create(exp)
      expPresenters.add(presenter)
    })

    Collections.sort(expPresenters, new ExposureComparator())
    return expPresenters
  }

  private class ExposureComparator implements Comparator<GL7ExposurePresenter> {
    override public function compare(exposure1 : GL7ExposurePresenter, exposure2 : GL7ExposurePresenter) : int {
      var effectiveDateComparisonResult = exposure1.EffectiveDate.compareIgnoreTime(exposure2.EffectiveDate)
      return effectiveDateComparisonResult == 0 ? exposure1.ClassCode?.compareToIgnoreCase(exposure2.ClassCode) : effectiveDateComparisonResult
    }
  }
}
