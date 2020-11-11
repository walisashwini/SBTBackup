package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityNonBindingArbitrationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityNonBindingArbitrationDTO {

  public construct(_gL7NonBindingArbitration : GL7NonBindingArbitration, parent : GL7GeneralLiabilityDTO) {
    super( _gL7NonBindingArbitration, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityNonBindingArbitrationDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}