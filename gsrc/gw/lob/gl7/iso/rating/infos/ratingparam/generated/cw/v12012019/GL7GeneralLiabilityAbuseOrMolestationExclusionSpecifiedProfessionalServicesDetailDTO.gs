package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _descriptionOfProfessionalServices = _gL7SublineTypeSchExclItem.getStringProperty("DescriptionOfProfessionalServices")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _descriptionOfProfessionalServices : java.lang.String as DescriptionOfProfessionalServices = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAbuseOrMolestationExclusionSpecifiedProfessionalServicesDTO {
   return _parent
  }
  

  
}