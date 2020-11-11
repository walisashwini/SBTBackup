package gw.lob.gl7.displayable

uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.displayable.LobDisplayable

class GL7LocationDisplayable extends LobDisplayable {

  construct(location: GL7Location, propertyName: String, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean) {
    super(location, propertyName, jobWizardHelper, isScreenEditable)
  }

}