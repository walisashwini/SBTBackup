package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCondItems : GL7SublineTypeSchCondItem[], parent : GL7GeneralLiabilityWaiverTransferRightsRecoveryDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityWaiverTransferRightsRecoveryDetailDTO> as readonly All  

  
}