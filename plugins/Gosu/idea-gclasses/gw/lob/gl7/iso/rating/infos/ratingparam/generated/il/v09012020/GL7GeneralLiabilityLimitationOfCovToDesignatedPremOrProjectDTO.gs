package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO {

  public construct(_gL7LimitationOfCovToDesignatedPremOrProject : GL7LimitationOfCovToDesignatedPremOrProject, parent : GL7GeneralLiabilityDTO) {
    super( _gL7LimitationOfCovToDesignatedPremOrProject, parent )
    _limitationOfCovToDesignatedPremOrProjectDetail = _gL7LimitationOfCovToDesignatedPremOrProject.GL7ScheduledItems != null ? new GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailGroupingDTO(_gL7LimitationOfCovToDesignatedPremOrProject.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get LimitationOfCovToDesignatedPremOrProjectDetail() : GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailGroupingDTO {
   return _limitationOfCovToDesignatedPremOrProjectDetail as GL7GeneralLiabilityLimitationOfCovToDesignatedPremOrProjectDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}