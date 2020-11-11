package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO) {
    super( _gL7LocationSchedCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO {
   return _parent as GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO
  }
  

  
}