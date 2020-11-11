package gw.lob.gl7.iso.rating.infos.ratingparam.generated.in.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedWorkDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedWorkDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityExclDesignatedWorkDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityExclDesignatedWorkDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityExclDesignatedWorkDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityExclDesignatedWorkDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityExclDesignatedWorkDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityExclDesignatedWorkDetailDTO {
   return _current as GL7GeneralLiabilityExclDesignatedWorkDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityExclDesignatedWorkDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityExclDesignatedWorkDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityExclDesignatedWorkDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedWorkDTO {
   return _parent
  }
  

  
}