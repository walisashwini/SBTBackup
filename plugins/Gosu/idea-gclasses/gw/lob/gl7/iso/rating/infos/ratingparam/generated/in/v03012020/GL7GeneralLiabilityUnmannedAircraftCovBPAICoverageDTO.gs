package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO {

  public construct(_gL7UnmannedAircraftCovBPAI : GL7UnmannedAircraftCovBPAI, parent : GL7GeneralLiabilityUnmannedAircraftDTO) {
    super( _gL7UnmannedAircraftCovBPAI, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityUnmannedAircraftCovBPAICoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   var tempParentLineModelObject = ParentLineModelObject.ParentLineModelObject.ParentLineModelObject.ParentLineModelObject
   if ((_cf.exists(tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraftCovAOnly) || _cf.exists(tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraftCovBOnly) || _cf.exists(tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft)) && ((tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 != null && tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 != "") && tempParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 == "Yes") && ((ParentLineModelObject.CovBApplies != null && ParentLineModelObject.CovBApplies != "") && ParentLineModelObject.CovBApplies == "Yes")) {
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