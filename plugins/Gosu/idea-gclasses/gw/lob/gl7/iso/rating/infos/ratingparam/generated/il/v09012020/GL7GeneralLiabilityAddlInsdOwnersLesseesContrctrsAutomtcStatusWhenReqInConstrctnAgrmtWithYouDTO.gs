package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusWhenReqInConstrctnAgrmtWithYouDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusWhenReqInConstrctnAgrmtWithYouDTO {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen : GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusWhen, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusWhenReqInConstrctnAgrmtWithYouDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}