package gw.sbt.loader

uses gw.rating.rtm.domain.table.RateTableCell
uses gw.sbt.artifacts.ratebooks.CalcRoutineParameterSetXml
uses gw.sbt.artifacts.ratebooks.RateBookXml
uses gw.sbt.artifacts.ratebooks.RateTableDefinitionXml
uses gw.sbt.artifacts.ratebooks.RateTableXml
uses gw.sbt.loader.persistence.ComparisonDecisionSource
uses gw.sbt.model.SBTUpdate
uses gw.sbt.model.comparisons.Comparison
uses gw.sbt.model.comparisons.FactorRowComparison
uses gw.sbt.model.comparisons.RateTableComparison
uses gw.sbt.artifacts.ratebooks.DefaultRateFactorRowXml
uses gw.sbt.model.rating.FactorRowColumnAndValue
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.util.LoaderUtil
uses gw.sbt.util.XmlUtil
uses gw.sbt.util.Formatter
uses org.apache.commons.lang3.reflect.FieldUtils

//Common ratebook CRUD operations, used by ratebook load/merging
class RateBookHelper {

  public static final var PCA_MERGED_CW_RATEBOOK_SUFFIX: String = "-PCA.xml"
  public static final var PCA_MERGED_PUBLIC_ID_PREFIX: String = "pcamerged:"

  //add a table definition into ratebook if not presented
  static function addTableDefinition(rateTableDefinition: RateTableDefinitionXml, ratebookXml: RateBookXml) {
    var existed = ratebookXml.AllTableDefinitions.hasMatch(\tableDef -> tableDef.TableCode == rateTableDefinition.TableCode)
    if (not existed) {
      ratebookXml.AllTableDefinitions.add(rateTableDefinition)
      ratebookXml.Xml.addChild(rateTableDefinition.Xml)
    }
  }

  //add calcroutine parameter set into ratebook if not presented
  static function addCalcRoutineParameterSet(calcRoutineParameterSetList: List<CalcRoutineParameterSetXml>, ratebookXml: RateBookXml) {
    calcRoutineParameterSetList.each(\calcRoutineParameterSet -> {
      var existed = ratebookXml.AllCalcRoutineParameterSets.hasMatch(\existedCalcRoutineParameterSet -> existedCalcRoutineParameterSet.Code==calcRoutineParameterSet.Code)
      if(not existed){
        ratebookXml.AllCalcRoutineParameterSets.add(calcRoutineParameterSet)
        ratebookXml.Xml.addChild(calcRoutineParameterSet.Xml)
      }
    })
  }

  //add a table into ratebook if not presented
  static function addTable(rateTableXml: RateTableXml, ratebookXml: RateBookXml) {
    var existed = ratebookXml.AllTables.hasMatch(\table -> table.PublicId == rateTableXml.PublicId)
    if (not existed) {
      rateTableXml.RateBookPublicId = ratebookXml.PublicId  // assign the book publicId to this table.
      ratebookXml.AllTables.add(rateTableXml)
      ratebookXml.RateTableListXml.addChild(rateTableXml.Xml)
    }
  }

  //add factor rows into ratebook
  static function addFactorRows(factorRowXmls: List<DefaultRateFactorRowXml>, ratebookXml: RateBookXml) {
    factorRowXmls.each(\row -> {
      ratebookXml.Xml.addChild(row.Xml)
    })
    ratebookXml.AllRateFactorRows.addAll(factorRowXmls)
  }

  static function isCustomerAddedFactorRow(factorRowComparison : FactorRowComparison): boolean {
    return factorRowComparison.Current != null and factorRowComparison.New == null and factorRowComparison.Adopted == null
  }

  //create a factor row from scratch, it is only used when adding a customer added factor row
  static function createCustomerAddedFactorRow(rateTableComparison : RateTableComparison, factorRowComparison : FactorRowComparison, rateBookNamespace : String) : DefaultRateFactorRowXml {
    var paramColumnsAndValues = factorRowComparison.CanonicalVersion.ParameterColumnsAndValues
    var factorColumn = rateTableComparison.CanonicalVersion.FactorPhysicalColumnName
    var factorValue = factorRowComparison.Current.Rate

    var xmlStr = "<DefaultRateFactorRow><RateTable/></DefaultRateFactorRow>"
    var row = new DefaultRateFactorRowXml(XmlUtil.createXmlElementWithInheritedNamespace(xmlStr, rateBookNamespace))
    // generate factor publicId
    row.PublicId = PCA_MERGED_PUBLIC_ID_PREFIX + LoaderUtil.generatePublicId()
    // assign factor's ratetable publicId to be the ratetable in new book
    // if the ratetable in new book is null, mean it is an ISO removal case, use the publicId from adopted.
    row.RateTablePublicId = (rateTableComparison.New?:rateTableComparison.Adopted).PublicId
    row.Xml.addChild(XmlUtil.createXmlElementWithInheritedNamespace("<" + factorColumn + "/>", rateBookNamespace))
    row.setElementValue(factorColumn, factorValue)
    paramColumnsAndValues.each(\columnAndValue -> {
      row.Xml.addChild(XmlUtil.createXmlElementWithInheritedNamespace("<" + columnAndValue.Column + "/>", rateBookNamespace))
      row.setElementValue(columnAndValue.Column, columnAndValue.Value)
    })
    return row
  }

