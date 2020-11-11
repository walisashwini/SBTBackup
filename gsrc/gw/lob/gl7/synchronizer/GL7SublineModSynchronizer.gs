package gw.lob.gl7.synchronizer

uses gw.lob.common.dependency.PropertyInstanceInfo
uses gw.lob.common.synchronizer.ISynchronizer

class GL7SublineModSynchronizer implements ISynchronizer<GL7GeneralLiabilityLine> {

  override function synchronizeBeforeChange(propInst : PropertyInstanceInfo) {
  }

  override function synchronizeAfterChange(propInst : PropertyInstanceInfo) {
  }

  override function synchronizeBeforeQuote(propInst : PropertyInstanceInfo, pLine : GL7GeneralLiabilityLine) {
    var subline = propInst.ContextObject as GL7Subline
    GL7GeneralLiabilityLine.setScheduleRatingModificationApplies(subline)
  }
}
