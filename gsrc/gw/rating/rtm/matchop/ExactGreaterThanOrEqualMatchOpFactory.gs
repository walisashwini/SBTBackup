package gw.rating.rtm.matchop

uses gw.rating.rtm.validation.MatchOpValidator
uses gw.rating.rtm.validation.NoOpValidator

@ReadOnly
class ExactGreaterThanOrEqualMatchOpFactory extends MatchOperationFactory<StatelessExactGreaterThanOrEqualMatch> {

  override function createStatelessMatchOperator(matchOp: RateTableMatchOp): StatelessExactGreaterThanOrEqualMatch {
    return new StatelessExactGreaterThanOrEqualMatch(matchOp)
  }

  override function createValidator() : MatchOpValidator {
    return NoOpValidator.Instance
  }
}
