package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailGroupingDTO extends gw.rating.LineModelObject implements gw.rating.Groupable<GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailDTO> {

  public construct(_gL7SublineSchedCovItems : GL7SublineSchedCovItem[], parent : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineSchedCovItems
    _all = _gL7SublineSchedCovItems.map(\obj -> new GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailDTO) {
    _current = current
  }

  @VisibleInRateflow
  var _current : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailDTO as readonly Current  

  @VisibleInRateflow
  var _all : java.util.List<GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDetailDTO> as readonly All  

  var _parent : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmendmentOfDefinitionOfPollutantsDTO {
   return _parent
  }
  

  
}