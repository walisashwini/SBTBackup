package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUnmannedAircraftCovABIPDCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUnmannedAircraftCovABIPDCoverageDTO {

  public construct(_gL7UnmannedAircraftCovABIPD : GL7UnmannedAircraftCovABIPD, parent : GL7GeneralLiabilityUnmannedAircraftDTO) {
    super( _gL7UnmannedAircraftCovABIPD, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUnmannedAircraftCovABIPDCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject = ParentLineModelObject.ParentLineModelObject.ParentLineModelObject.ParentLineModelObject
   if ((_cf.exists(tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraftCovAOnly) || _cf.exists(tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraftCovBOnly) || _cf.exists(tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft)) && ((tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 != null && tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 != "") && tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 == "Yes") && ((ParentLineModelObject.CovAApplies != null && ParentLineModelObject.CovAApplies != "") && ParentLineModelObject.CovAApplies == "Yes")) {
     coverageOnPolicyIndicator = 1
   } else {
     coverageOnPolicyIndicator = 0
   }
   return coverageOnPolicyIndicator
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityUnmannedAircraftDTO {
   return _parent as GL7GeneralLiabilityUnmannedAircraftDTO
  }
  

  
}