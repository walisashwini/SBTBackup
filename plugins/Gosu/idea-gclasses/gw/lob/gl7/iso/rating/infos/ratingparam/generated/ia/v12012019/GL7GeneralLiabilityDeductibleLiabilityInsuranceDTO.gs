package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDeductibleLiabilityInsuranceDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDeductibleLiabilityInsuranceDTO {

  public construct(_gL7DedLiabInsurance : GL7DedLiabInsurance, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DedLiabInsurance, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDeductibleLiabilityInsuranceDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}