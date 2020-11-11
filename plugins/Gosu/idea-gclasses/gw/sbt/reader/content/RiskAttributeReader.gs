package gw.sbt.reader.content

uses gw.sbt.artifacts.entities.LobFieldMeta
uses gw.sbt.artifacts.lookups.Lookup
uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.sbt.config.ConfigContents
uses gw.sbt.model.Intent
uses gw.sbt.model.Risk
uses gw.sbt.model.RiskAttribute
uses gw.sbt.model.RiskAttributeProperty
uses gw.sbt.model.RiskAttributeVersion
uses gw.sbt.util.LoaderUtil

class RiskAttributeReader {

  function read(contents : ConfigContents, jurisdiction : String) : List<Risk> {
    var lobFieldMeta = contents.LobFieldMetaConfig
    if (lobFieldMeta == null) {
      return {}
    }
    return getRisks(contents, lobFieldMeta, jurisdiction)
  }

  //create risks from lobFieldMeta
  private function getRisks(updateContents: ConfigContents, lobFieldMeta: LobFieldMeta, jurisdiction : String): List<Risk> {
    var risks: List<Risk> = {}
    lobFieldMeta.ContainerKeys.each(\containerKey -> {
      var entity = updateContents.getEntity(containerKey.Name)
      var entityName = entity.EntityName ?: containerKey.Name
      var risk = new Risk() {
        :Entity = entityName,
        :Name = entity.DisplayName ?: entityName,
        :ContainerKey = containerKey
      }

      var descToRiskAttrMap = new HashMap<String, RiskAttribute>()
      var properties = lobFieldMeta.getPropertiesForContainer(containerKey, false)

      properties.each(\ propertyName -> {
        var versions = lobFieldMeta.getVersionsFor(containerKey, propertyName)
        versions = versions.where(\ versionedConfig -> versionedConfig.Jurisdiction == jurisdiction or
            LoaderUtil.isJurisdictionCW(versionedConfig.Jurisdiction))
        if (not versions.Empty) {
          var attr = createRiskAttribute(updateContents, versions, risk, propertyName)
          versions.each(\versionedConfig -> {
            var available = getVersionAvailability(versionedConfig)
            var attrVersion = new RiskAttributeVersion() {
              :Available = available,
              :Jurisdiction = versionedConfig.Jurisdiction,
              :EffectiveDate = versionedConfig.EffectiveDate,
              :ExpiryDate = versionedConfig.ExpiryDate,
              :AvailableProperty = new RiskAttributeProperty("Available", String.valueOf(available)),
              :LabelProperty = new RiskAttributeProperty("Label", getVersionLabel(updateContents, versionedConfig)),
              :WidgetTypeProperty = new RiskAttributeProperty("WidgetType", versionedConfig.getChild("WidgetType")?.$Text),
              :PriorityProperty = new RiskAttributeProperty("Priority", versionedConfig.getChild("Priority")?.$Text),
              :VisibleProperty = new RiskAttributeProperty("Visible", versionedConfig.getChild("Visible")?.$Text),
              :EditableProperty = new RiskAttributeProperty("Editable", versionedConfig.getChild("Editable")?.$Text),
              :RequiredProperty = new RiskAttributeProperty("Required", versionedConfig.getChild("Required")?.$Text),
              :DefaultValueProperty = new RiskAttributeProperty("DefaultValue", versionedConfig.getChild("DefaultValue")?.$Text),
              :DefaultPathProperty = new RiskAttributeProperty("DefaultPath", versionedConfig.getChild("DefaultPath")?.$Text),
              :MaxProperty = new RiskAttributeProperty("Max", versionedConfig.getChild("Max")?.$Text),
              :MinProperty = new RiskAttributeProperty("Min", versionedConfig.getChild("Min")?.$Text)
            }
            attr.VersionList.add(attrVersion)
          })

          var prevRiskAttr = descToRiskAttrMap.get(attr.Description)
          if (prevRiskAttr != null) {
            attr.Description = propertyName
            prevRiskAttr.Description = prevRiskAttr.PropertyName
          } else {
            descToRiskAttrMap.put(attr.Description, attr)
          }

          risk.RiskAttributes.add(attr)
        }
      })

      if (not risk.RiskAttributes.Empty) {
        nullifyIntentsWithOnlyCountrywideVersionFor(risk)
        risks.add(risk)
      }
    })

    return risks
  }

  private function getVersionAvailability(versionedConfig: VersionedConfig): boolean {
    return Boolean.valueOf(versionedConfig.getChild(Lookup.AVAILABLE)?.$Text ?: "true")
  }

  private function getVersionLabel(updateContents: ConfigContents, versionedConfig: VersionedConfig): String {
    var label = versionedConfig.getChild("Label")?.$Text
    if(label != null and not label.Empty) {
      return updateContents.DisplayProperties?.getProperty(label)
    } else {
      return null
    }
  }

  private function createRiskAttribute(
      updateContents : ConfigContents,
      versionedConfigs : List<VersionedConfig>,
      risk : Risk,
      propertyName : String
  ) : RiskAttribute {
    //create the risk attribute with necessary properties.
    var availabilityDeterminingVersion = versionedConfigs.firstWhere(\ version ->
        not LoaderUtil.isJurisdictionCW(version.Jurisdiction)) ?: versionedConfigs.first()
    var cwVersion = versionedConfigs.firstWhere(\ versionedConfig ->
        LoaderUtil.isJurisdictionCW(versionedConfig.Jurisdiction))
    var cwAvailable = cwVersion == null ? false : getVersionAvailability(cwVersion)
    var attr = new RiskAttribute()
    attr.Code = propertyName
    attr.Description = getVersionLabel(updateContents, availabilityDeterminingVersion) ?: propertyName
    attr.OriginatingFullPath = risk.Entity + "." + propertyName
    attr.RiskEntity = risk.Entity
    attr.PropertyName = propertyName

    //Intent is only used in state-add case
    var available = getVersionAvailability(availabilityDeterminingVersion)
    attr.Intent = LoaderUtil.isJurisdictionCW(availabilityDeterminingVersion.Jurisdiction)
        ? null
        : (cwAvailable == available) ? Intent.STATE_MODIFIED : (available ? Intent.STATE_ADD : Intent.STATE_REMOVE)

    return attr
  }

  private function nullifyIntentsWithOnlyCountrywideVersionFor(risk : Risk) {
    risk.RiskAttributes.each(\ attribute -> {
      if (attribute.VersionList.allMatch(\ version -> LoaderUtil.isJurisdictionCW(version.Jurisdiction)))
        attribute.Intent = null
    })
  }
}