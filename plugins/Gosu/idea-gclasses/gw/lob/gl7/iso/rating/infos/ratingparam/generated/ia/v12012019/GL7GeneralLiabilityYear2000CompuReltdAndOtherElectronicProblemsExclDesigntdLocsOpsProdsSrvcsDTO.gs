package gw.lob.gl7.iso.rating.infos.ratingparam.generated.ia.v12012019

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO extends gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019.GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO {

  public construct(_gL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs : GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs, parent : GL7GeneralLiabilityDTO) {
    super( _gL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs, parent )
    _year2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetail = _gL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs.GL7ScheduledItems != null ? new GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailGroupingDTO(_gL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO {
   return this
  }
  

  
  @VisibleInRateflow
  property get Year2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetail() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailGroupingDTO {
   return _year2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetail as GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailGroupingDTO
  }
  

  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent as GL7GeneralLiabilityDTO
  }
  

  
}