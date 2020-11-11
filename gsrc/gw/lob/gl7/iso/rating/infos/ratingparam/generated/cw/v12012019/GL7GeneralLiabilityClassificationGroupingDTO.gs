package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityClassificationGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7Exposures : GL7Exposure[], parent : GL7GeneralLiabilityLocationDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityClassificationDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityClassificationDTO> as readonly All  

  
}