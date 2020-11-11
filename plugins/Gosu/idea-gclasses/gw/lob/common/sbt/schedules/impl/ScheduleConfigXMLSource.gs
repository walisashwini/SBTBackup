package gw.lob.common.sbt.schedules.impl

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.api.domain.Schedule
uses gw.api.productmodel.ClausePattern
uses gw.api.productmodel.SchedulePropertyInfo
uses gw.api.productmodel.SchedulePropertyValueProvider
uses gw.entity.IEntityPropertyInfo
uses gw.entity.ILinkPropertyInfo
uses gw.lang.reflect.IType
uses gw.lang.reflect.TypeSystem
uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.DependencyUtil
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.sbt.schedules.ScheduleConfigSource
uses gw.lob.common.sbt.schedules.SelectedVersionPropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.Clause
uses gw.lob.common.sbt.schedules.schemas.schedule_config.ItemClause
uses gw.lob.common.sbt.schedules.schemas.schedule_config.ScheduleConfig
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.BasePropertyInfoType
uses gw.lob.common.sbt.schedules.schemas.schedule_config.types.complex.PropertyInfoVersionType
uses java.io.File
uses java.lang.Iterable
uses java.util.LinkedHashMap
uses java.util.Map
uses java.util.List
uses gw.api.upgrade.PCCoercions
uses gw.lob.common.util.StateProperty

class ScheduleConfigXMLSource extends ConfigResource implements ScheduleConfigSource {

  var _propInfoProvider = new ScheduleConfigXMLInfoProvider()

  /*
   * a map of clause pattern (or owner relative name) to its schedule property infos,
   * which are, in turn, mapped by their name (as defined in the config XML file)
   */
  var _schedulePropertyInfos: Map<String, LinkedHashMap<String, StateProperty<BasePropertyInfoType>>> = {}
  var _complexScheduleCoverages: Map<String, List<ItemClause>> = new HashMap<String, List<ItemClause>>().toAutoMap(\defaultToEmpty -> {
    return {}
  })

  construct() {
    this(CONFIG_FILE_PATH)
  }

  construct(scheduleConfigFilePath : String) {
    super (scheduleConfigFilePath)
    var scheduleConfigFiles = new File(ConfigDir as String).listFiles().where( \ file -> file.Name.endsWith("-schedule-config.xml"))
    scheduleConfigFiles.each( \ file -> {
      var scheduleConfigFileName = scheduleConfigFilePath + "/" + file.Name
      initSchedulePropertyInfos(scheduleConfigFileName)
    })
  }

  private function initSchedulePropertyInfos(scheduleConfigFileName : String) {
    var scheduleConfig =  getScheduleConfig(scheduleConfigFileName)
    for (clause in scheduleConfig.Clause) {
      initSchedulePropertyInfosForClause(clause)
      initScheduleMultiPatterns(clause)
    }
  }

  private function getScheduleConfig(scheduleConfigFileName : String) : ScheduleConfig {
    var scheduleConfigFile = APIConfigFileAccess.INSTANCE.getConfigFile(scheduleConfigFileName)
    return ScheduleConfig.parse(scheduleConfigFile)
  }

  private function initScheduleMultiPatterns(clause : Clause) {
    if (clause.ItemClause.HasElements) {
      _complexScheduleCoverages.put(clause.Pattern, clause.ItemClause)
    }
  }

  private function initSchedulePropertyInfosForClause(clause : Clause) {
    var clauseSchedPropertyInfos = new LinkedHashMap<String, StateProperty<BasePropertyInfoType> >()
    clause.PropertyInfos.orderBy(\p -> p.Priority).each(\p -> {
      var stateProperty = new StateProperty<BasePropertyInfoType>()
      p.PropInfos.each(\versionedInfo -> {
        stateProperty.addStateValue(versionedInfo, versionedInfo.Jurisdiction ?: COUNTRY_WIDE, versionedInfo.EffectiveDate, versionedInfo.ExpirationDate, versionedInfo.Available)
      })
      clauseSchedPropertyInfos.put(p.Name, stateProperty)
    })
    _schedulePropertyInfos.put(clause.Pattern, clauseSchedPropertyInfos)
  }

  private function getApplicableClauseSchedPropertyInfos<T extends Schedule & gw.api.domain.Clause>(owner : T) : List<SelectedVersionPropertyInfoType> {
    var schedulePropertyInfos : List<SelectedVersionPropertyInfoType> = {}
    if (owner != null and _schedulePropertyInfos.containsKey(owner.Pattern.CodeIdentifier)) {
      var clauseSchedPropertyInfos = _schedulePropertyInfos.get(owner.Pattern.CodeIdentifier)
      var criteria = EffectiveJurisdictionCriteria.createForClause(owner.OwningCoverable, owner.Pattern.CodeIdentifier)
      clauseSchedPropertyInfos.Keys.each(\propertyName -> {
        var version = clauseSchedPropertyInfos.get(propertyName)?.getStateOrCWValue(criteria)
        if (version != null) {
          schedulePropertyInfos.add(new SelectedVersionPropertyInfoType(propertyName, version))
        }
      })
    }
    return schedulePropertyInfos
  }

