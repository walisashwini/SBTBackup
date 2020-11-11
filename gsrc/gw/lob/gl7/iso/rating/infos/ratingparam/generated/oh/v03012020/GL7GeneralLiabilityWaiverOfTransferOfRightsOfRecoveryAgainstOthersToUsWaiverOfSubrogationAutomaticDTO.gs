package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationAutomaticDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationAutomaticDTO {

  public construct(_gL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2 : GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2, parent : GL7GeneralLiabilityDTO) {
    super( _gL7WaiverOfTransferOfRightsOfRecoveryAgainstOther2, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationAutomaticDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}