package gw.sbt.loader

uses gw.entity.IColumnPropertyInfo
uses gw.lang.reflect.TypeSystem
uses gw.sbt.artifacts.clauses.PolicyClausePattern
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.artifacts.entities.EntityColumn
uses gw.sbt.artifacts.entities.EntityExtension
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.config.current.CurrentConfigContents
uses org.slf4j.LoggerFactory

uses java.util.regex.Pattern

class EntityColumnHelper extends EntityElementHelper<EntityColumn> {

  private static var COLUMN_NAME_PATTERN = Pattern.compile("^([A-Za-z]*)([0-9]*)$")

  private static var COLUMN_PREFIX_TO_COLUMN_TYPE_MAP = {
      "BooleanTerm"->"bit",
      "ChoiceTerm"->"patterncode",
      "DateTerm"->"datetime",
      "DirectTerm"->"decimal",
      "StringTerm"->"shorttext"
  }

  public static var TYPE_TO_SIZEATTRIBUTE_MAP : Map<String, List<String>> = {
      "varchar" -> {"size"},
      "decimal" -> {"precision", "scale"}
  }

  static function isColumnUsed(column : String, clausePattern : PolicyClausePattern) : boolean {
    return clausePattern.CovTerms.hasMatch(\covTerm -> covTerm.CoverageColumn == column)
  }

  static function nextAvailableColumn(incomingColumn : String, currentClausePattern : PolicyClausePattern) : AvailableColumnResult {
    var clauseSubType = currentClausePattern.ClauseSubType

    // Create a matcher to separate different parts of the column name
    var matcher = COLUMN_NAME_PATTERN.matcher(incomingColumn)
    var columnPrefix = columnPrefix(incomingColumn)
    var currentColumnPattern = Pattern.compile("^(" + columnPrefix + ")([0-9]*)$")
    var currentClausePatternCoverageColumns = currentClausePattern.CovTerms
        .where(\covTerm -> covTerm.CoverageColumn.HasContent)
        .map(\covTerm -> covTerm.CoverageColumn)
        .where(\column -> column.startsWith(columnPrefix))

    // Find columns in the existing entity with the same data type (e.g. boolean term)
    var columns = getEntityTermColumnNames(clauseSubType)
        .where(\ column -> currentColumnPattern.matcher(column).find())
        .sort(\ col1, col2 -> col1.replace(columnPrefix, "").toInt() < col2.replace(columnPrefix, "").toInt())

    // Find and return any available column name from the existing entity, if any
    var availableColumnName = columns.firstWhere(\column -> not isColumnUsed(column, currentClausePattern))
    if (availableColumnName != null) {
      return new AvailableColumnResult() {:Name = availableColumnName, :Available = true}
    }

    // Determine the next available column number to use - this is derived from the very last column name from the
    // columns with the same data type in the existing entity, and the current clause pattern - in case any new columns
    // were just added.
    var coverageColNumIncrement = 1
    var startCoverageColNum = 0
    if (columns.HasElements) {
      matcher = currentColumnPattern.matcher(columns.last())
      if (matcher.find()) {
        startCoverageColNum = matcher.group(2).toInt()
      }
    }

    availableColumnName = columnPrefix + (startCoverageColNum + coverageColNumIncrement)
    while (currentClausePatternCoverageColumns.contains(availableColumnName)) {
      coverageColNumIncrement++
      availableColumnName = columnPrefix + (startCoverageColNum + coverageColNumIncrement)
    }

    return new AvailableColumnResult() {:Name = availableColumnName, :Available = false}
  }

  static function columnPrefix(columnName : String) : String {
    var matcher = COLUMN_NAME_PATTERN.matcher(columnName)

    if (matcher.find()) {
      return matcher.group(1)
    } else {
      throw "incoming column name does not conform to expected format: ${columnName}"
    }
  }

  static function deriveClauseColumnType(columnName : String) : String {
    return COLUMN_PREFIX_TO_COLUMN_TYPE_MAP.get(columnPrefix(columnName))
  }

