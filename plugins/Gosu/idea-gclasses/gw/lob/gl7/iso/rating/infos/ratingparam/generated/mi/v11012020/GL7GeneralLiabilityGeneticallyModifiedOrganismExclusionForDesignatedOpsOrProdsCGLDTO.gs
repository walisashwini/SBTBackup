package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO {

  public construct(_gL7GeneticallyModifiedOrganismExclForDesignatedOps : GL7GeneticallyModifiedOrganismExclForDesignatedOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7GeneticallyModifiedOrganismExclForDesignatedOps, parent )
    _geneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetail = _gL7GeneticallyModifiedOrganismExclForDesignatedOps.GL7ScheduledItems != null ? new GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailGroupingDTO(_gL7GeneticallyModifiedOrganismExclForDesignatedOps.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get GeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetail() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailGroupingDTO {
   return _geneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetail as GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}