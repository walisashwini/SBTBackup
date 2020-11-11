package gw.sbt.config

uses gw.sbt.artifacts.entities.LobFieldMeta
uses gw.sbt.artifacts.gosu.GosuFile
uses gw.sbt.artifacts.pcf.PcfFile
uses gw.sbt.artifacts.plugin.PluginFile
uses gw.sbt.artifacts.valuedependency.ValueDependencyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfig
uses gw.sbt.artifacts.versioned.ContainerPropertyConfigType
uses gw.sbt.artifacts.xsd.XsdFile
uses gw.xml.XmlElement

abstract class ConfigFileContentsDelegate implements FileConfigContents {

  override function getContainerPropertyConfig(type : ContainerPropertyConfigType) : ContainerPropertyConfig {
    switch (type) {
      case LOB_FIELD_META:
        return LobFieldMetaConfig
      case AVAILABILITY_CONFIG:
        return AvailabilityConfig
      case EXISTENCE_CONFIG:
        return ExistenceConfig
      case FORM_INFERENCE_CONFIG:
        return FormInferenceConfig
      case VALIDATION_CONFIG:
        return ValidationConfig
      case PRODUCTMODEL_EXTENSION:
        return ProductModelExtension
      case SYNC_PROPERTY_META:
        return SyncPropertyMeta
      case STAT_CODE_CONFIG:
        return StatCodeConfig
      case MODEL_MAPPING_CONFIG:
        return ModelMappingConfig
      case SUSPENSION_CONFIG:
        return SuspensionConfig
      default:
        throw "Unknown configuration type ${type.Name}"
    }
  }

  override function getXsdFile(fullName: String, fileExtension: String): XsdFile {
    return withContentOf(ConfigurationFile.xsdFile(fullName, fileExtension), \ content ->
        new XsdFile(fullName, fileExtension, content))
  }

  override function getPluginFile(fullName: String, fileExtension: String) : PluginFile {
    return withContentOf(ConfigurationFile.pluginFile(fullName, fileExtension), \ content ->
        new PluginFile(fullName, fileExtension, content))
  }

  override function getPcfFile(filePath : String, fileName : String) : PcfFile {
    return withContentOf(ConfigurationFile.pcfFile(filePath, fileName), \ content ->
        new PcfFile(filePath, fileName, content))
  }

  override function getGosuFile(fullName: String, fileExtension: String): GosuFile {
    return withContentOf(ConfigurationFile.gosuFile(fullName, fileExtension), \ content ->
        new GosuFile(fullName, fileExtension, content))
  }

  override property get ValueDependencyConfig(): ValueDependencyConfig {
    return withContentOf(ConfigurationFile.valueDependencyConfig(ProductAbbreviation), \ content ->
        new ValueDependencyConfig(content))
  }

  override property get LobFieldMetaConfig() : LobFieldMeta {
    var configFile = ConfigurationFile.lobFieldMetaConfig(ProductAbbreviation)
    return withContentOf(configFile, \ content -> new LobFieldMeta(content, configFile.Name))
  }

  property get AvailabilityConfig() : ContainerPropertyConfig {
    return readContainerPropertyConfig(ConfigurationFile.getContainerPropertyConfig(AVAILABILITY_CONFIG, ProductAbbreviation))
  }

  property get ModelMappingConfig() : ContainerPropertyConfig {
    return readContainerPropertyConfig(ConfigurationFile.getContainerPropertyConfig(MODEL_MAPPING_CONFIG, ProductAbbreviation))
  }

  property get SuspensionConfig() : ContainerPropertyConfig {
    return readContainerPropertyConfig(ConfigurationFile.getContainerPropertyConfig(SUSPENSION_CONFIG, ProductAbbreviation),
        ContainerPropertyConfigType.SUSPENSION_CONFIG.ContainerIdAttribute,
        ContainerPropertyConfigType.SUSPENSION_CONFIG.ContainerTypeAttribute,
        ContainerPropertyConfigType.SUSPENSION_CONFIG.PropertyIdAttribute)
  }

