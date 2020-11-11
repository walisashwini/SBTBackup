package gw.lob.common.dependency.update

uses gw.lob.common.dependency.DependencyInfo
uses gw.lob.common.productmodel.sync.JobWizardHelperDisplay

interface DependencyTrigger {
  function update(updatedMap : Map<String, Boolean> = null, helper : JobWizardHelperDisplay = null)

  function doUpdate(helper : JobWizardHelperDisplay)

  function getAncestor() : Coverable

  function getDependencyInfo() : DependencyInfo

  function isChanged() : boolean
}