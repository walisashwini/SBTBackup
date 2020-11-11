package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDTO {

  public construct(_gL7AddlInsdDesigntdPersonOrg : GL7AddlInsdDesigntdPersonOrg, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AddlInsdDesigntdPersonOrg, parent )
    _addlInsdDesigntdPersonOrgDetail = _gL7AddlInsdDesigntdPersonOrg.GL7ScheduledItems != null ? new GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailGroupingDTO(_gL7AddlInsdDesigntdPersonOrg.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AddlInsdDesigntdPersonOrgDetail() : GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailGroupingDTO {
   return _addlInsdDesigntdPersonOrgDetail as GL7GeneralLiabilityAddlInsdDesigntdPersonOrgDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}