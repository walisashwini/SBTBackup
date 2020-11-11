package gw.lob.gl7.financials

uses gw.lob.common.financials.GenericLobCostMethodsImpl

@Export
class GL7CostMethodsImpl extends GenericLobCostMethodsImpl<GL7Cost> {

  construct(owner : GL7Cost) {
    super(owner)
  }

  override property get Jurisdiction() : Jurisdiction  {
    return _owner.GL7Line.Branch.BaseState
  }

}