package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPrimaryAndNoncontributoryOtherInsuranceConditionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPrimaryAndNoncontributoryOtherInsuranceConditionDTO {

  public construct(_gL7PrimaryAndNoncontributoryOtherInsuranceConditio : GL7PrimaryAndNoncontributoryOtherInsuranceConditio, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PrimaryAndNoncontributoryOtherInsuranceConditio, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPrimaryAndNoncontributoryOtherInsuranceConditionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}