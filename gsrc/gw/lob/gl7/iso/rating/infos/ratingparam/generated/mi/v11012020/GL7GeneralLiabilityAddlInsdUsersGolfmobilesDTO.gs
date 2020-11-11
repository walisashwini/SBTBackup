package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdUsersGolfmobilesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdUsersGolfmobilesDTO {

  public construct(_gL7AddlInsdUsersGolfmobiles : GL7AddlInsdUsersGolfmobiles, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdUsersGolfmobiles, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdUsersGolfmobilesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}