package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO) {
    super( _gL7LocationSchedCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO {
   return _parent as GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO
  }
  

  
}