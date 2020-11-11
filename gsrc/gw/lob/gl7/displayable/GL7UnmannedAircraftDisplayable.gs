package gw.lob.gl7.displayable

uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.displayable.LobDisplayable
//TODO:  this class could be removed if no overridden method needed.
class GL7UnmannedAircraftDisplayable extends LobDisplayable {
  construct(unmannedAircraft: GL7UnmannedAircraft, propertyName: String, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean) {
    super(unmannedAircraft, propertyName, jobWizardHelper, isScreenEditable)
  }
}