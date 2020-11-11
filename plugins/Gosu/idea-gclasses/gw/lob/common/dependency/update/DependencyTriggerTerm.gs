package gw.lob.common.dependency.update

uses gw.api.domain.Clause
uses gw.api.productmodel.ClausePattern
uses gw.lob.common.dependency.DependencyInfo
uses gw.lob.common.productmodel.sync.JobWizardHelperDisplay
uses gw.lob.common.productmodel.sync.LobProductModelSyncIssuesHandler

class DependencyTriggerTerm implements DependencyTrigger {

  var _clausePattern : ClausePattern
  var _clause : Clause
  var _coverable: Coverable
  var _termCodeIdentifer : String
  var _isChanged : boolean
  var _dependencyInfo : DependencyInfo
  var _updatedMap : Map<String, Boolean>

  construct(coverable: Coverable, dependencyInfo : DependencyInfo) {
    _coverable = coverable
    _clausePattern = com.guidewire.pc.system.dependency.PCDependencies.ProductModel.getPatternByCodeIdentifier(dependencyInfo.Source.ContextType.RelativeName, ClausePattern)
    _clause = coverable.getCoverageConditionOrExclusion(_clausePattern)
    _termCodeIdentifer = dependencyInfo.Source.Name
    _dependencyInfo = dependencyInfo
  }

  construct(clause : Clause, termCodeIdentifer : String,  dependencyInfo : DependencyInfo) {
    _clause = clause
    _termCodeIdentifer = termCodeIdentifer
    _dependencyInfo = dependencyInfo
  }

  override function update(updatedMap : Map<String, Boolean> = null, helper : JobWizardHelperDisplay = null) {
    _updatedMap = updatedMap
    if (_clause != null) {
      var clauseKey = DependencyTriggerUtil.generateClauseKey(_clausePattern)
      var termKey = DependencyTriggerUtil.generateTermKey(_clausePattern, _termCodeIdentifer)

      var before = DependencyTriggerUtil.getClauseValueMap(_clausePattern, _coverable.getCoverageConditionOrExclusion(_clausePattern))
      doUpdate(helper)
      var after = DependencyTriggerUtil.getClauseValueMap(_clausePattern, _coverable.getCoverageConditionOrExclusion(_clausePattern))

      _isChanged = DependencyTriggerUtil.isTermChanged(termKey, before, after)
      if (_isChanged) {
        DependencyTriggerUtil.syncUpdatedMap(clauseKey, before, after, _updatedMap)
      }
    }
    if (!_isChanged) {
      _isChanged = isChangedBefore()
    }
  }

  override function doUpdate(helper : JobWizardHelperDisplay) {
    if (_clause != null) {
      LobProductModelSyncIssuesHandler.syncSpecifiedClauses({_clause}, helper)
    }
  }

  override function getAncestor() : Coverable {
    return _coverable
  }

  override function getDependencyInfo() : DependencyInfo {
    return _dependencyInfo
  }

  override function isChanged() : boolean {
    return _isChanged
  }

  internal function isChangedBefore() : boolean {
    var key = DependencyTriggerUtil.generateTermKey(_clausePattern, _termCodeIdentifer)
    return _updatedMap?.containsKey(key) ? _updatedMap.get(key) : false
  }
}