  override function getPropertyNameByColumnName<T extends Schedule & gw.api.domain.Clause>(owner: T, columnName: String): String {
    var clauseSchedPropertyInfos = getApplicableClauseSchedPropertyInfos(owner)

    if (clauseSchedPropertyInfos.Empty) {
      throw "no schedule properties defined for ${(typeof owner).RelativeName}"
    }

    var schedPropInfo = clauseSchedPropertyInfos.firstWhere(\propInfo -> propInfo.PropInfo.ColumnName == columnName)

    return schedPropInfo != null ? schedPropInfo.Name : null
  }

  reified override function getPropertyInfos<T extends Schedule & gw.api.domain.Clause>(owner : T) : SchedulePropertyInfo[] {
    var clauseSchedPropertyInfos = getApplicableClauseSchedPropertyInfos(owner)
    if (clauseSchedPropertyInfos.Empty) {
      throw "no schedule properties defined for ${(typeof owner).RelativeName}"
    }
    /* 
     * this returns a new array of the property infos;
     * the property infos themselves are immutable, making them safe to export   
     */
    return clauseSchedPropertyInfos
        .map(\selectedInfo -> {
          var schedulePropInfo = _propInfoProvider.newSchedulePropertyInfo(selectedInfo)
          if (ScheduleForeignKeyPropertyInfo.Type.isAssignableFrom(typeof schedulePropInfo)) {
          return (schedulePropInfo as ScheduleForeignKeyPropertyInfo ).toSchedulePropertyInfo(owner)
        }
        return schedulePropInfo
      })
      .toTypedArray()
  }

  override function getScheduledItemValueProvider<V>(name: String, item: ScheduledItem): SchedulePropertyValueProvider<V> {
    var provider : SchedulePropertyValueProvider<V> = null

    var schedulePropInfo = getSchedulePropertyInfoByName(name, item.ScheduleParent as gw.api.domain.Clause & Schedule)
    if (schedulePropInfo != null) {
      // Can we just use createValueProvider(item) instead of the following??
      var propInfo = schedulePropInfo.PropertyInfo
      if (ScheduleForeignKeyPropertyInfo.Type
          .isAssignableFrom(typeof schedulePropInfo)) {
        propInfo = (schedulePropInfo as ScheduleForeignKeyPropertyInfo )
            .getPropertyInfo(item.ScheduleParent as Schedule & gw.api.domain.Clause)
      }
      provider = new SchedulePropertyValueProvider<V>(item, propInfo)
    }
    return provider
  }

  override function getScheduledItemParentColumns(owner : Schedule & gw.api.domain.Clause, itemType : IType) : Iterable<ILinkPropertyInfo> {
    var clauseSchedPropertyInfos = getApplicableClauseSchedPropertyInfos(owner)
    if (clauseSchedPropertyInfos.Empty) {
      throw "no schedule properties defined for ${owner.Pattern.CodeIdentifier}"
    }
    /*
     * this returns a new array of the property infos;
     * the property infos themselves are immutable, making them safe to export
     */
    return clauseSchedPropertyInfos
        .map(\selectedInfoVersion -> selectedInfoVersion.PropInfo)
        .where(\infoVersion -> infoVersion typeis PropertyInfoVersionType and infoVersion.IsKey and infoVersion.IsForeignKey)
        .map(\infoVersion -> itemType.TypeInfo.getProperty(infoVersion.ColumnName) as ILinkPropertyInfo)
  }

  override function getScheduledItemIdentityColumns(owner : Schedule & gw.api.domain.Clause, itemType : IType) : Iterable<IEntityPropertyInfo> {
    var clauseSchedPropertyInfos = getApplicableClauseSchedPropertyInfos(owner)
    if (clauseSchedPropertyInfos.Empty) {
      throw "no schedule properties defined for ${owner.Pattern.CodeIdentifier}"
    }
    /*
     * this returns a new array of the property infos;
     * the property infos themselves are immutable, making them safe to export
     */
    var versionProps = clauseSchedPropertyInfos
        .map(\selectedInfoVersion -> selectedInfoVersion.PropInfo)
        .where(\info -> info typeis PropertyInfoVersionType)
        .cast(PropertyInfoVersionType)
    var keyColumns = versionProps
        .where(\info -> info.IsKey)
    var nonForeignKeyColumns = keyColumns
        .where(\info -> not (info.IsForeignKey))
        .map(\ info -> itemType.TypeInfo.getProperty(info.ColumnName) as IEntityPropertyInfo)
    /*
     * if non-foreign key scheduled item columns are present then return them
     * if foreign key columns are the only key columns then return empty array
     * if no key columns defined then return ID column
     */
    return nonForeignKeyColumns.HasElements ? nonForeignKeyColumns : (keyColumns.HasElements ? {} : {itemType.TypeInfo.getProperty("ID") as IEntityPropertyInfo})
  }

