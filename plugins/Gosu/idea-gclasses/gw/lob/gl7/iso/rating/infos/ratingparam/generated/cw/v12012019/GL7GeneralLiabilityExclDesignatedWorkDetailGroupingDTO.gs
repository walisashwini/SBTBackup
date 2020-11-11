package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclDesignatedWorkDetailGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclDesignatedWorkDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityExclDesignatedWorkDetailDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityExclDesignatedWorkDetailDTO> as readonly All  

  
}