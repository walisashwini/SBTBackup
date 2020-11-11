package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftPremiumToReachMinCoverageDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftPremiumToReachMinCoverageDTO {

  public construct(_gL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe : GL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LmtdCovForDesignatedUnmannedAircraftPremiumToRe, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitedCovForDesignatedUnmannedAircraftPremiumToReachMinCoverageDTO {
   return this
  }
  

  
  @VisibleInRateflow
  override property get CoverageOnPolicyIndicator() : java.lang.Integer {
   var coverageOnPolicyIndicator : java.lang.Integer = 0
   if ((_cf.exists(ParentLineModelObject.LimitedCovForDesignatedUnmannedAircraftCovAOnly) || _cf.exists(ParentLineModelObject.LimitedCovForDesignatedUnmannedAircraftCovBOnly) || _cf.exists(ParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft)) && ((ParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 != null && ParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 != "") && ParentLineModelObject.LimitedCovForDesignatedUnmannedAircraft1 == "Yes")) {
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