package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO) {
  
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItem
    _descriptionOfOperation = _gL7SublineTypeSchExclItem.getStringProperty("DescriptionOfOperation")
    _designatedProducts = _gL7SublineTypeSchExclItem.getStringProperty("DesignatedProducts")
    _displayName = _gL7SublineTypeSchExclItem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _designatedProducts : java.lang.String as DesignatedProducts = ""

  @VisibleInRateflow
  protected var _descriptionOfOperation : java.lang.String as DescriptionOfOperation = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7SublineTypeSchExclItem {
   return _dataModel as GL7SublineTypeSchExclItem
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO {
   return _parent
  }
  

  
}