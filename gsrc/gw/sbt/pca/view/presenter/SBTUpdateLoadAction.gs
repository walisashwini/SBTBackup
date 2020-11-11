package gw.sbt.pca.view.presenter

uses gw.sbt.model.UpdateDecision

interface SBTUpdateLoadAction {
  function loadUpdate()
  function confirmAnalysisComplete() : String
  function revertMerge()
  function confirmRevertMerge() : String
  property get ReadOnly() : boolean
  property get HasAnalysisCompletePriv() : boolean
  property get HasMergeRevertPriv() : boolean
  function descriptionForDecision(decision : UpdateDecision) : String
}