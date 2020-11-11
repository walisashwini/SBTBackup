package gw.sbt.loader.merger

uses gw.sbt.artifacts.versioned.ContainerKey
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.sbt.loader.SBTUpdateLoader
uses gw.sbt.loader.reporter.MessageReporter
uses gw.sbt.model.UpdateDecision
uses gw.sbt.util.LoaderUtil
uses org.slf4j.LoggerFactory

/**
 * Merger for configuration files based on VersionedConfig, i.e., Lob-Field-Meta, Availability-Config, etc.
 */
class VersionedConfigMerger {

  public enum REPORT_MODE {NEW, UPDATED, EXPIRED, NOT_REQUIRED}

  var _messageReporter : MessageReporter
  var _configType : ContainerPropertyConfigType
  var _messagingType: MessageReporter.ReportMessageSourceType as MessagingType

  construct(messageReporter : MessageReporter, configType : ContainerPropertyConfigType) {
    _messageReporter = messageReporter
    _configType = configType
    _messagingType = MessageReporter.getReportSourceType(_configType)
  }

  // Bring in this new container (EFFECTIVE version), and all the children properties' EFFECTIVE version, marked as Jurisdiction version.
  function addContainerForJurisdiction(currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig,
                                       containerKey : ContainerKey, jurisdiction : String, adoptionDate : Date) {
    var newContainer = updateConfig.getContentWithoutVersions(containerKey, null)
    if (newContainer != null) {
      currentConfig.addContainer(newContainer)
      _messageReporter.ModificationReporter.reportAddedConfiguration(MessagingType, containerKey.Name, null)

      addVersion(currentConfig, updateConfig, containerKey, null, jurisdiction, adoptionDate)
      // add the effective version for properties if any, mark these as jurisdiction specific
      var properties = updateConfig.getPropertiesForContainer(containerKey, false)
      if (properties != null) {
        properties.each(\ propertyName -> {
          addNewPropertyAndVersion(currentConfig, updateConfig, containerKey, propertyName, jurisdiction, adoptionDate)
          _messageReporter.ModificationReporter.reportAddedConfiguration(MessagingType, containerKey.Name, propertyName)
        })
      }
    }
  }

  // if reading from ExistenceConfigCache we will copy the versions over verbatim
  function addContainerFromExistenceCache(currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig,
                                                         containerKey : ContainerKey, adoptionDate : Date) {
    var newContainer = updateConfig.getContentWithoutVersions(containerKey, null)
    if (newContainer != null) {
      currentConfig.addContainer(newContainer)
      _messageReporter.ModificationReporter.reportAddedConfiguration(MessagingType, containerKey.Name, null)

      copyVersionsOverFromExistenceCache(currentConfig, updateConfig, containerKey, adoptionDate)
    }
  }

  //Expire the container and its properties Effective version for this jurisdiction.
  function expireContainerForJurisdiction(decisionMap : Map<String, UpdateDecision>, currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig,
                                          containerKey : ContainerKey, jurisdiction : String, adoptionDate : Date) {
    expireVersion(currentConfig, containerKey, null, jurisdiction, adoptionDate) // for container
    var properties = currentConfig.getPropertiesForContainer(containerKey, false)
    if (properties != null) {
      properties.each(\propertyName -> {
        var decisionForThisProperty = SBTUpdateLoader.getDecision(containerKey.toString() + "." + propertyName, decisionMap)
        if (decisionForThisProperty == UpdateDecision.ACCEPT) {
          expireVersion(currentConfig, containerKey, propertyName, jurisdiction, adoptionDate) // for properties
        }
      })
    }
  }

  //Merging
  function mergeContainerForJurisdiction(decisionMap : Map<String, UpdateDecision>,
                                         currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig, adoptedConfig : ContainerPropertyConfig,
                                         containerKey: ContainerKey, jurisdiction: String, adoptionDate: Date, isIndependentState: boolean = false){
    // merging container version.
    mergeVersion(currentConfig, updateConfig, containerKey, null, jurisdiction, adoptionDate)
    // merging properties (new properties, removed properties, merging exisitng properties)
    var propertiesInCurrent = currentConfig.getPropertiesForContainer(containerKey, false)
    var propertiesInUpdate = updateConfig.getPropertiesForContainer(containerKey, false)
    var unionOfProperties = propertiesInCurrent?.union(propertiesInUpdate)

    if (unionOfProperties != null) {
      unionOfProperties.each(\propertyName -> {
        var decisionForThisProperty = SBTUpdateLoader.getDecision(containerKey.toString() + "." + propertyName, decisionMap)
        var propertyInCurrent = currentConfig.getProperty(containerKey, propertyName)
        var propertyInUpdate = updateConfig.getProperty(containerKey, propertyName)
        var propertyInAdopted = adoptedConfig?.getProperty(containerKey, propertyName)
        var isStateUpdate = adoptedConfig != null

        // it is a NEW property, always bring in. (ADD case)
        if (propertyInCurrent == null) {
          addNewPropertyAndVersion(currentConfig, updateConfig, containerKey, propertyName, jurisdiction, adoptionDate)
        }
        // only expire if this property is not only in Current. (REMOVE case)
        else if (propertyInUpdate == null and (propertyInAdopted != null or (isIndependentState and !isStateUpdate))) {
          if (decisionForThisProperty == UpdateDecision.ACCEPT) {
            expireVersion(currentConfig, containerKey, propertyName, jurisdiction, adoptionDate)
          }
        } else if (propertyInUpdate != null) {
          if (decisionForThisProperty != UpdateDecision.REJECT) {
            mergeVersion(currentConfig, updateConfig, containerKey, propertyName, jurisdiction, adoptionDate)
          }
        }
      })
    }
  }

