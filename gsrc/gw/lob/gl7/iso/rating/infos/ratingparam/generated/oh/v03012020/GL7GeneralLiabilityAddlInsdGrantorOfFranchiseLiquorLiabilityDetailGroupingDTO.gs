package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdGrantorOfFranchiseLiquorLiabilityDTO {
   return _parent
  }
  

  
}