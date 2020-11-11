package gw.lob.common.productmodel

uses com.guidewire.commons.config.APIConfigFileAccess
uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.exception.LobConfigException
uses gw.lob.common.productmodel.scheme.clause_extension_config.ClauseTermMeta
uses gw.lob.common.productmodel.scheme.clause_extension_config.anonymous.elements.ClauseTermMetaType_Clause
uses gw.lob.common.productmodel.scheme.clause_extension_config.anonymous.elements.ClauseType_Term
uses gw.lob.common.productmodel.scheme.clause_extension_config.anonymous.elements.TermType_Version
uses gw.lob.common.util.StateProperty
uses gw.lob.common.util.XmlConfigUtil
uses gw.xml.XmlElement

uses java.util.Date
uses java.util.HashMap
uses java.util.Map

/**
 * Clause term configuration class holding config file for the clause terms.
 */
class ClauseTermMetaConfig extends ConfigResource {
  static final var CODE_IDENTIFIER = "codeIdentifier"

  var _configName = "productmodel-extension.xml"
  var _clauseToTerm : Map<String, Map<String, StateProperty<TermType_Version>>>

  construct() {
    super ()
    initConfig()
  }

  internal construct(overrideConfigPath : String) {
    super (overrideConfigPath)
    initConfig()
  }

  function findClauseTermMeta(clausePattern: String, termPattern: String, jurisdiction : String, effDate : Date = null) : ClauseTermMetaExtension {
    if (clausePattern.HasContent and termPattern.HasContent and jurisdiction.HasContent) {
      if (_clauseToTerm.containsKey(clausePattern)) {
        var termEntry = _clauseToTerm.get(clausePattern)
        if (termEntry.containsKey(termPattern)) {
          var stateProperty = termEntry.get(termPattern)
          var termVersion = stateProperty.getStateOrCWValue(new EffectiveJurisdictionCriteria (jurisdiction, effDate))
          if(termVersion != null) {
            var clauseTerm = new ClauseTermMetaExtension(termVersion, clausePattern, termPattern)
            return clauseTerm
          }
        }
      }
    }
    return null
  }

  final internal function initConfig(configPath : String = ConfigResource.CONFIG_FILE_PATH) {
    _clauseToTerm = new HashMap<String, Map<String, StateProperty<TermType_Version>>>();
    if (ConfigDir == null) {
      throw new LobConfigException(configPath, "Configuration path not found")
    }
    var clauseExtensionFiles = ConfigDir.listFiles().where( \ file -> file.Name.endsWith(_configName))
    clauseExtensionFiles.each(\file -> {
      var clauseMeta = ClauseTermMeta.parse(file)
      _clauseToTerm.putAll(mapFieldMeta(clauseMeta))
    })
  }

  internal function convertToStateProperty(term : ClauseType_Term) : StateProperty<TermType_Version> {
    var stateProperty = new StateProperty<TermType_Version>()
    term.Version.each( \ ver -> {
      var effDate = ver.EffectiveDate
      var expDate = ver.ExpiryDate
      var jurisdiction = ver.Jurisdiction ?: ConfigResource.COUNTRY_WIDE
      var available = ver.Available ?: true
      stateProperty.addStateValue(ver, jurisdiction, effDate.Date, expDate.Date, available)
    })
    return stateProperty
  }

  /**
   * Convert metadata to map
   * { "clause patter-code" -> {
   *      "term pattern-code" -> StateProperty<TermType_Version>}}
   */
  private function mapFieldMeta(root: XmlElement): Map<String, Map<String, StateProperty<TermType_Version>>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \ node -> {
          if (( node typeis ClauseType_Term) or (node typeis ClauseTermMetaType_Clause)) {
            return node.getAttributeValue(CODE_IDENTIFIER)
          } else {
            return node.$QName.toString()
          }
        },
        \ node -> (node typeis ClauseType_Term) ? convertToStateProperty(node as ClauseType_Term) : null
    )
    return result as Map<String, Map<String, StateProperty<TermType_Version>>>
  }
}