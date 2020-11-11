package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _manualPremium = _gL7SublineTypeSchCovItem.getDecimalProperty("ManualPremium")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _nameID : java.lang.String as NameID = ""

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCovItem {
   return _dataModel as GL7SublineTypeSchCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO {
   return _parent
  }
  

  
}