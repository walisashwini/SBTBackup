package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO {

  public construct(_gL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5 : GL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5, parent : GL7GeneralLiabilityDTO) {
    super( _gL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5, parent )
    _waiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetail = _gL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5.GL7ScheduledItems != null ? new GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailGroupingDTO(_gL7WaiverOfTransferOfRightsOfRecoveryAgainstOther5.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get WaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetail() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailGroupingDTO {
   return _waiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetail as GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}