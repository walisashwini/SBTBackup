package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdLessorLeasedEquipmt : GL7AddlInsdLessorLeasedEquipmt, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdLessorLeasedEquipmt
    _displayName = _gL7AddlInsdLessorLeasedEquipmt.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdLessorLeasedEquipmtDetail : GL7GeneralLiabilityAddlInsdLessorLeasedEquipmtDetailGroupingDTO as readonly AddlInsdLessorLeasedEquipmtDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AddlInsd")
  protected var _addlInsd : java.lang.String as AddlInsd = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdLessorLeasedEquipmt {
   return _dataModel as GL7AddlInsdLessorLeasedEquipmt
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