package gw.sbt.loader.stateadd

uses gw.sbt.config.current.CurrentConfigContents
uses java.util.HashMap
uses gw.sbt.artifacts.entities.Entity
uses gw.sbt.loader.EntityColumnHelper
uses gw.sbt.loader.Load
uses java.util.Map
uses gw.sbt.artifacts.schedules.Schedule
uses java.util.HashSet
uses gw.sbt.artifacts.schedules.ScheduleProperty
uses gw.sbt.loader.io.EntityAddition
uses gw.sbt.loader.io.schedule.ScheduleConfigReplacement
uses java.util.Set
uses java.util.ArrayList
uses gw.sbt.artifacts.schedules.ScheduleConfig
uses gw.sbt.artifacts.entities.EntityColumn
uses gw.lang.reflect.TypeSystem
uses gw.entity.IColumnPropertyInfo
uses gw.lang.reflect.IType
uses java.lang.Throwable
uses java.util.List
uses org.slf4j.LoggerFactory

class SchedulePropertyColumnConflictResolver {
  private static final var SCHEDULE_ITEM = "ScheduledItem"
  var _currentContents: CurrentConfigContents

  construct(config: CurrentConfigContents) {
    _currentContents = config
  }

  function generateLoads(jurisdiction: String): List<Load> {
    var resultLoads : List<Load> = {}
    var scheduleConfig = _currentContents.ScheduleConfig

    if(scheduleConfig != null) {
      // Detect and fix column name conflicts for each clause
      var columnsToAddFromAllSchedules = new HashMap<String, Set<String>>()
      scheduleConfig.AllSchedules.each( \ schedule -> {
        var columnsToAddForSchedule = fixSchedulePropertyColumnConflicts(schedule, jurisdiction)
        extractAllColumnsForSchedule(schedule, jurisdiction, columnsToAddForSchedule)

        columnsToAddForSchedule.keySet().each( \ entityToModify -> {
          var previousColumns = columnsToAddFromAllSchedules.get(entityToModify)
          if(previousColumns == null) {
            previousColumns = new HashSet<String>()
            columnsToAddFromAllSchedules.put(entityToModify, previousColumns)
          }
          previousColumns.addAll(columnsToAddForSchedule.get(entityToModify))
        })
      })

      // Generate load ops
      var load = new Load<ScheduleConfig>(scheduleConfig)
      load.add(new ScheduleConfigReplacement(_currentContents.ProductAbbreviation, scheduleConfig))
      resultLoads.add(load)

      if(not columnsToAddFromAllSchedules.Empty) {
        var entityLoad = createEntityLoad(scheduleConfig, columnsToAddFromAllSchedules)
        if (entityLoad.LoadOps.HasOps) {
          resultLoads.add(entityLoad)
        }
      }
    }
    return resultLoads
  }

  /**
   * Detect any column name conflicts within a Schedule.
   *
   * Return a entity-name to a Set of column-name mapping for those columns that are modified.
   */
  function fixSchedulePropertyColumnConflicts(schedule : Schedule, jurisdiction : String) : Map<String, Set<String>> {
    var fixedColumns = new HashMap<String, Set<String>>()
    var processedScheduleProperties = new ArrayList< ProcessedScheduleProperty >()

    schedule.Properties.each( \ scheduleProperty -> {
      // Adjust the column name with its sibling versions if possible
      if(scheduleProperty.IsVersioned) {
        adjustIncomingStateColumnNamesToExistingVersions(scheduleProperty, jurisdiction)
      }

      if((not scheduleProperty.IsVersioned) and scheduleProperty.ColumnName != null) {
        processScheduleProperty(scheduleProperty, processedScheduleProperties, fixedColumns, jurisdiction)
      } else {
        scheduleProperty.Versions
            .where( \ schedulePropertyVersion -> schedulePropertyVersion.ColumnName != null)
            .each( \ schedulePropertyVersion ->
              processScheduleProperty(schedulePropertyVersion, processedScheduleProperties, fixedColumns, jurisdiction))
      }
    })

    return fixedColumns
  }

  private function extractAllColumnsForSchedule(schedule : Schedule, jurisdiction : String, resultColumns : Map<String, Set<String>>) {
    schedule.Properties.each( \ scheduleProperty -> {
      if(scheduleProperty.IsVersioned) {
        scheduleProperty.Versions.each( \ version -> extractAllColumnsForScheduleProperty(version, jurisdiction, resultColumns))
      } else {
        extractAllColumnsForScheduleProperty(scheduleProperty, jurisdiction, resultColumns)
      }
    })
  }

