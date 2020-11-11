package gw.sbt.artifacts.forms

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

class CustomPolicyFormInference extends XmlContent {

  construct(content: byte[]) {
    super(content)
  }

  construct(content: XmlElement, xmlDeclarations : String) {
    super(content, xmlDeclarations)
  }

  property get FormCode() : String {
    return getChild("FormCode").$Text
  }

  property get InferenceClass(): String {
    return getChild("InferenceClass").$Text
  }

  function matches(other : CustomPolicyFormInference) : boolean {
    return Objects.equals(this, other) || FormCode == other.FormCode && InferenceClass == other.InferenceClass
  }
}