package gw.sbt.artifacts.typelists

uses gw.sbt.loader.TypeListHelper

class TypeListExtension extends TypeList {

  construct(fileName : String, content : byte[]) {
    super(fileName, content)
  }

  override property get TypeCodes() : List<TypeCode> {
    if (_typeCodeList == null) {
      _typeCodeList = getChildren("typecode").map(\typeCode -> new TypeCode(typeCode, true))
    }
    return _typeCodeList?:{}
  }

  override property get TypeFilters() : List<TypeFilter> {
    if (_typeFilterList == null) {
      _typeFilterList = getChildren("typefilter").map(\typeFilter -> new TypeFilter(typeFilter, true))
    }
    return _typeFilterList?:{}
  }

  override function equals(other : Object) : boolean {
    return other typeis TypeListExtension
        and Name == other.Name
        and Description == other.Description
        and TypeListHelper.isEqualList(TypeCodes, other.TypeCodes)
        and TypeListHelper.isEqualList(TypeFilters, other.TypeFilters)
  }
}