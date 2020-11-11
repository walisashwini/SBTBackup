package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl : GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl
    _displayName = _gL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetail : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetailGroupingDTO as readonly AddlInsdOwnersLesseesContrctrsCompldOpsLocLvlDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AddlInsd")
  protected var _addlInsd : java.lang.String as AddlInsd = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl {
   return _dataModel as GL7AddlInsdOwnersLesseesContrctrsCompldOpsLocLvl
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent
  }
  

  
}