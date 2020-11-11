package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclCovCMedPayLocClassLvl1 : GL7ExclCovCMedPayLocClassLvl1, parent : GL7GeneralLiabilityClassificationDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclCovCMedPayLocClassLvl1
    _displayName = _gL7ExclCovCMedPayLocClassLvl1.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclusionCoverageCMedicalPaymentsClassificationDetail : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailGroupingDTO as readonly ExclusionCoverageCMedicalPaymentsClassificationDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclCovCMedPayLocClassLvl1 {
   return _dataModel as GL7ExclCovCMedPayLocClassLvl1
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