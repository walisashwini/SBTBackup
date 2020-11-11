package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityBindingArbitrationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityBindingArbitrationDTO {

  public construct(_gL7BindingArbitration : GL7BindingArbitration, parent : GL7GeneralLiabilityDTO) {
    super( _gL7BindingArbitration, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityBindingArbitrationDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}