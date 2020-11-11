package gw.lob.gl7.presenters

uses gw.api.database.IQueryBeanResult
uses gw.api.database.Query
uses gw.api.domain.Clause
uses gw.util.AutoMap
uses org.apache.commons.collections.comparators.ComparatorChain
uses org.apache.commons.lang3.builder.CompareToBuilder

uses java.util.ArrayList
uses java.util.Collection
uses java.util.Collections
uses java.util.Comparator
uses java.util.Map

class GL7PresenterUtil {
  static var referenceSublines = {
      "Premises/Operations and Products/Completed Operations",
      "Premises/Operations",
      "Products/Completed Operations",
      "Liquor",
      "Owners and Contractors",
      "Pollution",
      "Product Withdrawal",
      "Railroad",
      "Underground Storage Tank",
      "Electronic Data Liability",
      "Special Protective And Highway"}

  static property get SortedSublines() : List<String> {
    var sublines = Query.make(GL7SublineValue)
        .select()
        .map(\subline -> subline.Value)

    return sublines.orderBy(\value -> referenceSublines.indexOf(value))
  }

  reified static function orderBySubline<T>(elements : Collection<T>, getSublineValue(element : T) : String) : List<T> {
    var sortedSublines = GL7PresenterUtil.SortedSublines
    return elements.orderBy(\ element -> sortedSublines.indexOf(getSublineValue(element)))
  }

  static function coveragesProviderFor(coverageCategories : String[]) : block(coverable : Coverable) : List<Clause> {
    return \ coverable -> coverable.getCoveragesInCategories(coverageCategories)
  }

  static function conditionsProviderFor(coverageCategories : String[]) : block(coverable : Coverable) : List<Clause> {
    return \ coverable -> coverable.getConditionsInCategories(coverageCategories)
  }

  static function exclusionsProviderFor(coverageCategories : String[]) : block(coverable : Coverable) : List<Clause> {
    return \ coverable -> coverable.getExclusionsInCategories(coverageCategories)
  }

  static function sublinesToJurisdictionMap(sublineValues : IQueryBeanResult<GL7SublineValue>) : Map<String, List<String>> {
    var sublinesToJurisdictions = new AutoMap<String, List<String>>(\ key -> new ArrayList<String>())
    sublineValues.each(\ subline -> {
      sublinesToJurisdictions.get(subline.Value).add(subline.Jurisdiction.Code ?: "CW")
    })

    return sublinesToJurisdictions
  }

  static function expiredSublinesForPeriod(period: PolicyPeriod) : IQueryBeanResult<GL7SublineValue> {
    return Query.make(entity.GL7SublineValue)
        .compare(GL7SublineValue#ExpirationDate, LessThanOrEquals, period.PeriodStart)
        .select()
  }

  static function validSublinesForPeriod(period: PolicyPeriod) : IQueryBeanResult<GL7SublineValue> {
    var query = Query.make(GL7SublineValue)
    query.and(\ subline -> {
      subline.compare(GL7SublineValue#EffectiveDate, LessThanOrEquals, period.EditEffectiveDate)
      query.or(\ sub -> {
        sub.compare(GL7SublineValue#ExpirationDate, GreaterThan, period.EditEffectiveDate)
        sub.compare(GL7SublineValue#ExpirationDate, Equals, null)
      })
    })

    return query.select()
  }

  static function isSublineValidForState(sublineType : String, state : String, policyPeriod : PolicyPeriod) : boolean {
    var validSublines = validSublinesForPeriod(policyPeriod)
    return isSublineValidOrExpiredForState(sublineType, state, validSublines)
  }

  static function isSublineExpiredForState(sublineType : String, state : String, policyPeriod : PolicyPeriod) : boolean {
    var expiredSublines = expiredSublinesForPeriod(policyPeriod)
    return isSublineValidOrExpiredForState(sublineType, state, expiredSublines)
  }

  static function isSublineValidOrExpiredForState(sublineType : String, state : String, sublineValues : IQueryBeanResult<GL7SublineValue>) : boolean {
    var jurisdictionsForSubline = GL7PresenterUtil.sublinesToJurisdictionMap(sublineValues).get(sublineType)
    return jurisdictionsForSubline != null and (jurisdictionsForSubline.contains(state) or jurisdictionsForSubline.contains("CW"))
  }

  static function sortSublineTypes(list : List<GL7SublineType>) : List<GL7SublineType> {
    var sorted = SortedSublines
    Collections.sort(list, new Comparator<GL7SublineType>() {
      override function compare(sl1 : GL7SublineType, sl2 : GL7SublineType) : int {
        return sorted.indexOf(sl1.Subline) - sorted.indexOf(sl2.Subline)
      }
    })

    return list
  }

  static function exposureComparatorChain() : ComparatorChain {
    var chain = new ComparatorChain()
    chain.addComparator(new ExposureSublineTypeComparator())
    chain.addComparator(new ExposureComparator())
    return chain
  }

  static private class ExposureSublineTypeComparator implements Comparator<GL7Exposure> {
    var sorted = GL7PresenterUtil.SortedSublines
    override function compare(exp1 : GL7Exposure, exp2 : GL7Exposure) : int {
      return sorted.indexOf(exp1.SublineTypeName) - sorted.indexOf(exp2.SublineTypeName)
    }
  }

  static private class ExposureComparator implements Comparator<GL7Exposure> {
    override public function compare(exp1 : GL7Exposure, exp2 : GL7Exposure) : int {
      return new CompareToBuilder()
          .append(exp1.GL7Location.Location.LocationNum, exp2.GL7Location.Location.LocationNum)
          .append(exp1.DomainModel.ClassCode, exp2.DomainModel.ClassCode)
          .append(exp1.EffectiveDate, exp2.EffectiveDate)
          .toComparison();
    }
  }

}