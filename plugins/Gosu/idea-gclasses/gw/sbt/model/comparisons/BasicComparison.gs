package gw.sbt.model.comparisons

uses gw.sbt.loader.persistence.ComparisonDecisionSource

uses java.util.List

class BasicComparison<P, C> extends Comparison<P> {
  var _children : List<Comparison<C>>

  private construct(
      currentVersion : P,
      newVersion : P,
      adoptedVersion : P,
      comparisonDeicsionSource : ComparisonDecisionSource,
      parent : Comparison,
      childComparisonFactory : ChildComparisonFactory<P, C>) {
    super(currentVersion, newVersion, adoptedVersion, comparisonDeicsionSource, parent)
    _children = childComparisonFactory != null
        ? childComparisonFactory.createChildComparisonsFor(this)
        : {}
  }

  reified static function with<T, U>(currentVersion: T,
                             newVersion: T,
                             adoptedVersion: T,
                             comparisonDecisionSource : ComparisonDecisionSource,
                             parent: Comparison = null,
                             childComparisonFactory: ChildComparisonFactory<T, U> = null): BasicComparison<T, U> {
    return new BasicComparison<T, U>(
        currentVersion,
        newVersion,
        adoptedVersion,
        comparisonDecisionSource,
        parent,
        childComparisonFactory)
  }

  override property get Children(): List<Comparison<C>> {
    return _children
  }

  override function cloneForRevert() : Comparison<P> {
    return null
  }
}