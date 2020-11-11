package gw.sbt.artifacts.versioned

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement
uses java.util.Map
uses java.util.Set
uses java.util.Date
uses gw.sbt.util.LoaderUtil
uses java.util.List

/**
 * A representation of configuration files with 2 level hierarchy: container level and property level.
 * This class can capture any config with the following structure:
 * <ConfigName>
 *  <ContainerName name="" type=""...>
 *    <Version>
 *      ...
 *    </Version>
 *    <PropertyName name="" ...>
 *      <Version>
 *        <Jurisdiction>...</Jurisdiction>
 *        <EffectiveDate>...</EffectiveDate>
 *        ...
 *      </Version>
 *    </PropertyName>
 *    ...
 *  </ContainerName>
 *  ...
 * </ConfigName>
 */
class ContainerPropertyConfig extends XmlContent {
  public static final var ALL_PROPERTIES_KEY : String = "all_properties"

  private static final var VERSION_TAG = "Version"
  private static final var NAME_TAG = "name"
  private static final var TYPE_TAG = "type"

  var _configFileId : String as ConfigFileId
  var _configFileType: ContainerPropertyConfigType as ConfigFileType

  //container level
  var _containerIdAttribute : String
  var _containerTypeAttribute : String

  //property level
  var _propertyIdAttribute : String

  protected var _containerProperties : Map<ContainerKey, Map<String, List<VersionedConfig>>> = {}

  construct(content : byte[]) {
    this(content, null, NAME_TAG, TYPE_TAG, NAME_TAG)
  }

  construct(content : byte[], configFileId : String) {
    this(content, configFileId, NAME_TAG, TYPE_TAG, NAME_TAG)
  }

  construct(content : byte[], configFileId : String, containerIdAttribute : String, containerTypeAttribute : String, propertyIdAttribute : String) {
    super(content)
    _configFileId = configFileId
    _containerIdAttribute = containerIdAttribute?:NAME_TAG
    _containerTypeAttribute = containerTypeAttribute?:TYPE_TAG
    _propertyIdAttribute = propertyIdAttribute?:_containerIdAttribute // fall back to container Id attribute if not provided.
    _configFileType = ContainerPropertyConfigType.getConfigType(_content)
    init()
  }

  private function init() {
    getChildren().each(\ containerChild -> initContainerChild(containerChild))
    mergeDuplicateContainers()
  }

  private function initContainerChild(containerChild : XmlElement) {
    var containerKey = ContainerKey.create(containerIdOf(containerChild), containerTypeOf(containerChild))

    var propertiesMapping : Map<String, List<VersionedConfig>> = {}
    //some configuration files might have duplicated container keys
    if (_containerProperties.containsKey(containerKey)) {
      propertiesMapping = _containerProperties.get(containerKey)
    }

    containerChild.$Children.each(\ propertyChild -> initPropertyChild(propertyChild, propertiesMapping))

    _containerProperties.put(containerKey, propertiesMapping)
  }

  private function initPropertyChild(propertyChild: XmlElement, propertiesMapping: Map<String, List<VersionedConfig>>) {
    if (propertyChild.$QName.LocalPart.equalsIgnoreCase(VERSION_TAG)) {
      // Add any versions of the Container as part of ALL_PROPERTIES_KEY list, as it's in fact a Version, not a property
      var existingVersions = propertiesMapping.get(ALL_PROPERTIES_KEY)
      if (existingVersions == null) {
        existingVersions = {}
        propertiesMapping.put(ALL_PROPERTIES_KEY, existingVersions)
      }
      existingVersions.add(new VersionedConfig(propertyChild, _configFileType))
    } else {
      var versions: List<VersionedConfig> = {}
      versions.addAll(propertyChild.$Children.map(\versionChild -> new VersionedConfig(versionChild, _configFileType)))
      //some configuration files might have duplicated properties for the same container.
      var propertyId = propertyIdOf(propertyChild)
      if (propertiesMapping.containsKey(propertyId)) {
        propertiesMapping.get(propertyId).addAll(versions)
      } else {
        propertiesMapping.put(propertyId, versions)
      }
    }
  }

  // Most configuration files have only one container for a given container key (id + type). If there are multiple,
  // they need to be consolidated.
  private function mergeDuplicateContainers() {
    var mergedContainers = _containerProperties.Keys.map(\ containerKey -> {
      var matchingContainers = getAllContainers(containerKey)
      var mergedContainer = matchingContainers.first()
      for (i in 1..|matchingContainers.Count) {
        matchingContainers.get(i).$Children.each(\ child -> {
          var isDuplicateChild = mergedContainer.$Children.hasMatch(\ existingChild ->
              XmlUtil.compareXmlElements(existingChild, child))
          if (not isDuplicateChild)
            mergedContainer.addChild(child)
        })
      }
      return mergedContainer
    })
    Xml.$Children*.$QName.toSet().each(\ childQName -> Xml.removeChildren(childQName))
    mergedContainers.each(\ container -> Xml.addChild(container))
  }

