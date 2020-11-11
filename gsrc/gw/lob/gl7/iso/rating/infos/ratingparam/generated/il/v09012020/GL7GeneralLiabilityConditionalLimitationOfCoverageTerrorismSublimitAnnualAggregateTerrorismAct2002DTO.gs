package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityConditionalLimitationOfCoverageTerrorismSublimitAnnualAggregateTerrorismAct2002DTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityConditionalLimitationOfCoverageTerrorismSublimitAnnualAggregateTerrorismAct2002DTO {

  public construct(_gL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct : GL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct, parent : GL7GeneralLiabilityDTO) {
    super( _gL7CondLimitationOfCovTerrSublimitAnnualAggTerrAct, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityConditionalLimitationOfCoverageTerrorismSublimitAnnualAggregateTerrorismAct2002DTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}