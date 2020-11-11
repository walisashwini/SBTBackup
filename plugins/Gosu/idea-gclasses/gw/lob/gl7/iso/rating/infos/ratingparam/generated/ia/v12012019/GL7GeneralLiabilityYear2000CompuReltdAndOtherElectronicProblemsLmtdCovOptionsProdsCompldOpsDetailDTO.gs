package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO {
   return _parent as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO
  }
  

  
}