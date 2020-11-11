package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO> {

  public construct(_gL7LocationSchedExclItems : GL7LocationSchedExclItem[], parent : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO) {
    super( _gL7LocationSchedExclItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedExclItems
    _all = _gL7LocationSchedExclItems.map(\obj -> new GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO {
   return _current as GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO {
   return _parent
  }
  

  
}