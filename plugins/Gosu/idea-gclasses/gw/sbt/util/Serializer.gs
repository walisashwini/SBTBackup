package gw.sbt.util

uses com.thoughtworks.xstream.XStream
uses gw.lang.reflect.TypeSystem
uses gw.sbt.model.SBTUpdate

class Serializer {

  static function toXML(o : Object) : String {
    var xstream = getXStreamInstance()
    return xstream.toXML(o)
  }

  static function fromXML(xml : String) : Object {
    var xstream = getXStreamInstance()
    return xstream.fromXML(xml)
  }

  reified static function makeCopy<T>(object : T) : T {
    return fromXML(toXML(object)) as T
  }

  private static var _xStreamInstance: XStream

  private static function getXStreamInstance() : XStream {
    if(_xStreamInstance == null) {
      _xStreamInstance = new XStream()
      //xstream.setMode(XStream.NO_REFERENCES)
      _xStreamInstance.alias("update", SBTUpdate)
      _xStreamInstance.registerConverter(new ClauseAttributeConverter())
      _xStreamInstance.registerConverter(new RatingAlgorithmConverter())
      _xStreamInstance.setClassLoader(TypeSystem.getGosuClassLoader().getActualLoader())
    }
    return _xStreamInstance
  }
}