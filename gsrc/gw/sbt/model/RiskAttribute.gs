package gw.sbt.model

uses java.util.List

class RiskAttribute implements IntentAndDecision {
  var _description: String as Description
  var _code : String as Code
  var _intent: Intent as Intent
  var _instructions : DecisionAndInstructions as DecisionAndInstructions
  var _child : RiskAttribute as Child  // no longer used.
  var _originatingFullPath: String as OriginatingFullPath
  var _riskEntity: String as RiskEntity
  var _versions: List<RiskAttributeVersion> as VersionList = {}
  var _propertyName : String as PropertyName = ""


  var _effectiveVersion: RiskAttributeVersion as EffectiveVersion

  construct() {
    _instructions = new DecisionAndInstructions()
  }

  property get AttributePath() : List<RiskAttribute> {
    var attributes : List<RiskAttribute> = {}
    return getChildAttributes(this, attributes)
  }

  property get DefiningLeafAttribute() : RiskAttribute {
    return AttributePath.last()
  }

  property get CountrywideOnly() : boolean {
    return Intent == null
  }

  private function getChildAttributes(attribute : RiskAttribute, pathSoFar : List<RiskAttribute>) : List<RiskAttribute> {
    pathSoFar.add(attribute)
    if (attribute.Child == null) {
      return pathSoFar
    }
    return getChildAttributes(attribute.Child, pathSoFar)
  }
}