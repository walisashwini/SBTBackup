package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityEmploymentRelatedPracticesExclusionOwnersContrctrsPollutionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityEmploymentRelatedPracticesExclusionOwnersContrctrsPollutionDTO {

  public construct(_gL7EmploymentReltdPracticesExclOwnersContrctrsPoll : GL7EmploymentReltdPracticesExclOwnersContrctrsPoll, parent : GL7GeneralLiabilityDTO) {
    super( _gL7EmploymentReltdPracticesExclOwnersContrctrsPoll, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityEmploymentRelatedPracticesExclusionOwnersContrctrsPollutionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}