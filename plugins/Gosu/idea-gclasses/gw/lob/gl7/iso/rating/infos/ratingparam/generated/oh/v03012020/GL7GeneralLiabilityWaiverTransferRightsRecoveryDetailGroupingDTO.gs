package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO> {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO) {
    super( _gL7SublineTypeSchCondItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCondItems
    _all = _gL7SublineTypeSchCondItems.map(\obj -> new GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO {
   return _current as GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO {
   return _parent
  }
  

  
}