  override function getClauseMultiPatterns(owner : gw.api.domain.Clause): List<ClausePattern> {
    return _complexScheduleCoverages.get(owner.Pattern.CodeIdentifier)*.Pattern.toList().map(\elt -> PCCoercions.makeProductModel<ClausePattern>(elt))
  }

  override function getScheduledItemKeyColumns(item: ScheduledItem): List<PropertyInfoVersionType> {
    var propertyName = (typeof item.ScheduleParent).RelativeName
    var clauseSchedPropertyInfos = getApplicableClauseSchedPropertyInfos(item.ScheduleParent as gw.api.domain.Clause & Schedule)
    if (clauseSchedPropertyInfos.Empty) {
      throw "no schedule properties defined for ${propertyName}"
    }
    /*
     * this returns a new array of the property infos;
     * the property infos themselves are immutable, making them safe to export
     */
    return clauseSchedPropertyInfos
        .map(\selectedInfoVersion -> selectedInfoVersion.PropInfo)
        .where(\info -> info typeis PropertyInfoVersionType and info.IsKey)
        .cast(PropertyInfoVersionType)
  }

  override function getScheduledItemKeyDisplayNames(item: ScheduledItem): Iterable<String> {
    return getScheduledItemKeyColumns(item).map(\info -> {
      var value = item.getFieldValue(info.ColumnName)
      if (info.Type == TypeKey) {
        var typeList = TypeSystem.getByFullName("typekey.${info.TypeList}") as gw.entity.ITypeList
        value = typeList.getTypeKey(value as String).DisplayName
      }
      return (info.IsForeignKey)
           ? (value as EffDated).DisplayName
           : value as String
    })
  }

  override function getSchedulePropertyInfoByName(name: String, schedule: Schedule & gw.api.domain.Clause): SchedulePropertyInfo {
    var schedulePropInfo: SchedulePropertyInfo = null
    var clausePattern = schedule.Pattern.CodeIdentifier
    var clauseSchedPropertyInfos = _schedulePropertyInfos.get(clausePattern)
    if (clauseSchedPropertyInfos != null) {
      var info = clauseSchedPropertyInfos.get(name)
      if (info != null) {
        var criteria = EffectiveJurisdictionCriteria.createForClause(schedule.OwningCoverable, schedule.Pattern.CodeIdentifier)
        var applicableVersion = info.getStateOrCWValue(criteria)
        if (applicableVersion != null) {
          schedulePropInfo = _propInfoProvider.newSchedulePropertyInfo(new SelectedVersionPropertyInfoType(name, applicableVersion))
        }
      }
    }

    if (schedulePropInfo != null) {
      if (ScheduleForeignKeyPropertyInfo.Type.isAssignableFrom(typeof schedulePropInfo)) {
        return (schedulePropInfo as ScheduleForeignKeyPropertyInfo).toSchedulePropertyInfo(schedule)
      }
    }
    return schedulePropInfo
  }

  override function getAmendedClause(schedule: Schedule & gw.api.domain.Clause, itemPattern: ClausePattern): ClausePattern {
    var schedItems = _complexScheduleCoverages.get(schedule.Pattern.CodeIdentifier)
    var itemClause = schedItems.firstWhere(\item -> item.Pattern == itemPattern.CodeIdentifier)
    var pattern = itemClause.AmendmentOf
    return pattern.HasContent ? PCCoercions.makeProductModel<ClausePattern>(pattern) : null
  }

  override function getWhenClause(schedule: Schedule & gw.api.domain.Clause, itemPattern: ClausePattern): ClausePattern {
    var schedItems = _complexScheduleCoverages.get(schedule.Pattern.CodeIdentifier)
    var itemClause = schedItems.firstWhere(\item -> item.Pattern == itemPattern.CodeIdentifier)
    var pattern = itemClause.WhenClause
    return pattern.HasContent ? PCCoercions.makeProductModel<ClausePattern>(pattern) : null
  }

  override function isHideFromSummary(schedule: Schedule & gw.api.domain.Clause, itemPattern: ClausePattern): boolean {
    var schedItems = _complexScheduleCoverages.get(schedule.Pattern.CodeIdentifier)
    var itemClause = schedItems.firstWhere(\item -> item.Pattern == itemPattern.CodeIdentifier)
    return itemClause.HideFromSummary
  }
}
