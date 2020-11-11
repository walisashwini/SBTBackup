package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItem : GL7SublineTypeSchCovItem, parent : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItem
    _architectEngineerSurveyorID = _gL7SublineTypeSchCovItem.getStringProperty("ArchitectEngineerSurveyorID")
    _constructionManagerID = _gL7SublineTypeSchCovItem.getStringProperty("ConstructionManagerID")
    _contractorID = _gL7SublineTypeSchCovItem.getStringProperty("ContractorID")
    _designatedConstructionProjectDescription = _gL7SublineTypeSchCovItem.getStringProperty("DesignatedConstructionProjectDescription")
    _designatedConstructionProjectLocation = _gL7SublineTypeSchCovItem.getStringProperty("DesignatedConstructionProjectLocation")
    _ownerID = _gL7SublineTypeSchCovItem.getStringProperty("OwnerID")
    _typeOfBusiness = _gL7SublineTypeSchCovItem.getStringProperty("TypeOfBusiness")
    _displayName = _gL7SublineTypeSchCovItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _typeOfBusiness : java.lang.String as TypeOfBusiness = ""

  @VisibleInRateflow
  protected var _ownerID : java.lang.String as OwnerID = ""

  @VisibleInRateflow
  protected var _designatedConstructionProjectLocation : java.lang.String as DesignatedConstructionProjectLocation = ""

  @VisibleInRateflow
  protected var _designatedConstructionProjectDescription : java.lang.String as DesignatedConstructionProjectDescription = ""

  @VisibleInRateflow
  protected var _contractorID : java.lang.String as ContractorID = ""

  @VisibleInRateflow
  protected var _constructionManagerID : java.lang.String as ConstructionManagerID = ""

  @VisibleInRateflow
  protected var _architectEngineerSurveyorID : java.lang.String as ArchitectEngineerSurveyorID = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchCovItem {
   return _dataModel as GL7SublineTypeSchCovItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityConstrctnProjMngmtProtvLiabCovDTO {
   return _parent
  }
  

  
}