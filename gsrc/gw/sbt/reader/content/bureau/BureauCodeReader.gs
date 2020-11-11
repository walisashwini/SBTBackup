package gw.sbt.reader.content.bureau

uses gw.sbt.artifacts.systables.SystemTable
uses gw.sbt.artifacts.systables.SystemTableColumn
uses gw.sbt.artifacts.systables.SystemTableRow
uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.config.ConfigContents
uses gw.sbt.extractor.SBTUpdateExtractor
uses gw.sbt.model.Intent
uses gw.sbt.model.SystemTableKeyValueId
uses gw.sbt.model.bureau.BureauCode
uses gw.sbt.model.bureau.BureauCodeAttribute
uses gw.sbt.model.bureau.BureauCodeMinMaxAttribute
uses gw.sbt.model.bureau.BureauCodes
uses gw.sbt.model.bureau.StateUpdateBureauCode
uses gw.sbt.util.LoaderUtil
uses gw.sbt.loader.SystemTableHelper

uses java.util.Map
uses java.util.List

class BureauCodeReader {

  //read from packages (new and adopted packages)
  function readFromUpdate(updateContents : ConfigContents, jurisdiction : String, lineCode : String, adoptionDate : Date) : List<BureauCodes> {
    return readAll(updateContents, jurisdiction, lineCode, adoptionDate, null)
  }

  //read from current configuration
  function readFromCurrent(currentContents : ConfigContents, jurisdiction : String, lineCode : String, adoptionDate : Date, systemTablesToBeRead: Set<String>) : List<BureauCodes> {
    return readAll(currentContents, jurisdiction, lineCode, adoptionDate, systemTablesToBeRead)
  }

  private function readAll(contents : ConfigContents, jurisdiction : String, lineCode : String, adoptionDate : Date, systemTablesToBeRead: Set<String>) : List<BureauCodes> {
    var bureauCodesList = readAllBureauCodes(contents, jurisdiction, lineCode, adoptionDate, systemTablesToBeRead)

    // only reads System Tables on StateUpdate
    if(SBTUpdateExtractor.isStateUpdateFlow(adoptionDate)) {
      bureauCodesList.addAll(readAllSystemTablesExceptBureauCodes(contents, jurisdiction, lineCode, adoptionDate, systemTablesToBeRead))
    }

    return bureauCodesList
  }

  private function readAllBureauCodes(updateContents : ConfigContents, jurisdiction : String, lineCode : String, adoptionDate : Date, systemTablesToBeRead : Set<String>) : List<BureauCodes> {
    var bureauCodesList : List<BureauCodes> = {}

    var fileDefinitions = updateContents.getBureauCodeFileDefinitions(lineCode)

    if (fileDefinitions != null) {
      fileDefinitions.each(\fileDefinition -> {
        var bureauCodesRead = read(fileDefinition.FileName, fileDefinition.Label, updateContents,
            updateContents.getBureauCodes(fileDefinition.FileNameWithExtension),
            jurisdiction, lineCode, adoptionDate, systemTablesToBeRead)

        if (bureauCodesRead != null) {
          bureauCodesRead.IsBureauCode = true
          bureauCodesList.add(bureauCodesRead)
        }
      })
    }

    return bureauCodesList
  }

  private function readAllSystemTablesExceptBureauCodes(updateContents : ConfigContents, jurisdiction : String, lineCode : String, adoptionDate : Date, systemTablesTobeRead : Set<String>) : List<BureauCodes> {
    var systemTablesList : List<BureauCodes> = {}
    var bureauCodeFileDefinitions = updateContents.getBureauCodeFileDefinitions(lineCode)

    var bureauCodeFileNames = bureauCodeFileDefinitions*.FileNameWithExtension.toSet()
    if (bureauCodeFileNames != null and updateContents.SystemTableRegistry != null) {
      var systemTableFileNames = updateContents.SystemTableRegistry.AllSystemTableFileNames.subtract(bureauCodeFileNames)
      systemTableFileNames = systemTableFileNames.subtract(SystemTableHelper.ExcludedSystemTableFileNames)
      if (systemTableFileNames != null) {
        systemTableFileNames.each(\systemTableFileName -> {
          var systemTableFileNameWithoutExtension = systemTableFileName.substring(0, systemTableFileName.lastIndexOf('.'))
          var systemTablesRead = read(systemTableFileNameWithoutExtension, null, updateContents,
              updateContents.getBureauCodes(systemTableFileName),
              jurisdiction, lineCode, adoptionDate, systemTablesTobeRead)

          if (systemTablesRead != null) {
            systemTablesRead.IsBureauCode = false
            systemTablesList.add(systemTablesRead)
          }
        })
      }
    }

    return systemTablesList
  }

