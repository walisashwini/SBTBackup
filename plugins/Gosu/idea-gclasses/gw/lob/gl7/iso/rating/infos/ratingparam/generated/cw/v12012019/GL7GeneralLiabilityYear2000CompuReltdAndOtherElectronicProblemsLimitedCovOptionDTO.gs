package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO extends gw.rating.LineModelObject {

  public construct(_gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption : GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption
    _displayName = _gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _year2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetail : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetailGroupingDTO as readonly Year2000CompuReltdAndOtherElectronicProblemsLimitedCovOptionDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption {
   return _dataModel as GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOption
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  protected var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}