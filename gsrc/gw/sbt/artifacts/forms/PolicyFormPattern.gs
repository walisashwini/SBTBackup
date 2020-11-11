package gw.sbt.artifacts.forms

uses gw.sbt.artifacts.ContentWrapper
uses gw.sbt.artifacts.lookups.FormLookup
uses gw.sbt.model.ProductModelAvailability
uses gw.sbt.util.LoaderUtil
uses gw.xml.XmlElement
uses javax.xml.namespace.QName
uses gw.sbt.util.XmlUtil
uses java.util.List

class PolicyFormPattern implements ContentWrapper {

  var _formPatternXml : XmlElement as readonly XML
  var _namespace : String as readonly Namespace
  var _xmlDeclarations: String as XmlDeclarations
  construct(content : byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content : XmlElement) {
    _formPatternXml = content
    _namespace = _formPatternXml.$Namespace.NamespaceURI
  }

  construct(content : XmlElement, xmlDeclarations : String) {
    _formPatternXml = content
    _xmlDeclarations = xmlDeclarations
    _namespace = _formPatternXml.$Namespace.NamespaceURI
  }

  construct(namespace : String, content : byte[]) {
    this(namespace, XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(namespace : String, content : XmlElement, xmlDeclarations : String) {
    _namespace = namespace
    _formPatternXml = content
    _xmlDeclarations = xmlDeclarations
  }

  override property get Bytes() : byte[] {
    return XmlUtil.getBytesWithXmlDeclarations(_formPatternXml, _xmlDeclarations)
  }

  property get FormPatternBytes() : byte[] {
    var newFormRoot = new XmlElement(new QName(_namespace, "import"))
    newFormRoot.addChild(_formPatternXml)
    return newFormRoot.bytes()
  }

  property get Lookups() : List<FormLookup> {
    return _formPatternXml
        .getChild(new QName(_namespace, "Lookups"))
        .getChildren(new QName(_namespace, "FormPatternLookup"))
        .map( \ formPatternLookupXml -> new FormLookup(_namespace, formPatternLookupXml, XmlDeclarations) )
  }

  property get Code() : String {
    return _formPatternXml.getChild(new QName(_namespace, "Code")).$Text
  }

  property get InternalGroupCode() : String {
    return _formPatternXml.getChild(new QName(_namespace, "InternalGroupCode")).$Text
  }

  property set InternalGroupCode(internalGroupCode: String) {
    _formPatternXml.getChild(new QName(_namespace, "InternalGroupCode")).$Text = internalGroupCode
  }

  property get UseInsteadOfCode() : String {
    return _formPatternXml.getChild(new QName(_namespace, "UseInsteadOfCode")).$Text
  }

  function getLookup(jurisdiction : String, adoptionDate : Date = null) : FormLookup {
    var targetLookup : FormLookup = null
    if(adoptionDate != null) {
      targetLookup = Lookups
          .firstWhere(\formLookup ->
              formLookup.Jurisdiction == jurisdiction and
              LoaderUtil.isDateWithinRange(adoptionDate, formLookup.StartEffectiveDate, formLookup.EndEffectiveDate))
    }

    if(targetLookup == null) {
      targetLookup = Lookups
          .firstWhere(\formLookup -> formLookup.Jurisdiction == jurisdiction)
    }

    return targetLookup
  }

  function getLookupForCW(adoptionDate : Date = null) : FormLookup {
    var targetLookup : FormLookup = null
    if(adoptionDate != null) {
      targetLookup = Lookups
          .firstWhere(\formLookup ->
              LoaderUtil.isJurisdictionCW(formLookup.Jurisdiction) and
                  LoaderUtil.isDateWithinRange(adoptionDate, formLookup.StartEffectiveDate, formLookup.EndEffectiveDate))
    }

    if(targetLookup == null) {
      targetLookup = Lookups
          .firstWhere(\formLookup -> LoaderUtil.isJurisdictionCW(formLookup.Jurisdiction))
    }
    return targetLookup
  }

  function addLookup(lookup : FormLookup) {
    var lookups = _formPatternXml.getChild(new QName(_namespace, "Lookups"))
    if (lookups != null) {
      lookups.addChild(XmlElement.parse(lookup.Bytes))
    }
  }

  function removeLookups() {
    var lookups = _formPatternXml.getChild(new QName(_namespace, "Lookups"))
    if (lookups != null) {
      lookups.removeChildren(new QName(_namespace, "FormPatternLookup"))
    }
  }

  //in state update case:
  //A form pattern might have multiple lookups for same jurisdiction (with different effective periods)
  function getLookups(jurisdiction : String) : List<FormLookup> {
    return Lookups.where( \formLookup -> formLookup.Jurisdiction == jurisdiction)
  }

  private function getChild(xml : XmlElement, name : String) : XmlElement {
    return xml.getChild(new QName(_namespace, name))
  }

  private function getChild(name : String) : XmlElement {
    return getChild(_formPatternXml, name)
  }

  property get Priority() : int {
    return getChild("Priority").$Text.toInt()
  }

  property get FormNumber() : String {
    return getChild("FormNumber").$Text
  }

  property get Edition() : String {
    return getChild("Edition").$Text
  }

  property get Description() : String {
    return getChild("Description").$Text
  }

  property get PolicyLinePatternCode() : String {
    return getChild("PolicyLinePatternCode").$Text
  }

  property get ClausePatternCode() : String {
    return getChild("ClausePatternCode").$Text
  }

  property get PublicId() : String {
    return _formPatternXml.getAttributeValue("public-id")
  }

  property get FormPatternCovTermPublicIds() : List<String> {
    return FormPatternCovTerms.map( \ formPatternCovTermXml -> getChild(formPatternCovTermXml, "CovTermPatternCode").$Text )
  }

  function getSelectedCovTermValues(covTermPid : String) : List<String> {
    var covTerm = FormPatternCovTerms.firstWhere( \ covTermXml -> getChild(covTermXml, "CovTermPatternCode").$Text == covTermPid)
    var selectedCovTermValues = getChild(covTerm, "SelectedCovTermValues")
    if (selectedCovTermValues == null) return {}
    return selectedCovTermValues.$Children.map( \ formPatternCovTermValueXml -> getChild(formPatternCovTermValueXml, "Code").$Text).toList()
  }

  private property get FormPatternCovTerms() : List<XmlElement> {
    if (getChild("FormPatternCovTerms") == null) return {}
    return getChild("FormPatternCovTerms").$Children
  }

  property get ClausePatternCodes() : List<String> {
    if (getChild("FormPatternClauseCodes") == null) return {}
    return getChild("FormPatternClauseCodes").$Children*.getChild(new QName(_namespace,"Code"))*.$Text.toList()
  }

  property get GenericInferenceClass() : String {
    return getChild("GenericInferenceClass").$Text
  }

  property get EffectiveStateCwAvailability() : ProductModelAvailability {
    var formPatternLookups = Lookups.where( \ child -> child.FormPatternPublicId == PublicId)

    // Look for an Unavailable Lookup first, and use that one if it exists
    // We use this logic here as transformation always produces state specific form lookup to be unavailable first, by
    // convention.
    var formPatternLookup = formPatternLookups.firstWhere( \ lookup -> lookup.IsUnavailable) ?:
        (formPatternLookups.firstWhere(\ lookup -> lookup.Jurisdiction.NotBlank) ?:
            formPatternLookups.first())

    if (formPatternLookup == null) {
      throw "No Lookup found for form: ${Code}"
    }

    return createProductModelAvailability(formPatternLookup)
  }

  property get Availabilities() : List<ProductModelAvailability> {
    var formPatternLookups = Lookups.where( \ child -> child.FormPatternPublicId == PublicId)
    return formPatternLookups.map(\formPatternLookup -> createProductModelAvailability(formPatternLookup))
  }

  function availabilityLookupsForJurisdiction(jurisdiction: String) : List<FormLookup> {
    var formPatternLookups = Lookups.where(\ child -> child.FormPatternPublicId == PublicId)
    //If lookup for jurisdiction not found, look for CW lookup
    var stateLookups = formPatternLookups.where( \ lookup -> lookup.Jurisdiction == jurisdiction)
    var lookupsForJurisdiction = stateLookups.HasElements ? stateLookups :
        formPatternLookups.where(\ lookup -> LoaderUtil.isJurisdictionCW(lookup.Jurisdiction))
    return lookupsForJurisdiction
  }

  private function createProductModelAvailability(formPatternLookup : FormLookup) : ProductModelAvailability {
    return new ProductModelAvailability(
        formPatternLookup.Availability,
            formPatternLookup.StartEffectiveDate,
            formPatternLookup.EndEffectiveDate,
            formPatternLookup.Jurisdiction.isEmpty() ? null : formPatternLookup.Jurisdiction)
  }

  property get CoverableType() : String {
    return getChild("CoverableType").$Text
  }

  property get CoverableTypeList() : String {
    return getChild("CoverableTypeList").$Text
  }

  property get CoverableTypeKey() : String {
    return getChild("CoverableTypeKey").$Text
  }

  property get CoverableTypeKeys() : List<String> {
    return getChild("CoverableTypeKeys").$Children
        .map( \ formPatternTypeKeyXml -> getChild(formPatternTypeKeyXml, "Code").$Text)
  }

  function copy(): PolicyFormPattern {
    return new PolicyFormPattern(XmlUtil.copyElement(_formPatternXml), XmlDeclarations)
  }
}