  function mergeContainerFromExistenceCache(currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig,
                                                           containerKey: ContainerKey, adoptionDate: Date) {
    if (currentConfig.getContainer(containerKey) == null) {
      return
    }

    copyVersionsOverFromExistenceCache(currentConfig, updateConfig, containerKey, adoptionDate)
  }

  private function copyVersionsOverFromExistenceCache(currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig,
                                                     containerKey : ContainerKey, adoptionDate : Date) {
    var versionsToAdd = updateConfig.getVersionsFor(containerKey, null)
    versionsToAdd.each(\version -> {
      var versionCopy = version.copy()
      if (not LoaderUtil.isJurisdictionCW(version.Jurisdiction)) {
        versionCopy.EffectiveDate = adoptionDate
      }

      currentConfig.addVersion(containerKey, null, versionCopy)
    })
  }

  //Local Helper methods//
  //add a new property and its effect version.
  private function addNewPropertyAndVersion(currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig,
                                            containerKey : ContainerKey, propertyName : String, jurisdiction : String, adoptionDate : Date){
    var newProperty = updateConfig.getContentWithoutVersions(containerKey, propertyName)
    if (newProperty != null) {
      currentConfig.addProperty(containerKey, newProperty)
      addVersion(currentConfig, updateConfig, containerKey, propertyName, jurisdiction, adoptionDate)
    }
  }

  //For a new version (container or property), add into current as jurisdiction version.
  private function addVersion(currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig,
                              containerKey : ContainerKey, propertyName : String, jurisdiction : String, adoptionDate : Date) {
    var effectiveVersion = updateConfig.getEffectiveVersionFor(containerKey, adoptionDate, jurisdiction, propertyName)
    if (effectiveVersion != null) {
      var newVersionForCurrent = effectiveVersion.copy()

      if (LoaderUtil.isJurisdictionCW(newVersionForCurrent.Jurisdiction)) {
        LoggerFactory.getLogger("PCA").warn("${_configType} Container/Property ${{containerKey.Name, propertyName}} has been converted from CW to State.")
        _messageReporter.reportForAudit({containerKey.Name, propertyName}, MessagingType)
      }
      newVersionForCurrent.Jurisdiction = jurisdiction
      newVersionForCurrent.EffectiveDate = adoptionDate
      currentConfig.addVersion(containerKey, propertyName, newVersionForCurrent)
      _messageReporter.ModificationReporter.reportAddedConfiguration(MessagingType, containerKey.Name, propertyName)
    }
  }

  // Expire the container or property: create a new, unavailable version for the jurisdiction; if there is an existing
  // jurisdiction-specific version, set its expiry date to the adoption date.
  // See https://confluence.guidewire.com/display/TDC/Potential+need+for+%3CAvailable%3E+tag.
  private function expireVersion(
      currentConfig : ContainerPropertyConfig,
      containerKey : ContainerKey,
      propertyName : String,
      jurisdiction : String,
      adoptionDate : Date
  ) {
    var effectiveVersionInCurrent = currentConfig.getEffectiveVersionFor(containerKey, adoptionDate, jurisdiction,
        propertyName)

    if (effectiveVersionInCurrent == null or not effectiveVersionInCurrent.Available) return

    var versionExpirer = new VersionedConfigExpirer() {
      protected override function addVersion(newVersion : VersionedConfig) {
        currentConfig.addVersion(containerKey, propertyName, newVersion)
      }
    }

    var hasEffectiveCWVersionInCurrent = currentConfig.getCountryWideVersion(containerKey, propertyName) != null

    versionExpirer.expire(effectiveVersionInCurrent, jurisdiction, adoptionDate, hasEffectiveCWVersionInCurrent)

    if (hasEffectiveCWVersionInCurrent) {
      _messageReporter.ModificationReporter.reportRemovedConfiguration(MessagingType, containerKey.Name, propertyName)
    }

    if (propertyName != null) {
      LoggerFactory.getLogger("PCA").warn("${_configType} Container/Property ${{containerKey.Name, propertyName}} has been converted from CW to State.")
      _messageReporter.reportForAudit({containerKey.Name, propertyName}, MessagingType)
    } else {
      LoggerFactory.getLogger("PCA").warn("${_configType} Container ${containerKey.Name} has been converted from CW to State.")
      _messageReporter.reportForAudit({containerKey.Name}, MessagingType)
    }
  }

