package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO {

  public construct(_gL7ExclCovCMedPayLocClassLvl1 : GL7ExclCovCMedPayLocClassLvl1, parent : GL7GeneralLiabilityClassificationDTO) {
    super( _gL7ExclCovCMedPayLocClassLvl1, parent )
    _exclusionCoverageCMedicalPaymentsClassificationDetail = _gL7ExclCovCMedPayLocClassLvl1.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailGroupingDTO(_gL7ExclCovCMedPayLocClassLvl1.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclusionCoverageCMedicalPaymentsClassificationDetail() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailGroupingDTO {
   return _exclusionCoverageCMedicalPaymentsClassificationDetail as GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityClassificationDTO {
   return _parent as GL7GeneralLiabilityClassificationDTO
  }
  

  
}