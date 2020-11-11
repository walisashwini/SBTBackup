package gw.sbt.util

uses com.thoughtworks.xstream.converters.Converter
uses com.thoughtworks.xstream.converters.MarshallingContext
uses com.thoughtworks.xstream.converters.UnmarshallingContext
uses com.thoughtworks.xstream.io.HierarchicalStreamReader
uses com.thoughtworks.xstream.io.HierarchicalStreamWriter
uses gw.sbt.model.Intent
uses gw.sbt.model.clause.ClauseAttribute

uses java.lang.Class

class ClauseAttributeConverter implements Converter {
  override function marshal(source : Object, writer : HierarchicalStreamWriter, context : MarshallingContext) {
    var attribute = source as ClauseAttribute
    var nameAndIntent = attribute.Intent == null ? attribute.Name : attribute.Name + "." + attribute.Intent

    writeNode(writer, "name", nameAndIntent)
    writeNode(writer, "value", Serializer.toXML(attribute.Value))
  }

  override function unmarshal(reader : HierarchicalStreamReader, context : UnmarshallingContext) : Object {
    var nameAndIntent = readNode(reader).split("\\.")
    var name = nameAndIntent[0]
    var intent = nameAndIntent.length > 1 ? Intent.fromString(nameAndIntent[1]) : null
    var value = Serializer.fromXML(readNode(reader))
    return ClauseAttribute.with(name, value, intent)
  }

  override function canConvert(type : Class) : boolean {
    return type == ClauseAttribute
  }

  private function writeNode(writer : HierarchicalStreamWriter, name : String, value : String) {
    writer.startNode(name)
    writer.setValue(value)
    writer.endNode()
  }

  private function readNode(reader : HierarchicalStreamReader) : String {
    reader.moveDown()
    var value = reader.getValue()
    reader.moveUp()
    return value
  }
}