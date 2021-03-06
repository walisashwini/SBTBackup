package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedProductsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedProductsDTO {

  public construct(_gL7ExclDesignatedProds : GL7ExclDesignatedProds, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclDesignatedProds, parent )
    _exclDesignatedProductsDetail = _gL7ExclDesignatedProds.GL7ScheduledItems != null ? new GL7GeneralLiabilityExclDesignatedProductsDetailGroupingDTO(_gL7ExclDesignatedProds.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedProductsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get ExclDesignatedProductsDetail() : GL7GeneralLiabilityExclDesignatedProductsDetailGroupingDTO {
   return _exclDesignatedProductsDetail as GL7GeneralLiabilityExclDesignatedProductsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}