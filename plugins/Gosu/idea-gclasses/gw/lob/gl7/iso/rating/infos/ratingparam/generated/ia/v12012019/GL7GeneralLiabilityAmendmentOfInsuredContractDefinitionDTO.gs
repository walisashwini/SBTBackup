package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmendmentOfInsuredContractDefinitionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmendmentOfInsuredContractDefinitionDTO {

  public construct(_gL7AmendmentOfInsuredContractDefinition : GL7AmendmentOfInsuredContractDefinition, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmendmentOfInsuredContractDefinition, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmendmentOfInsuredContractDefinitionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}