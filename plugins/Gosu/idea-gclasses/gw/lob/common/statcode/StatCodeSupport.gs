package gw.lob.common.statcode

class StatCodeSupport {
  static var _instance : StatCodeSupport as readonly Instance = new StatCodeSupport()
  final var _lineLevelStatCodeDeviationConfig : StatCodeConfiguration

  construct() {
    _lineLevelStatCodeDeviationConfig = new StatCodeConfiguration()
  }

  construct(configPath : String) {
    _lineLevelStatCodeDeviationConfig = new StatCodeConfiguration(configPath)
  }

  function findTargetPropertyForStatCode(containerName : String, statCodeName : String) : String {
    return _lineLevelStatCodeDeviationConfig.findStatCodes(containerName)
        ?.firstWhere(\statCodeMeta -> statCodeMeta.SourceDTOProperty == statCodeName)
        .TargetEntityPropery
  }
}