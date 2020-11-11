package gw.sbt.content

uses gw.xml.XmlElement

/**
 * This class encapsulates an XmlElement. It attempts to improve
 * overall reading efficiency by reducing the number of times we have
 * to parse XML when we know the content is XML.
 */
class XmlSpecificContent extends Content {

  var _xml : XmlElement as XML

  construct(name: String, xml : XmlElement) {
    super(name, xml.bytes())
    _xml = xml
  }
}