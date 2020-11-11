package gw.sbt.pca.view

uses gw.sbt.model.DecisionAndInstructions
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.clause.DataType
uses java.util.HashMap
uses java.util.Map
uses java.util.List

class BasicDecisionHandler extends DecisionHandler <DecisionAndInstructions> {

  private var _childrenParents : Map<DecisionAndInstructions, DecisionAndInstructions>
  private var _parentsChildren : Map<DecisionAndInstructions, List<DecisionAndInstructions>>

  construct(update : SBTUpdate) {
    createMap(update)
  }

  private function createMap(update: SBTUpdate) {
    _childrenParents = new HashMap<DecisionAndInstructions, DecisionAndInstructions>()
    _parentsChildren = new HashMap<DecisionAndInstructions, List<DecisionAndInstructions>>()

    update.Clauses.where(\clause -> UpdateDiffType.from(clause.Intent) != UpdateDiffType.TC_NOCHANGE).each(\clause -> {
      clause.CovTerms.where(\covTerm -> UpdateDiffType.from(covTerm.Intent) != UpdateDiffType.TC_NOCHANGE).each(\covTerm -> {
        if (covTerm.DataType == DataType.OPTION) {
          covTerm.CovTermOptions.where(\covTermOption -> UpdateDiffType.from(covTermOption.Intent) != UpdateDiffType.TC_NOCHANGE).each(\option -> {
            _childrenParents.put(option.DecisionAndInstructions, covTerm.DecisionAndInstructions)
          })
          _parentsChildren.put(covTerm.DecisionAndInstructions,
              covTerm.CovTermOptions.where(\covTermOption -> UpdateDiffType.from(covTermOption.Intent) != UpdateDiffType.TC_NOCHANGE)*.DecisionAndInstructions.toList())
        }

        _childrenParents.put(covTerm.DecisionAndInstructions, clause.DecisionAndInstructions)
      })
      _parentsChildren.put(clause.DecisionAndInstructions,
          clause.CovTerms.where(\covTerm -> UpdateDiffType.from(covTerm.Intent) != UpdateDiffType.TC_NOCHANGE)*.DecisionAndInstructions.toList())
    })
  }

  override function decisionOf(item: DecisionAndInstructions): DecisionAndInstructions {
    return item
  }

  override function childrenOf(item: DecisionAndInstructions): List<DecisionAndInstructions> {
    return _parentsChildren.get(item) ?: {}
  }

  override function parentOf(item: DecisionAndInstructions): DecisionAndInstructions {
    return _childrenParents.get(item)
  }

  override function decisionRequired(item: DecisionAndInstructions, isMaintenanceUpdate : boolean = false): boolean {
    return true
  }
}