package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailDTO {
   return _current as GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDTO {
   return _parent
  }
  

  
}