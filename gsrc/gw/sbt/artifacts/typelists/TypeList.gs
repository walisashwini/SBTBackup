package gw.sbt.artifacts.typelists

uses gw.sbt.artifacts.XmlContent
uses gw.sbt.loader.TypeListHelper

uses java.util.List

class TypeList extends XmlContent {

  protected var _fileNameWithExtension : String as FileNameWithExtension // file name with extension (.tti, ttx)
  protected var _fileName : String as FileName // file name without extension (.tti, ttx)
  protected var _typeCodeList : List<TypeCode>
  protected var _typeFilterList : List<TypeFilter>

  construct(fileNameWithExtension : String, content : byte[]) {
    super(content)
    _fileNameWithExtension = fileNameWithExtension
    _fileName = fileNameWithExtension.substring(0, fileNameWithExtension.lastIndexOf("."))
  }

  property get Name() : String {
    return getAttributeValue("name")
  }

  property get Description() : String {
    return getAttributeValue("desc")
  }

  property get TypeCodes() : List<TypeCode> {
    if (_typeCodeList == null) {
      _typeCodeList = getChildren("typecode").map(\typeCode -> new TypeCode(typeCode, false))
    }
    return _typeCodeList?:{}
  }

  property get TypeFilters() : List<TypeFilter> {
    if (_typeFilterList == null) {
      _typeFilterList = getChildren("typefilter").map(\typeFilter -> new TypeFilter(typeFilter, false))
    }
    return _typeFilterList?:{}
  }

  function getTypeCode(code : String) : TypeCode {
    return TypeCodes.firstWhere(\typeCode -> typeCode.Code == code)
  }

  function getTypeFilter(name : String) : TypeFilter {
    return TypeFilters.firstWhere(\typeFilter -> typeFilter.Name == name)
  }

  function addTypeCode(typeCode : TypeCode) {
    _content.$Children.add(typeCode._content)
    TypeCodes.add(typeCode)
  }

  function addTypeFilter(typeFilter : TypeFilter) {
    _content.$Children.add(typeFilter._content)
    TypeFilters.add(typeFilter)
  }

  override function equals(other : Object) : boolean {
    return other typeis TypeList
        and Name == other.Name
        and Description == other.Description
        and TypeListHelper.isEqualList(TypeCodes, other.TypeCodes)
        and TypeListHelper.isEqualList(TypeFilters, other.TypeFilters)
  }

  override function hashCode() : int {
    return Objects.hash({Name, Description})
  }

}