package gw.sbt.artifacts.clauses

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement
uses gw.sbt.util.XmlUtil

class PolicyCovTermOptionPattern extends XmlContent {

  construct(content : byte[]) {
    this(XmlElement.parse(content), XmlUtil.getXmlDeclarations(content))
  }

  construct(content : XmlElement, xmlDeclarations: String) {
    super(content, xmlDeclarations)
  }

  property get PublicId() : String {
    return _content.getAttributeValue("public-id")
  }

  property get Priority() : int {
    return _content.getAttributeValue("priority").toInt()
  }

  property get OptionCode() : String {
    return _content.getAttributeValue("optionCode")
  }

  override property get Bytes() : byte[] {
    return XmlUtil.getBytesWithXmlDeclarations(_content, _xmlDeclarations)
  }

  function copy() : PolicyCovTermOptionPattern {
    return new PolicyCovTermOptionPattern(this.Bytes)
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
    if(asElement != null) {
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
    if(asElement != null) {
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

  property set ExistenceScript(existenceScript: XmlElement) {
    var asElement = _content.getChild("ExistenceScript")
    if(asElement != null) {
      asElement.$Text = existenceScript.$Text
    } else {
      _content.$Children.add(0, existenceScript)
    }
  }

  static property get ComparableAttributes() : List<String> {
    return {
        "currency",
        "priority",
        "value"
    }
  }
}