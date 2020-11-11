package gw.lob.common

uses gw.api.database.ISelectQueryBuilder
uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.entity.IEntityType

uses java.util.Objects

class JurisdictionRestriction {

  var _jurisdiction : Jurisdiction as Jurisdiction

  private static var JURISDICTION_PROP_NAME = "Jurisdiction"

  construct(jurisdiction : Jurisdiction = null){
    this._jurisdiction = jurisdiction
  }

  private function existsEntryForJurisdiction(entity : IEntityType) : boolean{
    var q = new Query(entity)
    q.compare(JURISDICTION_PROP_NAME, Relop.Equals, this.Jurisdiction)
    var results = q.select()
    return !results.Empty
  }

  function addToQuery(query : ISelectQueryBuilder, entity : IEntityType) {
    if(this.Jurisdiction != null && existsEntryForJurisdiction(entity)){
      query.compare(JURISDICTION_PROP_NAME, Relop.Equals, Jurisdiction)
    } else {
      query.compare(JURISDICTION_PROP_NAME, Relop.Equals, null)
    }
  }

  override function equals(o : Object) : boolean {
    if (this === o) {
      return true
    }
    if (not (o typeis JurisdictionRestriction )) {
      return false
    }

    var data = o as JurisdictionRestriction

    if(this.Jurisdiction == data.Jurisdiction) {
      return true
    }

    return false
  }

  override function hashCode() : int {
    return Objects.hashCode(this.Jurisdiction)
  }
}