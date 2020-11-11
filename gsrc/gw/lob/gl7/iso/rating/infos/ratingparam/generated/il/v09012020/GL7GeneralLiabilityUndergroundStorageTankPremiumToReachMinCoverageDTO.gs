package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUndergroundStorageTankPremiumToReachMinCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUndergroundStorageTankPremiumToReachMinCoverageDTO {

  public construct(_gL7UndergroundStorageTankPremiumToReachMin : GL7UndergroundStorageTankPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
    super( _gL7UndergroundStorageTankPremiumToReachMin, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUndergroundStorageTankPremiumToReachMinCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   return 1
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}