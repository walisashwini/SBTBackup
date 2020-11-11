package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO> {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO) {
    super( _gL7SublineTypeSchCondItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItems
    _all = _gL7SublineTypeSchCondItems.map(\obj -> new GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO {
   return _current as GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsWaiverOfSubrogationProductWithdrawalDTO {
   return _parent
  }
  

  
}