package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusForOtherPartiesWhenReqInConstrctnAgrmtDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusForOtherPartiesWhenReqInConstrctnAgrmtDTO {

  public construct(_gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO : GL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdOwnersLesseesContrctrsAutomtcStatusForO, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdOwnersLesseesContrctrsAutomtcStatusForOtherPartiesWhenReqInConstrctnAgrmtDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}