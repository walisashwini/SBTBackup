package gw.sbt.util


class LoadHelper {

  static reified function createUnion<T>(elementsList : List<List<T>>) : List<T> {
    var result : List<T> = {}
    var listNumber= 0
    elementsList.where(\elementList -> elementList.HasElements)
        .each(\elementList -> {
          elementList?.each(\element -> {
            if (not result.contains(element)) {
              result.add(element)
            }
          })
          listNumber++
        })
    return result
  }

  //Compare 2 lists, elements in the list have to implement comparable interface
  static function isEqualList<T extends Comparable>(elementsList1: List<T>, elementsList2: List<T>): boolean {
    if (elementsList1 == elementsList2) {
      return true
    }
    if (elementsList1 == null || elementsList2 == null || elementsList1.size() != elementsList2.size()) {
      return false
    }
    Collections.sort(elementsList1)
    Collections.sort(elementsList2)
    return elementsList1 == elementsList2
  }
}