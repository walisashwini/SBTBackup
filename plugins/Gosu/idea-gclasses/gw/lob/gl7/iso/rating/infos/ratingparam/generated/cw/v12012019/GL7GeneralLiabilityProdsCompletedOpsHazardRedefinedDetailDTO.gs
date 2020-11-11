package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _descriptionPremisesOps = _gL7SublineTypeSchCovItem.getStringProperty("DescriptionPremisesOps")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _descriptionPremisesOps : java.lang.String as DescriptionPremisesOps = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCovItem {
   return _dataModel as GL7SublineTypeSchCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO {
   return _parent
  }
  

  
}