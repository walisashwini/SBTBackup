package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationPremOpsCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationPremOpsCoverageDTO {

  public construct(_gL7ClassificationPremOps : GL7ClassificationPremOps, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7ClassificationPremOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationPremOpsCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject = ParentLineModelObject.ParentLineModelObject.ParentLineModelObject
   if (tempParentLineModelObject.Subline == "Premises/Operations and Products/Completed Operations" || tempParentLineModelObject.Subline == "Premises/Operations") {
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