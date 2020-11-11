package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO {
   return _current as GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO {
   return _parent
  }
  

  
}