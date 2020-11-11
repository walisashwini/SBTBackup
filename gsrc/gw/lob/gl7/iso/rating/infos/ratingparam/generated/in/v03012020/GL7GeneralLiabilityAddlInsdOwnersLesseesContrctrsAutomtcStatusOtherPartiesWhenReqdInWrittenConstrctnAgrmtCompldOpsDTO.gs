package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusOtherPartiesWhenReqdInWrittenConstrctnAgrmtCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusOtherPartiesWhenReqdInWrittenConstrctnAgrmtCompldOpsDTO {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe : GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusOthe, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusOtherPartiesWhenReqdInWrittenConstrctnAgrmtCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}