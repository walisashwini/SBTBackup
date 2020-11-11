package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsPremOpsProdsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsPremOpsProdsDTO {

  public construct(_gL7ExclExteriorInsulationAndFinishSystemsPremOpsPr : GL7ExclExteriorInsulationAndFinishSystemsPremOpsPr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclExteriorInsulationAndFinishSystemsPremOpsPr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionExteriorInsulationAndFinishSystemsPremOpsProdsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}