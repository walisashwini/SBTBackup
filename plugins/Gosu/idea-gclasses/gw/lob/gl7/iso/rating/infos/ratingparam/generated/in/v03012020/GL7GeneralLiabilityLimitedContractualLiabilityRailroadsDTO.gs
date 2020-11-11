package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO {

  public construct(_gL7LmtdContractualLiabRailroads : GL7LmtdContractualLiabRailroads, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdContractualLiabRailroads, parent )
    _limitedContractualLiabilityRailroadsDetail = _gL7LmtdContractualLiabRailroads.GL7ScheduledItems != null ? new GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailGroupingDTO(_gL7LmtdContractualLiabRailroads.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitedContractualLiabilityRailroadsDetail() : GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailGroupingDTO {
   return _limitedContractualLiabilityRailroadsDetail as GL7GeneralLiabilityLimitedContractualLiabilityRailroadsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}