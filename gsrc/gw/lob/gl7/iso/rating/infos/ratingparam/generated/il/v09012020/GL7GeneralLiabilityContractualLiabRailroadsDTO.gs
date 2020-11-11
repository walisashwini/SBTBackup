package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityContractualLiabRailroadsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityContractualLiabRailroadsDTO {

  public construct(_gL7ContractualLiabRailroads : GL7ContractualLiabRailroads, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ContractualLiabRailroads, parent )
    _contractualLiabRailroadsDetail = _gL7ContractualLiabRailroads.GL7ScheduledItems != null ? new GL7GeneralLiabilityContractualLiabRailroadsDetailGroupingDTO(_gL7ContractualLiabRailroads.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityContractualLiabRailroadsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ContractualLiabRailroadsDetail() : GL7GeneralLiabilityContractualLiabRailroadsDetailGroupingDTO {
   return _contractualLiabRailroadsDetail as GL7GeneralLiabilityContractualLiabRailroadsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}