package gw.sbt.loader.modifier

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.loader.EntityTypeKeyHelper
uses gw.sbt.util.LoaderUtil
uses gw.sbt.util.XmlUtil
uses gw.xml.util.Pair
uses org.slf4j.LoggerFactory

uses java.util.Date
uses java.util.List

class SystemTableModifier {

  static function adoptSystemTableRows(systemTable : SystemTable, rows : List<SystemTableRow>, adoptionDate : Date, jurisdiction: String) {
    if (rows.Empty) {
      return
    }
    var currentPublicIds = systemTable.AllRows*.PublicId
    var jurisdictionColumnName = getJurisdictionColumnNameForSystemTable(systemTable)
    rows.each(\row -> {
      //set effectiveDate only if expirationDate is null or later than adoptionDate
      if (row.ExpirationDate == null or adoptionDate.before(row.ExpirationDate)) {
        row.EffectiveDate = adoptionDate
      }
      if (LoaderUtil.isJurisdictionCW(row.Jurisdiction)) {
        row.PublicId = LoaderUtil.generatePublicId()
        row.setJurisdiction(jurisdiction, jurisdictionColumnName)
      } else if (currentPublicIds.contains(row.PublicId)) {
        row.PublicId = LoaderUtil.generatePublicId()
        LoggerFactory.getLogger("PCA")
            .error("Duplicate row PublicId attempted to copy over for the system table ${systemTable.TableName?:systemTable.FileName} and row ${row.PublicId} in current")
      }

    })
    systemTable.addRows(rows)
  }


  static function expireSystemTableRows(systemTable : SystemTable, rows : List<SystemTableRow>, adoptionDate : Date, jurisdiction: String) {
    if (rows.Empty) {
      return
    }
    var jurisdictionColumnName = getJurisdictionColumnNameForSystemTable(systemTable)

    //create a jurisdiction version from countrywide and end-date it
    var allJurisdictionRowsInSystemTable = systemTable.AllRows.where(\row ->
        row.Jurisdiction == jurisdiction
        and LoaderUtil.isDateWithinRange(adoptionDate, row.EffectiveDate, row.ExpirationDate)
    )
    var ignoredAttributeList = {new Pair(systemTable.TableName, "public-id")}
    var ignoredElementList = {"EffectiveDate", "ExpirationDate", jurisdictionColumnName}
    rows.where(\row -> LoaderUtil.isJurisdictionCW(row.Jurisdiction)).each(\countryWideRow -> {
      //check if jurisdiction row exists.
      var hasJurisdictionRow = allJurisdictionRowsInSystemTable.hasMatch(\jurisdictionRow ->
          XmlUtil.compareXmlElements(jurisdictionRow.Xml, countryWideRow.Xml, ignoredElementList, ignoredAttributeList)
      )
      if (not hasJurisdictionRow) {// only create a jurisdiction version from countrywide if NO jurisdiction version exists
        var jurisdictionRow = countryWideRow.copy()
        jurisdictionRow.PublicId = LoaderUtil.generatePublicId()  // need to create a new publicId
        jurisdictionRow.setJurisdiction(jurisdiction, jurisdictionColumnName)
        jurisdictionRow.ExpirationDate = adoptionDate
        systemTable.addRow(jurisdictionRow)
      }
    })
    //expire all of the jurisdiction rows.
    rows.where(\row -> row.Jurisdiction == jurisdiction).each(\row -> {
      row.ExpirationDate = adoptionDate
    })

  }

  private static var JURISDICTION_AS_COLUMN_NAME = "Jurisdiction"
  private static var STATE_AS_COLUMN_NAME = "State"

  private static function getJurisdictionColumnNameForSystemTable(systemTable : SystemTable) : String {
    var helper = new EntityTypeKeyHelper()
    //TypeSystem check
    if (helper.elementExistsInTypeSystem(systemTable.TableName, JURISDICTION_AS_COLUMN_NAME)) {
      return JURISDICTION_AS_COLUMN_NAME
    } else if (helper.elementExistsInTypeSystem(systemTable.TableName, STATE_AS_COLUMN_NAME)) {
      return STATE_AS_COLUMN_NAME
    } else { //Entity check
      var entity = systemTable.BackingEntity
      if (entity != null) {
        if (EntityTypeKeyHelper.containsTypeKey(entity, JURISDICTION_AS_COLUMN_NAME)) {
          return JURISDICTION_AS_COLUMN_NAME
        } else if (EntityTypeKeyHelper.containsTypeKey(entity, STATE_AS_COLUMN_NAME)) {
          return STATE_AS_COLUMN_NAME
        }
      }
    }

    LoggerFactory.getLogger("PCA")
        .error("Unable to determine the jurisdiction column name for the system table: ${systemTable.TableName?:systemTable.FileName}, defaulting to ${JURISDICTION_AS_COLUMN_NAME}")
    return JURISDICTION_AS_COLUMN_NAME
  }

}