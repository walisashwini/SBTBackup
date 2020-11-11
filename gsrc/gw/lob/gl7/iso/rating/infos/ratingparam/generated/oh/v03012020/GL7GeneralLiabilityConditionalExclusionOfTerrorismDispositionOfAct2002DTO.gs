package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityConditionalExclusionOfTerrorismDispositionOfAct2002DTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityConditionalExclusionOfTerrorismDispositionOfAct2002DTO {

  public construct(_gL7CondExclOfTerrDispositionOfAct2002 : GL7CondExclOfTerrDispositionOfAct2002, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CondExclOfTerrDispositionOfAct2002, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityConditionalExclusionOfTerrorismDispositionOfAct2002DTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}