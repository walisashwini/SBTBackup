package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _operations = _gL7SublineTypeSchExclItem.getStringProperty("Operations")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _operations : java.lang.String as Operations = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclMedPayCovInmatesPatientsPrisonersDTO {
   return _parent
  }
  

  
}