package gw.sbt.artifacts.typelists

uses gw.sbt.loader.TypeListHelper
uses gw.xml.XmlElement

class TypeCode extends TypeListChild implements Comparable<TypeCode>{

  var _categoryList: List<TypeCodeCategory> as CategoryList = {}

  construct(content: XmlElement, existedInExtension: boolean = false) {
    super(content, existedInExtension)
    init()
  }

  private function init() {
    _categoryList = getChildren("category").map(\category -> new TypeCodeCategory(category))
  }

  property get Code(): String {
    return getAttributeValue("code")
  }

  property get Description(): String {
    return getAttributeValue("desc")
  }

  property get Priority(): String {
    return getAttributeValue("priority")
  }

  property get Retired(): String {
    return getAttributeValue("retired")
  }

  function getCategory(code: String): TypeCodeCategory {
    return _categoryList.firstWhere(\category -> category.Code == code)
  }

  function addCategory(category: TypeCodeCategory) {
    _content.$Children.add(category._content)
    _categoryList.add(category)
  }

  override reified function getChildrenList<T extends Comparable>() : List<T> {
    return _categoryList.cast(T)
  }

  override function equals(other : Object) : boolean {
    return other typeis TypeCode
        and Code == other.Code
        and Description == other.Description
        and Priority == other.Priority
        and Retired == other.Retired
        and TypeListHelper.isEqualList(CategoryList, other.CategoryList)
  }

  override function hashCode() : int {
    return Objects.hash({Code, Description, Priority, Retired})
  }

  override function compareTo(other : TypeCode) : int {
    return this.Code.compareTo(other.Code)
  }

}