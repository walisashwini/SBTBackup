package gw.lob.common.dependency

uses gw.api.upgrade.Coercions

class EffectiveJurisdictionCriteria {
  var _jurisdiction: String as readonly Jurisdiction
  var _date: Date as readonly Date

  construct(jurisdiction: String, date: Date) {
    _jurisdiction = jurisdiction
    _date = date
  }

  construct(jurisdiction: Jurisdiction, date: Date) {
    this(jurisdiction.Code, date)
  }

  construct(jurisdiction: Jurisdiction, date: String) {
    this(jurisdiction.Code, Coercions.makeDateFrom(date))
  }

  construct(jurisdiction: String, date: String) {
    this(jurisdiction, Coercions.makeDateFrom(date))
  }

  public static function createForCoverable(coverable : Coverable) : EffectiveJurisdictionCriteria {
    var jurisdiction = DependencyUtil.getJurisdiction(coverable)
    var referenceDate = DependencyUtil.getCoverableReferenceDate(coverable)
    return new EffectiveJurisdictionCriteria(jurisdiction, referenceDate)
  }

  public static function createForClause(coverable : Coverable, clauseCode : String) : EffectiveJurisdictionCriteria {
    var jurisdiction = DependencyUtil.getJurisdiction(coverable)
    var referenceDate = DependencyUtil.getClauseReferenceDate(coverable, clauseCode)
    return new EffectiveJurisdictionCriteria(jurisdiction, referenceDate)
  }

  override function equals(obj: Object): boolean {
    return obj typeis EffectiveJurisdictionCriteria
        and obj._jurisdiction == _jurisdiction
        and obj._date == _date
  }

  override function hashCode(): int {
    return Objects.hash({_jurisdiction, _date})
  }
}