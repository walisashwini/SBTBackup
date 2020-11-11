package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO) {
    super( _gL7SublineTypeSchCondItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO {
   return _parent as GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO
  }
  

  
}