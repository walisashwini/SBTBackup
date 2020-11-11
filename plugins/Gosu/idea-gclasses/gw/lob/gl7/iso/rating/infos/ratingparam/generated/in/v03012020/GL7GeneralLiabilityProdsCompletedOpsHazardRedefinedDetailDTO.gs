package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO {
   return _parent as GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO
  }
  

  
}