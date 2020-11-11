package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityProfessionalLiabExclComputerDataProcessingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityProfessionalLiabExclComputerDataProcessingDTO {

  public construct(_gL7ProfessionalLiabExclCompDataProcessing : GL7ProfessionalLiabExclCompDataProcessing, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ProfessionalLiabExclCompDataProcessing, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProfessionalLiabExclComputerDataProcessingDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}