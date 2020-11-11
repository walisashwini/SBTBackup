package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO extends gw.rating.LineModelObject {

  public construct(_gL7ExclCovCMedPayLocClassLvl : GL7ExclCovCMedPayLocClassLvl, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7ExclCovCMedPayLocClassLvl
    _displayName = _gL7ExclCovCMedPayLocClassLvl.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _exclusionCoverageCMedicalPaymentsLocationDetail : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailGroupingDTO as readonly ExclusionCoverageCMedicalPaymentsLocationDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7ExclCovCMedPayLocClassLvl {
   return _dataModel as GL7ExclCovCMedPayLocClassLvl
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent
  }
  

  
}