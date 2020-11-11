package gw.lob.common.diff

uses gw.plugin.diff.impl.DiffHelper
/**
 * Common implementation which delegates the DiffItem retrieval to the line itself.
 */
class CommonDiffHelperProducer implements DiffHelperProducer {

  var _pLine : PolicyLine

  construct(pLine : PolicyLine) {
    _pLine = pLine
  }

  override function getDiffHelper(diffReason : typekey.DiffReason) : DiffHelper<PolicyLine> {
    return _pLine.createPolicyLineDiffHelper(diffReason, null)
  }
}