package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO {

  public construct(_gL7AddlInsdMortgageeAssigneeOrRecvr : GL7AddlInsdMortgageeAssigneeOrRecvr, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7AddlInsdMortgageeAssigneeOrRecvr, parent )
    _addlInsdMortgageeAssigneeOrRecvrDetail = _gL7AddlInsdMortgageeAssigneeOrRecvr.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailGroupingDTO(_gL7AddlInsdMortgageeAssigneeOrRecvr.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdMortgageeAssigneeOrRecvrDetail() : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailGroupingDTO {
   return _addlInsdMortgageeAssigneeOrRecvrDetail as GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}