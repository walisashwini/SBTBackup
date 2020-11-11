package gw.sbt.model.comparisons

uses gw.lang.reflect.features.PropertyReference
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.IntentAndDecision
uses gw.sbt.model.ProductModelObject
uses gw.sbt.model.Risk
uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.UpdateDecision
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.clause.Clause
uses gw.sbt.model.clause.ClauseAttribute
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.CovTermOption
uses gw.sbt.model.form.PolicyForm
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.model.rating.RatingAlgorithm
uses gw.sbt.model.schedule.ScheduleProperty
uses java.util.List

abstract class Comparison<T> {
  var _currentVersion : T as readonly Current
  var _newVersion : T as readonly New
  var _adoptedVersion : T as readonly Adopted

  var _parent : Comparison as readonly Parent
  abstract property get Children() : List<Comparison>

  protected var _comparisonDecisionSource : ComparisonDecisionSource
  var _decisionAndInstructions : DecisionAndInstructions as DecisionAndInstructions

  protected construct(currentVersion : T, newVersion : T, adoptedVersion : T,
                      comparisonDecisionSource : ComparisonDecisionSource, parent : Comparison = null) {
    _currentVersion = currentVersion
    _newVersion = newVersion
    _adoptedVersion = adoptedVersion
    _parent = parent
    _comparisonDecisionSource = comparisonDecisionSource

    // There may be versions that do not implement IntentAndDecision
    if(newVersion typeis IntentAndDecision and newVersion != null) {
      _decisionAndInstructions = newVersion.DecisionAndInstructions
    } else {
      _decisionAndInstructions = _comparisonDecisionSource.getDecisionAndInstructions(currentVersion, adoptedVersion)
    }
  }

  static function forAttribute(
      currentVersion : ClauseAttribute,
      newVersion : ClauseAttribute,
      adoptedVersion : ClauseAttribute,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : Comparison = null) : Comparison<ClauseAttribute> {
    return BasicComparison.with(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forClause(
      currentVersion : Clause,
      newVersion : Clause,
      adoptedVersion : Clause,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : Comparison = null) : ClauseComparison {
    return new ClauseComparison(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forCovTerm(
      currentVersion : CovTerm,
      newVersion : CovTerm,
      adoptedVersion : CovTerm,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : ClauseComparison = null) : CovTermComparison {
    return new CovTermComparison(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forCovTermOption(
      currentVersion : CovTermOption,
      newVersion : CovTermOption,
      adoptedVersion : CovTermOption,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : CovTermComparison) : Comparison<CovTermOption> {
    return BasicComparison.with(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forScheduleProperty(
      currentVersion : ScheduleProperty,
      newVersion : ScheduleProperty,
      adoptedVersion : ScheduleProperty,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : ClauseComparison) : Comparison<ScheduleProperty> {
    return BasicComparison.with(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forPolicyForm(
      currentVersion : PolicyForm,
      newVersion : PolicyForm,
      adoptedVersion : PolicyForm,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : Comparison = null) : Comparison<PolicyForm> {
    return BasicComparison.with(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forRateTable(
      currentVersion : RateTableContent,
      newVersion : RateTableContent,
      adoptedVersion : RateTableContent,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : Comparison = null) : RateTableComparison {
    return new RateTableComparison(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forRatingAlgorithm(
      newVersion : RatingAlgorithm,
      adoptedVersion : RatingAlgorithm,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : Comparison = null) : Comparison<RatingAlgorithm> {
    return BasicComparison.with(null, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forRisk(
      currentVersion : Risk,
      newVersion : Risk,
      adoptedVersion : Risk,
      comparisonDecisionSource : ComparisonDecisionSource,
      isIndependentState : boolean = false,
      parent : Comparison = null) : RiskComparison {
    return new RiskComparison(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, isIndependentState, parent)
  }

  static function forRiskAttribute(
      currentVersion : RiskAttribute,
      newVersion : RiskAttribute,
      adoptedVersion : RiskAttribute,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : Comparison = null) : RiskAttributeComparison {
    return new RiskAttributeComparison(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
  }

  static function forBureauCodes(
      currentVersion : BureauCodes,
      newVersion : BureauCodes,
      adoptedVersion : BureauCodes,
      adoptionDate : Date,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : Comparison = null) : BureauCodesComparison {
    return new BureauCodesComparison(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, adoptionDate, parent)
  }

  property get HasValue() : boolean {
    return Adopted != null or New != null or Current != null
  }

  property get CanonicalVersion() : T {
    return {Current, New, Adopted}.firstWhere(\ version -> version != null)
  }

  property get ChildrenWithAvailability() : List<Comparison<ProductModelObject>> {
    return Children.where(\ child -> child.CanonicalVersion typeis ProductModelObject)
        .cast(Comparison<ProductModelObject>)
  }

  function newForAttributeProperty(prop : PropertyReference<T, ClauseAttribute>)
      : Comparison<ClauseAttribute> {
    return Comparison.forAttribute(
        attributeValueFor(Current, prop),
        attributeValueFor(New, prop),
        attributeValueFor(Adopted, prop),
        _comparisonDecisionSource,
        this)
  }

  function isVersionEmpty(version : Object) : boolean {
    return version == null
  }

  private function attributeValueFor(version : T, prop : PropertyReference<T, ClauseAttribute>) : ClauseAttribute {
    return version != null ? prop.get(version) : null
  }

  //copy instruction and decision
  abstract function cloneForRevert(): Comparison<T>

  protected function copyDecisionsAndInstructionsFrom(templateComparison : Comparison<T>){
    DecisionAndInstructions.updateFrom(templateComparison.DecisionAndInstructions)
  }

  property get Decision() : UpdateDecision {
    return DecisionAndInstructions.Decision
  }

  property set Decision(decision : UpdateDecision) {
    DecisionAndInstructions.Decision = decision
  }

  property get CompareAdoptedToNew() : TwoWayCompare {
    return new TwoWayCompare(new ComparisonTwoWayComparable(this, \ comp -> comp.Adopted, \ comp -> comp.New))
  }

  property get CompareCurrentToNew() : TwoWayCompare {
    return new TwoWayCompare(new ComparisonTwoWayComparable(this, \ comp -> comp.Current, \ comp -> comp.New))
  }

  private class ComparisonTwoWayComparable implements TwoWayComparable {
    var _comparison : Comparison
    var _getSource(comparison : Comparison) : Object
    var _getTarget(comparison : Comparison) : Object

    construct(comparison : Comparison,
              getSource(comparison : Comparison) : Object,
              getTarget(comparison : Comparison) : Object) {
      _comparison = comparison
      _getSource = getSource
      _getTarget = getTarget
    }

    private function newFor(comparison : Comparison) : ComparisonTwoWayComparable {
      return new ComparisonTwoWayComparable(comparison, _getSource, _getTarget)
    }

    override property get Parent() : TwoWayComparable {
      return _comparison.Parent == null ? null : newFor(_comparison.Parent)
    }

    override property get Children() : List<TwoWayComparable> {
      return _comparison.Children.map(\ child -> newFor(child)) ?: {}
    }

    override property get Source() : Object {
      return _getSource(_comparison)
    }

    override property get Target() : Object {
      return _getTarget(_comparison)
    }

  }

}