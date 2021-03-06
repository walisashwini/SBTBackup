package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionOfTerrorismNuclearBiologicalChemicalTerrorismDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionOfTerrorismNuclearBiologicalChemicalTerrorismDTO {

  public construct(_gL7ExclOfTerrNuclearBiologicalChemicalTerr : GL7ExclOfTerrNuclearBiologicalChemicalTerr, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclOfTerrNuclearBiologicalChemicalTerr, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionOfTerrorismNuclearBiologicalChemicalTerrorismDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}