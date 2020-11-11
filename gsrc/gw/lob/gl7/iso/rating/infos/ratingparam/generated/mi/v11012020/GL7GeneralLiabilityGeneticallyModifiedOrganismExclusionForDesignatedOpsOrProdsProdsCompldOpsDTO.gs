package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDTO {

  public construct(_gL7GeneticallyModifiedOrganismExclForDesignatedOp1 : GL7GeneticallyModifiedOrganismExclForDesignatedOp1, parent : GL7GeneralLiabilityDTO) {
    super( _gL7GeneticallyModifiedOrganismExclForDesignatedOp1, parent )
    _geneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetail = _gL7GeneticallyModifiedOrganismExclForDesignatedOp1.GL7ScheduledItems != null ? new GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailGroupingDTO(_gL7GeneticallyModifiedOrganismExclForDesignatedOp1.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get GeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetail() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailGroupingDTO {
   return _geneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetail as GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsProdsCompldOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}