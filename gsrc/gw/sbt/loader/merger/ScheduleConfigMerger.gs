package gw.sbt.loader.merger

uses gw.sbt.artifacts.schedules.Schedule
uses gw.sbt.artifacts.schedules.ScheduleConfig
uses gw.sbt.artifacts.schedules.ScheduleProperty
uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.sbt.config.ConfigurationFile
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.util.LoaderUtil
uses gw.sbt.util.ProductCodeToAbbreviationMapper
uses org.slf4j.LoggerFactory

class ScheduleConfigMerger {

  var _messageReporter : MessageReporter

  construct(messageReporter : MessageReporter) {
    _messageReporter = messageReporter
  }

  function addNewScheduleConfig(scheduleInCurrent : Schedule, scheduleInUpdate : Schedule, currentScheduleConfig : ScheduleConfig, adoptionDate : Date) : boolean{
    var scheduleMerged = false
    if (scheduleInCurrent == null and scheduleInUpdate != null) {
      scheduleInCurrent = new Schedule(scheduleInUpdate.Bytes)
      // Set adoption date as the effective date of any incoming versions on all schedule properties
      scheduleInCurrent.Properties.each(\propertyInfo -> {
        propertyInfo.VersionsEffectiveDate = adoptionDate
        //Note: bring all properties as is from new package, jurisdiction is not changed
      })
      currentScheduleConfig.add(scheduleInCurrent)
      scheduleMerged = true

      _messageReporter.ModificationReporter.reportAddedConfiguration(SCHEDULE_CONFIG, scheduleInCurrent.ClausePattern, null)
      scheduleInCurrent.Properties.each(\propertyInfo -> {
        _messageReporter.ModificationReporter.reportAddedConfiguration(SCHEDULE_CONFIG, scheduleInCurrent.ClausePattern, propertyInfo.Name)
      })

    }
    return scheduleMerged
  }

  function expireScheduleConfig(scheduleInCurrent : Schedule, scheduleInUpdate : Schedule, jurisdiction: String, adoptionDate: Date) : boolean{
    var scheduleMerged = false
    if (scheduleInCurrent != null and scheduleInUpdate == null) {
      //for all properties with version supported in this schedule
      var allPropertiesWithVersions = scheduleInCurrent.Properties.where(\prop -> prop.Versions.HasElements)
      allPropertiesWithVersions.each(\scheduleProperty -> {
        var effectiveVersion = scheduleProperty.getEffectiveVersion(jurisdiction, adoptionDate)
        expireScheduleProperty(effectiveVersion, jurisdiction, adoptionDate, scheduleProperty, scheduleInCurrent)
      })
      scheduleMerged = true

      _messageReporter.ModificationReporter.reportRemovedConfiguration(SCHEDULE_CONFIG, scheduleInCurrent.ClausePattern, null)
      scheduleInCurrent.Properties.each(\propertyInfo -> {
        _messageReporter.ModificationReporter.reportRemovedConfiguration(SCHEDULE_CONFIG, scheduleInCurrent.ClausePattern, propertyInfo.Name)
      })
    }
    return scheduleMerged
  }

