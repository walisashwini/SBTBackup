package gw.sbt.model

uses java.lang.Double
uses java.lang.NumberFormatException
uses java.util.Comparator

class TabularRowDataComparator implements Comparator<TabularRowData> {
  override function compare(thisRow : TabularRowData, thatRow : TabularRowData) : int {
    var compareResult = 0

    var thatValues = thatRow.SequencedRowValues
    thisRow.SequencedRowValues.eachWithIndex(\thisColumnValue, index -> {
      if (compareResult == 0) {
        if (index < thatValues.Count) {
          compareResult = compareColumnValue(thisColumnValue, thatValues.get(index))
        }
      }
    })

    return compareResult
  }

  private function compareColumnValue(thisValue : String, thatValue : String) : int {
    if (thisValue == thatValue) {
      return 0
    } else if (thisValue == null) {
      return -1
    } else if (thatValue == null) {
      return 1
    }

    var thisColumnNumeric = toDouble(thisValue)
    var thatColumnNumeric = toDouble(thatValue)

    if (thisColumnNumeric != null && thatColumnNumeric != null) {
      return thisColumnNumeric.compareTo(thatColumnNumeric)
    }

    return thisValue.compareToIgnoreCase(thatValue)
  }

  private function toDouble(str : String) : Double {
    try {
      if (str.endsWith("%")) {
        str = str.replaceAll("%", "")
      }
      return Double.parseDouble(str)
    } catch (e : NumberFormatException) {
      return null
    }
  }
}