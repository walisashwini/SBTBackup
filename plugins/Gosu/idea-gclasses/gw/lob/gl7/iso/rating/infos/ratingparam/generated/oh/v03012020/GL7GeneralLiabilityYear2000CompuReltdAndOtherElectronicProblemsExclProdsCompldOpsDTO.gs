package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO {

  public construct(_gL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO : GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO, parent : GL7GeneralLiabilityDTO) {
    super( _gL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO, parent )
    _year2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetail = _gL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO.GL7ScheduledItems != null ? new GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailGroupingDTO(_gL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get Year2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetail() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailGroupingDTO {
   return _year2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetail as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}