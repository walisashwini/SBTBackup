package gw.sbt.reader.content.rating.xml

uses gw.lang.enhancements.OrderedList
uses gw.sbt.model.rating.FactorRow
uses gw.sbt.model.rating.FactorRowColumnAndValue
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.model.rating.RateTableDefinitionParameter
uses gw.sbt.util.Formatter
uses gw.util.IOrderedList
uses gw.xml.XmlElement
uses javax.xml.namespace.QName
uses java.lang.Integer
uses java.util.Collection
uses java.util.HashSet
uses java.util.Set
uses java.util.regex.Pattern
uses java.util.List
uses gw.api.upgrade.Coercions

class RateTableContentReader {

  var _namespace : String
  var _xmlRoot : XmlElement
  var _refBook : RateBookContent

  construct(namespace : String, rateBookXml : XmlElement, refBook : RateBookContent) {
    _namespace = namespace
    _xmlRoot = rateBookXml
    _refBook = refBook
  }

  function read() : Collection<RateTableContent> {

    var rateTableDefinitionsByPublicId = RateTableDefinitions
        .mapToKeyAndValue(\ xmlDef -> xmlDef.getAttributeValue("public-id"), \ elt -> elt)

    var defaultRateFactorRowXmlByRateTablePublicId = DefaultRateFactorRows
        .partition(\ factorRowXml -> factorRowXml.getChild(qName("RateTable")).getAttributeValue("public-id"))
        .toAutoMap(\ k -> ({}) )

    var tableContentFromRateBook = RateTables.map(\ rateTableXml -> {
      var rateTablePublicId = rateTableXml.getAttributeValue("public-id")
      var tableFactorRowXmls = defaultRateFactorRowXmlByRateTablePublicId.get(rateTablePublicId)

      var definitionPublicId = rateTableXml.getChild(qName("Definition")).getAttributeValue("public-id")
      var rateTableDefinition = rateTableDefinitionsByPublicId.get(definitionPublicId)

      return createRateTableContent(rateTableXml, rateTableDefinition, tableFactorRowXmls)
    })

    return tableContentFromRateBook.concat(UsedTableContentFromReferencedRateBook)
  }

  property get UsedTableContentFromReferencedRateBook() : List<RateTableContent> {
    if (not LookupsCascadeToReferencedBook) return {}

    var tableCodesDefinedInStateBook = RateTableDefinitions.map(\ rateTableXml ->
        rateTableXml.getChild(qName("TableCode")).$Text)
    var cwTableCodes = TableCodesForRating.subtract(tableCodesDefinedInStateBook)

    var rateTablesInRefBook = cwTableCodes
        .map(\ tableCode -> _refBook.RateTables.firstWhere(\ table -> table.TableCode == tableCode))
        .where(\ rateTable -> rateTable != null)
        .map(\ rateTable -> rateTable.copy())
    rateTablesInRefBook.each(\ table -> { table.ReferenceTablePublicId = table.PublicId })

    return rateTablesInRefBook
  }
  
  property get TableCodesForRating() : Set<String> {
    var tableCodes = new HashSet<String>()
    var matcher = Pattern.compile("<TableCode>(.*?)</TableCode>").matcher(_xmlRoot.asUTFString())
    while (matcher.find()) {
      tableCodes.add(matcher.group(1))
    }

    return tableCodes
  }

  property get RateTableDefinitions() : List<XmlElement> {
    return _xmlRoot.getChildren(qName("RateTableDefinition"))
  }

  property get RateTables() : List<XmlElement> {
    return _xmlRoot
        .getChild(qName("RateBook"))
        .getChild(qName("RateTables"))
        .getChildren(qName("RateTable"))
  }

  property get DefaultRateFactorRows() : List<XmlElement> {
    return _xmlRoot.getChildren(qName("DefaultRateFactorRow"))
  }

  private property get LookupsCascadeToReferencedBook() : boolean {
    return BookGroupMatchesReferencedBook and HasCascadedLookup
  }

  private property get BookGroupMatchesReferencedBook() : boolean {
    return _refBook != null and _refBook.BookGroup == BookGroup
  }

  private property get HasCascadedLookup() : boolean {
    return Coercions.makePBooleanFrom(_xmlRoot
        .getChild(qName("RateBook"))
        .getChild(qName("CascadedLookup"))
        .$Text)
  }

  private property get BookGroup() : String {
    return _xmlRoot
        .getChild(qName("RateBook"))
        .getChild(qName("BookGroup"))
        .$Text
  }

