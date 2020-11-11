package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO> {

  public construct(_gL7ExposureSchedExclItems : GL7ExposureSchedExclItem[], parent : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO) {
    super( _gL7ExposureSchedExclItems, parent )
    _parent = parent
    _dataModel = _gL7ExposureSchedExclItems
    _all = _gL7ExposureSchedExclItems.map(\obj -> new GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO {
   return _current as GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsClassificationDTO {
   return _parent
  }
  

  
}