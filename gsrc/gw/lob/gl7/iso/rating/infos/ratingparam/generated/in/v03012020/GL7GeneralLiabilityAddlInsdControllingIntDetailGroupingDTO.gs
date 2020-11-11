package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdControllingIntDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdControllingIntDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdControllingIntDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdControllingIntDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdControllingIntDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdControllingIntDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdControllingIntDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdControllingIntDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdControllingIntDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdControllingIntDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdControllingIntDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdControllingIntDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdControllingIntDTO {
   return _parent
  }
  

  
}