package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO) {
    super( _gL7SublineTypeSchCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO {
   return _parent as GL7GeneralLiabilityUndergroundResourcesAndEquipmtCovDTO
  }
  

  
}