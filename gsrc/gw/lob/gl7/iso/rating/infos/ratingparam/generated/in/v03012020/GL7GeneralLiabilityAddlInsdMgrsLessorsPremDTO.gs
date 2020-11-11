package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO {

  public construct(_gL7AddlInsdMgrsLessorsPrem : GL7AddlInsdMgrsLessorsPrem, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7AddlInsdMgrsLessorsPrem, parent )
    _addlInsdMgrsLessorsPremDetail = _gL7AddlInsdMgrsLessorsPrem.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailGroupingDTO(_gL7AddlInsdMgrsLessorsPrem.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdMgrsLessorsPremDetail() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailGroupingDTO {
   return _addlInsdMgrsLessorsPremDetail as GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}