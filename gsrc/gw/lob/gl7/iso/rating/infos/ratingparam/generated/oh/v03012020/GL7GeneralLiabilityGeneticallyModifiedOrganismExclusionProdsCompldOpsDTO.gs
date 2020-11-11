package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionProdsCompldOpsDTO {

  public construct(_gL7GeneticallyModifiedOrganismExclProdsCompldOps : GL7GeneticallyModifiedOrganismExclProdsCompldOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7GeneticallyModifiedOrganismExclProdsCompldOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityGeneticallyModifiedOrganismExclusionProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}