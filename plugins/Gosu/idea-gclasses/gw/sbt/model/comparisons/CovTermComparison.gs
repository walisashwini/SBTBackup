package gw.sbt.model.comparisons

uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.clause.ClauseAttribute
uses gw.sbt.model.clause.CovTerm
uses gw.sbt.model.clause.CovTermOption
uses java.util.ArrayList
uses java.util.List

class CovTermComparison extends Comparison<CovTerm> {
  var _attributes : List<Comparison<ClauseAttribute>> as readonly Attributes
  var _options : List<Comparison<CovTermOption>> as readonly Options

  protected construct(
      currentVersion : CovTerm,
      newVersion : CovTerm,
      adoptedVersion : CovTerm,
      comparisonDecisionSource : ComparisonDecisionSource,
      parent : ClauseComparison) {
    super(currentVersion, newVersion, adoptedVersion, comparisonDecisionSource, parent)
    _attributes = createAttributes()
    _options = createOptions()
  }

  private function createAttributes() : List<Comparison<ClauseAttribute>> {
    var attributeProps = {
        CovTerm#DescriptionAttribute,
        CovTerm#RequiredAttribute,
        CovTerm#ValueTypeAttribute,
        CovTerm#DefaultValueAttribute,
        CovTerm#MinValueAttribute,
        CovTerm#MaxValueAttribute,
        CovTerm#PriorityAttribute
    }
    return attributeProps
        .map(\ prop -> newForAttributeProperty(prop))
        .where(\ comparison -> comparison.HasValue)
  }

  private function createOptions(): List<Comparison<CovTermOption>> {
    return new PluggableChildComparisonFactory<CovTerm, CovTermOption>(
        \ covTerm -> covTerm.CovTermOptions,
        \ option -> option.PublicId,
        \ currentOption, newOption, adoptedOption ->
            Comparison.forCovTermOption(currentOption, newOption, adoptedOption, _comparisonDecisionSource, this))
        .createChildComparisonsFor(this)
  }

  override property get Children(): List<Comparison<Object>> {
    var children = new ArrayList<Comparison<Object>>()
    children.addAll(_attributes)
    children.addAll(_options)
    return children
  }

  override function cloneForRevert() : Comparison<CovTerm> {
    return null
  }
}