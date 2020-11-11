package gw.sbt.pca.view.presenter.compare

uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.schedule.ScheduleProperty
uses gw.sbt.pca.view.DecisionHandler

class SchedulePropertyComparisonPresenter extends ProductModelComparisonRowPresenter<ScheduleProperty> {
  var _attributeName : String as Description

  construct(attributeName : String,
            schedulePropertyComparison : Comparison<ScheduleProperty>,
            decisionHandler : DecisionHandler,
            isMaintenanceUpdate : boolean = false) {
    super(schedulePropertyComparison, null, decisionHandler, isMaintenanceUpdate)
    _attributeName = attributeName
  }

  override property get CurrentValue() : String {
    return displayValueFor(Comparison.Current)
  }

  override property get NewValue() : String {
    return displayValueFor(Comparison.New)
  }

  override property get AdoptedValue() : String {
    return displayValueFor(Comparison.Adopted)
  }

  override protected function displayValueFor(scheduleProperty : ScheduleProperty) : String {
    if (scheduleProperty.Description == null) {
      return Lookup.DOES_NOT_EXIST
    } else {
      return scheduleProperty.Description
    }
  }
}