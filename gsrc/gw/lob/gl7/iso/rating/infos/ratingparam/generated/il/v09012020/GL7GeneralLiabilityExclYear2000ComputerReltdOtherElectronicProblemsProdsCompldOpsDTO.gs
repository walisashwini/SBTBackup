package gw.lob.gl7.iso.rating.infos.ratingparam.generated.il.v09012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityExclYear2000ComputerReltdOtherElectronicProblemsProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityExclYear2000ComputerReltdOtherElectronicProblemsProdsCompldOpsDTO {

  public construct(_gL7ExclY2KCompReltdOtherElectrProbProdsCompldOps : GL7ExclY2KCompReltdOtherElectrProbProdsCompldOps, parent : GL7GeneralLiabilityDTO) {
    super( _gL7ExclY2KCompReltdOtherElectrProbProdsCompldOps, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityExclYear2000ComputerReltdOtherElectronicProblemsProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}