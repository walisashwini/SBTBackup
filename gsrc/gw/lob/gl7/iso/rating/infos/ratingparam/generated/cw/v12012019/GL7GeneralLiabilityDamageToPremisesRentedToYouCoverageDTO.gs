package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityDamageToPremisesRentedToYouCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7DamageToPremisesRentedToYou : GL7DamageToPremisesRentedToYou, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7DamageToPremisesRentedToYou
    _limit = _gL7DamageToPremisesRentedToYou.GL7LimitTerm.OptionValue.DisplayName
    _displayName = _gL7DamageToPremisesRentedToYou.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDamageToPremisesRentedToYouCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _limit : java.lang.String as Limit = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7DamageToPremisesRentedToYou {
   return _dataModel as GL7DamageToPremisesRentedToYou
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