package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO {
   return _parent
  }
  

  
}