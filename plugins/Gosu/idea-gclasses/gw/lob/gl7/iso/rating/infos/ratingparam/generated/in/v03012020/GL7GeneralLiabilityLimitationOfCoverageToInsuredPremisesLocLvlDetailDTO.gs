package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO) {
    super( _gL7LocationSchedCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO {
   return _parent as GL7GeneralLiabilityLimitationOfCoverageToInsuredPremisesLocLvlDTO
  }
  

  
}