  property get ExistenceConfig() : ContainerPropertyConfig {
    return readContainerPropertyConfig(ConfigurationFile.getContainerPropertyConfig(EXISTENCE_CONFIG, ProductAbbreviation))
  }

  property get ValidationConfig( ): ContainerPropertyConfig {
    return readContainerPropertyConfig(ConfigurationFile.getContainerPropertyConfig(VALIDATION_CONFIG, ProductAbbreviation))
  }

  property get SyncPropertyMeta() : ContainerPropertyConfig {
    return readContainerPropertyConfig(
        ConfigurationFile.getContainerPropertyConfig(SYNC_PROPERTY_META, ProductAbbreviation),
        ContainerPropertyConfigType.SYNC_PROPERTY_META.ContainerIdAttribute,
        ContainerPropertyConfigType.SYNC_PROPERTY_META.ContainerTypeAttribute,
        ContainerPropertyConfigType.SYNC_PROPERTY_META.PropertyIdAttribute)
  }

  property get StatCodeConfig() : ContainerPropertyConfig {
    return readContainerPropertyConfig(
        ConfigurationFile.getContainerPropertyConfig(STAT_CODE_CONFIG, ProductAbbreviation),
        ContainerPropertyConfigType.STAT_CODE_CONFIG.ContainerIdAttribute,
        ContainerPropertyConfigType.STAT_CODE_CONFIG.ContainerTypeAttribute,
        ContainerPropertyConfigType.STAT_CODE_CONFIG.PropertyIdAttribute)
  }

  property get FormInferenceConfig() : ContainerPropertyConfig {
    return readContainerPropertyConfig(
        ConfigurationFile.getContainerPropertyConfig(FORM_INFERENCE_CONFIG, ProductAbbreviation),
         ContainerPropertyConfigType.FORM_INFERENCE_CONFIG.ContainerIdAttribute,
        ContainerPropertyConfigType.FORM_INFERENCE_CONFIG.ContainerTypeAttribute,
        ContainerPropertyConfigType.FORM_INFERENCE_CONFIG.PropertyIdAttribute)
  }

  property get ProductModelExtension() : ContainerPropertyConfig {
    return readContainerPropertyConfig(
        ConfigurationFile.getContainerPropertyConfig(PRODUCTMODEL_EXTENSION, ProductAbbreviation),
        ContainerPropertyConfigType.PRODUCTMODEL_EXTENSION.ContainerIdAttribute,
        ContainerPropertyConfigType.PRODUCTMODEL_EXTENSION.ContainerTypeAttribute,
        ContainerPropertyConfigType.PRODUCTMODEL_EXTENSION.PropertyIdAttribute)
  }

  override property get StateSpecificXml() : XmlElement {
    var content = contentOf(ConfigurationFile.stateSpecificXml(ProductAbbreviation))
    return content != null and content.length > 0 ? XmlElement.parse(content) : null
  }

  private function readContainerPropertyConfig(file : ConfigurationFile)
      : ContainerPropertyConfig {
    return withContentOf(file, \content -> new ContainerPropertyConfig(content, file.Name))
  }

  private function readContainerPropertyConfig(file : ConfigurationFile, containerIdAttribute : String, containerTypeAttribute : String, propertyIdAttribute : String)
      : ContainerPropertyConfig {
    return withContentOf(file, \content -> new ContainerPropertyConfig(content, file.Name, containerIdAttribute, containerTypeAttribute, propertyIdAttribute))
  }

  private reified function withContentOf<T>(file : ConfigurationFile, parseContent(content : byte[]) : T) : T {
    var content = contentOf(file)
    return contentExists(content) ? parseContent(content) : null
  }

  abstract protected function contentOf(file : ConfigurationFile) : byte[]

  abstract protected function contentExists(content : byte[]) : boolean

  abstract protected property get ProductAbbreviation() : String
}