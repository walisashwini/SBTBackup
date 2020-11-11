package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItem
    _nameID = _gL7SublineTypeSchCondItem.getStringProperty("NameID")
    _displayName = _gL7SublineTypeSchCondItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _nameID : java.lang.String as NameID = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCondItem {
   return _dataModel as GL7SublineTypeSchCondItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO {
   return _parent
  }
  

  
}