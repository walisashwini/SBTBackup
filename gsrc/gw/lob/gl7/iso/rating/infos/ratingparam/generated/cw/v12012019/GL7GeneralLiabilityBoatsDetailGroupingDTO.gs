package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityBoatsDetailGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityBoatsDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityBoatsDetailDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityBoatsDetailDTO> as readonly All  

  
}