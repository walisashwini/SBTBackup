package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPollutionLiabLimitedCovFormDesigntdSitesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPollutionLiabLimitedCovFormDesigntdSitesDTO {

  public construct(_gL7PollutionLiabLmtdCovFormDesigntdSites : GL7PollutionLiabLmtdCovFormDesigntdSites, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PollutionLiabLmtdCovFormDesigntdSites, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionLiabLimitedCovFormDesigntdSitesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}