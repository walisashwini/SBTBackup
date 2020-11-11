package gw.sbt.reader.content.rating.entity

uses gw.lang.enhancements.OrderedList
uses gw.rating.rtm.domain.RateTableFactorListController
uses gw.sbt.loader.RateBookHelper
uses gw.sbt.model.rating.FactorRow
uses gw.sbt.model.rating.FactorRowColumnAndValue
uses gw.sbt.model.rating.RateBookContent
uses gw.sbt.model.rating.RateTableContent
uses gw.sbt.model.rating.RateTableDefinitionParameter
uses gw.sbt.util.Formatter
uses gw.util.IOrderedList

class RateTableContentConverter {
  var _refBookEntity: RateBook
  var _refBookContent: RateBookContent

  var _rateBookEntity : RateBook

  function withReferencedRateBook(refBookEntity: RateBook, refBookContent: RateBookContent): RateTableContentConverter {
    _refBookEntity = refBookEntity
    _refBookContent = refBookContent
    return this
  }

  function withRateBook(rateBook : RateBook): RateTableContentConverter {
    _rateBookEntity = rateBook
    return this
  }

  function convert() : Collection<RateTableContent> {
    var rateTableEntities = _rateBookEntity.RateTables.toList()
    var stateTableContents = rateTableEntities.map(\ rateTableEntity ->  createRateTableContent(rateTableEntity, rateTableEntity.Definition))
    return stateTableContents.concat(UsedTableContentFromReferencedRateBook)
  }

  private function createRateTableContent(rateTableEntity:RateTable,
                                          rateTableDefinition : RateTableDefinition) : RateTableContent {
    var rateTablePublicId = rateTableEntity.PublicID
    var tableName = rateTableDefinition.TableName
    var tableCode = rateTableDefinition.TableCode

    var referenceTablePublicId = rateTableEntity.RefTable?.PublicID

    var parameterColumns = getParameterColumns(rateTableDefinition)
    var parameterDefinitions = getParameterDefinition(parameterColumns)

    var factorColumn = getFactorColumn(rateTableDefinition)
    var factorRows = getFactorRows(tableCode, rateTableEntity, factorColumn)

    return new RateTableContent() {
      :PublicId =  rateTablePublicId,
      :TableName = tableName,
      :TableCode = tableCode,
      :ParameterDefinitions = parameterDefinitions,
      :FactorName = factorColumn.Name,
      :FactorPhysicalColumnName = factorColumn.PhysicalColumn,
      :ReferenceTablePublicId =  referenceTablePublicId,
      :FactorRows = factorRows}
  }

  property get UsedTableContentFromReferencedRateBook() : List<RateTableContent> {
    if (not LookupsCascadeToReferencedBook) return {}

    var tableCodesDefinedInStateBook = getRateTableDefinitions(_rateBookEntity).map(\rateTableDefinition -> rateTableDefinition.TableCode)
    var tableCodesDefinedInCwBook = getRateTableDefinitions(_refBookEntity).map(\ rateTableDefinition -> rateTableDefinition.TableCode)
    //note:  table definition might exist both in CountryWide and State RateBooks.
    tableCodesDefinedInCwBook.retainWhere(\tableCode -> not tableCodesDefinedInStateBook.contains(tableCode))
    var rateTablesInRefBook = tableCodesDefinedInCwBook
        .map(\ tableCode -> _refBookContent.RateTables.firstWhere(\ table -> table.TableCode == tableCode))
        .where(\ rateTable -> rateTable != null)
        .map(\ rateTable -> rateTable.copy())
    rateTablesInRefBook.each(\ table -> { table.ReferenceTablePublicId = table.PublicId })
    return rateTablesInRefBook
  }

  private function getRateTableDefinitions(rateBook: RateBook) : List<RateTableDefinition> {
    return rateBook.RateTables.map(\ table -> table.Definition).toList()
  }

  private property get LookupsCascadeToReferencedBook() : boolean {
    return BookGroupMatchesReferencedBook and HasCascadedLookup
  }

  private property get BookGroupMatchesReferencedBook() : boolean {
    return _refBookEntity != null and _refBookEntity.BookGroup == BookGroup
  }

  private property get HasCascadedLookup() : boolean {
    return _rateBookEntity.CascadedLookup
  }

  private property get BookGroup() : String {
    return _rateBookEntity.BookGroup
  }

  private function getFactorRows(tableCode: String, rateTableEntity:RateTable, factorColumn : RateTableColumn) : List<FactorRow> {
    var controller = RateTableFactorListController.createDatabaseBasedController()
    var valueProviderFactory = new gw.rating.rtm.valueprovider.RateTableCellValueProviderFactory()
    controller.createModel(rateTableEntity, valueProviderFactory)
    controller.refresh()
    var resultFactorRows : List<FactorRow> = {}
    var factorTableRows = controller.RateTableModel.FactorRows
    factorTableRows.each(\factorRow -> {
      var resultFactorRow = new FactorRow() {
        :TableCode = tableCode,
        :ColumnType = factorColumn.ColumnType,
        :ParameterColumnsAndValues = new OrderedList<FactorRowColumnAndValue>(factorRow.Parameters.map(\param -> RateBookHelper.getFactorRowColumnAndValue(param))),
        :Rate = RateBookHelper.getFactorRowColumnAndValue(factorRow.Factors[0]).Value // assumption:  one factor value.
      }
      resultFactorRows.add(resultFactorRow)
    })
    return resultFactorRows
  }

  private function getFactorColumn(rateTableDefinition : RateTableDefinition) : RateTableColumn {
    var factorColumns = rateTableDefinition.Factors
    var factorColumn = factorColumns[0] // assumption:  only one 'RateTableColumn' under 'Factors'
    return new RateTableColumn() {
      :Name = factorColumn.ColumnName,
      :ColumnType = factorColumn.ColumnType.toString(),
      :SortOrder = factorColumn.SortOrder,
      :PhysicalColumn = factorColumn.PhysicalColumnName
    }
  }

  private function getParameterColumns(rateTableDefinition : RateTableDefinition) : List<RateTableColumn> {
    var paramColumns : List<RateTableColumn> = {}
    var matchOps = rateTableDefinition.MatchOps
    matchOps.each(\mathOp -> {
      mathOp.Params.each(\param-> {
        paramColumns.add(new RateTableColumn() {
          :Name = param.ColumnName,
          :ColumnType = param.ColumnType.toString(),
          :SortOrder = param.SortOrder,
          :PhysicalColumn = param.PhysicalColumnName
        })
      })
    })
    return paramColumns.sortBy(\rateTableCol -> rateTableCol.SortOrder)
  }

  private function getParameterDefinition(parameterColumns : Collection<RateTableColumn>) : IOrderedList<RateTableDefinitionParameter> {
    var parameterDefinitions = parameterColumns.map(\parameterColumn -> new RateTableDefinitionParameter() {
      :ColumnName = parameterColumn.Name,
      :PhysicalColumnName = parameterColumn.PhysicalColumn,
      :SortOrder = parameterColumn.SortOrder})
    .sortBy(\elt -> elt.SortOrder)
    return new OrderedList<RateTableDefinitionParameter>(parameterDefinitions)
  }

  private class RateTableColumn {
    var _name : String as Name
    var _type : String as ColumnType
    var _sortOrder : Integer as SortOrder
    var _physicalColumn : String as PhysicalColumn
  }

}