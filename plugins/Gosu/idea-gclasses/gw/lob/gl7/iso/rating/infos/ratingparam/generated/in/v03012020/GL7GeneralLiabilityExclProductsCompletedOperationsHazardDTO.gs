package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclProductsCompletedOperationsHazardDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclProductsCompletedOperationsHazardDTO {

  public construct(_gL7ExclProdsCompletedOpsHazard : GL7ExclProdsCompletedOpsHazard, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclProdsCompletedOpsHazard, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclProductsCompletedOperationsHazardDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}