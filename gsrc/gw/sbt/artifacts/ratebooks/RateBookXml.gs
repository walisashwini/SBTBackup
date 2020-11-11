package gw.sbt.artifacts.ratebooks

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

uses javax.xml.namespace.QName
uses gw.sbt.util.Formatter
uses java.util.Date
uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.util.XmlUtil

class RateBookXml extends XmlContent implements ContentWrapper {
  var _rateBookXml: XmlElement
  var _rateTablesXml: XmlElement as RateTableListXml
  var _allRateTables : List<RateTableXml> as AllTables = {}
  var _allTableDefinitions : List<RateTableDefinitionXml> as AllTableDefinitions = {}
  var _allRateFactorRows: List<DefaultRateFactorRowXml> as AllRateFactorRows = {}
  var _allCalcRoutineParameterSets: List<CalcRoutineParameterSetXml> as AllCalcRoutineParameterSets = {}  // referred by TableDefinitions

  construct(content : XmlElement) {
    super(content)
    _namespace = Xml.$Namespace.NamespaceURI
    _rateBookXml = Xml.getChild(new QName(_namespace, "RateBook"))
    _rateTablesXml = _rateBookXml.getChild(new QName(_namespace, "RateTables"))
  }

  override property get Bytes(): byte[] {
    return XmlUtil.getBytesWithXmlDeclarations(Xml, _xmlDeclarations)
  }

  property get PublicId() : String {
    return _rateBookXml.getAttributeValue("public-id")
  }

  property get EffectiveDate(): Date {
    var effectiveDateString = getRateBookElementValue("EffectiveDate")
    return Formatter.stringToDate(effectiveDateString, "yyyy-MM-dd HH:mm:ss.SSS")
  }

  property get RenewalEffectiveDate(): Date {
    var renewalEffectiveDateString = getRateBookElementValue("RenewalEffectiveDate")
    return Formatter.stringToDate(renewalEffectiveDateString, "yyyy-MM-dd HH:mm:ss.SSS")
  }

  property set EffectiveDate(effectiveDate: Date) {
    if (effectiveDate != null) {
      setElementValue("EffectiveDate", Formatter.dateToString(effectiveDate, "yyyy-MM-dd HH:mm:ss.SSS"))
    }
  }

  property set RenewalEffectiveDate(renewalEffectiveDate: Date) {
    if (renewalEffectiveDate != null) {
      setElementValue("RenewalEffectiveDate", Formatter.dateToString(renewalEffectiveDate, "yyyy-MM-dd HH:mm:ss.SSS"))
    }
  }

  property get Status(): RateBookStatus {
    return RateBookStatus.get(getRateBookElementValue("Status"))
  }

  property set Status(status: RateBookStatus) {
    if (status != null) {
      setElementValue("Status", status.Code)
    }
  }

  private function getRateBookElementValue(elementName: String): String {
    return getRateBookElement(elementName).$Text
  }

  private function getRateBookElement(elementName: String): XmlElement {
    return _rateBookXml?.getChild(new QName(_namespace, elementName))
  }

  override function setElementValue(elementName: String, value: String) {
    var elementXml = getRateBookElement(elementName)
    if (elementXml == null) {
      var element = new XmlElement(elementName)
      element.$Text = value
      _rateBookXml.addChild(element)
    } else {
      elementXml.$Text = value
    }
  }
}