package gw.lob.common

class DefaultLobPolicyLineMethods implements LobPolicyLineMethods {

  protected var _owner: entity.PolicyLine as readonly Owner

  construct(line: entity.PolicyLine) {
    _owner = line
  }

  override function clearOverridesForAudit() {
    if(Owner.Branch.Job typeis Audit and Owner.SupportsRatingOverrides) {
      Owner.Costs.each( \ cost -> cost.resetOverrides() )
    }
  }

  override property get CustomAnswerContainersFromLine(): AnswerContainer[] {
    return {}
  }
}