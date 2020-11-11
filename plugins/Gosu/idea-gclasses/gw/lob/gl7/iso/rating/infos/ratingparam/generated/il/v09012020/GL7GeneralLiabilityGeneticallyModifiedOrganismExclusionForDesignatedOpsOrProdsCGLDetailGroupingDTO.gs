package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailGroupingDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailGroupingDTO implements gw.rating.Groupable<GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO> {

  public construct(_gL7SublineTypeSchExclItems : GL7SublineTypeSchExclItem[], parent : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO) {
    super( _gL7SublineTypeSchExclItems, parent )
    _parent = parent
    _dataModel = _gL7SublineTypeSchExclItems
    _all = _gL7SublineTypeSchExclItems.map(\obj -> new GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO(obj, parent)).toList().cast(GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO)
    _current = _all.first()
  }

  public function updateCurrent(current : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO) {
    _current = current
  }

  
  @VisibleInRateflow
  property get Current() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO {
   return _current as GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO
  }
  

  
  @VisibleInRateflow
  property get All() : java.util.List<GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO> {
   return _all as java.util.List<GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO>
  }
  

  var _parent : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO {
   return _parent
  }
  

  
}