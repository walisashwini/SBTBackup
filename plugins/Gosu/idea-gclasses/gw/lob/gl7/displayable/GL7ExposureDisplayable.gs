package gw.lob.gl7.displayable

uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.displayable.LobDisplayable

class GL7ExposureDisplayable extends LobDisplayable {

  private final static var PROPERTIES_EDITABLE_FOR_NEW_EXPOSURE_ONLY = {
    // TODO fix properly
    //GL7Exposure#DescriptionOrClassCodeSelection.PropertyInfo.Name,
    GL7Exposure#ClassCode.PropertyInfo.Name,
    GL7Exposure#ClassDescription.PropertyInfo.Name
  }

  construct(exposure: GL7Exposure, propertyName: String, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean) {
    super(exposure, propertyName, jobWizardHelper, isScreenEditable)
  }

  override property get Editable(): boolean {
    return super.Editable
      and (not PROPERTIES_EDITABLE_FOR_NEW_EXPOSURE_ONLY.contains(PropertyInfo.Name) or Exposure.NewExposure) // listed properties are editable only for new exposures
  }

  property get Exposure(): GL7Exposure {
    return PropertyRef.Entity as GL7Exposure
  }
}