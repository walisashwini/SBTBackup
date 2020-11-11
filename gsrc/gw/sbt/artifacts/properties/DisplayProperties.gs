package gw.sbt.artifacts.properties

uses com.guidewire.commons.util.PropertiesFormatter
uses gw.sbt.artifacts.ContentWrapper

uses java.io.ByteArrayInputStream
uses java.io.ByteArrayOutputStream
uses java.io.PrintWriter
uses java.util.ArrayList
uses java.util.Collections
uses java.util.Map
uses java.util.Properties
uses java.util.Set
uses java.nio.charset.StandardCharsets
uses java.io.InputStreamReader

class DisplayProperties implements ContentWrapper {

  var _content : Properties

  construct() {
    _content = new Properties()
  }

  construct(content : byte[]) {
    this()
    basicAddProperties(content)
  }

  static function fromMap(map : Map<String, String>) : DisplayProperties {
    var result = new DisplayProperties()
    map.eachKeyAndValue(\ name, value -> result.assignProperty(name, value))
    return result
  }

  private function basicAddProperties(properties: byte[]) {
    _content.load(new InputStreamReader(new ByteArrayInputStream(properties),  StandardCharsets.UTF_8))
  }

  function addProperties(properties: byte[]) {
    basicAddProperties(properties)
  }

  function assignProperties(properties : DisplayProperties) {
    _content.putAll(properties._content)
  }

  function assignProperty(name : String, value : String) {
    _content.put(name, value)
  }

  override function equals(object : Object) : boolean {
    return object typeis DisplayProperties and _content == object._content
  }

  override function hashCode() : int {
    return _content.hashCode()
  }

  /*
   * This follows the same approach as GW Platform for writing out display keys to the .properties file.
   * This method supports writing out unicode characters.
   */
  override property get Bytes(): byte[] {
    var outputStream = new ByteArrayOutputStream()
    var orderedKeys = new ArrayList<String>(_content.size());
    orderedKeys.addAll(_content.stringPropertyNames());
    Collections.sort(orderedKeys);

    var formatter = PropertiesFormatter.DISPLAY_KEYS;
    using(var pw = new PrintWriter(outputStream)) {   
	  for (key in orderedKeys) {
        formatter.writeProperty(pw, key, _content.getProperty(key));
      }
	  }

    return outputStream.toByteArray()
  }

  function getProperty(name : String) : String {
    return _content.getProperty(name)
  }

  function containsKey(name : String) : boolean {
    return _content.containsKey(name)
  }

  property get PropertyNames() : Set<String> {
    return _content.stringPropertyNames()
  }
}