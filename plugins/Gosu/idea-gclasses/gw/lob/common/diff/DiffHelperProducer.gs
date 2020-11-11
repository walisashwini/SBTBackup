package gw.lob.common.diff

uses gw.plugin.diff.impl.DiffHelper
/**
 * An interface that marks that a particular policy line provides DiffHelper for OOS diff view.
 * Modified PolicyPeriodDiffPlugin utilize this functionality to retrieve the specified DiffHelper.
 * It can be attached to any policy line.
 */
interface DiffHelperProducer {
  /**
   * Method that retrieves/instantiate the proper DiffHelper for the diffReason.
   */
  function getDiffHelper(diffReason : typekey.DiffReason) : DiffHelper
}