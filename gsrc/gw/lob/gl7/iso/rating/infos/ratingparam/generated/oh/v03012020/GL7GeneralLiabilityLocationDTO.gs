package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLocationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLocationDTO {

  public construct(_gL7Location : GL7Location, parent : GL7GeneralLiabilityDTO) {
    super( _gL7Location, parent )
    _addlInsdCoOwnerInsdPrem = _gL7Location.GL7AddlInsdCoOwnerInsdPrem != null ? new GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO(_gL7Location.GL7AddlInsdCoOwnerInsdPrem, this) : null
    _addlInsdMgrsLessorsPrem = _gL7Location.GL7AddlInsdMgrsLessorsPrem != null ? new GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO(_gL7Location.GL7AddlInsdMgrsLessorsPrem, this) : null
    _addlInsdMortgageeAssigneeOrRecvr = _gL7Location.GL7AddlInsdMortgageeAssigneeOrRecvr != null ? new GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO(_gL7Location.GL7AddlInsdMortgageeAssigneeOrRecvr, this) : null
    _addlInsdOwnersLesseesContrctrsCompldOpsLocLvl = _gL7Location.GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl != null ? new GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO(_gL7Location.GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl, this) : null
    _addlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregate = _gL7Location.GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje != null ? new GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO(_gL7Location.GL7AddlInsdOwnersLesseesContrctrsCompletedOpsSubje, this) : null
    _addlInsdOwnersManagersOrLessorsOfPremisesLiquorLiability = _gL7Location.GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor != null ? new GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO(_gL7Location.GL7AddlInsdOwnersManagersOrLessorsOfPremisesLiquor, this) : null
    _addlInsdOwnersOrOtherIntsFromWhomLandLeased = _gL7Location.GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased != null ? new GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO(_gL7Location.GL7AddlInsdOwnersOrOtherIntsFromWhomLandLeased, this) : null
    _classification = _gL7Location.GL7Exposures?.where(\elm -> _cf.stateMatches(elm, Parameters)) != null ? new GL7GeneralLiabilityClassificationGroupingDTO(_gL7Location.GL7Exposures?.where(\elm -> _cf.stateMatches(elm, Parameters)), this) : null
    _designatedLocGeneralAggLimit = _gL7Location.GL7DesignatedLocGeneralAggLimit != null ? new GL7GeneralLiabilityDesignatedLocGeneralAggLimitDTO(_gL7Location.GL7DesignatedLocGeneralAggLimit, this) : null
    _designatedLocLiquorAggLimit = _gL7Location.GL7DesignatedLocLiquorAggLimit != null ? new GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO(_gL7Location.GL7DesignatedLocLiquorAggLimit, this) : null
    _designatedLocationsProdsCompldOpsAggregateLimit = _gL7Location.GL7DesignatedLocationsProdsCompldOpsAggLimit != null ? new GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO(_gL7Location.GL7DesignatedLocationsProdsCompldOpsAggLimit, this) : null
    _designatedLocsAggregateLimitProdsCompldOps = _gL7Location.GL7DesignatedLocsAggLimitProdsCompldOps != null ? new GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO(_gL7Location.GL7DesignatedLocsAggLimitProdsCompldOps, this) : null
    _exclAllHazardsInConnectionWithDesignatedPrem = _gL7Location.GL7ExclAllHazardsInConnectionWithDesignatedPrem != null ? new GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO(_gL7Location.GL7ExclAllHazardsInConnectionWithDesignatedPrem, this) : null
    _exclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOps = _gL7Location.GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1 != null ? new GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO(_gL7Location.GL7ExclDamageToWorkPerformedBySubcontractorsOnYou1, this) : null
    _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOps = _gL7Location.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif != null ? new GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO(_gL7Location.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpecif, this) : null
    _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExcepted = _gL7Location.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1 != null ? new GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO(_gL7Location.GL7ExclExplosionCollapseUndrgrdPropDmgHazardSpeci1, this) : null
    _exclusionCoverageCMedicalPaymentsLocation = _gL7Location.GL7ExclCovCMedPayLocClassLvl != null ? new GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO(_gL7Location.GL7ExclCovCMedPayLocClassLvl, this) : null
    _limitationOfCoverageToInsuredPremisesLocLvl = _gL7Location.GL7LimitationOfCovToInsuredPremisesLocLvl != null ? new GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO(_gL7Location.GL7LimitationOfCovToInsuredPremisesLocLvl, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLocationDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitationOfCoverageToInsuredPremisesLocLvl() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO {
   return _limitationOfCoverageToInsuredPremisesLocLvl as GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO
  }
  

  
  @VisibleInRateflow
  property get ExclusionCoverageCMedicalPaymentsLocation() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO {
   return _exclusionCoverageCMedicalPaymentsLocation as GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO
  }
  

  
  @VisibleInRateflow
  property get ExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExcepted() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO {
   return _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExcepted as GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsExceptedDTO
  }
  

  
  @VisibleInRateflow
  property get ExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOps() : GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO {
   return _exclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOps as GL7GeneralLiabilityExclExplosionCollapseUndrgrdPropDmgHazardSpecifiedOpsDTO
  }
  

  
  @VisibleInRateflow
  property get ExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOps() : GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO {
   return _exclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOps as GL7GeneralLiabilityExclDamageToWorkPerformedBySubcontractorsOnYourBehalfDesignSitesOpsDTO
  }
  

  
  @VisibleInRateflow
  property get ExclAllHazardsInConnectionWithDesignatedPrem() : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO {
   return _exclAllHazardsInConnectionWithDesignatedPrem as GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO
  }
  

  
  @VisibleInRateflow
  property get DesignatedLocsAggregateLimitProdsCompldOps() : GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO {
   return _designatedLocsAggregateLimitProdsCompldOps as GL7GeneralLiabilityDesignatedLocsAggregateLimitProdsCompldOpsDTO
  }
  

  
  @VisibleInRateflow
  property get DesignatedLocationsProdsCompldOpsAggregateLimit() : GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO {
   return _designatedLocationsProdsCompldOpsAggregateLimit as GL7GeneralLiabilityDesignatedLocationsProdsCompldOpsAggregateLimitDTO
  }
  

  
  @VisibleInRateflow
  property get DesignatedLocLiquorAggLimit() : GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO {
   return _designatedLocLiquorAggLimit as GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO
  }
  

  
  @VisibleInRateflow
  property get DesignatedLocGeneralAggLimit() : GL7GeneralLiabilityDesignatedLocGeneralAggLimitDTO {
   return _designatedLocGeneralAggLimit as GL7GeneralLiabilityDesignatedLocGeneralAggLimitDTO
  }
  

  
  @VisibleInRateflow
  property get Classification() : GL7GeneralLiabilityClassificationGroupingDTO {
   return _classification as GL7GeneralLiabilityClassificationGroupingDTO
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersOrOtherIntsFromWhomLandLeased() : GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO {
   return _addlInsdOwnersOrOtherIntsFromWhomLandLeased as GL7GeneralLiabilityAddlInsdOwnersOrOtherIntsFromWhomLandLeasedDTO
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiability() : GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO {
   return _addlInsdOwnersManagersOrLessorsOfPremisesLiquorLiability as GL7GeneralLiabilityAddlInsdOwnersManagersOrLessorsOfPremisesLiquorLiabilityDTO
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregate() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO {
   return _addlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregate as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompletedOperationsSubjectToTheGeneralAggregateDTO
  }
  

  
  @VisibleInRateflow
  property get AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO {
   return _addlInsdOwnersLesseesContrctrsCompldOpsLocLvl as GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO
  }
  

  
  @VisibleInRateflow
  property get AddlInsdMortgageeAssigneeOrRecvr() : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO {
   return _addlInsdMortgageeAssigneeOrRecvr as GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO
  }
  

  
  @VisibleInRateflow
  property get AddlInsdMgrsLessorsPrem() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO {
   return _addlInsdMgrsLessorsPrem as GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO
  }
  

  
  @VisibleInRateflow
  property get AddlInsdCoOwnerInsdPrem() : GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO {
   return _addlInsdCoOwnerInsdPrem as GL7GeneralLiabilityAddlInsdCoOwnerInsdPremDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}