package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO {

  public construct(_gL7LmtdContractualLiabCovPersonalAdvertisingInj : GL7LmtdContractualLiabCovPersonalAdvertisingInj, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdContractualLiabCovPersonalAdvertisingInj, parent )
    _limitedContractualLiabCovPersonalAdvertisingInjDetail = _gL7LmtdContractualLiabCovPersonalAdvertisingInj.GL7ScheduledItems != null ? new GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailGroupingDTO(_gL7LmtdContractualLiabCovPersonalAdvertisingInj.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitedContractualLiabCovPersonalAdvertisingInjDetail() : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailGroupingDTO {
   return _limitedContractualLiabCovPersonalAdvertisingInjDetail as GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}