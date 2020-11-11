package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdUsersOfTeamsDraftOrSaddleAnimalsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdUsersOfTeamsDraftOrSaddleAnimalsDTO {

  public construct(_gL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals : GL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdUsersOfTeamsDraftOrSaddleAnimals, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdUsersOfTeamsDraftOrSaddleAnimalsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}