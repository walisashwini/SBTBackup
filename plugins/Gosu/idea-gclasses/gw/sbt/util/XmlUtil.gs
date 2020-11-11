package gw.sbt.util

uses com.rits.cloning.Cloner
uses gw.xml.XmlElement
uses gw.xml.XmlSerializationOptions
uses gw.xml.util.Pair
uses org.apache.commons.lang.ArrayUtils
uses org.apache.commons.io.IOUtils

uses java.io.StringReader
uses java.nio.charset.StandardCharsets

class XmlUtil {

  public static final var NULL_XML_DECLARATIONS : String = null

  // Note the reason we are wrapping the column element with a parent that has the namespace defined
  // is we want the namespace on the column element, but do not want to have a namespace attribute defined on it.
  static function createXmlElementWithInheritedNamespace(elementContent : String, namespace : String) : XmlElement {
    var contentInNamespacedContainer = "<xml xmlns=\"${namespace}\">${elementContent}</xml>"
    return XmlElement.parse(contentInNamespacedContainer).$Children.single()
  }

  static function copyElement(element : XmlElement) : XmlElement {
    return new Cloner().deepClone(element)
  }

  static function getXmlDeclarations(content : byte[]) : String {
    if (content == null) {
      return null
    }
    var lines = IOUtils.readLines(new StringReader(new String(content)))
    var firstLine = lines.first()
    if (firstLine.containsIgnoreCase("<?xml")) {
      // check if the first line contains the xml declarations.
      // no worry about StringIndexOutOfBoundsException, as long as it is a well formed xml.
      // the xml might not be pretty-printed, the first line might contain more than the xml declarations.
      var declarations = firstLine.substring(firstLine.indexOf("<?xml"), firstLine.indexOf("?>") + 2)
      return declarations
    }
    return null //return null, the parser has the default if declaration is null.
  }

  static function getBytesWithXmlDeclarations(xmlElement : XmlElement, xmlDeclarations : String, asUTFStr : boolean = false) : byte[] {
    if (xmlDeclarations == null) {
      if (asUTFStr) {
        return xmlElement.asUTFString().Bytes
      } else {
        return xmlElement.bytes()
      }
    }
    var options = new XmlSerializationOptions()
    options.setXmlDeclaration(false) // Eliminate the default XML declaration
    if (asUTFStr) {
      options.setEncoding(StandardCharsets.UTF_8)
    }
    var content = xmlElement.bytes(options)
    return ArrayUtils.addAll(xmlDeclarations.Bytes, content)
  }

  //compare 2 xmlElements, optionally ignore some elements
  //return true if they are identical
  static function compareXmlElements(thisElement : XmlElement, thatElement : XmlElement, ignoredElementList : List<String> = {}, ignoredAttributeList : List<Pair<String, String>> = {}) : boolean {
    if (nullCheckFailed(thisElement, thatElement)) {
      return false
    }
    var thisQName = thisElement.$QName
    var thatQName = thatElement.$QName
    if (nullCheckFailed(thisQName, thatQName)) {
      return false
    }
    // QName compare, just in case the 2 elements are different types
    if (thisQName != null and not thisQName.equals(thatQName)) {
      return false
    }
    if (not ignoredElementList.contains(thisQName.LocalPart)) { // not in ignored list
      //text compare
      if (thisElement.$Text != thatElement.$Text) {
        return false
      }
      //attribute compare
      var attributeNamesInThis = thisElement.$AttributeNames
      var attributeNamesInThat = thatElement.$AttributeNames
      if (nullCheckFailed(attributeNamesInThis, attributeNamesInThat)) {
        return false
      }
      // check each attribute values
      var matched = true
      if (attributeNamesInThis.HasElements or attributeNamesInThat.HasElements) {
        if (attributeNamesInThis.size() != attributeNamesInThat.size()) { // attributes size check
          return false
        }
        attributeNamesInThis.each(\thisAttributeName -> {
          var ignored = ignoredAttributeList.contains(new Pair(thisQName.LocalPart, thisAttributeName.LocalPart))
              or ignoredAttributeList.hasMatch(\ignoredAttribute -> (ignoredAttribute.First == null and ignoredAttribute.Second == thisAttributeName.LocalPart))
          if (matched and (not ignored)) {
            var thatAttributeName = attributeNamesInThat.firstWhere(\attributeName -> attributeName.equals(thisAttributeName))
            if (thatAttributeName == null) {
              matched = false
            } else {
              var thisAttributeValue = thisElement.getAttributeValue(thisAttributeName)
              var thatAttributeValue = thatElement.getAttributeValue(thatAttributeName)
              if (thisAttributeValue != thatAttributeValue) {
                matched = false
              }
            }
          }
        })
      }
      if (not matched) {
        return false
      }
      //children compare
      var childrenInThis = thisElement.$Children
      var childrenInThat = thatElement.$Children
      if (nullCheckFailed(childrenInThis, childrenInThat)) {
        return false
      }
      if (childrenInThis.HasElements or childrenInThat.HasElements) {
        //filter out the ignored elements
        childrenInThis = childrenInThis.where(\child -> not ignoredElementList.contains(child.$QName.LocalPart))
        childrenInThat = childrenInThat.where(\child -> not ignoredElementList.contains(child.$QName.LocalPart))
        if (childrenInThis.size() != childrenInThat.size()) {
          return false
        }
        childrenInThis.each(\thisChild -> { // each child has a matched one
          if (matched) {
            matched = childrenInThat.hasMatch(\thatChild -> compareXmlElements(thisChild, thatChild, ignoredElementList, ignoredAttributeList))
          }
        })
      }
      return matched
    }
    return true
  }

  //return true if one is null the other is not null
  private static function nullCheckFailed<T>(thisObj : T, thatObj : T) : boolean {
    if ((thisObj == null and thatObj != null) or (thisObj != null and thatObj == null)) {
      return true
    }
    return false
  }

}