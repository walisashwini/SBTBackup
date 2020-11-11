package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityPollutionLiabLimitedCovFormDesigntdSitesDTO extends gw.rating.LineModelObject {

  public construct(_gL7PollutionLiabLmtdCovFormDesigntdSites : GL7PollutionLiabLmtdCovFormDesigntdSites, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7PollutionLiabLmtdCovFormDesigntdSites
    _displayName = _gL7PollutionLiabLmtdCovFormDesigntdSites.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionLiabLimitedCovFormDesigntdSitesDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PollutionLiabLmtdCovFormDesign")
  protected var _pollutionLiabLimitedCovFormDesigntdSites : java.lang.String as PollutionLiabLimitedCovFormDesigntdSites = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7PollutionLiabLmtdCovFormDesigntdSites {
   return _dataModel as GL7PollutionLiabLmtdCovFormDesigntdSites
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}