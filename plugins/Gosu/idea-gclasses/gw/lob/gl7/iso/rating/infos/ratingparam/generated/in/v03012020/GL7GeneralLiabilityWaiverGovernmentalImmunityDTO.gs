package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverGovernmentalImmunityDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverGovernmentalImmunityDTO {

  public construct(_gL7WaiverGovImmunity : GL7WaiverGovImmunity, parent : GL7GeneralLiabilityDTO) {
    super( _gL7WaiverGovImmunity, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverGovernmentalImmunityDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}