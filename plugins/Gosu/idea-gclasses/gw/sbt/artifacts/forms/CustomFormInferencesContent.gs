package gw.sbt.artifacts.forms

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses java.util.Collections
uses java.util.Set
uses java.util.List

class CustomFormInferencesContent extends XmlContent {

  public static var SYSTABLE_FILENAME : String = "custom_form_inference.xml"

  construct() {
    super(XmlElement.parse("<import/>"))
  }

  construct(content: byte[]) {
    super(content)
  }

  construct(content: XmlElement) {
    super(content)
  }

  function retainOnly(formPatternCodes: List<String>) : CustomFormInferencesContent {
    getChildren("CustomFormInference")
      .retainWhere( \ customFormInferenceXml ->
        formPatternCodes.contains(customFormInferenceXml.getChild("FormCode").$Text))
    return this
  }

  function remove(formCode : String) {
    getChildren("CustomFormInference")
        .removeWhere(\customFormInferenceXml ->
            formCode == customFormInferenceXml.getChild("FormCode").$Text)
  }

  function add(customFormInference : CustomPolicyFormInference) {
    _content.addChild(customFormInference.Xml)
  }

  property get All() : List<CustomPolicyFormInference> {
    return getChildren().map( \ inference -> new CustomPolicyFormInference(inference, XmlDeclarations))
  }

  property get AllCustomInferenceClassFullNames(): Set<String> {
    return All*.InferenceClass?.toSet() ?: Collections.emptySet()
  }

  function getFormInference(code : String) : CustomPolicyFormInference {
    return All.firstWhere( \ customFormInference -> customFormInference.FormCode == code)
  }
}