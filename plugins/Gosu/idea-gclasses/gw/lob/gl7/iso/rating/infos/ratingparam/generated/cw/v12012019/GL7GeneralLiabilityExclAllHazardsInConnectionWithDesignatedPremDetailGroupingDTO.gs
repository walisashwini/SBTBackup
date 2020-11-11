package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedExclItems : GL7LocationSchedExclItem[], parent : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityExclAllHazardsInConnectionWithDesignatedPremDetailDTO> as readonly All  

  
}