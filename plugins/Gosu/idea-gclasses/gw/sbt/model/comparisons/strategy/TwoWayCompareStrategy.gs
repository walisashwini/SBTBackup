package gw.sbt.model.comparisons.strategy

uses gw.sbt.model.comparisons.TwoWayComparable

interface TwoWayCompareStrategy {
  function applicable(comparable : TwoWayComparable) : boolean

  function isAdd(comparable : TwoWayComparable) : boolean

  function isRemove(comparable : TwoWayComparable) : boolean

  function isChange(comparable : TwoWayComparable) : boolean
}