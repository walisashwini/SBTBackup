package gw.lob.common

uses com.guidewire.commons.config.APIConfigFileAccess

uses java.io.File

abstract class ConfigResource {
  public static final var CONFIG_FILE_PATH : String = "config/resources"
  public static final var COUNTRY_WIDE : String = "CW"

  protected var _configDir : File as readonly ConfigDir
  protected var _configPath : String as readonly ConfigPath

  protected construct () {
    this(CONFIG_FILE_PATH)
  }

  protected construct (configPath : String) {
    initialize(configPath)
  }

  protected function initialize(configPath : String) {
    var evaluatedConfigPath= configPath.Empty? CONFIG_FILE_PATH : configPath
    _configPath= evaluatedConfigPath
    _configDir = APIConfigFileAccess.INSTANCE.getConfigFile(evaluatedConfigPath)
  }
}