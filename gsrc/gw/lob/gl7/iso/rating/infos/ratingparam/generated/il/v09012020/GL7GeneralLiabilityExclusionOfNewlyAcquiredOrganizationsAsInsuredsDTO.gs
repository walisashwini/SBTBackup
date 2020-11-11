package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionOfNewlyAcquiredOrganizationsAsInsuredsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionOfNewlyAcquiredOrganizationsAsInsuredsDTO {

  public construct(_gL7ExclOfNewlyAcquiredOrganizationsAsInsureds : GL7ExclOfNewlyAcquiredOrganizationsAsInsureds, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclOfNewlyAcquiredOrganizationsAsInsureds, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionOfNewlyAcquiredOrganizationsAsInsuredsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}