  //used by Container version and Property version Merging.
  //Add the new jurisdiction version into current
  //If jurisdiction version already exists in current, expire it with adoption date.
  private function mergeVersion(currentConfig : ContainerPropertyConfig, updateConfig : ContainerPropertyConfig,
                                containerKey : ContainerKey, propertyName : String, jurisdiction : String, adoptionDate : Date) {
    var loadReportMode : REPORT_MODE = NOT_REQUIRED
    var effectiveVersionInCurrent = currentConfig.getEffectiveVersionFor(containerKey, adoptionDate, jurisdiction, propertyName)
    var effectiveVersionInUpdate = updateConfig.getEffectiveVersionFor(containerKey, adoptionDate, jurisdiction, propertyName)

    // Check if the new version of the container or property is already expired by ISO
    if(effectiveVersionInUpdate != null and effectiveVersionInUpdate.isBeingExpired(adoptionDate)) {
      // Do nothing if current version is already being expired
      if(effectiveVersionInCurrent != null and effectiveVersionInCurrent.isBeingExpired(adoptionDate)) {
        return
      }
      // Copy in the expired incoming entry and convert to a juridictional one if
      // 1. There is no current version at all
      // 2. The current version isn't expired as of the adoption date
      else if(
          effectiveVersionInCurrent == null or
          (effectiveVersionInCurrent != null and not effectiveVersionInCurrent.isBeingExpired(adoptionDate))) {

        if(LoaderUtil.isJurisdictionCW(effectiveVersionInCurrent.Jurisdiction)) {
          var newVersionForCurrent = effectiveVersionInUpdate.copy()
          newVersionForCurrent.Jurisdiction = jurisdiction
          newVersionForCurrent.ExpiryDate = adoptionDate
          currentConfig.addVersion(containerKey, propertyName, newVersionForCurrent)

          loadReportMode = EXPIRED
          LoggerFactory.getLogger("PCA").warn("${_configType} Container/Property ${{containerKey.Name, propertyName}} has been converted from CW to State.")
          _messageReporter.reportForAudit({containerKey.Name, propertyName}, MessagingType)
        } else {
          effectiveVersionInCurrent.ExpiryDate = adoptionDate
          loadReportMode = UPDATED
        }
      }

    }
    //if the 2 versions are logically identical, there is no need to merge.
    //EffectiveDate and Jurisdiction are filtered out for comparison.
    else if (VersionedConfig.isVersionDifferent(effectiveVersionInCurrent, effectiveVersionInUpdate)) {
      if (effectiveVersionInCurrent.Available == effectiveVersionInUpdate.Available) { // same 'Available' but different other attributes, showing 'Updated' in report
        loadReportMode = UPDATED
      }
      if (effectiveVersionInCurrent != null and effectiveVersionInCurrent.Jurisdiction == jurisdiction) {
        effectiveVersionInCurrent.ExpiryDate = adoptionDate   // expire the version for this jurisdiction.
        if (loadReportMode == NOT_REQUIRED) {
          loadReportMode = _messageReporter.ModificationReporter.getLoadReportMode(effectiveVersionInCurrent, effectiveVersionInUpdate)
        }
      }
      if (effectiveVersionInUpdate != null) {
        var countryWideVersionInCurrent = currentConfig.getCountryWideVersion(containerKey, propertyName)
        if (VersionedConfig.isVersionDifferent(countryWideVersionInCurrent, effectiveVersionInUpdate)) {
          //if update version is same as countrywide version, there is no need to add the update version again.
          //otherwise, copy from new update, make it as jurisdiction copy
          var newVersionForCurrent = effectiveVersionInUpdate.copy()

          if (LoaderUtil.isJurisdictionCW(newVersionForCurrent.Jurisdiction)) {
            LoggerFactory.getLogger("PCA").warn("${_configType} Container/Property ${{containerKey.Name, propertyName}} has been converted from CW to State.")
            _messageReporter.reportForAudit({containerKey.Name, propertyName}, MessagingType)
          }

          newVersionForCurrent.Jurisdiction = jurisdiction
          newVersionForCurrent.EffectiveDate = adoptionDate
          currentConfig.addVersion(containerKey, propertyName, newVersionForCurrent)
          if (loadReportMode == NOT_REQUIRED) {
            loadReportMode = _messageReporter.ModificationReporter.getLoadReportMode(effectiveVersionInCurrent, effectiveVersionInUpdate)
          }
        }
      }
    }
    //add into load report.
    _messageReporter.ModificationReporter.reportChangedConfiguration(MessagingType, loadReportMode, containerKey.Name, propertyName)
  }
}