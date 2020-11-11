package gw.lob.common.util

uses gw.api.database.Query
uses gw.lang.reflect.IPropertyInfo
uses gw.lang.reflect.IType
uses gw.pl.persistence.core.Bean
uses gw.util.Pair

uses java.io.Serializable

class SystemTableQueryUtil {

  private static final var JURISDICTION = "Jurisdiction"
  private static final var STATE = "State"
  private static final var EFFECTIVEDATE = "EffectiveDate"
  private static final var EXPIRATIONDATE = "ExpirationDate"

  public static function addJurisdictionFilter(query : Query, entityType : IType, jurisdiction : Jurisdiction) {
    var jurisdictionColumnAndValue = getJurisdictionData(entityType, jurisdiction)

    query.or(\jurisdictionRestrict -> {
      jurisdictionRestrict.compare(jurisdictionColumnAndValue.First, Equals, jurisdictionColumnAndValue.Second)
      jurisdictionRestrict.compare(jurisdictionColumnAndValue.First, Equals, null)
    })
  }

  public static function addDateFilter(query : Query, jobDate : Date) {
    query.and(\dateRestrict -> {
      dateRestrict.compare(EFFECTIVEDATE, LessThanOrEquals, jobDate)
      dateRestrict.or(\endDateRestrict -> {
        endDateRestrict.compare(EXPIRATIONDATE, GreaterThan, jobDate)
        endDateRestrict.compare(EXPIRATIONDATE, Equals, null)
      })
    })
  }

  public static function addFilterForDeletion(query : Query, entityType : IType, jurisdiction : Jurisdiction, jobDate : Date) {
    if (jurisdiction != null) {
      addJurisdictionFilter(query, entityType, jurisdiction)
    }
    query.and(\dateRestrict -> {
      dateRestrict.compare(EXPIRATIONDATE, LessThanOrEquals, jobDate)
    })
  }

  public static function getJurisdictionColumn(entityType : IType) : IPropertyInfo {
    var jurisdictionProp = entityType.TypeInfo.getProperty(JURISDICTION)
    if (jurisdictionProp == null) {
      jurisdictionProp = entityType.TypeInfo.getProperty(STATE)
    }

    if (jurisdictionProp == null) {
      throw "The system table must have a jurisdiction column: ${entityType.Name}"
    }

    return jurisdictionProp
  }

  public static function getEffectiveDateFromRow(row : Bean) : Date {
    return row.getFieldValue(EFFECTIVEDATE) as Date
  }

  public static function getExpirationDateFromRow(row : Bean) : Date {
    return row.getFieldValue(EXPIRATIONDATE) as Date
  }

  private static function getJurisdictionData(entityType : IType, jurisdiction : Jurisdiction) : Pair<String, Serializable & Comparable> {
    var jurisdictionProp = getJurisdictionColumn(entityType)

    var jurisdictionColumn = jurisdictionProp.Name
    var jurisdictionType = jurisdictionProp.FeatureType
    var jurisdictionValue = (jurisdictionType.Name == "typekey.Jurisdiction") ? jurisdiction : jurisdiction.Code

    return new Pair<String, Serializable & Comparable>(jurisdictionColumn, jurisdictionValue);
  }

  private static function getJurisdictionColumnName(entityType : IType) : String {
    return getJurisdictionColumn(entityType).Name
  }

}