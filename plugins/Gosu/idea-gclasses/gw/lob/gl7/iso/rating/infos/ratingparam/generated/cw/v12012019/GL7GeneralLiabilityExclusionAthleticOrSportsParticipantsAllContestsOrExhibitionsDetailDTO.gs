package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _descriptionOfOperations = _gL7SublineTypeSchExclItem.getStringProperty("DescriptionOfOperations")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _descriptionOfOperations : java.lang.String as DescriptionOfOperations = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclusionAthleticOrSportsParticipantsAllContestsOrExhibitionsDTO {
   return _parent
  }
  

  
}