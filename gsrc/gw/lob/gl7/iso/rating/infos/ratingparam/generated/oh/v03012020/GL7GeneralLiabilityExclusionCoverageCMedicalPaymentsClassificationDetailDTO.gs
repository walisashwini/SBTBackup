package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO {

  public construct(_gL7ExposureSchedExclItem : GL7ExposureSchedExclItem, parent : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO) {
    super( _gL7ExposureSchedExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO {
   return _parent as GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO
  }
  

  
}