package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDeductibleLiabilityInsuranceLiquorLiabDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDeductibleLiabilityInsuranceLiquorLiabDTO {

  public construct(_gL7DedLiabInsuranceLiquorLiab : GL7DedLiabInsuranceLiquorLiab, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DedLiabInsuranceLiquorLiab, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDeductibleLiabilityInsuranceLiquorLiabDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}