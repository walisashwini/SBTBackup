package gw.lob.gl7.presenters

uses gw.lob.common.LobPropertyService
uses gw.lob.common.compatibility.LobCompatibilityHelper
uses gw.lob.gl7.GL7SublineTypeName
uses gw.lob.gl7.GL7UnmannedAircraftFilter
uses gw.lob.gl7.compatibility.GL7CompatibilityConstants
uses gw.lob.gl7.validation.GL7LineValidation

class GL7UnmannedAircraftPresenter {

  var _policyPeriod : PolicyPeriod
  var _unmannedAircraft : GL7UnmannedAircraft
  var _policyLocation: PolicyLocation

  private construct(policyPeriod: PolicyPeriod, unmannedAircraft: GL7UnmannedAircraft) {
    _policyPeriod = policyPeriod
    _unmannedAircraft = unmannedAircraft
    _policyLocation = unmannedAircraft?.Exposure?.GL7Location?.Location
  }

  static function createWithNewUnmannedAircraft(policyPeriod : PolicyPeriod) : GL7UnmannedAircraftPresenter {
    return new GL7UnmannedAircraftPresenter(policyPeriod, null)
  }

  static function create(unmannedAircraft : GL7UnmannedAircraft) : GL7UnmannedAircraftPresenter {
    return new GL7UnmannedAircraftPresenter(unmannedAircraft.Branch, unmannedAircraft)
  }

  static function validUnmannedAircrafts(line : GL7Line, typeFilterChoice : String, filterValue : String) : GL7UnmannedAircraftPresenter[] {
    var unmannedAircrafts = validExposures(line)*.UnmannedAircrafts

    if(filterValue != null and filterValue.HasContent) {
      switch (typeFilterChoice) {
        case GL7UnmannedAircraftFilter.ModelTypeFilter:
          return unmannedAircrafts
              .where(\unmannedAircraft -> unmannedAircraft.Model.containsIgnoreCase(filterValue))
              .map(\unmannedAircraft -> gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.create(unmannedAircraft))
        case GL7UnmannedAircraftFilter.ManufacturerTypeFilter:
          return unmannedAircrafts
              .where(\unmannedAircraft -> unmannedAircraft.Manufacturer.containsIgnoreCase(filterValue))
              .map(\unmannedAircraft -> gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.create(unmannedAircraft))
        case GL7UnmannedAircraftFilter.AircraftIdCodeTypeFilter:
          return unmannedAircrafts
              .where(\unmannedAircraft -> unmannedAircraft.UAIdentificationCode.containsIgnoreCase(filterValue))
              .map(\unmannedAircraft -> gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.create(unmannedAircraft))
        case GL7UnmannedAircraftFilter.LocationTypeFilter:
          return unmannedAircrafts
              .where(\unmannedAircraft -> unmannedAircraft.Exposure.GL7Location.Location.PublicID == filterValue)
              .map(\unmannedAircraft -> gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.create(unmannedAircraft))
        case GL7UnmannedAircraftFilter.SublineTypeFilter:
          return unmannedAircrafts
              .where(\unmannedAircraft -> unmannedAircraft.Exposure.GL7Location.SublineTypeName == filterValue)
              .map(\unmannedAircraft -> gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.create(unmannedAircraft))
      }
    }

    return unmannedAircrafts.map(\unmannedAircraft -> gw.lob.gl7.presenters.GL7UnmannedAircraftPresenter.create(unmannedAircraft))
  }

  static function validLocations(line : GL7Line) : PolicyLocation[] {
    return validExposures(line)*.GL7Location*.Location.toSet()?.toArray(new PolicyLocation[0])
  }

  static function validExposures(line : GL7Line) : GL7Exposure[] {
    return line.GL7Exposures.where(\exposure ->
        isUnmannedAircraftAvailableForExposure(line, exposure)
    )
  }

