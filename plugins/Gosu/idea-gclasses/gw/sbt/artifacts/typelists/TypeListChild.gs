package gw.sbt.artifacts.typelists

uses gw.sbt.artifacts.XmlContent
uses gw.xml.XmlElement

//base class for all children for TypeList, like TypeCode, TypeFilter.
abstract class TypeListChild extends XmlContent {

  protected var _existedInExtension: boolean as ExistedInExtension = false

  construct(content : XmlElement, existedInExtension: boolean) {
    super(content)
    _existedInExtension = existedInExtension
  }

  abstract reified function getChildrenList<T extends Comparable>() : List<T>
}