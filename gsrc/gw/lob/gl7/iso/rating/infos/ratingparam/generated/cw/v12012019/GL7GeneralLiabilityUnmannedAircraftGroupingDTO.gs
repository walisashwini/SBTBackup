package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityUnmannedAircraftGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7UnmannedAircrafts : GL7UnmannedAircraft[], parent : GL7GeneralLiabilityClassificationDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityUnmannedAircraftDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityUnmannedAircraftDTO> as readonly All  

  
}