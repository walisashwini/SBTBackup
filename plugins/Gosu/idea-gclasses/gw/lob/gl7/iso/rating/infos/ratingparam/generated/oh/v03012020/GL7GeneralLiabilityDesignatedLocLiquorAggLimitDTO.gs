package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO {

  public construct(_gL7DesignatedLocLiquorAggLimit : GL7DesignatedLocLiquorAggLimit, parent : GL7GeneralLiabilityLocationDTO) {
    super( _gL7DesignatedLocLiquorAggLimit, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityDesignatedLocLiquorAggLimitDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityLocationDTO {
   return _parent as GL7GeneralLiabilityLocationDTO
  }
  

  
}