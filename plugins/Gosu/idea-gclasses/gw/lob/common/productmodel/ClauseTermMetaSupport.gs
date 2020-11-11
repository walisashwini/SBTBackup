package gw.lob.common.productmodel

uses gw.api.domain.covterm.CovTerm

/**
 * Support class that brings together extensions for product model similar to LobFieldMeta for data model.
 */
class ClauseTermMetaSupport {

  static var _instance : ClauseTermMetaSupport as readonly Instance = new ClauseTermMetaSupport()

  var _config : ClauseTermMetaConfig

  construct() {
    _config = new ClauseTermMetaConfig()
  }

  internal construct(configPath : String) {
    _config = new ClauseTermMetaConfig(configPath)
  }

  function findClauseTermMeta(covTerm : CovTerm) : ClauseTermMetaExtension {
    var jurisdiction = covTerm.Clause.OwningCoverable.EffectiveState.Code
    var effDate = covTerm.Clause.EffectiveDate
    return _config.findClauseTermMeta(covTerm.Clause.Pattern.CodeIdentifier, covTerm.Pattern.CodeIdentifier, jurisdiction, effDate)
  }

}