package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDTO {

  public construct(_gL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers : GL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers, parent : GL7GeneralLiabilityDTO) {
    super( _gL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers, parent )
    _waiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetail = _gL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers.GL7ScheduledItems != null ? new GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailGroupingDTO(_gL7WaiverOfTransferOfRightsOfRecoveryAgainstOthers.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get WaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetail() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailGroupingDTO {
   return _waiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetail as GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}