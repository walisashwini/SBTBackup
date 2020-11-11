package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilitySpecialCombinedPremiumToReachMinCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilitySpecialCombinedPremiumToReachMinCoverageDTO {

  public construct(_gL7SpecialCombinedPremiumToReachMin : GL7SpecialCombinedPremiumToReachMin, parent : GL7GeneralLiabilityDTO) {
    super( _gL7SpecialCombinedPremiumToReachMin, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilitySpecialCombinedPremiumToReachMinCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var specialCombinedMinPremiumClassIndicator_1Temp1 : java.math.BigDecimal
   var specialCombinedMinPremiumClassIndicator_1 : java.lang.Integer
   specialCombinedMinPremiumClassIndicator_1 = 0
   for (element in ParentLineModelObject.Location.All) {
     for (element1 in element.Classification.All) {
       if (element1.SpecialCombinedMinPremiumClassIndicator != null && element1.SpecialCombinedMinPremiumClassIndicator != "") {
         specialCombinedMinPremiumClassIndicator_1Temp1 = specialCombinedMinPremiumClassIndicator_1 + _cf.makeBigDecimalFrom(element1.SpecialCombinedMinPremiumClassIndicator)
         specialCombinedMinPremiumClassIndicator_1 = _cf.makeIntegerFrom(specialCombinedMinPremiumClassIndicator_1Temp1)
       }
     }
   }
   if (ParentLineModelObject.Subline == "Premises/Operations and Products/Completed Operations" && specialCombinedMinPremiumClassIndicator_1 == 0) {
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