  static function setRatebookStatus(rateBookXml:RateBookXml, adoptionDate: Date) {
    rateBookXml.EffectiveDate = adoptionDate
    rateBookXml.RenewalEffectiveDate = adoptionDate
    rateBookXml.Status = typekey.RateBookStatus.TC_STAGE
  }

  static function generatePCAMergedRatebookFileName(fileName:String) : String {
    return fileName.replaceAll(".xml", PCA_MERGED_CW_RATEBOOK_SUFFIX)
  }

  static function isStateTable(rateTableComparison: RateTableComparison) : boolean {
    //Current ratetable is read from DB using PC API.
    //which collapses the referenced ratetables (ie CountryWide) into a single consolidate view.
    //all ratetables will be marked as 'Jurisdiction' owned, even these might be from referred versions (ie CountryWide version)
    //so: the isStateTable need to get from New or Adopted version, instead of from Current.
    //note: not overriding the CanonicalVersion because it might affect other functions
    if (rateTableComparison.New != null) {
      return rateTableComparison.New.OwningRateBook.Jurisdiction.HasContent
    } else if (rateTableComparison.Adopted != null) {
      return rateTableComparison.Adopted.OwningRateBook.Jurisdiction.HasContent
    } else {
      return rateTableComparison.Current.OwningRateBook.Jurisdiction.HasContent
    }
  }

  static function getFactorRowColumnAndValue(cell : RateTableCell) : FactorRowColumnAndValue {
    //using java reflection to get the cell value and column name.
    //because for Decimal type, 'cell.Value' rounds to keep certain scale, which might lose precision.
    //the '_cellValue' field in RateTableCell is protected, and there is no getter method exposed.
    //here we have to use reflection to access this field directly.
    //and it is intentionally not to catch any exception (ie, NoSuchFieldError)
    //in order to get immediate atttention in PCA if any back-incompatible change happens in PC.
    var cellField = FieldUtils.getField(cell.getClass(), "_cellValue", true)
    cellField.setAccessible(true)
    var value = cellField.get(cell)
    var factorRowValue = Formatter.formatRateFactorValue(value as String)

    cellField = FieldUtils.getField(cell.getClass(), "_physicalColumnName", true)
    cellField.setAccessible(true)
    var column = cellField.get(cell)
    var factorRowColumn = column as String

    return new FactorRowColumnAndValue(factorRowColumn, factorRowValue)
  }

  static function createRateTableComparison(tableCode: String, sbtUpdate : SBTUpdate,
                                            newRateBook: RateBookContent, currentRateBookConent: RateBookContent, adoptedRateBook: RateBookContent)
      : RateTableComparison {
    var newRateTable = newRateBook.RateTables.firstWhere(\rateTable -> rateTable.TableCode == tableCode)
    if (newRateTable == null) {  // try to read from referencedbook
      newRateTable = newRateBook.ReferencedBook.RateTables?.firstWhere(\rateTable -> rateTable.TableCode == tableCode)
    }
    if (newRateTable.IsReferencedRateTable) {
      newRateTable = newRateTable.OwningRateBook.getReferencedTable(newRateTable.ReferenceTablePublicId)
    }

    var adoptedRateTable = adoptedRateBook.RateTables.firstWhere(\rateTable -> rateTable.TableCode == tableCode)
    if (adoptedRateTable == null) {  // try to read from referencedbook
      adoptedRateTable = adoptedRateBook.ReferencedBook.RateTables?.firstWhere(\rateTable -> rateTable.TableCode == tableCode)
    }
    if (adoptedRateTable.IsReferencedRateTable) {
      adoptedRateTable = adoptedRateTable.OwningRateBook.getReferencedTable(adoptedRateTable.ReferenceTablePublicId)
    }

    //Current ratetable is read from DB using PC API.
    //which collapses the referenced ratetables (ie CountryWide) into a single consolidate view.
    //it is not necessary to refer to other ratetable.
    var currentRateTable = currentRateBookConent.RateTables?.firstWhere(\rateTable -> rateTable.TableCode == tableCode)

    return Comparison.forRateTable(currentRateTable, newRateTable, adoptedRateTable, ComparisonDecisionSource.create(sbtUpdate))
  }

}