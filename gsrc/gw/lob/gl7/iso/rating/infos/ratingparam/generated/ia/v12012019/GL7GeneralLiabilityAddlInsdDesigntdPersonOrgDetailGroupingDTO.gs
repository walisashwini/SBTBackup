package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailDTO> {

  public construct(_gL7SublineTypeSchCovItems : GL7SublineTypeSchCovItem[], parent : GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDTO) {
    super( _gL7SublineTypeSchCovItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchCovItems
    _all = _gL7SublineTypeSchCovItems.map(\obj -> new GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailDTO {
   return _current as GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDTO {
   return _parent
  }
  

  
}