package gw.lob.gl7.iso.rating.infos.ratingparam.generated.cw.v12012019

uses gw.api.rating.flow.VisibleInRateflow
abstract class GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO extends gw.rating.LineModelObject {

  public construct(_gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds : GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds
    _displayName = _gL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds.DisplayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDTO {
   return this
  }
  

  @VisibleInRateflow
  protected var _year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetail : GL7GeneralLiabilityYear2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetailGroupingDTO as readonly Year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOpsDetail  

  @VisibleInRateflow
  protected var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  @gw.lob.common.annotations.StatCode("Y2KCompuReltdOtherElectrProbLm")
  protected var _year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOps : java.lang.String as Year2000CompuReltdAndOtherElectronicProblemsLmtdCovOptionsProdsCompldOps = ""

  @VisibleInRateflow
  protected var _premium : java.math.BigDecimal as Premium = 0.0

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds {
   return _dataModel as GL7Y2KCompuReltdAndOtherElectrProbLmtdCovOptsProds
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