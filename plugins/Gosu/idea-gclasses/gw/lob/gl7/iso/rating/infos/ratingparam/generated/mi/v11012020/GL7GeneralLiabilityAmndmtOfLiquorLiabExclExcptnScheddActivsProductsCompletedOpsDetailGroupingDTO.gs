package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO {
   return _current as GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsProductsCompletedOpsDTO {
   return _parent
  }
  

  
}