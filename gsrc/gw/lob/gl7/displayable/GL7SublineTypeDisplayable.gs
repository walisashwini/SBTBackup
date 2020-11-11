package gw.lob.gl7.displayable

uses gw.api.web.job.JobWizardHelper
uses gw.lob.common.LobPropertyReference
uses gw.lob.common.displayable.LobDisplayable

class GL7SublineTypeDisplayable extends LobDisplayable {

  var _sublineType: GL7SublineType

  construct(entity: GL7SublineType, propertyName: String, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean) {
    super(entity, propertyName, jobWizardHelper, isScreenEditable)
    _sublineType = entity
  }

  override property get ForceRefresh(): boolean {
    return FieldMeta.ForceRefresh
        or shouldHandle(PropertyRef)
  }

  function shouldHandle(lobPropertyReference: LobPropertyReference) : boolean {
    return lobPropertyReference.PropertyInfo.Name == GL7SublineType#ExperienceBusinessStartDate.PropertyInfo.Name
  }

}