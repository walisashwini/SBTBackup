package gw.lob.gl7.dependency

uses gw.lob.common.dependency.GraphTraversalConstraint
uses gw.lob.gl7.GL7Coverable

class GL7GraphTraversalConstraint implements GraphTraversalConstraint {
  private var _subline: String
  private var _jurisdiction: Jurisdiction
  private var _useSubline: Boolean as readonly UseSubline
  private var _useJurisdiction: Boolean as readonly UseJurisdiction

  construct(constraintSource: Object) {
    mapConditionsInternal(constraintSource as KeyableBean)
  }

  private function mapConditionsInternal(referenceNode: KeyableBean) {
    determineCriteriaToUse(referenceNode)
    if(UseJurisdiction) {
      _jurisdiction = getJurisdictionFromBean(referenceNode)
    }
    if(UseSubline) {
      _subline = getSublineTypeFromBean(referenceNode)
    }
  }

  private function determineCriteriaToUse(referenceNode: KeyableBean) {
    _useJurisdiction = !(referenceNode typeis GL7GeneralLiabilityLine or referenceNode typeis GL7SublineType)
    _useSubline = !(referenceNode typeis GL7GeneralLiabilityLine)
  }

  override function matchesConditionsForCoverable(coverable: Coverable): Boolean {
    // For line level always return true as this is not jurisdiction nor subline specific
    if(coverable typeis GL7GeneralLiabilityLine) {
      return true
    }
    // For GL7Subline coverable only check subline type as it is not jurisdiction specific
    if (coverable typeis GL7SublineType) {
      return _subline == coverable.Subline
    }
    // For all other cases check both jurisdiction and subline type
    return (!UseJurisdiction or getJurisdictionFromBean(coverable) == _jurisdiction)
       and (!UseSubline or getSublineTypeFromBean(coverable) == _subline)
  }

  private function getJurisdictionFromBean(bean: KeyableBean): Jurisdiction {
    if (bean typeis Coverable) {
      return bean.CoverableState
    } else if (bean typeis Clause) {
      return bean.OwningCoverable.CoverableState
    } else {
      return null
    }
  }

  private function getSublineTypeFromBean(bean: KeyableBean): String {
    if (bean typeis GL7Coverable) {
      return bean.SublineTypeName
    } else if (bean typeis Clause and bean.OwningCoverable typeis GL7Coverable) {
      return bean.OwningCoverable.SublineTypeName
    } else {
      return null
    }
  }

}