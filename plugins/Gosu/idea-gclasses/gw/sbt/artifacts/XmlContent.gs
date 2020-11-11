package gw.sbt.artifacts

uses gw.xml.XmlElement
uses javax.xml.namespace.QName
uses gw.sbt.util.XmlUtil
uses java.util.List

class XmlContent implements ContentWrapper {

  protected var _content : XmlElement as Xml
  protected var _namespace : String as NameSpace
  protected var _xmlDeclarations: String as XmlDeclarations

  construct(content : byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content : XmlElement) {
    this(content, XmlUtil.NULL_XML_DECLARATIONS)
  }

  construct(content : XmlElement, xmlDeclarations : String) {
    _content = content
    _namespace = _content.$Namespace.NamespaceURI
    _xmlDeclarations = xmlDeclarations
  }

  function getChild(name : String) : XmlElement {
    return _content.getChild(new QName(_namespace, name))
  }

  function getChildren(name : String) : List<XmlElement> {
    return _content.getChildren(new QName(_namespace, name))
  }

  function removeChildren(name : String) : List<XmlElement> {
    return _content.removeChildren(new QName(_namespace, name))
  }

  final function getChildren() : List<XmlElement> {
    return _content.$Children
  }

  function getAttributeValue(name : String) : String {
    return _content.getAttributeValue(name)
  }

  function setElementValue(elementName: String, value: String) {
    var elementXml = _content.getChild(new QName(_namespace, elementName))
    if (elementXml == null) {
      var element = new XmlElement(elementName)
      element.$Text = value
      _content.addChild(element)
    } else {
      elementXml.$Text = value
    }
  }

  function setElementValueIfExists(elementName: String, value: String) {
    var elementXml = _content.getChild(new QName(_namespace, elementName))
    if(elementXml != null) {
      elementXml.$Text = value
    }
  }

  function getAttributeValueNoEmpty(attributeName : String) : String {
    var attributeValue = Xml.getAttributeValue(attributeName)

    if(attributeValue.Empty) {
      return null
    } else if(attributeValue.HasContent) {
      if(attributeValue.trim().Empty) {
        return null
      }
    }

    return attributeValue
  }

  function setAttributeValue(attributeName : String, attributeValue : String) {
    Xml.setAttributeValue(attributeName, attributeValue)
  }

  override property get Bytes(): byte[] {
    return XmlUtil.getBytesWithXmlDeclarations(_content, _xmlDeclarations)
  }

  function isXmlElementEmpty(element : XmlElement) : boolean {
    if(element != null) {
      var text = element.$Text
      if(text != null and not text.trim().Empty) {
        return false
      }
    }

    return true
  }
}