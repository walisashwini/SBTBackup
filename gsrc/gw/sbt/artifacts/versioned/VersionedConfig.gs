package gw.sbt.artifacts.versioned

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.util.LoaderUtil
uses gw.xml.XmlElement
uses java.util.Date
uses gw.sbt.util.Formatter
uses gw.sbt.util.XmlUtil
uses org.slf4j.LoggerFactory
uses javax.xml.namespace.QName

class VersionedConfig extends XmlContent {

  var _jurisdiction : String as Jurisdiction
  var _effectiveDate : Date as EffectiveDate
  var _expiryDate : Date as ExpiryDate
  var _available : boolean as Available

  var _configType : ContainerPropertyConfigType as ConfigurationFileType

  construct(content : byte[], configType: ContainerPropertyConfigType) {
    super(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
    init()
    _configType = configType
  }

  construct(content: XmlElement, configType: ContainerPropertyConfigType) {
    super(content)
    init()
    _configType = configType
  }

  construct(content: XmlElement, configType: ContainerPropertyConfigType, xmlDeclarations : String) {
    super(content, xmlDeclarations)
    init()
    _configType = configType
  }

  private function init() {
    _jurisdiction = getChild("Jurisdiction")?.$Text
    var effectiveDateInStr = getChild("EffectiveDate").$Text
    _effectiveDate = effectiveDateInStr.HasContent ? Formatter.stringToDate(effectiveDateInStr) : null
    var expiryDateInStr = getChild(ExpiryDateTagName).$Text
    _expiryDate = expiryDateInStr.HasContent ? Formatter.stringToDate(expiryDateInStr) : null
    var availableText = getChild("Available")?.$Text
    _available = (availableText != null and availableText.HasContent) ? availableText.toBoolean() : true  // default to true
  }

  protected property get ExpiryDateTagName() : String {
    return "ExpiryDate"
  }

  property set Jurisdiction(jurisdiction : String) {
    _jurisdiction = jurisdiction
    setElementValue("Jurisdiction", jurisdiction)
  }

  property set EffectiveDate(date : Date) {
    if (date == null) {
      _effectiveDate = null
      setElementValue("EffectiveDate", "")
    } else {
      var expiryDate = ExpiryDate
      if (expiryDate != null and date.after(expiryDate)) {
        LoggerFactory.getLogger("PCA").error("Can't set EffectiveDate later than ${ExpiryDateTagName} for version: ${Xml.asUTFString()}")
      } else {
        _effectiveDate = date
        setElementValue("EffectiveDate", Formatter.dateToString(date, "yyyy-MM-dd"))
      }
    }
  }

  property set ExpiryDate(date : Date) {
    if (date == null) {
      _expiryDate = null
      setElementValue(ExpiryDateTagName, "")
    } else {
      var effectiveDate = EffectiveDate
      if (effectiveDate != null and effectiveDate.after(date)) {
        LoggerFactory.getLogger("PCA").error("Can't set ${ExpiryDateTagName} earlier than EffectiveDate for Version: ${Xml.asUTFString()}")
      } else {
        _expiryDate = date
        setElementValue(ExpiryDateTagName, Formatter.dateToString(date, "yyyy-MM-dd"))
      }
    }
  }

  property set Available(value : boolean) {
    _available = value
    setElementValue("Available", value as String)
  }

  function copy(): VersionedConfig {
    return new VersionedConfig(XmlUtil.copyElement(_content),ConfigurationFileType, XmlDeclarations)
  }

  /**
   * The key difference here is that "being expired" treats an entry to be expired even if the adoption date is the
   * same as the expiry date.
   *
   * @param adoptionDate
   * @return
   */
  function isBeingExpired(adoptionDate : Date) : boolean {
    return ExpiryDate != null and adoptionDate.afterOrEqual(ExpiryDate)
  }

  //get effective version by adoption date and jurisdiciton.
  static function getEffectiveVersionFor(versionList: List<VersionedConfig>, adoptionDate : Date, jurisdiction : String) : VersionedConfig {
    if (versionList.HasElements) {
      var effectiveVersionForJurisdiction = versionList.firstWhere(\version -> version.Jurisdiction == jurisdiction and LoaderUtil.isDateWithinRange(adoptionDate, version.EffectiveDate, version.ExpiryDate))
      if (effectiveVersionForJurisdiction != null) {
        return effectiveVersionForJurisdiction
      } else {
        return getCountryWideVersion(versionList)
      }
    }
    return null
  }

  static function getCountryWideVersion(versionList: List<VersionedConfig>) : VersionedConfig {
    //should have only one countrywide version
    return versionList?.firstWhere(\version -> LoaderUtil.isJurisdictionCW(version.Jurisdiction))
  }

  static function isVersionDifferent(versionOne : VersionedConfig, versionTwo : VersionedConfig, ignoredElementList : List<String> = {"EffectiveDate", "Jurisdiction"}) : boolean {
    return not XmlUtil.compareXmlElements(versionOne.Xml, versionTwo.Xml, ignoredElementList)
  }

  override function setElementValue(elementName: String, value: String) {
    if (not ElementNames.contains(elementName)) {
      //throw the exception to raise the issue (the version element list might be changed)
      //shouldn't happen, unless configuration file's XSD introduces new elements.
      var validElementNames = String.join(", ", ElementNames)
      throw "${elementName} is not a pre-defined element for ${ConfigurationFileType.ConfigFile}, expecting one of ${validElementNames}"
    }
    if (value == null or value.Empty) { // if value is null/empty, need to remove this element
      //currently for configuration files, only expiryDate might be set to null
      _content.removeChild(new QName(_namespace, elementName))
    } else {
      var elementXml = _content.getChild(new QName(_namespace, elementName))
      if (elementXml == null) {
        // If the element does not exist in current content, create this missing element in proper order
        // 'createVersionElementsInProperSequence()' will be invoked only one time for a particular 'VersionConfig'
        createMissingVersionElementInProperPosition(elementName)
      }
      super.setElementValue(elementName, value)
    }
  }

  //Create this missing element in proper position
  private function createMissingVersionElementInProperPosition(missingElementName : String) {
    var elementsList : List<XmlElement> = {}
    ElementNames.each(\elementName -> {
      var existingElements = _content.removeChildren(elementName) // might be an array for an element type
      if (existingElements != null and existingElements.HasElements) {
        elementsList.addAll(existingElements)         // add the existing elements into the list
      } else if (missingElementName == elementName) { // only add if this is the missing element.
        elementsList.add(new XmlElement(elementName)) // create an empty element, and add into the list
      }
    })
    //populate the children elements with the list, which has the missing element in the proper position
    elementsList.each(\element -> _content.addChild(element))
  }

  //Overridden by some configuration files.
  property get ElementNames() : List<String> {
    return ConfigurationFileType.VersionElements
  }

  //below are only used in test cases
  property get EffectiveDateInStr() : String {
    return dateStringFor("EffectiveDate")
  }

  property get ExpiryDateInStr() : String {
    return dateStringFor(ExpiryDateTagName)
  }

  private function dateStringFor(childTagName : String) : String {
    return getChild(childTagName)?.$Text ?: ""
  }
}