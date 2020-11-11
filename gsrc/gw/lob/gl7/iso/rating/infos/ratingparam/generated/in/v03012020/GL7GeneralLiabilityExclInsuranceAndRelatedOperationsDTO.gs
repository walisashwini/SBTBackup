package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclInsuranceAndRelatedOperationsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclInsuranceAndRelatedOperationsDTO {

  public construct(_gL7ExclInsuranceAndReltdOps : GL7ExclInsuranceAndReltdOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclInsuranceAndReltdOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclInsuranceAndRelatedOperationsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}