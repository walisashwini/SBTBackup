package gw.lob.gl7.iso.rating.infos.ratingparam.generated.oh.v03012020

uses gw.api.rating.flow.VisibleInRateflow
class GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDTO extends gw.rating.LineModelObject {

  public construct(_gL7PesticideOrHerbicideApplicatorCovForPropertyInC : GL7PesticideOrHerbicideApplicatorCovForPropertyInC, parent : GL7GeneralLiabilityDTO) {
  
    _parent = parent
    _dataModel = _gL7PesticideOrHerbicideApplicatorCovForPropertyInC
    _aggregateLimit = (_cf.stateMatches(_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.GL7AggLimit4Term.Value) : _aggregateLimit
    _eachOccurrenceLimit = (_cf.stateMatches(_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.GL7EachOccurrenceLimit3Term.Value) : _eachOccurrenceLimit
    _manualPremium = (_cf.stateMatches(_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.OwningCoverable, Parameters)) ? _gL7PesticideOrHerbicideApplicatorCovForPropertyInC.GL7ManualPremium237Term.Value : _manualPremium
    _productsCompletedOpsAggregateLimit = (_cf.stateMatches(_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.OwningCoverable, Parameters)) ? _cf.makeStringFrom (_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.GL7ProdsCompletedOpsAggLimitTerm.Value) : _productsCompletedOpsAggregateLimit
    _displayName = (_cf.stateMatches(_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.OwningCoverable, Parameters)) ? _gL7PesticideOrHerbicideApplicatorCovForPropertyInC.DisplayName : _displayName
    _pesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetail = _gL7PesticideOrHerbicideApplicatorCovForPropertyInC.GL7ScheduledItems != null ? new GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailGroupingDTO(_gL7PesticideOrHerbicideApplicatorCovForPropertyInC.GL7ScheduledItems, this) : null
  }

  
  @VisibleInRateflow
  override property get Self() : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDTO {
   return this
  }
  

  @VisibleInRateflow
  var _pesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetail : GL7GeneralLiabilityPesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetailGroupingDTO as readonly PesticideOrHerbicideApplicatorCovForPropertyInCareCustodyAndControlOfTheInsuredDetail  

  @VisibleInRateflow
  var _displayName : java.lang.String as DisplayName = ""

  @VisibleInRateflow
  var _productsCompletedOpsAggregateLimit : java.lang.String as ProductsCompletedOpsAggregateLimit = ""

  @VisibleInRateflow
  var _premium : java.math.BigDecimal as Premium = 0.0

  @VisibleInRateflow
  var _manualPremium : java.math.BigDecimal as ManualPremium = 0.0

  @VisibleInRateflow
  var _eachOccurrenceLimit : java.lang.String as EachOccurrenceLimit = ""

  @VisibleInRateflow
  var _aggregateLimit : java.lang.String as AggregateLimit = ""

  
  @VisibleInRateflow(false)
  property get AsDataModel() : GL7PesticideOrHerbicideApplicatorCovForPropertyInC {
   return _dataModel as GL7PesticideOrHerbicideApplicatorCovForPropertyInC
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