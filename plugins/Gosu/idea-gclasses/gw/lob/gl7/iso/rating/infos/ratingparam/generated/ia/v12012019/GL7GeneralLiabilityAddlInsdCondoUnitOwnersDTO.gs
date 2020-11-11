package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdCondoUnitOwnersDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdCondoUnitOwnersDTO {

  public construct(_gL7AddlInsdCondoUnitOwners : GL7AddlInsdCondoUnitOwners, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdCondoUnitOwners, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdCondoUnitOwnersDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}