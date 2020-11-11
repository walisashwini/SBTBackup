package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO extends gw.rating.LineModelObject {

  public construct(_gL7AddlInsdMgrsLessorsPrem : GL7AddlInsdMgrsLessorsPrem, parent : GL7GeneralLiabilityLocationDTO) {
  
    _parent = parent
    _dataModel = _gL7AddlInsdMgrsLessorsPrem
    _displayName = _gL7AddlInsdMgrsLessorsPrem.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _addlInsdMgrsLessorsPremDetail : GL7GeneralLiabilityAddlInsdMgrsLessorsPremDetailGroupingDTO as readonly AddlInsdMgrsLessorsPremDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("AddlInsd")
  protected var _addlInsd : java.lang.String as AddlInsd = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7AddlInsdMgrsLessorsPrem {
   return _dataModel as GL7AddlInsdMgrsLessorsPrem
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