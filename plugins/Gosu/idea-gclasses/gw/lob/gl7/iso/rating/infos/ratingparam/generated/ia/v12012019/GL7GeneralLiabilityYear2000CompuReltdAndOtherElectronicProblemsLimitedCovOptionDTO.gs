package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO {

  public construct(_gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption : GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption, parent : GL7GeneralLiabilityDTO) {
    super( _gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption, parent )
    _year2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetail = _gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption.GL7ScheduledItems != null ? new GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailGroupingDTO(_gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get Year2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetail() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailGroupingDTO {
   return _year2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetail as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}