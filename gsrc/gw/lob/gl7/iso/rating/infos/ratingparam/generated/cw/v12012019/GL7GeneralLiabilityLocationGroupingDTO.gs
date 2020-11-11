package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityLocationGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7Locations : GL7Location[], parent : GL7GeneralLiabilityDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityLocationDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityLocationDTO> as readonly All  

  
}