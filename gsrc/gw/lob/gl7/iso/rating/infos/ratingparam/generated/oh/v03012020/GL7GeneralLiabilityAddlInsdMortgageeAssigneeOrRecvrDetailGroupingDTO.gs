package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO> {

  public construct(_gL7LocationSchedCovItems : GL7LocationSchedCovItem[], parent : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO) {
    super( _gL7LocationSchedCovItems, parent )
    _parent = parent
    _dataModel = _gL7LocationSchedCovItems
    _all = _gL7LocationSchedCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO {
   return _parent
  }
  

  
}