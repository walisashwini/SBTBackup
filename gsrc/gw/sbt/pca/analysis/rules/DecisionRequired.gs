package gw.sbt.pca.analysis.rules

enum DecisionRequired {
  REQUIRED(true),
  NOT_REQUIRED(false),
  DEFERRED (false)

  private var _decisionValue : boolean as readonly DecisionValue

  private construct(decisionValue : boolean) {
    _decisionValue = decisionValue
  }
}