  function getVersionsFor(containerKey: ContainerKey, propertyName: String = null): List<VersionedConfig> {
    if (propertyName == null) {
      propertyName = ALL_PROPERTIES_KEY
    }

    return _containerProperties.get(containerKey)?.get(propertyName)
  }

  //Find effective version by AdoptionDate and Jurisdiction
  function getEffectiveVersionFor(containerKey : ContainerKey, adoptionDate : Date, jurisdiction : String, propertyName : String = null) : VersionedConfig {
    var versionList = getVersionsFor(containerKey, propertyName)
    return VersionedConfig.getEffectiveVersionFor(versionList, adoptionDate, jurisdiction)
  }

  //Find the countrywide version
  function getCountryWideVersion(containerKey : ContainerKey, propertyName : String = null) : VersionedConfig {
    var versionList = getVersionsFor(containerKey, propertyName)
    return VersionedConfig.getCountryWideVersion(versionList)
  }

  function getPropertiesForContainer(containerKey: ContainerKey, includeAllVersions: boolean = true): Set<String> {
    var propertyNames = _containerProperties.get(containerKey).Keys?.copy()

    if (!includeAllVersions) {
      propertyNames.remove(ALL_PROPERTIES_KEY)
    }

    return propertyNames
  }

  private function getAllContainers(containerKey : ContainerKey): List<XmlElement> {
    return getChildren().where(\ child -> containerIdOf(child) == containerKey.Name and
        (containerKey.Type == null or containerTypeOf(child) == containerKey.Type))
  }

  function getContainer(containerKey : ContainerKey) : XmlElement {
    var matches = getAllContainers(containerKey)
    return matches.Empty ? null : matches.single()
  }

  function addContainer(containerContent: XmlElement) {
    _content.addChild(containerContent)
    initContainerChild(containerContent)
  }

  // get the container/property (attribute level), no child elements, ie versions
  function getContentWithoutVersions(containerKey : ContainerKey, propertyName : String) : XmlElement {
    var container = getContainer(containerKey)
    if (container != null) {
      container = XmlUtil.copyElement(container)
      if (propertyName == null) { //remove versions and properties if any
        container.removeChildren(VERSION_TAG)
        if(container.$Children.HasElements){
          container.removeChildren(container.$Children.first().$QName)
        }
        return container
      } else {
        var propertyContent = container.$Children.firstWhere(\ prop -> propertyIdOf(prop) == propertyName)
        propertyContent.removeChildren(VERSION_TAG) // remove the versions if any
        return propertyContent
      }
    } else {
      return null
    }
  }

  function getProperty(containerKey: ContainerKey, propertyName: String): XmlElement {
    var container = getContainer(containerKey)
    if (container != null) {
      return container.$Children.firstWhere(\ prop -> propertyIdOf(prop) == propertyName)
    } else {
      return null
    }
  }

  function addProperty(containerKey: ContainerKey, prop: XmlElement) {
    getContainer(containerKey).addChild(prop)
    initPropertyChild(prop, _containerProperties.get(containerKey))
  }

  function addVersion(containerKey: ContainerKey, propertyName: String, version: VersionedConfig) {
    if (propertyName == null) {
      getContainer(containerKey).$Children.add(0, version._content)

      var existingContainerVersions = _containerProperties.get(containerKey).get(ALL_PROPERTIES_KEY)
      if (existingContainerVersions == null) {
        existingContainerVersions = {}
        _containerProperties.get(containerKey).put(ALL_PROPERTIES_KEY, existingContainerVersions)
      }
      existingContainerVersions.add(0, version)
    } else {
      getProperty(containerKey, propertyName).addChild(version._content)
      _containerProperties.get(containerKey).get(propertyName).add(version)
    }
  }

  function useAdoptionDate(adoptionDate : Date) {
    _containerProperties.values().each(\ propertyMapping ->
      propertyMapping.values().each(\ versionedConfigs ->
        versionedConfigs
            .each(\ versionedConfig -> {
              if(versionedConfig.ExpiryDate != null) {
                // Let the setter in VersionedConfig take care of validation on expiry/effective dates
                versionedConfig.ExpiryDate = adoptionDate
              } else {
                versionedConfig.EffectiveDate = adoptionDate
              }
            })))
  }

  property get ContainerNames(): Set<String> {
    return ContainerKeys*.Name.toSet()
  }

  property get ContainerKeys(): Set<ContainerKey> {
    return _containerProperties.keySet()
  }

  protected function containerIdOf(element : XmlElement) : String {
    return element.getAttributeValue(_containerIdAttribute)
  }

  protected function propertyIdOf(element : XmlElement) : String {
    return element.getAttributeValue(_propertyIdAttribute)
  }

  protected function containerTypeOf(element : XmlElement) : String {
    return element.getAttributeValue(_containerTypeAttribute)
  }
}