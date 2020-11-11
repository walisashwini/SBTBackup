package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclPropertyEntrustedDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclPropertyEntrusted : GL7ExclPropertyEntrusted, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclPropertyEntrusted
    _displayName = _gL7ExclPropertyEntrusted.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclPropertyEntrustedDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclPropertyEntrustedDetail : GL7GeneralLiabilityExclPropertyEntrustedDetailGroupingDTO as readonly ExclPropertyEntrustedDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclPropertyEntrusted {
   return _dataModel as GL7ExclPropertyEntrusted
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