  function mergeScheduleConfig(scheduleInCurrent : Schedule, scheduleInUpdate : Schedule, scheduleInAdopted : Schedule, jurisdiction : String, adoptionDate : Date, stateAddForIndependentState: boolean) : boolean {
    var scheduleMerged = false
    //should only have one property which is not versioned, based on XSD: minOccurs="1" maxOccurs="1" (AutoNumberPropertyInfo)
    var schedulePropertyInCurrent = scheduleInCurrent.Properties.firstWhere(\prop -> prop.IsAutoNumberPropertyInfo)
    var schedulePropertyInUpdate = scheduleInUpdate.Properties.firstWhere(\prop -> prop.IsAutoNumberPropertyInfo)
    if (VersionedConfig.isVersionDifferent(schedulePropertyInCurrent, schedulePropertyInUpdate)) {
      var reportContent = scheduleInCurrent.ClausePattern + "." + schedulePropertyInCurrent.Name?:schedulePropertyInUpdate.Name
      var productAbbreviation = ProductCodeToAbbreviationMapper.productAbbreviationThatPrefixesPattern(
          scheduleInCurrent.ClausePattern)
      var scheduleConfigFile = ConfigurationFile.scheduleConfig(productAbbreviation)
      _messageReporter.ConflictReporter.reportScheduleConfig(reportContent, scheduleConfigFile)
    }

    var schedulePropertiesInCurrent = scheduleInCurrent.Properties.where(\prop -> prop.IsVersioned)*.Name
    var schedulePropertiesInUpdate = scheduleInUpdate.Properties.where(\prop -> prop.IsVersioned)*.Name
    var unionOfPropertyNames = schedulePropertiesInCurrent?.union(schedulePropertiesInUpdate)
    if (unionOfPropertyNames.HasElements) {
      unionOfPropertyNames.each(\propertyName -> {
        var propertyInCurrent = scheduleInCurrent.getProperty(propertyName)
        var propertyInUpdate = scheduleInUpdate.getProperty(propertyName)
        var propertyInAdopted = scheduleInAdopted?.getProperty(propertyName)
        if (propertyInCurrent == null) { // it is a new property, always bring in as jurisdiction version
          var newPropertyForCurrent = propertyInUpdate.copy()
          newPropertyForCurrent.VersionsEffectiveDate = adoptionDate
          if(newPropertyForCurrent.Versions.hasMatch(\version -> LoaderUtil.isJurisdictionCW(version.Jurisdiction))){
            LoggerFactory.getLogger("PCA").warn("ScheduleConfig Clause/PropertyInfo ${{scheduleInUpdate.ClausePattern, newPropertyForCurrent.Name}} has been converted from CW to State.")
            _messageReporter.reportForAudit({scheduleInUpdate.ClausePattern, newPropertyForCurrent.Name}, SCHEDULE_CONFIG)
          }
          newPropertyForCurrent.VersionsJurisdiction = jurisdiction
          scheduleInCurrent.add(newPropertyForCurrent)
          _messageReporter.ModificationReporter.reportAddedConfiguration(SCHEDULE_CONFIG, scheduleInCurrent.ClausePattern, propertyName)
          scheduleMerged = true
        } else if (propertyInUpdate == null and (propertyInAdopted != null or stateAddForIndependentState)) {
          // it is a removed property, expire it as jurisdiction version if the property is not only in current
          var effectiveVersion = propertyInCurrent.getEffectiveVersion(jurisdiction, adoptionDate)
          expireScheduleProperty(effectiveVersion, jurisdiction, adoptionDate, propertyInCurrent, scheduleInCurrent)
          scheduleMerged = true
          _messageReporter.ModificationReporter.reportRemovedConfiguration(SCHEDULE_CONFIG, scheduleInCurrent.ClausePattern, propertyName)
        } else if (propertyInUpdate != null) {
          var effectiveVersionInCurrent = propertyInCurrent.getEffectiveVersion(jurisdiction, adoptionDate)
          var effectiveVersionInUpdate = propertyInUpdate.getEffectiveVersion(jurisdiction, adoptionDate)
          if (effectiveVersionInCurrent != null and effectiveVersionInUpdate == null) {
            //expire the schedule property if there is no effective version in the new package.
            expireScheduleProperty(effectiveVersionInCurrent, jurisdiction, adoptionDate, propertyInCurrent, scheduleInCurrent)
            _messageReporter.ModificationReporter.reportRemovedConfiguration(SCHEDULE_CONFIG, scheduleInCurrent.ClausePattern, propertyName)
          } else if (effectiveVersionInUpdate != null) {
            var loadReportMode : VersionedConfigMerger.REPORT_MODE = NOT_REQUIRED
            //won't merge if they are identical (other than EffeciveDate and Jurisdiction)
            if (VersionedConfig.isVersionDifferent(effectiveVersionInCurrent, effectiveVersionInUpdate)) {
              if (effectiveVersionInCurrent.Available == effectiveVersionInUpdate.Available) {
                // same 'Available' but different other attributes, showing 'Updated' in report
                loadReportMode = UPDATED
              }
              if (effectiveVersionInCurrent != null and effectiveVersionInCurrent.Jurisdiction == jurisdiction) {
                effectiveVersionInCurrent.ExpiryDate = adoptionDate   // expire the version for this jurisdiction.
                if (loadReportMode == NOT_REQUIRED) {
                  loadReportMode = _messageReporter.ModificationReporter.getLoadReportMode(effectiveVersionInCurrent, effectiveVersionInUpdate)
                }
              }
              var countryWideVersionInCurrent = VersionedConfig.getCountryWideVersion(effectiveVersionInCurrent.Versions)
              if (VersionedConfig.isVersionDifferent(countryWideVersionInCurrent, effectiveVersionInUpdate)) {
                // copy from new update, make it as jurisdiction copy
                var newVersionForCurrent = effectiveVersionInUpdate.copy()

                if (LoaderUtil.isJurisdictionCW(newVersionForCurrent.Jurisdiction)) {
                  LoggerFactory.getLogger("PCA").warn("ScheduleConfig Clause/PropertyInfo ${{scheduleInUpdate.ClausePattern, newVersionForCurrent.Name}} has been converted from CW to State.")
                  _messageReporter.reportForAudit({scheduleInUpdate.ClausePattern, propertyName}, SCHEDULE_CONFIG)
                }

                newVersionForCurrent.Jurisdiction = jurisdiction  // the effectiveVersion might be countryWide, make it jurisdiction specific
                newVersionForCurrent.EffectiveDate = adoptionDate
                propertyInCurrent.addVersion(newVersionForCurrent)
                scheduleMerged = true
                if (loadReportMode == NOT_REQUIRED) {
                  loadReportMode = _messageReporter.ModificationReporter.getLoadReportMode(effectiveVersionInCurrent, effectiveVersionInUpdate)
                }
              }
            }
            //add into load report.
            _messageReporter.ModificationReporter.reportChangedConfiguration(SCHEDULE_CONFIG, loadReportMode, scheduleInCurrent.ClausePattern, propertyName)
          }
        }
      })
    }
    return scheduleMerged
  }

  private function expireScheduleProperty(version : ScheduleProperty, jurisdiction : String, adoptionDate : Date, scheduleProperty : ScheduleProperty, schedule : Schedule) {
    if(not version.Available) {
      return
    }

    var versionExpirer = new VersionedConfigExpirer() {
      protected override function addVersion(newVersion : VersionedConfig) {
        scheduleProperty.addVersion(newVersion as ScheduleProperty)
      }
    }

    versionExpirer.expire(version, jurisdiction, adoptionDate)

    LoggerFactory.getLogger("PCA").warn("ScheduleConfig Clause/PropertyInfo ${{schedule.ClausePattern, scheduleProperty.Name}} has been converted from CW to State.")
    _messageReporter.reportForAudit({schedule.ClausePattern, scheduleProperty.Name}, SCHEDULE_CONFIG)
  }
}