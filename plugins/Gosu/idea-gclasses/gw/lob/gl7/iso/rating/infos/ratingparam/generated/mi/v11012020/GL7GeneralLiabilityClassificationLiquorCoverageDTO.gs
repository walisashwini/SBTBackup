package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationLiquorCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationLiquorCoverageDTO {

  public construct(_gL7ClassificationLiquor : GL7ClassificationLiquor, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7ClassificationLiquor, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationLiquorCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   if (ParentLineModelObject.ParentLineModelObject.ParentLineModelObject.Subline == "Liquor") {
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