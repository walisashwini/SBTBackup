package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclMovementBuildingsStructuresDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclMovementBuildingsStructuresDTO {

  public construct(_gL7ExclMovementBuildingsStructures : GL7ExclMovementBuildingsStructures, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclMovementBuildingsStructures, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclMovementBuildingsStructuresDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}