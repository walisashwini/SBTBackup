package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdExecsAdminsTrstesBeneficsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdExecsAdminsTrstesBeneficsDTO {

  public construct(_gL7AddlInsdExecsAdminsTrstesBenefics : GL7AddlInsdExecsAdminsTrstesBenefics, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdExecsAdminsTrstesBenefics, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdExecsAdminsTrstesBeneficsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}