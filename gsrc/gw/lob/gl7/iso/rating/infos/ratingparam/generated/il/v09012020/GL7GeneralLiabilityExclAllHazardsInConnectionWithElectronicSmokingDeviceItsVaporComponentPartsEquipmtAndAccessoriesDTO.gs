package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclAllHazardsInConnectionWithElectronicSmokingDeviceItsVaporComponentPartsEquipmtAndAccessoriesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclAllHazardsInConnectionWithElectronicSmokingDeviceItsVaporComponentPartsEquipmtAndAccessoriesDTO {

  public construct(_gL7ExclAllHazardsInConnectionWithElectrSmokingDevi : GL7ExclAllHazardsInConnectionWithElectrSmokingDevi, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclAllHazardsInConnectionWithElectrSmokingDevi, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclAllHazardsInConnectionWithElectronicSmokingDeviceItsVaporComponentPartsEquipmtAndAccessoriesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}