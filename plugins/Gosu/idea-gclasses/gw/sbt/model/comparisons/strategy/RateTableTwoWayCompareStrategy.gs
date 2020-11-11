package gw.sbt.model.comparisons.strategy

uses gw.sbt.model.comparisons.TwoWayComparable
uses gw.sbt.model.rating.RateTableContent

class RateTableTwoWayCompareStrategy implements TwoWayCompareStrategy {

  override function applicable(comparable : TwoWayComparable) : boolean {
    return comparable.Source typeis RateTableContent or comparable.Target typeis RateTableContent
  }

  override function isAdd(comparable : TwoWayComparable) : boolean {
    if(comparable.Target == null) {
      return false
    } else if(comparable.Source == null){
      return true
    }
    return false
  }

  override function isRemove(comparable : TwoWayComparable) : boolean {
    if(comparable.Source == null) {
      return false
    } else if(comparable.Target == null){
      return true
    }
    return false
  }

  override function isChange(comparable : TwoWayComparable) : boolean {
    if (comparable.Source typeis RateTableContent and comparable.Target typeis RateTableContent) {
      return isContentDifferent(comparable.Source, comparable.Target)
    }
    return false
  }

  private function isContentDifferent(firstTable : RateTableContent, secondTable : RateTableContent): boolean {
    // Quick shortcut to determine any size difference
    if(firstTable.FactorRows.size() != secondTable.FactorRows.size()) {
      return true
    }
    // Algorithm to determine if there is new entry or different rate factor from either rate table.
    // Worst case asymptotic performance is O(n + m) where n and m is the number of rows in each table respectively.
    var paramValuesToFactors = new HashMap<String, String>()
    firstTable.FactorRows.each( \ factorRow -> {
      paramValuesToFactors.put(factorRow.ParameterValuesKey, factorRow.Rate)
    })

    for(factorRow in secondTable.FactorRows) {
      var factor = paramValuesToFactors.remove(factorRow.ParameterValuesKey)
      if(factor == null or factor != factorRow.Rate) {
        return true
      }
    }

    return paramValuesToFactors.size() > 0
  }

}