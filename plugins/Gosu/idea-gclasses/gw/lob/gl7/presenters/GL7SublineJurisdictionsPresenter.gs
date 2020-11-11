package gw.lob.gl7.presenters

uses gw.api.locale.DisplayKey
uses gw.lob.common.LobPropertyService
uses gw.lob.gl7.GL7JurisdictionUtil

class GL7SublineJurisdictionsPresenter {

  var _line : GL7GeneralLiabilityLine
  var _subline : String as readonly Subline
  var _sublineChoice : GL7SublinesPresenter.SublineChoice

  construct(line : GL7GeneralLiabilityLine, sublineChoice : GL7SublinesPresenter.SublineChoice) {
    _line = line
    _sublineChoice = sublineChoice
    _subline = sublineChoice.Subline
  }

  property get Choices() : List<JurisdictionChoice> {
    var validSublines = GL7PresenterUtil.validSublinesForPeriod(_line.Branch)
    var sublineToJurisdictionMap = GL7PresenterUtil.sublinesToJurisdictionMap(validSublines)
    var allJurisdictions = sublineToJurisdictionMap.get(_subline)

    if (allJurisdictions.contains("CW")) {
      var usJurisdictions = Jurisdiction.getTypeKeys(false).where(\ j -> j.hasCategory(Country.TC_US))*.Code.toList()
      allJurisdictions.remove("CW")
      allJurisdictions.addAll(usJurisdictions.toList())
    }

    var validJurisdictions = allJurisdictions.where(\ jurisdiction ->
      stateAvailableForPolicyPeriod(jurisdiction) and stateAvailableForSubline(jurisdiction)
    )

    return validJurisdictions.map(\ jurisdiction -> new JurisdictionChoice(Jurisdiction.get(jurisdiction), _line.jurisdictionExists(Jurisdiction.get(jurisdiction), _subline)))
  }

  function updateSelectedChoicesFrom(selectedChoices : JurisdictionChoice[]) {
    var selectedJurisdictions = selectedChoices*.Jurisdiction
    Choices.each(\ choice -> { choice.Selected = selectedJurisdictions.contains(choice.Jurisdiction) })
  }

  private function stateAvailableForSubline(state : String) : boolean {
    return GL7PresenterUtil.isSublineValidForState(_subline, state, _line.Branch)
       and not GL7PresenterUtil.isSublineExpiredForState(_subline, state, _line.Branch)
  }

  function updateSelectedJurisdictionsForSubline() {
    var selectedJurisdictions = _line.jurisdictionsForSubline(_subline)*.Code.toList()
    _sublineChoice.Jurisdictions = selectedJurisdictions.HasElements ? selectedJurisdictions : {DisplayKey.get("Web.Policy.GL7.NoneSelected")}
  }

  private function createSubline(jurisdiction : Jurisdiction) {
    var subline = new GL7Subline(_line.Branch)
    var sublineType = _line.GL7SublineTypes.firstWhere(\ s -> s.SublineTypeName == _subline)
    sublineType.addToSublines(subline)

    subline.Jurisdiction = jurisdiction
    LobPropertyService.Instance.initializeCoverable(subline)
  }

  protected function updateSublineFor(choice : JurisdictionChoice) {
    var jurisdiction = choice.Jurisdiction
    if (choice.Selected and not _line.jurisdictionExists(jurisdiction, _subline)) {
      createSubline(jurisdiction)
    } else if (not choice.Selected and _line.jurisdictionExists(jurisdiction, _subline)) {
      _line.sublineTypeFor(_subline).removeGL7Subline(_line.sublineForJurisdiction(jurisdiction, _subline))
    }
  }

  private function stateAvailableForPolicyPeriod(state : String) : boolean {
    var jurisdictionUtil = new GL7JurisdictionUtil(_line.Branch)
    return jurisdictionUtil.productAvailableForState(Jurisdiction.get(state))
  }

  class JurisdictionChoice {
    var _jurisdiction : Jurisdiction as Jurisdiction
    var _selected : boolean

    construct(jurisdiction : Jurisdiction, selected : boolean) {
      _jurisdiction = jurisdiction
      _selected = selected
    }

    property get JurisdictionDescription() : String {
      return _jurisdiction.Description
    }

    property get Selected() : boolean {
      return _selected
    }

    property set Selected(value : boolean) {
      _selected = value
      updateSublineFor(this)
    }
  }

}