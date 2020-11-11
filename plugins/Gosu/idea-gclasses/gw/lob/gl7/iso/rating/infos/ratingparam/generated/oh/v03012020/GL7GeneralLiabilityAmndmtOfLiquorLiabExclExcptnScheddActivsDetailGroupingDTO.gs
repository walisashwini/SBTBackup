package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailDTO {
   return _current as GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclExcptnScheddActivsDTO {
   return _parent
  }
  

  
}