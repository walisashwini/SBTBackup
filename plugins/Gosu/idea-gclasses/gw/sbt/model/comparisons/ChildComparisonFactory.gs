package gw.sbt.model.comparisons

uses java.util.List

interface ChildComparisonFactory<P, C> {

  function createChildComparisonsFor(parentComparison : Comparison<P>) : List<Comparison<C>>
}