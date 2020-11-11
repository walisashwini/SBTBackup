package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO {

  public construct(_gL7UndergroundResourcesAndEquipmtCov : GL7UndergroundResourcesAndEquipmtCov, parent : GL7GeneralLiabilityDTO) {
    super( _gL7UndergroundResourcesAndEquipmtCov, parent )
    _undergroundResourcesAndEquipmtCovDetail = _gL7UndergroundResourcesAndEquipmtCov.GL7ScheduledItems != null ? new GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailGroupingDTO(_gL7UndergroundResourcesAndEquipmtCov.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get UndergroundResourcesAndEquipmtCovDetail() : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailGroupingDTO {
   return _undergroundResourcesAndEquipmtCovDetail as GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}