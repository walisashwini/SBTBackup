package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationAutomaticProductWithdrawalDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationAutomaticProductWithdrawalDTO {

  public construct(_gL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4 : GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4, parent : GL7GeneralLiabilityDTO) {
    super( _gL7WaiverOfTransferOfRightsOfRecoveryAgainstOther4, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationAutomaticProductWithdrawalDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}