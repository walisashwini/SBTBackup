package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionOfCertifiedActsOfNuclearBiologicalChemicalActsTerrorismCapOnLossesFromCertifiedActsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionOfCertifiedActsOfNuclearBiologicalChemicalActsTerrorismCapOnLossesFromCertifiedActsDTO {

  public construct(_gL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA : GL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclOfCertifiedActsOfNuclearBiologicalChemicalA, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionOfCertifiedActsOfNuclearBiologicalChemicalActsTerrorismCapOnLossesFromCertifiedActsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}