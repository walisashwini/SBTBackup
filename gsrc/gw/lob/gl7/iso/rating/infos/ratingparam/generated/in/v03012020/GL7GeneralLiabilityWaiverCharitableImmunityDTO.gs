package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverCharitableImmunityDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverCharitableImmunityDTO {

  public construct(_gL7WaiverCharitableImmunity : GL7WaiverCharitableImmunity, parent : GL7GeneralLiabilityDTO) {
    super( _gL7WaiverCharitableImmunity, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverCharitableImmunityDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}