package gw.sbt.artifacts.schedules

uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.artifacts.versioned.VersionedConfig
uses gw.sbt.util.LoaderUtil
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

class ScheduleProperty extends VersionedConfig {
  var _name: String as Name
  // Non-jurisdiction simple property fields
  var _desc: String as Description
  var _priority: int as Priority

  var _versionedScheduleProperties: List<ScheduleProperty> as Versions

  construct(content: byte[]) {
    super(content, ContainerPropertyConfigType.SCHEDULE_CONFIG)
    init()
  }

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, ContainerPropertyConfigType.SCHEDULE_CONFIG, xmlDeclarations)
    init()
  }

  private construct(name: String, content: XmlElement, xmlDeclarations : String) {
    super(content, ContainerPropertyConfigType.SCHEDULE_CONFIG, xmlDeclarations)

    _name = name
    initSimplePropertyFields()
  }

  private function init() {
    _name = _content.getAttributeValue("name")
    _versionedScheduleProperties = {}

    var versions = super.getChildren("Version")
    if (versions.Empty) {
      initSimplePropertyFields()
    } else {
      versions.each(\version -> _versionedScheduleProperties.add(new ScheduleProperty(_name, version, XmlDeclarations)))
      copyNonJurisdictionPropertyFields(_versionedScheduleProperties.first())
    }
  }

  private function initSimplePropertyFields() {
    var value = getChild("ColumnLabel").$Text
    _desc = value != null ? value.replace("displaykey.", "") : ""
    value = getChild("Priority").$Text
    _priority = value != null ? value.toInt() : 0
  }

  private function copyNonJurisdictionPropertyFields(scheduleProperty: ScheduleProperty) {
    _desc = scheduleProperty.Description
    _priority = scheduleProperty.Priority
  }

  override function copy() : ScheduleProperty {
    return new ScheduleProperty(XmlUtil.copyElement(_content), XmlDeclarations)
  }

  property get IsVersioned(): boolean {
    return not _versionedScheduleProperties.Empty
  }

  property set VersionsJurisdiction(jurisdiction: String) {
    _versionedScheduleProperties
        .each(\version -> {
          version.Jurisdiction = jurisdiction
        })
  }

  property set VersionsEffectiveDate(date: Date) {
    _versionedScheduleProperties
        .each(\version -> {
          version.EffectiveDate = date
        })
  }

  property set StateVersionsEffectiveDate(date: Date) {
    _versionedScheduleProperties
        .where(\version -> not LoaderUtil.isJurisdictionCW(version.Jurisdiction))
        .each(\version -> {
          version.EffectiveDate = date
        })
  }

  /**
   * Return the column behind each property. This method should not return null.
   */
  property get ScheduledItemType() : String {
    var scheduledItemType = getChild("ScheduledItemType")

    return (scheduledItemType == null or scheduledItemType.$Text.Empty) ? "ScheduledItem" : scheduledItemType.$Text
  }

  property set ScheduledItemType(type : String) {
    setElementValue("ScheduledItemType", type)
  }

  property get Type() : String {
    return getChild("Type").$Text
  }

  property get ColumnName() : String {
    return getChild("ColumnName").$Text
  }

  property set ColumnName(columnName : String) {
    setElementValue("ColumnName", columnName)
  }

  function getVersion(jurisdiction: String): ScheduleProperty {
    return _versionedScheduleProperties.firstWhere(\version -> version.Jurisdiction == jurisdiction)
  }

  function getEffectiveVersion(jurisdiction : String, adoptionDate : Date) : ScheduleProperty {
    return getEffectiveVersionFor(_versionedScheduleProperties, adoptionDate, jurisdiction) as ScheduleProperty
  }

  function addVersion(version: ScheduleProperty) {
    _content.addChild(version.Xml)
    _versionedScheduleProperties.add(version)
  }

  override protected property get ExpiryDateTagName() : String {
    return "ExpirationDate"
  }

  property get IsAutoNumberPropertyInfo() :boolean {
    return Xml.$QName.LocalPart == "AutoNumberPropertyInfo"
  }

  override property get ElementNames() : List<String> {
    return ContainerPropertyConfigType.SCHEDULE_CONFIG.VersionElements
  }
}