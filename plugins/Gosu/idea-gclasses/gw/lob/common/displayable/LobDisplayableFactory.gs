package gw.lob.common.displayable

uses gw.api.web.job.JobWizardHelper
uses gw.lang.reflect.IType
uses java.util.List
uses gw.api.upgrade.Coercions

class LobDisplayableFactory {
  reified static function getEntityDisplayables<T extends LobDisplayable>(entity: KeyableBean, lobDisplayableClass: Type<T>, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean): List<T> {
    if (entity == null) {
      return {}
    }
    var entityFieldMetas = LobFieldMetaSupport.Instance.findWidgetTypesByEntityProperty(entity)

    var displayables = entityFieldMetas.entrySet().flatMap<T>(\fieldMeta -> {
      var name = fieldMeta.Key
      var widgetType = fieldMeta.Value
      var displayable: T
      if (widgetType == LobFieldWidgetType.TC_LABEL.Code) {
        displayable = new LabelDisplayable(entity, name) as T
      } else {
        displayable = getPropertyDisplayable(entity, lobDisplayableClass, jobWizardHelper, isScreenEditable, name)
      }
      return { displayable }
    })

    return displayables.sortBy(\displayable -> displayable.FieldMeta.Priority)
  }

  reified static function getPropertyDisplayable<T extends LobDisplayable>(entity: KeyableBean, lobDisplayableClass: Type<T>, jobWizardHelper: JobWizardHelper, isScreenEditable: boolean, propertyName: String): T {
    var params = Coercions.makeArray<gw.lang.reflect.IType>({KeyableBean, String, JobWizardHelper, boolean})
    var args = {entity, propertyName, jobWizardHelper, isScreenEditable}.toArray()
    var displayable = lobDisplayableClass.TypeInfo.getCallableConstructor(params).Constructor.newInstance(args) as T
    return displayable
  }
}