package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsProdsCompldOpsDTO {

  public construct(_gL7ExclExteriorInsulationAndFinishSystemsProdsComp : GL7ExclExteriorInsulationAndFinishSystemsProdsComp, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclExteriorInsulationAndFinishSystemsProdsComp, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}