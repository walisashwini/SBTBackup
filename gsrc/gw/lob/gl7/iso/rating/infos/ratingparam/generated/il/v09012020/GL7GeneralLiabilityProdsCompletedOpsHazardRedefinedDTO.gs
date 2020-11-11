package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO {

  public construct(_gL7ProdsCompletedOpsHazardRedefined : GL7ProdsCompletedOpsHazardRedefined, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProdsCompletedOpsHazardRedefined, parent )
    _prodsCompletedOpsHazardRedefinedDetail = _gL7ProdsCompletedOpsHazardRedefined.GL7ScheduledItems != null ? new GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailGroupingDTO(_gL7ProdsCompletedOpsHazardRedefined.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ProdsCompletedOpsHazardRedefinedDetail() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailGroupingDTO {
   return _prodsCompletedOpsHazardRedefinedDetail as GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}