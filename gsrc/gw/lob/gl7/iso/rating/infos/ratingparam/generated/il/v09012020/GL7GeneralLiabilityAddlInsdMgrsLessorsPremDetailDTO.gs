package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO {

  public construct(_gL7LocationSchedCovItem : GL7LocationSchedCovItem, parent : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO) {
    super( _gL7LocationSchedCovItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO {
   return _parent as GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO
  }
  

  
}