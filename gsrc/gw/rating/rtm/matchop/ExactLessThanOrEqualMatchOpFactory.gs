package gw.rating.rtm.matchop

uses gw.rating.rtm.validation.MatchOpValidator
uses gw.rating.rtm.validation.NoOpValidator

@ReadOnly
class ExactLessThanOrEqualMatchOpFactory extends MatchOperationFactory<StatelessLessThanOrEqualMatch> {

  override function createStatelessMatchOperator(matchOp: entity.RateTableMatchOp): gw.rating.rtm.matchop.StatelessLessThanOrEqualMatch {
    return new StatelessExactLessThanOrEqualMatch(matchOp)
  }

  override function createValidator() : MatchOpValidator {
    return NoOpValidator.Instance
  }
}
