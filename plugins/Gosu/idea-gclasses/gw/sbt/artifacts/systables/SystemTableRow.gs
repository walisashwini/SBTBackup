package gw.sbt.artifacts.systables

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.util.LoaderUtil
uses gw.sbt.util.XmlUtil
uses gw.util.Pair
uses gw.xml.XmlElement
uses java.util.Date
uses java.util.List
uses gw.sbt.util.Formatter
uses org.slf4j.LoggerFactory

class SystemTableRow extends XmlContent {

  construct(content : byte[]) {
    super(content)
  }

  construct(content : XmlElement, effectiveDateStr: String, expirationDateStr: String) {
    super(content)
    _useEffectiveDateTagInsteadOf = effectiveDateStr
    _useExpirationDateTagInsteadOf = expirationDateStr
  }

  var _useEffectiveDateTagInsteadOf : String
  var _useExpirationDateTagInsteadOf : String

  private property get EffectiveDateStr() : String {
    return _useEffectiveDateTagInsteadOf == null ? "EffectiveDate" : _useEffectiveDateTagInsteadOf
  }

  private property get ExpirationDateStr() : String {
    return _useExpirationDateTagInsteadOf == null ? "ExpirationDate" : _useExpirationDateTagInsteadOf
  }

  property get EffectiveDate() : Date {
    return Formatter.extractDate(getChild(EffectiveDateStr))
  }

  property get ExpirationDate() : Date {
    return Formatter.extractDate(getChild(ExpirationDateStr))
  }

  property set EffectiveDate(effectiveDate : Date) {
    if (effectiveDate == null) {
      setElementValue(EffectiveDateStr, "")
    } else {
      var expirationDate = ExpirationDate
      if (expirationDate != null and effectiveDate.after(expirationDate)) {
        LoggerFactory.getLogger("PCA").error("Can't set ${EffectiveDateStr} later than ${ExpirationDateStr} for system table row: ${Xml.asUTFString()}")
      } else {
        setElementValue(EffectiveDateStr, Formatter.dateToString(effectiveDate, "yyyy-MM-dd"))
      }
    }
  }

  property set ExpirationDate(expirationDate : Date) {
    if (expirationDate == null) {
      setElementValue(ExpirationDateStr, "")
    } else {
      var effectiveDate = EffectiveDate
      if (effectiveDate != null and effectiveDate.after(expirationDate)) {
        LoggerFactory.getLogger("PCA").error("Can't set ${EffectiveDateStr} later than ${ExpirationDateStr} for system table row: ${Xml.asUTFString()}")
      } else {
        setElementValue(ExpirationDateStr, Formatter.dateToString(expirationDate, "yyyy-MM-dd"))
      }
    }
  }

  function getValue(valueColumn: String) : String {
    return getChild(valueColumn).$Text
  }

  function matchAllColumnNamesValues(namesValues : List<Pair<String, String>>) : boolean {
    return not namesValues.hasMatch(\nameValue -> nameValue.First!= null and getChild(nameValue.First).$Text != nameValue.Second)
  }

  function matchJurisdiction(isCw : boolean) : boolean {
    return LoaderUtil.isJurisdictionCW(Jurisdiction) == isCw
  }

  property get ColumnNames() : List<String> {
    return getChildren()*.$QName*.LocalPart.toList()
  }

  property set PublicId(publicId : String) {
    setAttributeValue("public-id", publicId) // note: public-id is an attribute, not an element.
  }

  property get Jurisdiction() : String {
    var state = getChild("State")
    return state != null ? state.$Text : getChild("Jurisdiction")?.$Text
  }

  function setJurisdiction(jurisdiction: String, jurisdictionColumnName: String)  {
    setElementValue(jurisdictionColumnName, jurisdiction) // columnName could be 'Jurisdiction' or 'State'
  }

  property get PolicyLinePatternCode() : String {
     return getChild("PolicyLinePatternCode")?.$Text
  }

  property get PublicId() : String {
    return getAttributeValue("public-id")
  }

  function copy(): SystemTableRow {
    return new SystemTableRow(XmlUtil.copyElement(Xml), _useEffectiveDateTagInsteadOf, _useEffectiveDateTagInsteadOf)
  }

}