package gw.lob.gl7.presenters

uses gw.api.locale.DisplayKey
uses gw.lob.common.LobPropertyService

uses java.util.Map

class GL7SublinesPresenter {
  var _line : GL7GeneralLiabilityLine

  construct(line : GL7GeneralLiabilityLine) {
    _line = line
  }

  property get Choices() : List<SublineChoice> {
    var choices = AvailableSublines.toSet().map(\ subline -> {
      var selectedJurisdictions = _line.sublineTypeFor(subline).Sublines*.Jurisdiction*.Code.toList()
      return new SublineChoice(subline, selectedJurisdictions, _line.sublineTypeExists(subline))
    })
    return GL7PresenterUtil.orderBySubline(choices, \ choice -> choice.Subline)
  }

  private property get AvailableSublines() : List<String> {
    var jurisdictionsAvailableForLine = _line.JurisdictionsAvailableForLine
    return AllSublinesInEffect.where(\ subline ->
        not ExpiredSublinesToJurisdiction.get(subline).containsAll(jurisdictionsAvailableForLine))
  }

  private property get AllSublinesInEffect() : List<String> {
    var allSublines = GL7PresenterUtil.validSublinesForPeriod(_line.Branch)
    return GL7PresenterUtil.sublinesToJurisdictionMap(allSublines).Keys.toList()
  }

  private property get ExpiredSublinesToJurisdiction() : Map<String, List<String>> {
    var allExpiredSubs = GL7PresenterUtil.expiredSublinesForPeriod(_line.Branch)
    return GL7PresenterUtil.sublinesToJurisdictionMap(allExpiredSubs)
  }

  protected function updateSublineFor(choice : SublineChoice) {
    var sublineType = choice.Subline
    if (choice.Selected and not _line.sublineTypeExists(sublineType)) {
      createSublineType(sublineType)
    } else if (not choice.Selected and _line.sublineTypeExists(sublineType)) {
      _line.removeGL7SublineType(_line.sublineTypeFor(sublineType))
    }
  }

  function updateJurisdictions(choice : SublineChoice) {
    if (!choice.Selected) {
      choice.Jurisdictions = {DisplayKey.get("Web.Policy.GL7.NoneSelected")}
    }
  }

  private function createSublineType(sublineType: String) {
    var sublineTypeCoverable = new GL7SublineType(_line.Branch)
    sublineTypeCoverable.Subline = sublineType
    _line.addToGL7SublineTypes(sublineTypeCoverable)
    LobPropertyService.Instance.initializeCoverable(sublineTypeCoverable)
  }

  class SublineChoice {
    var _subline : String as readonly Subline
    var _jurisdictions : List<String> as Jurisdictions
    var _selected : boolean as Selected

    construct(subline : String, selectedJurisdictions : List<String>, selected : boolean) {
      _subline = subline
      _selected = selected
      _jurisdictions = selectedJurisdictions.Empty ? {DisplayKey.get("Web.Policy.GL7.NoneSelected")} : selectedJurisdictions
    }

    property get FormattedJurisdictions() : String {
      return _jurisdictions.order().join(", ")
    }

    property set Selected(value : boolean) {
      _selected = value
      updateSublineFor(this)
    }
  }
}