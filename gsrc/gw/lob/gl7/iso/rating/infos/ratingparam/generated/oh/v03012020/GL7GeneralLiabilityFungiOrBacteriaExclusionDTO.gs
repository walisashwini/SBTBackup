package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityFungiOrBacteriaExclusionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityFungiOrBacteriaExclusionDTO {

  public construct(_gL7FungiOrBacteriaExcl : GL7FungiOrBacteriaExcl, parent : GL7GeneralLiabilityDTO) {
    super( _gL7FungiOrBacteriaExcl, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityFungiOrBacteriaExclusionDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}