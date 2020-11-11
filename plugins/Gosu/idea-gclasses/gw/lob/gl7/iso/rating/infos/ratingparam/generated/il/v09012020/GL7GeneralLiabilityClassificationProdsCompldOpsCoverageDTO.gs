package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO {

  public construct(_gL7ClassificationProdsCompldOps : GL7ClassificationProdsCompldOps, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7ClassificationProdsCompldOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationProdsCompldOpsCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject = ParentLineModelObject.ParentLineModelObject.ParentLineModelObject
   if (tempParentLineModelObject.Subline == "Premises/Operations and Products/Completed Operations" || tempParentLineModelObject.Subline == "Products/Completed Operations") {
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