  private function extractAllColumnsForScheduleProperty(scheduleProperty : ScheduleProperty, jurisdiction : String, resultColumns : Map<String, Set<String>>) {
    if(not scheduleProperty.ScheduledItemType.Empty and scheduleProperty.Jurisdiction == jurisdiction) {
      addToColumns(scheduleProperty.ScheduledItemType, scheduleProperty.ColumnName, resultColumns)
    }
  }

  /**
   * Adjust the column name of the version of the ScheduleProperty for the incoming state to its sibling versions if
   * possible (matching entity name and column type)
   */
  private function adjustIncomingStateColumnNamesToExistingVersions(scheduleProperty : ScheduleProperty, jurisdiction : String) {
    var currentStateVersions = scheduleProperty.Versions.where( \ version -> version.Jurisdiction == jurisdiction )

    currentStateVersions.each( \ currentStateVersion -> {
      var matchingVersion = scheduleProperty.Versions.firstWhere( \ version ->
          version.ScheduledItemType == currentStateVersion.ScheduledItemType and
          version.Type == currentStateVersion.Type and
          version.Jurisdiction != currentStateVersion.Jurisdiction)

      if(matchingVersion != null) {
        currentStateVersion.ColumnName = matchingVersion.ColumnName
      }
    })

  }

  private function createEntityLoad(updatedScheduleConfig : ScheduleConfig,
                                    columnsToAddFromAllSchedules : Map<String, Set<String>>) : Load<Entity>{
    var load = new Load<Entity>()
    var lineScheduleItemEntityName = updatedScheduleConfig.UniqueScheduledItemTypes
        .firstWhere(\entityName -> entityName != SCHEDULE_ITEM)
    var baseScheduleItemEntity = _currentContents.getEntity(SCHEDULE_ITEM)
    var lineScheduleItemEntity = _currentContents.getEntity(lineScheduleItemEntityName)

    if(baseScheduleItemEntity == null) {
      LoggerFactory.getLogger("PCA").error("Unable to find base PC ScheduleItem.eti")
      return load
    }
    else if(lineScheduleItemEntity == null) {
      LoggerFactory.getLogger("PCA").warn("Unable to find line-specific ScheduleItem.eti in new schedule config.")
      return load
    }
    columnsToAddFromAllSchedules.keySet().each(\entityName -> {
      var columnsToAdd : Set<String> = {}
      var columnsToCheck = columnsToAddFromAllSchedules.get(entityName)

      if (entityName == SCHEDULE_ITEM) {
        // Check both base PC ScheduleItem.eti and <line_prefix>ScheduleItem.eti to see if any columns needs to be added
        columnsToCheck = getMissingColumns(columnsToCheck, baseScheduleItemEntity)

        // Now columnsToCheck becomes the ones that cannot be found in the base entity
        columnsToAdd = getMissingColumns(columnsToCheck, lineScheduleItemEntity)

        // Change any base schedule entity to line-specific one if any of the columns is not found in the base entity
        if (columnsToAdd.HasElements or columnsToCheck.HasElements) {
          updatedScheduleConfig.AllSchedules.each(\schedule ->
              schedule.Properties.each(\scheduleProperty ->
                  scheduleProperty.Versions
                      .where(\version -> version.ScheduledItemType == SCHEDULE_ITEM and columnsToCheck.contains(version.ColumnName))
                      .each(\version -> {version.ScheduledItemType = lineScheduleItemEntityName})))
        }
      } else {
        columnsToAdd = getMissingColumns(columnsToCheck, lineScheduleItemEntity)
      }
      columnsToAdd.each(\newColumnName ->
          lineScheduleItemEntity.addColumn(
              EntityColumn.newColumn(newColumnName, EntityColumnHelper.deriveGenericColumnType(newColumnName))))

      if (columnsToAdd.HasElements) {
        load.add(new EntityAddition(lineScheduleItemEntity))
      }
    })
    return load
  }

  /**
   * Return columns that are missing from the given entity.
   */
  private function getMissingColumns(columnsToAdd : Set<String>, entity : Entity) : Set<String> {
    var columnsContained = entity.ColumnsForeignkeys*.Name.toSet()

    var entityInPc : IType = null
    // Guard against the use of an entity that's not loaded into PC somehow (without restart, e.g.)
    try {
      entityInPc = TypeSystem.getByFullName("entity." + entity.EntityName)
      if(entityInPc != null) {
        columnsContained.addAll(entityInPc.TypeInfo.Properties
            .whereTypeIs(IColumnPropertyInfo)
            .map( \ prop -> prop.Name ))
      }
    } catch(e : Throwable) {
      LoggerFactory.getLogger("PCA").warn("Entity ${entity.EntityName} is not loaded in PC while merging schedule config.")
    }

    return columnsToAdd.subtract(columnsContained)
  }

