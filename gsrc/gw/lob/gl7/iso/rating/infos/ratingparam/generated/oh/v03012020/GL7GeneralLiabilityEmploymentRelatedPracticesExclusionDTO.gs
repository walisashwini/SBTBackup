package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityEmploymentRelatedPracticesExclusionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityEmploymentRelatedPracticesExclusionDTO {

  public construct(_gL7EmploymentReltdPracticesExcl : GL7EmploymentReltdPracticesExcl, parent : GL7GeneralLiabilityDTO) {
    super( _gL7EmploymentReltdPracticesExcl, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityEmploymentRelatedPracticesExclusionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}