  static function deriveGenericColumnType(columnName : String) : String {
    if (columnName.startsWith("String") or columnName.startsWith("Option")) {
      return "shorttext"
    } else if (columnName.startsWith("Int")) {
      return "integer"
    } else if (columnName.startsWith("PosInt")) {
      return "positiveinteger"
    } else if (columnName.startsWith("NonNegative")) {
      return "nonnegativeinteger"
    } else if (columnName.startsWith("Date")) {
      return "dateonly"
    } else if (columnName.startsWith("TypeKey")) {
      return "patterncode"
    } else if (columnName.startsWith("Bool")) {
      return "bit"
    } else if (columnName.startsWith("Decimal")) {
      return "decimal"
    } else if (columnName.startsWith("LongStringCol")) {
      return "longtext"
    } else {
      throw "Unable to derive column type for ${columnName}"
    }
  }

  public static function getEntityTermColumnNames(entityName : String) : List<String> {
    if (entityName == null) {
      return {}
    }

    var foundEntity = getEntity(entityName)
    var matchingColumns : List<String> = {}
    if (foundEntity != null) {
      matchingColumns.addAll(foundEntity.Columns
          .map(\column -> column.Name)
          .where(\columnName -> columnName.contains("Term") and not columnName.contains("Avl")))
    }

    try {
      TypeSystem.getByFullName("entity." + entityName).TypeInfo.Properties
          .whereTypeIs(IColumnPropertyInfo)
          .map(\prop -> prop.Name)
          .where(\propName -> propName.contains("Term") and not propName.contains("Avl"))
          .each(\columnName -> {
            if (not matchingColumns.contains(columnName)) {
              matchingColumns.add(columnName)
            }
          })
    } catch(e : Throwable) {
      LoggerFactory.getLogger("PCA").warn("Cannot query for entity." + entityName + " via TypeSystem")
    }

    return matchingColumns
  }

  public static function getColumnsFromEntityExt(clauseEntity : Entity,
                                                 clauseEntityExtension : EntityExtension,
                                                 includedColumnsFromTypeSystem: boolean) : Set<String> {
    var columnsContained = clauseEntity.Columns*.Name.toSet()
    if (clauseEntityExtension != null) {
      columnsContained.addAll(clauseEntityExtension.Columns*.Name.toSet())
    }
    if (includedColumnsFromTypeSystem) {
      // Add additional columns from inherited parent entity columns
      columnsContained.addAll(getEntityTermColumnNames(clauseEntity.EntityName))
    }
    return columnsContained
  }

  public static function deriveRootEntityExt(currentClauseEntity : Entity, currentContents : CurrentConfigContents) : Entity {
    var currentClauseRootEntityExt : EntityExtension = null

    if (currentClauseEntity != null) {
      var superType = currentClauseEntity.SuperType
      while (superType != null) {
        currentClauseRootEntityExt = currentContents.getEntityExtension(superType)

        // Should get next super type from the entity
        currentClauseEntity = currentContents.getEntity(superType)
        superType = currentClauseEntity != null ? currentClauseEntity.SuperType : null
      }
    }

    return currentClauseRootEntityExt == null ? currentClauseEntity : currentClauseRootEntityExt
  }

  private static function getEntity(entityName : String) : Entity {
    var configFile = ConfigurationFile.entity(entityName + ".eti", SBTUpdateLoader.LoaderWideConfig)
    if (not SBTUpdateLoader.LoaderWideConfig.exists(configFile)) {
      return null
    }
    return new Entity(SBTUpdateLoader.LoaderWideConfig.contents(configFile))
  }

  static class AvailableColumnResult {
    var _available : boolean as Available
    var _name : String as Name
  }

  //comparison outcome for entities
  public enum ColumnComparisonOutCome {NEW_COLUMNS, WIDER_COLUMNS, EQUIV_COLUMNS}

  //comparison outcome for columns (only consider column type and size now)
  public enum ColumnSizeComparisonOutCome {DIFFERENT_COLUMN_TYPE, SAME_COLUMN_SIZE, WIDER_COLUMN_SIZE, SMALLER_COLUMN_SIZE}

