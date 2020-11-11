package gw.lob.common.dependency.update

uses gw.api.productmodel.ClausePattern
uses gw.lob.common.dependency.DependencyInfo
uses gw.lob.common.productmodel.sync.JobWizardHelperDisplay
uses gw.lob.common.productmodel.sync.LobProductModelSyncIssuesHandler

class DependencyTriggerClause implements DependencyTrigger {
  var _coverable : Coverable
  var _clausePattern : ClausePattern
  var _isChanged : boolean
  var _dependencyInfo : DependencyInfo
  var _updatedMap : Map<String, Boolean>

  construct(coverable: Coverable, dependencyInfo : DependencyInfo) {
    _coverable = coverable
    _clausePattern = com.guidewire.pc.system.dependency.PCDependencies.ProductModel.getPatternByCodeIdentifier(dependencyInfo.Source.Name, ClausePattern)
    _dependencyInfo = dependencyInfo
  }

  override function update(updatedMap : Map<String, Boolean> = null, helper : JobWizardHelperDisplay = null) {
    _updatedMap = updatedMap
    var clauseKey = DependencyTriggerUtil.generateClauseKey(_clausePattern)

    var before = DependencyTriggerUtil.getClauseValueMap(_clausePattern, _coverable.getCoverageConditionOrExclusion(_clausePattern))
    doUpdate(helper)
    var after = DependencyTriggerUtil.getClauseValueMap(_clausePattern, _coverable.getCoverageConditionOrExclusion(_clausePattern))

    _isChanged = DependencyTriggerUtil.isClauseChanged(clauseKey, before, after)
    if (_isChanged) {
      DependencyTriggerUtil.syncUpdatedMap(clauseKey, before, after, updatedMap)
    } else {
      _isChanged = isChangedBefore()
    }
  }

  override function doUpdate(helper : JobWizardHelperDisplay) {
    LobProductModelSyncIssuesHandler.syncSpecifiedClause(_coverable, _clausePattern, helper)
  }

  internal function isChangedBefore() : boolean {
    var key = DependencyTriggerUtil.generateClauseKey(_clausePattern)
    return _updatedMap?.containsKey(key) ? _updatedMap.get(key) : false
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
}