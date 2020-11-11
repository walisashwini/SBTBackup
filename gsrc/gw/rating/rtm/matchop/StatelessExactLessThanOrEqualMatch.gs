package gw.rating.rtm.matchop

uses gw.rating.rtm.domain.OrderedPersistenceAdapter
uses gw.api.database.Query

uses java.math.RoundingMode

@ReadOnly
class StatelessExactLessThanOrEqualMatch extends StatelessLessThanOrEqualMatch {

  construct(matchOp : RateTableMatchOp) {
    super(matchOp)
  }

  override protected function fastFilter(results : List<OrderedPersistenceAdapter>, arg : Comparable) : List<OrderedPersistenceAdapter> {
    var result = super.fastFilter(results, arg)
    var min = result.minBy(\row -> row.get(ArgIndex))?.get(ArgIndex)

    return result.where(\row -> row.get(ArgIndex) == min)
  }

}