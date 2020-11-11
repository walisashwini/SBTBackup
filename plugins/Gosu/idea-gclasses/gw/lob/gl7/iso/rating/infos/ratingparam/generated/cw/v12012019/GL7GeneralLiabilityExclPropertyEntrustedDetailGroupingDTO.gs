package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclPropertyEntrustedDetailGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclPropertyEntrustedDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityExclPropertyEntrustedDetailDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityExclPropertyEntrustedDetailDTO> as readonly All  

  
}