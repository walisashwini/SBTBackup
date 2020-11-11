package gw.sbt.loader

uses gw.sbt.artifacts.typelists.TypeCode
uses gw.sbt.artifacts.typelists.TypeFilter
uses gw.sbt.artifacts.typelists.TypeList
uses gw.sbt.artifacts.typelists.TypeListChild
uses gw.sbt.util.LoadHelper
uses org.slf4j.LoggerFactory

class TypeListHelper extends LoadHelper {

  // if there is any difference, return true to be reported as conflict
  static function hasAnyConflict(updateTypeList: TypeList, currentTypeList: TypeList): boolean {
    if (updateTypeList == null or currentTypeList == null) {
      return false
    }
    var hasAnyConflict = not updateTypeList.equals(currentTypeList)
    if (hasAnyConflict) {
      LoggerFactory.getLogger("PCA").warn("The TypeList: ${updateTypeList.Name} already exists. Manual review of this TypeList is recommended")
    }
    return hasAnyConflict
  }

  static function isLoadOpsNeeded(typeListName : String, updateChild : TypeListChild, currentChild : TypeListChild) : boolean {
    if (updateChild == null) {
      return false
    }
    if (currentChild == null) { // new type code/filter introduced in the update package.
      return true
    }
    if (not updateChild.equals(currentChild)) {
      var childrenListEquals = LoadHelper.isEqualList(updateChild.getChildrenList(), currentChild.getChildrenList())
      if (childrenListEquals) {
        if (updateChild typeis TypeCode) {
          LoggerFactory.getLogger("PCA").warn("The TypeCode: ${updateChild.Code} in the TypeList ${typeListName} already exists. Manual review of this TypeCode is recommended")
        } else if (updateChild typeis TypeFilter) {
          LoggerFactory.getLogger("PCA").warn("The TypeFilter: ${updateChild.Name} in the TypeList ${typeListName} already exists. Manual review of this TypeFilter is recommended")
        }
        return false
      } else {
        return true
      }
    }
    return false
  }

  //add missing typecode into currentTypeList
  //add missing category into currentTypeList for existing typecode
  static function addMissingTypeCodeAndCategory(updateTypeList : TypeList, currentTypeList : TypeList) {
    updateTypeList.TypeCodes.each(\typeCodeInUpdate -> {
      var typeCodeInCurrent = currentTypeList.getTypeCode(typeCodeInUpdate.Code)
      if (typeCodeInCurrent == null) { // add missing typecode
        currentTypeList.addTypeCode(typeCodeInUpdate)
      } else { // add missing 'category'
        typeCodeInUpdate.CategoryList.each(\categoryInUpdate -> {
          var categoryInCurrent = typeCodeInCurrent.getCategory(categoryInUpdate.Code)
          if (categoryInCurrent == null) {
            typeCodeInCurrent.addCategory(categoryInUpdate)
          }
        })
      }
    })
  }

  //add missing typefilter into currentTypeList
  //add missing include into currentTypeList for existing typecode
  static function addMissingTypeFilterAndInclude(updateTypeList : TypeList, currentTypeList : TypeList) {
    updateTypeList.TypeFilters.each(\typeFilterInUpdate -> {
      var typeFilterInCurrent = currentTypeList.getTypeFilter(typeFilterInUpdate.Name)
      if (typeFilterInCurrent == null) { // add missing typefilter
        currentTypeList.addTypeFilter(typeFilterInUpdate)
      } else { // add missing 'include'
        typeFilterInUpdate.IncludeList.each(\includeInUpdate -> {
          var includeInCurrent = typeFilterInCurrent.getInclude(includeInUpdate.Code)
          if (includeInCurrent == null) {
            typeFilterInCurrent.addInclude(includeInUpdate)
          }
        })
      }
    })
  }
}