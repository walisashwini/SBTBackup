package gw.sbt.model

interface IntentAndDecision {
  property get Intent(): Intent
  property get DecisionAndInstructions(): DecisionAndInstructions

  property get Decision() : UpdateDecision {
    return DecisionAndInstructions.Decision
  }
}