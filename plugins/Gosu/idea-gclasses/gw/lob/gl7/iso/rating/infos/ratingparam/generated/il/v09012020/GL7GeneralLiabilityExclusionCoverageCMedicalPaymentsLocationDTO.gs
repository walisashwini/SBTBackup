package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO {

  public construct(_gL7ExclCovCMedPayLocClassLvl : GL7ExclCovCMedPayLocClassLvl, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7ExclCovCMedPayLocClassLvl, parent )
    _exclusionCoverageCMedicalPaymentsLocationDetail = _gL7ExclCovCMedPayLocClassLvl.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailGroupingDTO(_gL7ExclCovCMedPayLocClassLvl.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclusionCoverageCMedicalPaymentsLocationDetail() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailGroupingDTO {
   return _exclusionCoverageCMedicalPaymentsLocationDetail as GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}