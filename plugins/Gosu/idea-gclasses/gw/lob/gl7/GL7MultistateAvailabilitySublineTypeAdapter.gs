package gw.lob.gl7

uses gw.lob.common.LobPropertyService
uses gw.lob.common.MultistateAvailabilityCoverable

class GL7MultistateAvailabilitySublineTypeAdapter implements MultistateAvailabilityCoverable {

  var _owner : GL7SublineType

  construct(owner : GL7SublineType) {
    _owner = owner
  }

  override function isClauseMultistateAvailable(clauseCode : String) : Boolean {
    return LobPropertyService.Instance.isClauseAvailable(_owner, clauseCode)
  }

  override function isCovTermMultistateAvailable(clauseCode : String, covTermCode : String) : Boolean {
    if (_owner.Subline == GL7SublineTypeName.LIQUOR.Description and covTermCode == "GL7EachCommonCauseLimit" and _owner.Sublines.Count == 1
        and _owner.Sublines.first().Jurisdiction == Jurisdiction.TC_IL and _owner.Line.BaseState == Jurisdiction.TC_IL) {
      return false
    }
    return LobPropertyService.Instance.isCovTermAvailable(_owner, clauseCode, covTermCode)
  }
}