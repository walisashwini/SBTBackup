package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdGrantorFranchiseDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdGrantorFranchiseDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdGrantorFranchiseDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdGrantorFranchiseDTO {
   return _parent
  }
  

  
}