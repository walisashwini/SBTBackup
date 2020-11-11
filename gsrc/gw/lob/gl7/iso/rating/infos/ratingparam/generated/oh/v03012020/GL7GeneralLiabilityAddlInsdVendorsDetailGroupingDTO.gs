package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdVendorsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdVendorsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdVendorsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdVendorsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdVendorsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdVendorsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdVendorsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdVendorsDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdVendorsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdVendorsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdVendorsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdVendorsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdVendorsDTO {
   return _parent
  }
  

  
}