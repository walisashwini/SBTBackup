package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO extends gw.rating.LineModelObject {

  public construct(_gL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO : GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO
    _manualPremium = _gL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO.GL7ManualPremium174Term.Value
    _displayName = _gL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _year2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetail : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetailGroupingDTO as readonly Year2000CompuReltdAndOtherElectronicProblemsExclProdsCompldOpsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  protected var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO {
   return _dataModel as GL7Y2KCompuReltdAndOtherElectrProbExclProdsCompldO
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