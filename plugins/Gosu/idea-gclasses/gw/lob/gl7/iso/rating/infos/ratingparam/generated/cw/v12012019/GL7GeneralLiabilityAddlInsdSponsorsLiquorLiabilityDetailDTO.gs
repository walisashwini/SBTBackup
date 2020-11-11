package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _descriptionOfEventOrFunction = _gL7SublineTypeSchCovItem.getStringProperty("DescriptionOfEventOrFunction")
    _namesOfPersonsOrOrganizations = _gL7SublineTypeSchCovItem.getStringProperty("NamesOfPersonsOrOrganizations")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _namesOfPersonsOrOrganizations : java.lang.String as NamesOfPersonsOrOrganizations = ""

  @VisibleInRateflow
  protected var _descriptionOfEventOrFunction : java.lang.String as DescriptionOfEventOrFunction = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCovItem {
   return _dataModel as GL7SublineTypeSchCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdSponsorsLiquorLiabilityDTO {
   return _parent
  }
  

  
}