  private function createRateTableContent(rateTableXml:XmlElement,
                                          rateTableDefinition : XmlElement,
                                          tableFactorRowXmls : List<XmlElement>) : RateTableContent {

    var rateTablePublicId = rateTableXml.getAttributeValue("public-id")
    var tableName = rateTableDefinition.getChild(qName("TableName")).$Text
    var tableCode = rateTableDefinition.getChild(qName("TableCode")).$Text

    var referenceTablePublicId = rateTableXml.getChild(qName("RefTable"))?.getAttributeValue("public-id")

    var parameterColumns = getParameterColumns(rateTableDefinition)
    var parameterDefinitions = getParameterDefinition(parameterColumns)

    var factorColumn = getFactorColumn(rateTableDefinition)
    var factorRows = getFactorRows(tableCode, tableFactorRowXmls, parameterColumns, factorColumn)

    return new RateTableContent() {
        :PublicId =  rateTablePublicId,
        :TableName = tableName,
        :TableCode = tableCode,
        :ParameterDefinitions = parameterDefinitions,
        :FactorName = factorColumn.Name,
        :FactorPhysicalColumnName = factorColumn.PhysicalColumn,
        :ReferenceTablePublicId =  referenceTablePublicId,
        :FactorRows = factorRows,
        :Intent = STATE_ADD}
  }

  private function getFactorRows(tableCode : String, tableFactorRowXmls : Collection<XmlElement>, parameterColumns : List<RateTableColumn>, factorColumn : RateTableColumn) : List<FactorRow> {
    var factorRows = tableFactorRowXmls.map(\factorRowXml -> {
      var parameterColumnsAndValues = parameterColumns*.PhysicalColumn.map(\columnName -> {
        var columnValue = Formatter.formatRateFactorValue(factorRowXml.getChild(qName(columnName)).$Text)
        return new FactorRowColumnAndValue(columnName,columnValue)
      })
      var rate = Formatter.formatRateFactorValue(factorRowXml.getChild(qName(factorColumn.PhysicalColumn)).$Text)
      var pid = factorRowXml.getAttributeValue("public-id")
      return new FactorRow() {
        :TableCode = tableCode,
        :ParameterColumnsAndValues = new OrderedList<FactorRowColumnAndValue>(parameterColumnsAndValues.toList()),
        :Rate = rate,
        :ColumnType = factorColumn.ColumnType,
        :PublicId = pid
      }
    })

    return factorRows
  }

  private function getParameterDefinition(parameterColumns : Collection<RateTableColumn>) : IOrderedList<RateTableDefinitionParameter> {
    var parameterDefinitions = parameterColumns.map(\ parameterColumn -> new RateTableDefinitionParameter() {
        :ColumnName = parameterColumn.Name,
        :PhysicalColumnName = parameterColumn.PhysicalColumn,
        :SortOrder = parameterColumn.SortOrder
    }).sortBy(\ elt -> elt.SortOrder)

    return new OrderedList<RateTableDefinitionParameter>(parameterDefinitions)
  }

  private function getFactorColumn(rateTableDefinitionXml : XmlElement) : RateTableColumn {
    var factorRowRateTableColumnXml = rateTableDefinitionXml
        .getChild(qName("Factors"))
        .getChildren(qName("RateTableColumn"))[0]  // assumption:  only one 'RateTableColumn' under 'Factors'

    return new RateTableColumn() {
      :Name = factorRowRateTableColumnXml.getChild(qName("ColumnName")).$Text.trim(),
      :ColumnType = factorRowRateTableColumnXml.getChild(qName("ColumnType")).$Text.trim(),
      :SortOrder = factorRowRateTableColumnXml.getChild(qName("SortOrder")).$Text.toInt(),
      :PhysicalColumn = factorRowRateTableColumnXml.getChild(qName("PhysicalColumnName")).$Text.trim()
    }
  }

  private function getParameterColumns(rateTableDefinitionXml : XmlElement) : List<RateTableColumn> {
    var paramColumns : List<RateTableColumn> = {}
    var rateTableParams = rateTableDefinitionXml
        .getChild(qName("MatchOps"))
        .getChildren(qName("RateTableMatchOp"))
        .map(\matchOpXml -> matchOpXml.getChild(qName("Params")))

    rateTableParams.each(\param -> {
      var columnXmls = param.getChildren(qName("RateTableColumn"))
      columnXmls.each(\columnXml -> {
        paramColumns.add(new RateTableColumn() {
          :Name = columnXml.getChild(qName("ColumnName")).$Text.trim(),
          :ColumnType = columnXml.getChild(qName("ColumnType")).$Text.trim(),
          :SortOrder = columnXml.getChild(qName("SortOrder")).$Text.toInt(),
          :PhysicalColumn = columnXml.getChild(qName("PhysicalColumnName")).$Text.trim()
        })
      })
    })
    return paramColumns.sortBy(\rateTableCol -> rateTableCol.SortOrder)
  }

  private function qName(elementName : String) : QName {
    return new QName(_namespace, elementName)  
  }


  private class RateTableColumn {
    var _name : String as Name
    var _type : String as ColumnType
    var _sortOrder : Integer as SortOrder
    var _physicalColumn : String as PhysicalColumn
  }

}