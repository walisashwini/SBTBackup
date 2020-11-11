package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclIntercompanyProductsSuitsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclIntercompanyProductsSuitsDTO {

  public construct(_gL7ExclIntercompanyProdsSuits : GL7ExclIntercompanyProdsSuits, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclIntercompanyProdsSuits, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclIntercompanyProductsSuitsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}