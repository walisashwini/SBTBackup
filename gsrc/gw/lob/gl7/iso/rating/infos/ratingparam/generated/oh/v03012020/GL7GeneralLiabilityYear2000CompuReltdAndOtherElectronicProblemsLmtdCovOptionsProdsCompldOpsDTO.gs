package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO {

  public construct(_gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds : GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds, parent : GL7GeneralLiabilityDTO) {
    super( _gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds, parent )
    _year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetail = _gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds.GL7ScheduledItems != null ? new GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailGroupingDTO(_gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get Year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetail() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailGroupingDTO {
   return _year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetail as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}