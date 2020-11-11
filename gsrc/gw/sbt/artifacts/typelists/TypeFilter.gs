package gw.sbt.artifacts.typelists

uses gw.sbt.loader.TypeListHelper
uses gw.xml.XmlElement

class TypeFilter extends TypeListChild implements Comparable<TypeFilter>{

  var _includeList: List<TypeFilterInclude> as IncludeList = {}

  construct(content: XmlElement, existedInExtension: boolean = false) {
    super(content, existedInExtension)
    init()
  }

  private function init() {
    _includeList = getChildren("include").map(\category -> new TypeFilterInclude(category))
  }

  property get Name(): String {
    return getAttributeValue("name")
  }

  property get Description(): String {
    return getAttributeValue("desc")
  }

  function getInclude(code: String): TypeFilterInclude {
    return _includeList.firstWhere(\include -> include.Code == code)
  }

  function addInclude(include: TypeFilterInclude) {
    _content.$Children.add(include._content)
    _includeList.add(include)
  }

  override reified function getChildrenList<T extends Comparable>() : List<T> {
    return _includeList.cast(T)
  }

  override function equals(other : Object) : boolean {
    return other typeis TypeFilter
        and Name == other.Name
        and Description == other.Description
        and TypeListHelper.isEqualList(IncludeList, other.IncludeList)
  }

  override function hashCode() : int {
    return Objects.hash({Name, Description})
  }

  override function compareTo(other : TypeFilter) : int {
    return this.Name.compareTo(other.Name)
  }

}