package gw.lob.gl7.tree

uses gw.api.locale.DisplayKey
uses gw.lob.gl7.presenters.GL7PresenterUtil

class GL7LocationSummaryRow extends GL7AbstractSummaryRow<PolicyLocation> {
  var _line : GL7GeneralLiabilityLine
  var _policyLocation: PolicyLocation

  construct(line : GL7GeneralLiabilityLine, policyLocation : PolicyLocation) {
    super(policyLocation)
    _policyLocation = policyLocation
    _line = line
    createChildren()
  }

  override property get Description() : String {
    return DisplayKey.get("Web.Policy.GL7.PolicyReviewTree.LocationRowDescription", DisplayKey.get("Web.Policy.GL7.PolicyReviewTree.Location"), RowEntity.DisplayName, (RowEntity.PrimaryLoc ? " " + DisplayKey.get("Web.Policy.GL7.PolicyReviewTree.LocationPrimaryIndicator") : ""))
  }

  override property get Location(): PolicyLocation {
    return RowEntity
  }

  private function createChildren(){
    var gl7Locations = _line.GL7SublineTypes*.Locations.where( \ gl7Location -> gl7Location.Location == Location)
    var sublinesForLocation : List<GL7SublineType> = {}
    gl7Locations.each( \ gl7Location -> {
        if(gl7Location.GL7Exposures.Count > 0){
          sublinesForLocation.add(gl7Location.SublineType)
        }
    })

    sortedSublines(sublinesForLocation).each(\ subline  -> addChildRow(new GL7SublineSummaryRow(subline, Location)))
  }

  private function sortedSublines(unsortedSublines : List<GL7SublineType>) : List<GL7SublineType> {
    return GL7PresenterUtil.orderBySubline(unsortedSublines, \ subline -> subline.Subline)
  }
}