  private static function isUnmannedAircraftAvailableForExposure(line : GL7Line, exposure : GL7Exposure) : boolean {
    var sublineAvailability = GL7SublineTypeName.UnmannedAircraftSublines.contains(exposure.SublineTypeName)
    if (not sublineAvailability) {
      return false
    }

    var sublineType = line.sublineTypeFor(exposure.SublineTypeName)
    var lmtdClauseAttached = false
    var availableForJurisdiction = true
    if (sublineType.SublineTypeName == GL7SublineTypeName.RAILROAD.Description) {
      lmtdClauseAttached = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftRailroad)
      availableForJurisdiction = GL7LineValidation.railroadAvailableForJurisdiction(exposure.GL7Location.Jurisdiction)
    } else if (sublineType.SublineTypeName == GL7SublineTypeName.OWNERS_AND_CONTRACTORS.Description) {
      lmtdClauseAttached = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftOwnersContractors)
      availableForJurisdiction = GL7LineValidation.ownersAndConractorsAvailableForJurisdiction(exposure.GL7Location.Jurisdiction)
    } else if (sublineType.SublineTypeName == GL7SublineTypeName.CGL.Description or sublineType.SublineTypeName == GL7SublineTypeName.PREMISE_OPERATIONS.Description) {
      lmtdClauseAttached = LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraft)
          or LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovAOnly)
          or LobCompatibilityHelper.hasCoverage(sublineType, GL7CompatibilityConstants.COV_LmtdCovForDesignatedUnmannedAircraftCovBOnly)
    }

    return lmtdClauseAttached and availableForJurisdiction
  }

  static function validSublines(line : GL7Line) : String[] {
    return validExposures(line)*.SublineTypeName
        .where(\subline -> GL7SublineTypeName.UnmannedAircraftSublines.contains(subline))
        .toSet()
        .toArray(new String[0])
  }

  function removeFromPolicy() {
    var exposure = UnmannedAircraft.Exposure

    if (exposure == null) {
      UnmannedAircraft.remove()
      return
    }

    exposure.removeAndRenumberUnmannedAircrafts(UnmannedAircraft, Line)
  }

  property get UnmannedAircraft(): GL7UnmannedAircraft {
    if (_unmannedAircraft == null) {
      _unmannedAircraft = new GL7UnmannedAircraft(_policyPeriod).getSlice(_policyPeriod.EditEffectiveDate)
    }

    return _unmannedAircraft
  }

  private property get Line() : GL7Line {
    return _policyPeriod.GL7Line
  }

  property get IsEditEffective() : boolean {
    return UnmannedAircraft.isEffective( UnmannedAircraft.Branch.EditEffectiveDate )
  }

  property get UAIdentificationCode() : String {
    return UnmannedAircraft.UAIdentificationCode
  }

  property get UnmannedAircraftNumber() : Integer {
    return UnmannedAircraft.UnmannedAircraftNumber
  }

  property get Manufacturer() : String {
    return UnmannedAircraft.Manufacturer
  }

  property get Model() : String {
    return UnmannedAircraft.Model
  }

  property get ClassCode() : String {
    return UnmannedAircraft.Exposure.DomainModel.ClassCode
  }

  property get ClassDescription() : String {
    return UnmannedAircraft.Exposure.DomainModel.ClassDescription
  }

  // this will also select the exposure that will be attached to the UnmannedAircraft
  property set ClassCode(classCode: String)  {
    if (classCode == null)
      return

    var allExposures = Line.GL7Exposures
    var selectedExposure = allExposures.firstWhere(\exposure -> exposure.DomainModel.ClassCode == classCode and
        exposure.GL7Location.Location.PublicID == Location.PublicID)

    if (UnmannedAircraft.UnmannedAircraftNumber == null) {
      selectedExposure.addAndNumberUnmannedAircraft(UnmannedAircraft, Line)
    } else {
      UnmannedAircraft.Exposure = selectedExposure
    }


    LobPropertyService.Instance.syncCoverableProperties(UnmannedAircraft)
  }

  property get IsClassCodeSet() : boolean {
    return UnmannedAircraft.Exposure.DomainModel.ClassCode != null
  }

  property get IsLocationSet() : boolean {
    return _policyLocation != null
  }

  property get Location() : PolicyLocation {
    return UnmannedAircraft.Exposure.GL7Location == null ? _policyLocation : UnmannedAircraft.Exposure.GL7Location.Location
  }

  property set Location(policyLocation : PolicyLocation) {
    if (policyLocation == null)
      return
    UnmannedAircraft.Exposure = null // location change will remove the current exposure.
    _policyLocation = policyLocation
  }

  property get SublineType() : GL7SublineType {
    return UnmannedAircraft.Exposure.GL7Location.SublineType
  }

  property get ValidClassCodes() : String[] {
    var validExposures = validExposures(Line).where(\exposure -> exposure.GL7Location.Location.FixedId == _policyLocation.FixedId)
    return validExposures*.DomainModel*.ClassCode
  }

  static function getUnmannedAircraftDescription(unmannedAircraft : GL7UnmannedAircraft) : String {
    return unmannedAircraft.UnmannedAircraftNumber + ": " + unmannedAircraft.Manufacturer + " " + unmannedAircraft.Model + " " + unmannedAircraft.UAIdentificationCode
  }

}