  private function read(bureauCodeFileName : String, label : String, updateContents : ConfigContents, systemTable : SystemTable,
                jurisdiction : String, lineCode : String, adoptionDate : Date, systemTablesToBeRead: Set<String>) : BureauCodes {
    if (systemTablesToBeRead != null and not systemTablesToBeRead.contains(bureauCodeFileName)) {
      // it is not necessary to read this system table if only exists in Current
      return null
    }
    if ( systemTable == null or systemTable.AllRows.Empty) {
      // it is not necessary to continue if this system table is null or empty
      return null
    }

    var columns = systemTable.getAllColumns()
    var columnToTypeListMap = createColumnToTypeListLookup(systemTable, columns, updateContents)

    var stateAddBureauCodes : List<BureauCode> = {}
    var stateUpdateBureauCodes : List<StateUpdateBureauCode> = {}

    var bureauCodeKeyValueId : SystemTableKeyValueId = null
    if (not SBTUpdateExtractor.isStateUpdateFlow(adoptionDate)) { // State-Add
      bureauCodeKeyValueId = updateContents.ValueDependencyConfig?.getSystemTableKeyValueId(systemTable.TableName, jurisdiction, adoptionDate)
      var stateRows = systemTable.getRows(jurisdiction, lineCode, false)
      if (stateRows.Empty) {
        return null
      }
      stateAddBureauCodes.addAll(stateRows.map(\stateRow -> new BureauCode() {
        :Intent = STATE_ADD,
        :Attributes = parseValues(stateRow, columnToTypeListMap, columns)
      }))
    } else { // State-Update
      bureauCodeKeyValueId = SystemTableHelper.getSystemTableKeyValueId(lineCode, systemTable, jurisdiction)
      // if "bureauCodeKeyValueId" is null, it means the table should be explicitly ignored
      // it only happens when processing WCLine.
      if (bureauCodeKeyValueId != null) {
        stateUpdateBureauCodes.addAll(
            createStateUpdateBureauCodes(systemTable.getRows(jurisdiction, lineCode, true), columnToTypeListMap, columns, bureauCodeKeyValueId)
        )
      } else {
        return null
      }
    }

    var bureauCodes = new BureauCodes() {
      :FileName = bureauCodeFileName,
      :Label = label,
      :TableName = systemTable.TableName,
      :Intent = Intent.STATE_MODIFIED,
      :Jurisdiction = jurisdiction,
      :Codes = stateAddBureauCodes,
      :StateUpdateBureauCodes = stateUpdateBureauCodes,
      :BureauCodeKeyValueId = bureauCodeKeyValueId
    }

    return bureauCodes
  }

  private function createStateUpdateBureauCodes(rows : List<SystemTableRow>,
                                                columnToTypeListMap : Map<SystemTableColumn, List<TypeList>>,
                                                columns : List<SystemTableColumn>,
                                                bureauCodeKeyValueId : SystemTableKeyValueId) : List<StateUpdateBureauCode> {
    return rows.map(\row -> {
      var attributes = parseValues(row, columnToTypeListMap, columns)

      var keys = attributes.where(\attribute -> bureauCodeKeyValueId.KeyColumns.contains(attribute.Name)).toSet()
      var value = attributes.firstWhere(\attribute -> bureauCodeKeyValueId.ValueColumn == attribute.Name)

      if (value == null) { // create an empty Value attribute for No-Value-System table row
        value = BureauCodeAttribute.EmptyBureauCodeAttribute
      }

      return new StateUpdateBureauCode() {
        :CW = LoaderUtil.isJurisdictionCW(row.Jurisdiction),
        :EffectiveDate = row.EffectiveDate,
        :ExpirationDate = row.ExpirationDate,
        :Keys = keys,
        :Value = value
      }
    })
  }

  private function createColumnToTypeListLookup(systemTable : SystemTable, columns : List<SystemTableColumn>,
                                                contents : ConfigContents) : Map<SystemTableColumn, List<TypeList>> {
    var backingEntity = contents.getEntity(systemTable.TableName)
    return columns.mapToValue( \ column -> {
      var typeKey = backingEntity?.getTypeKey(column.Name)
      if (typeKey != null) {
        return {contents.getTypeList(typeKey.TypeList), contents.getTypeListExtension(typeKey.TypeList)}
      }
      return {}
    })
  }

  private function parseValues(row : SystemTableRow, columnToTypeListMap : Map<SystemTableColumn, List<TypeList>>,
                               columns : List<SystemTableColumn>) : List<BureauCodeAttribute> {
    var columnValues = columns.map( \ column -> {
      var value = row.getValue(column.Name)
      var displayName = value

      var typeLists = columnToTypeListMap.get(column)
      displayName = typeLists*.getTypeCode(value)*.Description.firstWhere( \ description -> description != null ) ?: value

      return new BureauCodeAttribute() {
        :Name = column.Name,
        :Value = value,
        :DisplayValue = displayName
      }
    })

    // Consolidate any MinValue and MaxValue rows
    var minValueAttribute = columnValues.firstWhere(\attribute -> attribute.Name == SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME)
    var maxValueAttribute = columnValues.firstWhere(\attribute -> attribute.Name == SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME)
    if(minValueAttribute != null or maxValueAttribute != null) {
      columnValues.removeWhere(\attribute ->
          attribute.Name == SystemTableKeyValueId.MIN_VALUE_COLUMN_NAME or attribute.Name == SystemTableKeyValueId.MAX_VALUE_COLUMN_NAME)

      columnValues.add(new BureauCodeMinMaxAttribute() {
        :Name = SystemTableKeyValueId.MIN_MAX_VALUE_COLUMN_NAME,
        :MinValue = minValueAttribute.Value,
        :MaxValue = maxValueAttribute.Value
      })
    }
    return columnValues
  }
}