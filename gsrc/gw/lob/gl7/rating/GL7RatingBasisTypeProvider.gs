package gw.lob.gl7.rating

uses gw.rating.RatingBasisTypeProvider
uses gw.util.concurrent.LockingLazyVar
uses gw.api.database.Query
uses gw.api.database.Relop
uses java.util.Date

class GL7RatingBasisTypeProvider implements RatingBasisTypeProvider {

  static var _instance = LockingLazyVar.make( \ -> new GL7RatingBasisTypeProvider ())

  static property get Instance(): GL7RatingBasisTypeProvider {
    return _instance.get()
  }

  construct() {
  }

  override function getRatingBasisType(basisType: String, date: Date): RatingBasisType {
    var query = Query.make(GL7RatingBasisType)
    query.compare(GL7RatingBasisType#BasisType, Relop.Equals, basisType)
    query.and(\dateRestrict -> {
      dateRestrict.compare(GL7RatingBasisType#EffectiveDate, LessThanOrEquals, date)
      dateRestrict.or(\endDateRestrict -> {
        endDateRestrict.compare(GL7RatingBasisType#ExpirationDate, GreaterThan, date)
        endDateRestrict.compare(GL7RatingBasisType#ExpirationDate, Equals, null)
      })
    })
    return query.select().FirstResult.RatingBasisType
  }

}