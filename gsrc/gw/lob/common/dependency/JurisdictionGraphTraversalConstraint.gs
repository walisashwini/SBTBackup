package gw.lob.common.dependency

uses gw.api.domain.Clause

class JurisdictionGraphTraversalConstraint implements GraphTraversalConstraint {
  private var _jurisdiction: Jurisdiction

  construct(constraintSource: Object) {
    mapConditionsInternal(constraintSource)
  }

  protected construct(jurisdiction: Jurisdiction) {
    _jurisdiction = jurisdiction
  }

  private final function mapConditionsInternal(referenceNode: Object) {
    _jurisdiction = getJurisdictionFromBean(referenceNode)
  }

  override function matchesConditionsForCoverable(coverable: Coverable): Boolean {
    // For line level always return true as this is not jurisdiction specific
    var isLine = coverable typeis PolicyLine
    var isLineSchedule = coverable typeis ScheduledItem and (coverable.ScheduleParent as Clause).OwningCoverable typeis PolicyLine
    if(isLine or isLineSchedule) {
      return true
    }
    return _jurisdiction == coverable.CoverableState
  }

  private function getJurisdictionFromBean(bean: Object): Jurisdiction {
    if (bean typeis Coverable) {
      return bean.CoverableState
    } else if (bean typeis Clause) {
      return bean.OwningCoverable.CoverableState
    } else {
      return null
    }
  }

}