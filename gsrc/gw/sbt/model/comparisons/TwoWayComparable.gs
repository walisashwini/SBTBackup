package gw.sbt.model.comparisons

uses java.util.List

interface TwoWayComparable {
  property get Parent() : TwoWayComparable
  property get Children() : List<TwoWayComparable>
  property get Source() : Object
  property get Target() : Object
}