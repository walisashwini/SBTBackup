package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO {

  public construct(_gL7LimitationOfCovToInsuredPremisesLocLvl : GL7LimitationOfCovToInsuredPremisesLocLvl, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7LimitationOfCovToInsuredPremisesLocLvl, parent )
    _limitationOfCoverageToInsuredPremisesLocLvlDetail = _gL7LimitationOfCovToInsuredPremisesLocLvl.GL7ScheduledItems != null ? new GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailGroupingDTO(_gL7LimitationOfCovToInsuredPremisesLocLvl.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitationOfCoverageToInsuredPremisesLocLvlDetail() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailGroupingDTO {
   return _limitationOfCoverageToInsuredPremisesLocLvlDetail as GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}