package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdStatePolitlSubdPermitsOwnersContractorsDTO {
   return _parent
  }
  

  
}