package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityInsuredSiteDefinitionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityInsuredSiteDefinitionDTO {

  public construct(_gL7InsuredSiteDefinition : GL7InsuredSiteDefinition, parent : GL7GeneralLiabilityDTO) {
    super( _gL7InsuredSiteDefinition, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityInsuredSiteDefinitionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}