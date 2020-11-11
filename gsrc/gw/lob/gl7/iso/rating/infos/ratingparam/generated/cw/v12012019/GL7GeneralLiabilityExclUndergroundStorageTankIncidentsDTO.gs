package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclUndergroundStorageTankIncidentsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclUndergroundStorageTankIncidents : GL7ExclUndergroundStorageTankIncidents, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclUndergroundStorageTankIncidents
    _manualPremium = _gL7ExclUndergroundStorageTankIncidents.GL7ManualPremium86Term.Value
    _displayName = _gL7ExclUndergroundStorageTankIncidents.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclUndergroundStorageTankIncidentsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclUndergroundStorageTankIncidents {
   return _dataModel as GL7ExclUndergroundStorageTankIncidents
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