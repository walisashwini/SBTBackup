package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO) {
    super( _gL7SublineTypeSchCondItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO {
   return _parent as GL7GeneralLiabilityLimitedContractualLiabCovPersonalAdvertisingInjDTO
  }
  

  
}