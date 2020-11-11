package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityProdsCompletedOpsHazardRedefinedDetailDTO> as readonly All  

  
}