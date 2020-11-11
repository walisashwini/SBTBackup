package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityCalculationOfPremiumProductWithdrawalDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityCalculationOfPremiumProductWithdrawalDTO {

  public construct(_gL7CalculationOfPremiumProductWithdrawal : GL7CalculationOfPremiumProductWithdrawal, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CalculationOfPremiumProductWithdrawal, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityCalculationOfPremiumProductWithdrawalDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}