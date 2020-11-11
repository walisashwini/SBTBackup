package gw.sbt.model

uses gw.sbt.artifacts.lookups.Lookup

class ProductModelAvailability {

  var _availability : String as Availability
  var _effectiveDate : Date as readonly EffDate
  var _expirationDate : Date as readonly ExpDate
  var _jurisdiction : String as readonly Jurisdiction

  construct(availability : String, effectiveDate : Date,
            expirationDate : Date, jurisdiction : String) {
    _availability = availability
    _effectiveDate = effectiveDate
    _expirationDate = expirationDate
    _jurisdiction = jurisdiction
  }

  override function equals(other : Object) : boolean {
    return other != null and other typeis ProductModelAvailability and
        Availability == other.Availability and
        Jurisdiction == other.Jurisdiction
  }

  override function hashCode() : int {
    return Objects.hash({Availability, Jurisdiction})
  }

  property get IsAvailable() : boolean {
    return Availability == Lookup.AVAILABLE
  }
}