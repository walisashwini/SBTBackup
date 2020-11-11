package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailGroupingDTO extends gw.rating.LineModelObject {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO) {
  
  
  }

  @VisibleInRateflow
  protected var _current : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO as readonly Current  

  @VisibleInRateflow
  protected var _all : java.util.List<GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO> as readonly All  

  
}