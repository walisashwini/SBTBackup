package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityContractualLiabRailroadsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityContractualLiabRailroadsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityContractualLiabRailroadsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityContractualLiabRailroadsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityContractualLiabRailroadsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityContractualLiabRailroadsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityContractualLiabRailroadsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityContractualLiabRailroadsDetailDTO {
   return _current as GL7GeneralLiabilityContractualLiabRailroadsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityContractualLiabRailroadsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityContractualLiabRailroadsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityContractualLiabRailroadsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityContractualLiabRailroadsDTO {
   return _parent
  }
  

  
}