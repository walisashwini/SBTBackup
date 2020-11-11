package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO {

  public construct(_gL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor : GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor, parent )
    _addlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetail = _gL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailGroupingDTO(_gL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetail() : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailGroupingDTO {
   return _addlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetail as GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}