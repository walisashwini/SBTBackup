package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionRailroadDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionRailroadDTO {

  public construct(_gL7SilicaOrSilicaReltdDustExclRailroad : GL7SilicaOrSilicaReltdDustExclRailroad, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SilicaOrSilicaReltdDustExclRailroad, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySilicaOrSilicaRelatedDustExclusionRailroadDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}