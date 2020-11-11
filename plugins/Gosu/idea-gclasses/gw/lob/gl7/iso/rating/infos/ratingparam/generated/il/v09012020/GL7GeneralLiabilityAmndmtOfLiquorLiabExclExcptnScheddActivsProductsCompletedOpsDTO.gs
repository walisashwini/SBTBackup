package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO {

  public construct(_gL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo : GL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo, parent )
    _amndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetail = _gL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo.GL7ScheduledItems != null ? new GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailGroupingDTO(_gL7AmndmtOfLiquorLiabExclExcptnScheddActivsProdsCo.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get AmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetail() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailGroupingDTO {
   return _amndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetail as GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}