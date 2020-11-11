package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitationOfCoverageForTerrorismSubLimitAnnualAggregateBasisDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitationOfCoverageForTerrorismSubLimitAnnualAggregateBasisDTO {

  public construct(_gL7LimitationOfCovForTerrSubLimitAnnualAggBasis : GL7LimitationOfCovForTerrSubLimitAnnualAggBasis, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LimitationOfCovForTerrSubLimitAnnualAggBasis, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitationOfCoverageForTerrorismSubLimitAnnualAggregateBasisDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}