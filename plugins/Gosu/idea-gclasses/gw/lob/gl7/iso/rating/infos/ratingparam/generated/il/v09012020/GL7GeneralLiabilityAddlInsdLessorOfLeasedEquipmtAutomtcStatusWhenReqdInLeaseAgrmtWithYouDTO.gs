package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenReqdInLeaseAgrmtWithYouDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenReqdInLeaseAgrmtWithYouDTO {

  public construct(_gL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR : GL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenR, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdLessorOfLeasedEquipmtAutomtcStatusWhenReqdInLeaseAgrmtWithYouDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}