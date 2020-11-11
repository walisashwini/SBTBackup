package gw.sbt.artifacts.clauses

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.sbt.model.clause.DataType
uses gw.sbt.util.Formatter
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement

uses java.math.BigDecimal
uses java.util.List

class PolicyCovTermPattern extends XmlContent implements HasPublicId {

  construct(content : byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content : XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  static function newGenericCovTermPattern() : PolicyCovTermPattern {
    var xml = "<GenericCovTermPattern></GenericCovTermPattern>"
    return new PolicyCovTermPattern(xml.Bytes)
  }

  static property get ComparableAttributes() : List<String> {
    return {
      "aggregationModel",
      "choiceLookupTableName",
      "lookupTableName",
      "modelType",
      "priority",
      "required",
      "restrictionModel",
      "valueType"
    }
  }

  override property get PublicId() : String {
    return _content.getAttributeValue("public-id")
  }

  property get Required() : String {
    return _content.getAttributeValue("required")
  }

  property set Required(required : String) {
    _content.setAttributeValue("required", required)
  }

  property get CovTermDataType() : DataType {
    var covTermPattern = _content.$QName.LocalPart
    switch (covTermPattern) {
      case "OptionCovTermPattern":
        return DataType.OPTION
      case "GenericCovTermPattern":
        return extractGenericCovTermDataType(_content.getAttributeValue("coverageColumn"))
      case "DirectCovTermPattern":
        return DataType.NUMERIC
      default:
        return DataType.UNKNOWN
    }
  }

  property get CovTermValueType() : String {
    return _content.getAttributeValue("valueType")
  }

  property set CovTermValueType(valueType : String) {
    _content.setAttributeValue("valueType", valueType)
  }

  private function extractGenericCovTermDataType(columnName : String) : DataType {
    if (columnName.contains("String")) return DataType.TEXT
    if (columnName.contains("Boolean")) return DataType.BOOLEAN
    if (columnName.contains("Date")) return DataType.DATE
    throw "Unknown value type of: " + columnName
  }

  property get Default() : String {
    return getAttributeValueForPath(DefaultAttributeXmlPath, "defaultValue")
  }

  property set Default(defaultValue : String) {
    setAttributeValueForPath(DefaultAttributeXmlPath, "defaultValue", defaultValue)
  }

  private property get DefaultAttributeXmlPath() : List<String> {
    switch (_content.$QName.LocalPart) {
      case "OptionCovTermPattern":
        return {"DefaultsSet", "CovTermDefault"}
      case "DirectCovTermPattern":
        return {"LimitsSet", "CovTermLimits"}
      case "GenericCovTermPattern":
      case "PackageCovTermPattern":
        return {}
      default:
        return {}
    }
  }

  property get CodeIdentifier() : String {
    return _content.getAttributeValue("codeIdentifier")
  }

  property get Priority() : int {
    return _content.getAttributeValue("priority").toInt()
  }

  property set Priority(priority : int) {
    _content.setAttributeValue("priority", String.valueOf(priority))
  }

  property get MinVal() : BigDecimal {
    return extractCovTermMinMaxValue("minVal")
  }

  property set MinVal(value : BigDecimal) {
    setCovTermMinMaxValue("minVal", value)
  }

  property get MaxVal() : BigDecimal {
    return extractCovTermMinMaxValue("maxVal")
  }

  property set MaxVal(value : BigDecimal) {
    setCovTermMinMaxValue("maxVal", value)
  }

  property get CoverageColumn() : String {
    return _content.getAttributeValue("coverageColumn")
  }

  property set CoverageColumn(coverageColumn : String) {
    _content.setAttributeValue("coverageColumn", coverageColumn)
  }

  private function extractCovTermMinMaxValue(attributeName : String) : BigDecimal {
    return getAttributeValueForPath({"LimitsSet", "CovTermLimits"}, attributeName)?.toBigDecimal()
  }

  private function setCovTermMinMaxValue(attributeName : String, value : BigDecimal) {
    setAttributeValueForPath({"LimitsSet", "CovTermLimits"}, attributeName, String.valueOf(value))
  }

  property get CovTermLimits() : List<CovTermLimitsPattern> {
    var limitsSetXml = _content.getChild("LimitsSet")
    if (limitsSetXml == null) {
      return {}
    }
    return limitsSetXml.getChildren("CovTermLimits")?.map(\xml -> new CovTermLimitsPattern(xml, XmlDeclarations))
  }

  property get CovTermDefaults() : List<CovTermDefaultPattern> {
    var defaultsSetXml = _content.getChild("DefaultsSet")
    if (defaultsSetXml == null) {
      return {}
    }
    return defaultsSetXml.getChildren("CovTermDefault")?.map(\xml -> new CovTermDefaultPattern(xml, XmlDeclarations))
  }

  function addCovTermLimits(limits : CovTermLimitsPattern) {
    var limitsSetXml = _content.getChild("LimitsSet")
    if(limitsSetXml == null) {
      limitsSetXml = new XmlElement("LimitsSet")
      _content.addChild(limitsSetXml)
    }

    limitsSetXml.addChild(XmlUtil.copyElement(limits.Xml))
  }

  function addCovTermDefaults(defaultPattern : CovTermDefaultPattern) {
    var defaultsSetXml = _content.getChild("DefaultsSet")
    if (defaultsSetXml == null) {
      defaultsSetXml = new XmlElement("DefaultsSet")
      _content.addChild(defaultsSetXml)
    }

    defaultsSetXml.addChild(XmlUtil.copyElement(defaultPattern.Xml))
  }

  function removeCovTermLimits() {
    var limitsSetXml = _content.getChild("LimitsSet")
    if (limitsSetXml != null) {
      limitsSetXml.removeChildren("CovTermLimits")
    }
  }

  function removeCovTermDefaults() {
    var defaultsSetXml = _content.getChild("DefaultsSet")
    if (defaultsSetXml != null) {
      defaultsSetXml.removeChildren("CovTermDefault")
    }
  }

  property get Options() : List<PolicyCovTermOptionPattern> {
    var covTermOptionsXml = _content.getChild("Options")
    if (covTermOptionsXml == null) {
      return {}
    }
    return covTermOptionsXml.getChildren("CovTermOpt")?.map(\optionXml -> new PolicyCovTermOptionPattern(optionXml, XmlDeclarations))
  }

  function getOptionByCode(code : String) : PolicyCovTermOptionPattern {
    return Options.firstWhere(\option -> option.OptionCode == code)
  }

  function getOptionByPublicId(publicId : String) : PolicyCovTermOptionPattern {
    return Options?.firstWhere(\option -> option.PublicId == publicId)
  }

  function addOption(option : PolicyCovTermOptionPattern) {
    var covTermOptionsXml = _content.getChild("Options")
    if (covTermOptionsXml == null) {
      covTermOptionsXml = new XmlElement("Options")
      _content.addChild(covTermOptionsXml)
    }

    if (not Options*.PublicId.contains(option.PublicId)) {
      covTermOptionsXml.addChild(XmlUtil.copyElement(option.Xml))
    }
  }

  function removeOptions() {
    var covTermOptionsXml = _content.getChild("Options")
    if (covTermOptionsXml == null) return

    covTermOptionsXml.removeChildren("CovTermOpt")
  }

  override property get Bytes() : byte[] {
    var bytes = XmlUtil.getBytesWithXmlDeclarations(_content, _xmlDeclarations)
    return Formatter.cdataScript(new String(bytes)).Bytes
  }

  function copy() : PolicyCovTermPattern {
    return new PolicyCovTermPattern(XmlUtil.copyElement(_content), XmlDeclarations)
  }

  private function getAttributeValueForPath(pathPartNames : List<String>, attributeName : String) : String {
    var targetElement = pathPartNames.reduce(_content,
        \currentElement, childName -> currentElement?.getChild(childName))
    return targetElement?.getAttributeValue(attributeName)
  }

  private function setAttributeValueForPath(pathPartNames : List<String>, attributeName : String, value : String) {
    var targetElement = pathPartNames.reduce(_content, \currentElement, childName -> {
      var nextElement = currentElement.getChild(childName)
      if (nextElement == null) {
        nextElement = new XmlElement(childName)
        currentElement.addChild(nextElement)
      }
      return nextElement
    })
    targetElement.setAttributeValue(attributeName, value)
  }

  property get AvailabilityScript() : XmlElement {
    var script = _content.getChild("AvailabilityScript")
    if(isXmlElementEmpty(script)) {
      return null
    }

    return script
  }

  property set AvailabilityScript(availabilityScript : XmlElement) {
    var asElement = _content.getChild("AvailabilityScript")
    if (asElement != null) {
      asElement.$Text = availabilityScript.$Text
    } else {
      _content.$Children.add(0, availabilityScript)
    }
  }

  property get InitializeScript() : XmlElement {
    var script = _content.getChild("InitializeScript")
    if(isXmlElementEmpty(script)) {
      return null
    }

    return script
  }

  property set InitializeScript(initializeScript : XmlElement) {
    var asElement = _content.getChild("InitializeScript")
    if (asElement != null) {
      asElement.$Text = initializeScript.$Text
    } else {
      _content.$Children.add(0, initializeScript)
    }
  }

  property get ExistenceScript() : XmlElement {
    var script = _content.getChild("ExistenceScript")
    if(isXmlElementEmpty(script)) {
      return null
    }

    return script
  }

  property set ExistenceScript(existenceScript : XmlElement) {
    var asElement = _content.getChild("ExistenceScript")
    if (asElement != null) {
      asElement.$Text = existenceScript.$Text
    } else {
      _content.$Children.add(0, existenceScript)
    }
  }
}