package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityWoodDestroyingInsectDiagnosticInspectionErrorsAndOmissionsCoverageDTO extends gw.rating.LineModelObject {

  public construct(_gL7WoodDestroyingInsectDiagnosticInspectionErrorsA : GL7WoodDestroyingInsectDiagnosticInspectionErrorsA, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7WoodDestroyingInsectDiagnosticInspectionErrorsA
    _aggregateLimit = (_cf.stateMatches(_gL7WoodDestroyingInsectDiagnosticInspectionErrorsA.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7WoodDestroyingInsectDiagnosticInspectionErrorsA.GL7AggLimit21Term.Value) : _aggregateLimit
    _eachOccurrenceLimit = (_cf.stateMatches(_gL7WoodDestroyingInsectDiagnosticInspectionErrorsA.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7WoodDestroyingInsectDiagnosticInspectionErrorsA.GL7EachOccurrenceLimit4Term.Value) : _eachOccurrenceLimit
    _manualPremium = (_cf.stateMatches(_gL7WoodDestroyingInsectDiagnosticInspectionErrorsA.OwningCoverable, Parameters)) ? _gL7WoodDestroyingInsectDiagnosticInspectionErrorsA.GL7ManualPremium238Term.Value : _manualPremium
    _displayName = (_cf.stateMatches(_gL7WoodDestroyingInsectDiagnosticInspectionErrorsA.OwningCoverable, Parameters)) ? _gL7WoodDestroyingInsectDiagnosticInspectionErrorsA.DisplayName : _displayName
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityWoodDestroyingInsectDiagnosticInspectionErrorsAndOmissionsCoverageDTO {
   return this
  }
  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  var _eachOccurrenceLimit : java.lang.String as EachOccurrenceLimit = ""

  @VisibleInRateflow
  var _aggregateLimit : java.lang.String as AggregateLimit = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7WoodDestroyingInsectDiagnosticInspectionErrorsA {
   return _dataModel as GL7WoodDestroyingInsectDiagnosticInspectionErrorsA
  }
  

  
  @VisibleInRateflow(false)
  property get Parameters() : gw.lob.common.parameters.Parameters {
   return _parent.Parameters
  }
  

  var _parent : GL7GeneralLiabilityDTO
  
  
  @VisibleInRateflow(false)
  override property get ParentLineModelObject() : GL7GeneralLiabilityDTO {
   return _parent
  }
  

  
}