package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO {
   return _parent as GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO
  }
  

  
}