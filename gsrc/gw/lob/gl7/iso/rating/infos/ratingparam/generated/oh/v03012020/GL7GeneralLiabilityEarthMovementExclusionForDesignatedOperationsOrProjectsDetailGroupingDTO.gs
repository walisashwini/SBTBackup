package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO {
   return _current as GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityEarthMovementExclusionForDesignatedOperationsOrProjectsDTO {
   return _parent
  }
  

  
}