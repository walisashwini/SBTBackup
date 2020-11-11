package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO {
   return _parent as GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionForDesignatedOpsOrProdsCGLDTO
  }
  

  
}