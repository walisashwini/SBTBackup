package gw.lob.gl7.iso.rating.infos.ratingparam.generated.mi.v11012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO {

  public construct(_gL7SublineTypeSchExclItem : GL7SublineTypeSchExclItem, parent : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO) {
    super( _gL7SublineTypeSchExclItem, parent )
  
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailDTO {
   return this
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO {
   return _parent as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO
  }
  

  
}