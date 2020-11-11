package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityGovernmentalSubdivisionsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityGovernmentalSubdivisionsDTO {

  public construct(_gL7GovSubdivisions : GL7GovSubdivisions, parent : GL7GeneralLiabilityDTO) {
    super( _gL7GovSubdivisions, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityGovernmentalSubdivisionsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}