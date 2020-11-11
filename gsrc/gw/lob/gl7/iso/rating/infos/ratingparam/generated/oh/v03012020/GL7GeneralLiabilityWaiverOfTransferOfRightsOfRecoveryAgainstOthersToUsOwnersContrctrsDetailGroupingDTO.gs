package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailDTO> {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDTO) {
    super( _gL7SublineTypeSchCondItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItems
    _all = _gL7SublineTypeSchCondItems.map(\obj -> new GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailDTO {
   return _current as GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityWaiverOfTransferOfRightsOfRecoveryAgainstOthersToUsOwnersContrctrsDTO {
   return _parent
  }
  

  
}