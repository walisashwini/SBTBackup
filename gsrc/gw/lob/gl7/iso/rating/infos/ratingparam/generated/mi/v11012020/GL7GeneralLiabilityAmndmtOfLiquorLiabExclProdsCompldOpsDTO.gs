package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityAmndmtOfLiquorLiabExclProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityAmndmtOfLiquorLiabExclProdsCompldOpsDTO {

  public construct(_gL7AmndmtOfLiquorLiabExclProdsCompldOps : GL7AmndmtOfLiquorLiabExclProdsCompldOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7AmndmtOfLiquorLiabExclProdsCompldOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityAmndmtOfLiquorLiabExclProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}