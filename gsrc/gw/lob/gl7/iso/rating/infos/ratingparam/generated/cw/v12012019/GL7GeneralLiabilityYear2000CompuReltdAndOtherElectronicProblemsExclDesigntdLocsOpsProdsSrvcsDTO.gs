package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO extends gw.rating.LineModelObject {

  public construct(_gL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs : GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs
    _manualPremium = _gL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs.GL7ManualPremium173Term.Value
    _displayName = _gL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _year2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetail : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetailGroupingDTO as readonly Year2000CompuReltdAndOtherElectronicProblemsExclDesigntdLocsOpsProdsSrvcsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs {
   return _dataModel as GL7Y2KCompuReltdAndOtherElectrProbExclDesigntdLocs
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