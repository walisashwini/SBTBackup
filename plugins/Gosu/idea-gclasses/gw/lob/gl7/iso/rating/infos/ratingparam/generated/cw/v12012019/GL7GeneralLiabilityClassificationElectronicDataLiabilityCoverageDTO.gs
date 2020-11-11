package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationElectronicDataLiabilityCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7ClassificationElectrDataLiab : GL7ClassificationElectrDataLiab, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ClassificationElectrDataLiab
    _displayName = _gL7ClassificationElectrDataLiab.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityClassificationElectronicDataLiabilityCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _coverageOnPolicyIndicator : java.lang.Integer as CoverageOnPolicyIndicator = 0

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ClassificationElectrDataLiab {
   return _dataModel as GL7ClassificationElectrDataLiab
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityClassificationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent
  }
  

  
}