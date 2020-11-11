package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO {

  public construct(_gL7WaiverTransferRightsRecovery : GL7WaiverTransferRightsRecovery, parent : GL7GeneralLiabilityDTO) {
    super( _gL7WaiverTransferRightsRecovery, parent )
    _waiverTransferRightsRecoveryDetail = _gL7WaiverTransferRightsRecovery.GL7ScheduledItems != null ? new GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailGroupingDTO(_gL7WaiverTransferRightsRecovery.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get WaiverTransferRightsRecoveryDetail() : GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailGroupingDTO {
   return _waiverTransferRightsRecoveryDetail as GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}