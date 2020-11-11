package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityClassificationRailroadCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityClassificationRailroadCoverageDTO {

  public construct(_gL7ClassificationRailroad : GL7ClassificationRailroad, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7ClassificationRailroad, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationRailroadCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   if (ParentLineModelObject.ParentLineModelObject.ParentLineModelObject.Subline == "Railroad") {
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