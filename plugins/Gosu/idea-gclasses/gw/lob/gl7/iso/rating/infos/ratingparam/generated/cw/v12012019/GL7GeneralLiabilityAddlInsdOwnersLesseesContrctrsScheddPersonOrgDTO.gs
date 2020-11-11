package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg : GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg
    _displayName = _gL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdOwnersLesseesContrctrsScheddPersonOrgDetail : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsScheddPersonOrgDetailGroupingDTO as readonly AddlInsdOwnersLesseesContrctrsScheddPersonOrgDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AddlInsd")
  protected var _addlInsd : java.lang.String as AddlInsd = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg {
   return _dataModel as GL7AddlInsdOwnersLesseesContrctrsScheddPersonOrg
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