package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItem
    _act = _gL7SublineTypeSchCondItem.getOptionProperty("Act")
    _actDate = _gL7SublineTypeSchCondItem.getDateProperty("ActDate")
    _dateOfAccident = _gL7SublineTypeSchCondItem.getDateProperty("DateOfAccident")
    _descriptionOfAccident = _gL7SublineTypeSchCondItem.getStringProperty("DescriptionOfAccident")
    _location = _gL7SublineTypeSchCondItem.getStringProperty("Location")
    _locationAddress = _gL7SublineTypeSchCondItem.getStringProperty("LocationAddress")
    _locationDescription = _gL7SublineTypeSchCondItem.getStringProperty("LocationDescription")
    _locationOfAccident = _gL7SublineTypeSchCondItem.getStringProperty("LocationOfAccident")
    _productDescription = _gL7SublineTypeSchCondItem.getStringProperty("ProductDescription")
    _scheduleType = _gL7SublineTypeSchCondItem.getOptionProperty("ScheduleType")
    _workDescription = _gL7SublineTypeSchCondItem.getStringProperty("WorkDescription")
    _displayName = _gL7SublineTypeSchCondItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _workDescription : java.lang.String as WorkDescription = ""

  @VisibleInRateflow
  protected var _scheduleType : java.lang.String as ScheduleType = ""

  @VisibleInRateflow
  protected var _productDescription : java.lang.String as ProductDescription = ""

  @VisibleInRateflow
  protected var _locationOfAccident : java.lang.String as LocationOfAccident = ""

  @VisibleInRateflow
  protected var _locationDescription : java.lang.String as LocationDescription = ""

  @VisibleInRateflow
  protected var _locationAddress : java.lang.String as LocationAddress = ""

  @VisibleInRateflow
  protected var _location : java.lang.String as Location = ""

  @VisibleInRateflow
  protected var _descriptionOfAccident : java.lang.String as DescriptionOfAccident = ""

  @VisibleInRateflow
  protected var _dateOfAccident : java.util.Date as DateOfAccident = new java.util.Date()

  @VisibleInRateflow
  protected var _actDate : java.util.Date as ActDate = new java.util.Date()

  @VisibleInRateflow
  protected var _act : java.lang.String as Act = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCondItem {
   return _dataModel as GL7SublineTypeSchCondItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfSectVExtddRptgPeriodsSpecificAccsDTO {
   return _parent
  }
  

  
}