package gw.rating.rtm.matchop

uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.rating.rtm.domain.OrderedPersistenceAdapter

uses java.math.RoundingMode

@ReadOnly
class StatelessExactGreaterThanOrEqualMatch extends StatelessGreaterThanOrEqualMatch {
  construct(matchOp : RateTableMatchOp) {
    super(matchOp)
  }

  override protected function fastFilter(results : List<OrderedPersistenceAdapter>, arg : Comparable) : List<OrderedPersistenceAdapter> {
    var result = super.fastFilter(results, arg)
    var max = result.maxBy(\row -> row.get(ArgIndex))?.get(ArgIndex)

    return result.where(\row -> row.get(ArgIndex) == max)
  }

}