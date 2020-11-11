package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO {
   return _parent as GL7GeneralLiabilityExclDesignatedOpsCovByAControlledWrapUpInsProgramProdsCompldOpsDTO
  }
  

  
}