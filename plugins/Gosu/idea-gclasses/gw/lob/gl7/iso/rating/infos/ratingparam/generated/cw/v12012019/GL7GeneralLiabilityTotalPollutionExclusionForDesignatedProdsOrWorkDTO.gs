package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO extends gw.rating.LineModelObject {

  public construct(_gL7TotalPollutionExclForDesignatedProdsOrWork : GL7TotalPollutionExclForDesignatedProdsOrWork, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7TotalPollutionExclForDesignatedProdsOrWork
    _displayName = _gL7TotalPollutionExclForDesignatedProdsOrWork.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _totalPollutionExclusionForDesignatedProdsOrWorkDetail : GL7GeneralLiabilityTotalPollutionExclusionForDesignatedProdsOrWorkDetailGroupingDTO as readonly TotalPollutionExclusionForDesignatedProdsOrWorkDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7TotalPollutionExclForDesignatedProdsOrWork {
   return _dataModel as GL7TotalPollutionExclForDesignatedProdsOrWork
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