package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDisclosurePursuantToTerrorismRiskInsuranceActOf2002DTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDisclosurePursuantToTerrorismRiskInsuranceActOf2002DTO {

  public construct(_gL7DisclosurePursuantToTerrRiskInsuranceActOf2002 : GL7DisclosurePursuantToTerrRiskInsuranceActOf2002, parent : GL7GeneralLiabilityDTO) {
    super( _gL7DisclosurePursuantToTerrRiskInsuranceActOf2002, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDisclosurePursuantToTerrorismRiskInsuranceActOf2002DTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}