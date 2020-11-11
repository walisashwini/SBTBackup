package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclSpecifiedTherapeuticOrCosmeticSrvcs : GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclSpecifiedTherapeuticOrCosmeticSrvcs
    _displayName = _gL7ExclSpecifiedTherapeuticOrCosmeticSrvcs.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclSpecifiedTherapeuticOrCosmeticSrvcsDetail : GL7GeneralLiabilityExclSpecifiedTherapeuticOrCosmeticSrvcsDetailGroupingDTO as readonly ExclSpecifiedTherapeuticOrCosmeticSrvcsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs {
   return _dataModel as GL7ExclSpecifiedTherapeuticOrCosmeticSrvcs
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