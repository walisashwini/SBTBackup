package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedExclPersonalAdvertisingInjLawyersDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedExclPersonalAdvertisingInjLawyersDTO {

  public construct(_gL7LmtdExclPersonalAdvertisingInjLawyers : GL7LmtdExclPersonalAdvertisingInjLawyers, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdExclPersonalAdvertisingInjLawyers, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedExclPersonalAdvertisingInjLawyersDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}