package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdGrantorLicensesDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdGrantorLicensesDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdGrantorLicensesDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdGrantorLicensesDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdGrantorLicensesDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdGrantorLicensesDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdGrantorLicensesDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdGrantorLicensesDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdGrantorLicensesDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdGrantorLicensesDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdGrantorLicensesDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdGrantorLicensesDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdGrantorLicensesDTO {
   return _parent
  }
  

  
}