  //check the column existence and size for each column in incoming extension
  static function containsAllColumnsWithRightSizeInEntity(incomingEntity : Entity, currentEntity : Entity) : ColumnComparisonOutCome {
    var columnsInCurrent = currentEntity.Columns
    var columnsInIncoming = incomingEntity.Columns
    //column number matching
    if (columnsInIncoming.size() > columnsInCurrent.size()) {
      return NEW_COLUMNS
    }
    //column name matching
    var currentColumnNames = columnsInCurrent*.Name.toList()
    var incomingColumnNames = columnsInIncoming*.Name.toList()
    if (not currentColumnNames.containsAll(incomingColumnNames)) {
      return NEW_COLUMNS
    }
    //column size matching
    var sizeMatched = true
    columnsInIncoming.each(\column -> {
      if (sizeMatched and TYPE_TO_SIZEATTRIBUTE_MAP.containsKey(column.Type)) {
        var currentColumn = columnsInCurrent.firstWhere(\columnInCurrent -> column.Name == columnInCurrent.Name)
        var columnCompareOutcome = EntityColumnHelper.compareColumnSizes(column, currentColumn)
        if (columnCompareOutcome == ColumnSizeComparisonOutCome.WIDER_COLUMN_SIZE) {
          sizeMatched = false
        } else if(columnCompareOutcome == ColumnSizeComparisonOutCome.DIFFERENT_COLUMN_TYPE) {
          //TODO:  we need to report it!
        }
      }
    }
    )
    if (sizeMatched) {
      return EQUIV_COLUMNS
    } else {
      return WIDER_COLUMNS
    }
  }

  //currently only compare varchar/decimal type
  static function compareColumnSizes(sourceColumn : EntityColumn, targetColumn : EntityColumn): ColumnSizeComparisonOutCome {
    // if column type is different, return 'DIFFERENT_COLUMN_TYPE'
    if (sourceColumn.Type != targetColumn.Type) {
      return ColumnSizeComparisonOutCome.DIFFERENT_COLUMN_TYPE
    }
    // if not varchar or decimal, return 'SAME_COLUMN_SIZE'
    if(not TYPE_TO_SIZEATTRIBUTE_MAP.containsKey(sourceColumn.Type)) {
      return ColumnSizeComparisonOutCome.SAME_COLUMN_SIZE
    }

    var sizeAttributes = TYPE_TO_SIZEATTRIBUTE_MAP.get(sourceColumn.Type)
    var sizeIncreased = sizeAttributes.hasMatch(\ attr ->
        getColumnSizeCompareOutcome(sourceColumn, targetColumn, attr) == ColumnSizeComparisonOutCome.WIDER_COLUMN_SIZE)
    if (sizeIncreased) {
      return ColumnSizeComparisonOutCome.WIDER_COLUMN_SIZE
    } else {
      return ColumnSizeComparisonOutCome.SAME_COLUMN_SIZE
    }
  }

  static function compareColumnIgnoringSizes(sourceColumn : EntityColumn, targetColumn : EntityColumn): boolean {
    var isEquivColumns= sourceColumn.Name == targetColumn.Name and sourceColumn.Type == targetColumn.Type

    if (isEquivColumns) {
      var sourceSizingParamNames= TYPE_TO_SIZEATTRIBUTE_MAP.getOrDefault (sourceColumn.Type, {})
      var targetSizingParamNames= TYPE_TO_SIZEATTRIBUTE_MAP.getOrDefault (targetColumn.Type, {})

      var sourceNonSizingParams= sourceColumn.ColumnParams.where (\param -> not sourceSizingParamNames.contains (param.Name))
      var targetNonSizingParams= targetColumn.ColumnParams.where (\param -> not targetSizingParamNames.contains (param.Name))

      isEquivColumns=  sourceNonSizingParams.size() == targetNonSizingParams.size ()

      // check that target column does not contain any addtional parameter that are not in source column
      if (isEquivColumns) {
        foreach (tparam in targetNonSizingParams) {
          if (not sourceNonSizingParams.hasMatch (\ sparam -> sparam.Name == tparam.Name and sparam.Value == tparam.Value)) {
            isEquivColumns= false
            break
          }
        }
      }
    }

    return isEquivColumns
  }

  private static function getColumnSizeCompareOutcome(sourceColumn : EntityColumn, targetColumn : EntityColumn, sizeAttribute: String) : ColumnSizeComparisonOutCome {
    var columnParamSource = sourceColumn.ColumnParams?.firstWhere(\ param -> param.Name == sizeAttribute)
    var columnParamTarget = targetColumn.ColumnParams?.firstWhere(\ param -> param.Name == sizeAttribute)
    if (columnParamSource == null) {
      return ColumnSizeComparisonOutCome.SAME_COLUMN_SIZE
    } else if (columnParamTarget == null) {
      return ColumnSizeComparisonOutCome.WIDER_COLUMN_SIZE
    }

    var sizeInSource = getColumnSizeFromParamValue(columnParamSource.Value)
    var sizeInTarget = getColumnSizeFromParamValue(columnParamTarget.Value)
    if (sizeInSource > sizeInTarget) {
      return ColumnSizeComparisonOutCome.WIDER_COLUMN_SIZE
    } else if (sizeInSource < sizeInTarget) {
      return ColumnSizeComparisonOutCome.SMALLER_COLUMN_SIZE
    } else {
      return ColumnSizeComparisonOutCome.SAME_COLUMN_SIZE
    }
  }

