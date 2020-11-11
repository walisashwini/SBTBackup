package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdConcessionairesDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdConcessionairesDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdConcessionairesDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdConcessionairesDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdConcessionairesDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdConcessionairesDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdConcessionairesDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdConcessionairesDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdConcessionairesDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdConcessionairesDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdConcessionairesDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdConcessionairesDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdConcessionairesDTO {
   return _parent
  }
  

  
}