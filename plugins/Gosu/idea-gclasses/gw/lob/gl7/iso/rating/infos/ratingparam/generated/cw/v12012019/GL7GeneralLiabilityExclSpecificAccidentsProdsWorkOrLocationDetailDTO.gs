package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _accidentDate = _gL7SublineTypeSchExclItem.getDateProperty("AccidentDate")
    _accidentDescription = _gL7SublineTypeSchExclItem.getStringProperty("AccidentDescription")
    _accidentLocation = _gL7SublineTypeSchExclItem.getStringProperty("AccidentLocation")
    _act = _gL7SublineTypeSchExclItem.getOptionProperty("Act")
    _actDate = _gL7SublineTypeSchExclItem.getDateProperty("ActDate")
    _addressID = _gL7SublineTypeSchExclItem.getStringProperty("AddressID")
    _exclusion = _gL7SublineTypeSchExclItem.getOptionProperty("Exclusion")
    _location = _gL7SublineTypeSchExclItem.getStringProperty("Location")
    _locationDescription = _gL7SublineTypeSchExclItem.getStringProperty("LocationDescription")
    _productDescription = _gL7SublineTypeSchExclItem.getStringProperty("ProductDescription")
    _workDescription = _gL7SublineTypeSchExclItem.getStringProperty("WorkDescription")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _workDescription : java.lang.String as WorkDescription = ""

  @VisibleInRateflow
  protected var _productDescription : java.lang.String as ProductDescription = ""

  @VisibleInRateflow
  protected var _locationDescription : java.lang.String as LocationDescription = ""

  @VisibleInRateflow
  protected var _location : java.lang.String as Location = ""

  @VisibleInRateflow
  protected var _exclusion : java.lang.String as Exclusion = ""

  @VisibleInRateflow
  protected var _addressID : java.lang.String as AddressID = ""

  @VisibleInRateflow
  protected var _actDate : java.util.Date as ActDate = new java.util.Date()

  @VisibleInRateflow
  protected var _act : java.lang.String as Act = ""

  @VisibleInRateflow
  protected var _accidentLocation : java.lang.String as AccidentLocation = ""

  @VisibleInRateflow
  protected var _accidentDescription : java.lang.String as AccidentDescription = ""

  @VisibleInRateflow
  protected var _accidentDate : java.util.Date as AccidentDate = new java.util.Date()

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclSpecificAccidentsProdsWorkOrLocationDTO {
   return _parent
  }
  

  
}