package gw.lob.common.validation

uses gw.api.upgrade.Coercions
uses gw.lob.common.AbstractDependencyConfiguration
uses gw.lob.common.ConfigResource
uses gw.lob.common.dependency.EffectiveJurisdictionCriteria
uses gw.lob.common.dependency.PropertyTypeInfo
uses gw.lob.common.exception.LobConfigException
uses gw.lob.common.util.StateProperty
uses gw.lob.common.util.XmlConfigUtil
uses gw.lob.common.validation.schema.validation_config.ValidationConfig
uses gw.lob.common.validation.schema.validation_config.anonymous.elements.AbstractConfigType_Container
uses gw.lob.common.validation.schema.validation_config.anonymous.elements.ContainerType_Property
uses gw.lob.common.validation.schema.validation_config.anonymous.elements.PropertyVersionType_RangeValidator
uses gw.xml.XmlElement
uses org.apache.commons.lang3.StringUtils

class ValidationConfiguration extends AbstractDependencyConfiguration {

  static final var NAME = "name"
  static final var CONFIG_SUFFIX = "-validation-config.xml"

  var _containerValidatorMap = new HashMap<String, StateProperty<List<BaseValidator>>>()
  var _propertyValidatorMap = new HashMap<String, Map<String, StateProperty<List<BaseValidator>>>>()

  construct(configPath : String= "") {
    super (configPath)
    initConfig()
  }

  function findContainerValidators(containerName : String, criteria : EffectiveJurisdictionCriteria) : List<BaseValidator> {
    return _containerValidatorMap.get(containerName)?.getStateOrCWValue(criteria)
  }

  function findPropertyValidators(containerName : String, propertyName : String, criteria : EffectiveJurisdictionCriteria) : List<BaseValidator> {
    return _propertyValidatorMap.get(containerName)?.get(propertyName)?.getStateOrCWValue(criteria)
  }

  function findAllPropertyValidators(containerName : String, criteria : EffectiveJurisdictionCriteria): Map<String, List<BaseValidator>> {
    var results = new HashMap<String, List<BaseValidator>>()
    _propertyValidatorMap.get(containerName)?.eachKeyAndValue(\key, val -> {
      var validators = val.getStateOrCWValue(criteria)
      if (validators.HasElements) {
        results.put(key, validators)
      }
    })
    return results
  }

  /**
   * return true if there is any property depending on this property
   */
  function hasDependants(containerName: String, propertyName: String, criteria: EffectiveJurisdictionCriteria): boolean  {
    return findDependentProperties(containerName, propertyName, criteria).HasElements
  }

  /**
   * return property of all the dependents
   */
  function findDependentProperties(containerName: String, propertyName: String, criteria: EffectiveJurisdictionCriteria) : Set<PropertyTypeInfo> {
    return _dependentProperties.get(new PropertyTypeInfo(propertyName, containerName))
        .getStateAndCWValue(criteria)
        .flatten()
        .toSet()
  }

  private function initConfig() {
    if (ConfigDir == null) {
      throw new LobConfigException(ConfigPath, "Configuration path not found")
    }

    var validationConfigFiles = ConfigDir.listFiles().where(\file -> file.Name.endsWith(CONFIG_SUFFIX))

    validationConfigFiles.each(\file -> {
      var validation = ValidationConfig.parse(file)
      _containerValidatorMap.putAll(mapContainerValidation(validation))
      _propertyValidatorMap.putAll(mapPropertyValidation(validation))
    })
  }

