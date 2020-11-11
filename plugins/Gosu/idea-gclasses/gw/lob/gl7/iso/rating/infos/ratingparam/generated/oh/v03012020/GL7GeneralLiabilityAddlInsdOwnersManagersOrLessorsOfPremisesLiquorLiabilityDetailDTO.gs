package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO) {
    super( _gL7LocationSchedCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO {
   return _parent as GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO
  }
  

  
}