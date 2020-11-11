package gw.lob.common.statcode

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.lob.common.ConfigResource
uses gw.lob.common.exception.LobConfigException
uses gw.lob.common.statcode.schemas.stat_code_config.StatCodeConfig
uses gw.lob.common.statcode.schemas.stat_code_config.anonymous.elements.AbstractConfigType_Container

class StatCodeConfiguration extends ConfigResource {
  static final var CONFIG_SUFFIX = "-stat-code-config.xml"
  var _statCodeMap : Map<String, List<StatCodeMeta>> = new HashMap<String, List<StatCodeMeta>>()

  construct(configPath : String= "") {
    super (configPath)
    initConfig()
  }

  function findStatCodes(containerName : String) : List<StatCodeMeta> {
    return _statCodeMap.get(containerName)
  }

  private function initConfig() {
    if (ConfigDir == null) {
      throw new LobConfigException(ConfigPath, "Configuration path not found")
    }

    var statCodeConfigFiles = ConfigDir.listFiles().where(\file -> file.Name.endsWith(CONFIG_SUFFIX))

    statCodeConfigFiles.each(\file -> {
      var statCodeConfig = StatCodeConfig.parse(file)
      _statCodeMap.putAll(mapStatCodeContainer(statCodeConfig))
    })
  }

  private function mapStatCodeContainer(root : StatCodeConfig) : Map<String, List<StatCodeMeta>> {
    return root.Container.mapToKeyAndValue(\containter -> containter.Name, \container -> mapContainerToStateProperty(container))
  }

  private function mapContainerToStateProperty(container : AbstractConfigType_Container) : List<StatCodeMeta> {
    var statCodes = container.StatCode?.map(\statCode -> {
      var version = statCode.Version.firstWhere(\version -> version.Jurisdiction == null or version.Jurisdiction == COUNTRY_WIDE)
      var available = version.Available ?: true
      return new StatCodeMeta() {:SourceDTOProperty = statCode.DtoProperty, :TargetEntityPropery = version.TargetEntity.AccessorProperty, :Available = available}
    })
    return statCodes
  }

  static class StatCodeMeta {
    var _sourceDTOProperty : String as SourceDTOProperty
    var _targetEntityProperty : String as TargetEntityPropery
    var _available : boolean as Available
  }
}