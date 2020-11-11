package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO extends gw.rating.LineModelObject {

  public construct(_gL7ProdsCompletedOpsHazardRedefined : GL7ProdsCompletedOpsHazardRedefined, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ProdsCompletedOpsHazardRedefined
    _displayName = _gL7ProdsCompletedOpsHazardRedefined.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _prodsCompletedOpsHazardRedefinedDetail : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailGroupingDTO as readonly ProdsCompletedOpsHazardRedefinedDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ProdsCompletedOpsHazardRedefined {
   return _dataModel as GL7ProdsCompletedOpsHazardRedefined
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