  private function processScheduleProperty(scheduleProperty : ScheduleProperty,
                                           processedScheduleProperties : List< ProcessedScheduleProperty >,
                                           fixedColumns : Map<String, Set<String>>,
                                           jurisdiction : String) {
    var fixedColumn = addToProcessedScheduleProperties(scheduleProperty.ScheduledItemType, scheduleProperty.Name,
                                            scheduleProperty.ColumnName, processedScheduleProperties, jurisdiction, scheduleProperty)
    if(fixedColumn != null) {
      addToColumns(scheduleProperty.ScheduledItemType, fixedColumn, fixedColumns)
    }
  }

  /**
   * Add a column and its property and entity names to the processed mapping. If the column already exists, return
   * the next possible column name. Null otherwise. This method also updates the necessary ScheduleProperty(s) to
   * reflect the new fixed column names.
   */
  private function addToProcessedScheduleProperties(entityName : String, propertyName : String, columnName : String,
                                         processedScheduleProperties :  List< ProcessedScheduleProperty >, jurisdiction : String,
                                         scheduleProperty : ScheduleProperty) : String {
    var originalColumnName = columnName
    if(processedScheduleProperties.hasMatch( \ processedScheduleProperty -> hasConflict(processedScheduleProperty, entityName, propertyName, columnName) )) {
      do {
        columnName = nextColumnName(columnName)
      } while(processedScheduleProperties.hasMatch( \ processedScheduleProperty -> hasConflict(processedScheduleProperty, entityName, propertyName, columnName) ))

      processedScheduleProperties.add(new ProcessedScheduleProperty (entityName, propertyName, columnName, scheduleProperty))
      fixScheduleProperties(processedScheduleProperties, originalColumnName, entityName, columnName, jurisdiction)
      return columnName
    } else {
      processedScheduleProperties.add(new ProcessedScheduleProperty (entityName, propertyName, columnName, scheduleProperty))
      return null
    }
  }

  private function fixScheduleProperties(processedScheduleProperties :  List< ProcessedScheduleProperty >, originalColumnName : String, 
                                         entityName : String, fixedColumnName : String, jurisdiction : String) {
    if(processedScheduleProperties.last().SchedulePropertyRef.Jurisdiction == jurisdiction) {
      processedScheduleProperties.last().SchedulePropertyRef.ColumnName = fixedColumnName
    } else {
      // If the ScheduleProperty currently being processed should not be changed, then changed other ScheduleProperty causing the conflict
      processedScheduleProperties
          .where( \ processedScheduleProperty ->
            processedScheduleProperty.ColumnName == originalColumnName and
            processedScheduleProperty.EntityName == entityName and
            processedScheduleProperty.SchedulePropertyRef.Jurisdiction == jurisdiction )
          .each( \ processedScheduleProperty -> { processedScheduleProperty.SchedulePropertyRef.ColumnName = fixedColumnName })
    }
  }

  private function addToColumns(entityName: String, columnName: String,
                                columnsMapping: Map<String, Set<String>>) {
    var currentColumns = columnsMapping.get(entityName)

    if(currentColumns == null) {
      currentColumns = new HashSet<String>()
      columnsMapping.put(entityName, currentColumns)
    }

    currentColumns.add(columnName)
  }

  private function hasConflict(processedScheduleProperty : ProcessedScheduleProperty, entityName : String, propertyName : String,
                               columnName : String) : boolean {
    return
      processedScheduleProperty.PropertyName != propertyName and
      processedScheduleProperty.ColumnName == columnName
  }

  private function nextColumnName(originalColumnName: String) : String {
    var columnPrefix = EntityColumnHelper.columnPrefix(originalColumnName)

    return columnPrefix + (originalColumnName.replace(columnPrefix, "").toInt() + 1)
  }

  static class ProcessedScheduleProperty {
    var _entityName : String as readonly EntityName
    var _propertyName : String as readonly PropertyName
    var _columnName : String as readonly ColumnName
    var _schedulePropertyRef : ScheduleProperty as readonly SchedulePropertyRef

    construct(entityName : String, propertyName : String, columnName : String, schedulePropertyRef : ScheduleProperty) {
      _entityName = entityName
      _propertyName = propertyName
      _columnName = columnName
      _schedulePropertyRef = schedulePropertyRef
    }
  }
}