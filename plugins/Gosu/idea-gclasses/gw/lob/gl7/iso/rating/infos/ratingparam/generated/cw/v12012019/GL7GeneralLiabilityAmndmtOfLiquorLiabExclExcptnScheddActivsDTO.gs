package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDTO extends gw.rating.LineModelObject {

  public construct(_gL7AmndmtOfLiquorLiabExclExcptnScheddActivs : GL7AmndmtOfLiquorLiabExclExcptnScheddActivs, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7AmndmtOfLiquorLiabExclExcptnScheddActivs
    _displayName = _gL7AmndmtOfLiquorLiabExclExcptnScheddActivs.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _amndmtOfLiquorLiabExclExcptnScheddActivsDetail : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailGroupingDTO as readonly AmndmtOfLiquorLiabExclExcptnScheddActivsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AmndmtOfLiquorLiabExclExcptnScheddActivs {
   return _dataModel as GL7AmndmtOfLiquorLiabExclExcptnScheddActivs
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