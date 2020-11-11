package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDTO {

  public construct(_gL7AmndmtOfLiquorLiabExclExcptnScheddActivs : GL7AmndmtOfLiquorLiabExclExcptnScheddActivs, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmndmtOfLiquorLiabExclExcptnScheddActivs, parent )
    _amndmtOfLiquorLiabExclExcptnScheddActivsDetail = _gL7AmndmtOfLiquorLiabExclExcptnScheddActivs.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailGroupingDTO(_gL7AmndmtOfLiquorLiabExclExcptnScheddActivs.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmndmtOfLiquorLiabExclExcptnScheddActivsDetail() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailGroupingDTO {
   return _amndmtOfLiquorLiabExclExcptnScheddActivsDetail as GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}