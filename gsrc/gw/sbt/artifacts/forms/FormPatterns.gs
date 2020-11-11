package gw.sbt.artifacts.forms

uses gw.xml.XmlElement
uses javax.xml.namespace.QName
uses gw.sbt.util.XmlUtil
uses java.util.List

class FormPatterns {

  var _formPatternsXml: XmlElement
  var _xmlDeclarations: String
  construct(content : byte[]) {
    _formPatternsXml = XmlElement.parse(content)
    _xmlDeclarations = XmlUtil.getXmlDeclarations(content)
  }

  function addFormPattern(form : PolicyFormPattern) {
    _formPatternsXml.addChild(XmlElement.parse(form.Bytes))
  }

  property get All() : List< PolicyFormPattern > {
    var namespace = _formPatternsXml.$Namespace.NamespaceURI
    return _formPatternsXml
        .getChildren(new QName(namespace, "FormPattern"))
        .map(\formPatternXml -> new PolicyFormPattern (namespace, formPatternXml, _xmlDeclarations))
  }

  property get Bytes() : byte[] {
    return XmlUtil.getBytesWithXmlDeclarations(_formPatternsXml, _xmlDeclarations)
  }
}