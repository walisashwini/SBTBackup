package gw.sbt.artifacts.properties

uses gw.sbt.artifacts.ArtifactId
uses gw.sbt.artifacts.ArtifactType
uses org.slf4j.LoggerFactory

class ProductModelDisplayProperties extends DisplayProperties {

  enum DisplayPropertyType {
    NAME("Name"),
    DESCRIPTION("Description")

    var _displayKeyEnding : String as readonly DisplayKeyEnding

    private construct(displayKeyEnding : String) {
      _displayKeyEnding = displayKeyEnding
    }
  }

  var _productModelDisplayProperties: ArtifactDisplayProperties

  construct(content : byte[]) {
    super(content)
    initializeProductModelDisplayPropertiesCache()
  }

  construct(content : String) {
    this(content.Bytes)
  }

  override function addProperties(properties : byte[]) {
    super.addProperties(properties)
    initializeProductModelDisplayPropertiesCache()
  }

  override function assignProperties(properties : DisplayProperties) {
    super.assignProperties(properties)
    initializeProductModelDisplayPropertiesCache()
  }

  function extractPropertiesForArtifact(artifactId : ArtifactId) : ProductModelDisplayProperties {
    var artifactProperties = _productModelDisplayProperties.getFor(artifactId)
    return artifactProperties != null ? new ProductModelDisplayProperties(artifactProperties.Bytes) : this
  }

  private function initializeProductModelDisplayPropertiesCache() {
    LoggerFactory.getLogger("PCA").info("[Initializing Product Model Display Properties Cache]")
    _productModelDisplayProperties = new ArtifactDisplayProperties()
    PropertyNames.each(\ key -> {
      var artifactId = artifactIdForDisplayKey(key)

      if (artifactId != null) {
        _productModelDisplayProperties.merge(artifactId, DisplayProperties.fromMap({ key -> getProperty(key) }))
      }
    })

    LoggerFactory.getLogger("PCA").info("[Done initializing Product Model Display Properties Cache] - processed " + PropertyNames.Count + " properties")
  }

  private function artifactIdForDisplayKey(key : String) : ArtifactId {
    var artifactTypeAndIdMatch = key.match(".+\\.([^_]+)_([^_]+)\\.(Name|Description)")

    if (artifactTypeAndIdMatch == null) return null

    var patternType = artifactTypeAndIdMatch.get(0)
    var patternId = artifactTypeAndIdMatch.get(1)
    var artifactType = artifactTypeFor(patternType)

    return artifactType == null ? null : ArtifactId.make(artifactType, patternId)
  }

  private function artifactTypeFor(patternType : String) : ArtifactType {
    if ({"CoveragePattern", "ExclusionPattern", "ConditionPattern"}.contains(patternType))
      return CLAUSE
    else if (patternType == "CovTerm")
      return COV_TERM
    else if (patternType == "CovTermOpt")
      return COV_TERM_OPTION
    else if (patternType == "Modifier")
      return MODIFIER
    else
      return null
  }

  private function displayPropertyValueFor(artifactId : ArtifactId, propertyType : DisplayPropertyType) : String {
    var artifactProperties = _productModelDisplayProperties.getFor(artifactId)
    if (artifactProperties != null) {
      var propValue = valueOfProperty(artifactProperties, propertyType)
      if (propValue.HasContent) {
        return propValue
      }
    }
    LoggerFactory.getLogger("PCA").error("Either the description or name for ${artifactId.PublicId} is missing in the productmodel.display.properties file. The publicID will be used instead")
    return artifactId.PublicId
  }

  function valueOfProperty(properties : DisplayProperties, propertyType : DisplayPropertyType) : String {
    var key = properties.PropertyNames.firstWhere(\ name -> name.endsWith("." + propertyType.DisplayKeyEnding))
    return key == null ? null : properties.getProperty(key)
  }

  function getClauseDescriptionFor(codeIdentifier: String) : String {
    return displayPropertyValueFor(ArtifactId.make(CLAUSE, codeIdentifier), DESCRIPTION)
  }

  function getClauseNameFor(codeIdentifier: String) : String {
    return displayPropertyValueFor(ArtifactId.make(CLAUSE, codeIdentifier), NAME)
  }

  function getCovTermDescriptionFor(codeIdentifier: String) : String {
    return displayPropertyValueFor(ArtifactId.make(COV_TERM, codeIdentifier), DESCRIPTION)
  }

  function getCovTermNameFor(codeIdentifier: String) : String {
    return displayPropertyValueFor(ArtifactId.make(COV_TERM, codeIdentifier), NAME)
  }

  function getOptionDescriptionFor(optionPublicId : String) : String {
    return displayPropertyValueFor(ArtifactId.make(COV_TERM_OPTION, optionPublicId), DESCRIPTION)
  }

  function getBooleanDescriptionFor(value : boolean) : String {
    return value ? "true" : "false"
  }

  function toArtifactDisplayProperties() : ArtifactDisplayProperties {
    return _productModelDisplayProperties.copy()
  }

  function getModifierPatternNameFor(modifierPatternPublicId : String) : String {
    return displayPropertyValueFor(ArtifactId.make(MODIFIER, modifierPatternPublicId), NAME)
  }

  function getModifierPatternDescriptionFor(modifierPatternPublicId : String) : String {
    return displayPropertyValueFor(ArtifactId.make(MODIFIER, modifierPatternPublicId), DESCRIPTION)
  }

}