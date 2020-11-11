package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedProductsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedProductsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclDesignatedProductsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclDesignatedProductsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclDesignatedProductsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclDesignatedProductsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclDesignatedProductsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclDesignatedProductsDetailDTO {
   return _current as GL7GeneralLiabilityExclDesignatedProductsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclDesignatedProductsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclDesignatedProductsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclDesignatedProductsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedProductsDTO {
   return _parent
  }
  

  
}