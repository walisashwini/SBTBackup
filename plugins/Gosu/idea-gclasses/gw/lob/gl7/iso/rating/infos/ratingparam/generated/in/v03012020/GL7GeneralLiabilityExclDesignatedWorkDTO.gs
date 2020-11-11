package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedWorkDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedWorkDTO {

  public construct(_gL7ExclDesignatedWork : GL7ExclDesignatedWork, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDesignatedWork, parent )
    _exclDesignatedWorkDetail = _gL7ExclDesignatedWork.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDesignatedWorkDetailGroupingDTO(_gL7ExclDesignatedWork.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedWorkDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDesignatedWorkDetail() : GL7GeneralLiabilityExclDesignatedWorkDetailGroupingDTO {
   return _exclDesignatedWorkDetail as GL7GeneralLiabilityExclDesignatedWorkDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}