package gw.sbt.artifacts.clauses

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.artifacts.XmlContent
uses gw.sbt.model.HasPublicId
uses gw.sbt.model.clause.ClauseExistenceType
uses gw.sbt.model.clause.ClauseType
uses gw.sbt.util.XmlUtil
uses gw.xml.XmlElement
uses gw.sbt.util.Formatter

uses javax.xml.namespace.QName
uses java.util.List

class PolicyClausePattern extends XmlContent implements ContentWrapper, HasPublicId {
  construct(content: byte[]) {
   this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content: XmlElement) {
    super(content)
  }

  construct(content: XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
  }

  static function newCoveragePattern(): PolicyClausePattern {
    var xml = "<CoveragePattern><CovTerms/></CoveragePattern>"
    return new PolicyClausePattern(xml.Bytes)
  }

  static function newConditionPattern(): PolicyClausePattern {
    var xml = "<ConditionPattern><CovTerms/></ConditionPattern>"
    return new PolicyClausePattern(xml.Bytes)
  }

  static function newExclusionPattern(): PolicyClausePattern {
    var xml = "<ExclusionPattern><CovTerms/></ExclusionPattern>"
    return new PolicyClausePattern(xml.Bytes)
  }

  static property get ComparableAttributes() : List<String> {
    return {
        // CoveragePattern
        "coverageCategory",
        "coverageSubtype",
        "coveredPartyType",
        "existence",
        "lookupTableName",
        "owningEntityType",
        "policyLinePattern",
        "priority",
        "referenceDateByType",
        "rICoverageGroupType",

        // ConditionPattern
        "conditionSubtype",

        // ExclusionPattern
        "exclusionSubtype"
    }
  }

  override property get Bytes(): byte[] {
    var bytes = XmlUtil.getBytesWithXmlDeclarations(_content, _xmlDeclarations)
    return Formatter.cdataScript(new String(bytes)).Bytes
  }

  property get CodeIdentifier(): String {
    return _content.getAttributeValue("codeIdentifier")
  }

  override property get PublicId(): String {
    return _content.getAttributeValue("public-id")
  }

  property get Type(): ClauseType {
    switch (_content.$QName.LocalPart) {
      case "CoveragePattern": return ClauseType.COVERAGE
      case "ConditionPattern": return ClauseType.CONDITION
      case "ExclusionPattern": return ClauseType.EXCLUSION
        default: throw "Unknown clause pattern: ${_content.$QName.LocalPart}"
    }
  }

  property get Category(): String {
    return _content.getAttributeValue("coverageCategory")
  }

  property set Category(category: String) {
    _content.setAttributeValue("coverageCategory", category)
  }

  property get OwningEntityType(): String {
    return _content.getAttributeValue("owningEntityType")
  }

  property get PolicyLinePattern() : String {
    return _content.getAttributeValue("policyLinePattern")
  }

  property get Existence(): ClauseExistenceType {
    var existence = _content.getAttributeValue("existence")
    if (existence != null and not existence.Empty) {
      return ClauseExistenceType.valueOf(existence.toUpperCase())
    } else {
      return ClauseExistenceType.SCRIPT
    }
  }

  property set Existence(existence: ClauseExistenceType) {
    var xmlValue = existence == SCRIPT
        ? null
        : existence.Label
    _content.setAttributeValue("existence", xmlValue)
  }

  property get Priority(): int {
    return _content.getAttributeValue("priority").toInt()
  }

  property get CovTerms(): List<PolicyCovTermPattern> {
    var covTermsXml = _content.getChild("CovTerms")
    if (covTermsXml == null) return {}
    return covTermsXml.$Children.map(\covTermXml -> {
      if(covTermXml.$QName.LocalPart == "PackageCovTermPattern") {
        return new PolicyPackageCovTermPattern(covTermXml, XmlDeclarations)
      } else {
        return new PolicyCovTermPattern(covTermXml, XmlDeclarations)
      }
    })
  }

  function removeCovTerms() {
    var covTermsXml = _content.getChild("CovTerms")
    if (covTermsXml == null) return
    covTermsXml.$Children*.$QName.toSet().each(\childQName -> covTermsXml.removeChildren(childQName))
  }

  function addCovTerm(covTerm: PolicyCovTermPattern) {
    var covTermsXml = _content.getChild("CovTerms")
    if (covTermsXml == null) {
      covTermsXml = new XmlElement("CovTerms")
      _content.addChild(covTermsXml)
    }
    covTermsXml.addChild(XmlUtil.copyElement(covTerm.Xml))
  }

  function getCovTerm(publicId: String): PolicyCovTermPattern {
    return CovTerms.firstWhere(\covTerm -> covTerm.PublicId == publicId)
  }

  property get ClauseSubType(): String {
    return _content.getAttributeValue(SubtypeAttributeName)
  }

  property set ClauseSubType(value: String) {
    _content.setAttributeValue(SubtypeAttributeName, value)
  }

  property get AvailabilityScript(): XmlElement {
    var script = _content.getChild("AvailabilityScript")
    if(isXmlElementEmpty(script)) {
      return null
    }

    return script
  }

  property set AvailabilityScript(availabilityScript: XmlElement) {
    var asElement = _content.getChild("AvailabilityScript")
    if (asElement != null) {
      asElement.$Text = availabilityScript.$Text
    } else {
      _content.$Children.add(0, availabilityScript)
    }
  }

  property get ExistenceScript(): XmlElement {
    var script = _content.getChild("ExistenceScript")
    if(isXmlElementEmpty(script)) {
      return null
    }

    return script
  }

  property set ExistenceScript(existenceScript: XmlElement) {
    var esElement = _content.getChild("ExistenceScript")
    if (esElement != null) {
      esElement.$Text = existenceScript.$Text
    } else {
      _content.$Children.add(0, existenceScript)
    }

    if (_content.getAttributeValue("existence") != null) {
      _content.setAttributeValue("existence", null)
    }
  }

  property get InitializeScript(): XmlElement {
    var script = _content.getChild("InitializeScript")
    if(isXmlElementEmpty(script)) {
      return null
    }

    return script
  }

  property set InitializeScript(initializeScript: XmlElement) {
    var asElement = _content.getChild("InitializeScript")
    if (asElement != null) {
      asElement.$Text = initializeScript.$Text
    } else {
      _content.$Children.add(0, initializeScript)
    }
  }

  property get PackageCovTerms(): List<PolicyPackageCovTermPattern> {
    var namespace = _content.$Namespace.NamespaceURI
    var covTermsXml = _content.getChild("CovTerms")
    if (covTermsXml == null) return {}

    return covTermsXml.getChildren(new QName(namespace, "PackageCovTermPattern"))
        .map(\covTermXml -> new PolicyPackageCovTermPattern(covTermXml, XmlDeclarations))
  }

  private property get SubtypeAttributeName(): String {
    switch (Type) {
      case COVERAGE: return "coverageSubtype"
      case CONDITION: return "conditionSubtype"
      case EXCLUSION: return "exclusionSubtype"
        default: throw "Unknown clause pattern: ${Type}"
    }
  }

  function copy(): PolicyClausePattern {
    return new PolicyClausePattern(XmlUtil.copyElement(_content), XmlDeclarations)
  }
}