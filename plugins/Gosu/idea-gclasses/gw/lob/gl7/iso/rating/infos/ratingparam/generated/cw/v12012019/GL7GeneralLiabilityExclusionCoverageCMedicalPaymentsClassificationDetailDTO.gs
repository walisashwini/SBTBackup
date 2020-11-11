package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExposureSchedExclItem : GL7ExposureSchedExclItem, parent : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ExposureSchedExclItem
    _description = _gL7ExposureSchedExclItem.getStringProperty("Description")
    _location = _gL7ExposureSchedExclItem.getStringProperty("Location")
    _displayName = _gL7ExposureSchedExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _location : java.lang.String as Location = ""

  @VisibleInRateflow
  protected var _description : java.lang.String as Description = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExposureSchedExclItem {
   return _dataModel as GL7ExposureSchedExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO {
   return _parent
  }
  

  
}