package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdMortgageeAssigneeOrRecvr : GL7AddlInsdMortgageeAssigneeOrRecvr, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdMortgageeAssigneeOrRecvr
    _displayName = _gL7AddlInsdMortgageeAssigneeOrRecvr.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdMortgageeAssigneeOrRecvrDetail : GL7GeneralLiabilityAddlInsdMortgageeAssigneeOrRecvrDetailGroupingDTO as readonly AddlInsdMortgageeAssigneeOrRecvrDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdMortgageeAssigneeOrRecvr {
   return _dataModel as GL7AddlInsdMortgageeAssigneeOrRecvr
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityLocationDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent
  }
  

  
}