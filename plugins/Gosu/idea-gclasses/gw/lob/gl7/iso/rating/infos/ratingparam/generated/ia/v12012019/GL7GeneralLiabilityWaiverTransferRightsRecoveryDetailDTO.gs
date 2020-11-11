package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO {

  public construct(_gL7SublineTypeSchCondItem : GL7SublineTypeSchCondItem, parent : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO) {
    super( _gL7SublineTypeSchCondItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO {
   return _parent as GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO
  }
  

  
}