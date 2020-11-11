package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailGroupingDTO extends gw.rating.LineModelObject implements gw.rating.Groupable<GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailDTO> {

  public construct(_gL7SublineSchedCovItems : GL7SublineSchedCovItem[], parent : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineSchedCovItems
    _all = _gL7SublineSchedCovItems.map(\obj -> new GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailDTO) {
    _current = current
  }

  @VisibleInRateflow
  var _current : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailDTO as readonly Current  

  @VisibleInRateflow
  var _all : java.util.List<GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDetailDTO> as readonly All  

  var _parent : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsRailRoadCovDTO {
   return _parent
  }
  

  
}