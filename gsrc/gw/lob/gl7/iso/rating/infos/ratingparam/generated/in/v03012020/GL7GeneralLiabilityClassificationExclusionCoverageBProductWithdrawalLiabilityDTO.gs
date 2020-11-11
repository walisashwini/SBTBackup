package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO {

  public construct(_gL7ClassificationExclCovBProductWithdrawalLiab : GL7ClassificationExclCovBProductWithdrawalLiab, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7ClassificationExclCovBProductWithdrawalLiab, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationExclusionCoverageBProductWithdrawalLiabilityDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject = ParentLineModelObject.ParentLineModelObject.ParentLineModelObject
   if (tempParentLineModelObject.Subline == "Product Withdrawal" && (tempParentLineModelObject.ProductWithdrawalCoverageType == "Liability" || tempParentLineModelObject.ProductWithdrawalCoverageType == "Both Expense and Liability")) {
     coverageOnPolicyIndicator = 1
   } else {
     coverageOnPolicyIndicator = 0
   }
   return coverageOnPolicyIndicator
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent as GL7GeneralLiabilityClassificationDTO
  }
  

  
}