  /**
   * Convert validation xml to container validation map
   * { "container name" -> StateProperty<List<Validator>> }
   */
  private function mapContainerValidation(root : XmlElement) : Map<String, StateProperty<List<BaseValidator>>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return node.getAttributeValue(NAME)
          } else {
            return node.$QName.toString()
          }
        },
        \node -> node typeis AbstractConfigType_Container ? registerContainer(node) : null
    )
    return result as Map<String, StateProperty<List<BaseValidator>>>
  }

  /**
   * Convert validation xml to property availability map
   * { "typed container name" -> {
   * "property name" -> StateProperty<List<Validator>>}}
   */
  private function mapPropertyValidation(root : XmlElement) : Map<String, Map<String, StateProperty<List<BaseValidator>>>> {
    var result = XmlConfigUtil.mapXmlElement(root,
        \node -> {
          if (node typeis ContainerType_Property || node typeis AbstractConfigType_Container) {
            return node.getAttributeValue(NAME)
          }
          return null
        },
        \node -> {
          if (node typeis AbstractConfigType_Container) {
            return (node as AbstractConfigType_Container).Property.mapToKeyAndValue(
                \propertyNode -> propertyNode.getAttributeValue(NAME),
                \propertyNode -> registerProperty(node.getAttributeValue(NAME), propertyNode))
          }
          return null
      }
    )
    return result as Map<String, Map<String, StateProperty<List<BaseValidator>>>>
  }

  private function registerContainer(container : AbstractConfigType_Container) : StateProperty<List<BaseValidator>> {
    var stateProperty = new StateProperty<List<BaseValidator>>()

    var cwValidators = container.Version
        .firstWhere(\version -> version.Jurisdiction == null or version.Jurisdiction == ConfigResource.COUNTRY_WIDE)
        .getValidator()?.map(\elt -> new CustomValidator(getValidatorValue(elt.$TypeInstance), elt.getQuoteTime()))

    container.Version.each(\version -> {
      var jurisdiction = version.Jurisdiction?:ConfigResource.COUNTRY_WIDE
      var available = version.Available ?: true
      var stateValidators = version.getValidator()?.map(\elt -> new CustomValidator(getValidatorValue(elt.$TypeInstance), elt.getQuoteTime()))

      //TODO: remove once the configuration has the merge the state and cw validators so that the state configuration
      // is easily modified (eg. To make it possible to not call a cw validator for a state)
      if (cwValidators != null and cwValidators.HasElements) {
        var uniqueCWValidators = findUniqueCWValidators(stateValidators, cwValidators)
        stateValidators.addAll(uniqueCWValidators)
      }

      stateProperty.addStateValue(stateValidators, jurisdiction, Coercions.makeDateFrom(version.EffectiveDate), Coercions.makeDateFrom(version.ExpiryDate), available)
    })

    return stateProperty
  }

  private function registerProperty(containerName : String, propertyNode : ContainerType_Property) : StateProperty<List<BaseValidator>> {
    var stateProperty = new StateProperty<List<BaseValidator>>()
    var name = propertyNode.getAttributeValue(NAME)
    propertyNode.Version.each(\version -> {
      var jurisdiction = version.Jurisdiction?:ConfigResource.COUNTRY_WIDE
      var available = version.Available ?: true
      var rangeValidator = convertRangeValidator(version.RangeValidator, \typeInfo -> {
        final var dependentStateProperty = _dependentProperties.get(typeInfo)

        var dependentProperties : Set<PropertyTypeInfo>
        var criteria = new EffectiveJurisdictionCriteria (jurisdiction, version.EffectiveDate.Date)

        if (dependentStateProperty.hasStateValue(criteria)) {
          dependentProperties = dependentStateProperty.getStateOrCWValue(criteria)
        } else {
          dependentProperties = new HashSet<PropertyTypeInfo>()
          _dependentProperties.get(typeInfo).addStateValue(dependentProperties, jurisdiction, version.EffectiveDate.Date)
        }
        dependentProperties.add(new PropertyTypeInfo(name, containerName))
      })
      if (rangeValidator.HasElements) {
        stateProperty.addStateValue(rangeValidator, jurisdiction, version.EffectiveDate.Date, version.ExpiryDate.Date, available)
      }
    })
    return stateProperty
  }

  private function findUniqueCWValidators(stateValidators : List<CustomValidator>, cwValidators : List<CustomValidator>) : List<CustomValidator> {
    return cwValidators.where(\cwValidator -> {
      var cwValidatorName = getValidatorClassPath(cwValidator)
      return not stateValidators.hasMatch(\stateValidator -> {
        var stateValidatorName = getValidatorClassPath(stateValidator)
        return stateValidatorName == cwValidatorName
      })
    })
  }

  private function getValidatorClassPath(validator : CustomValidator) : String {
    return StringUtils.substringAfterLast(validator.ClassPath, ".")
  }

  private function getValidatorValue(validator : gw.lob.common.validation.schema.validation_config.types.complex.Validator) : String {
    return validator.$MixedContent.first()?.toString()
  }

  private function convertRangeValidator(rangeValidator : PropertyVersionType_RangeValidator, propHandler (typeInfo: PropertyTypeInfo)) : List<BaseValidator> {
    var result = new ArrayList<BaseValidator>()
    var depends = rangeValidator.Depends?.On?.mapToKeyAndValue(\on -> on.Column, \on -> {
      propHandler(new PropertyTypeInfo(on.Path))
      return on.Path
    })
    if (depends != null && !depends.isEmpty())
      result.add(new RangeValidator(rangeValidator.QuoteTime, rangeValidator.Table, depends))
    return result
  }
}