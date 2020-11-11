package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityPollutionLiabCovFormDesigntdSitesDTO extends gw.rating.LineModelObject {

  public construct(_gL7PollutionLiabCovFormDesigntdSites : GL7PollutionLiabCovFormDesigntdSites, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7PollutionLiabCovFormDesigntdSites
    _displayName = _gL7PollutionLiabCovFormDesigntdSites.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPollutionLiabCovFormDesigntdSitesDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("PollutionLiabCovFormDesigntdSi")
  protected var _pollutionLiabCovFormDesigntdSites : java.lang.String as PollutionLiabCovFormDesigntdSites = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7PollutionLiabCovFormDesigntdSites {
   return _dataModel as GL7PollutionLiabCovFormDesigntdSites
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