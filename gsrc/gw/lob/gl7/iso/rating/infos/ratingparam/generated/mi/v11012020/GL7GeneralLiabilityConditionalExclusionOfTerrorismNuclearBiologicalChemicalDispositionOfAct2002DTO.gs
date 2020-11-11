package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityConditionalExclusionOfTerrorismNuclearBiologicalChemicalDispositionOfAct2002DTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityConditionalExclusionOfTerrorismNuclearBiologicalChemicalDispositionOfAct2002DTO {

  public construct(_gL7CondExclOfTerrNuclearBiologicalChemicalDisposit : GL7CondExclOfTerrNuclearBiologicalChemicalDisposit, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CondExclOfTerrNuclearBiologicalChemicalDisposit, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityConditionalExclusionOfTerrorismNuclearBiologicalChemicalDispositionOfAct2002DTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}