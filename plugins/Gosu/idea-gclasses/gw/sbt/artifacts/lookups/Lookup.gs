package gw.sbt.artifacts.lookups

uses gw.sbt.util.LoaderUtil
uses gw.xml.XmlElement

uses javax.xml.namespace.QName
uses gw.sbt.util.Formatter
uses java.util.Date
uses gw.sbt.util.XmlUtil
uses org.slf4j.LoggerFactory

abstract class Lookup {

  /*
   * Using the PC AvailabilityType introduces a dependency on PC.
   * One consequence of this dependency is that tests that use
   * this class will need to be instances of PCServerTestClass.
   * Since the use of AvailabilityType is confined to this class,
   * we have chosen to use constants for now.
   */
  public static final var AVAILABLE : String = "Available"
  public static final var UNAVAILABLE : String = "Unavailable"
  public static final var DOES_NOT_EXIST: String = "-"

  protected var _lookup : XmlElement as XmlLookup
  protected var _namespace : String
  protected var _xmlDeclarations : String as XmlDeclarations

  construct(lookup : byte[]) {
    this("", XmlElement.parse(lookup), XmlUtil.getXmlDeclarations(lookup))
  }

  construct(lookup : XmlElement) {
    this("", lookup, XmlUtil.NULL_XML_DECLARATIONS)
  }

  construct(lookup : XmlElement, xmlDeclarations: String) {
    this("", lookup, xmlDeclarations)
  }

  construct(namespace : String, lookup : byte[]) {
    this(namespace, XmlElement.parse(lookup), XmlUtil.getXmlDeclarations(lookup))
  }

  construct(namespace : String, lookup : XmlElement, xmlDeclarations: String) {
    _lookup = lookup
    _xmlDeclarations = xmlDeclarations
    _namespace = namespace
  }

  property get Availability() : String {
    return getConditionValue("Availability")
  }

  property set Availability(val : String) {
    setElementValue("Availability", val)
  }

  property get IsAvailable() : boolean {
    return Availability == AVAILABLE
  }

  property get IsUnavailable() : boolean {
    return Availability == UNAVAILABLE
  }

  function makeUnavailableFrom(date : Date) {
    makeUnavailable()
    StartEffectiveDate = date
  }

  private function makeUnavailable() {
    Availability = UNAVAILABLE
  }

  property get State() : String {
    return getConditionValue("State")
  }

  property set State(jurisdiction : String) {
    setElementValue("State", jurisdiction)
  }

  property get PublicId() : String {
    return _lookup?.getAttributeValue("public-id")
  }

  property set PublicId(publicId : String) {
    _lookup?.setAttributeValue("public-id", publicId)
  }

  function getConditionValue(condition : String) : String {
    return getConditionElement(condition)?.$Text
  }

  private function getConditionElement(condition : String) : XmlElement {
    return _lookup?.getChild(new QName(_namespace, condition))
  }

  abstract property get SubjectPublicId() : String

  abstract function copy() :  gw.sbt.artifacts.lookups.Lookup

  property get IsState() : boolean {
    return not LoaderUtil.isJurisdictionCW(getConditionValue("State"))
  }

  property get StartEffectiveDate() : Date {
    return Formatter.extractDate(getConditionElement("StartEffectiveDate"), "yyyy-MM-dd HH:mm:ss.SSS")
  }

  property get EndEffectiveDate() : Date {
    return Formatter.extractDate(getConditionElement("EndEffectiveDate"), "yyyy-MM-dd HH:mm:ss.SSS")
  }

  property set StartEffectiveDate(effectiveDate : Date) {
    if (effectiveDate == null) {
      setElementValue("StartEffectiveDate", "")
    } else {
      var endEffectiveDate = EndEffectiveDate
      if (endEffectiveDate != null and effectiveDate.after(endEffectiveDate)) {
        LoggerFactory.getLogger("PCA").error("Can't set StartEffectiveDate later than EndEffectiveDate for: ${_lookup.asUTFString()}")
      } else {
        setElementValue("StartEffectiveDate", Formatter.dateToString(effectiveDate, "yyyy-MM-dd HH:mm:ss.SSS"))
      }
    }
  }

  property set EndEffectiveDate(effectiveDate : Date) {
    if (effectiveDate == null) {
      setElementValue("EndEffectiveDate", "")
    } else {
      var startEffectiveDate = StartEffectiveDate
      if (startEffectiveDate != null and startEffectiveDate.after(effectiveDate)) {
        LoggerFactory.getLogger("PCA").error("Can't set EndEffectiveDate earlier than StartEffectiveDate for: ${_lookup.asUTFString()}")
      } else {
        setElementValue("EndEffectiveDate", Formatter.dateToString(effectiveDate, "yyyy-MM-dd HH:mm:ss.SSS"))
      }
    }
  }

  property get Bytes() : byte[] {
    return XmlUtil.getBytesWithXmlDeclarations(_lookup, _xmlDeclarations, true)
  }

  protected function setElementValue(elementName: String, value: String) {
    var elementXml = _lookup?.getChild(new QName(_namespace, elementName))
    if (elementXml == null) {
      var element = new XmlElement(elementName)
      element.$Text = value
      _lookup.addChild(element)
    } else {
      elementXml.$Text = value
    }
  }
}