  //get the size from param value, expecting an integer in paramvalue, if not, log as warning and return size as 0.
  private static function getColumnSizeFromParamValue(paramValue : String) : int {
    if (paramValue == null or paramValue.length() == 0) {
      return 0
    } else {
      try {
        return Integer.parseInt(paramValue)
      } catch (ex : NumberFormatException) {
        LoggerFactory.getLogger("PCA").warn("expecting an Integer for a columnParam value, but got ${paramValue} instead")
        return 0
      }
    }
  }

  //add columns which are only existed in source entity into target entity.
  static function addMissingColumnsFromSource(sourceEntity : Entity, targetEntity : Entity ) {
    var columnNames = targetEntity.Columns*.Name
    sourceEntity.Columns.where(\column -> not columnNames.contains(column.Name))
        .each(\column -> targetEntity.addColumn(column))
  }

  //increase column size for target entity if column in source entity has bigger size than the target column.
  static function increaseColumnSizeInTarget(sourceEntity : Entity, targetEntity : Entity) : boolean {
    var isUpdated = false

    targetEntity.Columns.each(\column -> {
      if (EntityColumnHelper.increaseTargetColumnSizeToMax(sourceEntity.getColumn(column.Name), column)) {
        isUpdated = true
      }
    } )

    return isUpdated
  }

  static function increaseTargetColumnSizeToMax(sourceColumn : EntityColumn, targetColumn : EntityColumn) : boolean {
    var updated = false
    if (sourceColumn != null and EntityColumnHelper.compareColumnSizes(sourceColumn, targetColumn) == ColumnSizeComparisonOutCome.WIDER_COLUMN_SIZE) {
      expandColumnSize(sourceColumn, targetColumn)
      updated = true
    }
    return updated
  }

  private static function expandColumnSize(source: EntityColumn, target: EntityColumn) {
    var columnType = source.Type
    if(not TYPE_TO_SIZEATTRIBUTE_MAP.containsKey(columnType)) { // only handle varchar and decimal
      return
    }
    var sizeAttributes = TYPE_TO_SIZEATTRIBUTE_MAP.get(source.Type)
    var columnParamsSource = source.ColumnParams
    var columnParamsTarget = target.ColumnParams
    var adjustPrecisionForIncreasedScale = false
    var addToPrecisionForIncreasedScale = 0

    sizeAttributes.each(\ attr -> {
      var columnParamSource = columnParamsSource?.firstWhere(\ param -> param.Name == attr)
      var columnParamTarget = columnParamsTarget?.firstWhere(\ param -> param.Name == attr)
      if (columnParamSource != null) { // if source is null, won't change target.
        if (columnParamTarget == null) { // if target is null, copy over the source.
          target.addColumnParam(columnParamSource)
        } else { //exists in source and tat rget, expanding.
          var columnSizeInSource = getColumnSizeFromParamValue(columnParamSource.Value)
          var columnSizeInTarget = getColumnSizeFromParamValue(columnParamTarget.Value)
          if (columnSizeInSource > columnSizeInTarget) {
            if (attr == "scale") {
              addToPrecisionForIncreasedScale = columnParamSource.Value.toInt() - columnParamTarget.Value.toInt()
            }
            columnParamTarget.Value = columnParamSource.Value
          } else if ((columnSizeInSource <= columnSizeInTarget) and attr == "precision") {
            adjustPrecisionForIncreasedScale = true
          }
        }
      }
    })
    if (adjustPrecisionForIncreasedScale) {
      var columnParamPrecisionTarget = columnParamsTarget?.firstWhere(\param -> param.Name == "precision")
      columnParamPrecisionTarget.Value = Integer.toString(columnParamPrecisionTarget.Value.toInt() + addToPrecisionForIncreasedScale)
    }
  }

}