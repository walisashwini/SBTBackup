package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPollutionLiabCovFormDesigntdSitesDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityPollutionLiabCovFormDesigntdSitesDTO {

  public construct(_gL7PollutionLiabCovFormDesigntdSites : GL7PollutionLiabCovFormDesigntdSites, parent : GL7GeneralLiabilityDTO) {
    super( _gL7PollutionLiabCovFormDesigntdSites, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionLiabCovFormDesigntdSitesDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}