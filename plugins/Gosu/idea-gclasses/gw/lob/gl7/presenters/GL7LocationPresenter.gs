package gw.lob.gl7.presenters

uses gw.api.util.JurisdictionMappingUtil
uses gw.lob.gl7.GL7LocationContainer
uses gw.lob.gl7.synchronizer.GL7LocationSynchronizer

class GL7LocationPresenter {
  var _line : GL7GeneralLiabilityLine
  var _location : PolicyLocation as PolicyLocation
  var _choices : List<SublineChoice> as Choices

  construct(line : GL7GeneralLiabilityLine, location : PolicyLocation) {
    _line = line
    _location = location
    initializeChoices()
  }

  function resetLocations() {
    new GL7LocationContainer(_line).removeLocations(_location)
    initializeChoices()
  }

  function removeUnselectedLocations() {
    Choices.where(\ choice -> not choice.Selected)
        .map(\ choice -> getCorrespondingLocation(choice.Subline))
        .where(\ location -> location != null)
        .each(\location -> location.SublineType.removeGL7Location(location))
  }

  property get LocationsOfSelectedChoices() : List<GL7Location> {
    var locations = Choices.where(\ choice -> choice.Selected)
        .map(\ choice -> getCorrespondingLocation(choice.Subline))

    return GL7PresenterUtil.orderBySubline(locations, \location -> location.SublineType.Subline)
  }

  function syncZipCode() {
    LocationSynchronizers.each(\ synchronizer -> synchronizer.syncZipCode())
  }

  function syncCounty() {
    LocationSynchronizers.each(\ synchronizer -> synchronizer.syncCounty())
  }

  function syncTerritoryIndicator() {
    LocationSynchronizers.each(\ synchronizer -> synchronizer.syncTerritoryIndicator())
  }

  private property get LocationSynchronizers() : List<GL7LocationSynchronizer> {
    return AllLocations.map(\ location -> new gw.lob.gl7.synchronizer.GL7LocationSynchronizer(location))
  }

  private property get AllLocations() : List<GL7Location> {
    return GL7CoverablePerSubline.forLocation(_line, _location).SublineSortedCoverables.toList()
  }

  private function initializeChoices() {
    var choices = _location.State == null
        ? {} as List<SublineChoice>
        : _line.sublinesForJurisdiction(JurisdictionMappingUtil.getJurisdiction(_location))
            .map(\ subline -> new SublineChoice(subline.Name, getCorrespondingLocation(subline.Name) != null))

    _choices = GL7PresenterUtil.orderBySubline(choices, \ choice -> choice.Subline)
  }

  private function getCorrespondingSublineType(subline : String) : GL7SublineType {
    return _line.GL7SublineTypes.singleWhere(\ s -> s.Subline == subline)
  }

  private function getCorrespondingLocation(subline: String) : GL7Location {
    return getCorrespondingSublineType(subline).Locations
        .firstWhere(\ location -> location.PolicyLocation == _location)
  }

  class SublineChoice {
    var _subline : String as readonly Subline
    var _selected : boolean as Selected

    construct(subline : String, selected : boolean) {
      _subline = subline
      _selected = selected
    }

    property set Selected(value : boolean) {
      _selected = value
      if (_selected and getCorrespondingLocation(_subline) == null) {
        getCorrespondingSublineType(_subline).addToLineSpecificLocations(_location.AccountLocation)
      }
    }
  }

}