package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedExclItems : GL7LocationSchedExclItem[], parent : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityExclusionCoverageCMedicalPaymentsLocationDetailDTO> as readonly All  

  
}