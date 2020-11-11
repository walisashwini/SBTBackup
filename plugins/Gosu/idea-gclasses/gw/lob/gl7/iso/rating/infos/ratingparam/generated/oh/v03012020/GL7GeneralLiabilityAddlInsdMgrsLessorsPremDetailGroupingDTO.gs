package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO {
   return _parent
  }
  

  
}