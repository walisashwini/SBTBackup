package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPremOpsPremiumToReachMinCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPremOpsPremiumToReachMinCoverageDTO {

  public construct(_gL7PremOpsPremiumToReachMin : GL7PremOpsPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PremOpsPremiumToReachMin, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPremOpsPremiumToReachMinCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   if (ParentLineModelObject.Subline == "Premises/Operations and Products/Completed Operations" || ParentLineModelObject.Subline == "Premises/Operations") {
     coverageOnPolicyIndicator = 1
   } else {
     coverageOnPolicyIndicator = 0
   }
   return coverageOnPolicyIndicator
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}